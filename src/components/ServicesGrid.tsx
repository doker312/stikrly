import { motion } from "framer-motion";
import { Facebook, Search, BarChart3, Layout, Globe, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Facebook,
    title: "Meta Performance Ads",
    desc: "Full-funnel Facebook & Instagram campaigns that drive leads, sales, and scale profitably.",
    deliverables: ["Lead gen & DPA campaigns", "Creative testing & optimization", "Weekly performance reporting"],
    useCase: "Best for: D2C brands, SaaS, Ecommerce",
    color: "border-l-primary",
    popular: true,
  },
  {
    icon: Search,
    title: "Google Ads Management",
    desc: "Search, Display, Shopping & YouTube ads managed by certified specialists to maximize ROI.",
    deliverables: ["Keyword strategy & bid management", "Ad copy & extensions optimization", "Conversion tracking setup"],
    useCase: "Best for: SaaS, Lead gen, B2B",
    color: "border-l-[hsl(210,80%,50%)]",
    popular: true,
  },
  {
    icon: BarChart3,
    title: "Conversion Rate Optimization",
    desc: "Funnel analysis, UX testing, and landing page redesign to turn more visitors into customers.",
    deliverables: ["Funnel analysis & audit", "A/B & multivariate testing", "Landing page optimization"],
    useCase: "Best for: Ecommerce, SaaS, Lead gen",
    color: "border-l-[hsl(145,60%,40%)]",
  },
  {
    icon: Layout,
    title: "Landing Page Design",
    desc: "High-converting, mobile-first landing pages with analytics integration and fast load times.",
    deliverables: ["Custom design & copywriting", "Mobile-first responsive builds", "Form & CTA optimization"],
    useCase: "Best for: Paid ad campaigns, Product launches",
    color: "border-l-[hsl(35,90%,50%)]",
  },
  {
    icon: ShoppingBag,
    title: "Shopify & Ecommerce",
    desc: "Store setup, product page optimization, and integrations that drive more online sales.",
    deliverables: ["Store setup & configuration", "Product page optimization", "Payment & shipping setup"],
    useCase: "Best for: D2C, Ecommerce, Retail",
    color: "border-l-[hsl(280,60%,55%)]",
  },
  {
    icon: Globe,
    title: "WordPress & Web Development",
    desc: "Custom WordPress sites built for performance, SEO, and conversion. Ongoing support included.",
    deliverables: ["Custom theme development", "SEO-optimized structure", "Speed & performance tuning"],
    useCase: "Best for: Agencies, B2B, Service businesses",
    color: "border-l-[hsl(200,70%,50%)]",
  },
];

const ServicesGrid = () => (
  <section className="section-padding bg-secondary">
    <div className="container-main">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl mb-3">Full-Stack Performance Marketing Solutions</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
          We don't just run ads—we build complete customer acquisition systems. Everything from paid ads
          to landing pages to conversion optimization under one roof.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -3, scale: 1.01 }}
            className={`relative bg-card rounded-2xl p-6 shadow-card border-l-4 ${s.color} hover:shadow-card-hover transition-all group cursor-pointer`}
          >
            {s.popular && (
              <span className="absolute top-4 right-4 bg-primary/10 text-primary text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </span>
            )}
            <s.icon className="text-primary mb-3 group-hover:scale-110 transition-transform" size={26} />
            <h3 className="text-base font-bold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{s.desc}</p>
            <ul className="space-y-1.5 mb-3">
              {s.deliverables.map((d, j) => (
                <li key={j} className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
            <p className="text-[10px] text-muted-foreground/70 uppercase tracking-wider mb-3">{s.useCase}</p>
            <Link
              to="/services"
              className="text-xs text-primary font-semibold hover:underline inline-flex items-center gap-1"
            >
              Learn more →
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
