import Link from "next/link";
import type { ReactNode, CSSProperties } from "react";

export function GradText({ children }: { children: ReactNode }) {
  return <span className="grad-text">{children}</span>;
}

export function Eyebrow({
  children,
  plain = false,
  style,
}: {
  children: ReactNode;
  plain?: boolean;
  style?: CSSProperties;
}) {
  return (
    <span className={`eyebrow${plain ? " eyebrow--plain" : ""}`} style={style}>
      {children}
    </span>
  );
}

/** Striped placeholder media (intentional in the hi-fi design). */
export function Ph({
  tag,
  dark = false,
  style,
}: {
  tag?: string;
  dark?: boolean;
  style?: CSSProperties;
}) {
  return (
    <div className={`ph${dark ? " ph--dark" : ""}`} style={style}>
      {tag ? <span className="ph__tag">{tag}</span> : null}
    </div>
  );
}

const ARROW = <span className="arr">→</span>;

/** Button that renders a Next <Link> for internal routes, <a> otherwise. */
export function Btn({
  href,
  variant = "primary",
  lg = false,
  arrow = false,
  className,
  style,
  children,
}: {
  href: string;
  variant?: "primary" | "grad" | "ghost" | "light" | "out";
  lg?: boolean;
  arrow?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const cls = [
    "btn",
    `btn--${variant}`,
    lg ? "btn--lg" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");
  const inner = (
    <>
      {children}
      {arrow ? <> {ARROW}</> : null}
    </>
  );
  const internal = href.startsWith("/") && !href.startsWith("//");
  if (internal) {
    return (
      <Link href={href} className={cls} style={style}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} style={style}>
      {inner}
    </a>
  );
}
