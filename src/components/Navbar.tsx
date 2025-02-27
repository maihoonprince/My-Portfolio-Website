
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./theme-toggle";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="bg-background border-b py-4 px-4 sm:px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">PR!nce</Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-accent rounded-lg"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link to="/skills" className="hover:text-primary transition-colors">Skills</Link>
            <Link to="/experience" className="hover:text-primary transition-colors">Experience</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link to="/" className="block hover:text-primary transition-colors py-2">Home</Link>
            <Link to="/projects" className="block hover:text-primary transition-colors py-2">Projects</Link>
            <Link to="/skills" className="block hover:text-primary transition-colors py-2">Skills</Link>
            <Link to="/experience" className="block hover:text-primary transition-colors py-2">Experience</Link>
            <Link to="/contact" className="block hover:text-primary transition-colors py-2">Contact</Link>
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
