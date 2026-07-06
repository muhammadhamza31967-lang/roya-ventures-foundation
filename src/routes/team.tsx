import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";

import { Reveal } from "@/components/site/Reveal";
import { Linkedin, Mail } from "lucide-react";
import heroTeam from "@/assets/hero-team.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import team5 from "@/assets/team-5.jpg";
import team6 from "@/assets/team-6.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Roya Ventures" },
      { name: "description", content: "Meet the partners and senior advisors of Roya Ventures — a global team of strategists, operators and capital specialists." },
      { property: "og:title", content: "Team — Roya Ventures" },
      { property: "og:description", content: "A senior team built around partnership and discretion." },
    ],
  }),
  component: TeamPage,
});

const PARTNERS = [
  { img: team1, name: "Alexander Hart", role: "Managing Partner", bio: "Twenty-five years across consulting and enterprise leadership, with a focus on corporate strategy and capital allocation." },
  { img: team2, name: "Selma Ardıç", role: "Partner, Strategy", bio: "Former operating executive in industrial technology; advises boards on growth strategy and portfolio choices." },
  { img: team3, name: "Daniel Okafor", role: "Partner, Corporate Finance", bio: "Investment banker turned advisor; leads the firm's capital and transactions practice across EMEA." },
  { img: team4, name: "Noor El-Hashem", role: "Partner, Transformation", bio: "Specialises in enterprise transformation, operating model redesign and digital programme leadership." },
  { img: team5, name: "Helena Voss", role: "Partner, Risk & Governance", bio: "Board director and former chief risk officer; advises on governance, controls and resilience programmes." },
  { img: team6, name: "Rohan Mehta", role: "Partner, Technology", bio: "Brings two decades of CTO experience to engagements at the intersection of strategy and engineering." },
];

const ADVISORS = [
  ["Margaret Chen", "Senior Advisor — Financial Services"],
  ["Pierre Lambert", "Senior Advisor — Energy & Infrastructure"],
  ["Aisha Kone", "Senior Advisor — Healthcare"],
  ["Jonathan Reed", "Senior Advisor — Technology"],
];

function TeamPage() {
  return (
    <SiteLayout transparentHeader>
      <PageHero
        eyebrow="The team"
        title={<>Senior counsel from <span className="text-[var(--gold)]">operators</span> who have led.</>}
        subtitle="A multinational partnership of strategists, financiers and former executives — united by a shared standard of craft."
        image={heroTeam}
        height="compact"
      />

      {/* Partners */}
      <section className="section-y relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-radial-gold" />
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Partners"
            title={<>The people accountable for <em className="not-italic text-[var(--gold)]">every mandate.</em></>}
            description="Our partners lead engagements personally — bringing decades of operating, financial and strategic expertise to each client relationship."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7 max-w-6xl mx-auto">
            {PARTNERS.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 0.07}>
                <article className="group relative h-full overflow-hidden rounded-[18px] bg-card border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] shadow-[0_1px_2px_rgba(24,49,78,0.04),0_12px_32px_-16px_rgba(24,49,78,0.18)] transition-all duration-500 hover:shadow-[0_2px_4px_rgba(24,49,78,0.06),0_28px_60px_-20px_rgba(24,49,78,0.28)] hover:-translate-y-1.5 hover:border-[color-mix(in_oklab,var(--gold)_30%,transparent)]">
                  {/* Corner gold accents */}
                  <span aria-hidden className="pointer-events-none absolute top-3 left-3 h-4 w-4 border-l border-t border-[var(--gold)]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span aria-hidden className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-r border-b border-[var(--gold)]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Portrait */}
                  <div className="relative m-3 mb-0 overflow-hidden rounded-[12px] aspect-[4/5] bg-[var(--navy)]">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/70 via-transparent to-transparent" />
                    {/* Gold top accent */}
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100" />
                    {/* Social icons — preserved hover */}
                    <div className="absolute right-4 top-4 flex flex-col gap-2.5 opacity-0 translate-x-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                      {[Linkedin, Mail].map((Icon, j) => (
                        <a
                          key={j}
                          href="#"
                          aria-label="Contact"
                          className="grid h-9 w-9 place-items-center rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white hover:bg-[var(--gold)] hover:text-[var(--navy)] hover:border-[var(--gold)] transition-all"
                        >
                          <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="px-6 pt-5 pb-6">
                    <div className="flex items-center gap-2">
                      <span className="h-px w-5 bg-[var(--gold)]" />
                      <p className="text-[10px] tracking-[0.28em] uppercase text-[var(--gold)] font-semibold">{p.role}</p>
                    </div>
                    <h3 className="mt-2.5 font-display text-[1.35rem] font-semibold text-[var(--navy)] tracking-[-0.02em] leading-tight">{p.name}</h3>
                    <p className="mt-3.5 text-[13.5px] text-muted-foreground leading-[1.7]">{p.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Senior advisors — light band with cards */}
      <section className="relative section-y overflow-hidden bg-[var(--ivory)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--gold)_10%,transparent),transparent_55%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--navy)_8%,transparent),transparent_60%)]" />
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Senior advisors"
            title={<>A council of industry leaders who <em className="not-italic text-[var(--gold)]">deepen our perspective.</em></>}
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ADVISORS.map(([name, role], i) => (
              <Reveal key={name} delay={i * 0.06}>
                <div className="group rounded-2xl border border-[color-mix(in_oklab,var(--navy)_10%,transparent)] bg-white shadow-[var(--shadow-card)] p-8 h-full transition-all duration-500 hover:shadow-[var(--shadow-elegant)] hover:border-[var(--gold)]/40 hover:-translate-y-1">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-[var(--gold)]/40 bg-[var(--gold)]/5 text-[var(--gold)] font-display text-lg font-light">
                    {name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="mt-7 text-lg font-semibold text-[var(--navy)] tracking-tight">{name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
