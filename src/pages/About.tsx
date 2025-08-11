import SEO from "@/components/SEO";

const About = () => {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What is VisionCraft?", acceptedAnswer: { "@type": "Answer", text: "VisionCraft is a professional digital vision board to visualize goals." }},
      { "@type": "Question", name: "Is it free?", acceptedAnswer: { "@type": "Answer", text: "Yes, you can start for free and save boards locally." }},
    ]
  };

  return (
    <>
      <SEO title="About VisionCraft" description="Learn about VisionCraft and our mission to help you visualize and achieve your goals." structuredData={faqLd} />
      <main className="container mx-auto px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">About</h1>
          <p className="text-muted-foreground">We believe clarity powers momentum. VisionCraft is designed to be beautiful, simple, and intentional.</p>
        </header>
        <section className="grid md:grid-cols-2 gap-6">
          <article className="rounded-xl border bg-card p-6 shadow-soft">
            <h2 className="font-semibold mb-2">Our Mission</h2>
            <p className="text-muted-foreground">Help creators and professionals maintain focus by turning goals into visual anchors.
            Vision boards are more than aesthetics—they're commitment devices.</p>
          </article>
          <article className="rounded-xl border bg-card p-6 shadow-soft">
            <h2 className="font-semibold mb-2">What’s Next</h2>
            <p className="text-muted-foreground">We’re exploring sharing, printable exports, and guided frameworks. Tell us what you'd love to see.</p>
          </article>
        </section>
      </main>
    </>
  );
};

export default About;