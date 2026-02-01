import { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "strong" | "subtle";
}

export default function GlassCard({
  children,
  className,
  hover = false,
  variant = "default",
  ...props
}: GlassCardProps) {
  const variantClasses = {
    default: "glass",
    strong: "glass-strong",
    subtle: "glass-subtle",
  };

  return (
    <div
      className={cn(
        variantClasses[variant],
        "rounded-2xl p-6",
        hover && "card-hover cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
