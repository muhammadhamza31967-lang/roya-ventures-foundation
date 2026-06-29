import { SectionHeading } from "@/components/site/SectionHeading";

const PARTNERS = [
  "MICROSOFT",
  "CISCO",
  "DELL",
  "HP ENTERPRISE",
  "ORACLE",
  "VMWARE",
  "FORTINET",
  "JUNIPER",
  "SCHNEIDER",
  "HONEYWELL",
  "HIKVISION",
  "LENOVO",
];

export function PartnersMarquee() {
  // Duplicate the list to create a seamless loop
  const row = [...PARTNERS, ...PARTNERS];

  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "var(--grad-ivory)" }}>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-radial-gold opacity-60" />
      <div className="container-px mx-auto">
        <div className="mx-auto max-w-3xl text-center mb-14">
          <SectionHeading
            eyebrow="Trusted Partners"
            title={<>Engineered alongside the world's leading <em className="not-italic text-[var(--gold)]">technology brands.</em></>}
            description="We design and deploy with vendors trusted across enterprise infrastructure, networking, security and IT."
            align="center"
          />
        </div>
      </div>

      {/* Marquee */}
      <div
        className="relative group"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max marquee-track">
          {row.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="mx-3 flex h-24 w-56 shrink-0 items-center justify-center rounded-2xl border border-[color-mix(in_oklab,var(--navy)_10%,transparent)] bg-white/80 backdrop-blur-sm shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--gold)]/60 hover:shadow-[var(--shadow-elegant)]"
              data-cursor="hover"
            >
              <span className="font-display text-lg font-semibold tracking-[0.18em] text-[var(--navy)]/75 transition-colors duration-500 hover:text-[var(--gold)]">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
