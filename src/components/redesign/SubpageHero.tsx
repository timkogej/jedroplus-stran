import type { ReactNode } from "react";

type SubpageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  actions?: ReactNode;
  tone?: "light" | "purple";
};

export function SubpageHero({
  eyebrow,
  title,
  description,
  actions,
  tone = "light",
}: SubpageHeroProps) {
  return (
    <section className={`subhero subhero--${tone}`}>
      <div className="subhero__glow" aria-hidden="true" />
      <div className="wrap subhero__in">
        <p className="subhero__eyebrow">{eyebrow}</p>
        <h1 className="subhero__title">{title}</h1>
        <p className="subhero__description">{description}</p>
        {actions ? <div className="subhero__actions">{actions}</div> : null}
      </div>
    </section>
  );
}
