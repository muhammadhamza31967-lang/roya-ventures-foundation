import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Mail, MapPin, Send, Check, PhoneCall } from "lucide-react";
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

const CONTACTS = [
  { name: "Raza Saudagar", phone: "+966 5096 00042" },
  { name: "Khazi Zafar", phone: "+966 5013 59647" },
  { name: "Naveed Saudagar", phone: "+966 5376 81985" },
  { name: "Anas Saudagar", phone: "+966 5028 79339" },
];
const EMAILS = [
  "info@royaventure.com",
  "raza.saudagar@royaventure.com",
  "khazi.zafar@royaventure.com",
  "naveed.saudagar@royaventure.com",
  "anas.saudagar@royaventure.com",
  "zaid@royaventure.com",
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

      {/* Premium contact form + info */}
      <section className="relative section-y overflow-hidden bg-[var(--ivory)]">
        {/* Decorative background accents */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_10%,transparent),transparent_55%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,color-mix(in_oklab,var(--navy)_8%,transparent),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />

        <div className="container-px mx-auto">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-12">
            {/* FORM — primary focal point */}
            <Reveal as="div" className="lg:col-span-8">
              <div className="relative">
                {/* Decorative corner frames */}
                <div className="absolute -top-3 -left-3 h-16 w-16 border-t border-l border-[var(--gold)]/50 rounded-tl-2xl pointer-events-none" />
                <div className="absolute -bottom-3 -right-3 h-16 w-16 border-b border-r border-[var(--gold)]/50 rounded-br-2xl pointer-events-none" />

                <div className="relative bg-white rounded-2xl border border-[color-mix(in_oklab,var(--navy)_8%,transparent)] shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--navy)_35%,transparent)] p-8 md:p-12 lg:p-14">
                  <p className="gold-rule">Write to us</p>
                  <h2 className="heading-lg mt-5 text-[var(--navy)]">
                    Send a <em className="not-italic text-[var(--gold)]">message.</em>
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
                    Tell us briefly about your enquiry. Submissions are treated in strict confidence.
                  </p>
                  <div className="mt-6 h-px w-16 bg-[var(--gold)]" />

                  <form onSubmit={onSubmit} className="mt-10 grid gap-6">
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
                      <label htmlFor="message" className="eyebrow text-[var(--navy)] mb-3 block">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="How can we help?"
                        className="w-full rounded-xl border border-[color-mix(in_oklab,var(--navy)_12%,transparent)] bg-[var(--ivory)]/40 px-4 py-3.5 text-[15px] text-[var(--navy)] placeholder:text-muted-foreground/60 transition-all duration-300 hover:border-[color-mix(in_oklab,var(--navy)_22%,transparent)] focus:border-[var(--gold)] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[var(--gold)]/10 resize-none"
                      />
                    </div>
                    <div className="pt-3 flex items-center gap-5">
                      <button
                        type="submit"
                        data-cursor="hover"
                        className="group inline-flex items-center gap-3 rounded-full bg-[var(--navy)] text-white px-9 py-4 text-[13px] font-bold uppercase tracking-[0.18em] transition-all duration-500 hover:bg-[var(--gold)] hover:text-[var(--navy)] shadow-[0_15px_40px_-15px_color-mix(in_oklab,var(--navy)_60%,transparent)] hover:shadow-[0_18px_45px_-12px_var(--gold)] hover:-translate-y-0.5"
                      >
                        {sent ? (
                          <>Message sent <Check className="h-4 w-4 transition-transform duration-500 group-hover:scale-110" /></>
                        ) : (
                          <>Send message <Send className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" /></>
                        )}
                      </button>
                      <p className="text-xs text-muted-foreground tracking-wide hidden sm:block">
                        Treated in strict confidence.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </Reveal>

            {/* CONTACT INFO — premium aside */}
            <Reveal as="aside" delay={0.1} className="lg:col-span-4">
              <div className="relative overflow-hidden rounded-2xl bg-[var(--navy)] text-white p-8 md:p-10 shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--navy)_60%,transparent)]">
                {/* Layered backdrop */}
                <div
                  className="absolute inset-0 opacity-90"
                  style={{ background: "linear-gradient(150deg, var(--navy) 0%, var(--emerald-deep) 100%)" }}
                />
                <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_25%,transparent),transparent_70%)]" />
                <div className="absolute inset-0 bg-noise opacity-[0.06]" />

                <div className="relative">
                  <p className="gold-rule">Direct lines</p>
                  <h3 className="heading-md mt-5 text-white">Reach a partner.</h3>
                  <div className="mt-5 h-px w-12 bg-[var(--gold)]" />

                  <ul className="mt-8 space-y-5">
                    <InfoItem icon={MapPin} label="Location">
                      <p className="mt-1.5 text-white/90 leading-relaxed">
                        Riyadh, KSA
                      </p>
                    </InfoItem>

                    <InfoItem icon={PhoneCall} label="Phone">
                      <div className="mt-1.5 space-y-1">
                        {PHONES.map((p) => (
                          <a
                            key={p}
                            href={`tel:${p.replace(/[^+\d]/g, "")}`}
                            className="block text-white/90 hover:text-[var(--gold)] transition-colors leading-relaxed"
                          >
                            {p}
                          </a>
                        ))}
                      </div>
                    </InfoItem>

                    <InfoItem icon={Mail} label="Email">
                      <div className="mt-1.5 space-y-1">
                        {EMAILS.map((e) => (
                          <a
                            key={e}
                            href={`mailto:${e}`}
                            className="block text-white/90 hover:text-[var(--gold)] transition-colors leading-relaxed break-all"
                          >
                            {e}
                          </a>
                        ))}
                      </div>
                    </InfoItem>
                  </ul>

                </div>

              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />
      </section>
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
        className="w-full rounded-xl border border-[color-mix(in_oklab,var(--navy)_12%,transparent)] bg-[var(--ivory)]/40 px-4 py-3.5 text-[15px] text-[var(--navy)] placeholder:text-muted-foreground/60 transition-all duration-300 hover:border-[color-mix(in_oklab,var(--navy)_22%,transparent)] focus:border-[var(--gold)] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[var(--gold)]/10"
      />
    </div>
  );
}

function InfoItem({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Mail;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="group grid grid-cols-[auto_1fr] gap-5">
      <div className="relative shrink-0">
        <div className="absolute inset-0 rounded-xl bg-[var(--gold)]/20 blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative h-12 w-12 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center transition-all duration-500 group-hover:border-[var(--gold)]/60 group-hover:bg-[var(--gold)]/10">
          <Icon className="h-[18px] w-[18px] text-[var(--gold)]" strokeWidth={1.5} />
        </div>
      </div>
      <div className="pt-1">
        <p className="eyebrow text-[var(--gold)]">{label}</p>
        {children}
      </div>
    </li>
  );
}
