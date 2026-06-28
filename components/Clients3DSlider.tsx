"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

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

export default function Clients3DSlider() {
  const track = [...clients, ...clients];

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

        <div className="relative mt-20 overflow-hidden [perspective:1800px]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-8 px-4 [transform-style:preserve-3d]"
          >
            {track.map((client, index) => (
              <motion.article
                key={`${client.name}-${index}`}
                whileHover={{ y: -16, rotateX: 10, rotateY: index % 2 === 0 ? -12 : 12, scale: 1.03 }}
                className="group relative flex min-h-[300px] w-[min(86vw,370px)] shrink-0 flex-col justify-between overflow-hidden border border-white/12 bg-white/8 p-7 shadow-[0_34px_110px_rgba(0,0,0,0.22)] backdrop-blur-xl [transform-style:preserve-3d]"
                style={{ clipPath: "polygon(0 18px,18px 0,100% 0,100% calc(100% - 22px),calc(100% - 22px) 100%,0 100%,0 38%,12% 26%)" }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(77,159,255,0.18),transparent_34%,rgba(255,255,255,0.04)_60%,rgba(77,159,255,0.12))]" />
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.72),transparent)]" />
                <div className="absolute right-0 top-0 h-16 w-16 border-r border-t border-cyan-300/22" />
                <div className="absolute bottom-0 left-0 h-16 w-16 border-b border-l border-cyan-300/18" />
                <div className="absolute left-5 top-5 h-10 w-10 border-l border-t border-white/14" />
                <motion.div
                  aria-hidden="true"
                  animate={{ opacity: [0.14, 0.3, 0.14], scale: [0.94, 1.06, 0.94] }}
                  transition={{ duration: 4.8 + (index % clients.length) * 0.35, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-8 top-8 h-24 w-24 rounded-full bg-cyan-300/14 blur-2xl"
                />
                <motion.div
                  aria-hidden="true"
                  animate={{ x: ["-120%", "120%"], opacity: [0, 0.5, 0] }}
                  transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: (index % clients.length) * 0.28 }}
                  className="absolute inset-y-0 left-0 w-20 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)]"
                />

                <div className="relative [transform-style:preserve-3d]">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="flex h-16 w-16 items-center justify-center border border-white/16 bg-white/10 text-2xl font-black text-cyan-100 shadow-[0_18px_44px_rgba(0,0,0,0.16)] [transform:translateZ(30px)]"
                      style={{ clipPath: "polygon(0 10px,10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%)" }}
                    >
                      {client.mark}
                    </span>
                    <div className="flex flex-col items-end gap-3 [transform:translateZ(18px)]">
                      <Building2 size={20} className="text-white/28" />
                      <span className="h-px w-14 bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.8),transparent)]" />
                    </div>
                  </div>

                  <h3 className="mt-8 max-w-[14rem] text-2xl font-bold leading-tight [transform:translateZ(30px)]">
                    {client.name}
                  </h3>
                </div>

                <div className="relative mt-10 flex items-end justify-between gap-4 [transform:translateZ(24px)]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/82">
                      Sector
                    </p>
                    <p className="mt-3 text-lg text-white/76">
                      {client.sector}
                    </p>
                  </div>
                  <span
                    className="border border-white/10 bg-white/8 px-3 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-white/46"
                    style={{ clipPath: "polygon(0 6px,6px 0,100% 0,100% 100%,0 100%)" }}
                  >
                    Trusted
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
