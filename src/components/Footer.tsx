const links = {
  Shop: ["New Arrivals", "Best Sellers", "Sale", "Gift Cards"],
  Company: ["About Us", "Careers", "Press", "Sustainability"],
  Support: ["Contact Us", "FAQ", "Shipping", "Returns"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const Footer = () => (
  <footer className="bg-card border-t border-border py-16">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <span className="font-display text-xl font-semibold text-foreground">MAISON</span>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
            Curating timeless pieces for the modern individual.
          </p>
        </div>
        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <h4 className="text-sm font-semibold text-foreground mb-4">{title}</h4>
            <ul className="space-y-2.5">
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© 2026 Maison. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {["Instagram", "Twitter", "Pinterest"].map((social) => (
            <a key={social} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {social}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
