"use client";

import { BookOpen, CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const trainingTimeline = [
  {
    title: "Data Structures & Algorithms Training",
    organization: "LPU / Online Platform",
    period: "Summer 2024 - 2025",
    description:
      "Intensive training program focused on building strong problem-solving foundations through data structures and algorithms. Covered both theoretical concepts and competitive programming applications.",
    topics: [
      { name: "Trees & Binary Search Trees", completed: true },
      { name: "Graphs & Graph Algorithms", completed: true },
      { name: "Recursion & Backtracking", completed: true },
      { name: "Dynamic Programming", completed: true },
      { name: "Sorting & Searching Optimization", completed: true },
      { name: "Greedy Algorithms", completed: true },
      { name: "Linked Lists & Stacks", completed: true },
      { name: "Hash Maps & Sets", completed: true },
    ],
    focus: [
      "Problem-solving with optimal time & space complexity",
      "Competitive programming techniques",
      "Pattern recognition in algorithmic challenges",
      "Python-based implementations",
    ],
    color: "#3b82f6",
  },
  {
    title: "Python Programming Fundamentals",
    organization: "LPU / Online Platform",
    period: "2024",
    description:
      "Comprehensive Python programming training covering core concepts, OOP, file handling, and library ecosystem for data science applications.",
    topics: [
      { name: "Core Python & OOP", completed: true },
      { name: "NumPy & Pandas", completed: true },
      { name: "Matplotlib & Seaborn", completed: true },
      { name: "File I/O & APIs", completed: true },
    ],
    focus: [
      "Writing clean, Pythonic code",
      "Data manipulation with Pandas",
      "Scientific computing with NumPy",
    ],
    color: "#8b5cf6",
  },
  {
    title: "Cloud Infrastructure & Data Analytics",
    organization: "LPU / Oracle Academy",
    period: "2024 - 2025",
    description:
      "Training on cloud computing fundamentals and data analytics using Oracle Cloud Infrastructure, covering data science services and cloud-based ML workflows.",
    topics: [
      { name: "OCI Fundamentals", completed: true },
      { name: "Data Science on OCI", completed: true },
      { name: "Cloud Data Pipelines", completed: true },
      { name: "Analytics & Visualization", completed: true },
    ],
    focus: [
      "Cloud-native data science workflows",
      "Enterprise data analytics",
      "Infrastructure as a Service (IaaS)",
    ],
    color: "#06b6d4",
  },
];

export default function TrainingPage() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 max-w-5xl mx-auto relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="section-label mb-4">Learning Journey</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          <span className="neon-text">Training</span> & Education
        </h1>
        <p className="text-foreground/40 text-lg max-w-xl leading-relaxed">
          A timeline of intensive training programs and courses that built my
          foundation in data science and software engineering.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-primary/30 via-accent-secondary/20 to-transparent" />

        <div className="space-y-12">
          {trainingTimeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="relative pl-16 md:pl-20"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-4 md:left-6 w-5 h-5 rounded-full border-2 bg-background flex items-center justify-center"
                style={{ borderColor: item.color }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              </div>

              {/* Card */}
              <div className="glass-card p-6 md:p-8 relative overflow-hidden">
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, ${item.color}, transparent)`,
                  }}
                />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <BookOpen size={18} style={{ color: item.color }} />
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                  <span className="text-xs font-mono text-foreground/30">
                    {item.period}
                  </span>
                </div>

                <p className="text-xs font-mono text-foreground/40 mb-3">
                  {item.organization}
                </p>

                <p className="text-foreground/40 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Topics Grid */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono text-foreground/30 tracking-widest uppercase mb-3">
                    Topics Covered
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {item.topics.map((topic) => (
                      <div
                        key={topic.name}
                        className="flex items-center gap-2 text-sm text-foreground/50"
                      >
                        <CheckCircle2 size={14} style={{ color: item.color }} />
                        <span>{topic.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Focus Areas */}
                <div>
                  <h4 className="text-xs font-mono text-foreground/30 tracking-widest uppercase mb-3">
                    Key Focus
                  </h4>
                  <div className="space-y-1.5">
                    {item.focus.map((f, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-2 text-sm text-foreground/35"
                      >
                        <ChevronRight size={12} style={{ color: item.color }} />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
