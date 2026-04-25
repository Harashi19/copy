import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { AnimatedBed } from "@/components/site/AnimatedBed";
import { ArrowRight, Bed, Coffee, MapPin, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trezia Apartments — Boutique guest house in Zvishavane" },
      { name: "description", content: "Stay at Trezia Apartments, a boutique guest house in Zvishavane, Zimbabwe. Quiet luxury, warm hospitality, and elegant rooms." },
      { property: "og:title", content: "Trezia Apartments — Boutique guest house in Zvishavane" },
      { property: "og:description", content: "Boutique guest house in Zvishavane. Book your stay today." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero with animated bed */}
      <section className="relative min-h-[100svh] flex flex-col bg-gradient-hero overflow-hidden">
        {/* ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-brass/10 blur-[120px] animate-shimmer" />

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 pb-[40vh]">
          <div className="eyebrow animate-fade-up">Zvishavane · Zimbabwe</div>
          <h1 className="mt-6 font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] max-w-5xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Where stillness <br />
            <span className="italic text-brass">finds you</span>.
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
            A boutique guest house designed for quiet evenings, slow mornings,
            and the kind of rest you remember.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/booking"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brass px-7 py-3.5 text-primary-foreground font-medium shadow-glow hover:scale-[1.03] transition-transform"
            >
              Reserve a room
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-foreground hover:border-brass hover:text-brass transition-colors"
            >
              See the rooms
            </Link>
          </div>
          <p className="mt-12 text-xs text-muted-foreground/70 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            ↓ tap the bed
          </p>
        </div>

        <AnimatedBed />
      </section>

      {/* Three pillars */}
      <section className="py-28 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="eyebrow">The Trezia experience</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl max-w-2xl mx-auto">
              Hospitality, distilled to its essence.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Bed, title: "Considered rooms", body: "Six rooms across three categories — each with its own light, mood, and view of the garden." },
              { icon: Coffee, title: "Slow mornings", body: "Single-origin coffee, fresh fruit from local growers, and a sunlit veranda waiting for you." },
              { icon: MapPin, title: "In Zvishavane", body: "Minutes from town, surrounded by acacia and birdsong — the quiet you came looking for." },
            ].map((p) => (
              <div key={p.title} className="group rounded-2xl border border-border bg-card p-8 hover:border-brass/50 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-brass/10 grid place-items-center text-brass group-hover:bg-brass group-hover:text-primary-foreground transition-colors">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms preview */}
      <section className="py-28 px-6 bg-card/30">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <div className="eyebrow">Choose your room</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">Three ways to stay.</h2>
            </div>
            <Link to="/booking" className="text-brass inline-flex items-center gap-2 hover:gap-3 transition-all">
              Check availability <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Garden Single", price: "$45", guests: "1 guest · 1 single bed", tag: "Cosy" },
              { name: "Classic Double", price: "$75", guests: "2 guests · 1 queen bed", tag: "Most loved" },
              { name: "Heritage Suite", price: "$120", guests: "Up to 4 · 1 king + 1 twin", tag: "Premier" },
            ].map((r) => (
              <article key={r.name} className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{r.tag}</span>
                  <Sparkles className="h-4 w-4 text-brass/60" />
                </div>
                <h3 className="mt-6 font-display text-3xl">{r.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.guests}</p>
                <div className="mt-8 pt-8 border-t border-border flex items-end justify-between">
                  <div>
                    <div className="font-display text-4xl text-brass">{r.price}</div>
                    <div className="text-xs text-muted-foreground mt-1">per night</div>
                  </div>
                  <Link to="/booking" className="text-sm text-foreground hover:text-brass">Reserve →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <div className="eyebrow">An invitation</div>
        <h2 className="mt-4 font-display text-5xl md:text-6xl max-w-3xl mx-auto">
          Your room is ready when <span className="italic text-brass">you are</span>.
        </h2>
        <Link
          to="/booking"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-brass px-8 py-4 text-primary-foreground font-medium shadow-glow hover:scale-[1.03] transition-transform"
        >
          Book your stay <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
