import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Facebook, Search, BarChart3, Layout, Globe, ShoppingBag, Check } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: ShoppingBag, title: "Shopify Development", desc: "Enterprise-grade eCommerce stores built on Shopify, designed to sell more and scale seamlessly across borders.",
    includes: ["Store setup & configuration", "Custom theme design", "Product page optimization", "Payment & shipping setup", "Performance & speed tuning"],
  },
  {
    icon: Globe, title: "WordPress/WooCommerce Development", desc: "Custom WordPress websites and WooCommerce platforms that look stunning and empower B2B and retail growth.",
    includes: ["Custom theme development", "SEO-optimized architecture", "Speed & performance tuning", "Advanced security setup", "Ongoing maintenance"],
  },
  {
    icon: Layout, title: "Landing Page Design & Development", desc: "High-converting, standalone landing pages specifically engineered to capture leads from your paid traffic.",
    includes: ["Custom design & copywriting", "Mobile-first & responsive", "Ultra-fast load times", "A/B testing implementation", "CRM & Analytics integration"],
  },
  {
    icon: BarChart3, title: "Website Redesign & CRO", desc: "We audit and revamp your outdated site to meet modern standards, dramatically improving your conversion rates.",
    includes: ["Full UX/UI audit", "Heatmap & session analysis", "Checkout flow improvements", "Trust factor enhancement", "Multivariate testing"],
  },
  {
    icon: Search, title: "Performance Marketing (Meta + Google Ads)", desc: "We run data-heavy ad campaigns targeting high-intent demographics in Dubai, Singapore, and worldwide.",
    includes: ["Omnichannel campaign strategy", "Data-driven creative direction", "Audience research & targeting", "Bid strategy optimization", "Transparent ROI reporting"],
  },
];

const steps = [
  { step: "01", title: "Free Audit", desc: "We analyze your current marketing and identify opportunities." },
  { step: "02", title: "Research", desc: "Deep dive into your market, competitors, and audience." },
  { step: "03", title: "Launch", desc: "We build and launch your campaigns with precision." },
  { step: "04", title: "Scale", desc: "We optimize, scale what works, and grow your revenue." },
];

const pricing = [
  { name: "Starter", price: "$499", period: "", features: ["Single Landing Page", "5 Dedicated Sections", "Mobile Responsive", "Lead Form Integration"], popular: false },
  { name: "Growth", price: "$999", period: "", features: ["Multi-page Website (Up to 7)", "CMS Setup (WordPress)", "Basic Technical SEO", "Mobile UI Optimized"], popular: true },
  { name: "E-Commerce", price: "$1,799", period: "", features: ["Shopify or WooCommerce", "Up to 50 Products added", "Payment Gateway Integration", "Cart Optimization"], popular: false },
];

const Services = () => (
  <>
    <Navbar />
    <main className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-main text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary text-xs font-semibold uppercase tracking-wider">Premium Web Development & Marketing</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl mt-4 mb-6">Expert Services for Global Brands</motion.h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">End-to-end web architecture and performance marketing solutions to help your business attract, convert, and engage customers at an international scale.</p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding">
        <div className="container-main space-y-20">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <s.icon className="text-primary mb-4" size={36} />
                <h2 className="text-2xl md:text-3xl mb-4">{s.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">
                  {s.includes.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <Check size={16} className="text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="inline-block mt-6">
                  <motion.button whileHover={{ scale: 1.05 }} className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold shadow-md transition-colors">
                    Get a Quote
                  </motion.button>
                </a>
              </div>
              <div className={`bg-secondary rounded-2xl p-12 flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <s.icon size={120} className="text-primary/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary">
        <div className="container-main">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl text-center mb-12">Our Process</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <span className="text-5xl font-display font-bold text-primary/20">{s.step}</span>
                <h3 className="text-lg mt-2 mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="container-main">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl text-center mb-4">Transparent Pricing</motion.h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">Simple, honest pricing. No hidden fees. No long-term contracts.</p>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto xl:px-4">
            {pricing.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-8 ${p.popular ? "bg-charcoal text-charcoal-foreground shadow-xl scale-105" : "bg-card shadow-card border border-border"}`}
              >
                {p.popular && <span className="text-xs font-semibold text-primary uppercase tracking-wider">Most Popular</span>}
                <h3 className={`text-xl mt-2 ${p.popular ? "text-charcoal-foreground" : ""}`}>{p.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-3xl xl:text-4xl font-display font-bold">{p.price}</span>
                  <span className={`text-sm ${p.popular ? "text-charcoal-foreground/60" : "text-muted-foreground"}`}>{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f, j) => (
                    <li key={j} className={`flex items-center gap-2 text-sm ${p.popular ? "text-charcoal-foreground/80" : "text-muted-foreground"}`}>
                      <Check size={14} className="text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/#audit-form">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-3 rounded-full text-sm font-semibold ${p.popular ? "bg-gradient-to-r from-primary to-[hsl(0,100%,63%)] text-primary-foreground" : "border border-border hover:border-primary hover:text-primary transition-colors"}`}
                  >
                    Get Started
                  </motion.button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Services;
