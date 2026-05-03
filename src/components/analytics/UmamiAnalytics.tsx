import Script from 'next/script';

function getUmamiConfig(): { src: string; id: string } | null {
  const src = process.env.NEXT_PUBLIC_UMAMI_SRC;
  const id = process.env.NEXT_PUBLIC_UMAMI_ID;
  if (!src || !id) return null;
  const placeholder =
    /your-|placeholder|example\.com|^\/\//i.test(src) ||
    /your-|placeholder/i.test(id);
  if (placeholder) return null;
  return { src, id };
}

export default function UmamiAnalytics() {
  const cfg = getUmamiConfig();
  if (!cfg) return null;

  return (
    <Script
      id="umami-analytics"
      src={cfg.src}
      data-website-id={cfg.id}
      strategy="afterInteractive"
      async
    />
  );
}
