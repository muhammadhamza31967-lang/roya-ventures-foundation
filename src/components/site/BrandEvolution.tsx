import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import spidernetLogo from "@/assets/brand/spidernet-logo.jpeg.asset.json";
import royaLogo from "@/assets/brand/roya-ventures-logo.jpeg.asset.json";

export function BrandEvolution() {
  return (
    <section
      aria-label="Company evolution announcement"
      className="section-y relative overflow-hidden"
      style={{ background: "var(--grad-ivory)" }}
    >
      {/* Ambient background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_10%,transparent),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--emerald-deep)_16%,transparent),transparent_65%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 right-10 -z-10 h-72 w-72 rounded-full border border-[var(--gold)]/15"
      />

      <div className="container-px mx-auto">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left — Logos */}
          <Reveal>
            <div className="relative rounded-3xl border border-[var(--gold)]/20 bg-white/70 p-8 shadow-sm backdrop-blur-sm md:p-12">
              <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-6">
                {/* Spidernet */}
                <div className="flex flex-1 items-center justify-center">
                  <img
                    src={spidernetLogo.url}
                    alt="SpiderNet — former company logo"
                    className="h-24 w-auto max-w-[220px] object-contain animate-fade-in md:h-28"
                    loading="lazy"
                  />
                </div>

                {/* Transition indicator */}
                <div
                  aria-hidden
                  className="flex shrink-0 items-center justify-center md:mx-2"
                >
                  <div className="relative flex items-center">
                    <span className="hidden md:block h-px w-14 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
                    <span className="md:hidden h-14 w-px bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent" />
                    <span className="mx-2 grid h-10 w-10 place-items-center rounded-full border border-[var(--gold)]/40 bg-white shadow-[0_0_0_6px_color-mix(in_oklab,var(--gold)_10%,transparent)]">
                      <ArrowRight
                        className="h-4 w-4 text-[var(--gold)] md:rotate-0 rotate-90 animate-pulse"
                        strokeWidth={2.25}
                      />
                    </span>
                    <span className="hidden md:block h-px w-14 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
                    <span className="md:hidden h-14 w-px bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent" />
                  </div>
                </div>

                {/* Roya Ventures with glow */}
                <div className="relative flex flex-1 items-center justify-center">
                  <span
                    aria-hidden
                    className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_65%)] blur-2xl"
                  />
                  <img
                    src={royaLogo.url}
                    alt="Roya Ventures — new company logo"
                    className="h-24 w-auto max-w-[240px] object-contain animate-fade-in md:h-28"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Corner accents */}
              <span aria-hidden className="pointer-events-none absolute -top-px left-8 h-px w-16 bg-[var(--gold)]/60" />
              <span aria-hidden className="pointer-events-none absolute -bottom-px right-8 h-px w-16 bg-[var(--gold)]/60" />
            </div>
          </Reveal>

          {/* Right — Content */}
          <div>
            <Reveal>
              <p className="gold-rule">Company Evolution</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="heading-lg mt-6">
                Spidernet is now{" "}
                <span className="text-[var(--emerald-deep)]">Roya Ventures</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-6 gold-divider" />
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-6 text-lg md:text-xl leading-relaxed font-light text-muted-foreground">
                Spidernet is now part of Roya Ventures, reflecting our continued
                commitment to delivering innovative technology solutions under a
                stronger, unified brand. While our name has evolved, our
                dedication to excellence, reliability, engineering expertise,
                and customer success remains unchanged.
              </p>
            </Reveal>

            {/* Trust indicators */}
            <Reveal delay={0.35}>
              <ul className="mt-10 flex flex-wrap items-center gap-3">
                {["Same Leadership", "Same Expertise", "Stronger Brand"].map(
                  (label) => (
                    <li
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-white/80 px-4 py-2 text-xs md:text-sm font-medium tracking-wide text-[var(--navy-deep)] shadow-sm backdrop-blur-sm"
                    >
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]"
                      />
                      {label}
                    </li>
                  ),
                )}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
