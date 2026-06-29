import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ImageServiceCard } from "@/components/site/ImageServiceCard";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Reveal } from "@/components/site/Reveal";
import heroServices from "@/assets/hero-services.jpg";
import svcStrategy from "@/assets/svc-strategy.jpg";
import svcFinance from "@/assets/svc-finance.jpg";
import svcMa from "@/assets/svc-ma.jpg";
import svcDigital from "@/assets/svc-digital.jpg";
import svcRisk from "@/assets/svc-risk.jpg";
import svcMarket from "@/assets/svc-market.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Roya Ventures" },
      { name: "description", content: "Explore Roya Ventures' advisory capabilities across strategy, corporate finance, M&A, transformation and global market expansion." },
      { property: "og:title", content: "Services — Roya Ventures" },
      { property: "og:description", content: "Twelve advisory practices, one disciplined standard." },
    ],
  }),
  component: ServicesPage,
});

const FEATURED = [
  { image: svcStrategy, title: "Strategy & Advisory", description: "Board-level counsel on enterprise strategy, portfolio choices and the decisions that shape long-term trajectory.", size: "tall" as const },
  { image: svcFinance, title: "Corporate Finance", description: "Capital structures, valuation, fundraising and treasury advisory tailored to the ambitions of each client.", size: "default" as const },
  { image: svcMa, title: "Mergers & Acquisitions", description: "End-to-end M&A advisory from target identification through diligence, negotiation and post-merger integration.", size: "default" as const },
  { image: svcDigital, title: "Digital Transformation", description: "Operating models reimagined with data, automation and intelligent systems for measurable enterprise outcomes.", size: "default" as const },
  { image: svcRisk, title: "Risk & Governance", description: "Enterprise risk frameworks, board governance and resilience programmes that safeguard capital and reputation.", size: "default" as const },
  { image: svcMarket, title: "Market Expansion", description: "Cross-border entry strategy, regulatory mapping and operating design for sustainable international presence.", size: "tall" as const },
];

const EXTENDED = [
  { title: "Operational Excellence", description: "Performance improvement across the value chain — from procurement and supply through sales and service." },
  { title: "Brand & Positioning", description: "Strategic brand architecture, narrative design and category positioning for premium enterprises." },
  { title: "Public Affairs", description: "Stakeholder strategy, regulatory engagement and reputation management across multilateral environments." },
  { title: "Investor Relations", description: "Capital markets communications, equity story design and IR programme development for listed clients." },
  { title: "Executive Talent", description: "Leadership assessment, succession architecture and executive search for board-level appointments." },
  { title: "Sovereign Advisory", description: "Strategic and economic counsel for sovereign funds, public institutions and government-linked entities." },
];

function ServicesPage() {
  return (
    <SiteLayout transparentHeader>
      <PageHero
        eyebrow="Our practice"
        title={<>Twelve disciplines. <span className="text-[var(--gold)]">One standard</span> of counsel.</>}
        subtitle="A coordinated set of advisory capabilities, delivered by senior partners and built to address the most consequential challenges in modern enterprise."
        image={heroServices}
        height="compact"
      />

      {/* Featured services — image-led masonry */}
      <section className="section-y relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-radial-gold" />
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Capabilities"
            title={<>Each practice connects. The whole is <em className="not-italic text-[var(--gold)]">greater</em> than the sum.</>}
            description="Engagements often draw on multiple practices, orchestrated by a single partner accountable for the integrated outcome."
          />

          {/* Asymmetric image grid */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* Row 1 — tall feature + two */}
            <Reveal className="md:col-span-5 md:row-span-2">
              <ImageServiceCard {...FEATURED[0]} index={0} />
            </Reveal>
            <Reveal delay={0.08} className="md:col-span-7">
              <ImageServiceCard {...FEATURED[1]} index={1} size="wide" />
            </Reveal>
            <Reveal delay={0.15} className="md:col-span-7">
              <ImageServiceCard {...FEATURED[2]} index={2} size="wide" />
            </Reveal>

            {/* Row 2 — three even */}
            <Reveal className="md:col-span-4">
              <ImageServiceCard {...FEATURED[3]} index={3} />
            </Reveal>
            <Reveal delay={0.08} className="md:col-span-4">
              <ImageServiceCard {...FEATURED[4]} index={4} />
            </Reveal>
            <Reveal delay={0.15} className="md:col-span-4">
              <ImageServiceCard {...FEATURED[5]} index={5} size="tall" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Extended practices — refined editorial list */}
      <section className="relative section-y overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--grad-ivory)" }} />
        <div className="container-px mx-auto">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="gold-rule">Extended practices</p>
                <h2 className="heading-lg mt-6">Six further disciplines that complete the firm.</h2>
                <p className="mt-7 text-muted-foreground text-lg leading-relaxed">
                  Specialised capabilities engaged when the mandate demands depth in a particular dimension of enterprise.
                </p>
                <div className="mt-8 gold-divider" />
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <ul className="divide-y divide-[color-mix(in_oklab,var(--navy)_10%,transparent)] border-y border-[color-mix(in_oklab,var(--navy)_10%,transparent)]">
                {EXTENDED.map((s, i) => (
                  <Reveal as="li" key={s.title} delay={i * 0.05}>
                    <div className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 md:gap-10 py-8 md:py-10 transition-colors hover:bg-white/60 px-3 md:px-6 -mx-3 md:-mx-6 rounded-lg">
                      <span className="font-display text-sm tracking-[0.3em] text-[var(--gold)]/80 tabular-nums">
                        {String(i + 7).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-2xl md:text-3xl font-semibold text-[var(--navy)] tracking-[-0.02em]">{s.title}</h3>
                        <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">{s.description}</p>
                      </div>
                      <span className="hidden md:inline-block h-px w-12 bg-[color-mix(in_oklab,var(--navy)_20%,transparent)] group-hover:w-20 group-hover:bg-[var(--gold)] transition-all duration-500" />
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement model — dark layered band */}
      <section className="relative section-y overflow-hidden bg-noise text-white">
        <div className="absolute inset-0 -z-20" style={{ background: "var(--grad-navy)" }} />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_55%)]" />
        <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full border border-[var(--gold)]/12 float-shape -z-10" />

        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Engagement model"
            title={<>A disciplined approach <em className="not-italic text-[var(--gold)]">to every mandate.</em></>}
            description="Four phases. One accountable partner. Outcomes that endure beyond the engagement."
            invert
          />
          <div className="mt-20 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Listen", "We begin with the question behind the question — to understand intent before defining scope."],
              ["02", "Frame", "A bespoke approach is shaped: hypotheses, success metrics, governance and timeline."],
              ["03", "Deliver", "Senior-led teams execute with rigour, working alongside the client's leadership at every step."],
              ["04", "Endure", "Outcomes are measured beyond the engagement — in the durability of the change."],
            ].map(([num, title, text], i) => (
              <Reveal key={num} delay={i * 0.07}>
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-9 transition-all duration-500 hover:bg-white/[0.07] hover:border-[var(--gold)]/40 hover:-translate-y-1">
                  <p className="font-display text-6xl font-light text-[var(--gold)]/90 tracking-[-0.04em]">{num}</p>
                  <div className="mt-6 gold-divider" />
                  <h3 className="mt-6 text-xl font-semibold text-white tracking-tight">{title}</h3>
                  <p className="mt-4 text-white/70 leading-relaxed text-sm">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Define the mandate"
        title="Tell us what's at stake. We'll bring the right team."
      />
    </SiteLayout>
  );
}
