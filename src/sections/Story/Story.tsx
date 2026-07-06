import "./Story.css";
import Reveal from "@/components/animations/Reveal";

export default function Story() {
  return (
    <section id="about" className="about container">
      <Reveal className="about-visual">
        <div className="abstract-shape">
          <img 
            src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%231B0B10'/%3E%3Cstop offset='100%25' stop-color='%234A0E1A'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='500' rx='200' fill='url(%23grad2)'/%3E%3Cpath d='M200,100 Q300,250 200,400 Q100,250 200,100' fill='none' stroke='%23D6B56E' stroke-width='1' opacity='0.5'/%3E%3C/svg%3E" 
            alt="Abstract Identity" 
          />
        </div>
      </Reveal>
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
