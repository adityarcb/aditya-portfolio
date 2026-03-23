"use client";

import { useState } from "react";
import { ArrowUpRight, Github, Star, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "@/components/ProjectModal";

const categories = ["All", "AI", "ML", "Data Analysis", "Visualization"];

const projects = [
  {
    title: "AI Side Hustle Planner",
    description:
      "AI-powered recommendation system using Gemini API for personalized side-hustle planning and schedule optimization.",
    longDescription:
      "A comprehensive AI-powered desktop application that helps users discover and plan optimal side hustles based on their skills, availability, and goals. The app uses Google's Gemini API for intelligent recommendations, analyzing user inputs to suggest earning strategies with smart scheduling. Built with PyQt6 for a native desktop experience with real-time AI interactions.",
    tags: ["Python", "PyQt6", "NumPy", "Matplotlib", "Gemini API"],
    category: "AI",
    github: "https://github.com/adityarcb",
    featured: true,
    highlights: [
      "Integrated Gemini AI API for intelligent gig recommendations",
      "Smart scheduling algorithm based on user availability",
      "Interactive data visualization with Matplotlib",
      "Personalized hustle scoring based on skills analysis",
    ],
  },
  {
    title: "Health Insurance Claims Dashboard",
    description:
      "Interactive Power BI dashboard analyzing claim patterns with advanced DAX measures for KPIs.",
    longDescription:
      "Designed and built a comprehensive Power BI dashboard to analyze health insurance claim patterns across demographics. Implemented advanced DAX measures to generate KPIs including average claim amounts, high-risk group analysis, and trend identification. The dashboard provides interactive filters for age groups, regions, and claim types with drill-down capabilities.",
    tags: ["Power BI", "DAX", "Power Query"],
    category: "Visualization",
    github: "https://github.com/adityarcb",
    featured: false,
    highlights: [
      "Built KPI cards tracking average claim amounts and risk scores",
      "Advanced DAX measures for demographic insights",
      "Interactive drill-down filters by age, region, and claim type",
      "Automated data refresh with Power Query transformations",
    ],
  },
  {
    title: "Insurance Cost Prediction Model",
    description:
      "ML regression model estimating health insurance costs using demographic and lifestyle factors.",
    longDescription:
      "Built a predictive analytics model that estimates health insurance charges using multiple demographic and lifestyle factors. The project involved comprehensive exploratory data analysis, feature engineering, outlier handling, and evaluation of multiple regression models including Linear Regression, Ridge, Lasso, and Random Forest to identify the best-performing model.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn"],
    category: "ML",
    github: "https://github.com/adityarcb",
    featured: false,
    highlights: [
      "Comprehensive EDA with correlation analysis and distribution plots",
      "Feature engineering and encoding for categorical variables",
      "Evaluated multiple regression models for optimal performance",
      "Achieved 94%+ accuracy with outlier handling techniques",
    ],
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featuredProject = projects.find((p) => p.featured);

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="section-label mb-4">Portfolio</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          My <span className="neon-text">Projects</span>
        </h1>
        <p className="text-foreground/40 text-lg max-w-xl leading-relaxed">
          A collection of data science, machine learning, and AI projects
          showcasing real-world problem solving.
        </p>
      </motion.div>

      {/* Featured Project */}
      {featuredProject && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-12"
        >
          <div
            className="group glass-card p-8 md:p-10 relative overflow-hidden cursor-pointer border border-accent-primary/20 hover:border-accent-primary/40 transition-all duration-300"
            onClick={() => setSelectedProject(featuredProject)}
          >
            {/* Featured badge */}
            <div className="absolute top-6 right-6 flex items-center gap-1.5">
              <Star size={12} className="text-accent-primary fill-accent-primary" />
              <span className="text-[10px] font-mono text-accent-primary">
                Featured Project
              </span>
            </div>

            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-cyan" />

            <div className="grid md:grid-cols-[2fr_1fr] gap-8">
              <div>
                <span className="section-label mb-3 block">
                  {featuredProject.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent-primary transition-colors">
                  {featuredProject.title}
                </h2>
                <p className="text-foreground/40 text-sm leading-relaxed mb-6 max-w-lg">
                  {featuredProject.longDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <span key={tag} className="tag-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div className="space-y-2">
                  {featuredProject.highlights.slice(0, 3).map((h, i) => (
                    <div
                      key={i}
                      className="text-xs text-foreground/30 flex items-start gap-2"
                    >
                      <span className="text-accent-primary mt-0.5">▹</span>
                      {h}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-border-subtle text-xs font-mono text-foreground/50 hover:text-foreground hover:border-foreground/30 transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex items-center gap-2 mb-8 overflow-x-auto pb-2"
      >
        <Filter size={14} className="text-foreground/30 shrink-0" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
              activeCategory === cat
                ? "bg-accent-primary/15 text-accent-primary border border-accent-primary/30"
                : "text-foreground/40 hover:text-foreground border border-transparent hover:bg-white/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group"
            >
              <div
                className="glass-card-hover p-8 cursor-pointer h-full flex flex-col"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="section-label">{project.category}</span>
                  <ArrowUpRight
                    size={16}
                    className="text-foreground/15 group-hover:text-accent-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-accent-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-foreground/35 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
