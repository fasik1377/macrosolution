"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { BarChart3, Boxes, Layers3, ShoppingBag } from "lucide-react";
import { useRef } from "react";
import DataNetworkBackground from "@/components/DataNetworkBackground";

const orbitLabels = ["Core", "Workflow", "Automation", "Analytics"];
const techStreams = [
  { className: "left-[6%] top-[20%] w-48 rotate-12", delay: 0 },
  { className: "right-[10%] top-[26%] w-56 -rotate-6", delay: 0.8 },
  { className: "left-[14%] bottom-[22%] w-44 -rotate-12", delay: 1.5 },
  { className: "right-[16%] bottom-[18%] w-40 rotate-[18deg]", delay: 2.2 },
];
const glowDots = [
  "left-[12%] top-[22%] h-2.5 w-2.5",
  "left-[24%] bottom-[22%] h-2 w-2",
  "right-[20%] top-[20%] h-3 w-3",
  "right-[12%] bottom-[24%] h-2.5 w-2.5",
  "left-1/2 top-[16%] h-2 w-2",
];

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
  const orbitScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 1.08]);
  const glowY = useTransform(scrollYProgress, [0, 0.5, 1], [-36, 0, 36]);

  return (
    <section ref={sectionRef} className="relative min-h-[250vh] overflow-hidden text-white">
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden bg-[#0096FF] pt-28">
        <DataNetworkBackground variant="light" className="absolute inset-0 opacity-74" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.18),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(125,211,252,0.24),transparent_22%),radial-gradient(circle_at_80%_74%,rgba(14,165,233,0.2),transparent_30%),linear-gradient(135deg,#57c0ff_0%,#0096FF_42%,#0a8fe8_70%,#68ccff_100%)]" />

        <motion.div
          aria-hidden="true"
          style={{ y: glowY }}
          animate={{ opacity: [0.16, 0.34, 0.16], scale: [0.94, 1.06, 0.94] }}
          transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-[46%] h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(186,230,253,0.2)_0%,rgba(125,211,252,0.18)_28%,rgba(56,189,248,0.1)_52%,transparent_74%)] blur-2xl md:h-[48rem] md:w-[48rem]"
        />

        {techStreams.map((stream) => (
          <motion.span
            key={stream.className}
            aria-hidden="true"
            animate={{ x: ["-18%", "120%"], opacity: [0, 1, 0] }}
            transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut", delay: stream.delay }}
            className={`absolute h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),rgba(255,255,255,0.85),rgba(186,230,253,0.42),transparent)] blur-[1px] ${stream.className}`}
          />
        ))}

        {glowDots.map((dot, index) => (
          <motion.span
            key={dot}
            aria-hidden="true"
            animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0], opacity: [0.32, 1, 0.32], scale: [1, 1.24, 1] }}
            transition={{ duration: 3.4 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute rounded-full bg-white/75 shadow-[0_0_20px_rgba(255,255,255,0.45)] ${dot}`}
          />
        ))}

        <motion.div
          aria-hidden="true"
          style={{ rotate: orbitRotate, scale: orbitScale }}
          className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/18 shadow-[0_0_90px_rgba(255,255,255,0.14)] md:h-[42rem] md:w-[42rem]"
        >
          <motion.div
            animate={{ rotate: [0, -180, -360] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 rounded-full border border-white/14"
          />
        </motion.div>

        <div className="container relative z-10 mx-auto grid min-h-[620px] items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-semibold uppercase tracking-[0.28em] text-cyan-100">Products</p>
            <h1 className="mt-6 text-3xl font-bold leading-[1.08] md:text-5xl lg:text-6xl">
              A product ecosystem shaped for control, speed, and visibility.
            </h1>
            <p className="mt-7 max-w-2xl border border-white/14 bg-white/10 p-5 text-base font-medium leading-8 text-white/88 shadow-[0_18px_45px_rgba(0,0,0,0.16)] backdrop-blur md:text-lg [clip-path:polygon(0_0,100%_0,96%_100%,0_100%,4%_50%)]">
              Explore products built to simplify operations, strengthen records, improve compliance, and support faster decisions across the business.
            </p>
          </motion.div>

          <div className="relative h-[620px] [perspective:1800px]">
            <motion.div
              style={{ y: panelY, rotateX: panelRotateX, rotateY: panelRotateY }}
              animate={{ y: [0, -12, 0], rotateX: [0, 4, 0], rotateY: [0, -6, 0] }}
              transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 h-[27rem] w-[min(88vw,38rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border border-white/14 bg-white/10 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.24)] backdrop-blur-xl [transform-style:preserve-3d]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_34%,rgba(255,255,255,0.04)_60%,rgba(186,230,253,0.12))]" />
              <motion.div
                aria-hidden="true"
                animate={{ opacity: [0.1, 0.24, 0.1], x: ["-8%", "8%", "-8%"] }}
                transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-y-0 left-[-20%] w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)] skew-x-[-18deg]"
              />
              <div className="relative flex h-full flex-col justify-between [transform:translateZ(26px)]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100/88">Product Motion Layer</p>
                  <h3 className="mt-5 text-3xl font-bold">Layered Product Architecture</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/78 md:text-base">
                    A scrollable 3D showcase of product layers that connect workflows, automation, transactions, and insights.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {orbitLabels.map((item, index) => (
                    <motion.div
                      key={item}
                      animate={{ y: index % 2 === 0 ? [0, -6, 0] : [0, 6, 0] }}
                      transition={{ duration: 4.4 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}
                      className="rounded-2xl border border-white/10 bg-white/10 px-3 py-4 text-center text-sm font-bold text-white shadow-sm [clip-path:polygon(0_0,100%_0,92%_100%,0_100%)]"
                    >
                      {item}
                    </motion.div>
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
                  animate={{ opacity: 1, y: [0, index % 2 === 0 ? -14 : 14, 0], rotateY: [0, index % 2 === 0 ? -10 : 10, 0], rotateX: [0, 6, 0] }}
                  whileHover={{ y: -18, scale: 1.04, rotateY: index % 2 === 0 ? -12 : 12 }}
                  transition={{ duration: 5 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute ${item.className} rounded-[1.8rem] border border-white/14 bg-gradient-to-br ${item.color} p-5 shadow-[0_26px_80px_rgba(0,0,0,0.22)] [transform-style:preserve-3d]`}
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
