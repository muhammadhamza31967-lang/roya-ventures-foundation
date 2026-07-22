import { useEffect, useRef, useState } from "react";
import { Users, Award, TrendingUp } from "lucide-react";
import spidernetLogo from "@/assets/brand/spidernet-logo.jpeg.asset.json";
import royaLogo from "@/assets/brand/roya-ventures-logo.jpeg.asset.json";

function useInView<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, shown };
}

const HEADING_WORDS = ["Spidernet", "is", "now", "Roya", "Ventures"];
const TRUST = [
  {
    label: "Same Leadership",
    detail: "Guided by the founders who built our reputation.",
    Icon: Users,
  },
  {
    label: "Same Expertise",
    detail: "Two decades of engineering knowledge, preserved.",
    Icon: Award,
  },
  {
    label: "Stronger Brand",
    detail: "A unified identity, built for the next chapter.",
    Icon: TrendingUp,
  },
];
const EASE = "cubic-bezier(0.2,0.8,0.2,1)";

export function BrandEvolution() {
  const { ref, shown } = useInView<HTMLElement>(0.1);

  return (
    <section
      ref={ref}
      aria-label="Company evolution announcement"
      className="relative isolate overflow-hidden py-24 md:py-32 lg:py-36"
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 1s ${EASE}, transform 1s ${EASE}`,
      }}
    >
      <style>{`
        @keyframes be-grid-drift {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 120px 80px, 80px 120px; }
        }
        @keyframes be-orb-a { 0%,100%{transform:translate3d(0,0,0) scale(1)} 50%{transform:translate3d(28px,-18px,0) scale(1.05)} }
        @keyframes be-orb-b { 0%,100%{transform:translate3d(0,0,0) scale(1)} 50%{transform:translate3d(-26px,22px,0) scale(1.07)} }

        /* Particle traveling left → center → right (horizontal) */
        @keyframes be-particle-h {
          0%   { left: 0%;   opacity: 0; transform: translate(-50%, -50%) scale(0.6); }
          10%  { opacity: 1; }
          48%  { left: 50%;  opacity: 1; transform: translate(-50%, -50%) scale(1.35); }
          52%  { left: 50%;  opacity: 1; transform: translate(-50%, -50%) scale(1.35); }
          90%  { opacity: 1; }
          100% { left: 100%; opacity: 0; transform: translate(-50%, -50%) scale(0.6); }
        }
        /* Light trail traveling horizontally */
        @keyframes be-trail-h {
          0%   { transform: translateX(-120%); opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: translateX(120%); opacity: 0; }
        }
        /* Particle vertical (mobile) */
        @keyframes be-particle-v {
          0%   { top: 0%;   opacity: 0; transform: translate(-50%, -50%) scale(0.6); }
          10%  { opacity: 1; }
          48%  { top: 50%;  opacity: 1; transform: translate(-50%, -50%) scale(1.35); }
          52%  { top: 50%;  opacity: 1; transform: translate(-50%, -50%) scale(1.35); }
          90%  { opacity: 1; }
          100% { top: 100%; opacity: 0; transform: translate(-50%, -50%) scale(0.6); }
        }
        @keyframes be-trail-v {
          0%   { transform: translateY(-120%); opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: translateY(120%); opacity: 0; }
        }
        @keyframes be-badge-pulse {
          0%,100% { box-shadow: 0 0 0 0 color-mix(in oklab, var(--gold) 45%, transparent), 0 12px 40px -14px color-mix(in oklab, var(--gold) 55%, transparent); }
          50%     { box-shadow: 0 0 0 10px color-mix(in oklab, var(--gold) 0%, transparent), 0 16px 46px -14px color-mix(in oklab, var(--gold) 70%, transparent); }
        }
        @keyframes be-ring-rotate {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes be-ring-rotate-rev {
          0% { transform: translate(-50%, -50%) rotate(360deg); }
          100% { transform: translate(-50%, -50%) rotate(0deg); }
        }
        @keyframes be-halo { 0%,100%{opacity:.55;transform:scale(1)} 50%{opacity:.9;transform:scale(1.06)} }
        @keyframes be-underline-slide {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .be-bg-grid {
          background-image:
            linear-gradient(to right, color-mix(in oklab, var(--navy-deep) 8%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in oklab, var(--navy-deep) 8%, transparent) 1px, transparent 1px);
          background-size: 64px 64px, 64px 64px;
          mask-image: radial-gradient(ellipse at center, black 35%, transparent 82%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 35%, transparent 82%);
          animation: be-grid-drift 45s linear infinite;
        }
        .be-orb-a { animation: be-orb-a 22s ease-in-out infinite; }
        .be-orb-b { animation: be-orb-b 26s ease-in-out infinite; }
        .be-halo  { animation: be-halo 4.8s ease-in-out infinite; }

        /* Connector rail */
        .be-rail-h {
          background: linear-gradient(90deg,
            color-mix(in oklab, var(--gold) 0%, transparent) 0%,
            color-mix(in oklab, var(--gold) 55%, transparent) 15%,
            color-mix(in oklab, var(--emerald-deep) 70%, transparent) 50%,
            color-mix(in oklab, var(--gold) 55%, transparent) 85%,
            color-mix(in oklab, var(--gold) 0%, transparent) 100%);
        }
        .be-rail-v {
          background: linear-gradient(180deg,
            color-mix(in oklab, var(--gold) 0%, transparent) 0%,
            color-mix(in oklab, var(--gold) 55%, transparent) 15%,
            color-mix(in oklab, var(--emerald-deep) 70%, transparent) 50%,
            color-mix(in oklab, var(--gold) 55%, transparent) 85%,
            color-mix(in oklab, var(--gold) 0%, transparent) 100%);
        }

        /* Traveling light trail on rail */
        .be-trail-h {
          background: linear-gradient(90deg,
            transparent 0%,
            color-mix(in oklab, var(--gold) 40%, transparent) 35%,
            #fff 50%,
            color-mix(in oklab, var(--gold) 40%, transparent) 65%,
            transparent 100%);
          filter: blur(0.6px);
          animation: be-trail-h 4.2s cubic-bezier(0.45,0,0.2,1) infinite;
        }
        .be-trail-v {
          background: linear-gradient(180deg,
            transparent 0%,
            color-mix(in oklab, var(--gold) 40%, transparent) 35%,
            #fff 50%,
            color-mix(in oklab, var(--gold) 40%, transparent) 65%,
            transparent 100%);
          filter: blur(0.6px);
          animation: be-trail-v 4.2s cubic-bezier(0.45,0,0.2,1) infinite;
        }

        /* Traveling glowing particle */
        .be-particle {
          width: 10px; height: 10px; border-radius: 9999px;
          background: radial-gradient(circle, #fff 0%, color-mix(in oklab, var(--gold) 90%, transparent) 45%, transparent 70%);
          box-shadow:
            0 0 12px color-mix(in oklab, var(--gold) 85%, transparent),
            0 0 28px color-mix(in oklab, var(--gold) 55%, transparent);
        }
        .be-particle-h { top: 50%; animation: be-particle-h 4.2s cubic-bezier(0.45,0,0.2,1) infinite; }
        .be-particle-v { left: 50%; animation: be-particle-v 4.2s cubic-bezier(0.45,0,0.2,1) infinite; }

        /* Center badge */
        .be-badge {
          background: linear-gradient(135deg,
            color-mix(in oklab, #fff 90%, transparent) 0%,
            color-mix(in oklab, var(--gold) 8%, #fff) 100%);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid color-mix(in oklab, var(--gold) 45%, transparent);
          animation: be-badge-pulse 4.4s ease-in-out infinite;
        }
        .be-ring {
          position: absolute; top: 50%; left: 50%;
          border-radius: 9999px;
          border: 1px dashed color-mix(in oklab, var(--gold) 55%, transparent);
          pointer-events: none;
        }
        .be-ring-outer { width: 220px; height: 220px; animation: be-ring-rotate 22s linear infinite; }
        .be-ring-inner { width: 168px; height: 168px; border-style: dotted; border-color: color-mix(in oklab, var(--emerald-deep) 50%, transparent); animation: be-ring-rotate-rev 18s linear infinite; }
        .be-badge-underline {
          position: absolute; left: 0; right: 0; bottom: -6px;
          height: 2px; overflow: hidden; border-radius: 2px;
        }
        .be-badge-underline::before {
          content: ""; position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          animation: be-underline-slide 3.2s ${EASE} infinite;
        }

        .be-logo { transition: transform 500ms ${EASE}, filter 500ms ${EASE}; }
        .be-logo-past:hover { transform: scale(1.04); filter: brightness(1.05) drop-shadow(0 10px 26px color-mix(in oklab, var(--navy-deep) 25%, transparent)); }
        .be-logo-new:hover  { transform: scale(1.04); filter: brightness(1.06) drop-shadow(0 14px 34px color-mix(in oklab, var(--gold) 50%, transparent)); }

        /* Trust cards */
        .be-trust-card {
          position: relative;
          background: linear-gradient(180deg, #fff 0%, color-mix(in oklab, var(--gold) 4%, #fff) 100%);
          border: 1px solid color-mix(in oklab, var(--navy-deep) 10%, transparent);
          transition: transform 400ms ${EASE}, box-shadow 400ms ${EASE}, border-color 400ms ${EASE};
        }
        .be-trust-card::before {
          content: ""; position: absolute; inset: 0;
          border-radius: inherit; padding: 1px;
          background: linear-gradient(135deg, color-mix(in oklab, var(--gold) 55%, transparent), transparent 55%, color-mix(in oklab, var(--emerald-deep) 45%, transparent));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          opacity: 0; transition: opacity 400ms ${EASE};
          pointer-events: none;
        }
        .be-trust-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 50px -28px color-mix(in oklab, var(--navy-deep) 40%, transparent),
                      0 10px 24px -14px color-mix(in oklab, var(--gold) 40%, transparent);
          border-color: color-mix(in oklab, var(--gold) 45%, transparent);
        }
        .be-trust-card:hover::before { opacity: 1; }
        .be-trust-icon {
          background: linear-gradient(135deg, color-mix(in oklab, var(--gold) 18%, #fff), #fff);
          border: 1px solid color-mix(in oklab, var(--gold) 45%, transparent);
          color: var(--gold);
          transition: transform 400ms ${EASE}, box-shadow 400ms ${EASE};
        }
        .be-trust-card:hover .be-trust-icon {
          transform: scale(1.08) rotate(-4deg);
          box-shadow: 0 8px 22px -6px color-mix(in oklab, var(--gold) 65%, transparent);
        }

        @media (prefers-reduced-motion: reduce) {
          .be-orb-a, .be-orb-b, .be-halo, .be-bg-grid,
          .be-trail-h, .be-trail-v, .be-particle-h, .be-particle-v,
          .be-badge, .be-ring-outer, .be-ring-inner,
          .be-badge-underline::before { animation: none !important; }
        }
      `}</style>

      {/* Premium background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-30"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--navy-deep) 3%, #fff) 0%, #fff 45%, color-mix(in oklab, var(--gold) 4%, #fff) 100%)",
        }}
      />
      <div aria-hidden className="be-bg-grid absolute inset-0 -z-20 opacity-70" />
      <div
        aria-hidden
        className="be-orb-a pointer-events-none absolute -top-40 -left-20 -z-10 h-[36rem] w-[36rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--emerald-deep) 18%, transparent), transparent 65%)" }}
      />
      <div
        aria-hidden
        className="be-orb-b pointer-events-none absolute -bottom-40 -right-20 -z-10 h-[40rem] w-[40rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--gold) 22%, transparent), transparent 65%)" }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-6 -z-10 hidden md:block">
        <span className="absolute top-0 left-0 h-6 w-6 border-t border-l border-[var(--gold)]/40" />
        <span className="absolute top-0 right-0 h-6 w-6 border-t border-r border-[var(--gold)]/40" />
        <span className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-[var(--gold)]/40" />
        <span className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-[var(--gold)]/40" />
      </div>

      <div className="container-px mx-auto">
        {/* Header block */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="inline-flex items-center gap-3"
            style={{
              opacity: shown ? 1 : 0,
              transform: shown ? "translateY(0)" : "translateY(12px)",
              transition: `opacity 700ms ${EASE} 80ms, transform 700ms ${EASE} 80ms`,
            }}
          >
            <span className="h-px w-10 bg-[var(--gold)]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[var(--navy-deep)]/70">
              Company Evolution
            </p>
            <span className="h-px w-10 bg-[var(--gold)]" />
          </div>

          <h2
            className="mt-7 font-serif text-4xl leading-[1.05] tracking-tight text-[var(--navy-deep)] md:text-5xl lg:text-6xl"
            aria-label="Spidernet is now Roya Ventures"
          >
            {HEADING_WORDS.map((word, i) => {
              const isBrand = word === "Roya" || word === "Ventures";
              return (
                <span
                  key={`${word}-${i}`}
                  className="mr-[0.28em] inline-block"
                  style={{
                    opacity: shown ? 1 : 0,
                    transform: shown ? "translateY(0)" : "translateY(18px)",
                    transition: `opacity 700ms ${EASE} ${240 + i * 110}ms, transform 700ms ${EASE} ${240 + i * 110}ms`,
                    color: isBrand ? "var(--emerald-deep)" : undefined,
                  }}
                >
                  {word}
                </span>
              );
            })}
          </h2>

          <p
            className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed font-light text-[var(--navy-deep)]/75 md:text-xl"
            style={{
              opacity: shown ? 1 : 0,
              transform: shown ? "translateY(0)" : "translateY(14px)",
              transition: `opacity 800ms ${EASE} 880ms, transform 800ms ${EASE} 880ms`,
            }}
          >
            Spidernet is now part of Roya Ventures, reflecting our continued
            commitment to delivering innovative technology solutions under a
            stronger, unified brand. While our name has evolved, our dedication
            to excellence, reliability, engineering expertise, and customer
            success remains unchanged.
          </p>
        </div>

        {/* Horizontal brand transformation */}
        <div className="mx-auto mt-20 max-w-6xl md:mt-24">
          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[1fr_auto_1fr] md:gap-16 lg:gap-24">
            {/* Spidernet (no label) */}
            <div
              className="flex justify-center md:justify-end"
              style={{
                opacity: shown ? 1 : 0,
                transform: shown ? "translateX(0) scale(1)" : "translateX(-32px) scale(0.96)",
                transition: `opacity 850ms ${EASE} 380ms, transform 850ms ${EASE} 380ms`,
              }}
            >
              <img
                src={spidernetLogo.url}
                alt="SpiderNet — former company logo"
                className="be-logo be-logo-past h-16 w-auto max-w-[240px] object-contain opacity-85 md:h-20 lg:h-24"
                style={{ filter: "grayscale(0.15)" }}
                loading="lazy"
              />
            </div>

            {/* Center — animated transformation */}
            <div
              className="relative flex w-full flex-col items-center justify-center md:w-auto md:min-w-[260px] lg:min-w-[340px]"
              style={{
                opacity: shown ? 1 : 0,
                transition: `opacity 700ms ${EASE} 640ms`,
              }}
            >
              {/* Desktop horizontal transformation */}
              <div className="relative hidden w-full items-center justify-center md:flex">
                {/* Full-width rail with particle behind the badge */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
                  <div className="relative mx-auto h-px w-full overflow-visible">
                    <span className="be-rail-h absolute inset-0" />
                    <span className="be-trail-h absolute inset-y-[-6px] left-0 w-32" />
                    <span
                      className="be-trail-h absolute inset-y-[-6px] left-0 w-32"
                      style={{ animationDelay: "2.1s" }}
                    />
                    <span className="be-particle be-particle-h absolute" />
                    <span
                      className="be-particle be-particle-h absolute"
                      style={{ animationDelay: "2.1s" }}
                    />
                  </div>
                </div>

                {/* Rotating dashed rings behind badge */}
                <span className="be-ring be-ring-outer" />
                <span className="be-ring be-ring-inner" />

                {/* Premium badge */}
                <div className="relative">
                  <span className="be-badge relative inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--navy-deep)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                    Brand Evolution
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--emerald-deep)]" />
                    <span className="be-badge-underline" />
                  </span>
                </div>
              </div>

              {/* Mobile vertical transformation */}
              <div className="relative flex flex-col items-center md:hidden">
                <div className="relative h-20 w-px overflow-visible">
                  <span className="be-rail-v absolute inset-0" />
                  <span className="be-trail-v absolute inset-x-[-6px] top-0 h-12" />
                  <span className="be-particle be-particle-v absolute" />
                </div>
                <div className="relative my-4">
                  <span className="be-badge relative inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--navy-deep)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                    Brand Evolution
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--emerald-deep)]" />
                    <span className="be-badge-underline" />
                  </span>
                </div>
                <div className="relative h-20 w-px overflow-visible">
                  <span className="be-rail-v absolute inset-0" />
                  <span
                    className="be-trail-v absolute inset-x-[-6px] top-0 h-12"
                    style={{ animationDelay: "2.1s" }}
                  />
                  <span
                    className="be-particle be-particle-v absolute"
                    style={{ animationDelay: "2.1s" }}
                  />
                </div>
              </div>
            </div>

            {/* Roya Ventures (no label) */}
            <div
              className="relative flex justify-center md:justify-start"
              style={{
                opacity: shown ? 1 : 0,
                transform: shown ? "translateX(0) scale(1)" : "translateX(32px) scale(0.94)",
                transition: `opacity 900ms ${EASE} 900ms, transform 900ms ${EASE} 900ms`,
              }}
            >
              <span
                aria-hidden
                className="be-halo pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl md:left-[35%]"
                style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--gold) 30%, transparent), transparent 65%)" }}
              />
              <img
                src={royaLogo.url}
                alt="Roya Ventures — new company logo"
                className="be-logo be-logo-new h-24 w-auto max-w-[320px] object-contain md:h-28 lg:h-32"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Trust indicators — premium feature cards */}
        <div className="mx-auto mt-20 max-w-5xl md:mt-24">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
            {TRUST.map(({ label, detail, Icon }, i) => (
              <div
                key={label}
                className="be-trust-card group rounded-2xl p-6 md:p-7"
                style={{
                  opacity: shown ? 1 : 0,
                  transform: shown ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 700ms ${EASE} ${1200 + i * 150}ms, transform 700ms ${EASE} ${1200 + i * 150}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  <span className="be-trust-icon grid h-11 w-11 shrink-0 place-items-center rounded-xl">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold tracking-tight text-[var(--navy-deep)] md:text-lg">
                      {label}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--navy-deep)]/65">
                      {detail}
                    </p>
                  </div>
                </div>
                <span
                  aria-hidden
                  className="mt-5 block h-px w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, color-mix(in oklab, var(--gold) 55%, transparent), transparent)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
