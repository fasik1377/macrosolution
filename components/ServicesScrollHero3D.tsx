"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Radar, Settings2, Workflow } from "lucide-react";
import { useRef } from "react";
import DataNetworkBackground from "@/components/DataNetworkBackground";

const orbitSteps = ["Discover", "Design", "Build", "Optimize"];

export default function ServicesScrollHero3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const platformY = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);
  const platformRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [18, 0, -8]);
  const platformRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-18, 0, 10]);
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 240]);

  return (
    <section ref={sectionRef} className="relative min-h-[112vh] overflow-hidden text-white">
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden bg-[#0000FF] pt-28">
        <DataNetworkBackground variant="light" className="absolute inset-0 opacity-76" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(34,211,238,0.2),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(96,165,250,0.26),transparent_22%),radial-gradient(circle_at_80%_74%,rgba(14,165,233,0.18),transparent_30%),linear-gradient(135deg,#0000FF_0%,#06174d_38%,#0018a8_68%,#083b8a_100%)] bg-[length:180%_180%]" />
        <motion.div
          aria-hidden="true"
          style={{ rotate: orbitRotate }}
          className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/22 shadow-[0_0_90px_rgba(255,255,255,0.14)] md:h-[42rem] md:w-[42rem]"
        />
        <motion.div
          aria-hidden="true"
          animate={{ opacity: [0.16, 0.36, 0.16], scale: [0.94, 1.04, 0.94] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/14 bg-white/8 blur-3xl"
        />

        <div className="container relative z-10 mx-auto grid min-h-[620px] items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-semibold uppercase tracking-[0.28em] text-cyan-300">Services</p>
            <h1 className="mt-6 text-3xl font-bold leading-[1.08] md:text-5xl lg:text-6xl">
              A service system built around strategy, execution, and business flow.
            </h1>
            <p className="mt-7 max-w-2xl border border-white/12 bg-white/8 p-5 text-base font-medium leading-8 text-white/82 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur md:text-lg [clip-path:polygon(0_0,100%_0,96%_100%,0_100%,4%_50%)]">
              Macro Solution delivers ERP, POS, payroll, HRMS, mobile, web, cloud, document management, security, hardware, networks, and custom development services shaped to improve daily operations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.div
                aria-hidden="true"
                animate={{ x: ["-18%", "118%"], opacity: [0, 1, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute left-0 top-[22%] h-px w-48 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.78),rgba(186,230,253,0.42),transparent)] blur-[1px]"
              />
              {[
                { icon: Radar, label: "Business Discovery" },
                { icon: Workflow, label: "Delivery Workflow" },
                { icon: Settings2, label: "Operational Execution" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-md"
                  >
                    <Icon size={18} className="text-cyan-200" />
                    <span className="font-medium text-white/86">{item.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <div className="relative h-[700px] [perspective:1800px]">
            <motion.div
              style={{ y: platformY, rotateX: platformRotateX, rotateY: platformRotateY }}
              className="absolute left-1/2 top-0 h-[27rem] w-[min(88vw,38rem)] -translate-x-1/2 overflow-hidden rounded-[2rem] border border-white/14 bg-white/8 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.28)] backdrop-blur-xl [transform-style:preserve-3d]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(77,159,255,0.18),transparent_34%,rgba(255,255,255,0.04)_60%,rgba(77,159,255,0.12))]" />
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.72),transparent)]" />
              <div className="relative flex h-full flex-col justify-between [transform:translateZ(28px)]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/82">Service Motion Layer</p>
                  <h3 className="mt-5 text-3xl font-bold">Connected Delivery Architecture</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/74 md:text-base">
                    A scrollable 3D services presentation that visualizes how consulting, design, implementation, and optimization work together.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {orbitSteps.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/10 px-3 py-4 text-center text-sm font-bold text-white shadow-sm [clip-path:polygon(0_0,100%_0,92%_100%,0_100%)]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-0 w-[48%] rounded-[1.5rem] border border-white/12 bg-[linear-gradient(135deg,rgba(11,94,215,0.9),rgba(77,159,255,0.8))] p-4 shadow-[0_26px_80px_rgba(11,94,215,0.28)]"
            >
              <Radar className="text-white" />
              <h3 className="mt-3 text-lg font-bold">Discovery</h3>
              <p className="mt-2 text-sm leading-5 text-white/85">Business mapping, need analysis, and practical service alignment.</p>
            </motion.div>

            <motion.div
              className="absolute bottom-0 right-0 w-[48%] rounded-[1.5rem] border border-white/12 bg-[linear-gradient(135deg,rgba(124,58,237,0.88),rgba(11,94,215,0.76))] p-4 shadow-[0_26px_80px_rgba(0,0,0,0.24)]"
            >
              <Workflow className="text-white" />
              <h3 className="mt-3 text-lg font-bold">Execution Flow</h3>
              <p className="mt-2 text-sm leading-5 text-white/85">Design, build, deploy, and optimize through a guided service journey.</p>
            </motion.div>

            {orbitSteps.map((item, index) => (
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
                className="hidden"
                style={{
                  marginLeft: `${Math.cos((index / orbitSteps.length) * Math.PI * 2) * 290 - 32}px`,
                  marginTop: `${Math.sin((index / orbitSteps.length) * Math.PI * 2) * 170 - 32}px`,
                }}
              >
                {item}
              </motion.div>
            ))}

            <motion.div
              animate={{ x: [0, 14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 top-0 hidden items-center gap-2 rounded-full border border-cyan-300/18 bg-white/10 px-5 py-3 text-sm font-semibold text-cyan-200 shadow-[0_18px_60px_rgba(77,159,255,0.16)] backdrop-blur-md xl:inline-flex"
            >
              Scroll to explore
              <ArrowRight size={16} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

