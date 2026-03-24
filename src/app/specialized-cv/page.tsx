"use client";

import { Download, BarChart3, Brain, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const roles = [
  {
    title: "Data Analyst",
    icon: BarChart3,
    color: "#3b82f6",
    gradient: "from-blue-500/10 to-cyan-500/5",
    borderColor: "border-blue-500/20 hover:border-blue-500/40",
    description:
      "Specialized in transforming complex datasets into actionable insights using Power BI, SQL, and advanced visualization techniques. Experienced in building interactive dashboards with DAX measures and KPI tracking.",
    skills: [
      "Power BI",
      "DAX",
      "SQL",
      "Power Query",
      "Data Visualization",
      "KPI Analysis",
    ],
    downloadLink:
      "https://drive.google.com/file/d/1Kmckl5918EHkvA95D6esv9vPsb-AG7XA/view?usp=sharing",
  },
  {
    title: "Machine Learning Engineer",
    icon: Brain,
    color: "#8b5cf6",
    gradient: "from-purple-500/10 to-pink-500/5",
    borderColor: "border-purple-500/20 hover:border-purple-500/40",
    description:
      "Focused on building and evaluating predictive models using Scikit-learn and Python. Experienced in regression analysis, feature engineering, EDA, and model optimization for real-world applications.",
    skills: [
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Feature Engineering",
      "Regression Models",
      "EDA",
    ],
    downloadLink:
      "https://drive.google.com/file/d/1Kmckl5918EHkvA95D6esv9vPsb-AG7XA/view?usp=sharing",
  },
  {
    title: "Software + AI Developer",
    icon: Code2,
    color: "#06b6d4",
    gradient: "from-cyan-500/10 to-teal-500/5",
    borderColor: "border-cyan-500/20 hover:border-cyan-500/40",
    description:
      "Building intelligent applications that combine software engineering with AI capabilities. Experienced in Python desktop apps with PyQt6 and AI integration using Gemini API for smart recommendations.",
    skills: [
      "Python",
      "PyQt6",
      "Gemini API",
      "Docker",
      "Git",
      "App Development",
    ],
    downloadLink:
      "https://drive.google.com/file/d/1Kmckl5918EHkvA95D6esv9vPsb-AG7XA/view?usp=sharing",
  },
];

export default function SpecializedCVPage() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="section-label mb-4">Role-Based Profiles</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Specialized <span className="neon-text">CV</span>
        </h1>
        <p className="text-foreground/40 text-lg max-w-xl leading-relaxed">
          Three tailored resumes highlighting specific skill sets for different
          career tracks in Data Science & AI.
        </p>
      </motion.div>

      {/* Role Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {roles.map((role, i) => {
          const Icon = role.icon;
          return (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`group relative glass-card overflow-hidden border ${role.borderColor} transition-all duration-300`}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-50`}
              />

              <div className="relative p-8">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 border"
                  style={{
                    backgroundColor: `${role.color}15`,
                    borderColor: `${role.color}25`,
                  }}
                >
                  <Icon size={24} style={{ color: role.color }} />
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold mb-4" style={{ color: role.color }}>
                  {role.title}
                </h2>

                {/* Description */}
                <p className="text-foreground/40 text-sm leading-relaxed mb-6">
                  {role.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-1 rounded-md border"
                      style={{
                        color: `${role.color}cc`,
                        backgroundColor: `${role.color}10`,
                        borderColor: `${role.color}20`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Download Button */}
                <a
                  href={role.downloadLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all shadow-lg w-full justify-center"
                  style={{
                    backgroundColor: role.color,
                    boxShadow: `0 8px 25px ${role.color}30`,
                  }}
                >
                  <Download size={14} /> Download CV
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
