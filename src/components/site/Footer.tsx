import { Link } from "@tanstack/react-router";
import { ArrowUp, Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";
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
  "Strategy & Advisory",
  "Corporate Finance",
  "Mergers & Acquisitions",
  "Digital Transformation",
  "Risk & Governance",
  "Market Expansion",
];

export function Footer() {
  return (
    <footer className="bg-[var(--navy-deep)] text-white/80">
      <div className="container-px mx-auto pt-24 pb-10">
        <div className="grid gap-14 lg:gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img
              src={logo.url}
              alt="Roya Ventures"
              width={200}
              height={52}
              className="h-11 w-auto brightness-0 invert"
              loading="lazy"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
              Roya Ventures is an international corporate advisory firm partnering with leaders
              to architect strategies that endure across markets and generations.
            </p>
            <div className="mt-8 flex gap-3">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-10 w-10 place-items-center border border-white/15 text-white/70 transition-all hover:border-[var(--gold)] hover:text-[var(--gold)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="eyebrow text-[var(--gold)] mb-5">Navigate</h4>
            <ul className="space-y-3 text-sm">
              {QUICK.map((q) => (
                <li key={q.to}>
                  <Link to={q.to} className="text-white/75 hover:text-[var(--gold)] transition-colors">
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="eyebrow text-[var(--gold)] mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s} className="text-white/75">{s}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="eyebrow text-[var(--gold)] mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-[var(--gold)] shrink-0" />
                <span className="text-white/75">
                  Level 24, One Global Tower<br />
                  Business District, City
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[var(--gold)] shrink-0" />
                <a href="tel:+10000000000" className="text-white/75 hover:text-[var(--gold)]">+1 (000) 000 0000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[var(--gold)] shrink-0" />
                <a href="mailto:info@royaventures.com" className="text-white/75 hover:text-[var(--gold)]">info@royaventures.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-20 opacity-30" />

        <div className="mt-8 flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs tracking-wider text-white/55">
            © {new Date().getFullYear()} Roya Ventures. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70 hover:text-[var(--gold)] transition-colors"
            aria-label="Back to top"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
