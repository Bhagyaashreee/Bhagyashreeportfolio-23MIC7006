import "./Journey.css";
import Reveal from "@/components/animations/Reveal";

export default function Journey() {
  return (
    <section id="experience" className="experience container">
      <div className="subtitle" style={{ justifyContent: "center" }}>Experience</div>
      <h2 className="section-title">The <span className="serif gold">Journey</span></h2>

      <div className="timeline">
        <Reveal className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-card glass-panel">
            <span className="timeline-date">Nov 2024 - Dec 2024</span>
            <h3 className="timeline-role">Machine Learning Intern</h3>
            <h4 className="timeline-company">Eduskills AICTE</h4>
            <p className="timeline-desc">
              Developed end-to-end machine learning models to analyze and predict real estate trends. Conducted deep data analysis, 
              feature engineering, and model optimization to improve prediction accuracy.
            </p>
            <div className="experience-tech">
              <span>Python</span><span>Pandas</span><span>Scikit-learn</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-card glass-panel">
            <span className="timeline-date">Aug 2024 - Oct 2024</span>
            <h3 className="timeline-role">Cybersecurity Intern</h3>
            <h4 className="timeline-company">Eduskills AICTE</h4>
            <p className="timeline-desc">
              Focused on network security, threat modeling, and vulnerability assessments. Actively monitored simulated 
              network traffic and implemented robust defense mechanisms to protect data integrity.
            </p>
            <div className="experience-tech">
              <span>Nmap</span><span>Wireshark</span><span>Network Security</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
