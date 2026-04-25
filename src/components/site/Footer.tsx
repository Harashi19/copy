import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl">Trezia Apartments</div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            A boutique guest house in the heart of Zvishavane. Quiet luxury, warm hospitality.
          </p>
        </div>
        <div className="text-sm">
          <div className="eyebrow mb-3">Visit</div>
          <p className="text-muted-foreground">12 Mine Avenue<br />Zvishavane, Zimbabwe</p>
        </div>
        <div className="text-sm">
          <div className="eyebrow mb-3">Explore</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/gallery" className="hover:text-brass">Gallery</Link></li>
            <li><Link to="/booking" className="hover:text-brass">Book a stay</Link></li>
            <li><Link to="/contact" className="hover:text-brass">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Trezia Apartments. All rights reserved.
      </div>
    </footer>
  );
}
