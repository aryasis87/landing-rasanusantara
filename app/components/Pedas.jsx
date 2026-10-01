/* Tingkat pedas 0–3, digambar sebagai tiga titik cabai. */
export default function Pedas({ n }) {
  return (
    <span className="inline-flex items-center gap-1" role="img" aria-label={n ? `Pedas tingkat ${n} dari 3` : 'Tidak pedas'}>
      {[1, 2, 3].map((k) => (
        <span key={k} aria-hidden="true" className={`h-2 w-2 rounded-full ${k <= n ? 'bg-clay' : 'border border-bark/30'}`} />
      ))}
    </span>
  );
}
