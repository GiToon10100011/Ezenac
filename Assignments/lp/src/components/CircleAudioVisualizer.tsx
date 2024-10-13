import React, { useRef, useEffect, useState, Dispatch } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

interface CircularAudioVisualizerProps {
  audioUrl: string;
  artistName: string;
  songName: string;
  albumArt: string;
  isAudioPlaying: boolean;
  setIsAudioPlaying: Dispatch<React.SetStateAction<boolean>>;
  fastForward: boolean;
  index: number;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const CircularAudioVisualizer: React.FC<CircularAudioVisualizerProps> = ({
  audioUrl,
  isAudioPlaying,
  setIsAudioPlaying,
  fastForward,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);

  const currentIdx = useSearchParams()[0].get("index");

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
  }, [analyser]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !audioContext) return;

    // if (Number(currentIdx) === index) {
    //   setIsAudioPlaying(true);
    //   audio.play();
    //   audioContext.resume();
    // } else {
    //   audio.pause();
    // }

    if (isAudioPlaying) {
      audio.play();
      audioContext.resume();
      if (fastForward) audio.playbackRate = 1.2;
      else audio.playbackRate = 1;
    } else {
      audio.pause();
    }
  }, [isAudioPlaying, audioContext, fastForward, currentIdx]);

  const onHandleAudioEnded = () => {
    setIsAudioPlaying(false);
  };

  return (
    <Wrapper>
      <canvas ref={canvasRef} width={900} height={900} />
      <audio ref={audioRef} src={audioUrl} onEnded={onHandleAudioEnded} />
    </Wrapper>
  );
};

export default CircularAudioVisualizer;
