import React, { useRef, useEffect, useState } from "react";

interface CircularAudioVisualizerProps {
  audioUrl: string;
  artistName: string;
  songName: string;
  albumArt: string;
}

const CircularAudioVisualizer: React.FC<CircularAudioVisualizerProps> = ({
  audioUrl,
  artistName,
  songName,
  albumArt,
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
    analyserNode.fftSize = 256; // fftSize defines how much frequency data you get back

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
    const radius = Math.min(width, height) / 2 - 10;

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

      // Adjust slice angle for smoother distribution
      const sliceAngle = (Math.PI * 2) / bufferLength; // Make sure we cover the full circle

      for (let i = 0; i < bufferLength; i++) {
        const value = dataArray[i];
        const percent = value / 255;
        const barHeight = percent * 60; // Adjust bar height

        const theta = i * sliceAngle;

        // Calculate start and end points for bars
        const x1 = centerX + Math.cos(theta) * (radius - 10);
        const y1 = centerY + Math.sin(theta) * (radius - 10);
        const x2 = centerX + Math.cos(theta) * (radius - 10 + barHeight);
        const y2 = centerY + Math.sin(theta) * (radius - 10 + barHeight);

        ctx.strokeStyle = `hsl(30, 100%, ${percent * 50 + 50}%)`; // Orange hue
        ctx.lineWidth = 6; // Thicker bars

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // Draw play/pause button
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.beginPath();
      ctx.arc(centerX, centerY, 30, 0, 2 * Math.PI);
      ctx.fill();

      ctx.fillStyle = "#ffffff";
      if (isPlaying) {
        ctx.fillRect(centerX - 15, centerY - 15, 10, 30);
        ctx.fillRect(centerX + 5, centerY - 15, 10, 30);
      } else {
        ctx.beginPath();
        ctx.moveTo(centerX - 10, centerY - 15);
        ctx.lineTo(centerX - 10, centerY + 15);
        ctx.lineTo(centerX + 15, centerY);
        ctx.closePath();
        ctx.fill();
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
    <div style={{ position: "relative", width: "500px", height: "500px" }}>
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        onClick={togglePlayPause}
        style={{ cursor: "pointer" }}
      />
      <audio ref={audioRef} src={audioUrl} />
    </div>
  );
};

export default CircularAudioVisualizer;
