import { useState, useEffect } from "react";
import { Search, Heart, ShoppingBag, User, Menu, X, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onAuthClick: () => void;
}

const Header = ({ cartCount, wishlistCount, onAuthClick }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-surface shadow-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="font-display text-xl lg:text-2xl font-semibold tracking-tight text-foreground">
            MAISON
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["New In", "Women", "Men", "Home", "Sale"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-foreground" />
            </button>

            <button className="relative p-2 rounded-full hover:bg-secondary transition-colors" aria-label="Wishlist">
              <Heart className="w-5 h-5 text-foreground" />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button className="relative p-2 rounded-full hover:bg-secondary transition-colors" aria-label="Cart">
              <ShoppingBag className="w-5 h-5 text-foreground" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center animate-scale-in">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={onAuthClick}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5 text-foreground" />
            </button>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Menu"
            >
              {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="animate-fade-in pb-4">
            <div className="flex items-center gap-2 bg-secondary rounded-xl px-4 py-3">
              <Search className="w-4 h-4 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="Search products, categories, brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                autoFocus
              />
              <button className="p-1 hover:bg-muted rounded-lg transition-colors">
                <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden glass-surface border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {["New In", "Women", "Men", "Home", "Sale"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-base font-medium text-foreground py-2 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
