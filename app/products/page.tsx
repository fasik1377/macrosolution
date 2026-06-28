"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Layers3, ShieldCheck, Zap } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductsScrollHero3D from "@/components/ProductsScrollHero3D";
import DataNetworkBackground from "@/components/DataNetworkBackground";
import ProductPortfolio3D from "@/components/ProductPortfolio3D";
import { products } from "@/components/companyProfile";
import { fadeUp, stagger } from "@/components/motion";

const productSignals = [
  { icon: Layers3, label: "Layered Workflows" },
  { icon: Zap, label: "Faster Operations" },
  { icon: ShieldCheck, label: "Better Control" },
  { icon: BarChart3, label: "Clear Visibility" },
];

export default function ProductsPage() {
  return (
    <main className="relative overflow-x-hidden bg-[#031230] text-white">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(10,37,84,0.92),rgba(3,18,48,1)_52%,rgba(2,11,30,1)_100%)]" />
      <DataNetworkBackground variant="dark" className="fixed inset-0 -z-10 opacity-90" />
      <Navbar />
      <ProductsScrollHero3D />

      <ProductPortfolio3D />

      <section className="relative overflow-hidden py-20 text-white [perspective:2000px]">
        <DataNetworkBackground variant="dark" className="opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(77,159,255,0.12),transparent_24%),radial-gradient(circle_at_86%_14%,rgba(11,94,215,0.14),transparent_28%),linear-gradient(180deg,rgba(3,18,48,0.18),rgba(3,18,48,0.06))]" />
        <div className="container relative z-10 mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }} className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.28em] text-cyan-300">Product suite</p>
            <h2 className="mt-5 text-3xl font-bold md:text-5xl">Tools that improve control, speed, and visibility.</h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              Each product is shaped to make daily work easier for teams that need cleaner transactions, stronger records, better compliance, and better operational decisions.
            </p>
          </motion.div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {productSignals.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-md"
                >
                  <Icon size={18} className="text-cyan-200" />
                  <span className="font-medium text-white/86">{item.label}</span>
                </motion.div>
              );
            })}
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product, index) => {
              const Icon = product.icon;

              return (
                <motion.article
                  key={product.title}
                  variants={fadeUp}
                  whileHover={{ y: -18, rotateX: 8, rotateY: index % 2 === 0 ? 8 : -8, scale: 1.03 }}
                  className="group relative overflow-hidden rounded-[1.8rem] border border-white/12 bg-white/8 p-6 shadow-[0_26px_76px_rgba(0,0,0,0.24)] backdrop-blur-xl [transform-style:preserve-3d]"
                >
                  <div className="absolute right-0 top-0 h-28 w-28 bg-button-blue/12 blur-2xl transition duration-500 group-hover:scale-150" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(77,159,255,0.12),transparent_42%,rgba(255,255,255,0.05),rgba(77,159,255,0.08))]" />
                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-hover-blue/70 to-transparent" />
                  <motion.div
                    animate={{ rotateY: [0, 13, 0, -13, 0], y: [0, -4, 0, 4, 0] }}
                    transition={{ duration: 5.5 + index * 0.16, repeat: Infinity, ease: "easeInOut" }}
                    className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-button-blue text-white shadow-[0_18px_45px_rgba(11,94,215,0.28)] [transform:translateZ(34px)]"
                  >
                    <Icon size={28} />
                  </motion.div>
                  <div className="relative mt-6 flex items-start justify-between gap-4 [transform:translateZ(26px)]">
                    <h3 className="text-2xl font-bold">{product.title}</h3>
                    <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">Product</span>
                  </div>
                  <p className="relative mt-4 min-h-24 leading-7 text-white/72">{product.description}</p>
                  <div className="relative mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
                    <span className="text-sm font-medium text-white/52">Business-ready solution</span>
                    <a href="/contact" className="inline-flex items-center gap-2 font-bold text-cyan-200 transition hover:text-white">
                      Enquire now
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 text-white [perspective:1800px]">
        <DataNetworkBackground variant="dark" className="opacity-75" />
        <div className="container mx-auto grid items-center gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] relative z-10">
          <div>
            <p className="font-semibold uppercase tracking-[0.28em] text-cyan-300">Implementation</p>
            <h2 className="mt-5 text-3xl font-bold md:text-5xl">Products backed by practical setup, training, and support.</h2>
          </div>
          <motion.div
            whileHover={{ rotateY: -5, rotateX: 3, scale: 1.015 }}
            className="rounded-[2rem] border border-white/10 bg-white/8 p-8 text-xl leading-9 text-white/82 shadow-[0_32px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl [transform-style:preserve-3d]"
          >
            Macro Solution helps teams choose, configure, and adopt the right product for their workflow, from first discovery through deployment and ongoing support.
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 text-white [perspective:1800px]">
        <DataNetworkBackground variant="dark" className="opacity-70" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-cyan-300">Product Architecture</p>
            <h2 className="mt-5 text-3xl font-bold md:text-5xl">A layered 3D view of business-ready product ecosystems.</h2>
          </div>
          <div className="mt-16 relative h-[34rem]">
            {[
              "Core Platform",
              "User Workflows",
              "Automation",
              "Analytics",
            ].map((layer, index) => (
              <motion.div
                key={layer}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -12, rotateX: 10, rotateY: index % 2 === 0 ? -8 : 8, scale: 1.02 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute left-1/2 w-[min(88vw,34rem)] -translate-x-1/2 rounded-[2rem] border border-white/12 bg-white/8 p-6 text-center shadow-[0_30px_100px_rgba(0,0,0,0.24)] backdrop-blur-xl"
                style={{ top: `${index * 88}px`, zIndex: 10 - index }}
              >
                <h3 className="text-2xl font-bold">{layer}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}