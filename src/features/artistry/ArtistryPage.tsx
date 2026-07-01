import { artworks } from "./artworks";

export function ArtistryPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Artistry</h1>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {artworks.map((art) => (
          <figure key={art.id} className="group overflow-hidden rounded-lg">
            <img
              src={art.src}
              alt={art.alt}
              loading="lazy"
              className="aspect-square w-full object-cover transition-transform duration-200 group-hover:scale-105"
            />
            {art.caption && (
              <figcaption className="mt-1 text-xs text-gray-500">{art.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>
      {artworks.length === 0 && <p className="mt-8 text-gray-500">Gallery coming soon.</p>}
    </main>
  );
}
