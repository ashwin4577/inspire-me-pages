const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-background/80">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-2">VisionCraft</h3>
          <p className="text-sm text-muted-foreground">A professional digital vision board to clarify and manifest your goals.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="/templates" className="hover:text-foreground transition-colors">Templates</a></li>
            <li><a href="/inspiration" className="hover:text-foreground transition-colors">Inspiration</a></li>
            <li><a href="/about" className="hover:text-foreground transition-colors">About</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Stay in touch</h4>
          <p className="text-sm text-muted-foreground">Follow our journey as we add more powerful tools.</p>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">© {year} VisionCraft — All rights reserved.</div>
    </footer>
  );
};

export default Footer;