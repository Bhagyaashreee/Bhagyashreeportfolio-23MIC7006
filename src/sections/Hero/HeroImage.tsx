"use client";
import { useRef } from "react";

export default function HeroImage() {
  const frameRef = useRef<HTMLDivElement>(null);

  return (
    <div className="portrait-frame" ref={frameRef} data-cursor="image">
      <img 
        src="/portrait.png" 
        alt="Bhagyashree Satpathy" 
      />
    </div>
  );
}
