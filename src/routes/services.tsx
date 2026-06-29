import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Reveal } from "@/components/site/Reveal";
import {
  Compass, LineChart, Handshake, Cpu, ShieldCheck, Globe2,
  Layers, Sparkles, BookOpen, BarChart3, Users, Building2,
} from "lucide-react";
import heroServices from "@/assets/hero-services.jpg";

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

const SERVICES = [
  { icon: Compass, title: "Strategy & Advisory", description: "Board-level counsel on enterprise strategy, portfolio choices and the decisions that shape long-term trajectory." },
  { icon: LineChart, title: "Corporate Finance", description: "Capital structures, valuation, fundraising and treasury advisory tailored to the ambitions of each client." },
  { icon: Handshake, title: "Mergers & Acquisitions", description: "End-to-end M&A advisory from target identification through diligence, negotiation and post-merger integration." },
  { icon: Cpu, title: "Digital Transformation", description: "Operating models reimagined with data, automation and intelligent systems for measurable enterprise outcomes." },
  { icon: ShieldCheck, title: "Risk & Governance", description: "Enterprise risk frameworks, board governance and resilience programmes that safeguard capital and reputation." },
  { icon: Globe2, title: "Market Expansion", description: "Cross-border entry strategy, regulatory mapping and operating design for sustainable international presence." },
  { icon: Layers, title: "Operational Excellence", description: "Performance improvement across the value chain — from procurement and supply through sales and service." },
  { icon: Sparkles, title: "Brand & Positioning", description: "Strategic brand architecture, narrative design and category positioning for premium enterprises." },
  { icon: BookOpen, title: "Public Affairs", description: "Stakeholder strategy, regulatory engagement and reputation management across multilateral environments." },
  { icon: BarChart3, title: "Investor Relations", description: "Capital markets communications, equity story design and IR programme development for listed clients." },
  { icon: Users, title: "Executive Talent", description: "Leadership assessment, succession architecture and executive search for board-level appointments." },
  { icon: Building2, title: "Sovereign Advisory", description: "Strategic and economic counsel for sovereign funds, public institutions and government-linked entities." },
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

      <section className="section-y">
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Capabilities"
            title="Each practice connects. The whole is greater than the sum."
            description="Engagements often draw on multiple practices, orchestrated by a single partner accountable for the integrated outcome."
          />
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 6) * 0.04}>
                <ServiceCard {...s} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement model */}
      <section className="section-y bg-[var(--stone)]">
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Engagement model"
            title="A disciplined approach to every mandate."
          />
          <div className="mt-16 grid gap-px bg-border border border-border md:grid-cols-4">
            {[
              ["01", "Listen", "We begin with the question behind the question — to understand intent before defining scope."],
              ["02", "Frame", "A bespoke approach is shaped: hypotheses, success metrics, governance and timeline."],
              ["03", "Deliver", "Senior-led teams execute with rigour, working alongside the client's leadership at every step."],
              ["04", "Endure", "Outcomes are measured beyond the engagement — in the durability of the change."],
            ].map(([num, title, text]) => (
              <div key={num} className="bg-card p-10">
                <p className="font-display text-5xl font-light text-[var(--gold)]">{num}</p>
                <h3 className="mt-6 text-xl font-semibold text-[var(--navy)]">{title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{text}</p>
              </div>
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
