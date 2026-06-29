import type { LucideIcon } from "lucide-react";

export function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}) {
  return (
    <article className="group relative bg-card p-8 md:p-10 border border-border transition-all duration-500 hover:border-[var(--gold)] hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
      {typeof index === "number" && (
        <span className="absolute right-7 top-7 text-xs tracking-[0.3em] text-muted-foreground/60">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <div className="grid h-14 w-14 place-items-center border border-[var(--gold)]/40 text-[var(--gold)] transition-all duration-500 group-hover:bg-[var(--gold)] group-hover:text-[var(--navy)]">
        <Icon className="h-6 w-6" strokeWidth={1.5} />
      </div>
      <h3 className="heading-md mt-8 text-[var(--navy)]">{title}</h3>
      <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>
      <div className="mt-8 h-px w-10 bg-[var(--gold)] transition-all duration-500 group-hover:w-20" />
    </article>
  );
}
