"use client";

import { motion } from "framer-motion";
import { Blocks, Building2, BriefcaseBusiness, Cable, Layers3, ShieldCheck } from "lucide-react";

const portfolioItems = [
  {
    id: "gims",
    number: "01",
    title: "GIMS",
    description: "A comprehensive General Insurance Management System built to manage underwriting, claims, renewals and operational workflows with speed and control.",
    icon: ShieldCheck,
    accent: "from-cyan-300/55 via-sky-400/35 to-transparent",
    depth: "md:translate-y-8",
  },
  {
    id: "dms",
    number: "02",
    title: "DMS",
    description: "A secure document management platform for indexing, retrieval, compliance and enterprise records visibility across teams.",
    icon: Layers3,
    accent: "from-violet-300/55 via-fuchsia-400/35 to-transparent",
    depth: "md:-translate-y-2",
  },
  {
    id: "primus",
    number: "03",
    title: "PRIMUS",
    description: "An integrated HR, payroll and workforce management solution built to simplify people operations and business compliance.",
    icon: BriefcaseBusiness,
    accent: "from-emerald-300/55 via-teal-400/35 to-transparent",
    depth: "md:translate-y-10",
  },
  {
    id: "infra",
    number: "04",
    title: "Infrastructure",
    description: "Reliable IT infrastructure services covering network foundation, server environments and scalable technology support.",
    icon: Cable,
    accent: "from-amber-300/55 via-orange-400/35 to-transparent",
    depth: "md:translate-y-0",
  },
  {
    id: "erp",
    number: "05",
    title: "Enterprise Solutions",
    description: "Tailored enterprise systems for operations, productivity and business visibility across industry-specific workflows.",
    icon: Building2,
    accent: "from-blue-300/55 via-indigo-400/35 to-transparent",
    depth: "md:-translate-y-6",
  },
];

export default function ProductPortfolio3D() {
  return (
    <section className="relative overflow-hidden py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(77,159,255,0.14),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(167,139,250,0.14),transparent_24%),radial-gradient(circle_at_50%_78%,rgba(11,94,215,0.16),transparent_26%)]" />

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

        <div className="relative mt-10 [perspective:1800px]">
          <motion.div
            animate={{ rotateX: [0, 4, 0], rotateY: [0, -4, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3 [transform-style:preserve-3d]"
          >
            {portfolioItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  whileHover={{ y: -14, rotateX: 8, rotateY: index % 2 === 0 ? -8 : 8, scale: 1.03 }}
                  className={`group relative min-h-[280px] overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.2)] backdrop-blur-xl [transform-style:preserve-3d] before:absolute before:inset-[1px] before:rounded-[1.85rem] before:border before:border-white/8 before:content-[''] ${item.depth}`}
                  style={{ clipPath: "polygon(0 0,90% 0,100% 12%,100% 100%,10% 100%,0 88%)" }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-70`} />
                  <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.72),transparent)]" />
                  <motion.div
                    aria-hidden="true"
                    animate={{ opacity: [0.16, 0.32, 0.16], scale: [0.94, 1.08, 0.94] }}
                    transition={{ duration: 4.6 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-8 top-8 h-24 w-24 rounded-full bg-white/10 blur-2xl"
                  />

                  <div className="relative [transform-style:preserve-3d]">
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-14 w-14 items-center justify-center rounded-[1.1rem] border border-white/16 bg-white/10 text-white shadow-[0_18px_44px_rgba(0,0,0,0.16)] [transform:translateZ(30px)]">
                        <Icon size={26} />
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200 [transform:translateZ(18px)]">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-bold [transform:translateZ(30px)]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-white/76 [transform:translateZ(24px)]">
                      {item.description}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 [transform:translateZ(20px)]">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-white/60">
                        <Blocks size={16} className="text-cyan-200" />
                        Business-ready product
                      </span>
                    </div>
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