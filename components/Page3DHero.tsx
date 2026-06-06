"use client";

import { motion } from "framer-motion";
import ThreeSolutionScene from "@/components/ThreeSolutionScene";

type Page3DHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  tone: "contact" | "testimonials";
};

export default function Page3DHero({ eyebrow, title, description, tone }: Page3DHeroProps) {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-[#f7f7f4] pt-32 text-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_16%,rgba(249,115,22,0.18),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(37,99,235,0.14),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f3f2ee_100%)]" />
      <div className="container relative z-10 mx-auto grid min-h-[620px] items-center gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-semibold uppercase tracking-[0.28em] text-orange-600">
            {eyebrow}
          </p>
          <h1 className="mt-6 text-5xl font-bold leading-[1.04] md:text-7xl">
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
