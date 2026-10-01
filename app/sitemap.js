import { RESEP, SITE } from "@/lib/resep";

export default function sitemap() {
  const now = new Date();
  return [
    { url: SITE, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/kartu-resep`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...RESEP.map((r) => ({ url: `${SITE}/kartu-resep/${r.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 })),
  ];
}
