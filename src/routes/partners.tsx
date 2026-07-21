import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Handshake } from "lucide-react";
import heroImage from "@/assets/hero-clients.jpg";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — Roya Ventures" },
      { name: "description", content: "Roya Ventures' strategic technology partnerships — delivering innovative, reliable, and future-ready engineering and digital infrastructure solutions." },
      { property: "og:title", content: "Partners — Roya Ventures" },
      { property: "og:description", content: "Strategic technology partnerships that power world-class infrastructure." },
    ],
  }),
  component: PartnersPage,
});

const PARTNER_CATEGORIES: { name: string; placeholders: number }[] = [
  { name: "Core Technology Partners", placeholders: 6 },
  { name: "Software Platforms", placeholders: 6 },
  { name: "AI Video Analytics", placeholders: 6 },
  { name: "Smart Screens / Ink Displays", placeholders: 6 },
];

function PartnersPage() {
  return (
    <SiteLayout transparentHeader>
      <PageHero
        eyebrow="Our Network"
        title={<>Our <span className="text-[var(--gold)]">Partners</span></>}
        subtitle="A curated ecosystem of technology manufacturers and solution providers enabling world-class engineering and digital infrastructure."
        image={heroImage}
        height="compact"
        align="center"
      />

      {/* Introduction */}
      <section className="relative section-y overflow-hidden" style={{ background: "var(--grad-ivory)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-radial-gold opacity-60" />
        <div className="container-px mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow="Strategic Partnerships"
              title={<>Building Strong <em className="not-italic text-[var(--gold)]">Technology Partnerships</em></>}
              description="Roya Ventures collaborates with globally recognized technology manufacturers and solution providers to deliver innovative, reliable, and future-ready engineering and digital infrastructure solutions. Our strategic partnerships enable us to implement world-class technologies while maintaining the highest standards of quality, performance, and customer satisfaction."
              align="center"
            />
          </div>
        </div>
      </section>

      {/* Partner categories */}
      <section className="section-y relative overflow-hidden bg-[var(--ivory)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--gold)_10%,transparent),transparent_55%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--navy)_8%,transparent),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />

        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Partner Ecosystem"
            title={<>The specialists who <em className="not-italic text-[var(--gold)]">power our delivery.</em></>}
            description="A structured view of our technology alliances. Official partner logos will be added as they are finalized."
            align="center"
          />

          <div className="mt-20 space-y-24">
            {PARTNER_CATEGORIES.map((category, catIndex) => (
              <Reveal key={category.name} delay={catIndex * 0.05}>
                <div>
                  {/* Category heading */}
                  <div className="mb-10 flex flex-col items-center text-center">
                    <p className="font-display text-[11px] tracking-[0.32em] uppercase text-[var(--gold)]">
                      {String(catIndex + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-2xl md:text-3xl text-[var(--navy)] tracking-[-0.01em]">
                      {category.name}
                    </h3>
                    <div className="mt-5 flex items-center gap-3">
                      <span className="h-px w-8 bg-[color-mix(in_oklab,var(--gold)_40%,transparent)]" />
                      <span className="h-1.5 w-1.5 rotate-45 bg-[var(--gold)]" />
                      <span className="h-px w-8 bg-[color-mix(in_oklab,var(--gold)_40%,transparent)]" />
                    </div>
                  </div>

                  {/* Placeholder logo grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                    {Array.from({ length: category.placeholders }).map((_, i) => (
                      <Reveal key={i} delay={(i % 12) * 0.025}>
                        <div
                          data-cursor="hover"
                          className="group relative aspect-square rounded-2xl bg-white border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] flex flex-col items-center justify-center gap-3 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--gold)]/50 hover:shadow-[var(--shadow-elegant)] overflow-hidden"
                        >
                          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklab,var(--gold)_10%,transparent),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--gold)_30%,transparent)] bg-[var(--gold)]/5 transition-colors duration-500 group-hover:bg-[var(--gold)]/10">
                            <Handshake className="h-6 w-6 text-[var(--gold)]/70 transition-colors duration-500 group-hover:text-[var(--gold)]" strokeWidth={1.5} />
                          </div>
                          <span className="relative font-display text-[11px] tracking-[0.18em] uppercase text-[var(--navy)]/50 transition-colors duration-500 group-hover:text-[var(--navy)]/70">
                            Logo Coming Soon
                          </span>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />
      </section>
    </SiteLayout>
  );
}
