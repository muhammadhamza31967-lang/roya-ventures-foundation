import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Globe2, Banknote, Cpu, Factory, HeartPulse, Building2, Briefcase, Plane,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ImageServiceCard } from "@/components/site/ImageServiceCard";
import { StatGrid } from "@/components/site/StatGrid";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Reveal } from "@/components/site/Reveal";
import heroHome from "@/assets/hero-home.jpg";
import featureLeadership from "@/assets/feature-leadership.jpg";
import featureHQ from "@/assets/feature-headquarters.jpg";
import aboutMission from "@/assets/about-mission.jpg";
import svcStrategy from "@/assets/svc-strategy.jpg";
import svcFinance from "@/assets/svc-finance.jpg";
import svcMa from "@/assets/svc-ma.jpg";
import svcDigital from "@/assets/svc-digital.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roya Ventures — International Corporate Consulting" },
      { name: "description", content: "Roya Ventures is an international advisory firm partnering with executives to shape strategy, transformation and sustained growth." },
      { property: "og:title", content: "Roya Ventures — International Corporate Consulting" },
      { property: "og:description", content: "Premium advisory services for ambitious global leaders." },
    ],
  }),
  component: HomePage,
});

const HOME_SERVICES = [
  { image: svcStrategy, title: "Strategy & Advisory", description: "Executive-grade counsel on the decisions that define enterprise trajectory." },
  { image: svcFinance, title: "Corporate Finance", description: "Capital structures, valuation and funding pathways for ambitious growth." },
  { image: svcMa, title: "Mergers & Acquisitions", description: "End-to-end transaction leadership, from target search through integration." },
  { image: svcDigital, title: "Digital Transformation", description: "Operating models reimagined with data, automation and intelligent systems." },
];

const INDUSTRIES = [
  { icon: Banknote, name: "Financial Services" },
  { icon: Cpu, name: "Technology & Media" },
  { icon: Factory, name: "Industrial & Energy" },
  { icon: HeartPulse, name: "Healthcare & Life Sciences" },
  { icon: Building2, name: "Real Estate & Hospitality" },
  { icon: Plane, name: "Travel & Logistics" },
  { icon: Briefcase, name: "Professional Services" },
  { icon: Globe2, name: "Public Sector" },
];

const TEAM_PREVIEW = [
  { img: team1, name: "Alexander Hart", role: "Managing Partner" },
  { img: team2, name: "Selma Ardıç", role: "Partner, Strategy" },
  { img: team3, name: "Daniel Okafor", role: "Partner, Corporate Finance" },
  { img: team4, name: "Noor El-Hashem", role: "Partner, Transformation" },
];

