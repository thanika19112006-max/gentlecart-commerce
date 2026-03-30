import { Star, Quote } from "lucide-react";
import { reviews } from "@/data/products";

const CustomerReviews = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">Testimonials</span>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mt-2">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-card rounded-2xl p-6 border border-border hover-lift"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < review.rating ? "fill-warm-gold text-warm-gold" : "text-border"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{review.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                  {review.avatar}
                </div>
                <span className="text-sm font-medium text-foreground">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
