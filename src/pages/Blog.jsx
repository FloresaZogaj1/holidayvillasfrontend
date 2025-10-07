import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { posts } from "../data/posts";

export default function Blog() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-bg text-ink">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 text-center sm:text-left">
          <h1 className="font-display text-3xl md:text-4xl tracking-tight">
            <span className="gradient-text">{t("blog.title")}</span>
          </h1>
          <p className="text-ink/70 mt-2 max-w-2xl mx-auto sm:mx-0">
            {t("blog.subtitle")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.id}
              className="card lux-border overflow-hidden shine-wrap hover-glow flex flex-col"
            >
              <Link to={`/blog/${p.id}`} className="block">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="w-full object-cover aspect-[16/10]"
                />
              </Link>

              <div className="p-5 flex flex-col gap-2 flex-1">
                <div className="text-xs text-ink/70">{p.date}</div>
                <Link to={`/blog/${p.id}`} className="hover:text-accent">
                  <h2 className="text-lg font-semibold">{p.title}</h2>
                </Link>
                <p className="text-sm text-ink/70 flex-1">{p.excerpt}</p>

                <div className="pt-2">
                  <Link
                    to={`/blog/${p.id}`}
                    className="btn-ghost inline-flex items-center gap-2"
                  >
                    {t("blog.readMore")}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
