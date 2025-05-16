import React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  gradient?: "primary" | "secondary" | "accent" | "custom";
  from?: string;
  via?: string;
  to?: string;
  animate?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function GradientText({
  gradient = "primary",
  from,
  via,
  to,
  animate = false,
  className,
  children,
  ...props
}: GradientTextProps) {
  const gradientStyles = {
    primary: {
      background: "linear-gradient(to right, #00BDC9, #63D7E4, #D4F4F8)",
    },
    secondary: {
      background: "linear-gradient(to right, #4C5A6E, #67849C, #D4F4F8)",
    },
    accent: {
      background: "linear-gradient(to right, #FF5D78, #7E4F6D, #00BDC9)",
    },
    custom: {
      background: `linear-gradient(to right, ${from}, ${via}, ${to})`,
    },
  };

  const selectedGradient = gradient === "custom" && from && to 
    ? gradientStyles.custom 
    : gradientStyles[gradient];
  
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent",
        animate && "bg-[length:200%_200%] animate-gradient",
        className
      )}
      style={selectedGradient}
      {...props}
    >
      {children}
    </span>
  );
} 