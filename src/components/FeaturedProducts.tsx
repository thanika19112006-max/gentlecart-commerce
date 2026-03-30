import { useState } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "@/data/products";

interface FeaturedProductsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlist: number[];
}

const tabs = ["All", "Bags", "Watches", "Home", "Shoes", "Tech"];

const FeaturedProducts = ({ products, onAddToCart, onToggleWishlist, wishlist }: FeaturedProductsProps) => {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All" ? products : products.filter((p) => p.category === activeTab);

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">Curated for You</span>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mt-2">Featured Collection</h2>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-1 mb-12 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                activeTab === tab
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlist.includes(product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
