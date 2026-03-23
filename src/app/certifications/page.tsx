"use client";

import { ExternalLink, Award, ShieldCheck, Cloud } from "lucide-react";
import { motion } from "framer-motion";

const certifications = [
  {
    name: "Oracle Cloud Infrastructure Data Science Professional",
    issuer: "Oracle",
    date: "Aug 2025",
    link: "https://drive.google.com/file/d/1O8EEUCwkWVfKDyRleU8NQU7FXAKnQyg4/view?usp=sharing",
    icon: ShieldCheck,
    color: "#ef4444",
    description:
      "Professional-level certification validating expertise in OCI Data Science services, ML model development, and cloud-based data pipelines.",
  },
  {
    name: "Deloitte Data Analytics Virtual Internship",
    issuer: "Deloitte",
    date: "Jun 2025 - Jul 2025",
    link: "https://drive.google.com/file/d/1y66ci2IVfyCb5ZkgGbJwU3gGOJ6VuPjR/view?usp=sharing",
    icon: Award,
    color: "#22c55e",
    description:
      "Virtual internship covering data analytics workflows, business intelligence reporting, and data-driven decision making at enterprise scale.",
  },
  {
    name: "NPTEL Cloud Computing",
    issuer: "NPTEL",
    date: "Jun 2025 - Nov 2025",
    link: "https://drive.google.com/file/d/162Yw52bRw8VM5mVdiMIalvxbHGC8EeCl/view?usp=sharing",
    icon: Cloud,
    color: "#3b82f6",
    description:
      "Comprehensive course covering cloud architecture, virtualization, containerization, and cloud service models (IaaS, PaaS, SaaS).",
  },
];

export default function CertificationsPage() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="section-label mb-4">Credentials</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Certifi<span className="neon-text">cations</span>
        </h1>
        <p className="text-foreground/40 text-lg max-w-xl leading-relaxed">
          Verified professional certifications from industry leaders in cloud,
          data analytics, and AI.
        </p>
      </motion.div>

      {/* Certification Cards */}
      <div className="space-y-6">
        {certifications.map((cert, i) => {
          const Icon = cert.icon;
          return (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="group glass-card-hover p-8 md:p-10 relative overflow-hidden">
                {/* Accent line */}
                <div
                  className="absolute top-0 left-0 w-[3px] h-full rounded-full"
                  style={{ backgroundColor: cert.color }}
                />

                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0 border"
                    style={{
                      backgroundColor: `${cert.color}12`,
                      borderColor: `${cert.color}25`,
                    }}
                  >
                    <Icon size={28} style={{ color: cert.color }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
                      <h3 className="text-xl font-bold group-hover:text-accent-primary transition-colors">
                        {cert.name}
                      </h3>
                      <span className="text-xs font-mono text-foreground/30 whitespace-nowrap">
                        {cert.date}
                      </span>
                    </div>

                    <p className="text-foreground/35 text-sm leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-foreground/30">
                        Issued by{" "}
                        <span className="text-foreground/50">{cert.issuer}</span>
                      </span>  

                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:underline"
                      >
                        Verify{" "}
                        <ExternalLink
                          size={14}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
