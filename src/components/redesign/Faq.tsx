import type { ReactNode } from "react";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import type { FaqItem } from "./faq-data";

// Server-rendered FAQ accordion. Uses native <details>/<summary>, so every
// answer is present in the HTML (citable, SEO-friendly, works without JS) and
// only one item is open at a time within the group is left to the browser.
// Also emits the matching FAQPage JSON-LD for the same items.
export function Faq({
  items,
  eyebrow = "Pogosta vprašanja",
  title,
  soft = false,
  reveal = false,
}: {
  items: FaqItem[];
  eyebrow?: string;
  title?: ReactNode;
  soft?: boolean;
  reveal?: boolean;
}) {
  return (
    <section className={`section${soft ? " section--soft" : ""}`}>
      <JsonLd schema={faqPageSchema(items)} />
      <div className="wrap">
        <div className={`section-head${reveal ? " reveal" : ""}`}>
          <span className="eyebrow">{eyebrow}</span>
          {title ? <h2 style={{ marginTop: 18 }}>{title}</h2> : null}
        </div>
        <div className="faq">
          {items.map((it) => (
            <details className="faq__item" key={it.q}>
              <summary className="faq__q">
                <span>{it.q}</span>
                <span className="faq__ico" aria-hidden="true" />
              </summary>
              <div className="faq__a">
                <div className="faq__a-inner">{it.a}</div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
