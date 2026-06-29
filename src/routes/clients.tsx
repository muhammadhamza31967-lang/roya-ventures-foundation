import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StatGrid } from "@/components/site/StatGrid";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Reveal } from "@/components/site/Reveal";
import { Quote } from "lucide-react";
import heroClients from "@/assets/hero-clients.jpg";
import featureHQ from "@/assets/feature-headquarters.jpg";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients — Roya Ventures" },
      { name: "description", content: "A confidential roster of clients across five continents — from listed multinationals to founder-led enterprises and sovereign institutions." },
      { property: "og:title", content: "Clients — Roya Ventures" },
      { property: "og:description", content: "Trusted by leaders across industries and geographies." },
    ],
  }),
  component: ClientsPage,
});

const TESTIMONIALS = [
  {
    quote: "Roya brought a level of strategic clarity and discretion that few firms can match. They became an extension of our leadership team during a defining moment for the company.",
    name: "Chief Executive Officer",
    org: "Listed Industrial Group",
  },
  {
    quote: "Their counsel through the transaction was steady, candid and consistently aligned with our long-term interest. We would not have closed without them.",
    name: "Chair of the Board",
    org: "Family-Owned Conglomerate",
  },
];

function ClientsPage() {
  return (
    <SiteLayout transparentHeader>
      <PageHero
        eyebrow="Our clients"
        title={<>A confidential roster of <span className="text-[var(--gold)]">global leaders</span>.</>}
        subtitle="From founder-led enterprises to listed multinationals and sovereign institutions, leaders entrust us with the moments that matter most."
        image={heroClients}
        height="compact"
      />

      {/* Stats band — image-backed dark */}
      <section className="relative section-y overflow-hidden text-white bg-noise">
        <div className="absolute inset-0 -z-20">
          <img src={featureHQ} alt="" loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-deep)]/95 via-[var(--navy-deep)]/90 to-[color-mix(in_oklab,var(--emerald-deep)_80%,var(--navy-deep))]/95" />
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_55%)]" />
        <div className="container-px mx-auto">
          <div className="max-w-3xl mx-auto mb-16">
            <SectionHeading
              eyebrow="At a glance"
              title={<>Trust earned across <em className="not-italic text-[var(--gold)]">continents and decades.</em></>}
              align="center"
              invert
            />
          </div>
          <StatGrid
            invert
            stats={[
              { value: "280", suffix: "+", label: "Mandates delivered" },
              { value: "40", suffix: "+", label: "Markets served" },
              { value: "16", label: "Years of practice" },
              { value: "98", suffix: "%", label: "Client retention" },
            ]}
          />
        </div>
      </section>

      {/* Premium logo showcase */}
      <section className="section-y relative overflow-hidden" style={{ background: "var(--grad-ivory)" }}>
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="A selection"
            title={<>With permission, a selection of <em className="not-italic text-[var(--gold)]">those we have served.</em></>}
            description="Many engagements remain confidential. A representative sample of public-facing relationships is shown below."
          />
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {Array.from({ length: 20 }).map((_, i) => (
              <Reveal key={i} delay={(i % 10) * 0.03}>
                <div className="group aspect-[5/3] rounded-2xl bg-card border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] flex items-center justify-center shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--gold)]/40 hover:shadow-[var(--shadow-elegant)] relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="font-display text-base font-light tracking-[0.32em] text-[var(--navy)]/40 transition-colors group-hover:text-[var(--navy)]">
                    CLIENT {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — premium quote cards */}
      <section className="section-y relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-radial-gold" />
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="In their words"
            title={<>What our clients <em className="not-italic text-[var(--gold)]">say.</em></>}
            align="center"
          />
          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <figure className="group relative overflow-hidden rounded-2xl bg-card border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] shadow-[var(--shadow-card)] p-10 md:p-14 h-full transition-all duration-500 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1">
                  <div className="absolute -top-8 -right-8 h-40 w-40 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_70%)] opacity-50" />
                  <Quote className="h-12 w-12 text-[var(--gold)]" strokeWidth={1.25} />
                  <blockquote className="mt-8 font-display text-xl md:text-2xl leading-[1.45] text-[var(--navy)] font-light tracking-[-0.015em]">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-10 pt-8 border-t border-[color-mix(in_oklab,var(--navy)_10%,transparent)] flex items-center gap-4">
                    <div className="h-px w-8 bg-[var(--gold)]" />
                    <div>
                      <p className="font-semibold text-[var(--navy)]">{t.name}</p>
                      <p className="text-sm text-muted-foreground tracking-wide">{t.org}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Confidential by design"
        title="Speak with us about your mandate."
        description="Every conversation begins under confidentiality. Tell us what's at stake — we will respond personally."
      />
    </SiteLayout>
  );
}
