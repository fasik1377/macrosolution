"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { BarChart3, Boxes, Layers3, ShoppingBag } from "lucide-react";
import { useRef } from "react";
import DataNetworkBackground from "@/components/DataNetworkBackground";

const orbitLabels = ["Core", "Workflow", "Automation", "Analytics"];

export default function ProductsScrollHero3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const panelY = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);
  const panelRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [18, 0, -8]);
  const panelRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-18, 0, 10]);
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 240]);

  return (
    <section ref={sectionRef} className="relative min-h-[250vh] overflow-hidden text-white">
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden bg-dark-header pt-28">
        <DataNetworkBackground variant="dark" className="absolute inset-0 opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(77,159,255,0.2),transparent_24%),radial-gradient(circle_at_80%_74%,rgba(11,94,215,0.26),transparent_30%),linear-gradient(135deg,#001329_0%,#083B8A_48%,#001B47_100%)]" />
        <motion.div
          aria-hidden="true"
          style={{ rotate: orbitRotate }}
          className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12 shadow-[0_0_90px_rgba(77,159,255,0.18)] md:h-[42rem] md:w-[42rem]"
        />

        <div className="container relative z-10 mx-auto grid min-h-[620px] items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-semibold uppercase tracking-[0.28em] text-cyan-300">Products</p>
            <h1 className="mt-6 text-3xl font-bold leading-[1.08] md:text-5xl lg:text-6xl">
              A product ecosystem shaped for control, speed, and visibility.
            </h1>
            <p className="mt-7 max-w-2xl border border-white/12 bg-white/8 p-5 text-base font-medium leading-8 text-white/82 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur md:text-lg [clip-path:polygon(0_0,100%_0,96%_100%,0_100%,4%_50%)]">
              Explore products built to simplify operations, strengthen records, improve compliance, and support faster decisions across the business.
            </p>
          </motion.div>

          <div className="relative h-[620px] [perspective:1800px]">
            <motion.div
              style={{ y: panelY, rotateX: panelRotateX, rotateY: panelRotateY }}
              className="absolute left-1/2 top-1/2 h-[27rem] w-[min(88vw,38rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border border-white/14 bg-white/8 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.28)] backdrop-blur-xl [transform-style:preserve-3d]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(77,159,255,0.18),transparent_34%,rgba(255,255,255,0.04)_60%,rgba(77,159,255,0.12))]" />
              <div className="relative flex h-full flex-col justify-between [transform:translateZ(26px)]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/82">Product Motion Layer</p>
                  <h3 className="mt-5 text-3xl font-bold">Layered Product Architecture</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/74 md:text-base">
                    A scrollable 3D showcase of product layers that connect workflows, automation, transactions, and insights.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {orbitLabels.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/10 px-3 py-4 text-center text-sm font-bold text-white shadow-sm [clip-path:polygon(0_0,100%_0,92%_100%,0_100%)]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {[
              { icon: Boxes, title: "Core Platform", className: "left-0 top-12", color: "from-[#0b5ed7] to-[#4d9fff]" },
              { icon: Layers3, title: "Workflow Layer", className: "right-0 top-20", color: "from-[#7c3aed] to-[#0b5ed7]" },
              { icon: ShoppingBag, title: "Operations", className: "bottom-12 left-10", color: "from-[#0891b2] to-[#38bdf8]" },
              { icon: BarChart3, title: "Analytics", className: "bottom-6 right-8", color: "from-[#0f766e] to-[#22c55e]" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, y: [0, index % 2 === 0 ? -12 : 12, 0] }}
                  transition={{ duration: 5 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute ${item.className} rounded-[1.8rem] border border-white/12 bg-gradient-to-br ${item.color} p-5 shadow-[0_26px_80px_rgba(0,0,0,0.24)]`}
                >
                  <Icon className="text-white" />
                  <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}