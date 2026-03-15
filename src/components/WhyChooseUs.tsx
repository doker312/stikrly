import { motion } from "framer-motion";
import { Shield, Layers, Eye, Zap } from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "Full-Stack Approach",
    copy: "Most agencies only run ads. We handle the full picture — paid ads, landing pages, CRO, and analytics — so nothing falls through the cracks.",
  },
  {
    icon: Shield,
    title: "Certified & Platform-Partnered",
    copy: "Google Ads certified and Meta Blueprint certified. We stay updated with platform changes so your campaigns are always optimized.",
  },
  {
    icon: Eye,
    title: "100% Transparency",
    copy: "You own your ad accounts. You see every rupee spent. Weekly reports, no jargon, no hidden fees. We believe in earning trust through clarity.",
  },
  {
    icon: Zap,
    title: "Built for Growth",
    copy: "Whether you're spending ₹50K or ₹50L per month, our systems and processes scale with you. Start small, grow fast.",
  },
];

const WhyChooseUs = () => (
  <section className="section-padding" id="why-us">
    <div className="container-main">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl mb-3">Why Work With Us</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
          We're a focused, skilled team that cares about your results as much as you do.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover transition-shadow group"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
              <r.icon size={22} className="text-primary" />
            </div>
            <h3 className="font-bold text-base mb-2">{r.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{r.copy}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
