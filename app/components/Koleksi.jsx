import Link from 'next/link';
import { RESEP, hitung, menit, rupiah } from '@/lib/resep';
import Pedas from './Pedas';

export default function Koleksi({ judulTingkat = 'h2' }) {
  const H = judulTingkat === 'h2' ? 'h3' : 'h2';
  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {RESEP.map((r, i) => {
        const h = hitung(r);
        return (
          <li key={r.slug}>
            <Link
              href={`/kartu-resep/${r.slug}`}
              className={`recipe-card block h-full bg-rice p-7 transition-transform hover:-translate-y-1 ${i % 2 ? 'rotate-[0.6deg]' : '-rotate-[0.6deg]'}`}
            >
              <span className="flex items-start justify-between gap-4">
                <span className="recipe-label text-clay">{r.asal}</span>
                <Pedas n={r.pedas} />
              </span>
              <H className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-bark">{r.nama}</H>
              <span className="mt-3 block leading-relaxed">{r.ringkas}</span>
              <span className="mt-5 grid grid-cols-3 gap-3 border-t border-bark/20 pt-4 text-sm">
                <span><span className="recipe-label block">Porsi</span><span className="mt-1 block text-bark">{r.porsi}</span></span>
                <span><span className="recipe-label block">Masak</span><span className="mt-1 block text-bark">{menit(r.masak)}</span></span>
                <span><span className="recipe-label block">HPP</span><span className="mt-1 block font-semibold text-bark">{rupiah(h.hpp)}</span></span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
