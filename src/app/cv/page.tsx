"use client";

import { Download, Briefcase, GraduationCap, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import SkillMeter from "@/components/SkillMeter";

const skills = [
  "Python",
  "PyQt6",
  "Gemini API",
  "SQL",
  "Pandas",
  "NumPy",
  "Scikit-Learn",
  "Matplotlib",
  "Seaborn",
  "Power BI",
  "DAX",
  "Power Query",
  "OCI",
  "Docker",
  "Git",
  "HTML",
  "CSS",
];

const coreSkills = [
  { name: "Python", level: 92, color: "#3b82f6" },
  { name: "SQL", level: 85, color: "#8b5cf6" },
  { name: "Machine Learning", level: 88, color: "#06b6d4" },
  { name: "Power BI", level: 82, color: "#ec4899" },
  { name: "Docker & Git", level: 75, color: "#10b981" },
  { name: "Gemini API", level: 78, color: "#f59e0b" },
];

const education = [
  {
    degree: "B.Tech Computer Science Engineering",
    school: "Lovely Professional University, Punjab",
    period: "Since 2023",
    detail: "Data Science Minor",
  },
  {
    degree: "Intermediate (12th)",
    school: "CM Science College, Darbhanga",
    period: "2020 - 2022",
    detail: null,
  },
  {
    degree: "Matriculation (10th)",
    school: "Holy Mission School, Darbhanga",
    period: "2019 - 2020",
    detail: null,
  },
];

const quickStats = [
  { value: "3+", label: "Projects Completed", icon: Code2, color: "#3b82f6" },
  {
    value: "3+",
    label: "Certifications Earned",
    icon: GraduationCap,
    color: "#8b5cf6",
  },
  {
    value: "1+",
    label: "Internships",
    icon: Briefcase,
    color: "#06b6d4",
  },
];

export default function CVPage() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="section-label mb-4">Resume</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Curriculum <span className="neon-text">Vitae</span>
        </h1>
        <p className="text-foreground/40 text-lg max-w-xl leading-relaxed mb-8">
          An overview of my education, technical skills, and professional
          experience in Data Science & AI.
        </p>
        <a
          href="https://drive.google.com/file/d/1Dba9oC1saHpfgFWGru5brm794gZg87c0/view?usp=sharing"
          target="_blank"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-primary text-white text-sm font-medium hover:bg-accent-primary/90 transition-all shadow-lg shadow-accent-primary/20"
        >
          <Download size={16} /> Download Full Resume
        </a>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="grid grid-cols-3 gap-4 mb-16"
      >
        {quickStats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <Icon
                size={24}
                className="mx-auto mb-3"
                style={{ color: stat.color }}
              />
              <div
                className="text-2xl md:text-3xl font-bold mb-1"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-xs font-mono text-foreground/30">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Technical Skills */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-xs font-mono text-foreground/30 tracking-widest uppercase mb-6">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="text-sm font-mono text-foreground/40 mb-4 tracking-wider uppercase">
              Proficiency
            </h3>
            <SkillMeter skills={coreSkills} />
          </div>
          <div className="glass-card p-6">
            <h3 className="text-sm font-mono text-foreground/40 mb-4 tracking-wider uppercase">
              All Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="tag-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-xs font-mono text-foreground/30 tracking-widest uppercase mb-6">
          Education
        </h2>
        <div className="space-y-2">
          {education.map((edu, i) => (
            <div
              key={i}
              className="group glass-card-hover p-6 flex flex-col md:flex-row md:items-center justify-between"
            >
              <div>
                <h3 className="text-lg font-bold mb-1">{edu.degree}</h3>
                <p className="text-foreground/40 text-sm">{edu.school}</p>
                {edu.detail && (
                  <span className="inline-block mt-2 text-xs font-mono text-accent-primary px-2.5 py-1 rounded-lg bg-accent-primary/10 border border-accent-primary/20">
                    {edu.detail}
                  </span>
                )}
              </div>
              <div className="text-sm font-mono text-foreground/30 mt-2 md:mt-0 whitespace-nowrap">
                {edu.period}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-xs font-mono text-foreground/30 tracking-widest uppercase mb-6">
          Experience
        </h2>
        <div className="glass-card p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Summer Training</h3>
            <span className="text-sm font-mono text-foreground/30">
              Summer 2024 - 2025
            </span>
          </div>
          <p className="text-foreground/50 text-sm mb-2">
            LPU / Online Platform
          </p>
          <p className="text-foreground/40 text-sm leading-relaxed">
            Completed intensive training modules in Python programming, data
            analytics, and cloud infrastructure. Gained hands-on experience with
            real-world datasets and enterprise tools.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
