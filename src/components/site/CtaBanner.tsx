import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CtaBanner({
  eyebrow = "Begin the conversation",
  title = "Let's architect what comes next.",
  description = "From boardroom strategy to enterprise execution, our partners are ready to help you move with conviction.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-noise">
      {/* Layered backdrop */}
      <div className="absolute inset-0 -z-20" style={{ background: "var(--grad-navy)" }} />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_55%)]" />
      <div className="absolute inset-y-0 right-0 -z-10 w-2/3 bg-[radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--emerald-deep)_70%,transparent),transparent_65%)]" />

      {/* Decorative shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[34rem] w-[34rem] rounded-full border border-[var(--gold)]/12 float-shape" />
        <div className="absolute -bottom-32 -left-32 h-[26rem] w-[26rem] rounded-full border border-[var(--gold)]/10" />
      </div>

      <div className="container-px mx-auto py-28 md:py-40 relative">
        <div className="grid items-end gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="gold-rule">{eyebrow}</p>
            <h2 className="heading-lg mt-7 text-white max-w-2xl">{title}</h2>
            <p className="mt-7 max-w-xl text-white/75 text-lg leading-relaxed font-light">{description}</p>
            <div className="mt-10 hairline max-w-xs opacity-40" />
          </div>
          <div className="flex lg:justify-end gap-4 flex-wrap">
            <Link to="/contact" className="btn-primary">
              Schedule a consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="btn-outline-light">
              Explore services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
