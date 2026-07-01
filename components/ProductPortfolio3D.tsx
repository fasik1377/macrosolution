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

        <div className="relative mt-12 [perspective:1800px]">
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
                  whileHover={{ y: -16, rotateX: 10, rotateY: index % 2 === 0 ? -10 : 10, scale: 1.035 }}
                  className={`group relative min-h-[300px] overflow-hidden border border-white/12 bg-white/8 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.2)] backdrop-blur-xl [transform-style:preserve-3d] ${item.depth}`}
                  style={{ clipPath: "polygon(0 0,90% 0,100% 12%,100% 100%,10% 100%,0 88%)" }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-70`} />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_42%,rgba(255,255,255,0.04))]" />
                  <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.72),transparent)]" />
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-2xl transition duration-500 group-hover:scale-125" />
                  <div className="absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl transition duration-500 group-hover:scale-125" />

                  <div className="relative flex h-full flex-col justify-between [transform-style:preserve-3d]">
                    <div className="flex items-start justify-between gap-5 [transform:translateZ(26px)]">
                      <div className="flex h-16 w-16 items-center justify-center border border-white/18 bg-white/12 text-white shadow-[0_20px_40px_rgba(0,0,0,0.2)] [clip-path:polygon(0_0,100%_0,84%_100%,0_100%)]">
                        <Icon size={28} />
                      </div>
                      <span className="border border-white/14 bg-white/10 px-3 py-2 text-sm font-bold uppercase tracking-[0.36em] text-white/72 [clip-path:polygon(8%_0,100%_0,92%_100%,0_100%)]">
                        {item.number}
                      </span>
                    </div>

                    <div className="mt-8 [transform:translateZ(34px)]">
                      <h3 className="text-3xl font-bold text-white">{item.title}</h3>
                      <p className="mt-4 max-w-md text-base leading-7 text-white/82">{item.description}</p>
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-white/12 pt-5 text-sm font-semibold uppercase tracking-[0.28em] text-white/70 [transform:translateZ(22px)]">
                      <span>Business-ready</span>
                      <div className="flex items-center gap-3">
                        <span className="h-px w-12 bg-white/40" />
                        <Blocks size={18} />
                      </div>
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
