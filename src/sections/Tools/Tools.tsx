import "./Tools.css";
import Reveal from "@/components/animations/Reveal";

export default function Tools() {
  return (
    <section id="tools" className="tools-section container">
      <div className="subtitle" style={{ justifyContent: "center" }}>Tools &amp; Technologies</div>
      <h2 className="section-title">The <span className="serif gold">Toolkit</span></h2>
      <p className="tools-subtitle">"The technologies I use to transform ideas into secure, scalable, and intelligent solutions."</p>

      <div className="tools-grid">
        <Reveal className="tool-card glass-panel">
          <h4 className="tool-cat">Programming</h4>
          <div className="tool-items">Python <span>•</span> Java <span>•</span> JavaScript</div>
        </Reveal>
        
        <Reveal delay={0.1} className="tool-card glass-panel">
          <h4 className="tool-cat">Machine Learning</h4>
          <div className="tool-items">Scikit-learn <span>•</span> Pandas</div>
        </Reveal>
        
        <Reveal delay={0.2} className="tool-card glass-panel">
          <h4 className="tool-cat">Cybersecurity</h4>
          <div className="tool-items">Nmap <span>•</span> Wireshark <span>•</span> AES <span>•</span> RSA</div>
        </Reveal>
        
        <Reveal className="tool-card glass-panel">
          <h4 className="tool-cat">Web Development</h4>
          <div className="tool-items">HTML <span>•</span> CSS <span>•</span> JavaScript</div>
        </Reveal>
        
        <Reveal delay={0.1} className="tool-card glass-panel">
          <h4 className="tool-cat">Core Computer Science</h4>
          <div className="tool-items">DSA <span>•</span> DBMS <span>•</span> Operating Systems <span>•</span> Computer Networks</div>
        </Reveal>
      </div>
    </section>
  );
}
