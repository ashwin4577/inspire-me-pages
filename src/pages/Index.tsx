import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero/hero-gradient-abstract.jpg";
import { Link, useNavigate } from "react-router-dom";
import template1 from "@/assets/templates/template-1.jpg";
import template2 from "@/assets/templates/template-2.jpg";
import template3 from "@/assets/templates/template-3.jpg";

const Index = () => {
  const navigate = useNavigate();

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VisionCraft",
    url: typeof window !== 'undefined' ? window.location.origin : undefined,
    logo: typeof window !== 'undefined' ? window.location.origin + "/favicon.ico" : undefined
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <>
      <SEO
        title="Digital Vision Board"
        description="Create a professional digital vision board to visualize goals and stay inspired. Templates, inspiration, and a simple creator."
        image={heroBg}
        structuredData={orgLd}
      />
      <main>
        <section className="relative overflow-hidden">
          <div
            className="interactive-spot bg-hero-gradient"
            onMouseMove={onMouseMove}
          >
            <div className="container mx-auto px-4 py-24 grid md:grid-cols-2 items-center gap-10">
              <div>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                  Build your <span className="text-gradient">Digital Vision Board</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Turn your goals into a compelling visual system. Craft boards in minutes, stay focused for months.
                </p>
                <div className="flex items-center gap-3">
                  <Button asChild variant="hero" size="lg" className="effect-lift">
                    <Link to="/create">Start Free</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="effect-lift" onClick={() => navigate('/templates')}>
                    Browse Templates
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img src={heroBg} alt="Abstract gradient hero background for digital vision board" className="w-full rounded-xl shadow-soft" loading="eager" />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why VisionCraft</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="p-6 rounded-xl border bg-card shadow-soft effect-lift">
              <h3 className="font-semibold mb-2">Clarity</h3>
              <p className="text-muted-foreground">Define your focus areas and turn them into a clean, motivating canvas.</p>
            </article>
            <article className="p-6 rounded-xl border bg-card shadow-soft effect-lift">
              <h3 className="font-semibold mb-2">Momentum</h3>
              <p className="text-muted-foreground">Daily visual reminders keep your goals top of mind and energy high.</p>
            </article>
            <article className="p-6 rounded-xl border bg-card shadow-soft effect-lift">
              <h3 className="font-semibold mb-2">Aesthetic</h3>
              <p className="text-muted-foreground">Professionally curated templates that look great on any device.</p>
            </article>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Popular Templates</h2>
            <Button asChild variant="link"><Link to="/templates">View all</Link></Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <img src={template1} alt="Vision board template: lifestyle and goals collage" className="w-full rounded-xl border shadow-soft effect-lift" loading="lazy" />
            <img src={template2} alt="Vision board template: entrepreneurship and financial freedom collage" className="w-full rounded-xl border shadow-soft effect-lift" loading="lazy" />
            <img src={template3} alt="Vision board template: wellness and self-care collage" className="w-full rounded-xl border shadow-soft effect-lift" loading="lazy" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;