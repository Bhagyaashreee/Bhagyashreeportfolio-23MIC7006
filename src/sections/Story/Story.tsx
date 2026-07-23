import "./Story.css";
import Reveal from "@/components/animations/Reveal";

export default function Story() {
  return (
    <section id="about" className="about container">
      <Reveal delay={0.2} className="about-content">
        <div className="about-grid">
          <div className="about-left">
            <div className="subtitle">The Story</div>
            <h2 className="section-title" style={{ textAlign: "left", marginBottom: "2rem" }}>
              Designing <span className="serif gold">Secure</span> &amp; Intelligent Futures.
            </h2>
            <p className="about-p">
              I'm Bhagyashree, an aspiring Software Engineer passionate about building secure, scalable, and intelligent digital experiences. My interests span Full Stack Development, Cybersecurity, Artificial Intelligence, and Machine Learning, allowing me to solve real-world problems through technology.
            </p>
          </div>
          <div className="about-right">
            <p className="about-p">
              I enjoy transforming ideas into reliable applications with clean architecture, modern development practices, and user-focused design. Every project strengthens my ability to learn quickly, collaborate effectively, and build software that creates meaningful impact.
            </p>
            <div className="drives-me">
              <h3 className="drives-title">What Drives Me</h3>
              <ul className="drives-list">
                <li>Building software that solves practical problems.</li>
                <li>Continuously learning modern technologies.</li>
                <li>Writing clean, maintainable code.</li>
                <li>Exploring AI-powered applications.</li>
                <li>Creating secure and scalable systems.</li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
