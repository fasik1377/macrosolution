"use client";

import { animate as animateValue, motion, useMotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  Code2,
  Globe,
  Layers3,
  MonitorSmartphone,
  Rocket,
  Smartphone,
  Sparkles,
  Braces,
  FileCode2,
  Cpu,
  Palette,
  AppWindow,
  LayoutGrid,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";

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

type CodeSnippet = { text: string; color: string };

type SnippetTitle = "React Native" | "Next.js" | "TypeScript" | "Tailwind CSS" | "Node.js" | "Laravel" | "Flutter";

type TechStack = {
  title: string;
  icon: LucideIcon;
  glow: string;
};

const techStacks: TechStack[] = [
  { title: "React Native", icon: Smartphone, glow: "from-[#0f766e] via-[#14b8a6] to-[#99f6e4]" },
  { title: "Next.js", icon: AppWindow, glow: "from-[#172554] via-[#2563eb] to-[#93c5fd]" },
  { title: "TypeScript", icon: Braces, glow: "from-[#1e3a8a] via-[#38bdf8] to-[#dff7ff]" },
  { title: "Tailwind CSS", icon: Palette, glow: "from-[#075985] via-[#22d3ee] to-[#cffafe]" },
  { title: "Node.js", icon: Cpu, glow: "from-[#14532d] via-[#22c55e] to-[#bbf7d0]" },
  { title: "Laravel", icon: FileCode2, glow: "from-[#581c87] via-[#a855f7] to-[#f0abfc]" },
  { title: "Flutter", icon: LayoutGrid, glow: "from-[#0c4a6e] via-[#38bdf8] to-[#bae6fd]" },
  { title: "React", icon: Globe, glow: "from-[#1d4ed8] via-[#60a5fa] to-[#dbeafe]" },
  { title: "JavaScript", icon: Code2, glow: "from-[#365314] via-[#84cc16] to-[#ecfccb]" },
  { title: "HTML5", icon: FileCode2, glow: "from-[#312e81] via-[#6366f1] to-[#c4b5fd]" },
  { title: "CSS3", icon: Palette, glow: "from-[#083344] via-[#06b6d4] to-[#a5f3fc]" },
  { title: "Vue.js", icon: LayoutGrid, glow: "from-[#064e3b] via-[#10b981] to-[#a7f3d0]" },
  { title: "Angular", icon: AppWindow, glow: "from-[#1e1b4b] via-[#7c3aed] to-[#ddd6fe]" },
  { title: "Svelte", icon: Sparkles, glow: "from-[#0f172a] via-[#1d4ed8] to-[#7dd3fc]" },
  { title: "Nuxt.js", icon: Globe, glow: "from-[#064e3b] via-[#22c55e] to-[#dcfce7]" },
  { title: "Express.js", icon: Cpu, glow: "from-[#111827] via-[#334155] to-[#93c5fd]" },
  { title: "NestJS", icon: AppWindow, glow: "from-[#4c1d95] via-[#8b5cf6] to-[#e9d5ff]" },
  { title: "MongoDB", icon: LayoutGrid, glow: "from-[#14532d] via-[#16a34a] to-[#bbf7d0]" },
  { title: "PostgreSQL", icon: Cpu, glow: "from-[#1e3a8a] via-[#2563eb] to-[#bfdbfe]" },
  { title: "MySQL", icon: FileCode2, glow: "from-[#0c4a6e] via-[#0284c7] to-[#bae6fd]" },
  { title: "Firebase", icon: Sparkles, glow: "from-[#365314] via-[#a3e635] to-[#f7fee7]" },
  { title: "GraphQL", icon: Braces, glow: "from-[#581c87] via-[#c084fc] to-[#fae8ff]" },
  { title: "Redux", icon: Layers3, glow: "from-[#312e81] via-[#818cf8] to-[#e0e7ff]" },
  { title: "Three.js", icon: Globe, glow: "from-[#0f172a] via-[#1e40af] to-[#60a5fa]" },
  { title: "GSAP", icon: Rocket, glow: "from-[#052e16] via-[#22c55e] to-[#86efac]" },
  { title: "Framer Motion", icon: Sparkles, glow: "from-[#4c1d95] via-[#a78bfa] to-[#ede9fe]" },
  { title: "Django", icon: AppWindow, glow: "from-[#064e3b] via-[#0d9488] to-[#99f6e4]" },
  { title: "Python", icon: Braces, glow: "from-[#172554] via-[#38bdf8] to-[#e0f2fe]" },
  { title: "PHP", icon: FileCode2, glow: "from-[#312e81] via-[#7c3aed] to-[#ddd6fe]" },
  { title: "Swift", icon: Smartphone, glow: "from-[#082f49] via-[#0ea5e9] to-[#bae6fd]" },
  { title: "Kotlin", icon: Smartphone, glow: "from-[#581c87] via-[#8b5cf6] to-[#c4b5fd]" },
  { title: "Dart", icon: Code2, glow: "from-[#0f766e] via-[#2dd4bf] to-[#ccfbf1]" },
];

const stackShape = "polygon(18% 0%, 82% 0%, 100% 16%, 100% 84%, 82% 100%, 18% 100%, 0% 84%, 0% 16%)";

const codeSnippets: Record<SnippetTitle, CodeSnippet[]> = {
  "React Native": [
    { text: "<View>", color: "text-[#61DAFB]" },
    { text: "  <Text>Native UX</Text>", color: "text-[#D4D4D4]" },
    { text: "</View>", color: "text-[#61DAFB]" },
  ],
  "Next.js": [
    { text: "export default", color: "text-[#93C5FD]" },
    { text: " async function", color: "text-[#D4D4D4]" },
    { text: " Page()", color: "text-[#FCD34D]" },
  ],
  TypeScript: [
    { text: "type", color: "text-[#60A5FA]" },
    { text: " AppProps ", color: "text-[#D4D4D4]" },
    { text: "= { ... }", color: "text-[#FCD34D]" },
  ],
  "Tailwind CSS": [
    { text: "className=", color: "text-[#93C5FD]" },
    { text: '"grid gap-4"', color: "text-[#FDE68A]" },
  ],
  "Node.js": [
    { text: "app.get", color: "text-[#86EFAC]" },
    { text: "('/api')", color: "text-[#D4D4D4]" },
    { text: " => {}", color: "text-[#FCD34D]" },
  ],
  Laravel: [
    { text: "Route::get", color: "text-[#FCA5A5]" },
    { text: "('/home'", color: "text-[#D4D4D4]" },
    { text: ", fn()", color: "text-[#FCD34D]" },
  ],
  Flutter: [
    { text: "Widget", color: "text-[#7DD3FC]" },
    { text: " build", color: "text-[#D4D4D4]" },
    { text: "()", color: "text-[#FCD34D]" },
  ],
};

export default function WebMobileShowcase3D() {
  const marqueeX = useMotionValue("0%");
  const marqueeAnimation = useRef<ReturnType<typeof animateValue> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
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
  const stackWrapY = useTransform(scrollYProgress, [0, 0.5, 1], [18, 0, -18]);
  const marqueeDuration = 160;

  useEffect(() => {
    if (shouldReduceMotion) return;

    marqueeAnimation.current = animateValue(marqueeX, ["0%", "-50%"], {
      duration: marqueeDuration,
      repeat: Infinity,
      ease: "linear",
    });

    return () => marqueeAnimation.current?.stop();
  }, [marqueeX, shouldReduceMotion]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-10 text-white md:py-14">
      <div className="relative flex items-start pt-10 md:pt-16">
        <motion.div
          aria-hidden="true"
          style={{ rotate: orbitRotate }}
          className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8 shadow-[0_0_80px_rgba(77,159,255,0.1)] md:h-[38rem] md:w-[38rem]"
        />

        <div className="container relative z-10 mx-auto grid items-start gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl pt-8">
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
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="mt-6 text-4xl font-bold leading-tight md:text-6xl"
            >
              We develop websites and mobile apps with immersive digital experiences.
            </motion.h2>

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
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 backdrop-blur-md"
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

          <div className="relative [perspective:1800px]">
            <motion.div
              style={{ y: panelY, rotateX: panelRotateX, rotateY: panelRotateY }}
              className="relative mx-auto h-[28rem] w-full max-w-[38rem] overflow-hidden rounded-[2.4rem] border border-cyan-100/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 shadow-[0_45px_140px_rgba(0,0,0,0.28)] backdrop-blur-2xl [transform-style:preserve-3d]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_45%,rgba(77,159,255,0.05))]" />
              <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-white/6 blur-3xl" />
              <div className="absolute -left-14 bottom-0 h-44 w-44 rounded-full bg-cyan-300/8 blur-3xl" />

              <div className="relative grid h-full grid-cols-[1.1fr_0.9fr] gap-4 [transform:translateZ(32px)]">
                <motion.div animate={{ y: [0, -8, 0], rotateX: [0, 3, 0], rotateY: [0, -3, 0] }} transition={{ duration: 8.4, repeat: Infinity, ease: "easeInOut" }} className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#061a3d]/34 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <motion.div animate={{ y: [0, -5, 0], scale: [1, 1.015, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="mt-4 overflow-hidden rounded-[1.2rem] bg-white/86 p-3">
                    <Image
                      src="/web-and-mobile.jpg"
                      alt="Website and mobile development preview"
                      width={700}
                      height={520}
                      className="h-[17rem] w-full rounded-[1rem] object-cover"
                    />
                  </motion.div>
                </motion.div>

                <motion.div animate={{ y: [0, 7, 0], rotateX: [0, -3, 0], rotateY: [0, 3, 0] }} transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut", delay: 0.12 }} className="flex flex-col gap-4">
                  <motion.div
                    style={{ y: leftCardY }}
                    className="rounded-[1.6rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] p-5 backdrop-blur-md"
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
                    className="rounded-[1.6rem] border border-white/12 bg-white/[0.05] p-5 backdrop-blur-md"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Performance</p>
                      <Sparkles size={18} className="text-cyan-200" />
                    </div>
                    <div className="mt-5 space-y-3">
                      {["Responsive UI", "Smooth Motion", "Clean Architecture"].map((item) => (
                        <div key={item} className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-medium text-white/85">
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            <div className="relative z-20 mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {featureCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.06 }}
                    className={
                      "min-w-0 rounded-[1.5rem] border border-white/12 bg-gradient-to-br " +
                      card.className +
                      " p-5 shadow-[0_20px_60px_rgba(0,0,0,0.24)]"
                    }
                  >
                    <Icon className="text-white" />
                    <h3 className="mt-4 text-lg font-bold text-white">{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/85">{card.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto mt-[-1vh] w-full max-w-[1500px] px-4 pb-8 pt-8 md:mt-[1vh] md:px-6 md:pb-10 md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ y: stackWrapY }}
          className="overflow-hidden"
        >
          <div className="mb-8 flex flex-col items-start justify-between gap-4 px-3 md:flex-row md:items-end">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                className="text-sm font-semibold uppercase tracking-[0.34em] text-cyan-200/80"
              >
                Tech Stack
              </motion.p>
              <motion.h3
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.42, ease: "easeOut", delay: 0.03 }}
                className="mt-3 text-3xl font-bold text-white md:text-4xl"
              >
                Tools we use to craft fast, modern digital products.
              </motion.h3>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.42, ease: "easeOut", delay: 0.06 }}
              className="max-w-md text-sm leading-6 text-white/70 md:text-right"
            >
              A moving showcase of the frameworks, languages, and platforms behind our web and mobile experiences.
            </motion.p>
          </div>

          <div
            className="relative overflow-x-auto overflow-y-hidden rounded-[1.4rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] px-2 pb-5 pt-12 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onMouseEnter={() => marqueeAnimation.current?.pause()}
            onMouseLeave={() => marqueeAnimation.current?.play()}
          >
            <div className="pointer-events-none absolute inset-0 rounded-[1.4rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_48%,rgba(111,207,255,0.06))]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/60 to-transparent" />
            <div className="pointer-events-none absolute inset-[1px] rounded-[1.35rem] border border-white/8" />
            <motion.div
              style={{ x: marqueeX }}
              className="relative z-10 flex w-max items-center gap-4 px-3 py-4 pr-10 will-change-transform"
            >
              {[...techStacks, ...techStacks].map((stack, index) => {
                const StackIcon = stack.icon;
                const snippets = stack.title in codeSnippets ? codeSnippets[stack.title as SnippetTitle] : [];

                return (
                  <motion.article
                    key={stack.title + "-" + index}
                    animate={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : {
                            y: index % 2 === 0 ? [0, -5, 0] : [0, 5, 0],
                            opacity: [0.92, 1, 0.94],
                          }
                    }
                    whileHover={{ y: -8, scale: 1.1 }}
                    transition={{ duration: 9.8 + (index % 4) * 0.35, repeat: Infinity, ease: "easeInOut", delay: (index % techStacks.length) * 0.03 }}
                    style={{
                      clipPath: stackShape,
                    }}
                    className="group relative h-[10rem] w-[9.25rem] shrink-0 overflow-hidden border border-white/14 text-white shadow-[0_16px_42px_rgba(0,0,0,0.18)] will-change-transform md:h-[10.75rem] md:w-[10rem]"
                  >
                    <div aria-hidden="true" style={{ clipPath: stackShape }} className={"absolute inset-0 bg-gradient-to-br " + stack.glow} />
                    <div aria-hidden="true" style={{ clipPath: stackShape }} className="absolute inset-[1px] bg-[linear-gradient(180deg,rgba(4,17,39,0.02),rgba(4,17,39,0.36))]" />
                    <motion.div
                      animate={shouldReduceMotion ? { opacity: 0.22 } : { opacity: [0.16, 0.32, 0.16] }}
                      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: index * 0.04 }}
                      className="absolute -right-8 -top-8 h-24 w-24 rounded-full border border-white/14 bg-white/10 blur-[1px]"
                    />
                    <motion.div
                      animate={shouldReduceMotion ? { opacity: 0.12 } : { x: ["-130%", "140%"] }}
                      transition={{ duration: marqueeDuration / 2.4, repeat: Infinity, ease: "linear", delay: (index % techStacks.length) * 0.12 }}
                      className="absolute inset-y-3 w-12 skew-x-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)] blur-md"
                    />
                    <div className="absolute inset-x-3 top-2 h-8 rounded-[999px] bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(191,219,254,0.06),transparent)] opacity-80 blur-sm" />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_42%,rgba(125,211,252,0.06))]" />
                    <div className="relative flex h-full flex-col justify-between p-3.5">
                      <div aria-hidden="true" style={{ clipPath: stackShape }} className="pointer-events-none absolute inset-[6px] border border-cyan-100/10" />
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/16 bg-white/14 shadow-[0_10px_24px_rgba(0,0,0,0.18)] backdrop-blur-md transition-transform duration-500 group-hover:scale-105">
                            <StackIcon size={21} className="text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.22)]" />
                          </div>
                        </div>
                        <h4 className="mt-2.5 text-base font-bold tracking-tight text-white md:text-lg">{stack.title}</h4>
                      </div>

                      <div className="rounded-xl border border-white/12 bg-[#031126]/50 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm transition duration-500 group-hover:bg-[#071a3d]/64">
                        <div className="mb-2 flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-rose-400" />
                          <span className="h-2 w-2 rounded-full bg-amber-400" />
                          <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        </div>
                        <div className="space-y-1 font-mono text-[10px] leading-4">
                          {snippets.map((snippet, snippetIndex) => (
                            <span key={stack.title + snippet.text + snippetIndex} className={snippet.color}>
                              {snippet.text}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



