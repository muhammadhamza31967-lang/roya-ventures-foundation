import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  align = "left",
  children,
  height = "tall",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
  align?: "left" | "center";
  children?: ReactNode;
  height?: "tall" | "compact";
}) {
  return (
    <section
      className={[
        "relative isolate overflow-hidden text-white",
        height === "tall" ? "min-h-[92vh]" : "min-h-[62vh]",
        "flex items-end",
      ].join(" ")}
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover hero-zoom"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-deep)]/85 via-[var(--navy)]/70 to-[var(--navy-deep)]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_60%)]" />
      </div>

      <div className="container-px mx-auto w-full pb-20 pt-40 md:pb-28 md:pt-44">
        <div className={["max-w-4xl", align === "center" ? "mx-auto text-center" : ""].join(" ")}>
          <p
            className={[
              "gold-rule reveal-soft",
              align === "center" ? "before:left-1/2 before:-translate-x-[calc(100%+1rem)]" : "",
            ].join(" ")}
            style={{ animationDelay: "0.05s" }}
          >
            {eyebrow}
          </p>
          <h1
            className="heading-xl mt-6 text-white reveal"
            style={{ animationDelay: "0.15s" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="mt-7 max-w-2xl text-base md:text-lg leading-relaxed text-white/75 reveal"
              style={{ animationDelay: "0.3s" }}
            >
              {subtitle}
            </p>
          )}
          {children && (
            <div
              className={[
                "mt-10 flex flex-wrap gap-4 reveal",
                align === "center" ? "justify-center" : "",
              ].join(" ")}
              style={{ animationDelay: "0.45s" }}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
