import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import heroContact from "@/assets/hero-contact.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Roya Ventures" },
      { name: "description", content: "Reach Roya Ventures' partners directly. Begin a confidential conversation about your mandate." },
      { property: "og:title", content: "Contact — Roya Ventures" },
      { property: "og:description", content: "Begin a confidential conversation with our partners." },
    ],
  }),
  component: ContactPage,
});

const OFFICES = [
  { city: "Global Headquarters", address: "Level 24, One Global Tower, Business District, City" },
  { city: "Middle East", address: "World Trade Centre, Sheikh Zayed Road, Dubai" },
  { city: "Europe", address: "1 Carlton House Terrace, London SW1Y 5DB" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4500);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <SiteLayout transparentHeader>
      <PageHero
        eyebrow="Get in touch"
        title={<>Begin a <span className="text-[var(--gold)]">confidential</span> conversation.</>}
        subtitle="Every relationship begins with a private dialogue. Share the question that matters — a partner will respond personally."
        image={heroContact}
        height="compact"
      />

      {/* Contact form + info */}
      <section className="section-y">
        <div className="container-px mx-auto grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Form */}
          <Reveal as="div" className="lg:col-span-7">
            <p className="gold-rule">Write to us</p>
            <h2 className="heading-lg mt-5">Send a message.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Tell us briefly about your enquiry. Submissions are treated in strict confidence.
            </p>

            <form onSubmit={onSubmit} className="mt-12 grid gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Organisation" name="organisation" />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <Field label="Subject" name="subject" />
              <div>
                <label className="eyebrow text-[var(--navy)] mb-3 block">Message</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full bg-transparent border-b border-input py-3 text-base text-[var(--navy)] placeholder:text-muted-foreground/60 focus:border-[var(--gold)] focus:outline-none transition-colors resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <div className="pt-4">
                <button type="submit" className="btn-primary">
                  {sent ? <>Message sent <Check className="h-4 w-4" /></> : <>Send message <Send className="h-4 w-4" /></>}
                </button>
              </div>
            </form>
          </Reveal>

          {/* Info */}
          <Reveal as="aside" delay={0.1} className="lg:col-span-5">
            <div className="bg-[var(--navy)] text-white p-10 md:p-12">
              <p className="gold-rule">Direct lines</p>
              <h3 className="heading-md mt-5 text-white">Reach a partner.</h3>
              <ul className="mt-10 space-y-7">
                <li className="grid grid-cols-[auto_1fr] gap-4">
                  <Mail className="h-5 w-5 mt-1 text-[var(--gold)]" />
                  <div>
                    <p className="eyebrow text-[var(--gold)]">Email</p>
                    <a href="mailto:info@royaventures.com" className="mt-1 block text-white/90 hover:text-[var(--gold)]">info@royaventures.com</a>
                  </div>
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-4">
                  <Phone className="h-5 w-5 mt-1 text-[var(--gold)]" />
                  <div>
                    <p className="eyebrow text-[var(--gold)]">Telephone</p>
                    <a href="tel:+10000000000" className="mt-1 block text-white/90 hover:text-[var(--gold)]">+1 (000) 000 0000</a>
                  </div>
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-4">
                  <MapPin className="h-5 w-5 mt-1 text-[var(--gold)]" />
                  <div>
                    <p className="eyebrow text-[var(--gold)]">Headquarters</p>
                    <p className="mt-1 text-white/90 leading-relaxed">Level 24, One Global Tower<br />Business District, City</p>
                  </div>
                </li>
              </ul>
              <div className="hairline mt-10 opacity-40" />
              <p className="mt-6 text-sm text-white/65 leading-relaxed">
                Business hours: Monday – Friday, 09:00 – 18:00 local time. We respond to every
                enquiry within one business day.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Offices */}
      <section className="section-y bg-[var(--stone)]">
        <div className="container-px mx-auto">
          <SectionHeading
            eyebrow="Our offices"
            title="A global footprint, calibrated locally."
          />
          <div className="mt-14 grid gap-px bg-border md:grid-cols-3 border border-border">
            {OFFICES.map((o) => (
              <div key={o.city} className="bg-card p-10">
                <p className="eyebrow text-[var(--gold)]">{o.city}</p>
                <p className="mt-4 text-[var(--navy)] leading-relaxed">{o.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section>
        <div className="relative w-full aspect-[21/9] bg-[var(--navy)] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_60%)]" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(color-mix(in oklab, var(--gold) 30%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--gold) 30%, transparent) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="relative h-full grid place-items-center text-center text-white px-6">
            <div>
              <MapPin className="h-10 w-10 mx-auto text-[var(--gold)]" />
              <p className="mt-4 eyebrow text-[var(--gold)]">Map placeholder</p>
              <p className="mt-3 text-xl md:text-2xl font-light max-w-xl mx-auto">
                Interactive map will be embedded here in Phase 2.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Prefer a call?"
        title="Schedule a private call with one of our partners."
        description="We are happy to arrange a no-obligation, confidential conversation at your convenience."
      />
    </SiteLayout>
  );
}

function Field({
  label, name, type = "text", required = false,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-[var(--navy)] mb-3 block">
        {label}{required && <span className="text-[var(--gold)] ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-input py-3 text-base text-[var(--navy)] placeholder:text-muted-foreground/60 focus:border-[var(--gold)] focus:outline-none transition-colors"
      />
    </div>
  );
}
