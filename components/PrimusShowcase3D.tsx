"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, type MotionValue, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles, Target } from "lucide-react";

const pillars = [
  {
    title: "M I S S I O N",
    icon: Target,
    accent: "from-[#0B5ED7] via-[#1D8BFF] to-[#5EC8FF]",
    glow: "bg-[#0B5ED7]/18",
    content:
      "To empower businesses with innovative, reliable and scalable technology solutions that streamline operations, enhance productivity, and deliver measurable value across Mauritius and the Indian Ocean region.",
  },
  {
    title: "V I S I O N",
    icon: Sparkles,
    accent: "from-[#19B7A5] via-[#29D3C5] to-[#8BF3EB]",
    glow: "bg-[#19B7A5]/18",
    content:
      "To be the most trusted technology partner in the Indian Ocean region, driving digital transformation across industries through cutting-edge software and IT services.",
  },
];

function PurposePanel({
  pillar,
  index,
  progress,
}: {
  pillar: (typeof pillars)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index * 0.18;
  const mid = 0.34 + index * 0.16;
  const end = 0.88 + index * 0.08;
  const x = useTransform(progress, [start, mid, end], [index === 0 ? -160 : 160, 0, index === 0 ? 90 : -90]);
  const y = useTransform(progress, [start, mid, end], [90, 0, -70]);
  const rotateY = useTransform(progress, [start, mid, end], [index === 0 ? -34 : 34, 0, index === 0 ? 14 : -14]);
  const rotateX = useTransform(progress, [start, mid, end], [18, 0, -10]);
  const scale = useTransform(progress, [start, mid, end], [0.8, 1, 0.9]);
  const opacity = useTransform(progress, [start, mid, end], [0.24, 1, 0.42]);
  const Icon = pillar.icon;

  return (
    <motion.div
      style={{ x, y, rotateY, rotateX, scale, opacity, zIndex: pillars.length - index }}
      className="absolute left-1/2 top-1/2 h-[300px] w-[min(82vw,420px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden border border-white/50 bg-white/14 p-6 text-white shadow-[0_28px_100px_rgba(0,44,118,0.22)] backdrop-blur-2xl [clip-path:polygon(0_0,92%_0,100%_12%,100%_100%,8%_100%,0_88%)] [transform-style:preserve-3d]"
    >
      <div className={`absolute -right-12 -top-10 h-36 w-36 rounded-full blur-3xl ${pillar.glow}`} />
      <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.2),transparent_34%,rgba(9,37,84,0.2))]" />
      <div className="relative flex h-full flex-col justify-between [transform:translateZ(40px)]">
        <div className="flex items-start justify-between gap-5">
          <div>
            <div className={`inline-flex h-16 w-16 items-center justify-center bg-gradient-to-br ${pillar.accent} shadow-[0_20px_55px_rgba(11,94,215,0.28)] [clip-path:polygon(0_0,100%_0,84%_100%,0_100%)]`}>
              <Icon size={28} />
            </div>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.45em] text-[#0B5ED7]">Our Purpose</p>
            <h3 className="mt-3 text-2xl font-black tracking-[0.35em] text-slate-900 md:text-3xl">{pillar.title}</h3>
          </div>
          <span className="rounded-full border border-slate-300/60 bg-white/60 p-2 text-slate-500">
            <ArrowUpRight size={18} />
          </span>
        </div>

        <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg">{pillar.content}</p>

        <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-slate-200/70">
          <motion.div
            animate={{ x: ["-100%", "0%", "100%"] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.6 }}
            className={`h-full w-1/2 bg-gradient-to-r ${pillar.accent}`}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function PrimusShowcase3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const platformRotate = useTransform(scrollYProgress, [0, 1], [-12, 12]);
  const platformY = useTransform(scrollYProgress, [0, 0.5, 1], [70, 0, -56]);
  const platformScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.88, 1, 0.94]);
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const titleY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -24, -42]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15, 0.9], [0.55, 1, 0.82]);

  return (
    <section ref={sectionRef} className="relative min-h-[100vh] bg-[#F5F9FF] text-gray-950">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(11,94,215,0.16),transparent_24%),radial-gradient(circle_at_76%_72%,rgba(35,197,170,0.18),transparent_26%),linear-gradient(135deg,#F8FBFF_0%,#ffffff_45%,#DCEBFF_100%)]" />
        <motion.div
          aria-hidden="true"
          style={{ rotate: orbitRotate }}
          className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-blue/12 shadow-[0_0_100px_rgba(11,94,215,0.12)] md:h-[48rem] md:w-[48rem]"
        />
        <motion.div
          aria-hidden="true"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] md:h-[34rem] md:w-[34rem]"
        />

        <div className="container relative z-10 mx-auto grid h-full items-center gap-10 px-6 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div style={{ y: titleY, opacity: titleOpacity }} className="max-w-2xl">
            <p className="font-semibold uppercase tracking-[0.3em] text-brand-blue">Mission &amp; Vision</p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-dark-header md:text-6xl">
              Our Purpose &amp; Direction
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Macro Solution is driven by a clear mission and a bold regional vision shaped for long-term digital impact.
            </p>
            <p className="mt-5 text-lg leading-8 text-gray-700">
              Scroll through the scene to reveal an immersive 3D story that brings our purpose, ambition and direction to life.
            </p>
          </motion.div>

          <div className="relative h-[620px] [perspective:1500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              whileHover={{ y: -8, rotate: 4, scale: 1.04 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute right-6 top-6 z-20 rounded-[1.5rem] border border-brand-blue/10 bg-white/90 p-3 shadow-[0_22px_50px_rgba(8,59,138,0.18)] backdrop-blur-sm"
            >
              <Image src="/PRIMUS LOGO.png" alt="Macro Solution badge" width={140} height={56} className="h-auto w-28 object-contain md:w-36" />
            </motion.div>

            <motion.div
              style={{ rotateY: platformRotate, y: platformY, scale: platformScale }}
              className="absolute left-1/2 top-1/2 h-[440px] w-[min(88vw,540px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden border border-white/70 bg-white/70 p-7 shadow-[0_42px_120px_rgba(0,40,104,0.18)] backdrop-blur-xl [clip-path:polygon(7%_0,100%_0,93%_100%,0_100%)] [transform-style:preserve-3d]"
            >
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/60 to-transparent" />
              <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-hover-blue/50 to-transparent" />
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-blue/10 blur-3xl" />
              <div className="absolute -bottom-14 -left-12 h-44 w-44 rounded-full bg-hover-blue/14 blur-3xl" />

              <div className="relative flex h-full flex-col justify-between [transform:translateZ(36px)]">
                <div>
                  <span className="inline-flex items-center gap-2 border border-brand-blue/10 bg-[#F5F9FF] px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-blue [clip-path:polygon(8%_0,100%_0,92%_100%,0_100%)]">
                    Macro Solution Core
                  </span>
                  <h3 className="mt-5 text-4xl font-bold text-dark-header md:text-5xl">Mission &amp; Vision</h3>
                  <p className="mt-4 max-w-md text-base leading-7 text-gray-600">
                    A clear purpose to empower organisations today, and a clear direction to lead digital transformation across the region tomorrow.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Innovative Solutions",
                    "Reliable Delivery",
                    "Regional Impact",
                    "Trusted Partnership",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between border border-brand-blue/10 bg-[#F5F9FF] px-5 py-4 text-sm font-bold text-dark-header shadow-sm [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)]"
                    >
                      <span>{item}</span>
                      <span className="h-2 w-24 bg-gradient-to-r from-hover-blue via-button-blue to-dark-header" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {pillars.map((pillar, index) => (
              <PurposePanel key={pillar.title} pillar={pillar} index={index} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}






