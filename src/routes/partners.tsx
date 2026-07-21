import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import heroImage from "@/assets/hero-clients.jpg";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — Roya Ventures" },
      { name: "description", content: "Our global partner network — coming soon." },
      { property: "og:title", content: "Partners — Roya Ventures" },
      { property: "og:description", content: "Our global partner network — coming soon." },
    ],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  return (
    <SiteLayout transparentHeader>
      <PageHero
        eyebrow="Our Network"
        title={<>Our <span className="text-[var(--gold)]">Partners</span></>}
        subtitle="A curated network of technology, engineering and advisory partners. Detailed profiles will be shared soon."
        image={heroImage}
        height="compact"
        align="center"
      />
    </SiteLayout>
  );
}
