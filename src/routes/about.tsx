import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PartnersMarquee } from "@/components/site/PartnersMarquee";
import { Reveal } from "@/components/site/Reveal";
import { Target, Eye, Gem, Users, Globe2, Scale, Lightbulb, Award } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";
import aboutMission from "@/assets/about-mission.jpg";
import aboutVision from "@/assets/about-vision.jpg";
import featureLeadership from "@/assets/feature-leadership.jpg";

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


function AboutPage() {
  return (
    <SiteLayout transparentHeader>
      <PageHero
        eyebrow="About the firm"
        title={<>Counsel measured in <span className="text-[var(--gold)]">decades</span>, not deliverables.</>}
        subtitle="Roya Ventures is an international advisory firm built around senior partners and an enduring commitment to the leaders we serve."
        image={heroAbout}
      />

      {/* Overview — asymmetric editorial split */}
      <section className="section-y relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-radial-gold" />
        <div className="container-px mx-auto grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="gold-rule">Company overview</p>
              <h2 className="heading-lg mt-6">A house of advisors, operators and <em className="not-italic text-[var(--gold)]">capital specialists.</em></h2>
              <div className="mt-8 gold-divider" />
            </Reveal>
          </div>
          <Reveal as="div" delay={0.1} className="lg:col-span-7 space-y-7">
            <p className="text-xl leading-[1.7] text-[var(--navy)]/85 font-light">
              For more than fifteen years, Roya Ventures has worked alongside boards, founders and
              institutional investors to address the questions that define long-term value.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our partners have led mandates across more than forty markets, advising on transactions
              and programmes that have shaped industries. The firm remains independent by design,
              ensuring every recommendation is made in the singular interest of the client.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Full-width leadership image with floating panel */}
      <section className="relative isolate overflow-hidden">
        <div className="relative h-[55vh] md:h-[70vh] w-full">
          <img
            src={featureLeadership}
            alt="Executive leadership team in discussion"
            loading="lazy"
            width={1600}
            height={1200}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-deep)]/85 via-[var(--navy-deep)]/30 to-transparent" />
        </div>
        {/* Floating panel that overlaps */}
        <div className="container-px mx-auto relative -mt-32 md:-mt-44 mb-24">
          <Reveal>
            <div className="max-w-2xl ml-0 rounded-2xl bg-card border border-[color-mix(in_oklab,var(--navy)_10%,transparent)] shadow-[var(--shadow-elegant)] p-10 md:p-14">
              <p className="gold-rule">Leadership philosophy</p>
              <p className="mt-7 font-display text-2xl md:text-3xl font-light leading-[1.3] tracking-[-0.02em] text-[var(--navy)]">
                "We are a partnership of practitioners — people who have built, bought, sold and
                rebuilt the institutions we now advise. Counsel earned, not consulted."
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-12 bg-[var(--gold)]" />
                <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground">A.H. Hart, Managing Partner</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision — premium image-content split */}
      <section className="section-y relative overflow-hidden" style={{ background: "var(--grad-ivory)" }}>
        <div className="container-px mx-auto space-y-28 md:space-y-36">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -inset-4 border border-[var(--gold)]/30 rounded-2xl -z-10" />
                <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
                  <img src={aboutMission} alt="Strategic review" width={1400} height={1000} loading="lazy" className="w-full aspect-[4/3] object-cover transition-transform duration-[1800ms] hover:scale-105" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/40 text-[var(--gold)]">
                  <Target className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <p className="eyebrow text-[var(--gold)]">Our Mission</p>
              </div>
              <h3 className="heading-lg mt-7">To equip leaders with the clarity to make <em className="not-italic text-[var(--gold)]">consequential decisions.</em></h3>
              <div className="mt-7 gold-divider" />
              <p className="mt-7 text-lg leading-[1.75] text-muted-foreground font-light">
                We exist to translate complexity into conviction — distilling market dynamics,
                organisational realities and strategic ambitions into decisions our clients can
                make with confidence and conscience.
              </p>
            </Reveal>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
            <Reveal delay={0.1} className="lg:col-span-6 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 border border-[var(--gold)]/30 rounded-2xl -z-10" />
                <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
                  <img src={aboutVision} alt="Modern boardroom interior" width={1400} height={1000} loading="lazy" className="w-full aspect-[4/3] object-cover transition-transform duration-[1800ms] hover:scale-105" />
                </div>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:order-1">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/40 text-[var(--gold)]">
                  <Eye className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <p className="eyebrow text-[var(--gold)]">Our Vision</p>
              </div>
              <h3 className="heading-lg mt-7">To be the most trusted advisory partner for <em className="not-italic text-[var(--gold)]">ambitious enterprises worldwide.</em></h3>
              <div className="mt-7 gold-divider" />
              <p className="mt-7 text-lg leading-[1.75] text-muted-foreground font-light">
                A firm defined by the calibre of its people, the discretion of its practice and the
                enduring success of the institutions it serves — a steady hand for leaders building
                companies that matter.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values — premium card grid */}
      <section className="section-y">
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Core values"
            title={<>Six principles. <em className="not-italic text-[var(--gold)]">One standard.</em></>}
            description="The values that anchor every engagement, every conversation and every recommendation."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 3) * 0.06}>
                <div className="group relative h-full rounded-2xl bg-card p-9 md:p-10 border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-elegant)] hover:border-[var(--gold)]/40 overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="grid h-14 w-14 place-items-center rounded-xl border border-[var(--emerald-deep)]/30 bg-gradient-to-br from-[color-mix(in_oklab,var(--emerald-deep)_10%,transparent)] to-transparent text-[var(--emerald-deep)] transition-all duration-500 group-hover:bg-[var(--emerald-deep)] group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-7 text-xl font-semibold text-[var(--navy)] tracking-tight">{title}</h3>
                  <p className="mt-4 text-muted-foreground leading-[1.75] text-[15px]">{text}</p>
                  <div className="mt-7 h-px w-10 bg-[var(--gold)] transition-all duration-500 group-hover:w-24" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      <CtaBanner
        eyebrow="Begin a conversation"
        title="Partner with a firm that takes the long view."
      />
    </SiteLayout>
  );
}
