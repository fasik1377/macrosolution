"use client";

import { motion } from "framer-motion";
import ThreeSolutionScene from "@/components/ThreeSolutionScene";

type Page3DHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  tone: "contact" | "testimonials" | "services" | "blog";
};

export default function Page3DHero({ eyebrow, title, description, tone }: Page3DHeroProps) {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-white pt-32 text-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(249,115,22,0.22),transparent_28%),radial-gradient(circle_at_80%_14%,rgba(251,146,60,0.16),transparent_30%),radial-gradient(circle_at_50%_88%,rgba(17,24,39,0.1),transparent_26%),linear-gradient(180deg,#ffffff_0%,#fff7ed_54%,#111827_100%)]" />
      <div className="absolute left-[8%] top-32 h-40 w-40 rounded-full bg-orange-500/12 blur-3xl" />
      <div className="absolute right-[10%] top-24 h-52 w-52 rounded-full bg-orange-300/16 blur-3xl" />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.2, 0.45, 0.2], scale: [0.94, 1.04, 0.94] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 bg-white/20 blur-3xl"
      />
      <div className="container relative z-10 mx-auto grid min-h-[620px] items-center gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-semibold uppercase tracking-[0.28em] text-orange-600">
            {eyebrow}
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -16 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[430px] lg:h-[560px]"
        >
          <ThreeSolutionScene tone={tone} />
          <motion.div
            aria-hidden="true"
            animate={{ opacity: [0.35, 0.72, 0.35], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-300/30 shadow-[0_0_80px_rgba(249,115,22,0.22)] md:h-96 md:w-96"
          />
          <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-white/60 bg-white/70 p-5 shadow-2xl backdrop-blur">
            <div className="grid grid-cols-3 gap-3 text-center">
              {["Fast reply", "Local support", "Custom builds"].map((item) => (
                <div key={item} className="rounded-xl bg-white px-3 py-4 text-sm font-bold text-gray-900 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
