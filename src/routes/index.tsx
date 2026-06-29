import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Compass, LineChart, Handshake, Cpu, ShieldCheck, Globe2,
  Building2, Factory, Briefcase, Banknote, HeartPulse, Plane,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { StatGrid } from "@/components/site/StatGrid";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Reveal } from "@/components/site/Reveal";
import heroHome from "@/assets/hero-home.jpg";
import aboutMission from "@/assets/about-mission.jpg";

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
  { icon: Compass, title: "Strategy & Advisory", description: "Executive-grade counsel on the decisions that define enterprise trajectory." },
  { icon: LineChart, title: "Corporate Finance", description: "Capital structures, valuation and funding pathways for ambitious growth." },
  { icon: Handshake, title: "Mergers & Acquisitions", description: "End-to-end transaction leadership, from target search through integration." },
  { icon: Cpu, title: "Digital Transformation", description: "Operating models reimagined with data, automation and intelligent systems." },
  { icon: ShieldCheck, title: "Risk & Governance", description: "Enterprise risk frameworks that protect reputation, capital and continuity." },
  { icon: Globe2, title: "Market Expansion", description: "Cross-border entry strategies designed for sustained international presence." },
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

      {/* Introduction */}
      <section className="section-y">
        <div className="container-px mx-auto grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="gold-rule">The Firm</p>
              <h2 className="heading-lg mt-5">
                A trusted counsel to leadership teams shaping the next chapter of global business.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:pt-3">
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Roya Ventures was founded on a simple conviction — that the most important decisions
                a company makes deserve the most considered counsel. We bring together strategists,
                operators and capital specialists to help boards and executives navigate complexity
                with clarity and conviction.
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Our work spans continents, sectors and stages of growth — yet it remains anchored by
                a single discipline: deliver outcomes that endure long after the engagement is closed.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/about" className="btn-ghost">About the firm</Link>
                <Link to="/team" className="btn-ghost">Meet our people</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="section-y bg-[var(--stone)]">
        <div className="container-px mx-auto">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between mb-16">
            <SectionHeading
              eyebrow="What we do"
              title={<>Capabilities engineered for the modern enterprise.</>}
              description="Six interconnected practices designed to address the most consequential challenges facing today's leadership teams."
            />
            <Link to="/services" className="btn-ghost shrink-0">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {HOME_SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <ServiceCard {...s} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us — split layout */}
      <section className="section-y">
        <div className="container-px mx-auto grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative">
              <img
                src={aboutMission}
                alt="Executive reviewing strategic documents"
                width={1400}
                height={1000}
                loading="lazy"
                className="w-full aspect-[5/6] object-cover"
              />
              <div className="absolute -bottom-8 -right-6 md:-right-10 hidden md:block bg-[var(--navy)] text-white p-8 max-w-[260px] shadow-[var(--shadow-elegant)]">
                <p className="eyebrow text-[var(--gold)]">Since 2008</p>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  Trusted by founders, boards and institutional investors across five continents.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="gold-rule">Why Roya</p>
            <h2 className="heading-lg mt-5">
              Bespoke counsel. Disciplined execution. Outcomes that compound.
            </h2>
            <ul className="mt-10 space-y-7">
              {[
                ["Senior-led engagements", "Every mandate is directed by a partner — not delegated. You work with the people who own the outcome."],
                ["Sector-fluent specialists", "Our teams pair generalist strategy with deep industry expertise drawn from operating careers."],
                ["Global footprint, local nuance", "A network across major financial centres, calibrated to the cultural realities of each market."],
                ["A long view on value", "We measure success in the durability of outcomes, not the velocity of slides."],
              ].map(([t, d]) => (
                <li key={t} className="grid grid-cols-[auto_1fr] gap-5">
                  <span className="mt-2 h-px w-10 bg-[var(--gold)]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--navy)]">{t}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Statistics — dark band */}
      <section className="relative isolate overflow-hidden bg-[var(--navy)] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--gold)_10%,transparent),transparent_60%)]" />
        <div className="container-px mx-auto section-y">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end mb-16">
            <SectionHeading
              eyebrow="By the numbers"
              title={<>A measured record of partnership and outcome.</>}
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

      {/* Industries */}
      <section className="section-y">
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Industries"
            title="Depth across the sectors shaping the global economy."
            description="From financial services to industrial transformation, our teams bring decades of operating perspective to every engagement."
          />
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-border">
            {INDUSTRIES.map(({ icon: Icon, name }) => (
              <div key={name} className="bg-background p-8 flex flex-col items-start gap-5 transition-colors hover:bg-[var(--stone)]">
                <Icon className="h-7 w-7 text-[var(--emerald-deep)]" strokeWidth={1.5} />
                <h3 className="text-base font-semibold text-[var(--navy)]">{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team preview */}
      <section className="section-y bg-[var(--stone)]">
        <div className="container-px mx-auto grid gap-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Our people"
              title="A senior team of strategists, operators and capital specialists."
              description="Roya Ventures is built around partners with decades of leadership experience across consulting, investment banking and global enterprise."
            />
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <Link to="/team" className="btn-ghost">Meet the team <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
        <div className="container-px mx-auto mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Alexander Hart", "Managing Partner"],
            ["Selma Ardiç", "Partner, Strategy"],
            ["Daniel Okafor", "Partner, Corporate Finance"],
            ["Noor El-Hashem", "Partner, Transformation"],
          ].map(([name, role], i) => (
            <Reveal key={name} delay={i * 0.05}>
              <article className="bg-card p-8 h-full flex flex-col">
                <div className="aspect-[4/5] w-full bg-gradient-to-br from-[var(--navy)] to-[var(--emerald-deep)] grid place-items-center text-white">
                  <span className="font-display text-5xl font-light tracking-tight">
                    {name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-[var(--navy)]">{name}</h3>
                <p className="mt-1 text-sm text-[var(--gold)] tracking-[0.1em] uppercase">{role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Clients showcase */}
      <section className="section-y">
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="In good company"
            title="A confidential roster of clients across five continents."
            description="From founder-led enterprises to listed multinationals and sovereign institutions, leaders entrust us with their most consequential moments."
            align="center"
          />
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-border border border-border">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="aspect-[5/3] bg-background flex items-center justify-center">
                <div className="font-display text-xl font-light tracking-[0.3em] text-muted-foreground/60">
                  CLIENT
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/clients" className="btn-ghost">View all clients <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
