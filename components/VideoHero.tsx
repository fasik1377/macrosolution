"use client";

import { motion } from "framer-motion";

export default function VideoHero() {
  return (
    <section className="relative h-screen overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/videos/hero.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="text-white px-6">

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-bold"
          >
            Future Ready
            <span className="block text-orange-500">
              Technology
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="max-w-2xl mx-auto mt-8 text-xl"
          >
            Building intelligent solutions that empower
            businesses to innovate, grow and succeed.
          </motion.p>

        </div>
      </div>
    </section>
  );
}