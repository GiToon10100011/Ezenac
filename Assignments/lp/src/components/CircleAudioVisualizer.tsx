import React, { useRef, useEffect, useState, useContext } from "react";
import MusicCard from "./MusicCard";
import styled, { CSSProperties } from "styled-components";
import { IaudioPlayContext } from "./MusicList";

interface CircularAudioVisualizerProps {
  audioUrl: string;
  artistName: string;
  songName: string;
  albumArt: string;
  rotate: CSSProperties;
}

export const audioPlayContext = React.createContext<IaudioPlayContext>({
  isPlaying: false,
  setIsPlaying: () => {}, // A no-op function as a default
});

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  /* overflow: hidden; */
  transform-origin: center bottom;
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
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);

  const { isPlaying, setIsPlaying } = useContext(audioPlayContext);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    //Context for processing audio, webkit is for Safari and other older versions
    const context = new (window.AudioContext ||
      (window as any).webkitAudioContext)();

    //AnalyzerNode that provides real time frequenfcy and time domain data
    const analyserNode = context.createAnalyser();
    analyserNode.fftSize = 2048; // Increased FFT size for smoother bars. Fast Fourier Transform

    //connects the audio element to the AudioContext created above
    const source = context.createMediaElementSource(audio);
    source.connect(analyserNode);
    //connects the analyzer node to the audio output so the audio can be heard while its being analyzed
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

    //half of the FFT (1024)
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 80;

    const drawVisualizer = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw visualizer
      analyser.getByteFrequencyData(dataArray);

      // Adjust slice angle for full circular distribution
      const sliceAngle = (Math.PI * 3.05) / bufferLength; // Full 360 degrees

      for (let i = 0; i < bufferLength; i++) {
        const value = dataArray[i];
        const percent = value / 512;

        // Logarithmic scaling
        const logScale = Math.log10(1 + i); // Logarithmic scale for better distribution
        const barHeight = percent * logScale * 100; // Height scaled logarithmically

        const theta = i * sliceAngle;

        // Calculate start and end points
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
        width={900}
        height={900}
        onClick={togglePlayPause}
        style={{ cursor: "pointer" }}
      />

      <audio ref={audioRef} src={audioUrl} />
    </Wrapper>
  );
};

export default CircularAudioVisualizer;
