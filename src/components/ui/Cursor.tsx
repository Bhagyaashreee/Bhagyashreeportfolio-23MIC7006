"use client";
import { useEffect, useRef, useState } from "react";
import "../../styles/cursor.css";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [hoverState, setHoverState] = useState<string>("default");

  // Mouse positions
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device has touch capability, disable cursor if so
    if (window.matchMedia("(pointer: coarse)").matches) {
      document.body.classList.add("touch-device");
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check hover states
      const target = e.target as HTMLElement;
      const cursorTarget = target.closest("[data-cursor]");
      
      if (cursorTarget) {
        const type = cursorTarget.getAttribute("data-cursor") || "default";
        setHoverState(type);
      } else {
        setHoverState("default");
      }
    };

    let animationFrameId: number;
    const render = () => {
      // Lerp for the outer ring (smooth follow)
      ring.current.x += (mouse.current.x - ring.current.x) * 0.15;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`cursor-wrapper state-${hoverState}`}>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-ring" ref={ringRef}>
        {hoverState === "link" && <span className="cursor-text">Open</span>}
      </div>
    </div>
  );
}
