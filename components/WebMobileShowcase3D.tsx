"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Globe, Layers3, MonitorSmartphone, Rocket, Smartphone, Sparkles } from "lucide-react";
import { useRef } from "react";

const featureCards = [
  {
    title: "Website Development",
    description: "Responsive, modern websites built for credibility, speed, and business growth.",
    icon: Globe,
    className: "from-[#0b5ed7] via-[#083b8a] to-[#36c2ff]",
  },
  {
    title: "Mobile App Development",
    description: "Smooth mobile experiences for Android and iOS with user-first product thinking.",
    icon: Smartphone,
    className: "from-[#7c3aed] via-[#0b5ed7] to-[#4d9fff]",
  },
  {
    title: "UI/UX Systems",
    description: "Clean interfaces, scalable design systems, and engaging digital journeys.",
    icon: Layers3,
    className: "from-[#0f766e] via-[#0891b2] to-[#38bdf8]",
  },
];

const techStacks = [
  {
    title: "Frontend Web",
    icon: "??",
    glow: "from-sky-400 via-cyan-300 to-blue-500",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend and APIs",
    icon: "??",
    glow: "from-blue-500 via-sky-400 to-cyan-200",
    items: ["Node.js", "REST APIs", "Authentication", "Business Logic", "Integrations"],
  },
  {
    title: "Mobile Apps",
    icon: "??",
    glow: "from-cyan-300 via-sky-400 to-indigo-500",
    items: ["React Native", "Android", "iOS", "Cross-platform UI", "App Store Readiness"],
  },
  {
    title: "UI/UX Systems",
    icon: "?",
    glow: "from-sky-300 via-white to-cyan-400",
    items: ["Design Systems", "User Flows", "Interactive Prototypes", "Accessibility", "Conversion-first Layouts"],
  },
];

export default function WebMobileShowcase3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const panelY = useTransform(scrollYProgress, [0, 0.5, 1], [120, 0, -120]);
  const panelRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -12]);
  const panelRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-16, 0, 12]);
  const leftCardY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -80]);
  const rightCardY = useTransform(scrollYProgress, [0, 0.5, 1], [140, 0, -100]);
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 220]);

  return (
    <section ref={sectionRef} className="relative min-h-[240vh] overflow-hidden py-24 text-white">
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(77,159,255,0.18),transparent_26%),radial-gradient(circle_at_82%_74%,rgba(124,58,237,0.18),transparent_26%),linear-gradient(180deg,rgba(3,18,48,0.32),rgba(3,18,48,0.04))]" />

        <motion.div
          aria-hidden="true"
          style={{ rotate: orbitRotate }}
          className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 shadow-[0_0_80px_rgba(77,159,255,0.14)] md:h-[38rem] md:w-[38rem]"
        />

        <div className="container relative z-10 mx-auto grid items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              className="inline-flex rounded-full border border-white/15 bg-white/8 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200 backdrop-blur-md"
            >
              Web & Mobile
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="mt-6 text-4xl font-bold leading-tight md:text-6xl"
            >
              We develop websites and mobile apps with immersive digital experiences.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
              className="mt-6 text-lg leading-8 text-white/72"
            >
              From business websites to feature-rich mobile applications, Macro Solution creates high-performance digital products that look modern, feel intuitive, and help brands scale faster.
            </motion.p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Rocket, label: "Fast launch cycles" },
                { icon: MonitorSmartphone, label: "Cross-device experiences" },
                { icon: Sparkles, label: "Modern UI interactions" },
                { icon: Globe, label: "Business-focused platforms" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-md"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/12 text-cyan-200">
                      <Icon size={20} />
                    </span>
                    <span className="font-medium text-white/88">{item.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative h-[620px] [perspective:1800px]">
            <motion.div
              style={{ y: panelY, rotateX: panelRotateX, rotateY: panelRotateY }}
              className="absolute left-1/2 top-1/2 h-[25rem] w-[min(88vw,34rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 p-5 shadow-[0_40px_120px_rgba(0,0,0,0.28)] backdrop-blur-xl [transform-style:preserve-3d]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%,rgba(77,159,255,0.08))]" />
              <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -left-14 bottom-0 h-44 w-44 rounded-full bg-cyan-300/10 blur-3xl" />

              <div className="relative grid h-full grid-cols-[1.1fr_0.9fr] gap-4 [transform:translateZ(32px)]">
                <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#061a3d]/60 p-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="mt-4 overflow-hidden rounded-[1.2rem] bg-white/90 p-3">
                    <Image
                      src="/web and mobile.jpg"
                      alt="Website and mobile development preview"
                      width={700}
                      height={520}
                      className="h-[17rem] w-full rounded-[1rem] object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <motion.div
                    style={{ y: leftCardY }}
                    className="rounded-[1.6rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.06))] p-5"
                  >
                    <MonitorSmartphone className="text-cyan-200" />
                    <p className="mt-6 text-sm uppercase tracking-[0.3em] text-cyan-200">Digital Build</p>
                    <h3 className="mt-2 text-2xl font-bold">Web + App Solutions</h3>
                    <p className="mt-3 text-sm leading-6 text-white/72">
                      Custom websites, mobile apps, portals, and scalable business platforms.
                    </p>
                  </motion.div>

                  <motion.div
                    style={{ y: rightCardY }}
                    className="rounded-[1.6rem] border border-white/12 bg-[#071c42]/85 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Performance</p>
                      <Sparkles size={18} className="text-cyan-200" />
                    </div>
                    <div className="mt-5 space-y-3">
                      {["Responsive UI", "Smooth Motion", "Clean Architecture"].map((item) => (
                        <div key={item} className="rounded-xl border border-white/10 bg-white/6 px-4 py-3 text-sm font-medium text-white/85">
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {featureCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -12, rotateY: index % 2 === 0 ? -8 : 8, scale: 1.03 }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  className={`absolute z-20 w-[min(72vw,18rem)] rounded-[1.8rem] border border-white/12 bg-gradient-to-br ${card.className} p-5 shadow-[0_25px_80px_rgba(0,0,0,0.28)] [transform-style:preserve-3d] ${
                    index === 0
                      ? "left-0 top-10"
                      : index === 1
                        ? "bottom-8 right-0"
                        : "right-10 top-6 hidden md:block"
                  }`}
                >
                  <Icon className="text-white" />
                  <h3 className="mt-6 text-2xl font-bold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/85">{card.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
