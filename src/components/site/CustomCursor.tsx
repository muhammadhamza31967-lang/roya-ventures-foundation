import { useEffect, useRef, useState } from "react";

/**
 * Subtle two-layer cursor:
 *  - dot: a small filled dot that follows the pointer precisely
 *  - ring: a larger ring that lags slightly behind, scales on hover
 *
 * Disabled on touch / coarse pointers and respects prefers-reduced-motion.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(animate);
    };

    const isInteractive = (el: Element | null): boolean => {
      if (!el) return false;
      const tag = el.tagName;
      if (tag === "A" || tag === "BUTTON" || tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
      if (el.getAttribute("role") === "button") return true;
      if ((el as HTMLElement).dataset?.cursor === "hover") return true;
      return false;
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as Element)?.closest(
        "a, button, input, textarea, select, [role=button], [data-cursor='hover']",
      );
      setHovering(Boolean(target && isInteractive(target)));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(animate);

    document.documentElement.classList.add("has-custom-cursor");

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className={[
          "pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border",
          "transition-[width,height,background-color,border-color,opacity] duration-300 ease-out",
          hovering
            ? "h-14 w-14 border-[var(--gold)]/80 bg-[color-mix(in_oklab,var(--gold)_15%,transparent)]"
            : "h-9 w-9 border-[var(--gold)]/55 bg-transparent",
        ].join(" ")}
        style={{ willChange: "transform" }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className={[
          "pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-[var(--gold)] transition-[width,height,opacity] duration-200",
          hovering ? "h-1 w-1 opacity-50" : "h-1.5 w-1.5 opacity-90",
        ].join(" ")}
        style={{ willChange: "transform" }}
      />
    </>
  );
}
