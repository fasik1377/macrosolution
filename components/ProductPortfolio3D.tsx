"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, BriefcaseBusiness, Cable, Layers3, ShieldCheck } from "lucide-react";
import { useRef } from "react";

const portfolioItems = [
  {
    id: "gims",
    title: "GIMS",
    description:
      "A comprehensive General Insurance Management System built to manage underwriting, claims, renewals and operational workflows with speed and control.",
    icon: ShieldCheck,
    accent: "from-[#063b2f] via-[#12a46f] to-[#8fffd2]",
    glow: "shadow-[0_30px_110px_rgba(31,209,142,0.34)]",
    chipClass: "border-cyan-100/20 bg-white/10 text-white",
    metrics: ["Claims", "Policies", "Control"],
  },
  {
    id: "dms",
    title: "DMS",
    description:
      "A secure document management platform for indexing, retrieval, compliance and enterprise records visibility across teams.",
    icon: Layers3,
    accent: "from-[#201052] via-[#7b2cff] to-[#e4c6ff]",
    glow: "shadow-[0_30px_110px_rgba(148,90,255,0.36)]",
    chipClass: "border-cyan-100/20 bg-white/10 text-white",
    metrics: ["Indexing", "Archive", "Access"],
  },
  {
    id: "primus",
    title: "PRIMUS",
    description:
      "An integrated HR, payroll and workforce management solution built to simplify people operations and business compliance.",
    icon: BriefcaseBusiness,
    accent: "from-[#05325d] via-[#22b8ff] to-[#d9fbff]",
    glow: "shadow-[0_30px_110px_rgba(34,184,255,0.34)]",
    chipClass: "border-cyan-100/20 bg-white/10 text-white",
    metrics: ["HR Core", "Payroll", "Workforce"],
  },
  {
    id: "infra",
    title: "Infrastructure",
    description:
      "Reliable IT infrastructure services covering network foundation, server environments and scalable technology support.",
    icon: Cable,
    accent: "from-[#031129] via-[#0b3b8a] to-[#42a5ff]",
    glow: "shadow-[0_30px_110px_rgba(66,165,255,0.34)]",
    chipClass: "border-cyan-100/20 bg-white/10 text-white",
    metrics: ["Network", "Servers", "Support"],
  },
  {
    id: "erp",
    title: "Enterprise Solutions",
    description:
      "Tailored enterprise systems for operations, productivity and business visibility across industry-specific workflows.",
    icon: Building2,
    accent: "from-[#082f49] via-[#2563eb] to-[#2dd4bf]",
    glow: "shadow-[0_30px_110px_rgba(45,212,191,0.3)]",
    chipClass: "border-cyan-100/20 bg-white/10 text-white",
    metrics: ["ERP", "Insights", "Automation"],
  },
];

const slidingItems = [...portfolioItems, ...portfolioItems];

