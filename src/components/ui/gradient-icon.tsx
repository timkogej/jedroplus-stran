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
  const strokeValue =
    variant === "gradient" ? `url(#${gradientId})` : "currentColor";

  return (
    <Icon
      aria-hidden="true"
      className={cn(
        "shrink-0",
        variant === "solid" && "text-gray-900",
        className
      )}
      stroke={strokeValue}
    >
      {variant === "gradient" && (
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5B4FE9" />
            <stop offset="100%" stopColor="#4ECDC4" />
          </linearGradient>
        </defs>
      )}
    </Icon>
  );
}
