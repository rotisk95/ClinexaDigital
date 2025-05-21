import { useState, useEffect } from "react";
import ClexiaLogo from "./ClexiaLogo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItem {
  title: string;
  href: string;
  isButton?: boolean;
}

const navItems: NavItem[] = [
  { title: "Services", href: "#services" },
  { title: "Portfolio", href: "#portfolio" },
  { title: "About", href: "#about" },
  { title: "Testimonials", href: "#testimonials" },
  { title: "Contact Us", href: "#contact", isButton: true },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll event to add shadow to header when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <header className={`fixed w-full bg-white z-50 ${isScrolled ? "shadow-md" : ""}`}>
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <ClexiaLogo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => 
              item.isButton ? (
                <Button key={index} asChild className="bg-primary hover:bg-primary-dark text-white">
                  <a href={item.href}>{item.title}</a>
                </Button>
              ) : (
                <a 
                  key={index} 
                  href={item.href} 
                  className="text-gray-700 hover:text-primary font-medium transition-colors"
                >
                  {item.title}
                </a>
              )
            )}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-primary focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            {navItems.map((item, index) => 
              item.isButton ? (
                <Button key={index} asChild className="bg-primary hover:bg-primary-dark text-white w-full">
                  <a href={item.href} onClick={closeMobileMenu}>
                    {item.title}
                  </a>
                </Button>
              ) : (
                <a 
                  key={index} 
                  href={item.href} 
                  className="block text-gray-700 hover:text-primary font-medium px-4 py-2"
                  onClick={closeMobileMenu}
                >
                  {item.title}
                </a>
              )
            )}
          </div>
        )}
      </div>
    </header>
  );
}
