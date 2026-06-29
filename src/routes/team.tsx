import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Reveal } from "@/components/site/Reveal";
import { Linkedin, Mail } from "lucide-react";
import heroTeam from "@/assets/hero-team.jpg";

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
  { name: "Alexander Hart", role: "Managing Partner", bio: "Twenty-five years across consulting and enterprise leadership, with a focus on corporate strategy and capital allocation." },
  { name: "Selma Ardıç", role: "Partner, Strategy", bio: "Former operating executive in industrial technology; advises boards on growth strategy and portfolio choices." },
  { name: "Daniel Okafor", role: "Partner, Corporate Finance", bio: "Investment banker turned advisor; leads the firm's capital and transactions practice across EMEA." },
  { name: "Noor El-Hashem", role: "Partner, Transformation", bio: "Specialises in enterprise transformation, operating model redesign and digital programme leadership." },
  { name: "Helena Voss", role: "Partner, Risk & Governance", bio: "Board director and former chief risk officer; advises on governance, controls and resilience programmes." },
  { name: "Rohan Mehta", role: "Partner, Technology", bio: "Brings two decades of CTO experience to engagements at the intersection of strategy and engineering." },
  { name: "Camille Laurent", role: "Partner, Public Affairs", bio: "Counsel to institutions and sovereign clients on regulatory strategy and stakeholder engagement." },
  { name: "Yusuf Demir", role: "Partner, Market Expansion", bio: "Leads cross-border mandates across the Gulf, Levant and South-East Asian markets." },
];

const ADVISORS = [
  ["Margaret Chen", "Senior Advisor — Financial Services"],
  ["Pierre Lambert", "Senior Advisor — Energy & Infrastructure"],
  ["Aisha Kone", "Senior Advisor — Healthcare"],
  ["Jonathan Reed", "Senior Advisor — Technology"],
];

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("");
}

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
      <section className="section-y">
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Partners"
            title="The people accountable for every mandate."
            description="Our partners lead engagements personally — bringing decades of operating, financial and strategic expertise to each client relationship."
          />
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4 border border-border">
            {PARTNERS.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 0.05}>
                <article className="group relative bg-card flex flex-col h-full overflow-hidden">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-[var(--navy)] via-[var(--navy)] to-[var(--emerald-deep)]">
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="font-display text-6xl md:text-7xl font-light text-white/95 tracking-tight">
                        {initials(p.name)}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-x-0 bottom-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex gap-3">
                      <a href="#" aria-label={`${p.name} on LinkedIn`} className="grid h-9 w-9 place-items-center bg-[var(--gold)] text-[var(--navy)]">
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a href="#" aria-label={`Email ${p.name}`} className="grid h-9 w-9 place-items-center border border-white/40 text-white">
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-lg font-semibold text-[var(--navy)]">{p.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--gold)]">{p.role}</p>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Senior advisors */}
      <section className="section-y bg-[var(--stone)]">
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Senior advisors"
            title="A council of industry leaders who deepen our perspective."
          />
          <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4 border border-border">
            {ADVISORS.map(([name, role]) => (
              <div key={name} className="bg-card p-8">
                <h3 className="text-lg font-semibold text-[var(--navy)]">{name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Join the firm"
        title="We're always interested in exceptional people."
        description="Roya Ventures recruits selectively from the worlds of consulting, banking, technology and enterprise leadership."
      />
    </SiteLayout>
  );
}
