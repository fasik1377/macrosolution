"use client";

import { motion } from "framer-motion";
import { Building2, Factory, GraduationCap, Landmark, ShieldCheck, Store } from "lucide-react";

const industries = [
  {
    title: "Insurance",
    subtitle: "GIMS & Surveyor Portal",
    icon: ShieldCheck,
    accent: "from-cyan-300/60 via-sky-400/40 to-transparent",
    glow: "bg-cyan-300/18",
    depth: "translate-y-0 md:translate-y-8",
  },
  {
    title: "Banking",
    subtitle: "DMS",
    icon: Landmark,
    accent: "from-blue-300/60 via-indigo-400/40 to-transparent",
    glow: "bg-blue-300/18",
    depth: "translate-y-10 md:-translate-y-6",
  },
  {
    title: "Retail",
    subtitle: "M-POS & e-Invoicing",
    icon: Store,
    accent: "from-violet-300/60 via-fuchsia-400/40 to-transparent",
    glow: "bg-violet-300/18",
    depth: "translate-y-4 md:translate-y-12",
  },
  {
    title: "Education",
    subtitle: "Time Attendance",
    icon: GraduationCap,
    accent: "from-emerald-300/60 via-teal-400/40 to-transparent",
    glow: "bg-emerald-300/18",
    depth: "translate-y-8 md:-translate-y-2",
  },
  {
    title: "Manufacturing",
    subtitle: "PRIMUS (Workforce management)",
    icon: Factory,
    accent: "from-amber-300/60 via-orange-400/40 to-transparent",
    glow: "bg-amber-300/18",
    depth: "translate-y-2 md:translate-y-10",
  },
];

export default function IndustriesWeServe3D() {
  return (
    <section className="relative overflow-hidden py-36 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_26%,rgba(77,159,255,0.16),transparent_24%),radial-gradient(circle_at_78%_24%,rgba(56,189,248,0.14),transparent_22%),radial-gradient(circle_at_50%_82%,rgba(11,94,215,0.16),transparent_26%)]" />
      <motion.div
        aria-hidden="true"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8"
      />
      <motion.div
        aria-hidden="true"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/12"
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Industries We Serve
          </p>
          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Trusted Across Multiple Sectors
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">
            Macro Solution powers sector-specific workflows with software platforms designed for operational precision, compliance, and growth.
          </p>
        </div>

        <div className="relative mt-20 [perspective:1800px]">
          <div className="absolute left-1/2 top-1/2 h-[18rem] w-[72%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(77,159,255,0.16),transparent_68%)] blur-3xl" />
          <motion.div
            animate={{ rotateX: [0, 4, 0], rotateY: [0, -4, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-5 [transform-style:preserve-3d]"
          >
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <motion.article
                  key={industry.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={{ y: -16, rotateX: 8, rotateY: index % 2 === 0 ? -10 : 10, scale: 1.03 }}
                  className={`group relative min-h-[320px] overflow-hidden border border-white/12 bg-white/8 p-7 shadow-[0_30px_90px_rgba(0,0,0,0.2)] backdrop-blur-xl [clip-path:polygon(0_0,100%_0,100%_86%,86%_100%,0_100%)] [transform-style:preserve-3d] ${industry.depth}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.accent} opacity-70`} />
                  <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.72),transparent)]" />
                  <div className="absolute bottom-0 right-0 h-20 w-20 border-r border-b border-cyan-300/20" />
                  <motion.div
                    aria-hidden="true"
                    animate={{ opacity: [0.18, 0.36, 0.18], scale: [0.94, 1.08, 0.94] }}
                    transition={{ duration: 4.8 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute -right-8 top-8 h-28 w-28 rounded-full blur-2xl ${industry.glow}`}
                  />

                  <div className="relative flex h-full flex-col justify-between [transform-style:preserve-3d]">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <span className="flex h-16 w-16 items-center justify-center border border-white/16 bg-white/10 text-cyan-200 shadow-[0_18px_44px_rgba(0,0,0,0.18)] [clip-path:polygon(0_0,100%_0,82%_100%,0_100%)] [transform:translateZ(40px)]">
                          <Icon size={30} />
                        </span>
                        <span className="text-right text-4xl font-black text-white/10 [transform:translateZ(22px)]">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="mt-10 text-2xl font-bold [transform:translateZ(36px)]">
                        {industry.title}
                      </h3>
                      <p className="mt-5 max-w-[16rem] whitespace-pre-line text-lg leading-7 text-white/78 [transform:translateZ(28px)]">
                        {industry.subtitle}
                      </p>
                    </div>

                    <div className="mt-10 flex items-center justify-between [transform:translateZ(30px)]">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                        Sector Solution
                      </span>
                      <Building2 size={18} className="text-white/55" />
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
