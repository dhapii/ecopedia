import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf, User } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const navItems = [
  { name: "Education", href: "/education" },
  { name: "Campaign", href: "/campaigns" },
  { name: "Waste Management", href: "/waste-management" },
  { name: "Green Space", href: "/green-space" },
  { name: "Gallery", href: "/gallery" },
  { name: "Products", href: "/products" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary rounded-full p-2">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl lg:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              EcoPedia
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                asChild
                className="text-foreground transition-colors"
              >
                <Link to={item.href}>{item.name}</Link>
              </Button>
            ))}
            <Button
              variant="default"
              onClick={() => navigate("/auth")}
              className="ml-4"
            >
              <User className="w-4 h-4 mr-2" />
              Account
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={handleNavClick}
                className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                navigate("/auth");
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
            >
              <User className="w-4 h-4 inline mr-2" />
              Account
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
