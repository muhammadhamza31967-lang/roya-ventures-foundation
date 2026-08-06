import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Zap,
  Gauge,
  LayoutGrid,
  Network,
  Building2,
  Factory,
  Sun,
  BatteryCharging,
  ShieldCheck,
  Award,
  BadgeCheck,
  Cpu,
  LineChart,
  Landmark,
  Store,
  Server,
  CheckCircle2,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroElectrical from "@/assets/svc-electrical.jpg";
import logoChalhoub from "@/assets/clients/corporate/chalhoub.png.asset.json";
import logoSephora from "@/assets/clients/corporate/sephora-2.png.asset.json";
import logoDominos from "@/assets/clients/hospitality/dominos.png.asset.json";

export const Route = createFileRoute("/services/electrical-contracts")({
  head: () => ({
    meta: [
      { title: "Electrical Contracts in Saudi Arabia — Roya Ventures" },
      {
        name: "description",
        content:
          "Electrical contracting in Saudi Arabia — LV/HV systems, power distribution, panels, fit-outs, industrial wiring, solar, generators, UPS and switchgear by certified engineers.",
      },
      { property: "og:title", content: "Electrical Contracts in Saudi Arabia — Roya Ventures" },
      {
        property: "og:description",
        content:
          "From single building fit-out to complete industrial campuses, we handle every aspect of your electrical project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ElectricalContractsPage,
});

const TRUST = [
  "8+ Years in the Field",
  "Certified Engineers",
  "All Project Sizes",
  "Saudi Arabia & Beyond",
];

const OFFERINGS = [
  {
    icon: Zap,
    title: "LV/HV Electrical Systems",
    text: "Design, install, and commission systems that are safe, compliant, and built to handle the load.",
  },
  {
    icon: Gauge,
    title: "LV/MV Power Distribution",
    text: "Handle load analysis, cabling and full commissioning so power flows without interruption.",
  },
  {
    icon: LayoutGrid,
    title: "Panels & Distribution Boards",
    text: "Designing and installing panel systems that are organised, clearly labelled and easy to maintain.",
  },
  {
    icon: Network,
    title: "Distribution & Power Management",
    text: "We map your power requirements, design the most efficient distribution network, and implement monitoring solutions.",
  },
  {
    icon: Building2,
    title: "Building Electrical Fit-Outs",
    text: "Lighting, power, distribution boards, earthing, cable management, and everything in between.",
  },
  {
    icon: Factory,
    title: "Industrial & Factory Wiring",
    text: "Industrial environments demand higher loads, safety standards, and zero tolerance for downtime.",
  },
  {
    icon: Sun,
    title: "Solar & Renewable Energy",
    text: "Designing and installing solar PV systems for commercial and industrial facilities integrated cleanly with your existing electrical infrastructure.",
  },
  {
    icon: BatteryCharging,
    title: "Generator & UPS Systems",
    text: "We design, supply, and install generator sets and UPS systems that kick in instantly, keeping your critical systems online.",
  },
  {
    icon: ShieldCheck,
    title: "Switchgear",
    text: "We supply and test switchgear assemblies that meet your load requirements that comply with international safety standards.",
  },
];

const WHY = [
  { icon: Award, title: "8+ Years of Industry Success" },
  { icon: ShieldCheck, title: "Quality Control, Security & Compliance Assurance" },
  { icon: BadgeCheck, title: "Certified Engineers" },
  { icon: Cpu, title: "Advanced Technologies Used" },
  { icon: LineChart, title: "Reporting and Support" },
];

const PROCESS = [
  [
    "We Listen First",
    "Tell us about your facility, requirements, and timeline. We ask the right questions so nothing gets missed.",
  ],
  [
    "We Design It Properly",
    "Our certified engineers produce a detailed design based on your actual needs.",
  ],
  ["We Build It Clean", "Installation is carried out by our own certified team."],
  ["We Test Everything", "Before handover, every circuit is tested, documented and verified."],
  ["We Stay Available", "We offer 24/7 full support and track performance."],
];

const INDUSTRIES = [
  { icon: Building2, title: "Commercial Buildings & Developers" },
  { icon: Factory, title: "Industrial & Manufacturing" },
  { icon: Landmark, title: "Government & Public Sectors" },
  { icon: Store, title: "Retail Chains & Shopping Malls" },
  { icon: Server, title: "Data Centers & Tech Facilities" },
];

const FAQS: [string, string][] = [
  ["Do you handle both design and installation?", "Yes. We manage both."],
  [
    "Are your systems compliant with Saudi standards?",
    "Yes. All our electrical work complies with SEC regulations and relevant IEC/NFPA international standards.",
  ],
  [
    "Do you offer maintenance after the project completion?",
    "Yes. We offer Annual Maintenance Contracts (AMC) and emergency call-out support to keep your systems running long after handover.",
  ],
  [
    "What size projects do you take on?",
    "All sizes. From single-floor office fit-outs to large industrial campuses.",
  ],
  [
    "Do you provide your electrical contracting service only in Saudi Arabia or other countries as well?",
    "We are based in Saudi Arabia, but we also offer our services in other countries.",
  ],
  [
    "What happens after I book a call?",
    "Once you book a call, we'll schedule an appointment and offer a free consultation.",
  ],
];

function ElectricalContractsPage() {
  return (
    <SiteLayout transparentHeader>
      <PageHero
        eyebrow="Electrical contracts"
        title={
          <>
            Electrical Contracts in <span className="text-[var(--gold)]">Saudi Arabia</span>
          </>
        }
        subtitle="From single building fit-out to complete industrial campuses, we handle every aspect of your electrical project."
        image={heroElectrical}
        height="compact"
      >
        <Link to="/contact" className="btn-primary btn-on-dark">
          Get a Free Consultation <ArrowRight className="h-4 w-4" />
        </Link>
        <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {TRUST.map((t) => (
            <div
              key={t}
              className="flex items-center gap-3 rounded-xl border border-white/12 bg-white/[0.05] backdrop-blur-sm px-4 py-3 text-sm text-white/85"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--gold)]" strokeWidth={1.6} />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Overview */}
      <section className="section-y relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-radial-gold" />
        <div className="container-px mx-auto">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-start">
            <Reveal>
              <p className="gold-rule">Overview</p>
              <h2 className="heading-sub-lg mt-6">Electrical Contracts Overview</h2>
              <div className="mt-8 gold-divider" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base md:text-[17px] leading-[1.85] text-muted-foreground lg:pt-6">
                At Roya Ventures, we engineer electrical systems that are safe, efficient, and built
                for how your business actually operates. Whether you're fitting out a new office,
                warehouse, retail stores upgrading a floor, or installing backup power for a data
                center, we get the job done.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services breakdown */}
      <section className="section-y bg-[var(--stone)] relative overflow-hidden">
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Services breakdown"
            title={<>What We Offer</>}
            description="We handle all types of electrical contracts, from design and supply to installation and commissioning."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {OFFERINGS.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={(i % 3) * 0.07}>
                  <article
                    className="group relative h-full overflow-hidden rounded-2xl bg-card p-8 md:p-9 border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-elegant)] hover:border-[var(--gold)]/40"
                    data-cursor="hover"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="absolute right-6 top-6 font-display text-xs tracking-[0.35em] text-[var(--navy)]/25">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="relative grid h-14 w-14 place-items-center rounded-xl border border-[var(--gold)]/35 bg-gradient-to-br from-[color-mix(in_oklab,var(--gold)_12%,transparent)] to-transparent text-[var(--gold)] transition-all duration-500 group-hover:bg-[var(--gold)] group-hover:text-[var(--navy)]">
                      <Icon className="h-6 w-6" strokeWidth={1.4} />
                    </div>
                    <h3 className="mt-7 font-display text-xl md:text-2xl font-semibold tracking-[-0.02em] text-[var(--navy)]">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-[1.75] text-muted-foreground">{s.text}</p>
                    <div className="mt-7 h-px w-10 bg-[var(--gold)] transition-all duration-500 group-hover:w-24" />
                  </article>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-14 flex justify-center">
            <Link to="/contact" className="btn-primary">
              Start Your Electrical Contract Project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section
        className="relative section-y overflow-hidden bg-noise text-white"
        style={{ background: "linear-gradient(135deg, #0B1F36 0%, #0E2440 45%, #0F3A30 100%)" }}
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_20%,transparent),transparent_55%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/70 to-transparent" />
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Why us"
            title={<>Why Clients Choose Roya Ventures as Their Electrical Contractor?</>}
            description="Here's what makes us different."
            invert
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w, i) => {
              const Icon = w.icon;
              return (
                <Reveal key={w.title} delay={(i % 3) * 0.07}>
                  <div
                    className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 transition-all duration-500 hover:bg-white/[0.07] hover:border-[var(--gold)]/40 hover:-translate-y-1"
                    data-cursor="hover"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-xl border border-[var(--gold)]/35 text-[var(--gold)] transition-colors duration-500 group-hover:bg-[var(--gold)] group-hover:text-[var(--navy)]">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold leading-snug text-white">{w.title}</h3>
                    <div className="mt-6 gold-divider" />
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-14 flex justify-center">
            <Link to="/contact" className="btn-primary btn-on-dark">
              Get Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-y relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-radial-gold" />
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Our process"
            title={<>How We Work</>}
            description="We deliver tailored solutions that address your unique business challenges for measurable operational efficiency."
          />
          <div className="mt-16 relative">
            <div
              aria-hidden
              className="hidden lg:block absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/45 to-transparent"
            />
            <ol className="grid gap-8 lg:grid-cols-5">
              {PROCESS.map(([title, text], i) => (
                <Reveal key={title} delay={i * 0.07} as="li">
                  <div className="group relative h-full pl-8 lg:pl-0">
                    <div
                      aria-hidden
                      className="lg:hidden absolute left-[15px] top-10 bottom-0 w-px bg-[var(--gold)]/25"
                    />
                    <div className="absolute left-0 top-1 lg:static grid h-8 w-8 place-items-center rounded-full border border-[var(--gold)]/50 bg-[var(--ivory)] font-display text-xs text-[var(--gold)] transition-colors duration-500 group-hover:bg-[var(--gold)] group-hover:text-[var(--navy)]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-0 lg:mt-8 font-display text-xl font-semibold tracking-[-0.02em] text-[var(--navy)]">
                      {title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.75] text-muted-foreground">{text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-y bg-[var(--stone)]">
        <div className="container-px mx-auto">
          <SectionHeading eyebrow="Sectors" title={<>Industries We Worked With</>} />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <Reveal key={ind.title} delay={(i % 3) * 0.07}>
                  <div
                    className="group flex h-full items-center gap-5 rounded-2xl bg-card p-7 border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--gold)]/40 hover:shadow-[var(--shadow-elegant)]"
                    data-cursor="hover"
                  >
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[var(--gold)]/35 text-[var(--gold)] transition-colors duration-500 group-hover:bg-[var(--gold)] group-hover:text-[var(--navy)]">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-lg font-semibold leading-snug text-[var(--navy)]">
                      {ind.title}
                    </h3>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trusted across the region */}
      <section className="section-y">
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Track record"
            title={<>Trusted Across the Region</>}
            description="For over 8+ years, enterprises across Saudi Arabia have trusted Roya Ventures to power their operations."
          />
          <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <Reveal>
              <div className="grid grid-cols-3 gap-5">
                {[logoChalhoub, logoSephora, logoDominos].map((logo, i) => (
                  <div
                    key={i}
                    className="grid place-items-center rounded-2xl bg-card border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] p-6 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--gold)]/40"
                  >
                    <img
                      src={logo.url}
                      alt="Client logo"
                      className="h-10 md:h-12 w-auto object-contain opacity-80 transition-opacity duration-500 hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-[var(--gold)]/30 bg-gradient-to-br from-white to-[var(--stone)] p-9 shadow-[var(--shadow-card)]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent" />
                <p className="gold-rule">Project highlight</p>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.02em] text-[var(--navy)]">
                  Retail Chain, Riyadh
                </h3>
                <p className="mt-4 text-[15px] leading-[1.75] text-muted-foreground">
                  Full electrical fit-out across 12 branches. Delivered on time.
                </p>
                <Link to="/projects" className="btn-primary mt-8 inline-flex">
                  See More Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-y bg-[var(--stone)]">
        <div className="container-px mx-auto">
          <SectionHeading eyebrow="FAQs" title={<>Frequently asked questions</>} />
          <div className="mt-14 mx-auto max-w-4xl">
            <Accordion type="single" collapsible className="space-y-4">
              {FAQS.map(([q, a], i) => (
                <AccordionItem
                  key={q}
                  value={`item-${i}`}
                  className="rounded-2xl border border-[color-mix(in_oklab,var(--navy)_10%,transparent)] bg-card px-6 shadow-[var(--shadow-card)] transition-colors duration-500 hover:border-[var(--gold)]/40"
                >
                  <AccordionTrigger className="text-left font-display text-base md:text-lg font-semibold text-[var(--navy)] hover:no-underline">
                    {q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] leading-[1.75] text-muted-foreground">
                    {a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-[var(--ivory)] py-20 md:py-28">
        <div className="container-px mx-auto">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] ring-1 ring-[var(--gold)]/25 shadow-[0_50px_120px_-30px_color-mix(in_oklab,var(--navy)_55%,transparent)]">
            <div className="relative isolate overflow-hidden bg-noise text-center">
              <div className="absolute inset-0 -z-20" style={{ background: "var(--grad-navy)" }} />
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_55%)]" />
              <div className="px-8 md:px-14 py-16 md:py-20">
                <p className="gold-rule-center">Next step</p>
                <h2 className="mt-6 font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.08] tracking-[-0.03em] text-white">
                  Ready to Get Started?
                </h2>
                <p className="mt-5 mx-auto max-w-xl text-white/75 text-base md:text-lg leading-relaxed font-light">
                  Tell us what you're working on. We'll come up with a clear plan.
                </p>
                <div className="mt-10 flex justify-center">
                  <Link to="/contact" className="btn-primary btn-on-dark">
                    Request a Free Consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
