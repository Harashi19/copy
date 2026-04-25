import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Trezia Apartments" },
      { name: "description", content: "Explore Trezia Apartments through our gallery — bedrooms, lounges, gardens and more." },
      { property: "og:title", content: "Gallery — Trezia Apartments" },
      { property: "og:description", content: "A visual tour of Trezia Apartments in Zvishavane." },
      { property: "og:image", content: g2 },
    ],
  }),
  component: GalleryPage,
});

const PHOTOS = [
  { src: g1, label: "Suite at golden hour", span: "md:col-span-2 md:row-span-2" },
  { src: g2, label: "Pool at dusk", span: "" },
  { src: g3, label: "The lounge", span: "" },
  { src: g4, label: "Breakfast service", span: "md:col-span-2" },
  { src: g5, label: "Marble bath", span: "" },
  { src: g6, label: "Twin room", span: "" },
];

function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-40 pb-16 px-6 text-center">
        <div className="eyebrow">Gallery</div>
        <h1 className="mt-3 font-display text-5xl md:text-7xl">
          A view <span className="italic text-brass">inside</span>.
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-muted-foreground">
          Every corner of Trezia is shaped by light, texture, and quiet moments.
        </p>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-4">
          {PHOTOS.map((p, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-border ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="eyebrow text-brass">{p.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
