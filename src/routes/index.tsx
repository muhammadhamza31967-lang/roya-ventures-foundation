import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cable, Cpu, Network, ShieldCheck, Building2, Flame, Code2, Activity, Linkedin, Mail } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { HeroSlider } from "@/components/site/HeroSlider";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ImageServiceCard } from "@/components/site/ImageServiceCard";
import { StatGrid } from "@/components/site/StatGrid";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PartnersMarquee } from "@/components/site/PartnersMarquee";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES } from "@/lib/services-data";
import heroTech1 from "@/assets/hero-tech-1.jpg";
import heroTech2 from "@/assets/hero-tech-2.jpg";
import heroTech3 from "@/assets/hero-tech-3.jpg";
import svcDatacenter from "@/assets/svc-datacenter.jpg";
import svcNetworking from "@/assets/svc-networking.jpg";
import svcFiber from "@/assets/svc-fiber.jpg";
import svcEms from "@/assets/svc-ems.jpg";
import svcSurveillance from "@/assets/svc-surveillance.jpg";
import svcFirefighting from "@/assets/svc-firefighting.jpg";
import svcElectrical from "@/assets/svc-electrical.jpg";
import svcIt from "@/assets/svc-it.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roya Ventures — Technology Infrastructure & Engineering" },
      { name: "description", content: "Roya Ventures designs, builds and supports technology infrastructure — data centers, networks, security, electrical and IT systems for modern enterprise." },
      { property: "og:title", content: "Roya Ventures — Technology Infrastructure & Engineering" },
      { property: "og:description", content: "Data centers, networks, surveillance, electrical, fire protection and IT — engineered end to end." },
    ],
  }),
  component: HomePage,
});

const HERO_SLIDES = [
  { src: heroTech2, alt: "Enterprise data center hall with illuminated server racks" },
  { src: svcFiber, alt: "Fiber optic cabling glowing blue" },
  { src: svcSurveillance, alt: "Security operations centre with surveillance video wall" },
  { src: heroTech1, alt: "Smart commercial building at dusk" },
  { src: svcDatacenter, alt: "Modern data center corridor" },
  { src: heroTech3, alt: "Abstract fiber light trails in navy and gold" },
];

// Featured services on the homepage — first six from the master list
const HOME_SERVICES = SERVICES.slice(0, 6);

const CAPABILITIES = [
  { icon: Cpu, name: "Data Centers" },
  { icon: Network, name: "Enterprise Networks" },
  { icon: Cable, name: "Fiber & Structured Cabling" },
  { icon: ShieldCheck, name: "Access Control & EMS" },
  { icon: Activity, name: "Surveillance & CCTV" },
  { icon: Flame, name: "Fire Protection" },
  { icon: Building2, name: "Electrical Contracts" },
  { icon: Code2, name: "Web & IT Services" },
];

const TEAM_PREVIEW = [
  { img: team1, name: "Alexander Hart", role: "Managing Director" },
  { img: team2, name: "Selma Ardıç", role: "Head of Engineering" },
  { img: team3, name: "Daniel Okafor", role: "Data Centre Practice" },
  { img: team4, name: "Noor El-Hashem", role: "Network & Security" },
];

