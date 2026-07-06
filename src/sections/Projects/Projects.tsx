import "./Projects.css";
import Reveal from "@/components/animations/Reveal";
import Magnetic from "@/components/animations/Magnetic";

export default function Projects() {
  return (
    <section id="projects" className="projects container">
      <div className="subtitle" style={{ justifyContent: "center" }}>Portfolio</div>
      <h2 className="section-title">Selected <span className="serif gold">Works</span></h2>

      <div className="projects-grid">
        
        {/* Project 1 */}
        <Reveal className="proj-card">
          <div className="card-visual">
            <img src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'%3E%3Crect width='800' height='500' fill='%231B0B10'/%3E%3Cpath d='M200,250 L600,250 M400,50 L400,450' stroke='%23D6B56E' stroke-width='2' opacity='0.2'/%3E%3Ctext x='400' y='260' font-family='serif' font-size='24' fill='%23F8F7F4' text-anchor='middle' letter-spacing='2'%3EAES STORAGE%3C/text%3E%3C/svg%3E" alt="AES Storage System" />
          </div>
          <div className="card-content">
            <h3 className="proj-title">AES Storage System</h3>
            <p className="proj-desc">Developed a highly secure data storage application implementing AES-256 encryption. It ensures complete data confidentiality and integrity during local storage operations.</p>
            <div className="proj-tech">
              <span>AES-256</span><span>Python</span><span>Encryption</span>
            </div>
            <div className="proj-actions">
              <Magnetic><a href="#" className="btn btn-primary btn-sm">Live Demo</a></Magnetic>
              <Magnetic><a href="#" className="btn btn-glass btn-sm">GitHub</a></Magnetic>
            </div>
          </div>
        </Reveal>

        {/* Project 2 */}
        <Reveal delay={0.1} className="proj-card">
          <div className="card-visual">
            <img src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'%3E%3Crect width='800' height='500' fill='%232A1118'/%3E%3Ccircle cx='400' cy='250' r='100' fill='none' stroke='%23A61E3B' stroke-width='4' opacity='0.5'/%3E%3Ctext x='400' y='260' font-family='serif' font-size='24' fill='%23F8F7F4' text-anchor='middle' letter-spacing='2'%3ESECURE CHAT%3C/text%3E%3C/svg%3E" alt="Secure Chat Application" />
          </div>
          <div className="card-content">
            <h3 className="proj-title">Secure Chat App</h3>
            <p className="proj-desc">Engineered a real-time chat application protected by RSA encryption. The system provides end-to-end encryption to prevent unauthorized interception of messages.</p>
            <div className="proj-tech">
              <span>RSA</span><span>Python</span><span>Cryptography</span>
            </div>
            <div className="proj-actions">
              <Magnetic><a href="#" className="btn btn-primary btn-sm">Live Demo</a></Magnetic>
              <Magnetic><a href="#" className="btn btn-glass btn-sm">GitHub</a></Magnetic>
            </div>
          </div>
        </Reveal>

        {/* Project 3 */}
        <Reveal className="proj-card">
          <div className="card-visual">
            <img src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'%3E%3Crect width='800' height='500' fill='%2313070A'/%3E%3Crect x='200' y='100' width='400' height='300' fill='%23D6B56E' opacity='0.1' rx='16'/%3E%3Ctext x='400' y='260' font-family='serif' font-size='24' fill='%23F8F7F4' text-anchor='middle' letter-spacing='2'%3EIMAGE STEGANOGRAPHY%3C/text%3E%3C/svg%3E" alt="Image Steganography Tool" />
          </div>
          <div className="card-content">
            <h3 className="proj-title">Image Steganography</h3>
            <p className="proj-desc">Built a Python application using LSB-based image steganography combined with encryption techniques to securely hide confidential information inside digital images.</p>
            <div className="proj-tech">
              <span>Python</span><span>LSB</span><span>Image Processing</span>
            </div>
            <div className="proj-actions">
              <Magnetic><a href="#" className="btn btn-primary btn-sm">Live Demo</a></Magnetic>
              <Magnetic><a href="#" className="btn btn-glass btn-sm">GitHub</a></Magnetic>
            </div>
          </div>
        </Reveal>

        {/* Project 4 */}
        <Reveal delay={0.1} className="proj-card">
          <div className="card-visual">
            <img src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'%3E%3Crect width='800' height='500' fill='%231A1805'/%3E%3Ccircle cx='400' cy='250' r='150' fill='%23D6B56E' opacity='0.15'/%3E%3Ctext x='400' y='260' font-family='serif' font-size='24' fill='%23D6B56E' text-anchor='middle' letter-spacing='2'%3EFARMING ROBOT%3C/text%3E%3C/svg%3E" alt="Mobile Controlled Farming Robot" />
          </div>
          <div className="card-content">
            <h3 className="proj-title">Farming Robot</h3>
            <p className="proj-desc">Created a mobile-controlled robotic system for agricultural automation, enabling remote operation and improving farming efficiency through wireless control.</p>
            <div className="proj-tech">
              <span>Python</span><span>Automation</span>
            </div>
            <div className="proj-actions">
              <Magnetic><a href="#" className="btn btn-primary btn-sm">Live Demo</a></Magnetic>
              <Magnetic><a href="#" className="btn btn-glass btn-sm">GitHub</a></Magnetic>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
