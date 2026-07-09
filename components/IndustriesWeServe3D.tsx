"use client";

import { motion } from "framer-motion";
import { Factory, GraduationCap, Landmark, ShieldCheck, Store } from "lucide-react";

const industries = [
  {
    title: "Insurance",
    subtitle: "GIMS & Surveyor Portal",
    icon: ShieldCheck,
    accent: "from-[#03132f] via-[#082a63] to-[#0b3b8a]",
    glow: "shadow-[0_30px_110px_rgba(44,125,255,0.32)]",
    chipClass: "border-cyan-100/40 bg-white/16 text-white",
  },
  {
    title: "Banking",
    subtitle: "DMS",
    icon: Landmark,
    accent: "from-[#04142f] via-[#0a3270] to-[#0f4fa8]",
    glow: "shadow-[0_30px_110px_rgba(59,130,246,0.3)]",
    chipClass: "border-cyan-100/40 bg-white/16 text-white",
  },
  {
    title: "Retail",
    subtitle: "M-POS & e-Invoicing",
    icon: Store,
    accent: "from-[#051733] via-[#09316b] to-[#0f4d9f]",
    glow: "shadow-[0_30px_110px_rgba(37,99,235,0.32)]",
    chipClass: "border-cyan-100/40 bg-white/16 text-white",
  },
  {
    title: "Education",
    subtitle: "Time Attendance",
    icon: GraduationCap,
    accent: "from-[#04142d] via-[#082b5f] to-[#0d468c]",
    glow: "shadow-[0_30px_110px_rgba(56,189,248,0.28)]",
    chipClass: "border-cyan-100/40 bg-white/16 text-white",
  },
  {
    title: "Manufacturing",
    subtitle: "PRIMUS Workforce Management",
    icon: Factory,
    accent: "from-[#031129] via-[#072658] to-[#0b3d7f]",
    glow: "shadow-[0_30px_110px_rgba(14,116,255,0.28)]",
    chipClass: "border-cyan-100/40 bg-white/10 text-white",
  },
];

const slotPositions = [
  "md:translate-y-0",
  "md:-translate-y-8",
  "md:translate-y-10",
  "md:-translate-y-4",
  "md:translate-y-6",
];

export default function IndustriesWeServe3D() {
  return (
    <section className="relative overflow-hidden py-16 text-white md:py-24">
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

        <div className="relative mt-12 [perspective:2200px] md:mt-16">
          <div className="absolute left-1/2 top-1/2 h-[18rem] w-[72%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(77,159,255,0.16),transparent_68%)] blur-3xl" />

          <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 [transform-style:preserve-3d]">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const delay = index * 0.45;

              return (
                <motion.article
                  key={industry.title}
                  initial={{ opacity: 0, x: 260, scale: 0.88 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  animate={{
                    x: [260, -10, 0, 0],
                    y: [0, 0, -12, 0],
                    scale: [0.88, 1.04, 1, 1],
                    opacity: [0, 1, 1, 1],
                    rotateY: [16, -8, 0, 0],
                  }}
                  transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: [0.22, 1, 0.36, 1],
                    delay,
                    times: [0, 0.46, 0.72, 1],
                    repeatDelay: 0.35,
                  }}
                  whileHover={{ y: -18, rotateX: 18, rotateY: index % 2 === 0 ? -18 : 18, scale: 1.08 }}
                  whileTap={{ scale: 0.97 }}
                  className={`group relative flex h-[220px] w-[220px] shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/26 bg-transparent backdrop-blur-0 [transform-style:preserve-3d] md:h-[240px] md:w-[240px] ${industry.glow} ${slotPositions[index] ?? ""}`}
                >
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${industry.accent}`} />
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_28%,rgba(255,255,255,0.95),rgba(255,255,255,0.35)_16%,rgba(255,255,255,0.12)_30%,transparent_42%)] opacity-95" />
                  <div className="absolute inset-[2px] rounded-full bg-[radial-gradient(circle_at_70%_75%,rgba(3,10,28,0.42),rgba(3,10,28,0.12)_24%,transparent_44%)]" />
                  <div className="absolute inset-[6px] rounded-full shadow-[inset_-26px_-32px_55px_rgba(2,6,23,0.34),inset_18px_18px_30px_rgba(255,255,255,0.18)]" />
                  <div className="absolute inset-[16px] rounded-full border border-white/20" />
                  <div className="absolute left-[15%] top-[12%] h-16 w-16 rounded-full bg-white/38 blur-xl" />
                  <div className="absolute left-[24%] top-[20%] h-6 w-6 rounded-full bg-cyan-50/75 blur-[1px]" />
                  <motion.div
                    animate={{ scale: [1, 1.18, 1], opacity: [0.28, 0.5, 0.28] }}
                    transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay }}
                    className="absolute right-[16%] top-[18%] h-8 w-8 rounded-full border border-white/22 bg-cyan-100/16"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.12, 1], y: [0, -4, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: delay + 0.2 }}
                    className="absolute bottom-[18%] left-[20%] h-10 w-10 rounded-full border border-white/16 bg-white/10"
                  />
                  <div className="absolute bottom-[14%] right-[18%] h-12 w-12 rounded-full bg-[radial-gradient(circle,rgba(8,22,52,0.3),transparent_70%)] blur-md" />
                  <motion.div
                    animate={{ scale: [1, 1.25, 1], opacity: [0.45, 0.8, 0.45] }}
                    transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: delay + 0.1 }}
                    className="absolute bottom-[13%] right-[21%] h-6 w-6 rounded-full bg-cyan-100/60 blur-[2px]"
                  />
                  <div className="absolute inset-x-10 bottom-8 flex items-center justify-center gap-1 opacity-60">
                    {Array.from({ length: 10 }).map((_, gridIndex) => (
                      <motion.span
                        key={`${industry.title}-pulse-${gridIndex}`}
                        animate={{ opacity: [0.45, 1, 0.45], y: [0, -1, 0] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: gridIndex * 0.08 + index * 0.06 }}
                        className="h-1.5 w-1.5 rounded-full bg-white/85"
                      />
                    ))}
                  </div>

                  <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center [transform-style:preserve-3d]">
                    <motion.div
                      animate={{ y: [0, -3, 0], scale: [1, 1.04, 1] }}
                      transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-100/35 bg-white/20 text-white shadow-[0_0_18px_rgba(125,211,252,0.35)] [transform:translateZ(38px)]"
                    >
                      <Icon size={22} />
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -4, 0], opacity: [0.92, 1, 0.92] }}
                      transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: delay + 0.15 }}
                      className="mt-4 [transform:translateZ(48px)]"
                    >
                      <h3 className="text-lg font-extrabold text-white drop-shadow-[0_10px_24px_rgba(15,23,42,0.28)] md:text-xl">
                        {industry.title}
                      </h3>
                      <p className="mt-2 text-xs leading-5 text-white/96 drop-shadow-[0_8px_18px_rgba(15,23,42,0.26)] md:text-sm">
                        {industry.subtitle}
                      </p>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: delay + 0.25 }}
                      className="mt-4 [transform:translateZ(34px)]"
                    >
                      <span className={`rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] ${industry.chipClass}`}>
                        Sector Solution
                      </span>
                    </motion.div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

