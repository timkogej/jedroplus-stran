"use client";

import { useId } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconVariant = "solid" | "gradient";

interface GradientIconProps {
  icon: LucideIcon;
  variant?: IconVariant;
  className?: string;
}

export function GradientIcon({
  icon: Icon,
  variant = "solid",
  className,
}: GradientIconProps) {
  const gradientId = useId();

  if (variant === "gradient") {
    return (
      <span className={cn("inline-flex shrink-0", className)}>
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5B4FE9" />
              <stop offset="100%" stopColor="#4ECDC4" />
            </linearGradient>
          </defs>
        </svg>
        <Icon
          aria-hidden="true"
          className="w-full h-full"
          style={{ stroke: `url(#${gradientId})` }}
        />
      </span>
    );
  }

  return (
    <Icon
      aria-hidden="true"
      className={cn("shrink-0 text-gray-900", className)}
    />
  );
}
