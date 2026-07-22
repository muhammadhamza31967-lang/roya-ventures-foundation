import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
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
const TRUST = ["Same Leadership", "Same Expertise", "Stronger Brand"];
const EASE = "cubic-bezier(0.2,0.8,0.2,1)";

export function BrandEvolution() {
  const { ref, shown } = useInView<HTMLElement>(0.1);

  return (
    <section
      ref={ref}
      aria-label="Company evolution announcement"
      className="relative isolate overflow-hidden py-24 md:py-32 lg:py-40"
    >
      {/* Local keyframes + hover styles */}
      <style>{`
        @keyframes be-grid-drift {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 120px 80px, 80px 120px; }
        }
        @keyframes be-orb-a {
          0%,100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(30px,-20px,0) scale(1.06); }
        }
        @keyframes be-orb-b {
          0%,100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(-28px,22px,0) scale(1.08); }
        }
        @keyframes be-flow {
          0% { transform: translateX(-110%); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateX(110%); opacity: 0; }
        }
        @keyframes be-flow-v {
          0% { transform: translateY(-110%); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateY(110%); opacity: 0; }
        }
        @keyframes be-dot {
          0%,100% { opacity: .35; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.25); }
        }
        @keyframes be-halo {
          0%,100% { opacity: .55; transform: scale(1); }
          50% { opacity: .9; transform: scale(1.06); }
        }
        .be-bg-grid {
          background-image:
            linear-gradient(to right, color-mix(in oklab, var(--navy-deep) 8%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in oklab, var(--navy-deep) 8%, transparent) 1px, transparent 1px);
          background-size: 64px 64px, 64px 64px;
          mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
          animation: be-grid-drift 40s linear infinite;
        }
        .be-orb-a { animation: be-orb-a 20s ease-in-out infinite; }
        .be-orb-b { animation: be-orb-b 24s ease-in-out infinite; }
        .be-halo { animation: be-halo 4.5s ease-in-out infinite; }
        .be-dot { animation: be-dot 1.8s ease-in-out infinite; }
        .be-connector-line {
          background: linear-gradient(90deg,
            color-mix(in oklab, var(--gold) 55%, transparent) 0%,
            color-mix(in oklab, var(--gold) 90%, transparent) 50%,
            color-mix(in oklab, var(--emerald-deep) 65%, transparent) 100%);
        }
        .be-connector-line-v {
          background: linear-gradient(180deg,
            color-mix(in oklab, var(--gold) 55%, transparent) 0%,
            color-mix(in oklab, var(--gold) 90%, transparent) 50%,
            color-mix(in oklab, var(--emerald-deep) 65%, transparent) 100%);
        }
        .be-flow-trail {
          background: linear-gradient(90deg,
            transparent 0%,
            color-mix(in oklab, var(--gold) 40%, transparent) 40%,
            #fff 50%,
            color-mix(in oklab, var(--gold) 40%, transparent) 60%,
            transparent 100%);
          filter: blur(0.4px);
          animation: be-flow 3.2s cubic-bezier(0.4,0,0.2,1) infinite;
        }
        .be-flow-trail-v {
          background: linear-gradient(180deg,
            transparent 0%,
            color-mix(in oklab, var(--gold) 40%, transparent) 40%,
            #fff 50%,
            color-mix(in oklab, var(--gold) 40%, transparent) 60%,
            transparent 100%);
          filter: blur(0.4px);
          animation: be-flow-v 3.2s cubic-bezier(0.4,0,0.2,1) infinite;
        }
        .be-logo { transition: transform 500ms ${EASE}, filter 500ms ${EASE}; }
        .be-logo-past:hover { transform: scale(1.03); filter: brightness(1.05) drop-shadow(0 8px 24px color-mix(in oklab, var(--navy-deep) 25%, transparent)); }
        .be-logo-new:hover { transform: scale(1.03); filter: brightness(1.06) drop-shadow(0 12px 32px color-mix(in oklab, var(--gold) 45%, transparent)); }
        @media (prefers-reduced-motion: reduce) {
          .be-orb-a, .be-orb-b, .be-halo, .be-dot, .be-flow-trail, .be-flow-trail-v, .be-bg-grid { animation: none !important; }
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
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--emerald-deep) 18%, transparent), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="be-orb-b pointer-events-none absolute -bottom-40 -right-20 -z-10 h-[40rem] w-[40rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--gold) 22%, transparent), transparent 65%)",
        }}
      />
      {/* Corner engineering marks */}
      <div aria-hidden className="pointer-events-none absolute inset-6 -z-10 hidden md:block">
        <span className="absolute top-0 left-0 h-6 w-6 border-t border-l border-[var(--gold)]/40" />
        <span className="absolute top-0 right-0 h-6 w-6 border-t border-r border-[var(--gold)]/40" />
        <span className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-[var(--gold)]/40" />
        <span className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-[var(--gold)]/40" />
      </div>

      <div className="container-px mx-auto">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[45fr_55fr] lg:gap-24">
          {/* LEFT — Brand transformation */}
          <div className="relative">
            <div className="flex flex-col items-center gap-10 md:gap-14">
              {/* Spidernet (past) */}
              <div
                className="relative flex flex-col items-center"
                style={{
                  opacity: shown ? 1 : 0,
                  transform: shown ? "translateY(0) scale(1)" : "translateY(-20px) scale(0.96)",
                  transition: `opacity 800ms ${EASE} 100ms, transform 800ms ${EASE} 100ms`,
                }}
              >
                <span className="mb-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--navy-deep)]/50">
                  Formerly
                </span>
                <img
                  src={spidernetLogo.url}
                  alt="SpiderNet — former company logo"
                  className="be-logo be-logo-past h-16 w-auto max-w-[220px] object-contain opacity-80 md:h-20"
                  style={{ filter: "grayscale(0.15)" }}
                  loading="lazy"
                />
              </div>

              {/* Premium connector */}
              <div
                className="relative flex w-full flex-col items-center"
                style={{
                  opacity: shown ? 1 : 0,
                  transition: `opacity 700ms ${EASE} 500ms`,
                }}
              >
                {/* Vertical connector (mobile & desktop stacked layout) */}
                <div className="relative flex flex-col items-center">
                  <span className="be-dot h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                  <div className="relative mt-2 h-24 w-px overflow-hidden md:h-28">
                    <span className="be-connector-line-v absolute inset-0" />
                    <span className="be-flow-trail-v absolute inset-x-[-6px] top-0 h-16" />
                  </div>
                  <span
                    className="my-3 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-white/80 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--navy-deep)] shadow-[0_8px_28px_-12px_color-mix(in_oklab,var(--gold)_60%,transparent)] backdrop-blur"
                  >
                    <span className="h-1 w-1 rounded-full bg-[var(--gold)]" />
                    Brand Evolution
                    <span className="h-1 w-1 rounded-full bg-[var(--emerald-deep)]" />
                  </span>
                  <div className="relative h-24 w-px overflow-hidden md:h-28">
                    <span className="be-connector-line-v absolute inset-0" />
                    <span
                      className="be-flow-trail-v absolute inset-x-[-6px] top-0 h-16"
                      style={{ animationDelay: "1.6s" }}
                    />
                  </div>
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--emerald-deep)] shadow-[0_0_0_4px_color-mix(in_oklab,var(--emerald-deep)_18%,transparent)]" />
                </div>
              </div>

              {/* Roya Ventures (destination) */}
              <div
                className="relative flex flex-col items-center"
                style={{
                  opacity: shown ? 1 : 0,
                  transform: shown ? "translateY(0) scale(1)" : "translateY(24px) scale(0.94)",
                  transition: `opacity 900ms ${EASE} 900ms, transform 900ms ${EASE} 900ms`,
                }}
              >
                {/* halo/spotlight */}
                <span
                  aria-hidden
                  className="be-halo pointer-events-none absolute -inset-8 -z-10 rounded-full blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle, color-mix(in oklab, var(--gold) 28%, transparent), transparent 65%)",
                  }}
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-1/2 -bottom-6 h-px w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent"
                />
                <span className="mb-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--emerald-deep)]">
                  Now
                </span>
                <img
                  src={royaLogo.url}
                  alt="Roya Ventures — new company logo"
                  className="be-logo be-logo-new h-24 w-auto max-w-[280px] object-contain md:h-28 lg:h-32"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="max-w-xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--gold)]" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[var(--navy-deep)]/70">
                  Company Evolution
                </p>
              </div>
            </Reveal>

            {/* Word-by-word heading reveal */}
            <h2
              className="mt-8 font-serif text-4xl leading-[1.05] tracking-tight text-[var(--navy-deep)] md:text-5xl lg:text-6xl"
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
                      transition: `opacity 700ms ${EASE} ${300 + i * 110}ms, transform 700ms ${EASE} ${300 + i * 110}ms`,
                      color: isBrand ? "var(--emerald-deep)" : undefined,
                    }}
                  >
                    {word}
                  </span>
                );
              })}
            </h2>

            <Reveal delay={0.9}>
              <p className="mt-8 text-lg leading-relaxed font-light text-[var(--navy-deep)]/75 md:text-xl">
                Spidernet is now part of Roya Ventures, reflecting our continued
                commitment to delivering innovative technology solutions under a
                stronger, unified brand. While our name has evolved, our
                dedication to excellence, reliability, engineering expertise,
                and customer success remains unchanged.
              </p>
            </Reveal>

            {/* Trust indicators — premium horizontal */}
            <ul className="mt-10 flex flex-col divide-y divide-[var(--navy-deep)]/10 sm:flex-row sm:divide-y-0 sm:divide-x">
              {TRUST.map((label, i) => (
                <li
                  key={label}
                  className="flex items-center gap-3 py-3 pr-6 sm:py-0 sm:pl-6 sm:first:pl-0"
                  style={{
                    opacity: shown ? 1 : 0,
                    transform: shown ? "translateY(0)" : "translateY(14px)",
                    transition: `opacity 600ms ${EASE} ${1100 + i * 140}ms, transform 600ms ${EASE} ${1100 + i * 140}ms`,
                  }}
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-[var(--gold)]/50 bg-white text-[var(--gold)] shadow-[0_2px_10px_-4px_color-mix(in_oklab,var(--gold)_60%,transparent)]">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.75} />
                  </span>
                  <span className="text-sm font-medium tracking-wide text-[var(--navy-deep)] md:text-base">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
