import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";

import { Reveal } from "@/components/site/Reveal";

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? "")
    .join("");
}
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

          <div className="mt-14 max-w-2xl mx-auto">
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
          <div className="mt-14 max-w-[68rem] mx-auto">
            <TeamCarousel members={ENGINEERING} />
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
          <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-7 max-w-[68rem] mx-auto">
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

/* ---------- Premium member cards (non-CEO) ---------- */

function MemberCard({ member: p }: { member: Member }) {
  return (
    <article className="group relative h-full rounded-[20px] bg-gradient-to-b from-white to-[color-mix(in_oklab,var(--stone)_55%,white)] border border-[color-mix(in_oklab,var(--navy)_10%,transparent)] shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_1px_2px_rgba(24,49,78,0.04),0_8px_24px_-16px_rgba(24,49,78,0.18)] transition-all duration-[700ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_2px_6px_rgba(24,49,78,0.06),0_18px_44px_-24px_rgba(24,49,78,0.28)] hover:-translate-y-1.5 hover:border-[color-mix(in_oklab,var(--gold)_45%,transparent)]">
      {/* Gold accents */}
      <span aria-hidden className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/70 to-transparent" />
      <span aria-hidden className="pointer-events-none absolute top-2.5 left-2.5 h-3.5 w-3.5 border-l border-t border-[var(--gold)]/70 rounded-tl-[6px]" />
      <span aria-hidden className="pointer-events-none absolute top-2.5 right-2.5 h-3.5 w-3.5 border-r border-t border-[var(--gold)]/70 rounded-tr-[6px]" />
      <span aria-hidden className="pointer-events-none absolute bottom-2.5 left-2.5 h-3.5 w-3.5 border-l border-b border-[var(--gold)]/70 rounded-bl-[6px]" />
      <span aria-hidden className="pointer-events-none absolute bottom-2.5 right-2.5 h-3.5 w-3.5 border-r border-b border-[var(--gold)]/70 rounded-br-[6px]" />
      <div aria-hidden className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_65%)] blur-2xl" />

      <div className="grid gap-0 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        {/* Placeholder (image area reserved for future portrait) */}
        <div className="p-4 sm:p-5">
          <div className="relative overflow-hidden rounded-[14px] max-w-[9rem] mx-auto sm:max-w-none aspect-[4/5] bg-gradient-to-b from-[var(--navy)] to-[var(--navy-deep)] ring-1 ring-[color-mix(in_oklab,var(--navy)_12%,transparent)] shadow-[0_12px_28px_-16px_rgba(24,49,78,0.45)]">
            <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top,color-mix(in_oklab,var(--gold)_20%,transparent),transparent_65%)]" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="font-display text-[2.25rem] sm:text-[2.5rem] font-semibold tracking-[-0.02em] text-[var(--gold)]/90">
                {getInitials(p.name)}
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent scale-x-0 origin-left transition-transform duration-[700ms] ease-out group-hover:scale-x-100" />
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col justify-center p-4 sm:p-5 sm:pl-2">
          <h3 className="font-display text-[1.25rem] sm:text-[1.4rem] leading-[1.1] font-semibold text-[var(--navy)] tracking-[-0.02em]">
            {p.name}
          </h3>
          <div className="mt-2.5 flex items-center gap-2">
            <span className="h-px w-6 bg-[var(--gold)] transition-all duration-500 group-hover:w-10" />
            <p className="text-[10.5px] tracking-[0.22em] uppercase text-[var(--gold)] font-semibold">
              {p.role}
            </p>
          </div>
          {p.bio && (
            <p className="mt-3 text-[12.5px] sm:text-[13.5px] text-muted-foreground leading-[1.7]">
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
    <article className="group relative overflow-hidden rounded-[22px] bg-gradient-to-b from-white to-[color-mix(in_oklab,var(--stone)_55%,white)] border border-[color-mix(in_oklab,var(--navy)_10%,transparent)] shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_2px_6px_rgba(24,49,78,0.06),0_30px_70px_-24px_rgba(24,49,78,0.28)] transition-all duration-[700ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_4px_10px_rgba(24,49,78,0.08),0_44px_90px_-30px_rgba(24,49,78,0.4)] hover:-translate-y-1.5 hover:border-[color-mix(in_oklab,var(--gold)_45%,transparent)]">
      {/* Gold accents */}
      <span aria-hidden className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/70 to-transparent" />
      <span aria-hidden className="pointer-events-none absolute top-3 left-3 h-4 w-4 border-l border-t border-[var(--gold)]/70 rounded-tl-[8px]" />
      <span aria-hidden className="pointer-events-none absolute top-3 right-3 h-4 w-4 border-r border-t border-[var(--gold)]/70 rounded-tr-[8px]" />
      <span aria-hidden className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-l border-b border-[var(--gold)]/70 rounded-bl-[8px]" />
      <span aria-hidden className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-r border-b border-[var(--gold)]/70 rounded-br-[8px]" />
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_65%)] blur-2xl" />

      <div className="grid gap-0 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        {/* Placeholder (image area reserved for future portrait) */}
        <div className="p-4 md:p-5">
          <div className="relative overflow-hidden rounded-[16px] max-w-[12rem] mx-auto md:max-w-none aspect-[4/5] bg-gradient-to-b from-[var(--navy)] to-[var(--navy-deep)] ring-1 ring-[color-mix(in_oklab,var(--navy)_12%,transparent)] shadow-[0_16px_32px_-18px_rgba(24,49,78,0.45)]">
            <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_65%)]" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="font-display text-[3rem] md:text-[3.5rem] font-semibold tracking-[-0.02em] text-[var(--gold)]/90">
                {getInitials(p.name)}
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent scale-x-0 origin-left transition-transform duration-[800ms] ease-out group-hover:scale-x-100" />
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col justify-center p-4 md:p-6 md:pl-2">
          <p className="gold-rule">Chief Executive</p>
          <h3 className="mt-4 font-display text-[1.5rem] md:text-[1.85rem] lg:text-[2.1rem] leading-[1.05] font-semibold text-[var(--navy)] tracking-[-0.02em]">
            {p.name}
          </h3>
          <div className="mt-3 flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--gold)] transition-all duration-500 group-hover:w-16" />
            <p className="text-[10.5px] tracking-[0.28em] uppercase text-[var(--gold)] font-semibold">
              {p.role}
            </p>
          </div>
          {p.bio && (
            <p className="mt-4 text-sm md:text-[14.5px] text-muted-foreground leading-[1.75] max-w-xl">
              {p.bio}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

/* ---------- Premium carousel for sections with >2 members ---------- */

function TeamCarousel({ members }: { members: Member[] }) {
  const autoplayRef = useRef(
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1, containScroll: "trimSnaps" },
    [autoplayRef.current],
  );
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);


  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    setSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="relative group/carousel">
      <div className="overflow-hidden py-8 -my-4" ref={emblaRef}>
        <div className="flex -ml-5 md:-ml-7">
          {members.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="pl-5 md:pl-7 shrink-0 grow-0 basis-full md:basis-1/2"
            >
              <Reveal delay={(i % 3) * 0.07}>
                <MemberCard member={p} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>


      {/* Dots */}
      {snaps.length > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === selected
                  ? "w-6 bg-[var(--gold)]"
                  : "w-2 bg-[color-mix(in_oklab,var(--navy)_25%,transparent)] hover:bg-[color-mix(in_oklab,var(--navy)_45%,transparent)]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
