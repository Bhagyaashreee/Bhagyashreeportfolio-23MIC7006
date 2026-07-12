import "./Story.css";
import Reveal from "@/components/animations/Reveal";

export default function Story() {
  return (
    <section id="about" className="about container">
      <Reveal delay={0.2} className="about-content">
        <div className="subtitle">The Story</div>
        <h2 className="section-title" style={{ textAlign: "left", marginBottom: "2rem" }}>
          Designing <span className="serif gold">Secure</span> &amp; Intelligent Futures.
        </h2>
        <div className="about-text">
          <p>
            I'm an aspiring software engineer with interests spanning Machine Learning, Cybersecurity, and Full Stack Development. My experience through 
            academics and internships has given me a versatile skill set to build robust digital solutions.
          </p>
          <p>
            From predicting real estate trends using machine learning to deploying secure encryption algorithms for data storage, 
            I thrive at the intersection of intelligence and security. My goal is to craft systems that are not just functional, but deeply reliable.
          </p>
        </div>

        <div className="tech-strip">
          <span className="tech-strip-label">Core Technologies</span>
          <div className="strip-items">
            Python <span>•</span> Java <span>•</span> JavaScript <span>•</span> HTML <span>•</span> CSS <span>•</span> Scikit-learn <span>•</span> Pandas <span>•</span> Nmap <span>•</span> Wireshark
          </div>
        </div>
      </Reveal>
    </section>
  );
}
