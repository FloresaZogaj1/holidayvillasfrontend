import { Link } from "react-router-dom";

export default function VillaCard({ villa }) {
  return (
    <Link to={`/villa/${villa.slug}`} className="block group">
      <article className="card overflow-hidden">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={villa.cover_url}
            alt={villa.name}
            className="h-full w-full object-cover transition-transform group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-4 flex items-center justify-between">
          <div>
            <h3 className="font-display text-xl text-accent">{villa.name}</h3>
            <p className="text-sm text-ink-secondary">{villa.location}</p>
          </div>
          <span className="text-sm px-3 py-1 rounded-full border border-line bg-accent-light/20 text-accent font-medium">
            €{villa.price_per_night} / natë
          </span>
        </div>
      </article>
    </Link>
  );
}
