import { useState } from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

const ProductCard = ({ product, onAddToCart, onToggleWishlist, isWishlisted }: ProductCardProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [heartAnim, setHeartAnim] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart(product);
    setTimeout(() => setIsAdding(false), 600);
  };

  const handleWishlist = () => {
    setHeartAnim(true);
    onToggleWishlist(product);
    setTimeout(() => setHeartAnim(false), 300);
  };

  return (
    <div className="group hover-lift">
      {/* Image */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary mb-4">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-foreground text-background text-[11px] font-semibold tracking-wide rounded-full">
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          className={`absolute top-3 right-3 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-all ${
            heartAnim ? "animate-heart-pop" : ""
          }`}
          aria-label="Toggle wishlist"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isWishlisted ? "fill-primary text-primary" : "text-muted-foreground"
            }`}
          />
        </button>

        {/* Quick add overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="w-full flex items-center justify-center gap-2 bg-foreground text-background py-3 rounded-xl text-sm font-semibold hover:bg-foreground/90 transition-colors"
          >
            <ShoppingBag className={`w-4 h-4 ${isAdding ? "animate-fly-to-cart" : ""}`} />
            {isAdding ? "Added!" : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <p className="text-xs text-muted-foreground font-medium tracking-wide uppercase">{product.category}</p>
        <h3 className="font-medium text-foreground text-sm lg:text-base leading-snug">{product.name}</h3>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating) ? "fill-warm-gold text-warm-gold" : "text-border"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
