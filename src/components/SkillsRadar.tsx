"use client";

import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

const data = {
  labels: ["Python", "SQL", "ML/AI", "Data Viz", "Power BI", "Cloud"],
  datasets: [
    {
      label: "Proficiency",
      data: [90, 82, 85, 88, 80, 70],
      backgroundColor: "rgba(59, 130, 246, 0.15)",
      borderColor: "rgba(59, 130, 246, 0.8)",
      borderWidth: 2,
      pointBackgroundColor: "#3b82f6",
      pointBorderColor: "#3b82f6",
      pointHoverBackgroundColor: "#8b5cf6",
      pointRadius: 4,
      pointHoverRadius: 6,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: true,
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
  },
  scales: {
    r: {
      beginAtZero: true,
      max: 100,
      ticks: {
        display: false,
        stepSize: 20,
      },
      grid: {
        color: "rgba(99, 102, 241, 0.1)",
        circular: true,
      },
      angleLines: {
        color: "rgba(99, 102, 241, 0.1)",
      },
      pointLabels: {
        color: "rgba(226, 232, 240, 0.6)",
        font: {
          size: 11,
          family: "var(--font-mono), monospace",
        },
      },
    },
  },
} as const;

export default function SkillsRadar() {
  return (
    <div className="w-full max-w-md mx-auto">
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <Radar data={data} options={options as any} />
    </div>
  );
}