export default function ProductPortfolio3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const carouselDepth = useTransform(scrollYProgress, [0, 0.5, 1], [48, 0, -70]);
  const carouselRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [18, 0, -16]);
  const carouselRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-12, 0, 12]);
  const carouselScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.93, 1, 0.95]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-4 text-white">
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.34em] text-cyan-300">
            Product Portfolio
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Software Solutions Built for Business Performance
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/74">
            Explore Macro Solution products designed to optimize workflows, improve control and support digital transformation across critical operations.
          </p>
        </div>

        <div className="relative mt-4 [perspective:2200px]">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#0096FF] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#0096FF] to-transparent" />

          <motion.div
            animate={{ x: ["0%", "-50%"], rotateX: [0, 6, -3, 0], rotateY: [0, -6, 5, 0] }}
            transition={{
              x: { duration: 28, repeat: Infinity, ease: "linear" },
              rotateX: { duration: 14, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 14, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{ y: carouselDepth, rotateX: carouselRotateX, rotateY: carouselRotateY, scale: carouselScale }}
            className="flex w-max transform-gpu gap-6 px-2 pb-12 pt-2 [transform-style:preserve-3d] [will-change:transform]"
          >
            {slidingItems.map((item, index) => {
              const Icon = item.icon;
              const delay = (index % portfolioItems.length) * 0.18;

              return (
                <motion.article
                  key={`${item.id}-${index}`}
                  initial={{ opacity: 0, y: 36, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  animate={{ y: [0, -16, 0], rotateZ: [0, 1.2, 0, -1.2, 0], rotateX: [0, 10, -5, 0], rotateY: index % 2 === 0 ? [0, -12, 8, 0] : [0, 12, -8, 0], scale: [1, 1.03, 1] }}
                  whileHover={{ y: -24, rotateX: 24, rotateY: index % 2 === 0 ? -28 : 28, scale: 1.1 }}
                  transition={{
                    opacity: { duration: 0.55, delay: (index % portfolioItems.length) * 0.08 },
                    y: { duration: 6.2, repeat: Infinity, ease: "easeInOut", delay },
                    rotateZ: { duration: 6.2, repeat: Infinity, ease: "easeInOut", delay },
                    rotateX: { duration: 7.2, repeat: Infinity, ease: "easeInOut", delay: delay + 0.05 },
                    rotateY: { duration: 7.2, repeat: Infinity, ease: "easeInOut", delay: delay + 0.08 },
                    scale: { duration: 6.2, repeat: Infinity, ease: "easeInOut", delay },
                  }}
                  className={`group relative flex h-[220px] w-[220px] shrink-0 transform-gpu items-center justify-center rounded-full border border-white/24 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),rgba(255,255,255,0.02)_34%,rgba(3,10,28,0.12)_76%)] backdrop-blur-md [backface-visibility:hidden] [transform-style:preserve-3d] [will-change:transform] md:h-[240px] md:w-[240px] ${item.glow}`}
                >
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.accent}`} />
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_28%,rgba(255,255,255,0.82),rgba(255,255,255,0.26)_16%,rgba(255,255,255,0.07)_30%,transparent_42%)] opacity-90" />
                  <div className="absolute inset-[2px] rounded-full bg-[radial-gradient(circle_at_70%_75%,rgba(3,10,28,0.34),rgba(3,10,28,0.1)_24%,transparent_44%)]" />
                  <div className="absolute inset-[6px] rounded-full shadow-[inset_-22px_-28px_48px_rgba(1,8,20,0.3),inset_18px_18px_28px_rgba(255,255,255,0.14)]" />
                  <div className="absolute inset-[16px] rounded-full border border-white/18" />
                  <motion.div
                    animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.8, 0.45] }}
                    transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay }}
                    className="absolute left-[15%] top-[12%] h-16 w-16 rounded-full bg-white/24 blur-xl"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.18, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: delay + 0.1 }}
                    className="absolute left-[24%] top-[20%] h-6 w-6 rounded-full bg-cyan-50/58 blur-[1px]"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.16, 1], y: [0, -3, 0] }}
                    transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: delay + 0.14 }}
                    className="absolute right-[16%] top-[18%] h-8 w-8 rounded-full border border-cyan-100/16 bg-cyan-100/10"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.14, 1], y: [0, -2, 0] }}
                    transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: delay + 0.22 }}
                    className="absolute bottom-[18%] left-[20%] h-10 w-10 rounded-full border border-cyan-100/10 bg-white/6"
                  />
                  <div className="absolute bottom-[14%] right-[18%] h-12 w-12 rounded-full bg-[radial-gradient(circle,rgba(8,22,52,0.4),transparent_70%)] blur-md" />
                  <motion.div
                    animate={{ scale: [1, 1.22, 1], opacity: [0.4, 0.85, 0.4] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: delay + 0.18 }}
                    className="absolute bottom-[13%] right-[21%] h-6 w-6 rounded-full bg-cyan-100/34 blur-[2px]"
                  />
                  <motion.div
                    animate={{ rotate: [0, 360], opacity: [0.18, 0.34, 0.18] }}
                    transition={{ duration: 9.5, repeat: Infinity, ease: "linear", delay }}
                    className="absolute inset-[28px] rounded-full border border-dashed border-cyan-100/16"
                  />
                  <motion.div
                    animate={{ rotate: [360, 0], scale: [0.94, 1.04, 0.94] }}
                    transition={{ duration: 7.8, repeat: Infinity, ease: "linear", delay: delay + 0.12 }}
                    className="absolute inset-[42px] rounded-full border border-cyan-100/10"
                  />
                  <motion.div
                    animate={{ x: ["-130%", "130%"], opacity: [0, 0.8, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "linear", delay: delay + 0.2 }}
                    className="absolute top-1/2 h-px w-24 -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.9),transparent)]"
                  />
                  <div className="absolute inset-x-10 bottom-8 flex items-center justify-center gap-1 opacity-50">
                    {Array.from({ length: 10 }).map((_, gridIndex) => (
                      <motion.span
                        key={`${item.id}-${index}-pulse-${gridIndex}`}
                        animate={{ opacity: [0.35, 1, 0.35], y: [0, -1, 0] }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: gridIndex * 0.08 + delay }}
                        className="h-1.5 w-1.5 rounded-full bg-cyan-50/90"
                      />
                    ))}
                  </div>

                  <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center [transform-style:preserve-3d]">
                    <motion.div
                      animate={{ y: [0, -6, 0], scale: [1, 1.08, 1], rotate: [0, 6, 0] }}
                      transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay }}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-100/28 bg-white/12 text-white shadow-[0_0_18px_rgba(125,211,252,0.28)] [transform:translateZ(38px)]"
                    >
                      <Icon size={20} />
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -8, 0], opacity: [0.88, 1, 0.88], rotateX: [0, 4, 0] }}
                      transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: delay + 0.1 }}
                      className="mt-4 [transform:translateZ(48px)]"
                    >
                      <h3 className="text-lg font-extrabold text-white drop-shadow-[0_10px_24px_rgba(15,23,42,0.36)] md:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-xs leading-5 text-white/94 drop-shadow-[0_8px_18px_rgba(15,23,42,0.28)]">
                        {item.description}
                      </p>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -5, 0], scale: [1, 1.03, 1], rotateZ: [0, 1.2, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay + 0.16 }}
                      className="mt-3 flex flex-wrap items-center justify-center gap-1.5 [transform:translateZ(34px)]"
                    >
                      {item.metrics.map((metric) => (
                        <span
                          key={`${item.id}-${index}-${metric}`}
                          className={`rounded-full border px-2 py-1 text-[9px] font-bold uppercase tracking-[0.18em] ${item.chipClass}`}
                        >
                          {metric}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}




