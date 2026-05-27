"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GradientMeshProps {
  className?: string;
  intensity?: number;
}

export function GradientMesh({ className, intensity = 0.05 }: GradientMeshProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    let t = 0;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    function draw() {
      if (!canvas || !ctx) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      const blobs = [
        { x: 0.3 + 0.12 * Math.sin(t * 0.4), y: 0.4 + 0.1 * Math.cos(t * 0.3), r: 0.55, color: `rgba(124,92,255,${intensity})` },
        { x: 0.72 + 0.1 * Math.cos(t * 0.35), y: 0.3 + 0.08 * Math.sin(t * 0.45), r: 0.45, color: `rgba(77,212,255,${intensity * 0.7})` },
        { x: 0.5 + 0.08 * Math.sin(t * 0.25), y: 0.72 + 0.1 * Math.cos(t * 0.5), r: 0.4, color: `rgba(124,92,255,${intensity * 0.5})` },
      ];
      blobs.forEach(({ x, y, r, color }) => {
        const grad = ctx.createRadialGradient(x * w, y * h, 0, x * w, y * h, r * Math.max(w, h));
        grad.addColorStop(0, color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      });
      t += 0.005;
      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, [intensity]);

  return <canvas ref={canvasRef} className={cn("pointer-events-none", className)} aria-hidden="true" />;
}
