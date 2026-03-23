"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Activity, BarChart3 } from "lucide-react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip);

const kpis = [
  {
    label: "Model Accuracy",
    value: "94.2%",
    change: "+2.1%",
    positive: true,
    icon: TrendingUp,
    color: "#3b82f6",
  },
  {
    label: "Claims Processed",
    value: "1,247",
    change: "+18.5%",
    positive: true,
    icon: BarChart3,
    color: "#8b5cf6",
  },
  {
    label: "Avg. Error Rate",
    value: "3.8%",
    change: "-1.2%",
    positive: true,
    icon: TrendingDown,
    color: "#06b6d4",
  },
  {
    label: "Data Points",
    value: "50K+",
    change: "+5K",
    positive: true,
    icon: Activity,
    color: "#ec4899",
  },
];

const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  datasets: [
    {
      label: "Accuracy (%)",
      data: [85, 87, 88, 90, 89, 92, 93, 94.2],
      borderColor: "#3b82f6",
      backgroundColor: "rgba(59, 130, 246, 0.08)",
      tension: 0.4,
      fill: true,
      pointRadius: 3,
      pointBackgroundColor: "#3b82f6",
      borderWidth: 2,
    },
    {
      label: "Predictions",
      data: [70, 75, 78, 82, 80, 85, 88, 91],
      borderColor: "#8b5cf6",
      backgroundColor: "rgba(139, 92, 246, 0.05)",
      tension: 0.4,
      fill: true,
      pointRadius: 3,
      pointBackgroundColor: "#8b5cf6",
      borderWidth: 2,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      backgroundColor: "rgba(15, 23, 42, 0.9)",
      titleColor: "#e2e8f0",
      bodyColor: "#93c5fd",
      borderColor: "rgba(59, 130, 246, 0.3)",
      borderWidth: 1,
      cornerRadius: 8,
      padding: 12,
    },
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: { color: "rgba(99, 102, 241, 0.06)" },
      ticks: {
        color: "rgba(226, 232, 240, 0.3)",
        font: { size: 10, family: "monospace" },
      },
      border: { display: false },
    },
    y: {
      grid: { color: "rgba(99, 102, 241, 0.06)" },
      ticks: {
        color: "rgba(226, 232, 240, 0.3)",
        font: { size: 10, family: "monospace" },
      },
      border: { display: false },
    },
  },
} as const;

export default function DataDashboard() {
  return (
    <div className="glass-card p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-mono text-foreground/50 tracking-wider uppercase">
          Analytics Dashboard
        </h3>
        <span className="flex items-center gap-1.5 text-[10px] font-mono text-green-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Live
        </span>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="kpi-card p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <Icon size={14} style={{ color: kpi.color }} />
                <span
                  className={`text-[10px] font-mono ${
                    kpi.positive ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {kpi.change}
                </span>
              </div>
              <div className="text-lg md:text-xl font-bold text-foreground">
                {kpi.value}
              </div>
              <div className="text-[10px] font-mono text-foreground/30 mt-1">
                {kpi.label}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Chart */}
      <div className="h-48 md:h-56">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <Line data={chartData} options={chartOptions as any} />
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-[2px] bg-[#3b82f6] rounded" />
          <span className="text-[10px] font-mono text-foreground/30">
            Accuracy
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-[2px] bg-[#8b5cf6] rounded" />
          <span className="text-[10px] font-mono text-foreground/30">
            Predictions
          </span>
        </div>
      </div>
    </div>
  );
}
