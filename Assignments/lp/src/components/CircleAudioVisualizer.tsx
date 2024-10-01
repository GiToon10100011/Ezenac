import React, { useRef, useEffect, useState } from "react";
import MusicCard from "./MusicCard";
import styled, { CSSProperties } from "styled-components";

interface CircularAudioVisualizerProps {
  audioUrl: string;
  artistName: string;
  songName: string;
  albumArt: string;
  rotate: CSSProperties;
}

const Wrapper = styled.div`
  position: relative;
  width: 740px;
  height: 740px;
  overflow: hidden;
`;

const CircularAudioVisualizer: React.FC<CircularAudioVisualizerProps> = ({
  audioUrl,
  artistName,
  songName,
  albumArt,
  rotate,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const context = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
    const analyserNode = context.createAnalyser();
    analyserNode.fftSize = 1024; // Increased FFT size for smoother bars

    const source = context.createMediaElementSource(audio);
    source.connect(analyserNode);
    analyserNode.connect(context.destination);

    setAudioContext(context);
    setAnalyser(analyserNode);

    return () => {
      context.close();
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const audio = audioRef.current;
    if (!canvas || !audio || !analyser) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 30;

    const drawVisualizer = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw album art
      const img = new Image();
      img.src = albumArt;
      img.onload = () => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius - 30, 0, 2 * Math.PI);
        ctx.clip();
        ctx.drawImage(
          img,
          centerX - radius + 30,
          centerY - radius + 30,
          (radius - 30) * 2,
          (radius - 30) * 2
        );
        ctx.restore();
      };

      // Draw visualizer
      analyser.getByteFrequencyData(dataArray);

      // Adjust slice angle for full circular distribution
      const sliceAngle = (Math.PI * 3.05) / bufferLength; // Full 360 degrees

      for (let i = 0; i < bufferLength; i++) {
        const value = dataArray[i];
        const percent = value / 255;

        // Apply logarithmic scaling for smoother bar height distribution
        const barHeight = Math.log10(1 + percent) * 450;

        const theta = i * sliceAngle;

        // Calculate start and end points for bars
        const x1 = centerX + Math.cos(theta) * (radius - 10);
        const y1 = centerY + Math.sin(theta) * (radius - 10);
        const x2 = centerX + Math.cos(theta) * (radius - 10 + barHeight);
        const y2 = centerY + Math.sin(theta) * (radius - 10 + barHeight);

        // Create color variation based on frequency and amplitude
        const hue = 35; // Base hue from the given HSL color
        const saturation = 50 + percent * 25; // Vary saturation based on amplitude
        const lightness = 30 + (i / bufferLength) * 40; // Vary lightness based on frequency
        ctx.strokeStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // Draw artist and song name
      ctx.fillStyle = "#ffffff";
      ctx.font = "20px Arial";
      ctx.textAlign = "center";
      ctx.fillText(artistName, centerX, height - 60);
      ctx.font = "16px Arial";
      ctx.fillText(songName, centerX, height - 35);

      requestAnimationFrame(drawVisualizer);
    };

    drawVisualizer();
  }, [analyser, isPlaying, artistName, songName, albumArt]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio || !audioContext) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
      audioContext.resume();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Wrapper style={rotate}>
      <canvas
        ref={canvasRef}
        width={740}
        height={740}
        onClick={togglePlayPause}
        style={{ cursor: "pointer" }}
      />

      <audio ref={audioRef} src={audioUrl} />
    </Wrapper>
  );
};

export default CircularAudioVisualizer;
