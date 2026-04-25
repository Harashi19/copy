import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Trezia Apartments" },
      { name: "description", content: "Get in touch with Trezia Apartments in Zvishavane. Phone, email, address and contact form." },
      { property: "og:title", content: "Contact — Trezia Apartments" },
      { property: "og:description", content: "Reach the Trezia Apartments team in Zvishavane." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-40 pb-16 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <div className="eyebrow">Contact</div>
          <h1 className="mt-3 font-display text-5xl md:text-7xl">
            Say <span className="italic text-brass">hello</span>.
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-muted-foreground">
            We respond to every message — usually within an hour during the day.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl grid lg:grid-cols-[360px_1fr] gap-8">
          {/* Details */}
          <div className="space-y-4">
            {[
              { icon: MapPin, label: "Address", value: "12 Mine Avenue\nZvishavane, Zimbabwe" },
              { icon: Phone, label: "Phone", value: "0774 222 254" },
              { icon: Mail, label: "Email", value: "stay@trezia.co.zw" },
              { icon: Clock, label: "Reception", value: "07:00 — 22:00 daily" },
            ].map((d) => (
              <div key={d.label} className="rounded-2xl border border-border bg-card p-6 flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-brass/10 grid place-items-center text-brass">
                  <d.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="eyebrow text-[0.65rem]">{d.label}</div>
                  <div className="mt-1 text-foreground whitespace-pre-line">{d.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-2xl border border-border bg-card p-8 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Input label="Name" required />
              <Input label="Email" type="email" required />
            </div>
            <Input label="Subject" />
            <div>
              <label className="block">
                <span className="eyebrow text-[0.65rem]">Message</span>
                <textarea
                  required
                  rows={6}
                  className="mt-2 w-full rounded-xl border border-border bg-background/50 px-4 py-3 outline-none focus:border-brass transition-colors"
                />
              </label>
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brass px-7 py-3.5 text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition-transform"
            >
              Send message <Send className="h-4 w-4" />
            </button>
            {sent && (
              <p className="text-sm text-brass">Thanks — we'll be in touch shortly.</p>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Input({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="eyebrow text-[0.65rem]">{label}</span>
      <input
        {...rest}
        className="mt-2 w-full rounded-xl border border-border bg-background/50 px-4 py-3 outline-none focus:border-brass transition-colors"
      />
    </label>
  );
}
