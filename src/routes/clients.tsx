import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Reveal } from "@/components/site/Reveal";
import { Quote, ShieldCheck, Gauge, Globe2, Sparkles, Handshake, Layers } from "lucide-react";
import heroClients from "@/assets/hero-clients.jpg";
import collageDatacenter from "@/assets/svc-datacenter.jpg";
import collageNetworking from "@/assets/svc-networking.jpg";
import collageElectrical from "@/assets/svc-electrical.jpg";
import collageFiber from "@/assets/svc-fiber.jpg";
import collageSurveillance from "@/assets/svc-surveillance.jpg";
import collageFire from "@/assets/svc-firefighting.jpg";
import collageIt from "@/assets/svc-it.jpg";
import collageDigital from "@/assets/svc-digital.jpg";

// Auto-import all 32 client logo asset pointers
const logoModules = import.meta.glob<{ default: { url: string } }>(
  "@/assets/clients/clients*.jpg.asset.json",
  { eager: true },
);
const CLIENT_LOGOS = Object.entries(logoModules)
  .map(([path, mod]) => {
    const n = Number(path.match(/clients(\d+)\.jpg/)?.[1] ?? 0);
    return { n, url: mod.default.url };
  })
  .sort((a, b) => a.n - b.n);

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients — Roya Ventures" },
      { name: "description", content: "A confidential roster of clients across five continents — from listed multinationals to founder-led enterprises and sovereign institutions." },
      { property: "og:title", content: "Clients — Roya Ventures" },
      { property: "og:description", content: "Trusted by leaders across industries and geographies." },
    ],
  }),
  component: ClientsPage,
});

const TESTIMONIALS = [
  {
    quote: "Roya brought a level of strategic clarity and discretion that few firms can match. They became an extension of our leadership team during a defining moment for the company.",
    name: "Chief Executive Officer",
    org: "Listed Industrial Group",
  },
  {
    quote: "Their counsel through the transaction was steady, candid and consistently aligned with our long-term interest. We would not have closed without them.",
    name: "Chair of the Board",
    org: "Family-Owned Conglomerate",
  },
];

const DIFFERENTIATORS = [
  {
    icon: ShieldCheck,
    title: "Uncompromising Discretion",
    body: "Every engagement is governed by strict confidentiality protocols. Our reputation is built on the trust of leaders who require privacy without exception.",
  },
  {
    icon: Layers,
    title: "Integrated Expertise",
    body: "From electrical infrastructure to data centers and networking, our multidisciplinary teams deliver coherent, end-to-end solutions under a single accountability.",
  },
  {
    icon: Globe2,
    title: "Global Reach, Local Insight",
    body: "Operating across forty markets with embedded regional knowledge — we navigate jurisdictions, regulators and cultures with equal fluency.",
  },
  {
    icon: Gauge,
    title: "Engineering-Grade Rigor",
    body: "Our work is governed by measurable standards: uptime, performance, cost predictability. We deliver to specification — on schedule, on budget.",
  },
  {
    icon: Handshake,
    title: "Partnership Beyond Delivery",
    body: "We remain at the table long after handover — advising on optimization, scaling and the next horizon. Most relationships span a decade or more.",
  },
  {
    icon: Sparkles,
    title: "A Commitment to Excellence",
    body: "Every detail is considered, every deliverable reviewed. We measure ourselves by outcomes our clients are proud to put their name to.",
  },
];

