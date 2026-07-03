"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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
import { useRef, useState } from "react";

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
  { title: "React Native", icon: Smartphone, glow: "from-[#03132f] via-[#082a63] to-[#0b3b8a]" },
  { title: "Next.js", icon: AppWindow, glow: "from-[#04142f] via-[#0a3270] to-[#0f4fa8]" },
  { title: "TypeScript", icon: Braces, glow: "from-[#051935] via-[#0a2f69] to-[#114fa6]" },
  { title: "Tailwind CSS", icon: Palette, glow: "from-[#04152f] via-[#083064] to-[#0d4f97]" },
  { title: "Node.js", icon: Cpu, glow: "from-[#03132d] via-[#08285e] to-[#0d438f]" },
  { title: "Laravel", icon: FileCode2, glow: "from-[#04142f] via-[#0a2b5f] to-[#0c468f]" },
  { title: "Flutter", icon: LayoutGrid, glow: "from-[#051733] via-[#09326e] to-[#0d4fa6]" },
  { title: "React", icon: Globe, glow: "from-[#04132d] via-[#082b63] to-[#0f4ca4]" },
  { title: "JavaScript", icon: Code2, glow: "from-[#05152f] via-[#0a2f68] to-[#0f4d9c]" },
  { title: "HTML5", icon: FileCode2, glow: "from-[#04152f] via-[#082c61] to-[#0c478f]" },
  { title: "CSS3", icon: Palette, glow: "from-[#03122b] via-[#08295c] to-[#0d4a96]" },
  { title: "Vue.js", icon: LayoutGrid, glow: "from-[#04142d] via-[#082b5f] to-[#0e468c]" },
  { title: "Angular", icon: AppWindow, glow: "from-[#04142f] via-[#0a2f66] to-[#104da0]" },
  { title: "Svelte", icon: Sparkles, glow: "from-[#04142f] via-[#093162] to-[#0f4b93]" },
  { title: "Nuxt.js", icon: Globe, glow: "from-[#04142f] via-[#082d61] to-[#0d468d]" },
  { title: "Express.js", icon: Cpu, glow: "from-[#03112a] via-[#08295a] to-[#0b417f]" },
  { title: "NestJS", icon: AppWindow, glow: "from-[#04142f] via-[#0a2e66] to-[#104fa2]" },
  { title: "MongoDB", icon: LayoutGrid, glow: "from-[#04142d] via-[#082b5d] to-[#0d4488]" },
  { title: "PostgreSQL", icon: Cpu, glow: "from-[#03132d] via-[#082b63] to-[#0f4998]" },
  { title: "MySQL", icon: FileCode2, glow: "from-[#03132f] via-[#082a63] to-[#0b3b8a]" },
  { title: "Firebase", icon: Sparkles, glow: "from-[#04142f] via-[#092f64] to-[#0e4a90]" },
  { title: "GraphQL", icon: Braces, glow: "from-[#051733] via-[#0a3270] to-[#1050a8]" },
  { title: "Redux", icon: Layers3, glow: "from-[#04142f] via-[#0a2f68] to-[#114a9b]" },
  { title: "Three.js", icon: Globe, glow: "from-[#031129] via-[#072658] to-[#0b3d7f]" },
  { title: "GSAP", icon: Rocket, glow: "from-[#04142d] via-[#082b5f] to-[#0d468c]" },
  { title: "Framer Motion", icon: Sparkles, glow: "from-[#051733] via-[#0a3270] to-[#1050a8]" },
  { title: "Django", icon: AppWindow, glow: "from-[#04142d] via-[#082b60] to-[#0d4588]" },
  { title: "Python", icon: Braces, glow: "from-[#04142f] via-[#0a2f69] to-[#104ea0]" },
  { title: "PHP", icon: FileCode2, glow: "from-[#051733] via-[#09316b] to-[#0f4d9f]" },
  { title: "Swift", icon: Smartphone, glow: "from-[#04142f] via-[#0a2d63] to-[#104891]" },
  { title: "Kotlin", icon: Smartphone, glow: "from-[#051733] via-[#0a3270] to-[#1050a8]" },
  { title: "Dart", icon: Code2, glow: "from-[#04142f] via-[#082d61] to-[#0e478c]" },
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
  const stackWrapY = useTransform(scrollYProgress, [0, 0.5, 1], [36, 0, -40]);
  const stackWrapRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [14, 0, -14]);
  const stackWrapRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-6, 0, 6]);
  const stackSlideX = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const stackTiltX = useTransform(scrollYProgress, [0, 0.5, 1], [-4, 0, 6]);
  const stackTiltY = useTransform(scrollYProgress, [0, 0.5, 1], [6, 0, -8]);
  const stackScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.96]);
  const [isPaused, setIsPaused] = useState(false);
  const marqueeDuration = 68;

  return (
    <section ref={sectionRef} className="relative min-h-[300vh] overflow-hidden py-24 text-white">
      <div className="sticky top-0 flex min-h-screen items-start overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(77,159,255,0.18),transparent_26%),radial-gradient(circle_at_82%_74%,rgba(124,58,237,0.18),transparent_26%),linear-gradient(180deg,rgba(3,18,48,0.32),rgba(3,18,48,0.04))]" />

        <motion.div
          aria-hidden="true"
          style={{ rotate: orbitRotate }}
          className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 shadow-[0_0_80px_rgba(77,159,255,0.14)] md:h-[38rem] md:w-[38rem]"
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
              transition={{ duration: 0.75, ease: "easeOut" }}
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
              className="absolute left-1/2 top-1/2 h-[28rem] w-[min(90vw,38rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2.4rem] border border-cyan-100/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.06))] p-5 shadow-[0_45px_140px_rgba(0,0,0,0.34)] backdrop-blur-2xl [transform-style:preserve-3d]"
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
                      src="/web-and-mobile.jpg"
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
                  className={
                    "absolute z-20 w-[min(72vw,18rem)] rounded-[1.8rem] border border-white/12 bg-gradient-to-br " +
                    card.className +
                    " p-5 shadow-[0_25px_80px_rgba(0,0,0,0.28)] [transform-style:preserve-3d] " +
                    (index === 0 ? "left-0 top-10" : index === 1 ? "bottom-8 right-0" : "right-10 top-6 hidden md:block")
                  }
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

      <div className="relative z-20 mx-auto mt-[-1vh] w-full max-w-[1500px] px-4 pb-20 pt-14 md:mt-[3vh] md:px-6 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ y: stackWrapY, rotateX: stackWrapRotateX, rotateY: stackWrapRotateY }}
          className="overflow-hidden [perspective:2200px] [transform-style:preserve-3d]"
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
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
                className="mt-3 text-3xl font-bold text-white md:text-4xl"
              >
                Tools we use to craft fast, modern digital products.
              </motion.h3>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="max-w-md text-sm leading-6 text-white/70 md:text-right"
            >
              A moving showcase of the frameworks, languages, and platforms behind our web and mobile experiences.
            </motion.p>
          </div>

          <div className="relative overflow-x-auto overflow-y-hidden rounded-[2.4rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] px-2 pb-6 pt-14 shadow-[0_35px_120px_rgba(0,0,0,0.28)] backdrop-blur-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="pointer-events-none absolute inset-0 rounded-[2.4rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_48%,rgba(111,207,255,0.06))]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/60 to-transparent" />
            <div className="pointer-events-none absolute inset-[1px] rounded-[2.35rem] border border-white/8" />
            <button
              type="button"
              onClick={() => setIsPaused((current) => !current)}
              className="absolute right-3 top-3 z-20 rounded-full border border-white/14 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-md transition hover:bg-white/16"
            >
              {isPaused ? "Play" : "Pause"}
            </button>
            <motion.div
              animate={isPaused ? { x: undefined } : { x: ["0%", "-50%"] }}
              style={{ x: stackSlideX }}
              transition={{ duration: marqueeDuration, repeat: Infinity, ease: "linear" }}
              className="relative z-10 flex w-max items-center gap-5 px-3 py-6 pr-10 [transform-style:preserve-3d]"
            >
              {[...techStacks, ...techStacks].map((stack, index) => {
                const StackIcon = stack.icon;
                const snippets = stack.title in codeSnippets ? codeSnippets[stack.title as SnippetTitle] : [];

                return (
                  <motion.article
                    key={stack.title + "-" + index}
                    animate={{
                      rotateY: [0, 14, -8, 0],
                      rotateX: [0, 5, -3, 0],
                      y: index % 2 === 0 ? [0, -10, 0] : [0, 10, 0],
                      scale: [1, 1.02, 1],
                      opacity: [0.86, 1, 0.9],
                    }}
                    whileHover={{ y: -18, rotateX: 12, rotateY: index % 2 === 0 ? -12 : 12, scale: 1.05 }}
                    transition={{ duration: 6.8 + (index % 5) * 0.45, repeat: Infinity, ease: "easeInOut", delay: (index % techStacks.length) * 0.08 }}
                    style={{
                      clipPath: stackShape,
                      rotateX: index % 2 === 0 ? stackTiltX : stackTiltY,
                      rotateY: index % 3 === 0 ? stackTiltY : stackTiltX,
                      scale: stackScale,
                    }}
                    className="group relative h-[12.5rem] w-[11.5rem] shrink-0 overflow-hidden border border-white/12 text-white shadow-[0_24px_64px_rgba(0,0,0,0.22)] [transform-style:preserve-3d] md:h-[13.5rem] md:w-[12.5rem]"
                  >
                    <div aria-hidden="true" style={{ clipPath: stackShape }} className={"absolute inset-0 bg-gradient-to-br opacity-70 " + stack.glow} />
                    <div aria-hidden="true" style={{ clipPath: stackShape }} className="absolute inset-[1px] bg-[linear-gradient(180deg,rgba(4,17,39,0.10),rgba(4,17,39,0.44))]" />
                    <motion.div
                      animate={{ rotate: [0, 360], scale: [1, 1.07, 1], opacity: [0.22, 0.42, 0.22] }}
                      transition={{ duration: 14, repeat: Infinity, ease: "linear", delay: index * 0.12 }}
                      className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-cyan-100/10 bg-cyan-100/8 blur-[1px]"
                    />
                    <motion.div
                      animate={isPaused ? { x: undefined } : { x: ["-130%", "140%"] }}
                      transition={{ duration: marqueeDuration / 3.8, repeat: Infinity, ease: "linear", delay: (index % techStacks.length) * 0.22 }}
                      className="absolute inset-y-3 w-16 skew-x-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)] blur-md"
                    />
                    <div className="absolute inset-x-3 top-2 h-10 rounded-[999px] bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(191,219,254,0.06),transparent)] opacity-80 blur-sm" />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_42%,rgba(125,211,252,0.06))]" />
                    <div className="relative flex h-full flex-col justify-between p-4">
                      <div aria-hidden="true" style={{ clipPath: stackShape }} className="pointer-events-none absolute inset-[6px] border border-cyan-100/10" />
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-white/16 bg-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.22)] backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                            <StackIcon size={24} className="text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.22)]" />
                          </div>
                        </div>
                        <h4 className="mt-3 text-lg font-bold tracking-tight text-white md:text-[1.2rem]">{stack.title}</h4>
                      </div>

                      <div className="rounded-[1rem] border border-cyan-100/10 bg-[#031126]/58 p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm transition duration-500 group-hover:bg-[#071a3d]/72">
                        <div className="mb-3 flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <div className="space-y-1.5 font-mono text-[11px] leading-4.5">
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



