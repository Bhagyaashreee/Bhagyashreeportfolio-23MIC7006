"use client";
import React, { useRef } from "react";
import Reveal from "@/components/animations/Reveal";
import Magnetic from "@/components/animations/Magnetic";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  imageText: string;
  delay?: number;
}

export default function ProjectCard({ title, description, tech, imageText, delay = 0 }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <Reveal delay={delay} className="proj-card" data-cursor="project">
      <div 
        ref={cardRef} 
        className="proj-card-inner" 
        onMouseMove={handleMouseMove}
      >
        <div className="card-spotlight"></div>
        <div className="card-visual">
          <img 
            src={`data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'%3E%3Crect width='800' height='500' fill='%231B0B10'/%3E%3Ctext x='400' y='260' font-family='serif' font-size='24' fill='%23F8F7F4' text-anchor='middle' letter-spacing='2'%3E${imageText}%3C/text%3E%3C/svg%3E`} 
            alt={title} 
          />
        </div>
        <div className="card-content">
          <h3 className="proj-title">{title}</h3>
          <p className="proj-desc">{description}</p>
          <div className="proj-tech">
            {tech.map((t, i) => <span key={i}>{t}</span>)}
          </div>
          <div className="proj-actions">
            <Magnetic><a href="#" className="btn btn-primary btn-sm" data-cursor="button">Live Demo</a></Magnetic>
            <Magnetic><a href="#" className="btn btn-glass btn-sm" data-cursor="button">GitHub</a></Magnetic>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
