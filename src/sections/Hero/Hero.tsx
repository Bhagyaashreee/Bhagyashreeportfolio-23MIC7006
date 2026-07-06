import "./Hero.css";
import Reveal from "@/components/animations/Reveal";
import Magnetic from "@/components/animations/Magnetic";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section id="hero" className="hero container">
      <Reveal className="hero-left">
        <div className="subtitle">Machine Learning • Cybersecurity • Full Stack</div>
        <h1 className="hero-title">
          Bhagyashree<br />
          <span className="gold">Satpathy</span>
        </h1>
        <h3 className="hero-role">Software Engineer & Cybersecurity Enthusiast</h3>
        <p className="hero-desc">
          I'm an Integrated M.Tech Computer Science student at VIT-AP University. 
          I build secure, intelligent applications and scalable software that solves real-world problems.
        </p>
        <div className="hero-actions">
          <Magnetic>
            <a href="#projects" className="btn btn-primary">View Projects</a>
          </Magnetic>
          <Magnetic>
            <a href="#about" className="btn btn-glass">About Me</a>
          </Magnetic>
        </div>
      </Reveal>
      <Reveal delay={0.2} className="hero-right">
        <HeroImage />
      </Reveal>
    </section>
  );
}
