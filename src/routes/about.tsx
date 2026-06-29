import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Reveal } from "@/components/site/Reveal";
import { Target, Eye, Gem, Users, Globe2, Scale, Lightbulb, Award } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";
import aboutMission from "@/assets/about-mission.jpg";
import aboutVision from "@/assets/about-vision.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Roya Ventures" },
      { name: "description", content: "Discover the people, principles and history behind Roya Ventures, an international corporate advisory firm built around enduring counsel." },
      { property: "og:title", content: "About Roya Ventures" },
      { property: "og:description", content: "An international advisory firm built around enduring counsel." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Scale, title: "Integrity", text: "Every recommendation is grounded in evidence and bound by an unwavering ethical standard." },
  { icon: Gem, title: "Excellence", text: "We commit to craftsmanship in the work — from analysis to delivery — without compromise." },
  { icon: Users, title: "Partnership", text: "We operate alongside our clients, not above them, with shared accountability for the outcome." },
  { icon: Lightbulb, title: "Insight", text: "Original perspective drawn from a rare blend of operating, advisory and capital expertise." },
  { icon: Globe2, title: "Global Outlook", text: "A multinational team that thinks in cross-border systems and local realities at once." },
  { icon: Award, title: "Discretion", text: "Confidentiality is the foundation of our practice. Trust is the only currency that compounds." },
];

const TIMELINE = [
  ["2008", "Founded", "Roya Ventures established as a boutique strategy advisory."],
  ["2012", "International expansion", "Opened presence across three continents and the Middle East."],
  ["2016", "Corporate finance practice", "Launched dedicated capital advisory and M&A franchise."],
  ["2020", "Digital transformation", "Built end-to-end transformation capability with enterprise technology partners."],
  ["2024", "Sovereign mandates", "Trusted advisor to institutional and public-sector clients across emerging markets."],
];

function AboutPage() {
  return (
    <SiteLayout transparentHeader>
      <PageHero
        eyebrow="About the firm"
        title={<>Counsel measured in <span className="text-[var(--gold)]">decades</span>, not deliverables.</>}
        subtitle="Roya Ventures is an international advisory firm built around senior partners and an enduring commitment to the leaders we serve."
        image={heroAbout}
        height="compact"
      />

      {/* Overview */}
      <section className="section-y">
        <div className="container-px mx-auto grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="gold-rule">Company overview</p>
              <h2 className="heading-lg mt-5">A house of advisors, operators and capital specialists.</h2>
            </Reveal>
          </div>
          <Reveal as="div" delay={0.1} className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              For more than fifteen years, Roya Ventures has worked alongside boards, founders and
              institutional investors to address the questions that define long-term value — from
              corporate strategy and capital structure to transformation and international expansion.
            </p>
            <p>
              Our partners have led mandates across more than forty markets, advising on transactions
              and programmes that have shaped industries. The firm remains independent by design,
              ensuring every recommendation is made in the singular interest of the client.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision split */}
      <section className="section-y bg-[var(--stone)]">
        <div className="container-px mx-auto space-y-24">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <img src={aboutMission} alt="Strategic review" width={1400} height={1000} loading="lazy" className="w-full aspect-[4/3] object-cover" />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex items-center gap-4">
                <Target className="h-7 w-7 text-[var(--gold)]" />
                <p className="eyebrow text-[var(--gold)]">Our Mission</p>
              </div>
              <h3 className="heading-lg mt-5">To equip leaders with the clarity to make consequential decisions.</h3>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                We exist to translate complexity into conviction — distilling market dynamics,
                organisational realities and strategic ambitions into decisions our clients can
                make with confidence and conscience.
              </p>
            </Reveal>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal delay={0.1} className="lg:order-2">
              <img src={aboutVision} alt="Modern boardroom interior" width={1400} height={1000} loading="lazy" className="w-full aspect-[4/3] object-cover" />
            </Reveal>
            <Reveal className="lg:order-1">
              <div className="flex items-center gap-4">
                <Eye className="h-7 w-7 text-[var(--gold)]" />
                <p className="eyebrow text-[var(--gold)]">Our Vision</p>
              </div>
              <h3 className="heading-lg mt-5">To be the most trusted advisory partner for ambitious enterprises worldwide.</h3>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                A firm defined by the calibre of its people, the discretion of its practice and the
                enduring success of the institutions it serves — a steady hand for leaders building
                companies that matter.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-y">
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Core values"
            title="Six principles. One standard."
            description="The values that anchor every engagement, every conversation and every recommendation."
          />
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border">
            {VALUES.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.04}>
                <div className="bg-card p-10 h-full border-b border-transparent hover:border-[var(--gold)] transition-colors">
                  <Icon className="h-7 w-7 text-[var(--emerald-deep)]" strokeWidth={1.5} />
                  <h3 className="mt-6 text-xl font-semibold text-[var(--navy)]">{title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-y bg-[var(--navy)] text-white">
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Our journey"
            title="Sixteen years of measured progress."
            description="A firm built one mandate at a time — each chapter compounding the depth and reach of our practice."
            invert
          />
          <ol className="mt-16 relative border-l border-white/15 pl-8 md:pl-12 space-y-12">
            {TIMELINE.map(([year, title, text]) => (
              <li key={year} className="relative">
                <span className="absolute -left-[37px] md:-left-[53px] top-1 grid h-4 w-4 place-items-center bg-[var(--gold)]" />
                <p className="font-display text-3xl md:text-4xl font-light text-[var(--gold)]">{year}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 max-w-2xl text-white/65 leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBanner
        eyebrow="Begin a conversation"
        title="Partner with a firm that takes the long view."
      />
    </SiteLayout>
  );
}
