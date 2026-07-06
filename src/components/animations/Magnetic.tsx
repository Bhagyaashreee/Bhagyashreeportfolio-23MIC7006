"use client";
import { useRef, useEffect } from "react";

export default function Magnetic({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrameId: number;
    let isHovering = false;

    const render = () => {
      // Lerp (spring interpolation)
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      
      node.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      if (isHovering || Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = node.getBoundingClientRect();
      targetX = (clientX - (left + width / 2)) * 0.3;
      targetY = (clientY - (top + height / 2)) * 0.3;
      if (!isHovering) {
        isHovering = true;
        render();
      }
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
      isHovering = false;
      render();
    };

    node.addEventListener("mousemove", handleMouseMove);
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      node.removeEventListener("mousemove", handleMouseMove);
      node.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={ref} style={{ display: "inline-block", willChange: "transform" }}>
      {children}
    </div>
  );
}