function ClientsPage() {
  return (
    <SiteLayout transparentHeader>
      <PageHero
        eyebrow="Our clients"
        title={<>A confidential roster of <span className="text-[var(--gold)]">global leaders</span>.</>}
        subtitle="From founder-led enterprises to listed multinationals and sovereign institutions, leaders entrust us with the moments that matter most."
        image={heroClients}
        height="compact"
      />

      {/* Differentiators — replaces stats band */}
      <section className="relative section-y overflow-hidden text-white bg-noise">
        <div className="absolute inset-0 -z-20">
          <img src={featureHQ} alt="" loading="lazy" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-deep)] via-[var(--navy-deep)]/95 to-[color-mix(in_oklab,var(--emerald-deep)_85%,var(--navy-deep))]" />
        </div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_15%,transparent),transparent_60%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,color-mix(in_oklab,var(--emerald-deep)_45%,transparent),transparent_55%)]" />

        <div className="container-px mx-auto">
          <div className="max-w-3xl mx-auto mb-20">
            <SectionHeading
              eyebrow="Why choose Roya Ventures"
              title={<>The qualities that <em className="not-italic text-[var(--gold)]">define our practice.</em></>}
              description="Six commitments that distinguish how we work, who we serve, and the standard we hold ourselves to on every mandate."
              align="center"
              invert
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DIFFERENTIATORS.map((d, i) => {
              const Icon = d.icon;
              return (
                <Reveal key={d.title} delay={(i % 3) * 0.08}>
                  <article
                    data-cursor="hover"
                    className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 md:p-9 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--gold)]/50 hover:bg-white/[0.06] hover:shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--gold)_35%,transparent)]"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_70%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                    <div className="flex items-start gap-5">
                      <div className="shrink-0 relative">
                        <div className="absolute inset-0 rounded-xl bg-[var(--gold)]/15 blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        <div className="relative h-14 w-14 rounded-xl border border-white/15 bg-white/[0.05] flex items-center justify-center transition-all duration-500 group-hover:border-[var(--gold)]/70 group-hover:bg-[var(--gold)]/10">
                          <Icon className="h-6 w-6 text-[var(--gold)]" strokeWidth={1.5} />
                        </div>
                      </div>
                      <div className="pt-1">
                        <p className="font-display text-[10px] tracking-[0.32em] uppercase text-[var(--gold)]/80">
                          {String(i + 1).padStart(2, "0")} · Principle
                        </p>
                      </div>
                    </div>

                    <h3 className="font-display text-2xl mt-7 leading-tight text-white">
                      {d.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-white/70">
                      {d.body}
                    </p>

                    <div className="mt-7 h-px w-10 bg-[var(--gold)]/70 transition-all duration-500 group-hover:w-20" />
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent" />
      </section>

      {/* Premium logo showcase — real client logos */}
      <section className="section-y relative overflow-hidden" style={{ background: "var(--grad-ivory)" }}>
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="A selection"
            title={<>With permission, a selection of <em className="not-italic text-[var(--gold)]">those we have served.</em></>}
            description="Many engagements remain confidential. A representative sample of public-facing relationships is shown below."
          />
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {CLIENT_LOGOS.map((logo, i) => (
              <Reveal key={logo.n} delay={(i % 12) * 0.025}>
                <div
                  data-cursor="hover"
                  className="group relative aspect-square rounded-2xl bg-white border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] flex items-center justify-center shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--gold)]/50 hover:shadow-[var(--shadow-elegant)] overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklab,var(--gold)_10%,transparent),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <img
                    src={logo.url}
                    alt={`Client ${logo.n}`}
                    loading="lazy"
                    className="relative max-h-[68%] max-w-[78%] w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — premium quote cards */}
      <section className="section-y relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-radial-gold" />
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="In their words"
            title={<>What our clients <em className="not-italic text-[var(--gold)]">say.</em></>}
            align="center"
          />
          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <figure className="group relative overflow-hidden rounded-2xl bg-card border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] shadow-[var(--shadow-card)] p-10 md:p-14 h-full transition-all duration-500 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1">
                  <div className="absolute -top-8 -right-8 h-40 w-40 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_70%)] opacity-50" />
                  <Quote className="h-12 w-12 text-[var(--gold)]" strokeWidth={1.25} />
                  <blockquote className="mt-8 font-display text-xl md:text-2xl leading-[1.45] text-[var(--navy)] font-light tracking-[-0.015em]">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-10 pt-8 border-t border-[color-mix(in_oklab,var(--navy)_10%,transparent)] flex items-center gap-4">
                    <div className="h-px w-8 bg-[var(--gold)]" />
                    <div>
                      <p className="font-semibold text-[var(--navy)]">{t.name}</p>
                      <p className="text-sm text-muted-foreground tracking-wide">{t.org}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Confidential by design"
        title="Speak with us about your mandate."
        description="Every conversation begins under confidentiality. Tell us what's at stake — we will respond personally."
      />
    </SiteLayout>
  );
}
