"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, ShieldCheck, Sparkles, Users } from "lucide-react";
import { useRef } from "react";
import DataNetworkBackground from "@/components/DataNetworkBackground";

const orbitLabels = ["Vision", "Trust", "Innovation", "Growth"];
const techStreams = [
  { className: "left-[8%] top-[22%] w-44 rotate-12", delay: 0 },
  { className: "right-[12%] top-[30%] w-56 -rotate-6", delay: 0.9 },
  { className: "left-[18%] bottom-[20%] w-48 -rotate-12", delay: 1.6 },
  { className: "right-[18%] bottom-[16%] w-40 rotate-[18deg]", delay: 2.2 },
];
const floatingDots = [
  "left-[12%] top-[24%] h-2.5 w-2.5",
  "left-[24%] bottom-[26%] h-2 w-2",
  "right-[18%] top-[22%] h-3 w-3",
  "right-[12%] bottom-[22%] h-2.5 w-2.5",
  "left-1/2 top-[18%] h-2 w-2",
];

export default function AboutScrollHero3D({ title, description }: { title: string; description: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const panelY = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);
  const panelRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [18, 0, -10]);
  const panelRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-18, 0, 12]);
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const heroGlowY = useTransform(scrollYProgress, [0, 0.5, 1], [-40, 0, 40]);
  const heroGlowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1.08, 0.99]);
  const panelScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.97]);
  const orbitScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.06]);

  return (
    <section ref={sectionRef} className="relative min-h-[250vh] overflow-hidden text-white">
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden bg-[#0000FF] pt-28">
        <DataNetworkBackground variant="light" className="absolute inset-0 opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(34,211,238,0.2),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(96,165,250,0.26),transparent_22%),radial-gradient(circle_at_80%_74%,rgba(14,165,233,0.18),transparent_30%),linear-gradient(135deg,#0000FF_0%,#06174d_38%,#0018a8_68%,#083b8a_100%)] bg-[length:180%_180%]" />

        <motion.div
          aria-hidden="true"
          style={{ y: heroGlowY, scale: heroGlowScale }}
          animate={{ opacity: [0.14, 0.28, 0.14] }}
          transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-[45%] h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(186,230,253,0.18)_0%,rgba(125,211,252,0.16)_30%,rgba(56,189,248,0.1)_54%,transparent_72%)] blur-2xl md:h-[52rem] md:w-[52rem]"
        />
        <motion.div
          aria-hidden="true"
          animate={{ scale: [1, 1.08, 1], opacity: [0.14, 0.24, 0.14] }}
          transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[12%] top-[14%] h-44 w-44 rounded-full bg-cyan-200/18 blur-3xl md:h-64 md:w-64"
        />
        <motion.div
          aria-hidden="true"
          animate={{ scale: [1, 1.12, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8.6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[10%] bottom-[12%] h-40 w-40 rounded-full bg-sky-300/16 blur-3xl md:h-60 md:w-60"
        />

        {techStreams.map((stream) => (
          <motion.span
            key={stream.className}
            aria-hidden="true"
            animate={{ x: ["-20%", "120%"], opacity: [0, 1, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: stream.delay }}
            className={`absolute h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.05),rgba(255,255,255,0.78),rgba(186,230,253,0.4),transparent)] blur-[1px] ${stream.className}`}
          />
        ))}

        {floatingDots.map((dot, index) => (
          <motion.span
            key={dot}
            aria-hidden="true"
            animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0], opacity: [0.35, 1, 0.35], scale: [1, 1.25, 1] }}
            transition={{ duration: 3.4 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute rounded-full bg-white/70 shadow-[0_0_20px_rgba(255,255,255,0.45)] ${dot}`}
          />
        ))}

        <motion.div
          aria-hidden="true"
          style={{ rotate: orbitRotate, scale: orbitScale }}
          className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/22 shadow-[0_0_90px_rgba(255,255,255,0.12)] md:h-[42rem] md:w-[42rem]"
        >
          <motion.div
            animate={{ rotate: [0, -180, -360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 rounded-full border border-white/16"
          />
        </motion.div>

        <div className="container relative z-10 mx-auto grid min-h-[620px] items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-semibold uppercase tracking-[0.28em] text-cyan-100">About Macro Solution</p>
            <h1 className="mt-6 text-3xl font-bold leading-[1.08] text-white md:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-7 max-w-2xl border border-white/18 bg-white/10 p-5 text-base font-medium leading-8 text-white/88 shadow-[0_18px_45px_rgba(0,0,0,0.12)] backdrop-blur md:text-lg [clip-path:polygon(0_0,100%_0,96%_100%,0_100%,4%_50%)]">
              {description}
            </p>
          </motion.div>

          <div className="relative h-[620px] [perspective:1800px]">
            <motion.div
              style={{ y: panelY, rotateX: panelRotateX, rotateY: panelRotateY, scale: panelScale }}
              animate={{ y: [0, -14, 0], rotateX: [0, 3, 0], rotateY: [0, -5, 0] }}
              transition={{ duration: 6.6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 h-[27rem] w-[min(88vw,38rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border border-white/16 bg-white/10 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.18)] backdrop-blur-xl [transform-style:preserve-3d]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(186,230,253,0.14)_38%,rgba(255,255,255,0.04)_60%,rgba(56,189,248,0.1))]" />
              <motion.div
                aria-hidden="true"
                animate={{ opacity: [0.12, 0.24, 0.12], x: ["-8%", "8%", "-8%"] }}
                transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-y-0 left-[-20%] w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)] skew-x-[-18deg]"
              />
              <div className="relative flex h-full flex-col justify-between [transform:translateZ(26px)]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100/90">Identity Motion Layer</p>
                  <h3 className="mt-5 text-3xl font-bold text-white">Partnership, Innovation, and Long-Term Growth</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/78 md:text-base">
                    A scrollable 3D story that reflects Macro Solution&apos;s vision, reliability, and business-first delivery culture.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {orbitLabels.map((item, index) => (
                    <motion.div
                      key={item}
                      animate={{ y: [0, index % 2 === 0 ? -6 : 6, 0] }}
                      transition={{ duration: 4.4 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}
                      className="rounded-2xl border border-white/14 bg-white/10 px-3 py-4 text-center text-sm font-bold text-white shadow-sm [clip-path:polygon(0_0,100%_0,92%_100%,0_100%)]"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {[
              { icon: Users, title: "Trusted Team", className: "left-0 top-12", color: "from-[#0b5ed7] to-[#4d9fff]" },
              { icon: Lightbulb, title: "Creative Thinking", className: "right-0 top-24", color: "from-[#7c3aed] to-[#0b5ed7]" },
              { icon: ShieldCheck, title: "Reliable Delivery", className: "bottom-10 left-10", color: "from-[#0891b2] to-[#38bdf8]" },
              { icon: Sparkles, title: "Growth Focus", className: "bottom-6 right-8", color: "from-[#0f766e] to-[#22c55e]" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, y: [0, index % 2 === 0 ? -14 : 14, 0], rotateY: [0, index % 2 === 0 ? -10 : 10, 0], rotateX: [0, 6, 0] }}
                  whileHover={{ y: -18, scale: 1.04, rotateY: index % 2 === 0 ? -12 : 12 }}
                  transition={{ duration: 5 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute ${item.className} rounded-[1.8rem] border border-white/18 bg-gradient-to-br ${item.color} p-5 shadow-[0_26px_80px_rgba(0,0,0,0.16)] [transform-style:preserve-3d]`}
                >
                  <Icon className="text-white" />
                  <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
