"use client";

import { motion } from "framer-motion";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Generate a realistic-looking contribution heatmap
function generateHeatmap() {
  const weeks = 20;
  const days = 7;
  const data: number[][] = [];
  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      const rand = Math.random();
      if (rand < 0.3) week.push(0);
      else if (rand < 0.55) week.push(1);
      else if (rand < 0.75) week.push(2);
      else if (rand < 0.9) week.push(3);
      else week.push(4);
    }
    data.push(week);
  }
  return data;
}

const heatmap = generateHeatmap();

const intensityColors = [
  "bg-white/5",
  "bg-accent-primary/20",
  "bg-accent-primary/40",
  "bg-accent-primary/60",
  "bg-accent-primary/80",
];

const stats = [
  { label: "Repositories", value: "12+" },
  { label: "Commits (2025)", value: "200+" },
  { label: "Languages", value: "5" },
  { label: "Stars", value: "8" },
];

export default function GitHubStats() {
  return (
    <div className="glass-card p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-mono text-foreground/50 tracking-wider uppercase">
          GitHub Activity
        </h3>
        <a
          href="https://github.com/adityarcb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-accent-primary hover:underline"
        >
          @adityarcb
        </a>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-xl md:text-2xl font-bold neon-text-blue">
              {stat.value}
            </div>
            <div className="text-[10px] font-mono text-foreground/30 mt-1">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Heatmap */}
      <div className="overflow-x-auto">
        <div className="flex gap-[3px] min-w-fit">
          {heatmap.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((day, di) => (
                <motion.div
                  key={di}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (wi * 7 + di) * 0.003 }}
                  className={`w-3 h-3 rounded-sm ${intensityColors[day]} transition-colors hover:ring-1 hover:ring-accent-primary/40`}
                  title={`${day} contributions`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Month labels */}
      <div className="flex justify-between mt-2 px-1">
        {months.slice(0, 5).map((m) => (
          <span key={m} className="text-[9px] font-mono text-foreground/20">
            {m}
          </span>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-2 mt-4 justify-end">
        <span className="text-[9px] font-mono text-foreground/20">Less</span>
        {intensityColors.map((color, i) => (
          <div key={i} className={`w-3 h-3 rounded-sm ${color}`} />
        ))}
        <span className="text-[9px] font-mono text-foreground/20">More</span>
      </div>
    </div>
  );
}
