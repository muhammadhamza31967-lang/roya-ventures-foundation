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
import soudagarNaveed from "@/assets/soudagar-naveed.jpeg.asset.json";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Roya Ventures" },
      { name: "description", content: "Meet the leadership, executive management and engineering team behind Roya Ventures." },
      { property: "og:title", content: "Team — Roya Ventures" },
      { property: "og:description", content: "A senior team built around partnership and discretion." },
    ],
  }),
  component: TeamPage,
});

type Member = { img: string; name: string; role: string; bio?: string };

const CEO: Member = {
  img: team1,
  name: "Raza Saudagar",
  role: "Chief Executive Officer",
  bio: "Sets the strategic direction of Roya Ventures — steering the firm's engineering, technology and infrastructure practice with a founder's discipline and an operator's rigour.",
};

const EXECUTIVE: Member[] = [
  { img: team2, name: "Zafar Khazi", role: "Chief Marketing Officer", bio: "Leads brand, positioning and client development across the group's technology and infrastructure lines of business." },
  { img: team4, name: "Maqbool Pasha", role: "Chief Financial Officer", bio: "Oversees capital, controls and financial strategy — safeguarding the firm's long-term financial resilience." },
];

const ENGINEERING: Member[] = [
  { img: team5, name: "Anas Saudagar", role: "Project Manager", bio: "Directs delivery across the project portfolio — accountable for scope, schedule and quality on every engagement." },
  { img: soudagarNaveed.url, name: "Naveed Saudagar", role: "Project & Business Development Engineer", bio: "Bridges engineering delivery and client development — bringing technical depth to new opportunities and mandates." },
  { img: team6, name: "Suhail Shaik", role: "Technical Team Leader", bio: "Leads the technical team on the ground — coordinating design, deployment and commissioning across projects." },
];

