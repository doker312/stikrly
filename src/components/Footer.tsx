import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-charcoal text-charcoal-foreground">
    <div className="container-main section-padding">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="inline-block">
            <span className="text-2xl font-display font-extrabold">
              <span className="text-primary">DIZI</span>GROWW
            </span>
            <p className="text-[10px] text-charcoal-foreground/50 uppercase tracking-wider mt-0.5">
              Performance Marketing Agency
            </p>
          </Link>
          <p className="mt-4 text-sm text-charcoal-foreground/60 leading-relaxed">
            Leading India-based performance marketing agency. We deliver high ROI through Meta Ads, Google Ads, eCommerce store development, and CRO for global brands.
          </p>
          <p className="mt-3 text-xs text-charcoal-foreground/40">
            Google Certified · Meta Certified
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-sm font-bold mb-4 uppercase tracking-wider text-charcoal-foreground/80">Services</h4>
          <ul className="space-y-2 text-sm text-charcoal-foreground/60">
            <li><Link to="/services" className="hover:text-primary transition-colors">Meta Ads Management</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Google Ads Management</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Conversion Rate Optimization</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Landing Page Design</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Shopify & Ecommerce</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">WordPress Development</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-display text-sm font-bold mb-4 uppercase tracking-wider text-charcoal-foreground/80">Company</h4>
          <ul className="space-y-2 text-sm text-charcoal-foreground/60">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link to="/#why-us" className="hover:text-primary transition-colors">About</Link></li>
            <li><a href="/#audit-form" className="hover:text-primary transition-colors">Contact</a></li>
            <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-sm font-bold mb-4 uppercase tracking-wider text-charcoal-foreground/80">Get In Touch</h4>
          <ul className="space-y-2 text-sm text-charcoal-foreground/60">
            <li>hello@dizigroww.com</li>
            <li>India-Based · Serving Global Clients</li>
          </ul>
          <a href="/#audit-form" className="inline-block mt-4">
            <button className="bg-gradient-to-r from-primary to-primary-deep text-primary-foreground px-5 py-2.5 rounded-full text-xs font-semibold">
              Get Free Audit
            </button>
          </a>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-charcoal-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-foreground/40">
        <span>© {new Date().getFullYear()} DiziGroww · Performance Marketing Agency</span>
        <span>Google & Meta Certified</span>
      </div>
    </div>
  </footer>
);

export default Footer;
