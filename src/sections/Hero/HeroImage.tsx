"use client";
import { useEffect, useRef } from "react";

export default function HeroImage() {
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrameId: number;

    const render = () => {
      currentX += (targetX - currentX) * 0.05; // Lerp smoothing
      currentY += (targetY - currentY) * 0.05;

      if (frameRef.current) {
        frameRef.current.style.transform = `rotateY(${currentX}deg) rotateX(${currentY}deg)`;
      }
      animationFrameId = requestAnimationFrame(render);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (window.innerWidth / 2 - e.pageX) / 30;
      targetY = (window.innerHeight / 2 - e.pageY) / 30;
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="portrait-frame" ref={frameRef} data-cursor="image" style={{ willChange: "transform" }}>
      <img 
        src="/portrait.png" 
        alt="Bhagyashree Satpathy" 
      />
    </div>
  );
}
