"use client";
import { useEffect, useRef } from "react";

export default function HeroImage() {
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!frameRef.current) return;
      const x = (window.innerWidth / 2 - e.pageX) / 25;
      const y = (window.innerHeight / 2 - e.pageY) / 25;
      frameRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="portrait-frame" ref={frameRef}>
      <img 
        src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 800'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23A61E3B'/%3E%3Cstop offset='100%25' stop-color='%231B0B10'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='800' fill='url(%23grad)'/%3E%3Ccircle cx='300' cy='400' r='180' fill='none' stroke='%23D6B56E' stroke-width='2' opacity='0.3'/%3E%3Ctext x='300' y='410' font-family='serif' font-size='20' font-style='italic' fill='%23F8F7F4' text-anchor='middle' letter-spacing='6'%3EPORTRAIT%3C/text%3E%3C/svg%3E" 
        alt="Bhagyashree Satpathy" 
      />
    </div>
  );
}
