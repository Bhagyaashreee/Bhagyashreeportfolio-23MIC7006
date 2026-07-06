"use client";
import { useState, useEffect } from "react";
import Magnetic from "../animations/Magnetic";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
      <a href="#" className="nav-logo">Bhagyashree</a>
      <div className="nav-links">
        <a href="#about">Story</a>
        <a href="#experience">Journey</a>
        <a href="#tools">Tools</a>
        <a href="#projects">Projects</a>
      </div>
      <Magnetic>
        <a href="#contact" className="btn btn-primary nav-cta">Let's Connect</a>
      </Magnetic>
    </nav>
  );
}
