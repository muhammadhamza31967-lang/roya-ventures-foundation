import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Reveal } from "@/components/site/Reveal";
import { Quote } from "lucide-react";
import heroClients from "@/assets/hero-clients.jpg";

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

      {/* Stats band */}
      <section className="section-y">
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="At a glance"
            title="Trust earned across continents and decades."
            align="center"
          />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border border-y border-border">
            {[
              ["280+", "Mandates delivered"],
              ["40+", "Markets served"],
              ["16", "Years of practice"],
              ["98%", "Client retention"],
            ].map(([v, l]) => (
              <div key={l} className="p-8 md:p-10 text-center">
                <p className="font-display text-4xl md:text-5xl font-semibold text-[var(--navy)]">{v}</p>
                <p className="mt-3 text-sm text-muted-foreground tracking-wide">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo grid */}
      <section className="section-y bg-[var(--stone)]">
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="A selection"
            title="With permission, a selection of those we have served."
            description="Many engagements remain confidential. A representative sample of public-facing relationships is shown below."
          />
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-border border border-border">
            {Array.from({ length: 20 }).map((_, i) => (
              <Reveal key={i} delay={(i % 10) * 0.02}>
                <div className="aspect-[5/3] bg-background flex items-center justify-center group transition-colors hover:bg-[var(--stone)]">
                  <div className="font-display text-lg font-light tracking-[0.3em] text-muted-foreground/55 group-hover:text-[var(--navy)] transition-colors">
                    CLIENT {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-y">
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="In their words"
            title="What our clients say."
            align="center"
          />
          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <figure className="relative bg-card border border-border p-10 md:p-12 h-full">
                  <Quote className="h-10 w-10 text-[var(--gold)]" />
                  <blockquote className="mt-6 text-lg md:text-xl leading-relaxed text-[var(--navy)] font-light">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-8 pt-6 border-t border-border">
                    <p className="font-semibold text-[var(--navy)]">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.org}</p>
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
