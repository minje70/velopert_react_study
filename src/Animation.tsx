import React, { useEffect, useRef } from "react";

export default function Animation() {
  const destCanvas = useRef<HTMLCanvasElement>(null);
  const srcCanvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = srcCanvas.current;
    if (canvas === null) {
      return;
    }
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");

      if (ctx === null) return;
      ctx.fillStyle = "rgb(200,0,0)";
      ctx.fillRect(10, 10, 50, 50);

      ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
      ctx.fillRect(30, 30, 50, 50);
    }
  }, []);
  const callback = () => {
    const ctx = destCanvas.current?.getContext("2d");
    if (ctx) {
      if (srcCanvas.current) {
        ctx.drawImage(srcCanvas.current, 15, 15, 50, 50, 0, 0, 50, 50);
      }
    }
    requestAnimationFrame(callback);
  };
  requestAnimationFrame(callback);

  console.log("끝");
  return (
    <>
      소스 캔버스
      <canvas ref={srcCanvas} width="100" height="100"></canvas>
      dest 캔버스
      <canvas ref={destCanvas} width="100" height="100"></canvas>
    </>
  );
}
