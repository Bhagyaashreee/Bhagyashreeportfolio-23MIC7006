import "./Projects.css";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="projects container">
      <div className="subtitle" style={{ justifyContent: "center" }}>Portfolio</div>
      <h2 className="section-title">Selected <span className="serif gold">Works</span></h2>

      <div className="projects-grid">
        <ProjectCard 
          title="AES Storage System"
          description="Developed a highly secure data storage application implementing AES-256 encryption. It ensures complete data confidentiality and integrity during local storage operations."
          tech={["AES-256", "Python", "Encryption"]}
          imageText="AES STORAGE"
        />
        <ProjectCard 
          title="Secure Chat App"
          description="Engineered a real-time chat application protected by RSA encryption. The system provides end-to-end encryption to prevent unauthorized interception of messages."
          tech={["RSA", "Python", "Cryptography"]}
          imageText="SECURE CHAT"
          delay={0.1}
        />
        <ProjectCard 
          title="Image Steganography"
          description="Built a Python application using LSB-based image steganography combined with encryption techniques to securely hide confidential information inside digital images."
          tech={["Python", "LSB", "Image Processing"]}
          imageText="IMAGE STEGANOGRAPHY"
        />
        <ProjectCard 
          title="Farming Robot"
          description="Created a mobile-controlled robotic system for agricultural automation, enabling remote operation and improving farming efficiency through wireless control."
          tech={["Python", "Automation"]}
          imageText="FARMING ROBOT"
          delay={0.1}
        />
      </div>
    </section>
  );
}
