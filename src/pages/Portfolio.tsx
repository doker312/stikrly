import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustSection from "@/components/TrustSection";
import { useMeta } from "@/hooks/useMeta";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

type ProjectType = "All" | "E-commerce" | "Landing Pages" | "Corporate";

const projects = [
  {
    id: 1,
    title: "Aura Aesthetics",
    type: "E-commerce",
    stack: "Shopify",
    result: "Increased conversion rate by 2.4%",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Vertex Financial",
    type: "Corporate",
    stack: "WordPress",
    result: "Launched in 18 days with full CMS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Bolt Energy Drink",
    type: "Landing Pages",
    stack: "React / Tailwind",
    result: "Reduced CPA by 40% driven by CRO",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Lumina Home",
    type: "E-commerce",
    stack: "Shopify Plus",
    result: "Handled 10k+ concurrent Black Friday visitors",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "TechFlow SaaS",
    type: "Landing Pages",
    stack: "Next.js",
    result: "Boosted trial signups by 185%",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1000&auto=format&fit=crop"
  }
];

const filters: ProjectType[] = ["All", "E-commerce", "Landing Pages", "Corporate"];

const Portfolio = () => {
  useMeta({
    title: "Our Work | Web & E-commerce Projects | DiziGroww",
    description: "Explore our portfolio of high-converting E-commerce stores, Corporate websites, and Landing pages built for international clients."
  });

  const [activeFilter, setActiveFilter] = useState<ProjectType>("All");

  const filteredProjects = projects.filter(p => activeFilter === "All" || p.type === activeFilter);

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-background">
        <section className="section-padding">
          <div className="container-main">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
                Our Work
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Designed for Conversion</h1>
              <p className="text-muted-foreground text-lg">
                Browse through our recent projects across various industries and tech stacks.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeFilter === filter 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Grid */}
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                           <div className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full">
                               <ExternalLink size={24} />
                           </div>
                        </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {project.type}
                        </span>
                        <span className="text-xs font-semibold text-muted-foreground border border-border px-2 py-0.5 rounded-md">
                          {project.stack}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm font-medium text-foreground/80 bg-green-500/10 border border-green-500/20 text-green-700 p-3 rounded-lg flex items-center gap-2">
                        🚀 {project.result}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            
            <div className="mt-16 text-center">
              <a href="/contact">
                  <motion.button whileHover={{ scale: 1.05 }} className="bg-foreground text-background px-8 py-4 rounded-full text-base font-bold shadow-lg flex items-center justify-center gap-2 mx-auto">
                    Start Your Project <ArrowRight size={18} />
                  </motion.button>
              </a>
            </div>

          </div>
        </section>
        
        <TrustSection />
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
