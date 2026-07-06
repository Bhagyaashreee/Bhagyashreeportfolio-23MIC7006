"use client";
import "./Contact.css";
import Reveal from "@/components/animations/Reveal";
import Magnetic from "@/components/animations/Magnetic";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ show: boolean, type: string, message: string }>({ show: false, type: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate EmailJS
    setTimeout(() => {
      setLoading(false);
      setToast({ show: true, type: "success", message: "Message sent successfully! I'll get back to you soon." });
      setTimeout(() => setToast({ show: false, type: "", message: "" }), 5000);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="lets-build">
      <div className="contact-container">
        
        <Reveal className="contact-info">
          <div className="subtitle">Let's Connect</div>
          <h2>Let's build something <span className="serif gold">brilliant.</span></h2>
          <p>
            Whether you have an exciting project in mind, a question about my work, 
            or just want to say hello—my inbox is always open. Let's create secure, intelligent solutions together.
          </p>
          <div className="elegant-socials">
            <Magnetic><a href="mailto:jagadiesh0009@gmail.com" data-cursor="link">jagadiesh0009@gmail.com</a></Magnetic>
            <Magnetic><a href="#" data-cursor="link">LinkedIn</a></Magnetic>
            <Magnetic><a href="#" data-cursor="link">GitHub</a></Magnetic>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="contact-form-wrapper">
          <form className="glass-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder="Full Name" required />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <input type="text" id="subject" name="subject" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea id="message" name="message" placeholder="Message" required></textarea>
            </div>
            <Magnetic>
              <button type="submit" className="btn btn-primary" style={{ width: "100%" }} disabled={loading} data-cursor="button">
                {loading ? <span className="loader"></span> : "Send Message"}
              </button>
            </Magnetic>
          </form>
        </Reveal>

      </div>

      <div className={`toast ${toast.show ? "show" : ""} ${toast.type === "success" ? "toast-success" : "toast-error"}`}>
        {toast.message}
      </div>
    </section>
  );
}
