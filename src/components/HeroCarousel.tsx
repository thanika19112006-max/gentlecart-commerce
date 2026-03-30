import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    subtitle: "Spring Collection 2026",
    title: "Timeless Elegance,\nModern Craft",
    cta: "Shop Now",
  },
  {
    image: hero2,
    subtitle: "Curated Luxuries",
    title: "Jewelry & Watches\nRedefined",
    cta: "Explore",
  },
  {
    image: hero3,
    subtitle: "Self-Care Ritual",
    title: "Premium Skincare\nEssentials",
    cta: "Discover",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-[85vh] lg:h-screen overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            {...(i !== 0 ? { loading: "lazy" as const } : {})}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-foreground/20 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div
            key={current}
            className="max-w-xl animate-fade-in-up"
          >
            <span className="inline-block text-xs lg:text-sm font-medium tracking-[0.2em] uppercase text-primary-foreground/80 mb-4">
              {slides[current].subtitle}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-semibold text-primary-foreground leading-[1.1] mb-6 whitespace-pre-line">
              {slides[current].title}
            </h1>
            <button className="group inline-flex items-center gap-3 bg-primary-foreground text-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              {slides[current].cta}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-primary-foreground" : "w-2 bg-primary-foreground/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors hidden md:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-primary-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors hidden md:flex"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-primary-foreground" />
      </button>
    </section>
  );
};

export default HeroCarousel;
