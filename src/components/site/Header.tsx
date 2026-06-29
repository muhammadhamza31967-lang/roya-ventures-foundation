import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/roya-logo.png.asset.json";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/clients", label: "Clients" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header({ transparentOverHero = false }: { transparentOverHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const solid = scrolled || !transparentOverHero || open;

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "bg-[var(--navy)]/95 backdrop-blur-md shadow-[0_1px_0_color-mix(in_oklab,var(--gold)_18%,transparent)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container-px mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-6 py-4 md:py-5">
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Roya Ventures — home">
          <img
            src={logo.url}
            alt="Roya Ventures"
            width={170}
            height={44}
            className="h-9 w-auto md:h-10 brightness-0 invert"
          />
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center justify-center gap-1">
          {NAV.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={[
                  "relative px-4 py-2 text-[13px] font-medium tracking-[0.08em] uppercase transition-colors",
                  active ? "text-[var(--gold)]" : "text-white/85 hover:text-[var(--gold)]",
                ].join(" ")}
              >
                {item.label}
                <span
                  className={[
                    "pointer-events-none absolute left-1/2 -bottom-0.5 h-px -translate-x-1/2 bg-[var(--gold)] transition-all duration-300",
                    active ? "w-6 opacity-100" : "w-0 opacity-0 group-hover:w-4",
                  ].join(" ")}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex justify-end">
          <Link to="/contact" className="btn-primary !py-2.5 !px-5 text-xs">
            Get in touch
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden col-start-3 text-white p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={[
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 bg-[var(--navy-deep)]",
          open ? "max-h-[80vh] opacity-100 border-t border-white/10" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav className="container-px mx-auto py-6 flex flex-col gap-1">
          {NAV.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={[
                  "py-3 text-sm tracking-[0.12em] uppercase border-b border-white/5",
                  active ? "text-[var(--gold)]" : "text-white/85",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
          <Link to="/contact" className="btn-primary mt-6 justify-center">Get in touch</Link>
        </nav>
      </div>
    </header>
  );
}
