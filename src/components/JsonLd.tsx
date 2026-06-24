// Renders a Schema.org JSON-LD object as a <script> tag.
// Server component — safe to use in layouts and server pages.
export function JsonLd({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
