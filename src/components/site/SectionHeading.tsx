import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div className={["max-w-3xl", align === "center" ? "mx-auto text-center" : ""].join(" ")}>
      {eyebrow && <p className="gold-rule">{eyebrow}</p>}
      <h2 className={["heading-lg mt-5", invert ? "text-white" : ""].join(" ")}>{title}</h2>
      {description && (
        <p className={["mt-5 text-base md:text-lg leading-relaxed", invert ? "text-white/70" : "text-muted-foreground"].join(" ")}>
          {description}
        </p>
      )}
    </div>
  );
}
