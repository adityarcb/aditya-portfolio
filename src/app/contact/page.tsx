"use client";

import { useState } from "react";
import {
  Send,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, open mailto with the form data
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=aditya.raj60104@gmail.com&su=Portfolio Contact: ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.email)}`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socials = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/adityarcb",
      label: "@adityarcb",
      color: "#e2e8f0",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/adityaa-raj",
      label: "Aditya Raj",
      color: "#0077b5",
    },
    {
      name: "Email",
      icon: Mail,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=aditya.raj60104@gmail.com",
      label: "aditya.raj60104@gmail.com",
      color: "#3b82f6",
    },
  ];

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="section-label mb-4">Get in Touch</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Contact <span className="neon-text">Me</span>
        </h1>
        <p className="text-foreground/40 text-lg max-w-xl leading-relaxed">
          Have a project idea, internship opportunity, or just want to connect?
          I&apos;d love to hear from you.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-[1fr_1.2fr] gap-8">
        {/* Left Column: Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="space-y-4"
        >
          {/* Location */}
          <div className="glass-card p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center">
              <MapPin size={20} className="text-accent-primary" />
            </div>
            <div>
              <h3 className="font-medium text-sm mb-0.5">Location</h3>
              <p className="text-xs text-foreground/40 font-mono">
                Punjab, India
              </p>
            </div>
          </div>

          {/* Social Links */}
          {socials.map((social, i) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                className="glass-card-hover p-6 flex items-center gap-4 block"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center border"
                  style={{
                    backgroundColor: `${social.color}10`,
                    borderColor: `${social.color}25`,
                  }}
                >
                  <Icon size={20} style={{ color: social.color }} />
                </div>
                <div>
                  <h3 className="font-medium text-sm mb-0.5">{social.name}</h3>
                  <p className="text-xs text-foreground/40 font-mono">
                    {social.label}
                  </p>
                </div>
              </motion.a>
            );
          })}

          {/* Chatbot CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glass-card p-6 border-accent-secondary/20"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-accent-secondary/10 border border-accent-secondary/20 flex items-center justify-center">
                <MessageSquare size={18} className="text-accent-secondary" />
              </div>
              <div>
                <h3 className="font-medium text-sm">AI Assistant</h3>
                <p className="text-[10px] text-foreground/30 font-mono">
                  Coming Soon
                </p>
              </div>
            </div>
            <p className="text-xs text-foreground/35 leading-relaxed">
              An AI chatbot trained on my portfolio will be available soon to
              answer questions about my work and experience.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <form
            onSubmit={handleSubmit}
            className="glass-card p-8 md:p-10 space-y-6"
          >
            <h2 className="text-xl font-bold mb-2">Send a Message</h2>
            <p className="text-sm text-foreground/30 mb-6">
              Fill out the form and I&apos;ll get back to you as soon as possible.
            </p>

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono text-foreground/40 mb-2 tracking-wider uppercase"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-border-subtle text-sm text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/20 transition-all"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono text-foreground/40 mb-2 tracking-wider uppercase"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-border-subtle text-sm text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/20 transition-all"
                placeholder="your@email.com"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-mono text-foreground/40 mb-2 tracking-wider uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-border-subtle text-sm text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/20 transition-all resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitted}
              className={`w-full py-3.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all ${
                submitted
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-accent-primary text-white hover:bg-accent-primary/90 shadow-lg shadow-accent-primary/20"
              }`}
            >
              {submitted ? (
                <>✓ Message Sent!</>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
