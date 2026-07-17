"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, Sparkles } from "lucide-react";
import { useRef } from "react";

const clients = [
  {
    name: "The New India Assurance",
    mark: "N",
    sector: "Insurance",
    accent: "from-[#0b5ed7] via-[#2563eb] to-[#38bdf8]",
  },
  {
    name: "Pearle Beach Resort & Spa",
    mark: "P",
    sector: "Resort & Spa",
    accent: "from-[#0f766e] via-[#14b8a6] to-[#67e8f9]",
  },
  {
    name: "SICOM",
    mark: "S",
    sector: "Insurance",
    accent: "from-[#7c3aed] via-[#2563eb] to-[#93c5fd]",
  },
  {
    name: "SBI Mauritius",
    mark: "S",
    sector: "Banking",
    accent: "from-[#075985] via-[#0284c7] to-[#7dd3fc]",
  },
  {
    name: "Ace Scaffolding",
    mark: "A",
    sector: "Framework & Scaffoldings",
    accent: "from-[#14532d] via-[#16a34a] to-[#86efac]",
  },
  {
    name: "C Sky Financial Services",
    mark: "C",
    sector: "Accounting Firm",
    accent: "from-[#581c87] via-[#9333ea] to-[#d8b4fe]",
  },
];

const track = [...clients, ...clients];

