import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import avayaLogo from "@/assets/partners/core/avaya.png.asset.json";
import ciscoLogo from "@/assets/partners/core/cisco.png.asset.json";
import hikvisionLogo from "@/assets/partners/core/hikvision.png.asset.json";
import nexenLogo from "@/assets/partners/core/nexen.png.asset.json";
import prestigeLogo from "@/assets/partners/core/prestige.png.asset.json";
import entry2exitLogo from "@/assets/partners/software/entry2exit.png.asset.json";
import fadelLogo from "@/assets/partners/software/fadel.png.asset.json";
import odooLogo from "@/assets/partners/software/odoo.png.asset.json";
import sapaadLogo from "@/assets/partners/software/sapaad.png.asset.json";
import coramLogo from "@/assets/partners/ai-video/coram.png.asset.json";
import trassirLogo from "@/assets/partners/ai-video/trassir.png.asset.json";
import vizo361Logo from "@/assets/partners/ai-video/vizo361.png.asset.json";
import windroLogo from "@/assets/partners/smart-screens/windro.png.asset.json";
import zhsunycoLogo from "@/assets/partners/smart-screens/zhsunyco.png.asset.json";

type Logo = { name: string; url: string; href: string };

const CATEGORIES: { key: string; label: string; logos: Logo[] }[] = [
  {
    key: "core",
    label: "Core Technology Partners",
    logos: [
      { name: "Avaya", url: avayaLogo.url, href: "#" },
      { name: "Cisco", url: ciscoLogo.url, href: "#" },
      { name: "Hikvision", url: hikvisionLogo.url, href: "#" },
      { name: "Nexen Strategy", url: nexenLogo.url, href: "#" },
      { name: "Prestige Saudi Co. Ltd.", url: prestigeLogo.url, href: "#" },
    ],
  },
  {
    key: "software",
    label: "Software Platforms",
    logos: [
      { name: "Entry2Exit", url: entry2exitLogo.url, href: "#" },
      { name: "Fadel Software Solutions", url: fadelLogo.url, href: "#" },
      { name: "Odoo", url: odooLogo.url, href: "#" },
      { name: "Sapaad", url: sapaadLogo.url, href: "#" },
    ],
  },
  {
    key: "ai-video",
    label: "AI Video Analytics",
    logos: [
      { name: "Coram", url: coramLogo.url, href: "#" },
      { name: "Trassir", url: trassirLogo.url, href: "#" },
      { name: "Vizo361", url: vizo361Logo.url, href: "#" },
    ],
  },
  {
    key: "smart-screens",
    label: "Smart Screens / Ink Displays",
    logos: [
      { name: "Windro", url: windroLogo.url, href: "#" },
      { name: "ZhSunyco", url: zhsunycoLogo.url, href: "#" },
    ],
  },
];

export function StrategicPartners() {
  const [active, setActive] = useState(CATEGORIES[0].key);
  const activeCategory = CATEGORIES.find((c) => c.key === active) ?? CATEGORIES[0];

  return (
    <section className="section-y relative overflow-hidden" style={{ background: "var(--grad-ivory)" }}>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-radial-gold opacity-60" />
      <div className="container-px mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Strategic Partnerships"
            title={<>Powered by <em className="not-italic text-[var(--gold)]">Global Technology Leaders</em></>}
            description="Roya Ventures partners with globally recognized technology manufacturers and solution providers to deliver innovative, reliable, and future-ready engineering, ELV, networking, security, and digital infrastructure solutions."
            align="center"
          />
        </div>

        {/* Tabs */}
        <div className="mt-12 flex justify-center">
          <div
            className="flex gap-3 overflow-x-auto overflow-y-visible no-scrollbar max-w-full px-2 py-3"
            style={{ scrollbarWidth: "none" }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = cat.key === active;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  data-cursor="hover"
                  className={[
                    "shrink-0 whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300",
                    isActive
                      ? "bg-[var(--gold)] text-white shadow-[var(--shadow-elegant)] border border-[var(--gold)]"
                      : "bg-white text-[var(--navy)] border border-[color-mix(in_oklab,var(--navy)_20%,transparent)] hover:-translate-y-0.5 hover:border-[var(--gold)]/60 hover:shadow-[var(--shadow-card)]",
                  ].join(" ")}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Logos row — fixed min height to prevent layout shift */}
        <div className="mt-12 min-h-[200px] sm:min-h-[220px]">
          <div
            key={activeCategory.key}
            className="overflow-x-auto overflow-y-visible no-scrollbar"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="flex justify-center gap-5 px-2 py-3 min-w-max mx-auto">
              {activeCategory.logos.map((logo, i) => (
                <a
                  key={logo.name}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  style={{ animationDelay: `${i * 90}ms`, animationFillMode: "both" }}
                  className="animate-fade-in group relative w-[130px] sm:w-[150px] md:w-[165px] aspect-square shrink-0 rounded-2xl bg-white border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] flex items-center justify-center p-3 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--gold)]/50 hover:shadow-[var(--shadow-elegant)] overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklab,var(--gold)_10%,transparent),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <img
                    src={logo.url}
                    alt={logo.name}
                    loading="lazy"
                    className="relative max-h-[72%] max-w-[80%] w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>


        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link to="/partners" className="btn-primary" data-cursor="hover">
            View All Partners <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
