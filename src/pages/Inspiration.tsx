import SEO from "@/components/SEO";

const posts = [
  {
    title: "Design a Board You’ll Actually Revisit",
    excerpt: "Keep it clean, intentional, and visible. Ritual beats complexity.",
  },
  {
    title: "Tie Each Tile to a Habit",
    excerpt: "A vision without habits stays a wish. Link images to small daily actions.",
  },
  {
    title: "Quarterly Reset Ritual",
    excerpt: "Refresh your board every 90 days to maintain clarity and momentum.",
  },
];

const Inspiration = () => {
  const blogLd = posts.map((p) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.excerpt,
  }));

  return (
    <>
      <SEO
        title="Inspiration & Tips"
        description="Curated ideas to keep your digital vision board fresh and motivating."
        structuredData={blogLd}
      />
      <main className="container mx-auto px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Inspiration</h1>
          <p className="text-muted-foreground">Short, actionable ideas to elevate your board.</p>
        </header>
        <section className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.title} className="rounded-xl border bg-card p-6 shadow-soft effect-lift">
              <h3 className="font-semibold mb-2">{post.title}</h3>
              <p className="text-muted-foreground text-sm">{post.excerpt}</p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
};

export default Inspiration;