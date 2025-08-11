import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import t1 from "@/assets/templates/template-1.jpg";
import t2 from "@/assets/templates/template-2.jpg";
import t3 from "@/assets/templates/template-3.jpg";
import t4 from "@/assets/templates/template-4.jpg";

const templates = [
  { id: "classic", image: t1, title: "Classic Lifestyle" },
  { id: "entrepreneur", image: t2, title: "Entrepreneur Focus" },
  { id: "wellness", image: t3, title: "Wellness & Self-care" },
  { id: "travel", image: t4, title: "Travel Dreams" },
];

const Templates = () => {
  const navigate = useNavigate();

  const useTemplate = (tpl: { id: string; image: string; title: string }) => {
    const tiles = [
      { id: crypto.randomUUID(), imageUrl: tpl.image, caption: `${tpl.title} — Top Goals` },
      { id: crypto.randomUUID(), imageUrl: tpl.image, caption: "Daily inspiration" },
      { id: crypto.randomUUID(), imageUrl: tpl.image, caption: "Milestone in 3 months" },
      { id: crypto.randomUUID(), imageUrl: tpl.image, caption: "Milestone in 6 months" },
    ];
    localStorage.setItem("visionTiles", JSON.stringify(tiles));
    navigate("/create");
  };

  return (
    <>
      <SEO
        title="Vision Board Templates"
        description="Choose from professionally designed digital vision board templates to kickstart your board."
      />
      <main className="container mx-auto px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Templates</h1>
          <p className="text-muted-foreground">Pick a starting point. You can customize everything later.</p>
        </header>
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((tpl) => (
            <article key={tpl.id} className="rounded-xl border bg-card shadow-soft overflow-hidden effect-lift">
              <img src={tpl.image} alt={`Vision board template: ${tpl.title}`} className="w-full h-56 object-cover" loading="lazy" />
              <div className="p-4 flex items-center justify-between">
                <h3 className="font-semibold">{tpl.title}</h3>
                <Button variant="hero" size="sm" onClick={() => useTemplate(tpl)}>Use template</Button>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
};

export default Templates;