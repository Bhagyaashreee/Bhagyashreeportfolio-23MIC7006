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
        <a href="#about" data-cursor="link">Story</a>
        <a href="#experience" data-cursor="link">Journey</a>
        <a href="#tools" data-cursor="link">Tools</a>
        <a href="#projects" data-cursor="link">Projects</a>
      </div>
      <Magnetic>
        <a href="#contact" className="btn btn-primary nav-cta" data-cursor="button">Let's Connect</a>
      </Magnetic>
    </nav>
  );
}
