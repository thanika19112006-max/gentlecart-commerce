import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-foreground">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/50">Stay Updated</span>
        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-primary-foreground mt-2 mb-4">
          Join the Maison Community
        </h2>
        <p className="text-sm text-primary-foreground/60 max-w-md mx-auto mb-8">
          Subscribe for exclusive access to new arrivals, curated collections, and members-only offers.
        </p>

        <form onSubmit={handleSubmit} className="flex items-center gap-2 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 outline-none focus:border-primary-foreground/40 transition-colors"
          />
          <button
            type="submit"
            className="shrink-0 p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            aria-label="Subscribe"
          >
            {submitted ? <Check className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
