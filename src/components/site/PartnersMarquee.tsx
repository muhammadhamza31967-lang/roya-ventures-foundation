import { SectionHeading } from "@/components/site/SectionHeading";
import band1 from "@/assets/partners/band1.jpg.asset.json";
import band2 from "@/assets/partners/band2.jpg.asset.json";
import band3 from "@/assets/partners/band3.jpg.asset.json";
import band4 from "@/assets/partners/band4.jpg.asset.json";
import band5 from "@/assets/partners/band5.jpg.asset.json";
import band6 from "@/assets/partners/band6.jpg.asset.json";
import band7 from "@/assets/partners/band7.jpg.asset.json";
import band8 from "@/assets/partners/band8.jpg.asset.json";
import band9 from "@/assets/partners/band9.jpg.asset.json";
import band10 from "@/assets/partners/band10.jpg.asset.json";

const PARTNERS = [
  { name: "Xpandretail", src: band1.url },
  { name: "TWW", src: band2.url },
  { name: "Fadel Software Solution", src: band3.url },
  { name: "Hikvision", src: band4.url },
  { name: "GoFrugal", src: band5.url },
  { name: "Sapaad", src: band6.url },
  { name: "IBM", src: band7.url },
  { name: "Avaya IP Office", src: band8.url },
  { name: "Trillion", src: band9.url },
  { name: "GoDaddy", src: band10.url },
];

export function PartnersMarquee() {
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

      <div
        className="relative group"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max marquee-track">
          {row.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="mx-4 flex h-28 w-56 shrink-0 items-center justify-center rounded-2xl border border-[color-mix(in_oklab,var(--navy)_10%,transparent)] bg-white shadow-[var(--shadow-card)] px-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--gold)]/60 hover:shadow-[var(--shadow-elegant)]"
              data-cursor="hover"
            >
              <img
                src={p.src}
                alt={p.name}
                loading="lazy"
                className="max-h-16 max-w-full w-auto h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
