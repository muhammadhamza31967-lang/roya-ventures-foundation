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
    <section className="relative isolate overflow-hidden bg-[var(--navy)] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--gold)_24%,transparent),transparent_55%)]" />
      <div className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-[radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--emerald-deep)_60%,transparent),transparent_70%)]" />

      <div className="container-px mx-auto py-24 md:py-32">
        <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="gold-rule">{eyebrow}</p>
            <h2 className="heading-lg mt-6 text-white max-w-2xl">{title}</h2>
            <p className="mt-5 max-w-xl text-white/70 leading-relaxed">{description}</p>
          </div>
          <div className="flex lg:justify-end gap-4 flex-wrap">
            <Link to="/contact" className="btn-primary">
              Schedule a consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="btn-outline-light">Explore services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
