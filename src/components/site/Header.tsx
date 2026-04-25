import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Gallery" },
  { to: "/booking", label: "Book" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <span className="h-9 w-9 rounded-full bg-gradient-brass grid place-items-center text-primary-foreground font-display text-lg font-semibold">T</span>
          <div className="leading-tight">
            <div className="font-display text-xl text-foreground">Trezia</div>
            <div className="eyebrow text-[0.55rem]">Apartments · Zvishavane</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-brass" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/auth"
            className="text-sm px-5 py-2 rounded-full border border-brass/40 text-brass hover:bg-brass hover:text-primary-foreground transition-all"
          >
            Sign in
          </Link>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card/95 backdrop-blur border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-foreground">
                {l.label}
              </Link>
            ))}
            <Link to="/auth" onClick={() => setOpen(false)} className="text-brass">Sign in</Link>
          </div>
        </div>
      )}
    </header>
  );
}
