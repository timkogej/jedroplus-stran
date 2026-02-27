'use client';

interface GradientBlobProps {
  className?: string;
  colors?: string[];
  alt?: boolean;
}

// Pure CSS animation — runs on compositor thread with zero JS per-frame cost.
export function GradientBlob({
  className = '',
  colors = ['#5B4FE9', '#3B82F6', '#4ECDC4'],
  alt = false,
}: GradientBlobProps) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${alt ? 'blob-animate-alt' : 'blob-animate'} ${className}`}
      style={{
        background: `radial-gradient(circle, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`,
      }}
    />
  );
}
