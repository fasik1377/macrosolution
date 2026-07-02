"use client";

import { motion } from "framer-motion";
import { Building2, Sparkles } from "lucide-react";

const clients = [
  {
    name: "The New India Assurance",
    mark: "N",
    sector: "Insurance",
  },
  {
    name: "Pearle Beach Resort & Spa",
    mark: "P",
    sector: "Resort & Spa",
  },
  {
    name: "SICOM",
    mark: "S",
    sector: "Insurance",
  },
  {
    name: "SBI Mauritius",
    mark: "S",
    sector: "Banking",
  },
  {
    name: "Ace Scaffolding",
    mark: "A",
    sector: "Framework & Scaffoldings",
  },
  {
    name: "C Sky Financial Services",
    mark: "C",
    sector: "Accounting Firm",
  },
];

const track = [...clients, ...clients];

export default function Clients3DSlider() {
  return (
    <section className="relative overflow-hidden py-36 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(77,159,255,0.14),transparent_24%),radial-gradient(circle_at_82%_24%,rgba(139,92,246,0.12),transparent_22%),radial-gradient(circle_at_50%_78%,rgba(11,94,215,0.16),transparent_26%)]" />
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

        <div className="relative mt-20 overflow-hidden [perspective:2000px]">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-[#0096FF] via-[#0096FF]/70 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-[#0096FF] via-[#0096FF]/70 to-transparent" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ x: { duration: 26, repeat: Infinity, ease: "linear" } }}
            className="flex w-max gap-5 px-3 py-4 [transform-style:preserve-3d]"
          >
            {track.map((client, index) => {
              const delay = (index % clients.length) * 0.18;

              return (
                <motion.article
                  key={`${client.name}-${index}`}
                  animate={{
                    rotateX: [0, 4, 0],
                    rotateY: [0, -4, 0],
                    scale: [0.94, 1, 0.9],
                    opacity: [0.86, 1, 0.72],
                    filter: ["blur(0px)", "blur(0px)", "blur(1.6px)"],
                  }}
                  transition={{
                    duration: 6.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay,
                    times: [0, 0.62, 1],
                  }}
                  whileHover={{ y: -14, rotateX: 10, rotateY: index % 2 === 0 ? -12 : 12, scale: 1.03, opacity: 1 }}
                  className="group relative flex min-h-[235px] w-[min(78vw,255px)] shrink-0 overflow-hidden rounded-[1.45rem] border border-[#9ed8ff]/18 bg-[#04142f]/78 p-4 shadow-[0_26px_90px_rgba(0,0,0,0.26)] backdrop-blur-lg [transform-style:preserve-3d]"
                >
                  <motion.div
                    animate={{ opacity: [0.82, 0.96, 0.64] }}
                    transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut", delay, times: [0, 0.62, 1] }}
                    className="absolute inset-0 bg-[linear-gradient(145deg,#082a63_0%,#0b3b8a_26%,#06285d_58%,#03132f_100%)]"
                  />
                  <div className="absolute inset-[1px] rounded-[1.35rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03)_22%,rgba(6,23,49,0.14)_54%,rgba(1,8,20,0.52)_100%)]" />
                  <motion.div
                    animate={{ opacity: [0, 0.85, 0] }}
                    transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut", delay, times: [0, 0.18, 1] }}
                    className="absolute inset-[1px] rounded-[1.35rem] border border-cyan-100/10"
                  />
                  <motion.div
                    animate={{ x: ["-135%", "35%", "130%"], opacity: [0, 0.45, 0] }}
                    transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut", delay, times: [0, 0.22, 1] }}
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
                        initial={{ opacity: 0, x: 26, scale: 0.7, rotate: -16 }}
                        animate={{ opacity: [0, 1, 0], x: [26, 0, -26], y: [8, 0, -6], scale: [0.7, 1, 0.76], rotate: [-16, 0, 12] }}
                        transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut", delay, times: [0, 0.24, 1] }}
                        className="relative flex h-14 w-14 items-center justify-center rounded-[0.95rem] border border-cyan-100/16 bg-white/12 shadow-[0_16px_34px_rgba(0,0,0,0.18)] [transform:translateZ(30px)]"
                      >
                        <div className="absolute inset-1 rounded-[0.95rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.24),rgba(255,255,255,0.06))]" />
                        <span className="relative text-xl font-black text-white drop-shadow-[0_8px_18px_rgba(15,23,42,0.26)]">
                          {client.mark}
                        </span>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 18, scale: 0.7 }}
                        animate={{ opacity: [0, 1, 0], x: [18, 0, -22], y: [10, 0, -4], scale: [0.7, 1, 0.82] }}
                        transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut", delay: delay + 0.07, times: [0, 0.25, 1] }}
                        className="flex flex-col items-end gap-3 [transform:translateZ(18px)]"
                      >
                        <div className="rounded-full border border-cyan-100/12 bg-white/8 p-2">
                          <Sparkles size={12} className="text-cyan-100" />
                        </div>
                        <Building2 size={16} className="text-white/35" />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, x: 40, scale: 0.86 }}
                      animate={{ opacity: [0, 1, 0], x: [40, 0, -46], y: [14, 0, -4], scale: [0.86, 1, 0.88] }}
                      transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut", delay: delay + 0.12, times: [0, 0.32, 1] }}
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
                        initial={{ opacity: 0, x: 34, scale: 0.84 }}
                        animate={{ opacity: [0, 1, 0], x: [34, 0, -38], y: [10, 0, -4], scale: [0.84, 1, 0.84] }}
                        transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut", delay: delay + 0.18, times: [0, 0.38, 1] }}
                      >
                        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/66">
                          Sector
                        </p>
                        <p className="mt-2 text-sm text-white/92 drop-shadow-[0_8px_18px_rgba(15,23,42,0.22)] md:text-base">
                          {client.sector}
                        </p>
                      </motion.div>

                      <motion.span
                        initial={{ opacity: 0, x: 22, scale: 0.76 }}
                        animate={{ opacity: [0, 1, 0], x: [22, 0, -28], y: [8, 0, -6], scale: [0.76, 1, 0.78], rotate: [0, 0, -8] }}
                        transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut", delay: delay + 0.24, times: [0, 0.42, 1] }}
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


