import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in or sign up — Trezia Apartments" },
      { name: "description", content: "Create a Trezia Apartments account or sign in to manage your bookings." },
      { property: "og:title", content: "Sign in or sign up — Trezia Apartments" },
      { property: "og:description", content: "Manage your stays at Trezia Apartments." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [done, setDone] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-40 pb-24 px-6">
        <div className="mx-auto max-w-md">
          <div className="text-center">
            <div className="eyebrow">Account</div>
            <h1 className="mt-3 font-display text-5xl">
              {mode === "signin" ? "Welcome back" : "Join us"}
            </h1>
            <p className="mt-3 text-muted-foreground">
              {mode === "signin"
                ? "Sign in to manage your reservations."
                : "Create an account to book faster next time."}
            </p>
          </div>

          {/* Toggle */}
          <div className="mt-8 grid grid-cols-2 rounded-full border border-border p-1 bg-card">
            {(["signin", "signup"] as const).map((m) => (
              <button
                key={m}
                onClick={() => { setMode(m); setDone(false); }}
                className={`py-2.5 text-sm rounded-full transition-all ${
                  mode === m ? "bg-gradient-brass text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                {m === "signin" ? "Sign in" : "Sign up"}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setDone(true); }}
            className="mt-8 rounded-2xl border border-border bg-card p-8 space-y-5"
          >
            {mode === "signup" && <Field label="Full name" type="text" required />}
            <Field label="Email" type="email" required />
            <Field label="Password" type="password" required />

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brass px-7 py-3.5 text-primary-foreground font-medium shadow-glow hover:scale-[1.01] transition-transform"
            >
              {mode === "signin" ? "Sign in" : "Create account"}
              <ArrowRight className="h-4 w-4" />
            </button>

            {done && (
              <p className="text-sm text-brass text-center">
                {mode === "signin" ? "Signed in (demo)." : "Account created (demo)."}
              </p>
            )}

            <p className="text-xs text-muted-foreground text-center pt-2">
              {mode === "signin" ? "New here?" : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
                className="text-brass hover:underline"
              >
                {mode === "signin" ? "Create an account" : "Sign in instead"}
              </button>
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
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
