import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

interface TrendingProductsProps {
  products: Product[];
}

const TrendingProducts = ({ products }: TrendingProductsProps) => {
  const trending = products.filter((p) => p.badge === "Best Seller" || p.badge === "Trending").slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">Most Popular</span>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mt-2">Trending Now</h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {trending.map((product, i) => (
            <div
              key={product.id}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer hover-lift"
            >
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-medium tracking-wider uppercase text-primary-foreground/70 mb-1">
                  {product.category}
                </p>
                <h3 className="font-display text-xl lg:text-2xl font-semibold text-primary-foreground mb-1">
                  {product.name}
                </h3>
                <p className="text-sm font-semibold text-primary-foreground">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
