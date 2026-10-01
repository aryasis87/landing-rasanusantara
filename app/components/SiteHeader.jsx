import Link from 'next/link';

const NAV = [
  ['/#anatomi', 'Anatomi kartu'],
  ['/kartu-resep', 'Kartu resep'],
  ['/#layanan', 'Layanan'],
];

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-bark/10 bg-rice/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="/" className="font-[family-name:var(--font-fraunces)] text-xl font-semibold text-bark">
          Rasa <span className="text-clay">Nusantara</span>
        </Link>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href} className="recipe-label text-bark-soft transition-colors hover:text-clay">
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/#minta" className="inline-flex bg-clay px-4 py-2.5 text-sm font-semibold text-rice hover:bg-clay-2">
          3 kartu gratis
        </Link>
      </div>
    </header>
  );
}
