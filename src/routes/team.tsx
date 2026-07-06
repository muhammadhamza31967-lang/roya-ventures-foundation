import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";

import { Reveal } from "@/components/site/Reveal";
import { Linkedin, Mail } from "lucide-react";
import heroTeam from "@/assets/hero-team.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team4 from "@/assets/team-4.jpg";
import team5 from "@/assets/team-5.jpg";
import team6 from "@/assets/team-6.jpg";
import soudagarNaveed from "@/assets/soudagar-naveed.jpeg.asset.json";

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
  { img: soudagarNaveed.url, name: "Soudagar Naveed", role: "Project Engineer", bio: "Proud to contribute to Roya Ventures by delivering reliable IT and ELV solutions through quality workmanship, teamwork, and a commitment to excellence on every project." },
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
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 max-w-6xl mx-auto">
            {PARTNERS.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 0.07}>
                <article className="group relative h-full rounded-[20px] bg-gradient-to-b from-white to-[color-mix(in_oklab,var(--stone)_50%,white)] border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_1px_2px_rgba(24,49,78,0.04),0_10px_28px_-14px_rgba(24,49,78,0.18)] transition-all duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_2px_4px_rgba(24,49,78,0.06),0_28px_60px_-22px_rgba(24,49,78,0.32)] hover:-translate-y-1.5 hover:border-[color-mix(in_oklab,var(--gold)_35%,transparent)]">
                  {/* Top gold hairline */}
                  <span aria-hidden className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent" />

                  {/* Corner gold accents */}
                  <span aria-hidden className="pointer-events-none absolute top-2.5 left-2.5 h-3.5 w-3.5 border-l border-t border-[var(--gold)]/60 rounded-tl-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span aria-hidden className="pointer-events-none absolute bottom-2.5 right-2.5 h-3.5 w-3.5 border-r border-b border-[var(--gold)]/60 rounded-br-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="p-5 pb-6">
                    {/* Portrait — reduced, framed */}
                    <div className="relative mx-auto overflow-hidden rounded-[14px] aspect-[4/3.6] bg-[var(--navy)] ring-1 ring-[color-mix(in_oklab,var(--navy)_10%,transparent)] shadow-[0_10px_24px_-14px_rgba(24,49,78,0.35)]">
                      <img
                        src={p.img}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-[1600ms] ease-out group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/60 via-transparent to-transparent" />
                      {/* Gold sweeping accent on hover */}
                      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent scale-x-0 origin-left transition-transform duration-[700ms] ease-out group-hover:scale-x-100" />
                      {/* Social icons — preserved hover */}
                      <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 translate-x-2 transition-all duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:opacity-100 group-hover:translate-x-0">
                        {[Linkedin, Mail].map((Icon, j) => (
                          <a
                            key={j}
                            href="#"
                            aria-label="Contact"
                            style={{ transitionDelay: `${j * 60}ms` }}
                            className="grid h-8 w-8 place-items-center rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white hover:bg-[var(--gold)] hover:text-[var(--navy)] hover:border-[var(--gold)] transition-all duration-300"
                          >
                            <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-6 px-1">
                      <h3 className="font-display text-[1.4rem] leading-[1.15] font-semibold text-[var(--navy)] tracking-[-0.025em]">
                        {p.name}
                      </h3>
                      <div className="mt-2.5 flex items-center gap-2.5">
                        <span className="h-px w-6 bg-[var(--gold)] transition-all duration-500 group-hover:w-10" />
                        <p className="text-[10.5px] tracking-[0.24em] uppercase text-[var(--gold)] font-semibold">
                          {p.role}
                        </p>
                      </div>
                      <p className="mt-4 text-[13.5px] text-muted-foreground leading-[1.7]">
                        {p.bio}
                      </p>
                    </div>
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
