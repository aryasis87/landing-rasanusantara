import Link from 'next/link';
import { LAYANAN } from '@/lib/resep';
import Koleksi from './Koleksi';

export default function Layanan() {
  return (
    <>
      <section className="bg-rice-2 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="recipe-label mb-4 text-clay">Contoh kartu</p>
              <h2 className="text-[2rem] leading-[1.1] font-semibold text-bark md:text-[2.7rem]">Empat resep dari empat pulau</h2>
            </div>
            <Link href="/kartu-resep" className="recipe-label shrink-0 text-clay underline underline-offset-4">Semua kartu resep</Link>
          </div>
          <Koleksi />
        </div>
      </section>

      <section id="layanan" className="scroll-mt-16 bg-rice px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="recipe-label mb-4 text-clay">Layanan</p>
          <h2 className="max-w-2xl text-[2rem] leading-[1.1] font-semibold text-bark md:text-[2.7rem]">Mulai dari satu resep, atau satu menu daerah penuh</h2>
          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {LAYANAN.map((l) => (
              <li key={l.nama} className={`flex flex-col p-7 ${l.unggulan ? 'bg-indigo-batik text-rice' : 'recipe-card bg-rice-2'}`}>
                <h3 className={`text-xl font-semibold ${l.unggulan ? 'text-rice' : 'text-bark'}`}>{l.nama}</h3>
                <p className={`mt-3 text-3xl font-semibold ${l.unggulan ? 'text-rice' : 'text-bark'}`}>
                  {l.harga} <span className={`text-sm font-normal ${l.unggulan ? 'text-rice/80' : ''}`}>{l.satuan}</span>
                </p>
                <ul className={`mt-6 space-y-2.5 border-t pt-6 text-sm ${l.unggulan ? 'border-rice/25' : 'border-bark/20'}`}>
                  {l.isi.map((x) => (
                    <li key={x} className="flex gap-3">
                      <span aria-hidden="true" className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${l.unggulan ? 'bg-rice' : 'bg-clay'}`} />
                      {x}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
