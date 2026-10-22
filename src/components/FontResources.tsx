// Inter stays local; General Sans retains its original provider and typography.
export function FontResources() {
  return <>
    <link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    <link rel="preload" href="/fonts/inter-latin-ext.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    <link rel="preconnect" href="https://api.fontshare.com" />
    <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
    <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap" />
  </>;
}
