"use client";
import "./Contact.css";
import Reveal from "@/components/animations/Reveal";
import Magnetic from "@/components/animations/Magnetic";
import { useState, useRef } from "react";
import { sendContactEmail } from "@/lib/emailjs";
import { ToastState } from "@/types";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState>({ show: false, type: "", message: "" });

  /**
   * Handles the form submission by preventing default, 
   * starting the loader, and sending the email.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    if (form.current) {
      sendContactEmail(form.current)
        .then(() => {
        setLoading(false);
        setToast({ show: true, type: "success", message: "Message sent successfully! I'll get back to you soon." });
        setTimeout(() => setToast({ show: false, type: "", message: "" }), 5000);
        (e.target as HTMLFormElement).reset();
      }, (error) => {
        console.error(error);
        setLoading(false);
        setToast({ show: true, type: "error", message: "Failed to send message. Please try again." });
        setTimeout(() => setToast({ show: false, type: "", message: "" }), 5000);
      });
    }
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
            <Magnetic><a href="mailto:shreebhagyaaa@gmail.com" data-cursor="link">shreebhagyaaa@gmail.com</a></Magnetic>
            <Magnetic><a href="https://www.linkedin.com/in/bhagyashree-satpathy-3355a9361/" target="_blank" rel="noopener noreferrer" data-cursor="link">LinkedIn</a></Magnetic>
            <Magnetic><a href="https://github.com/Bhagyaashreee" target="_blank" rel="noopener noreferrer" data-cursor="link">GitHub</a></Magnetic>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="contact-form-wrapper">
          <form ref={form} className="glass-form" onSubmit={handleSubmit}>
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