const TECHNICAL: Member[] = [
  { img: team3, name: "Faizan Khazi", role: "Technical Engineer", bio: "Delivers hands-on engineering across IT and ELV systems — from installation through configuration and handover." },
  { img: team3, name: "Furkhan Khazi", role: "Technical Engineer", bio: "Executes on-site engineering with a focus on quality workmanship and reliable, standards-based delivery." },
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

      {/* Leadership — featured CEO */}
      <section className="relative section-y overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-radial-gold" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--gold)_10%,transparent),transparent_60%)]" />
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Leadership"
            title={<>The <em className="not-italic text-[var(--gold)]">vision</em> that leads the firm.</>}
            description="Setting the strategic direction of Roya Ventures — with clarity, conviction and long-term intent."
            align="center"
          />

          <div className="mt-16 max-w-4xl mx-auto">
            <Reveal>
              <FeaturedCard member={CEO} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Executive Management */}
      <section className="relative section-y overflow-hidden bg-[var(--ivory)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--gold)_10%,transparent),transparent_55%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--navy)_8%,transparent),transparent_60%)]" />
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Executive Management"
            title={<>Stewards of <em className="not-italic text-[var(--gold)]">growth</em> and governance.</>}
            description="The executives responsible for the firm's commercial trajectory and financial integrity."
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:gap-7 md:grid-cols-2 max-w-[68rem] mx-auto">
            {EXECUTIVE.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <MemberCard member={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering & Technical Leadership */}
      <section className="relative section-y overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-radial-gold" />
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Engineering & Technical Leadership"
            title={<>The leaders who <em className="not-italic text-[var(--gold)]">deliver</em> every mandate.</>}
            description="Accountable for project delivery, technical direction and client outcomes on the ground."
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7 max-w-[72rem] mx-auto">
            {ENGINEERING.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 0.07}>
                <MemberCard member={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Team */}
      <section className="relative section-y overflow-hidden bg-[var(--ivory)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,color-mix(in_oklab,var(--gold)_8%,transparent),transparent_55%)]" />
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Technical Team"
            title={<>The engineers behind the <em className="not-italic text-[var(--gold)]">craft.</em></>}
            description="Precise, disciplined execution — from installation through commissioning and handover."
            align="center"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-7 max-w-3xl mx-auto">
            {TECHNICAL.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <MemberCard member={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

/* ---------- Cards (existing premium design, preserved) ---------- */

function MemberCard({ member: p }: { member: Member }) {
  return (
    <article className="group relative h-full rounded-[18px] bg-gradient-to-b from-white to-[color-mix(in_oklab,var(--stone)_50%,white)] border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_1px_2px_rgba(24,49,78,0.04),0_10px_28px_-14px_rgba(24,49,78,0.18)] transition-all duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_2px_4px_rgba(24,49,78,0.06),0_28px_60px_-22px_rgba(24,49,78,0.32)] hover:-translate-y-1.5 hover:border-[color-mix(in_oklab,var(--gold)_35%,transparent)]">
      <span aria-hidden className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent" />
      <span aria-hidden className="pointer-events-none absolute top-2.5 left-2.5 h-3.5 w-3.5 border-l border-t border-[var(--gold)]/60 rounded-tl-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span aria-hidden className="pointer-events-none absolute bottom-2.5 right-2.5 h-3.5 w-3.5 border-r border-b border-[var(--gold)]/60 rounded-br-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-4 pb-5">
        <div className="relative mx-auto overflow-hidden rounded-[14px] max-w-[13rem] aspect-[4/4.6] bg-[var(--navy)] ring-1 ring-[color-mix(in_oklab,var(--navy)_10%,transparent)] shadow-[0_10px_24px_-14px_rgba(24,49,78,0.35)]">
          <img
            src={p.img}
            alt={p.name}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-[1600ms] ease-out group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/60 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent scale-x-0 origin-left transition-transform duration-[700ms] ease-out group-hover:scale-x-100" />
          <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 translate-x-2 transition-all duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:opacity-100 group-hover:translate-x-0">
            {[Linkedin, Mail].map((Icon, j) => (
              <a
                key={j}
                href="#"
                aria-label="Contact"
                style={{ transitionDelay: `${j * 60}ms` }}
                className="grid h-7.5 w-7.5 place-items-center rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white hover:bg-[var(--gold)] hover:text-[var(--navy)] hover:border-[var(--gold)] transition-all duration-300"
              >
                <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-5 px-1">
          <h3 className="font-display text-[1.25rem] leading-[1.15] font-semibold text-[var(--navy)] tracking-[-0.025em]">
            {p.name}
          </h3>
          <div className="mt-2.5 flex items-center gap-2.5">
            <span className="h-px w-6 bg-[var(--gold)] transition-all duration-500 group-hover:w-10" />
            <p className="text-[10px] tracking-[0.24em] uppercase text-[var(--gold)] font-semibold">
              {p.role}
            </p>
          </div>
          {p.bio && (
            <p className="mt-3.5 text-[13px] text-muted-foreground leading-[1.7]">
              {p.bio}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

function FeaturedCard({ member: p }: { member: Member }) {
  return (
    <article className="group relative overflow-hidden rounded-[24px] bg-gradient-to-b from-white to-[color-mix(in_oklab,var(--stone)_55%,white)] border border-[color-mix(in_oklab,var(--navy)_10%,transparent)] shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_2px_6px_rgba(24,49,78,0.06),0_30px_70px_-24px_rgba(24,49,78,0.28)] transition-all duration-[700ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_4px_10px_rgba(24,49,78,0.08),0_44px_90px_-30px_rgba(24,49,78,0.4)] hover:-translate-y-1.5 hover:border-[color-mix(in_oklab,var(--gold)_45%,transparent)]">
      {/* Gold accents */}
      <span aria-hidden className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/70 to-transparent" />
      <span aria-hidden className="pointer-events-none absolute top-3 left-3 h-4 w-4 border-l border-t border-[var(--gold)]/70 rounded-tl-[8px]" />
      <span aria-hidden className="pointer-events-none absolute top-3 right-3 h-4 w-4 border-r border-t border-[var(--gold)]/70 rounded-tr-[8px]" />
      <span aria-hidden className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-l border-b border-[var(--gold)]/70 rounded-bl-[8px]" />
      <span aria-hidden className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-r border-b border-[var(--gold)]/70 rounded-br-[8px]" />
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_65%)] blur-2xl" />

      <div className="grid gap-0 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        {/* Portrait */}
        <div className="p-6 md:p-8">
          <div className="relative overflow-hidden rounded-[18px] aspect-[4/5] bg-[var(--navy)] ring-1 ring-[color-mix(in_oklab,var(--navy)_12%,transparent)] shadow-[0_16px_32px_-18px_rgba(24,49,78,0.45)]">
            <img
              src={p.img}
              alt={p.name}
              className="h-full w-full object-cover object-top transition-transform duration-[1800ms] ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/65 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent scale-x-0 origin-left transition-transform duration-[800ms] ease-out group-hover:scale-x-100" />
            <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 translate-x-2 transition-all duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:opacity-100 group-hover:translate-x-0">
              {[Linkedin, Mail].map((Icon, j) => (
                <a
                  key={j}
                  href="#"
                  aria-label="Contact"
                  style={{ transitionDelay: `${j * 60}ms` }}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white hover:bg-[var(--gold)] hover:text-[var(--navy)] hover:border-[var(--gold)] transition-all duration-300"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col justify-center p-6 md:p-10 md:pl-2">
          <p className="gold-rule">Chief Executive</p>
          <h3 className="mt-6 font-display text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.05] font-semibold text-[var(--navy)] tracking-[-0.02em]">
            {p.name}
          </h3>
          <div className="mt-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--gold)] transition-all duration-500 group-hover:w-16" />
            <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--gold)] font-semibold">
              {p.role}
            </p>
          </div>
          {p.bio && (
            <p className="mt-6 text-[15px] md:text-base text-muted-foreground leading-[1.75] max-w-xl">
              {p.bio}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
