import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-lg font-extrabold tracking-tight text-gradient">VisionCraft</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" className={({isActive}) => isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground transition-colors"}>Home</NavLink>
          <NavLink to="/templates" className={({isActive}) => isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground transition-colors"}>Templates</NavLink>
          <NavLink to="/inspiration" className={({isActive}) => isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground transition-colors"}>Inspiration</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground transition-colors"}>About</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="sm" className="effect-lift">
            <Link to="/create">Create your board</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;