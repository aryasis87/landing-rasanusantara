import Link from "next/link";

export const metadata = { title: "Kartu tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center bg-rice-2 px-6 pt-20">
      <div className="recipe-card mx-auto max-w-xl -rotate-1 bg-rice p-10 text-center">
        <p className="recipe-label text-clay">404</p>
        <h1 className="mt-3 text-4xl font-semibold text-bark">Kartu ini tidak ada di laci</h1>
        <p className="mt-4 leading-relaxed">Halaman yang Anda cari tidak ditemukan. Mungkin alamatnya salah ketik.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/" className="bg-clay px-6 py-3.5 font-semibold text-rice hover:bg-clay-2">Ke beranda</Link>
          <Link href="/kartu-resep" className="border border-bark/30 px-6 py-3.5 font-semibold text-bark hover:border-bark">Semua kartu resep</Link>
        </div>
      </div>
    </main>
  );
}
