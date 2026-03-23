"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillMeterProps {
  skills: Skill[];
}

export default function SkillMeter({ skills }: SkillMeterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-4">
      {skills.map((skill, i) => (
        <div key={skill.name} className="group">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">
              {skill.name}
            </span>
            <span className="text-xs font-mono text-foreground/30">
              {skill.level}%
            </span>
          </div>
          <div className="h-2 rounded-full bg-white/5 overflow-hidden relative">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
              className="h-full rounded-full relative"
              style={{
                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                boxShadow: `0 0 12px ${skill.color}40`,
              }}
            >
              <div
                className="absolute inset-0 rounded-full opacity-50"
                style={{
                  background: `linear-gradient(90deg, transparent, ${skill.color}40, transparent)`,
                  animation: "shimmer 2s ease-in-out infinite",
                }}
              />
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
}
