"use client";

import { motion } from "framer-motion";
import DataNetworkBackground from "@/components/DataNetworkBackground";

type Page3DHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  tone?: "contact" | "testimonials" | "services" | "blog";
};

export default function Page3DHero({ eyebrow, title, description }: Page3DHeroProps) {
  return (
    <section className="relative min-h-[86vh] overflow-hidden bg-dark-header pt-32 text-white">
      <DataNetworkBackground variant="dark" className="absolute inset-0 opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(77,159,255,0.2),transparent_24%),radial-gradient(circle_at_80%_74%,rgba(11,94,215,0.26),transparent_30%),linear-gradient(135deg,#001329_0%,#083B8A_48%,#001B47_100%)]" />
      <div className="absolute left-[8%] top-32 h-40 w-40 rounded-full bg-button-blue/12 blur-3xl" />
      <div className="absolute right-[10%] top-24 h-52 w-52 rounded-full bg-hover-blue/16 blur-3xl" />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.2, 0.45, 0.2], scale: [0.94, 1.04, 0.94] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12 bg-white/6 blur-3xl"
      />
      <div className="container relative z-10 mx-auto grid min-h-[620px] items-center gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-semibold uppercase tracking-[0.28em] text-cyan-300">
            {eyebrow}
          </p>
          <h1 className="mt-6 text-3xl font-bold leading-[1.12] md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl border border-white/12 bg-white/8 p-5 text-base font-medium leading-8 text-white/82 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur md:text-lg [clip-path:polygon(0_0,100%_0,96%_100%,0_100%,4%_50%)]">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -16 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[430px] lg:h-[560px] [perspective:1600px]"
        >
          <motion.div
            aria-hidden="true"
            animate={{ rotateZ: [0, 360] }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-hover-blue/22 shadow-[0_0_80px_rgba(77,159,255,0.22)] md:h-96 md:w-96"
          />
          <motion.div
            aria-hidden="true"
            animate={{ rotateZ: [360, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12 md:h-72 md:w-72"
          />
          <motion.div
            whileHover={{ y: -10, rotateX: 6, rotateY: -6 }}
            className="absolute left-1/2 top-1/2 flex h-52 w-[min(82vw,360px)] -translate-x-1/2 -translate-y-1/2 flex-col justify-between overflow-hidden border border-white/14 bg-white/8 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.22)] backdrop-blur-xl [clip-path:polygon(0_0,100%_0,100%_84%,88%_100%,0_100%)] [transform-style:preserve-3d] md:h-64"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(77,159,255,0.18),transparent_34%,rgba(255,255,255,0.04)_60%,rgba(77,159,255,0.12))]" />
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.72),transparent)]" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/82">Enterprise Motion Layer</p>
              <h3 className="mt-5 text-2xl font-bold">Connected Digital Experience</h3>
              <p className="mt-4 text-sm leading-7 text-white/74 md:text-base">
                A scrollable 3D-styled presentation layer with live network energy instead of canvas rendering.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                "Fast reply",
                "Local support",
                "Custom builds",
              ].map((item) => (
                <div key={item} className="bg-white/10 px-3 py-4 text-sm font-bold text-white shadow-sm [clip-path:polygon(0_0,100%_0,92%_100%,0_100%)]">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
