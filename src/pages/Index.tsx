import { useState } from "react";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import FeaturedProducts from "@/components/FeaturedProducts";
import TrendingProducts from "@/components/TrendingProducts";
import CustomerReviews from "@/components/CustomerReviews";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import { products, type Product } from "@/data/products";
import { toast } from "sonner";

const Index = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [authOpen, setAuthOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartCount((c) => c + 1);
    toast.success(`${product.name} added to cart`);
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) =>
      prev.includes(product.id) ? prev.filter((id) => id !== product.id) : [...prev, product.id]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={cartCount} wishlistCount={wishlist.length} onAuthClick={() => setAuthOpen(true)} />
      <main>
        <HeroCarousel />
        <FeaturedProducts
          products={products}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlist={wishlist}
        />
        <TrendingProducts products={products} />
        <CustomerReviews />
        <Newsletter />
      </main>
      <Footer />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
};

export default Index;