function HomePage() {
  return (
    <SiteLayout transparentHeader>
      <PageHero
        eyebrow="Roya Ventures"
        title={<>Where <span className="text-[var(--gold)]">enduring strategy</span> meets executive precision.</>}
        subtitle="An international advisory firm partnering with leaders to architect transformation, accelerate growth and create value that compounds across decades."
        image={heroHome}
      >
        <Link to="/services" className="btn-primary">
          Discover our practice <ArrowRight className="h-4 w-4" />
        </Link>
        <Link to="/contact" className="btn-outline-light">Speak with a partner</Link>
      </PageHero>

      {/* Introduction — asymmetric editorial split */}
      <section className="section-y relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-radial-gold" />
        <div className="container-px mx-auto grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="gold-rule">The Firm</p>
              <h2 className="heading-lg mt-6">
                A trusted counsel to leadership teams shaping the next chapter of global business.
              </h2>
              <div className="mt-8 gold-divider" />
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:pt-3">
            <Reveal delay={0.1}>
              <p className="text-xl leading-[1.7] text-[var(--navy)]/85 font-light">
                Roya Ventures was founded on a simple conviction — that the most important decisions
                a company makes deserve the most considered counsel.
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                We bring together strategists, operators and capital specialists to help boards and
                executives navigate complexity with clarity and conviction. Our work spans continents,
                sectors and stages of growth — yet it remains anchored by a single discipline: deliver
                outcomes that endure long after the engagement is closed.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/about" className="btn-ghost">About the firm <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/team" className="btn-ghost">Meet our people <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Full-width feature image with floating quote panel */}
      <section className="relative isolate overflow-hidden">
        <div className="relative h-[60vh] md:h-[80vh] w-full">
          <img
            src={featureLeadership}
            alt="Executive leadership meeting"
            loading="lazy"
            width={1600}
            height={1200}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-deep)]/85 via-[var(--navy-deep)]/40 to-transparent" />
          <div className="container-px mx-auto h-full relative flex items-center">
            <Reveal className="max-w-2xl">
              <p className="gold-rule text-[var(--gold)]">A philosophy of partnership</p>
              <p className="mt-8 font-display text-3xl md:text-5xl font-light leading-[1.15] tracking-[-0.025em] text-white">
                "We measure success not in the velocity of slides, but in the durability of
                outcomes — in the institutions our clients build, and the legacies they shape."
              </p>
              <div className="mt-10 flex items-center gap-5">
                <div className="h-px w-16 bg-[var(--gold)]" />
                <p className="text-sm tracking-[0.25em] uppercase text-white/70">The Roya Ventures Doctrine</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services — image-led featured */}
      <section className="section-y relative overflow-hidden" style={{ background: "var(--grad-ivory)" }}>
        <div className="container-px mx-auto">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between mb-16">
            <SectionHeading
              eyebrow="What we do"
              title={<>Capabilities engineered for the <em className="not-italic text-[var(--gold)]">modern enterprise.</em></>}
              description="Six interconnected practices designed to address the most consequential challenges facing today's leadership teams."
            />
            <Link to="/services" className="btn-ghost shrink-0">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mixed-size masonry */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <Reveal className="md:col-span-7">
              <ImageServiceCard {...HOME_SERVICES[0]} index={0} size="wide" />
            </Reveal>
            <Reveal delay={0.08} className="md:col-span-5">
              <ImageServiceCard {...HOME_SERVICES[1]} index={1} />
            </Reveal>
            <Reveal delay={0.15} className="md:col-span-5">
              <ImageServiceCard {...HOME_SERVICES[2]} index={2} />
            </Reveal>
            <Reveal delay={0.22} className="md:col-span-7">
              <ImageServiceCard {...HOME_SERVICES[3]} index={3} size="wide" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why choose us — split with overlapping accent */}
      <section className="section-y">
        <div className="container-px mx-auto grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="relative">
              {/* Decorative offset frame */}
              <div className="absolute -inset-4 md:-inset-6 border border-[var(--gold)]/30 rounded-2xl -z-10" />
              <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
                <img
                  src={aboutMission}
                  alt="Executive reviewing strategic documents"
                  width={1400}
                  height={1700}
                  loading="lazy"
                  className="w-full aspect-[5/6] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/40 via-transparent to-transparent" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-10 -right-4 md:-right-12 bg-[var(--navy)] text-white p-8 max-w-[280px] rounded-2xl shadow-[var(--shadow-elegant)] border border-[var(--gold)]/30">
                <p className="eyebrow text-[var(--gold)]">Since 2008</p>
                <p className="font-display text-4xl font-light mt-3">16<span className="text-[var(--gold)]">+</span></p>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  Years of trusted counsel to founders, boards and institutional investors across five continents.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="gold-rule">Why Roya</p>
            <h2 className="heading-lg mt-6">
              Bespoke counsel. Disciplined execution. <span className="text-[var(--gold)]">Outcomes that compound.</span>
            </h2>
            <div className="mt-8 gold-divider" />
            <ul className="mt-12 space-y-9">
              {[
                ["Senior-led engagements", "Every mandate is directed by a partner — not delegated. You work with the people who own the outcome."],
                ["Sector-fluent specialists", "Our teams pair generalist strategy with deep industry expertise drawn from operating careers."],
                ["Global footprint, local nuance", "A network across major financial centres, calibrated to the cultural realities of each market."],
                ["A long view on value", "We measure success in the durability of outcomes, not the velocity of slides."],
              ].map(([t, d], i) => (
                <li key={t} className="grid grid-cols-[auto_1fr] gap-6 group">
                  <span className="font-display text-xs tracking-[0.3em] text-[var(--gold)]/80 tabular-nums mt-2 pt-1 border-t border-[var(--gold)]/40 inline-block w-10">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--navy)] tracking-tight">{t}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Statistics — image-backed dark band */}
      <section className="relative section-y overflow-hidden text-white bg-noise">
        <div className="absolute inset-0 -z-20">
          <img
            src={featureHQ}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-deep)]/95 via-[var(--navy-deep)]/90 to-[color-mix(in_oklab,var(--emerald-deep)_80%,var(--navy-deep))]/95" />
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_55%)]" />

        <div className="container-px mx-auto">
          <div className="max-w-3xl mb-16">
            <SectionHeading
              eyebrow="By the numbers"
              title={<>A measured record of <em className="not-italic text-[var(--gold)]">partnership and outcome.</em></>}
              description="Sixteen years of senior-led mandates across forty markets — a portfolio measured in durability."
              invert
            />
          </div>
          <StatGrid
            invert
            stats={[
              { value: "16", suffix: "+", label: "Years of advisory practice" },
              { value: "40", suffix: "+", label: "Markets served globally" },
              { value: "$24", suffix: "B", label: "Transactions advised" },
              { value: "98", suffix: "%", label: "Client retention rate" },
            ]}
          />
        </div>
      </section>

      {/* Industries — refined grid */}
      <section className="section-y" style={{ background: "var(--grad-ivory)" }}>
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Industries"
            title={<>Depth across the sectors shaping the <em className="not-italic text-[var(--gold)]">global economy.</em></>}
            description="From financial services to industrial transformation, our teams bring decades of operating perspective to every engagement."
          />
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {INDUSTRIES.map(({ icon: Icon, name }, i) => (
              <Reveal key={name} delay={(i % 4) * 0.05}>
                <div className="group relative h-full rounded-2xl bg-card p-8 border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-elegant)] hover:border-[var(--gold)]/40">
                  <div className="grid h-14 w-14 place-items-center rounded-xl border border-[var(--emerald-deep)]/30 bg-gradient-to-br from-[color-mix(in_oklab,var(--emerald-deep)_10%,transparent)] to-transparent text-[var(--emerald-deep)] transition-all duration-500 group-hover:bg-[var(--emerald-deep)] group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-7 text-base font-semibold text-[var(--navy)] tracking-tight">{name}</h3>
                  <div className="mt-4 h-px w-8 bg-[var(--gold)] transition-all duration-500 group-hover:w-16" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team preview — portrait cards */}
      <section className="section-y">
        <div className="container-px mx-auto grid gap-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Our people"
              title={<>A senior team of strategists, operators and <em className="not-italic text-[var(--gold)]">capital specialists.</em></>}
              description="Roya Ventures is built around partners with decades of leadership experience across consulting, investment banking and global enterprise."
            />
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <Link to="/team" className="btn-ghost">Meet the team <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
        <div className="container-px mx-auto mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TEAM_PREVIEW.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <article className="group relative overflow-hidden rounded-2xl bg-[var(--navy)] shadow-[var(--shadow-card)] transition-all duration-500 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)] via-[var(--navy-deep)]/30 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)]">{p.role}</p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">{p.name}</h3>
                  <div className="mt-3 h-px w-8 bg-[var(--gold)] transition-all duration-500 group-hover:w-16" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Clients showcase — premium logo cards */}
      <section className="section-y relative overflow-hidden" style={{ background: "var(--grad-ivory)" }}>
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="In good company"
            title={<>A confidential roster of clients across <em className="not-italic text-[var(--gold)]">five continents.</em></>}
            description="From founder-led enterprises to listed multinationals and sovereign institutions, leaders entrust us with their most consequential moments."
            align="center"
          />
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <Reveal key={i} delay={(i % 6) * 0.04}>
                <div className="aspect-[5/3] rounded-xl bg-card border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] flex items-center justify-center shadow-[0_1px_0_color-mix(in_oklab,var(--navy)_4%,transparent),0_8px_24px_-16px_color-mix(in_oklab,var(--navy)_18%,transparent)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:shadow-[var(--shadow-card)]">
                  <div className="font-display text-base font-light tracking-[0.32em] text-[var(--navy)]/40 transition-colors hover:text-[var(--navy)]">
                    CLIENT {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/clients" className="btn-ghost">View all clients <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