function HomePage() {
  return (
    <SiteLayout transparentHeader>
      {/* Hero — full-bleed slider */}
      <section className="relative isolate min-h-[100vh] overflow-hidden bg-noise text-white flex items-end">
        <HeroSlider images={HERO_SLIDES} />

        {/* Layered overlays — lighter so imagery breathes through */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--navy-deep)]/72 via-[var(--navy-deep)]/45 to-[color-mix(in_oklab,var(--emerald-deep)_70%,var(--navy-deep))]/65" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-[var(--navy-deep)]/85 via-[var(--navy-deep)]/35 to-transparent" />

        {/* Decorative shapes */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 -right-32 h-[40rem] w-[40rem] rounded-full border border-[var(--gold)]/12 float-shape" />
          <div className="absolute top-1/4 -right-20 h-[24rem] w-[24rem] rounded-full border border-[var(--gold)]/08" />
          <div className="absolute -bottom-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--emerald-deep)_45%,transparent),transparent_65%)] blur-2xl" />
          <div className="absolute right-12 top-24 hidden md:block h-[60%] w-px bg-gradient-to-b from-transparent via-[var(--gold)]/40 to-transparent" />
        </div>

        <div className="container-px mx-auto w-full pb-32 pt-44 md:pb-44 md:pt-52 relative">
          <div className="max-w-5xl">
            <p className="gold-rule reveal-soft" style={{ animationDelay: "0.05s" }}>
              Roya Ventures
            </p>
            <h1 className="heading-xl mt-8 text-white reveal" style={{ animationDelay: "0.15s" }}>
              Technology infrastructure, <span className="text-[var(--gold)]">engineered end to end.</span>
            </h1>
            <p
              className="mt-10 max-w-2xl text-lg md:text-xl leading-relaxed text-white/90 reveal font-light"
              style={{ animationDelay: "0.3s" }}
            >
              From data centers and enterprise networks to surveillance, electrical and IT systems —
              we design, build and support the systems that keep modern enterprises running.
            </p>
            <div
              className="mt-12 flex flex-wrap gap-5 reveal"
              style={{ animationDelay: "0.45s" }}
            >
              <Link to="/services" className="btn-primary" data-cursor="hover">
                Explore our services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-outline-light" data-cursor="hover">
                Request a consultation
              </Link>
            </div>
          </div>

          <div className="mt-20 hidden md:flex items-end justify-between gap-8 reveal-soft" style={{ animationDelay: "0.7s" }}>
            <div className="flex items-center gap-4 text-white/65 text-xs tracking-[0.3em] uppercase">
              <span className="gold-divider" />
              <span>Infrastructure · Networks · Security · IT</span>
            </div>
            {/* Animated scroll indicator */}
            <a href="#firm" aria-label="Scroll to next section" className="group flex flex-col items-center gap-3" data-cursor="hover">
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/65 group-hover:text-[var(--gold)] transition-colors">Scroll</span>
              <span className="relative grid h-10 w-6 place-items-start rounded-full border border-[var(--gold)]/70 pt-1.5">
                <span className="block h-1.5 w-px bg-[var(--gold)] scroll-wheel" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Introduction — The Firm */}
      <section id="firm" className="section-y relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-radial-gold" />
        <div aria-hidden className="pointer-events-none absolute -top-32 right-10 h-72 w-72 rounded-full border border-[var(--gold)]/15" />
        <div aria-hidden className="pointer-events-none absolute bottom-10 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--emerald-deep)_18%,transparent),transparent_65%)] blur-3xl" />

        <div className="container-px mx-auto">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-24 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <Reveal>
                <p className="gold-rule">The Firm</p>
                <h2 className="heading-lg mt-8 leading-[1.05]">
                  One partner for the technology systems that <em className="not-italic text-[var(--gold)]">power your business.</em>
                </h2>
                <div className="mt-10 hairline max-w-[10rem]" />
                <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                  {[
                    { k: "15+", v: "Years" },
                    { k: "400+", v: "Projects" },
                    { k: "11", v: "Practices" },
                  ].map((s) => (
                    <div key={s.v}>
                      <div className="font-display text-3xl font-semibold text-[var(--navy)] tracking-[-0.03em]">{s.k}</div>
                      <div className="mt-1 text-[11px] tracking-[0.22em] uppercase text-muted-foreground">{s.v}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <Reveal delay={0.1}>
                <p className="text-xl md:text-2xl leading-[1.55] text-[var(--navy)] font-light text-justify hyphens-auto">
                  Roya Ventures is a multidisciplinary technology and engineering solutions firm —
                  delivering data centers, networks, security, electrical and IT infrastructure
                  under a single, accountable mandate.
                </p>
                <p className="mt-8 text-base md:text-[17px] leading-[1.85] text-muted-foreground text-justify hyphens-auto">
                  We work with enterprises, retailers, public institutions and developers to plan,
                  deploy and operate the physical and digital systems modern operations depend on.
                  Every engagement is delivered by senior engineers with full ownership of the
                  outcome — from initial design through commissioning and long-term support.
                </p>
                <div className="mt-12 flex flex-wrap gap-4">
                  <Link to="/about" className="btn-ghost" data-cursor="hover">About the firm <ArrowRight className="h-4 w-4" /></Link>
                  <Link to="/team" className="btn-ghost" data-cursor="hover">Meet our people <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services — image-led masonry */}
      <section className="section-y relative overflow-hidden" style={{ background: "var(--grad-ivory)" }}>
        <div className="container-px mx-auto">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between mb-16">
            <SectionHeading
              eyebrow="What we do"
              title={<>Eleven specialised practices for <em className="not-italic text-[var(--gold)]">modern infrastructure.</em></>}
              description="From the cabling in your walls to the software on your screens — engineered, installed and supported by a single accountable team."
            />
            <Link to="/services" className="btn-ghost shrink-0" data-cursor="hover">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-fr">
            <Reveal className="md:col-span-7">
              <ImageServiceCard image={HOME_SERVICES[0].image} title={HOME_SERVICES[0].title} description={HOME_SERVICES[0].short} index={0} size="wide" />
            </Reveal>
            <Reveal delay={0.08} className="md:col-span-5">
              <ImageServiceCard image={HOME_SERVICES[1].image} title={HOME_SERVICES[1].title} description={HOME_SERVICES[1].short} index={1} size="tall" />
            </Reveal>
            <Reveal delay={0.15} className="md:col-span-4">
              <ImageServiceCard image={HOME_SERVICES[2].image} title={HOME_SERVICES[2].title} description={HOME_SERVICES[2].short} index={2} />
            </Reveal>
            <Reveal delay={0.22} className="md:col-span-4">
              <ImageServiceCard image={HOME_SERVICES[3].image} title={HOME_SERVICES[3].title} description={HOME_SERVICES[3].short} index={3} />
            </Reveal>
            <Reveal delay={0.29} className="md:col-span-4">
              <ImageServiceCard image={HOME_SERVICES[4].image} title={HOME_SERVICES[4].title} description={HOME_SERVICES[4].short} index={4} />
            </Reveal>
            <Reveal delay={0.36} className="md:col-span-12">
              <ImageServiceCard image={HOME_SERVICES[5].image} title={HOME_SERVICES[5].title} description={HOME_SERVICES[5].short} index={5} size="banner" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Full-width feature image with floating quote panel */}
      <section className="relative isolate overflow-hidden">
        <div className="relative h-[60vh] md:h-[80vh] w-full">
          <img
            src={heroTech2}
            alt="Engineered data center infrastructure"
            loading="lazy"
            width={1920}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-deep)]/90 via-[var(--navy-deep)]/55 to-transparent" />
          <div className="container-px mx-auto h-full relative flex items-center">
            <Reveal className="max-w-2xl">
              <p className="gold-rule text-[var(--gold)]">Engineering discipline</p>
              <p className="mt-8 font-display text-3xl md:text-5xl font-light leading-[1.15] tracking-[-0.025em] text-white">
                "We measure success in uptime, response time and the silence of systems that just
                work — long after our engineers have left the site."
              </p>
              <div className="mt-10 flex items-center gap-5">
                <div className="h-px w-16 bg-[var(--gold)]" />
                <p className="text-sm tracking-[0.25em] uppercase text-white/70">The Roya Ventures Standard</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="section-y" style={{ background: "var(--grad-ivory)" }}>
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Capabilities"
            title={<>Depth across the systems shaping the <em className="not-italic text-[var(--gold)]">connected enterprise.</em></>}
            description="A coordinated engineering practice — so your network, power, security and IT systems are designed to work as one."
          />
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {CAPABILITIES.map(({ icon: Icon, name }, i) => (
              <Reveal key={name} delay={(i % 4) * 0.05}>
                <div className="group relative h-full rounded-2xl bg-card p-8 border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-elegant)] hover:border-[var(--gold)]/40" data-cursor="hover">
                  <div className="grid h-14 w-14 place-items-center rounded-xl border border-[var(--emerald-deep)]/30 bg-gradient-to-br from-[color-mix(in_oklab,var(--emerald-deep)_10%,transparent)] to-transparent text-[var(--emerald-deep)] transition-all duration-500 group-hover:bg-[var(--emerald-deep)] group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-7 text-base font-semibold text-[var(--navy)] tracking-tight">{name}</h3>
                  <div className="mt-4 h-px w-8 bg-[var(--gold)] transition-all duration-500 group-hover:w-16" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — premium dark navy band */}
      <section
        className="relative section-y overflow-hidden text-white bg-noise"
        style={{
          background:
            "linear-gradient(135deg, #0E2440 0%, #18314E 45%, #0F3A30 100%)",
        }}
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_30%,transparent),transparent_55%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,color-mix(in_oklab,var(--emerald-deep)_60%,transparent),transparent_60%)]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full border border-[var(--gold)]/15 float-shape" />
          <div className="absolute -bottom-32 -right-24 h-[24rem] w-[24rem] rounded-full border border-[var(--gold)]/10" />
        </div>

        <div className="container-px mx-auto">
          <div className="max-w-3xl mb-16">
            <SectionHeading
              eyebrow="By the numbers"
              title={<>Infrastructure delivered with <em className="not-italic text-[var(--gold)]">measurable rigour.</em></>}
              description="A track record built across data centers, enterprise networks and mission-critical systems."
              invert
            />
          </div>
          <StatGrid
            invert
            stats={[
              { value: "15", suffix: "+", label: "Years of engineering practice" },
              { value: "400", suffix: "+", label: "Projects delivered" },
              { value: "99.99", suffix: "%", label: "Average system uptime" },
              { value: "24", suffix: "/7", label: "Support and monitoring" },
            ]}
          />
        </div>
      </section>

      {/* Our People — premium executive cards */}
      <section className="section-y relative overflow-hidden" style={{ background: "var(--grad-ivory)" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-radial-gold opacity-70" />
        <div className="container-px mx-auto">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-end mb-20">
            <div className="lg:col-span-8">
              <SectionHeading
                eyebrow="Our people"
                title={<>Senior engineers, architects and <em className="not-italic text-[var(--gold)]">technology specialists.</em></>}
                description="Roya Ventures is built around hands-on practitioners with decades of experience across infrastructure, networks and IT."
              />
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link to="/team" className="btn-ghost" data-cursor="hover">Meet the team <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {TEAM_PREVIEW.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <article className="group relative h-full rounded-[1.25rem] overflow-hidden bg-card border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] shadow-[var(--shadow-card)] transition-all duration-700 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-2" data-cursor="hover">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--navy)]">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/80 via-[var(--navy-deep)]/10 to-transparent" />
                    <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100" />
                    <div className="absolute right-5 top-5 flex flex-col gap-2.5 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      {[Linkedin, Mail].map((Icon, j) => (
                        <a
                          key={j}
                          href="#"
                          aria-label="Contact"
                          className="grid h-9 w-9 place-items-center rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white hover:bg-[var(--gold)] hover:text-[var(--navy)] hover:border-[var(--gold)] transition-all"
                          data-cursor="hover"
                        >
                          <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="relative p-7 md:p-8">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] font-semibold">{p.role}</p>
                    <h3 className="mt-3 font-display text-xl md:text-2xl font-semibold text-[var(--navy)] tracking-[-0.02em] leading-tight">{p.name}</h3>
                    <div className="mt-5 h-px w-10 bg-[var(--gold)] transition-all duration-500 group-hover:w-20" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Plan your next project"
        title="Tell us about the systems you need to build, secure or support."
      />

      <PartnersMarquee />
    </SiteLayout>
  );
}
