import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/products/ProductHero";
import ProductGrid from "@/components/products/ProductGrid";
import ProductStats from "@/components/products/ProductStats";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactive Products & Solutions | VNB Group",
  description: "Explore VNB Group's comprehensive range of interactive technology, solar solutions, and digital learning tools.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ProductHero />
      <ProductGrid />
      <ProductStats />
      
      {/* Featured Innovation Section */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-50 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-[1.1] tracking-tighter">
                  Engineering the <br />
                  <span className="text-vnb-blue italic font-light">Unimaginable</span>
                </h2>
                <p className="text-slate-500 text-xl mb-12 leading-relaxed max-w-xl">
                  Our products are not just tools; they are the bridge to a more 
                  interactive and sustainable future. We combine advanced hardware 
                  with intuitive software to create experiences that empower.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: "Military-grade", desc: "Built for extreme durability" },
                    { title: "Precision Touch", desc: "Industry-leading accuracy" },
                    { title: "Sustainable", desc: "Eco-friendly manufacturing" },
                    { title: "Cloud-native", desc: "Seamless digital ecosystem" }
                  ].map((feature, i) => (
                    <motion.div 
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-2 h-2 rounded-full bg-vnb-blue group-hover:scale-150 transition-transform" />
                        <span className="font-bold text-slate-900 tracking-tight">{feature.title}</span>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative">
               <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group"
               >
                 <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                    alt="Precision Engineering" 
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-vnb-blue/40 via-transparent to-transparent opacity-60" />
                 
                 {/* Floating badge */}
                 <div className="absolute bottom-10 left-10 p-6 glass-card rounded-3xl border border-white/20 backdrop-blur-2xl">
                    <div className="text-white font-bold text-lg mb-1">99.9% Reliability</div>
                    <div className="text-white/70 text-sm">Industrial Standard Certified</div>
                 </div>
               </motion.div>
               
               {/* Decorative elements */}
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-vnb-blue/10 rounded-full blur-3xl animate-pulse" />
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-vnb-green/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
