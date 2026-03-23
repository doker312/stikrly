import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, ShoppingBag, ArrowRight } from "lucide-react";

const metaImages = ["/meta-r1.jpg", "/meta-r2.jpg", "/meta-r3.jpg", "/meta-r4.jpg"];
const shopifyImages = ["/shopify-r1.jpg", "/shopify-r2.jpg", "/shopify-r3.jpg", "/shopify-r4.jpg"];

const DashboardResultsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % metaImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="dashboard-results" className="section-padding overflow-hidden bg-background">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            Real Proof. Real Dashboards.
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">What Changed After Working With Us</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            More profit per order. Better conversion rate. Stable growth (not random spikes).
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-7xl mx-auto">
          {/* Column 1: Meta Ads Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 border border-blue-100 shadow-sm">
                <TrendingUp className="text-blue-600 w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">High sales but low profit</h3>
                <p className="text-muted-foreground text-sm flex items-center gap-1.5 mt-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Website + offer + ads
                </p>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden group relative">
              {/* Top Bar Mockup */}
              <div className="bg-secondary/50 border-b border-border px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-muted-foreground font-medium bg-background px-3 py-1 rounded-md border border-border">adsmanager.facebook.com</span>
                </div>
              </div>
              
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full bg-muted/30 overflow-hidden flex items-center justify-center">
                <AnimatePresence>
                  <motion.img 
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    src={metaImages[currentIndex]} 
                    alt={`Meta Ads Dashboard Result ${currentIndex + 1}`} 
                    className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 pointer-events-auto"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />
                </AnimatePresence>
                
                {/* Fallback Text if image is missing/placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/50 pointer-events-none opacity-50 group-hover:opacity-0 transition-opacity">
                  <TrendingUp className="w-16 h-16 mb-4" />
                  <p className="font-medium">Upload Meta Dashboard Screenshot Here</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
              <h4 className="font-semibold text-blue-900 mb-2">The Result</h4>
              <p className="text-blue-800/80 text-sm leading-relaxed">
                Profit increased significantly as we fixed the core foundation of their business, lowering CPAs and focusing purely on the metrics that matter.
              </p>
            </div>
          </motion.div>

          {/* Column 2: Shopify Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center flex-shrink-0 border border-green-100 shadow-sm">
                <ShoppingBag className="text-green-600 w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">High sales but low profit</h3>
                <p className="text-muted-foreground text-sm flex items-center gap-1.5 mt-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Website + offer + ads
                </p>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden group relative">
              {/* Top Bar Mockup */}
              <div className="bg-secondary/50 border-b border-border px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-muted-foreground font-medium bg-background px-3 py-1 rounded-md border border-border">admin.shopify.com</span>
                </div>
              </div>
              
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full bg-muted/30 overflow-hidden flex items-center justify-center">
                <AnimatePresence>
                  <motion.img 
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    src={shopifyImages[currentIndex]} 
                    alt={`Shopify Revenue Dashboard ${currentIndex + 1}`} 
                    className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 pointer-events-auto"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />
                </AnimatePresence>

                 {/* Fallback Text if image is missing/placeholder */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/50 pointer-events-none opacity-50 group-hover:opacity-0 transition-opacity">
                  <ShoppingBag className="w-16 h-16 mb-4" />
                  <p className="font-medium">Upload Shopify Dashboard Screenshot Here</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100">
              <h4 className="font-semibold text-green-900 mb-2">The Result</h4>
              <p className="text-green-800/80 text-sm leading-relaxed">
                Profit increased systematically. Better landing pages combined with smarter ad strategy translated directly into higher margins.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
        >
          <a href="/#audit-form" className="inline-block">
            <button className="bg-foreground text-background px-8 py-4 rounded-full text-base font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 mx-auto">
              Want These Results for Your Brand? Let's Talk <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
            </button>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default DashboardResultsSection;
