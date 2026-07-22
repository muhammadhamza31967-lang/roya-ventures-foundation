import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import spidernetLogo from "@/assets/brand/spidernet-logo.jpeg.asset.json";
import royaLogo from "@/assets/brand/roya-ventures-logo.jpeg.asset.json";

function useInView<T extends HTMLElement>(threshold = 0.15) {
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

export function BrandEvolution() {
  const { ref: sectionRef, shown } = useInView<HTMLElement>(0.1);

  const easing = "cubic-bezier(0.2,0.8,0.2,1)";

  const sectionStyle: React.CSSProperties = {
    opacity: shown ? 1 : 0,
    transform: shown ? "translateY(0)" : "translateY(36px)",
    transition: `opacity 1s ${easing}, transform 1s ${easing}`,
    background: "var(--grad-ivory)",
  };

  const spidernetStyle: React.CSSProperties = {
    opacity: shown ? 1 : 0,
    transform: shown
      ? "translateX(0) scale(1)"
      : "translateX(-40px) scale(0.95)",
    transition: `opacity 650ms ${easing} 150ms, transform 650ms ${easing} 150ms`,
  };

  const royaStyle: React.CSSProperties = {
    opacity: shown ? 1 : 0,
    transform: shown
      ? "translateX(0) scale(1)"
      : "translateX(40px) scale(0.95)",
    transition: `opacity 650ms ${easing} 400ms, transform 650ms ${easing} 400ms`,
  };

  const arrowStyle: React.CSSProperties = {
    opacity: shown ? 1 : 0,
    transform: shown ? "scale(1)" : "scale(0.6)",
    transition: `opacity 500ms ${easing} 700ms, transform 500ms ${easing} 700ms`,
  };

  const lineLeftStyle: React.CSSProperties = {
    transformOrigin: "left center",
    transform: shown ? "scaleX(1)" : "scaleX(0)",
    transition: `transform 700ms ${easing} 550ms`,
  };
  const lineRightStyle: React.CSSProperties = {
    transformOrigin: "right center",
    transform: shown ? "scaleX(1)" : "scaleX(0)",
    transition: `transform 700ms ${easing} 550ms`,
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Company evolution announcement"
      className="section-y relative overflow-hidden motion-reduce:!transform-none motion-reduce:!opacity-100"
      style={sectionStyle}
    >
      {/* Local animation keyframes */}
      <style>{`
        @keyframes be-drift-a {
          0%, 100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(20px,-14px,0) scale(1.04); }
        }
        @keyframes be-drift-b {
          0%, 100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(-24px,18px,0) scale(1.06); }
        }
        @keyframes be-sweep {
          0% { transform: translateX(-40%); opacity: 0; }
          40% { opacity: 0.7; }
          100% { transform: translateX(140%); opacity: 0; }
        }
        @keyframes be-arrow-pulse {
          0%, 100% {
            box-shadow: 0 0 0 6px color-mix(in oklab, var(--gold) 10%, transparent),
                        0 0 0 0 color-mix(in oklab, var(--gold) 35%, transparent);
          }
          50% {
            box-shadow: 0 0 0 6px color-mix(in oklab, var(--gold) 12%, transparent),
                        0 0 0 12px color-mix(in oklab, var(--gold) 0%, transparent);
          }
        }
        @keyframes be-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }
        .be-arrow-pulse { animation: be-arrow-pulse 2.8s ease-in-out infinite; }
        .be-arrow-float { animation: be-float 3.2s ease-in-out infinite; }
        .be-drift-a { animation: be-drift-a 18s ease-in-out infinite; }
        .be-drift-b { animation: be-drift-b 22s ease-in-out infinite; }
        .be-sweep {
          position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(115deg, transparent 30%, color-mix(in oklab, var(--gold) 14%, transparent) 50%, transparent 70%);
          animation: be-sweep 9s ease-in-out infinite;
        }
        .be-logo { transition: transform 400ms ${easing}, filter 400ms ${easing}; }
        .be-logo:hover { transform: scale(1.03); filter: drop-shadow(0 6px 18px color-mix(in oklab, var(--gold) 35%, transparent)); }
        .be-arrow-wrap:hover .be-arrow-badge {
          box-shadow: 0 0 0 6px color-mix(in oklab, var(--gold) 14%, transparent),
                      0 0 22px 2px color-mix(in oklab, var(--gold) 45%, transparent);
        }
        @media (prefers-reduced-motion: reduce) {
          .be-arrow-pulse, .be-arrow-float, .be-drift-a, .be-drift-b, .be-sweep { animation: none !important; }
        }
      `}</style>

      {/* Ambient background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_10%,transparent),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--emerald-deep)_16%,transparent),transparent_65%)] blur-3xl be-drift-a"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 right-10 -z-10 h-72 w-72 rounded-full border border-[var(--gold)]/15 be-drift-b"
      />
      {/* subtle light sweep */}
      <div aria-hidden className="be-sweep -z-10 opacity-60" />

      <div className="container-px mx-auto">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left — Logos */}
          <div className="relative rounded-3xl border border-[var(--gold)]/20 bg-white/70 p-8 shadow-sm backdrop-blur-sm md:p-12">
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-6">
              {/* Spidernet */}
              <div className="flex flex-1 items-center justify-center" style={spidernetStyle}>
                <img
                  src={spidernetLogo.url}
                  alt="SpiderNet — former company logo"
                  className="be-logo h-24 w-auto max-w-[220px] object-contain md:h-28 cursor-pointer"
                  loading="lazy"
                />
              </div>

              {/* Transition indicator */}
              <div
                aria-hidden
                className="be-arrow-wrap flex shrink-0 items-center justify-center md:mx-2"
              >
                <div className="relative flex items-center">
                  <span
                    className="hidden md:block h-px w-14 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent"
                    style={lineLeftStyle}
                  />
                  <span
                    className="md:hidden h-14 w-px bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent"
                    style={lineLeftStyle}
                  />
                  <span
                    className="be-arrow-badge be-arrow-pulse mx-2 grid h-10 w-10 place-items-center rounded-full border border-[var(--gold)]/40 bg-white transition-shadow"
                    style={arrowStyle}
                  >
                    <ArrowRight
                      className="be-arrow-float h-4 w-4 text-[var(--gold)] md:rotate-0 rotate-90"
                      strokeWidth={2.25}
                    />
                  </span>
                  <span
                    className="hidden md:block h-px w-14 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent"
                    style={lineRightStyle}
                  />
                  <span
                    className="md:hidden h-14 w-px bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent"
                    style={lineRightStyle}
                  />
                </div>
              </div>

              {/* Roya Ventures with glow */}
              <div className="relative flex flex-1 items-center justify-center" style={royaStyle}>
                <span
                  aria-hidden
                  className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_65%)] blur-2xl"
                />
                <img
                  src={royaLogo.url}
                  alt="Roya Ventures — new company logo"
                  className="be-logo h-24 w-auto max-w-[240px] object-contain md:h-28 cursor-pointer"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Corner accents */}
            <span aria-hidden className="pointer-events-none absolute -top-px left-8 h-px w-16 bg-[var(--gold)]/60" />
            <span aria-hidden className="pointer-events-none absolute -bottom-px right-8 h-px w-16 bg-[var(--gold)]/60" />
          </div>

          {/* Right — Content */}
          <div>
            <Reveal>
              <p className="gold-rule">Company Evolution</p>
            </Reveal>
            <Reveal delay={0.12}>
              <h2 className="heading-lg mt-6">
                Spidernet is now{" "}
                <span className="text-[var(--emerald-deep)]">Roya Ventures</span>
              </h2>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-6 gold-divider" />
            </Reveal>
            <Reveal delay={0.36}>
              <p className="mt-6 text-lg md:text-xl leading-relaxed font-light text-muted-foreground">
                Spidernet is now part of Roya Ventures, reflecting our continued
                commitment to delivering innovative technology solutions under a
                stronger, unified brand. While our name has evolved, our
                dedication to excellence, reliability, engineering expertise,
                and customer success remains unchanged.
              </p>
            </Reveal>

            {/* Trust indicators */}
            <ul className="mt-10 flex flex-wrap items-center gap-3">
              {["Same Leadership", "Same Expertise", "Stronger Brand"].map(
                (label, i) => (
                  <Reveal key={label} as="li" delay={0.5 + i * 0.13}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-white/80 px-4 py-2 text-xs md:text-sm font-medium tracking-wide text-[var(--navy-deep)] shadow-sm backdrop-blur-sm">
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]"
                      />
                      {label}
                    </span>
                  </Reveal>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
