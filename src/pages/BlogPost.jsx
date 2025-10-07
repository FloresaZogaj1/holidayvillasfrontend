// src/pages/BlogPost.jsx
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getPostById } from "../data/posts";

export default function BlogPost() {
  const { t } = useTranslation();
  const { id } = useParams();
  const post = getPostById(id);

  if (!post) {
    return (
      <section className="py-16 bg-bg text-ink">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="font-display text-3xl mb-2">{t("blogPost.notFoundTitle")}</h1>
          <p className="text-ink/70 mb-4">{t("blogPost.notFoundText")}</p>
          <Link to="/blog" className="btn-ghost">← {t("blogPost.backToBlog")}</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* HERO */}
      <section className="relative bg-bg text-ink">
        <div className="shine-wrap">
          <img
            src={post.cover}
            alt={post.title}
            className="w-full h-[42vh] md:h-[50vh] object-cover"
          />
        </div>
        <div className="absolute inset-0 lux-soft" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4">
          <div className="flex flex-wrap items-end gap-3">
            <h1 className="font-display text-3xl md:text-5xl gradient-text drop-shadow">
              {post.title}
            </h1>
            <span className="ml-auto text-sm text-ink/80 bg-card/80 border border-line px-3 py-1 rounded-full">
              {post.date}
            </span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 bg-bg text-ink">
        <div className="max-w-5xl mx-auto px-4">
          <div className="prose prose-invert max-w-none">
            {post.content?.map((para, i) => (
              <p key={i} className="text-ink/80 leading-relaxed">{para}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/blog" className="btn-ghost">← {t("blogPost.backToBlog")}</Link>
            <Link to="/rooms" className="btn-primary">{t("blogPost.viewVillas")}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
