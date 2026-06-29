import { useEffect, useState } from "react";

export function HeroSlider({
  images,
  interval = 6000,
}: {
  images: { src: string; alt?: string }[];
  interval?: number;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % images.length),
      interval,
    );
    return () => window.clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {images.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
        >
          <img
            src={img.src}
            alt={img.alt ?? ""}
            className={[
              "h-full w-full object-cover",
              i === active ? "hero-zoom" : "",
            ].join(" ")}
            loading={i === 0 ? "eager" : "lazy"}
            width={1920}
            height={1080}
          />
        </div>
      ))}

      {/* Slide indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setActive(i)}
              data-cursor="hover"
              className={[
                "h-[3px] rounded-full transition-all duration-500",
                i === active
                  ? "w-10 bg-[var(--gold)]"
                  : "w-5 bg-white/35 hover:bg-white/70",
              ].join(" ")}
            />
          ))}
        </div>
      )}
    </div>
  );
}
