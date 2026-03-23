"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import TypingEffect from "@/components/TypingEffect";
import SkillMeter from "@/components/SkillMeter";

const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);
const SkillsRadar = dynamic(() => import("@/components/SkillsRadar"), {
  ssr: false,
});
const GitHubStats = dynamic(() => import("@/components/GitHubStats"), {
  ssr: false,
});
const DataDashboard = dynamic(() => import("@/components/DataDashboard"), {
  ssr: false,
});

const skills = [
  "Python",
  "SQL",
  "Power BI",
  "DAX",
  "Pandas",
  "NumPy",
  "Scikit-Learn",
  "PyQt6",
  "Gemini API",
  "Matplotlib",
  "Seaborn",
  "Power Query",
  "Docker",
  "Git",
  "OCI",
];

const skillMeters = [
  { name: "Python", level: 92, color: "#3b82f6" },
  { name: "SQL & Databases", level: 85, color: "#8b5cf6" },
  { name: "Machine Learning", level: 88, color: "#06b6d4" },
  { name: "Power BI & DAX", level: 82, color: "#ec4899" },
  { name: "Data Visualization", level: 90, color: "#10b981" },
  { name: "Cloud (OCI)", level: 72, color: "#f59e0b" },
];

const projects = [
  {
    title: "AI Side Hustle Planner",
    description:
      "AI-powered recommendation system with Gemini API for personalized side-hustle planning.",
    tags: ["Python", "PyQt6", "Gemini API"],
    link: "https://github.com/adityarcb",
    featured: true,
  },
  {
    title: "Health Insurance Claims Dashboard",
    description:
      "Interactive Power BI dashboard with KPI cards and demographic insights.",
    tags: ["Power BI", "DAX", "Power Query"],
    link: "https://github.com/adityarcb",
  },
  {
    title: "Insurance Cost Prediction",
    description:
      "ML regression model with feature engineering and exploratory data analysis.",
    tags: ["Python", "Scikit-Learn", "Pandas"],
    link: "https://github.com/adityarcb",
  },
];

const stats = [
  { value: "3+", label: "AI/ML Projects", color: "#3b82f6" },
  { value: "3+", label: "Certifications", color: "#8b5cf6" },
  { value: "B.Tech", label: "CSE @ LPU", color: "#06b6d4" },
  { value: "DS", label: "Minor Specialization", color: "#ec4899" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
} satisfies Record<string, unknown>;

export default function Home() {
  return (
    <>
      <ParticleBackground />

      {/* ── Hero Section ─────────────────────────────── */}
      <section className="min-h-[92vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-primary/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-secondary/6 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl"
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-subtle bg-glass backdrop-blur-md text-xs font-mono text-foreground/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for opportunities
          </div>

          {/* Name */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] mb-6">
            Aditya
            <br />
            <span className="neon-text">Raj</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-foreground/40 max-w-2xl mx-auto leading-relaxed mb-4 font-light">
            Data Science Student | Aspiring Machine Learning Engineer
          </p>

          {/* Typing Effect */}
          <div className="h-8 mb-10 text-lg font-medium">
            <TypingEffect
              words={[
                "AI Enthusiast",
                "Data Scientist",
                "Problem Solver",
                "ML Engineer",
                "Data Storyteller",
              ]}
            />
          </div>

          {/* Quote */}
          <p className="text-sm italic text-foreground/25 mb-10 font-mono">
            &quot;Transforming raw data into intelligent solutions&quot;
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="group px-8 py-3.5 rounded-xl bg-accent-primary text-white text-sm font-medium hover:bg-accent-primary/90 transition-all shadow-lg shadow-accent-primary/25 flex items-center justify-center gap-2"
            >
              <Sparkles size={16} />
              Explore Projects
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
            <Link
              href="/cv"
              className="px-8 py-3.5 rounded-xl text-sm font-medium border border-border-subtle text-foreground/70 hover:text-foreground hover:border-accent-primary/30 hover:bg-white/5 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              Download Resume
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── Skill Marquee ────────────────────────────── */}
      <section className="py-12 border-y border-border-subtle/50 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 w-max"
        >
          {[...skills, ...skills].map((skill, i) => (
            <span
              key={i}
              className="px-5 py-2 rounded-full border border-border-subtle bg-glass backdrop-blur-sm text-sm font-mono text-foreground/50 whitespace-nowrap hover:border-accent-primary/40 hover:text-accent-primary transition-colors"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </section>

      {/* ── Stats Section ────────────────────────────── */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="stat-card text-center"
              >
                <div
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-foreground/30">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills Radar + Skill Meters ──────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="section-label mb-3"
            >
              Technical Proficiency
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              Skills & Expertise
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Radar Chart */}
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-sm font-mono text-foreground/40 tracking-wider uppercase mb-6">
                Skill Radar
              </h3>
              <SkillsRadar />
            </div>

            {/* Skill Meters */}
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-sm font-mono text-foreground/40 tracking-wider uppercase mb-6">
                Proficiency Levels
              </h3>
              <SkillMeter skills={skillMeters} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Data Dashboard ───────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="section-label mb-3"
            >
              Live Metrics
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              Analytics Dashboard
            </motion.h2>
          </motion.div>
          <DataDashboard />
        </div>
      </section>

      {/* ── GitHub Activity ──────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="section-label mb-3"
            >
              Open Source
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              GitHub Activity
            </motion.h2>
          </motion.div>
          <GitHubStats />
        </div>
      </section>

      {/* ── Featured Projects ────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-end justify-between mb-12"
          >
            <motion.div variants={fadeUp} custom={0}>
              <p className="section-label mb-3">Selected Work</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Projects
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} custom={1}>
              <Link
                href="/projects"
                className="hidden md:flex items-center gap-2 text-sm text-foreground/30 hover:text-accent-primary transition-colors font-medium"
              >
                View all <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group ${
                  project.featured ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <Link href={project.link} target="_blank" className="block h-full">
                  <div className="h-full glass-card-hover p-8 flex flex-col justify-between relative overflow-hidden">
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-accent-primary/20 text-accent-primary border border-accent-primary/30">
                          ★ Featured
                        </span>
                      </div>
                    )}
                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag-badge">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-accent-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-foreground/35 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-xs font-mono text-foreground/25 group-hover:text-accent-primary transition-colors">
                      View Project{" "}
                      <ArrowUpRight
                        size={12}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ──────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let&apos;s build something{" "}
              <span className="neon-text">amazing</span>
            </h2>
            <p className="text-foreground/35 text-lg mb-10 max-w-xl mx-auto">
              Open to internships, collaborations, and exciting data science
              projects.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent-primary text-white font-medium hover:bg-accent-primary/90 transition-all shadow-lg shadow-accent-primary/25"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
