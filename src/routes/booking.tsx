import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Calendar, Users, BedDouble, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book your stay — Trezia Apartments" },
      { name: "description", content: "Reserve a room at Trezia Apartments. Choose check-in and check-out dates, guests, and room type." },
      { property: "og:title", content: "Book your stay — Trezia Apartments" },
      { property: "og:description", content: "Reserve a room at Trezia Apartments in Zvishavane." },
    ],
  }),
  component: BookingPage,
});

const ROOM_TYPES = [
  { id: "single", name: "Garden Single", desc: "1 single bed · 1 guest", price: 45 },
  { id: "double", name: "Classic Double", desc: "1 queen bed · 2 guests", price: 75 },
  { id: "twin", name: "Twin Comfort", desc: "2 single beds · 2 guests", price: 80 },
  { id: "suite", name: "Heritage Suite", desc: "1 king + 1 twin · up to 4", price: 120 },
] as const;

function BookingPage() {
  const today = new Date().toISOString().slice(0, 10);
  const tomorrow = new Date(Date.now() + 86400000).toISOString().slice(0, 10);

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState(2);
  const [room, setRoom] = useState<string>("double");
  const [submitted, setSubmitted] = useState(false);

  const nights = Math.max(
    1,
    Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000)
  );
  const selected = ROOM_TYPES.find((r) => r.id === room)!;
  const total = selected.price * nights;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-40 pb-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="eyebrow">Reserve</div>
          <h1 className="mt-3 font-display text-5xl md:text-6xl max-w-2xl">
            Plan your stay <span className="italic text-brass">with us</span>.
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Pick your dates, the number of guests, and the room that suits you.
            We'll confirm by email within the hour.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_380px] gap-8">
          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-2xl border border-border bg-card p-8 md:p-10 space-y-8"
          >
            {/* Dates */}
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Check-in" icon={Calendar}>
                <input
                  type="date"
                  required
                  min={today}
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-transparent text-foreground outline-none text-lg"
                />
              </Field>
              <Field label="Check-out" icon={Calendar}>
                <input
                  type="date"
                  required
                  min={checkIn}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-transparent text-foreground outline-none text-lg"
                />
              </Field>
            </div>

            {/* Guests */}
            <Field label="Guests" icon={Users}>
              <div className="flex items-center justify-between">
                <span className="text-lg">{guests} {guests === 1 ? "guest" : "guests"}</span>
                <div className="flex items-center gap-2">
                  <Stepper onClick={() => setGuests(Math.max(1, guests - 1))}>−</Stepper>
                  <Stepper onClick={() => setGuests(Math.min(8, guests + 1))}>+</Stepper>
                </div>
              </div>
            </Field>

            {/* Room types */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BedDouble className="h-4 w-4 text-brass" />
                <span className="eyebrow text-foreground/80">Room type</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {ROOM_TYPES.map((r) => {
                  const active = room === r.id;
                  return (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setRoom(r.id)}
                      className={`text-left rounded-xl border p-5 transition-all ${
                        active
                          ? "border-brass bg-brass/5 shadow-glow"
                          : "border-border hover:border-brass/40"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-display text-xl">{r.name}</div>
                        {active && <Check className="h-4 w-4 text-brass" />}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">{r.desc}</div>
                      <div className="mt-3 text-brass font-medium">${r.price}<span className="text-xs text-muted-foreground"> / night</span></div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Contact */}
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Full name">
                <input required type="text" className="w-full bg-transparent outline-none text-lg" placeholder="Jane Doe" />
              </Field>
              <Field label="Email">
                <input required type="email" className="w-full bg-transparent outline-none text-lg" placeholder="jane@example.com" />
              </Field>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brass px-8 py-4 text-primary-foreground font-medium shadow-glow hover:scale-[1.01] transition-transform"
            >
              Request booking <ArrowRight className="h-4 w-4" />
            </button>

            {submitted && (
              <div className="rounded-xl border border-brass/40 bg-brass/5 p-4 text-sm text-brass">
                Thank you — your request has been received. We'll confirm shortly.
              </div>
            )}
          </form>

          {/* Summary */}
          <aside className="rounded-2xl border border-border bg-card p-8 h-fit lg:sticky lg:top-28">
            <div className="eyebrow">Summary</div>
            <h2 className="mt-3 font-display text-2xl">{selected.name}</h2>
            <p className="text-sm text-muted-foreground">{selected.desc}</p>

            <div className="mt-6 space-y-3 text-sm">
              <Row label="Check-in" value={checkIn} />
              <Row label="Check-out" value={checkOut} />
              <Row label="Nights" value={String(nights)} />
              <Row label="Guests" value={String(guests)} />
              <Row label="Rate" value={`$${selected.price} / night`} />
            </div>

            <div className="mt-6 pt-6 border-t border-border flex items-end justify-between">
              <span className="text-muted-foreground">Total</span>
              <span className="font-display text-3xl text-brass">${total}</span>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <label className="block rounded-xl border border-border bg-background/50 px-5 py-4 focus-within:border-brass transition-colors">
      <div className="flex items-center gap-2 mb-1.5">
        {Icon && <Icon className="h-3.5 w-3.5 text-brass" />}
        <span className="eyebrow text-[0.65rem]">{label}</span>
      </div>
      {children}
    </label>
  );
}

function Stepper({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="h-9 w-9 rounded-full border border-border hover:border-brass hover:text-brass transition-colors"
    >
      {children}
    </button>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-foreground">{value}</span>
    </div>
  );
}
