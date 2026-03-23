import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "blue" | "purple" | "neutral";
}

export default function Badge({ children, className, variant = "neutral" }: BadgeProps) {
  const variants = {
    blue: "bg-accent-primary/10 text-accent-primary border-accent-primary/20",
    purple: "bg-charcoal text-foreground border-border-subtle hover:border-foreground/20",
    neutral: "bg-charcoal/50 text-foreground/80 border-charcoal shadow-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border font-mono tracking-tight",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
