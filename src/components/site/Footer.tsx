import { Link } from "@tanstack/react-router";
import { ArrowUp, ArrowRight, Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/roya-logo.png.asset.json";

const QUICK = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/clients", label: "Clients" },
  { to: "/contact", label: "Contact" },
] as const;

const SERVICES = [
  "Data Centers",
  "Enterprise Networks",
  "Fiber & Cabling",
  "Surveillance & CCTV",
  "Fire Protection",
  "Electrical Contracts",
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden text-white/85 bg-noise">
      {/* Layered backdrop */}
      <div className="absolute inset-0 -z-20" style={{ background: "var(--grad-navy)" }} />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--gold)_20%,transparent),transparent_50%)]" />
      <div className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-[radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--emerald-deep)_60%,transparent),transparent_60%)]" />
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 -z-10 h-[28rem] w-[28rem] rounded-full border border-[var(--gold)]/15" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-32 -z-10 h-[22rem] w-[22rem] rounded-full border border-[var(--gold)]/10" />

      <div className="container-px mx-auto relative">
        {/* Top CTA-like band */}
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center pt-20 pb-16 border-b border-white/10">
          <div>
            <p className="gold-rule">Get in touch</p>
            <h3 className="mt-5 font-display text-3xl md:text-4xl font-semibold leading-[1.1] tracking-[-0.025em] text-white max-w-xl">
              Build, secure and support — with <span className="text-[var(--gold)]">one accountable partner.</span>
            </h3>
          </div>
          <div className="flex lg:justify-end">
            <Link to="/contact" className="btn-primary" data-cursor="hover">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid gap-14 lg:gap-12 lg:grid-cols-12 pt-20 pb-12">
          <div className="lg:col-span-4">
            <img
              src={logo.url}
              alt="Roya Ventures"
              width={220}
              height={58}
              className="h-12 w-auto brightness-0 invert"
              loading="lazy"
            />
            <p className="mt-7 max-w-sm text-[15px] leading-[1.8] text-white/70 font-light">
              A multidisciplinary technology and engineering firm — delivering data centers,
              networks, security and IT under a single accountable mandate.
            </p>
            <div className="mt-9 flex gap-3">
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

          <div className="lg:col-span-2">
            <h4 className="eyebrow text-[var(--gold)] mb-6">Navigate</h4>
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

          <div className="lg:col-span-3">
            <h4 className="eyebrow text-[var(--gold)] mb-6">Practices</h4>
            <ul className="space-y-3.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s} className="text-white/75">{s}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="eyebrow text-[var(--gold)] mb-6">Contact</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--gold)]/40 text-[var(--gold)] shrink-0">
                  <MapPin className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <span className="text-white/75 leading-relaxed pt-1.5">
                  Level 24, One Global Tower<br />
                  Business District, City
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--gold)]/40 text-[var(--gold)] shrink-0">
                  <Phone className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <a href="tel:+10000000000" className="text-white/75 hover:text-[var(--gold)] transition-colors" data-cursor="hover">
                  +1 (000) 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--gold)]/40 text-[var(--gold)] shrink-0">
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <a href="mailto:info@royaventures.com" className="text-white/75 hover:text-[var(--gold)] transition-colors" data-cursor="hover">
                  info@royaventures.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline opacity-30" />

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
