const posts = [
  { id: 1, title: "Udhëzuesi i pushimeve në bregdet", excerpt: "Zbuloni plazhet më të bukura pranë Holiday Villas dhe këshilla praktike për një ditë perfekte nën diell.", cover: "https://picsum.photos/seed/blog1/800/500", date: "05 Shtator 2025" },
  { id: 2, title: "Gastronomia lokale që duhet provuar", excerpt: "Nga frutat e detit te verërat artizanale – listë e shijeve që nuk duhet t’i humbisni.", cover: "https://picsum.photos/seed/blog2/800/500", date: "22 Gusht 2025" },
  { id: 3, title: "Aktivitetet më të mira për familje", excerpt: "Ide për aventura të sigurta dhe argëtuese për të gjithë moshat rreth resortit tonë.", cover: "https://picsum.photos/seed/blog3/800/500", date: "10 Korrik 2025" },
];

export default function Blog() {
  return (
    <section className="py-16 bg-ink/[0.04]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-display mb-8">Blogu ynë</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.id} className="card overflow-hidden">
              <img src={p.cover} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <div className="text-xs text-ink/70 mb-1">{p.date}</div>
                <h2 className="text-lg font-semibold mb-2">{p.title}</h2>
                <p className="text-sm text-ink/70">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
