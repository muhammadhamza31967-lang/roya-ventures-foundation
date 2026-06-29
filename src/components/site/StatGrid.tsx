export function StatGrid({
  stats,
  invert = false,
}: {
  stats: { value: string; label: string; suffix?: string }[];
  invert?: boolean;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[color-mix(in_oklab,var(--navy)_14%,transparent)] border-y border-[color-mix(in_oklab,var(--navy)_14%,transparent)]">
      {stats.map((s) => (
        <div key={s.label} className="p-8 md:p-10 first:border-l-0">
          <div className={["font-display flex items-baseline gap-1 text-4xl md:text-5xl font-semibold tracking-tight", invert ? "text-white" : "text-[var(--navy)]"].join(" ")}>
            <span>{s.value}</span>
            {s.suffix && <span className="text-[var(--gold)]">{s.suffix}</span>}
          </div>
          <p className={["mt-3 text-sm tracking-wide", invert ? "text-white/65" : "text-muted-foreground"].join(" ")}>{s.label}</p>
        </div>
      ))}
    </div>
  );
}
