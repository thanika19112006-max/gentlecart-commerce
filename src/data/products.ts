import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  badge?: string;
}

export const products: Product[] = [
  { id: 1, name: "Artisan Leather Tote", price: 285, originalPrice: 340, rating: 4.8, reviews: 124, image: product1, category: "Bags", badge: "Best Seller" },
  { id: 2, name: "Rose Gold Chronograph", price: 520, rating: 4.9, reviews: 89, image: product2, category: "Watches", badge: "New" },
  { id: 3, name: "Amber Glow Candle", price: 48, rating: 4.7, reviews: 203, image: product3, category: "Home" },
  { id: 4, name: "Classic White Sneakers", price: 165, originalPrice: 195, rating: 4.6, reviews: 312, image: product4, category: "Shoes" },
  { id: 5, name: "Ceramic Bud Vase Set", price: 72, rating: 4.5, reviews: 67, image: product5, category: "Home" },
  { id: 6, name: "Eau de Parfum Intense", price: 195, rating: 4.8, reviews: 156, image: product6, category: "Fragrance", badge: "Trending" },
  { id: 7, name: "Studio Wireless Pro", price: 349, originalPrice: 399, rating: 4.7, reviews: 445, image: product7, category: "Tech", badge: "Best Seller" },
  { id: 8, name: "Silk Evening Scarf", price: 120, rating: 4.4, reviews: 78, image: product8, category: "Accessories" },
];

export const reviews = [
  { id: 1, name: "Sarah M.", rating: 5, text: "Absolutely stunning quality. The leather tote exceeded my expectations — the craftsmanship is impeccable.", avatar: "SM" },
  { id: 2, name: "James K.", rating: 5, text: "Fast shipping, beautiful packaging. The watch looks even better in person. Worth every penny.", avatar: "JK" },
  { id: 3, name: "Emily R.", rating: 4, text: "Love the minimalist aesthetic. The candle scent fills the entire room. Will definitely order again.", avatar: "ER" },
  { id: 4, name: "David L.", rating: 5, text: "Premium quality sneakers. Super comfortable right out of the box. The clean design goes with everything.", avatar: "DL" },
];
