"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Database, MonitorSmartphone, ShieldCheck, Sparkles } from "lucide-react";
import ThreeSolutionScene from "@/components/ThreeSolutionScene";

const orbitItems = ["ERP", "POS", "HRMS", "DMS", "RPA", "Cloud"];

export default function Macro3DHero() {
  const { scrollY } = useScroll();
  const rotateX = useTransform(scrollY, [0, 700], [58, 38]);
  const rotateZ = useTransform(scrollY, [0, 700], [-28, -10]);
  const y = useTransform(scrollY, [0, 700], [0, 90]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-28 text-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(11,94,215,0.2),transparent_24%),radial-gradient(circle_at_84%_10%,rgba(77,159,255,0.18),transparent_26%),radial-gradient(circle_at_50%_80%,rgba(0,40,104,0.13),transparent_24%),linear-gradient(180deg,#F5F9FF_0%,#ffffff_44%,#002868_100%)]" />
      <div className="absolute left-[8%] top-24 h-40 w-40 rounded-full bg-button-blue/14 blur-3xl" />
      <div className="absolute right-[12%] top-28 h-52 w-52 rounded-full bg-hover-blue/18 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-20 h-[360px] overflow-hidden md:top-24 md:h-[390px]">
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 0.24, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-x-0 -top-24 h-[520px]"
        >
          <ThreeSolutionScene />
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/80 to-transparent" />
      </div>
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.18, 0.42, 0.18], scale: [0.92, 1.06, 0.92] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-[44%] h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/45 bg-white/18 blur-3xl md:h-[34rem] md:w-[34rem]"
      />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-dark-header/75 to-transparent" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-5xl text-center"
        >
          <p className="font-semibold uppercase tracking-[0.28em] text-brand-blue">
            Macro Solution Mauritius
          </p>
          <h1 className="mt-5 bg-gradient-to-r from-dark-header via-brand-blue to-dark-header bg-clip-text text-4xl font-bold leading-[1.08] text-transparent md:text-5xl lg:text-6xl">
            Intelligent systems with a more dynamic digital presence.
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
            User friendly ERP, POS, Payroll, HR, mobile, cloud, security, and custom software
            solutions built for productive, competitive, and innovative businesses.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-button-blue px-7 py-4 font-semibold text-white transition hover:bg-hover-blue"
            >
              View products
              <ArrowRight size={18} />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white/70 px-7 py-4 font-semibold backdrop-blur transition hover:border-hover-blue hover:text-button-blue"
            >
              Contact us
            </a>
          </div>
        </motion.div>

        <div className="relative z-20 mx-auto mt-20 h-[440px] max-w-6xl md:mt-24 md:h-[540px]">
          <ThreeSolutionScene />
          <motion.div
            aria-hidden="true"
            animate={{ opacity: [0.45, 0.8, 0.45], scale: [0.96, 1.04, 0.96] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-hover-blue/30 shadow-[0_0_80px_rgba(77,159,255,0.22)] md:h-96 md:w-96"
          />
          <motion.div
            style={{ rotateX, rotateZ, y }}
            initial={{ opacity: 0, scale: 0.86, rotateX: 68, rotateZ: -34 }}
            animate={{ opacity: 1, scale: 1, rotateX: 58, rotateZ: -28 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="pointer-events-none absolute left-1/2 top-6 h-[310px] w-[310px] -translate-x-1/2 rounded-[2rem] border border-white/35 bg-white/20 p-5 shadow-[0_50px_120px_rgba(20,24,35,0.14)] backdrop-blur-sm md:h-[430px] md:w-[430px]"
          >
            <div className="grid h-full grid-cols-2 gap-4">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-2xl bg-brand-blue/90 p-5 text-white shadow-xl"
              >
                <Database />
                <p className="mt-10 text-sm font-semibold uppercase tracking-widest">ERP</p>
                <h3 className="mt-2 text-2xl font-bold">Integrated operations</h3>
              </motion.div>
              <motion.div
                animate={{ y: [8, -4, 8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-2xl bg-gradient-to-br from-button-blue to-dark-header p-5 text-white shadow-xl"
              >
                <MonitorSmartphone />
                <p className="mt-10 text-sm font-semibold uppercase tracking-widest">POS</p>
                <h3 className="mt-2 text-2xl font-bold">Retail ready</h3>
              </motion.div>
              <motion.div
                animate={{ y: [-3, 8, -3] }}
                transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-2xl bg-dark-header/90 p-5 text-white shadow-xl"
              >
                <ShieldCheck />
                <p className="mt-10 text-sm font-semibold uppercase tracking-widest">Security</p>
                <h3 className="mt-2 text-2xl font-bold">Protected systems</h3>
              </motion.div>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-2xl bg-white/90 p-5 text-gray-950 shadow-xl"
              >
                <Sparkles className="text-button-blue" />
                <p className="mt-10 text-sm font-semibold uppercase tracking-widest text-gray-500">RPA</p>
                <h3 className="mt-2 text-2xl font-bold">Automated work</h3>
              </motion.div>
            </div>
          </motion.div>

          {orbitItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: 1,
                scale: [1, 1.08, 1],
                y: [0, index % 2 === 0 ? -12 : 12, 0],
              }}
              transition={{
                opacity: { delay: 0.35 + index * 0.08 },
                scale: { duration: 4.4 + index * 0.25, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 5 + index * 0.35, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute left-1/2 top-1/2 hidden h-16 w-16 items-center justify-center rounded-2xl border border-white bg-white/85 text-sm font-bold shadow-lg backdrop-blur md:flex"
              style={{
                marginLeft: `${Math.cos((index / orbitItems.length) * Math.PI * 2) * 330 - 32}px`,
                marginTop: `${Math.sin((index / orbitItems.length) * Math.PI * 2) * 190 - 32}px`,
              }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
