import { Link } from "@tanstack/react-router";
import { ArrowUp, Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/roya-logo.png.asset.json";
import visionLogo from "@/assets/royaventures-vision.png.asset.json";

const QUICK = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/clients", label: "Clients" },
  { to: "/contact", label: "Contact" },
] as const;

const SERVICES_COL_1 = [
  "Electrical Contracts",
  "Data Center Setup",
  "Networking",
  "Ethernet & Fiber Cabling",
  "Fire Fighting",
  "EMS System & Access Control",
];

const SERVICES_COL_2 = [
  "Surveillance System",
  "Digital Signage & Footfall System",
  "POS Hardware and Software",
  "Website Development & AMCs",
  "IT Services",
];

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="h-px w-6 bg-[var(--gold)]" />
      <h4 className="eyebrow text-[var(--gold)]">{children}</h4>
    </div>
  );
}

function ServiceList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3.5 text-sm">
      {items.map((s) => (
        <li key={s}>
          <span
            className="group inline-flex items-center gap-2 text-white/75 hover:text-[var(--gold)] transition-colors cursor-default"
            data-cursor="hover"
          >
            <span className="h-px w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-3" />
            {s}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden text-white/85 bg-noise">
      {/* Layered backdrop */}
      <div className="absolute inset-0 -z-20" style={{ background: "var(--grad-navy)" }} />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_55%)]" />
      <div className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-[radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--emerald-deep)_65%,transparent),transparent_60%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] bg-grid-soft" />
      <div aria-hidden className="pointer-events-none absolute -top-44 -right-40 -z-10 h-[30rem] w-[30rem] rounded-full border border-[var(--gold)]/15" />
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-20 -z-10 h-[20rem] w-[20rem] rounded-full border border-[var(--gold)]/10" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-32 -z-10 h-[24rem] w-[24rem] rounded-full border border-[var(--gold)]/10" />

      {/* Top gold hairline */}
      <div aria-hidden className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent" />

      <div className="container-px mx-auto relative">
        {/* Logo lockup band */}
        <div className="pt-20 pb-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-7 sm:gap-10">
            <img
              src={logo.url}
              alt="Roya Ventures"
              className="h-16 md:h-20 w-auto brightness-0 invert"
              loading="lazy"
            />
            <span aria-hidden className="hidden sm:block h-14 w-px bg-gradient-to-b from-transparent via-[var(--gold)]/50 to-transparent" />
            {/* Vision 2030 / partner logo slot — replace src when royaventures-vision.png is provided */}
            <div className="flex items-center gap-4">
              <div className="grid h-16 md:h-20 min-w-[140px] place-items-center rounded-xl border border-white/15 bg-white/[0.04] px-5 text-center backdrop-blur-sm">
                <div>
                  <div className="text-[10px] tracking-[0.28em] text-[var(--gold)] font-semibold">VISION</div>
                  <div className="text-2xl md:text-3xl font-semibold text-white leading-none mt-1">2030</div>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-[15px] leading-[1.85] text-white/70 font-light">
            A multidisciplinary technology and engineering firm — delivering data centers,
            networks, security and IT under a single accountable mandate.
          </p>
        </div>

        <div aria-hidden className="hairline opacity-40" />

        {/* Main grid */}
        <div className="grid gap-12 lg:gap-10 md:grid-cols-2 lg:grid-cols-12 pt-14 pb-14">
          {/* Quick Links */}
          <div className="lg:col-span-2">
            <ColumnHeading>Quick Links</ColumnHeading>
            <ul className="space-y-3.5 text-sm">
              {QUICK.map((q) => (
                <li key={q.to}>
                  <Link
                    to={q.to}
                    className="group inline-flex items-center gap-2 text-white/75 hover:text-[var(--gold)] transition-colors"
                    data-cursor="hover"
                  >
                    <span className="h-px w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-3" />
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column 1 */}
          <div className="lg:col-span-3">
            <ColumnHeading>Services</ColumnHeading>
            <ServiceList items={SERVICES_COL_1} />
          </div>

          {/* Services Column 2 */}
          <div className="lg:col-span-3">
            <ColumnHeading>Services</ColumnHeading>
            <ServiceList items={SERVICES_COL_2} />
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <ColumnHeading>Contact</ColumnHeading>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/5 text-[var(--gold)] shrink-0">
                  <MapPin className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <div className="pt-0.5">
                  <div className="text-[11px] tracking-[0.22em] uppercase text-white/45 mb-1">Location</div>
                  <div className="text-white/85 leading-relaxed">
                    Al Nasirah, West Naseem Dist.<br />Riyadh
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/5 text-[var(--gold)] shrink-0">
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <div className="pt-0.5">
                  <div className="text-[11px] tracking-[0.22em] uppercase text-white/45 mb-1">Email</div>
                  <a
                    href="mailto:info@royaventure.com"
                    className="text-white/85 hover:text-[var(--gold)] transition-colors"
                    data-cursor="hover"
                  >
                    info@royaventure.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/5 text-[var(--gold)] shrink-0">
                  <Phone className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <div className="pt-0.5">
                  <div className="text-[11px] tracking-[0.22em] uppercase text-white/45 mb-1">National Number</div>
                  <a
                    href="tel:+966540175695"
                    className="text-white/85 hover:text-[var(--gold)] transition-colors"
                    data-cursor="hover"
                  >
                    7054175695
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="group grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-white/80 transition-all duration-500 hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--navy)] hover:-translate-y-0.5"
                  data-cursor="hover"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div aria-hidden className="hairline opacity-30" />

        <div className="py-8 flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs tracking-[0.18em] text-white/55">
            © {new Date().getFullYear()} ROYA VENTURES — ALL RIGHTS RESERVED
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/70 hover:text-[var(--gold)] transition-colors"
            aria-label="Back to top"
            data-cursor="hover"
          >
            Back to top
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/20 group-hover:border-[var(--gold)] transition-all duration-500 group-hover:-translate-y-0.5">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
