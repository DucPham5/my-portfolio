// components/dotGrid.jsx
import { useEffect, useRef } from "react";

export default function DotGrid() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const SPACING = 28;
    const RADIUS = 1.5;
    const GLOW_RADIUS = 120;
    const BASE_COLOR = "rgba(255,255,255,0.15)";

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / SPACING);
      const rows = Math.ceil(canvas.height / SPACING);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * SPACING;
          const y = j * SPACING;

          const dx = mouse.current.x - x;
          const dy = mouse.current.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const glow = Math.max(0, 1 - dist / GLOW_RADIUS);

          ctx.beginPath();
          ctx.arc(x, y, RADIUS + glow * 2.5, 0, Math.PI * 2);
          ctx.fillStyle =
            glow > 0.01
              ? `rgba(99, 179, 237, ${0.15 + glow * 0.85})`
              : BASE_COLOR;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
