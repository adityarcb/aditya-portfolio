"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  github: string;
  live?: string;
  featured?: boolean;
  highlights: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative glass-card p-8 md:p-10 max-w-2xl w-full max-h-[85vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/5 border border-border-subtle flex items-center justify-center text-foreground/40 hover:text-foreground hover:border-foreground/30 transition-all"
          >
            <X size={16} />
          </button>

          {/* Category */}
          <span className="section-label">{project.category}</span>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-4">
            {project.title}
          </h2>

          {/* Description */}
          <p className="text-foreground/50 leading-relaxed mb-6">
            {project.longDescription}
          </p>

          {/* Highlights */}
          <div className="mb-6">
            <h4 className="text-xs font-mono text-foreground/30 tracking-widest uppercase mb-3">
              Key Highlights
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="text-sm text-foreground/40 flex items-start gap-2"
                >
                  <span className="text-accent-primary mt-0.5">▹</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h4 className="text-xs font-mono text-foreground/30 tracking-widest uppercase mb-3">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-border-subtle text-sm font-medium text-foreground/70 hover:text-foreground hover:border-foreground/30 transition-all"
            >
              <Github size={16} /> GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-primary text-white text-sm font-medium hover:bg-accent-primary/90 transition-all shadow-lg shadow-accent-primary/20"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