export default function Clients3DSlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const trackY = useTransform(scrollYProgress, [0, 0.5, 1], [42, 0, -56]);
  const trackRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [14, 0, -14]);
  const trackRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);
  const trackScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.96]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-16 text-white md:py-24">
      <motion.div
        aria-hidden="true"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[56rem] w-[56rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/6"
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.34em] text-cyan-300">
            Our Clients
          </p>
          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Organisations That Trust Us
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/74">
            We are proud to serve leading organisations across Mauritius with reliable software, infrastructure and technology support.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden [perspective:2000px] md:mt-16">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-[#0096FF] via-[#0096FF]/70 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-[#0096FF] via-[#0096FF]/70 to-transparent" />

          <motion.div
            animate={{ x: ["0%", "-50%"], rotateX: [0, 3, -2, 0], rotateY: [0, -3, 2, 0] }}
            transition={{ x: { duration: 48, repeat: Infinity, ease: "linear" }, rotateX: { duration: 18, repeat: Infinity, ease: "easeInOut" }, rotateY: { duration: 18, repeat: Infinity, ease: "easeInOut" } }}
            style={{ y: trackY, rotateX: trackRotateX, rotateY: trackRotateY, scale: trackScale }}
            className="flex w-max gap-5 px-3 py-6 [transform-style:preserve-3d]"
          >
            {track.map((client, index) => {
              const delay = (index % clients.length) * 0.18;

              return (
                <motion.article
                  key={`${client.name}-${index}`}
                  animate={{
                    y: [0, -12, 0, -7, 0],
                    rotateX: [0, 5, -3, 0],
                    rotateY: index % 2 === 0 ? [0, -6, 4, 0] : [0, 6, -4, 0],
                    rotateZ: [0, 1, 0, -1, 0],
                    scale: [0.98, 1.02, 0.99, 1.01, 0.98],
                    opacity: 1,
                  }}
                  transition={{
                    duration: 11.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay,
                    times: [0, 0.24, 0.5, 0.76, 1],
                  }}
                  whileHover={{ y: -22, rotateX: 16, rotateY: index % 2 === 0 ? -18 : 18, scale: 1.06, opacity: 1 }}
                  className={`group relative flex min-h-[235px] w-[min(78vw,255px)] shrink-0 overflow-hidden rounded-[1.45rem] border border-white/22 bg-gradient-to-br ${client.accent} p-4 shadow-[0_26px_90px_rgba(0,0,0,0.24)] backdrop-blur-lg [transform-style:preserve-3d]`}
                >
                  <motion.div
                    animate={{ opacity: [0.24, 0.36, 0.24] }}
                    transition={{ duration: 12.4, repeat: Infinity, ease: "easeInOut", delay, times: [0, 0.62, 1] }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(255,255,255,0.34),transparent_36%),radial-gradient(circle_at_82%_78%,rgba(255,255,255,0.16),transparent_42%)]"
                  />
                  <div className="absolute inset-[1px] rounded-[1.35rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.18),rgba(255,255,255,0.035)_28%,rgba(1,8,20,0.2)_100%)]" />
                  <motion.div
                    animate={{ opacity: [0.22, 0.5, 0.22], scale: [0.98, 1.01, 0.98] }}
                    transition={{ duration: 12.4, repeat: Infinity, ease: "easeInOut", delay, times: [0, 0.18, 1] }}
                    className="absolute inset-[1px] rounded-[1.35rem] border border-cyan-100/10"
                  />
                  <motion.div
                    animate={{ x: ["-135%", "35%", "130%"], opacity: [0, 0.24, 0], skewX: [0, -8, 0] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay, times: [0, 0.22, 1] }}
                    className="absolute inset-y-0 left-0 w-20 bg-[linear-gradient(90deg,transparent,rgba(158,216,255,0.16),transparent)]"
                  />
                  <motion.div
                    animate={{ x: [0, 0, -42], y: [0, 0, -8], opacity: [0.22, 0.28, 0], scale: [0.95, 1, 0.86] }}
                    transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut", delay, times: [0, 0.62, 1] }}
                    className="absolute -right-8 top-4 h-24 w-24 rounded-full bg-cyan-200/14 blur-2xl"
                  />
                  <motion.div
                    animate={{ x: [0, 0, -30], y: [0, 0, 4], opacity: [0.14, 0.2, 0], scale: [0.95, 1, 0.84] }}
                    transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut", delay: delay + 0.08, times: [0, 0.62, 1] }}
                    className="absolute bottom-4 left-4 h-20 w-20 rounded-full bg-sky-300/10 blur-2xl"
                  />
                  <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(196,233,255,0.8),transparent)]" />

                  <div className="relative z-10 flex h-full w-full flex-col justify-between [transform-style:preserve-3d]">
                    <div className="flex items-start justify-between gap-4">
                      <motion.div
                        initial={{ x: 26, scale: 0.7, rotate: -16 }}
                        animate={{ x: [10, 0, -4, 0, -8], y: [7, -4, 0, -3, -5], scale: [0.92, 1.04, 0.98, 1.02, 0.94], rotate: [-6, 3, 0, 4, 5] }}
                        transition={{ duration: 11.5, repeat: Infinity, ease: "easeInOut", delay, times: [0, 0.24, 0.5, 0.76, 1] }}
                        className="relative flex h-14 w-14 items-center justify-center rounded-[0.95rem] border border-cyan-100/16 bg-white/12 shadow-[0_16px_34px_rgba(0,0,0,0.18)] [transform:translateZ(30px)]"
                      >
                        <div className="absolute inset-1 rounded-[0.95rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.24),rgba(255,255,255,0.06))]" />
                        <span className="relative text-xl font-black text-white drop-shadow-[0_8px_18px_rgba(15,23,42,0.26)]">
                          {client.mark}
                        </span>
                      </motion.div>

                      <motion.div
                        initial={{ x: 18, scale: 0.7 }}
                        animate={{ x: [7, 0, -3, 0, -7], y: [6, -3, 0, -2, -4], scale: [0.92, 1.03, 0.97, 1.01, 0.94] }}
                        transition={{ duration: 11.5, repeat: Infinity, ease: "easeInOut", delay: delay + 0.07, times: [0, 0.25, 0.52, 0.78, 1] }}
                        className="flex flex-col items-end gap-3 [transform:translateZ(18px)]"
                      >
                        <div className="rounded-full border border-cyan-100/12 bg-white/8 p-2">
                          <Sparkles size={12} className="text-cyan-100" />
                        </div>
                        <Building2 size={16} className="text-white/35" />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ x: 40, scale: 0.86 }}
                      animate={{ x: [10, 0, -4, 0, -10], y: [8, -4, 0, -2, -5], scale: [0.96, 1.03, 0.98, 1.01, 0.97], rotateX: [0, 3, 0, 2, 0] }}
                      transition={{ duration: 11.5, repeat: Infinity, ease: "easeInOut", delay: delay + 0.12, times: [0, 0.32, 0.56, 0.8, 1] }}
                      className="mt-6 [transform:translateZ(30px)]"
                    >
                      <h3 className="max-w-[11rem] text-lg font-bold leading-tight text-white drop-shadow-[0_10px_24px_rgba(15,23,42,0.3)] md:text-xl">
                        {client.name}
                      </h3>
                      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100/86">
                        Trusted Partner
                      </p>
                    </motion.div>

                    <div className="mt-6 flex items-end justify-between gap-3 [transform:translateZ(24px)]">
                      <motion.div
                        initial={{ x: 34, scale: 0.84 }}
                        animate={{ x: [8, 0, -4, 0, -8], y: [7, -3, 0, -2, -4], scale: [0.96, 1.03, 0.98, 1.01, 0.96] }}
                        transition={{ duration: 11.5, repeat: Infinity, ease: "easeInOut", delay: delay + 0.18, times: [0, 0.38, 0.6, 0.84, 1] }}
                      >
                        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/66">
                          Sector
                        </p>
                        <p className="mt-2 text-sm text-white/92 drop-shadow-[0_8px_18px_rgba(15,23,42,0.22)] md:text-base">
                          {client.sector}
                        </p>
                      </motion.div>

                      <motion.span
                        initial={{ x: 22, scale: 0.76 }}
                        animate={{ x: [6, 0, -3, 0, -6], y: [6, -3, 0, -2, -4], scale: [0.94, 1.03, 0.98, 1.01, 0.95], rotate: [0, 3, 0, -2, -3] }}
                        transition={{ duration: 11.5, repeat: Infinity, ease: "easeInOut", delay: delay + 0.24, times: [0, 0.42, 0.64, 0.86, 1] }}
                        className="rounded-full border border-cyan-100/16 bg-white/10 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white"
                      >
                        Verified
                      </motion.span>
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



