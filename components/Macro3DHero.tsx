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
    <section className="relative min-h-screen overflow-hidden bg-[#f7f7f4] pt-28 text-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,126,38,0.18),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(39,101,179,0.16),transparent_26%),linear-gradient(180deg,#ffffff_0%,#f4f3ef_78%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="font-semibold uppercase tracking-[0.28em] text-orange-600">
            Macro Solution Mauritius
          </p>
          <h1 className="mt-6 text-5xl font-bold leading-[1.02] md:text-7xl lg:text-8xl">
            IT solutions that move your business forward.
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
            User friendly ERP, POS, Payroll, HR, mobile, cloud, security, and custom software
            solutions built for productive, competitive, and innovative businesses.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-gray-950 px-7 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
              View products
              <ArrowRight size={18} />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 px-7 py-4 font-semibold backdrop-blur transition hover:border-orange-500 hover:text-orange-600"
            >
              Contact us
            </a>
          </div>
        </motion.div>

        <div className="relative mx-auto mt-12 h-[440px] max-w-6xl md:h-[540px]">
          <ThreeSolutionScene />
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
                className="rounded-2xl bg-orange-500/90 p-5 text-white shadow-xl"
              >
                <Database />
                <p className="mt-10 text-sm font-semibold uppercase tracking-widest">ERP</p>
                <h3 className="mt-2 text-2xl font-bold">Integrated operations</h3>
              </motion.div>
              <motion.div
                animate={{ y: [8, -4, 8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-2xl bg-[#2765b3]/90 p-5 text-white shadow-xl"
              >
                <MonitorSmartphone />
                <p className="mt-10 text-sm font-semibold uppercase tracking-widest">POS</p>
                <h3 className="mt-2 text-2xl font-bold">Retail ready</h3>
              </motion.div>
              <motion.div
                animate={{ y: [-3, 8, -3] }}
                transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-2xl bg-gray-950/90 p-5 text-white shadow-xl"
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
                <Sparkles className="text-orange-600" />
                <p className="mt-10 text-sm font-semibold uppercase tracking-widest text-gray-500">RPA</p>
                <h3 className="mt-2 text-2xl font-bold">Automated work</h3>
              </motion.div>
            </div>
          </motion.div>

          {orbitItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35 + index * 0.08 }}
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
