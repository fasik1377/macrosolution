"use client";

import { useRef } from "react";
import { motion, type MotionValue, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Code2, Globe2, Layers3, Smartphone } from "lucide-react";

const floatingModules = [
  { label: "Design", icon: Layers3, className: "left-[3%] top-[19%] md:left-[9%]" },
  { label: "Website", icon: Globe2, className: "right-[4%] top-[22%] md:right-[11%]" },
  { label: "App", icon: Smartphone, className: "left-[5%] bottom-[24%] md:left-[13%]" },
  { label: "Code", icon: Code2, className: "right-[4%] bottom-[26%] md:right-[12%]" },
];

const splitPanels = [
  {
    key: "top-left",
    position: "left top",
    origin: "right bottom",
    x: [0, -32, -122],
    y: [0, -12, -72],
    rotateX: [0, 2, 11],
    rotateY: [0, -6, -22],
    z: [0, 28, 72],
  },
  {
    key: "top-right",
    position: "right top",
    origin: "left bottom",
    x: [0, 34, 132],
    y: [0, -18, -84],
    rotateX: [0, 3, 13],
    rotateY: [0, 6, 24],
    z: [0, 42, 92],
  },
  {
    key: "bottom-left",
    position: "left bottom",
    origin: "right top",
    x: [0, -38, -138],
    y: [0, 18, 82],
    rotateX: [0, -3, -14],
    rotateY: [0, -7, -24],
    z: [0, 36, 86],
  },
  {
    key: "bottom-right",
    position: "right bottom",
    origin: "left top",
    x: [0, 42, 148],
    y: [0, 22, 96],
    rotateX: [0, -4, -16],
    rotateY: [0, 8, 26],
    z: [0, 48, 104],
  },
];

const networkNodes = [
  "left-[8%] top-[16%] h-2.5 w-2.5",
  "left-[18%] top-[32%] h-2 w-2",
  "left-[30%] top-[18%] h-3 w-3",
  "left-[46%] top-[28%] h-2.5 w-2.5",
  "left-[62%] top-[16%] h-2 w-2",
  "left-[74%] top-[28%] h-3 w-3",
  "left-[88%] top-[18%] h-2 w-2",
  "left-[80%] top-[72%] h-2.5 w-2.5",
  "left-[58%] top-[76%] h-2 w-2",
  "left-[36%] top-[72%] h-2.5 w-2.5",
  "left-[16%] top-[70%] h-2 w-2",
];

const networkLines = [
  "left-[10%] top-[18%] w-[16%] rotate-[18deg]",
  "left-[20%] top-[30%] w-[18%] rotate-[-12deg]",
  "left-[32%] top-[22%] w-[16%] rotate-[10deg]",
  "left-[46%] top-[24%] w-[16%] rotate-[-8deg]",
  "left-[60%] top-[20%] w-[15%] rotate-[14deg]",
  "left-[70%] top-[30%] w-[16%] rotate-[-12deg]",
  "left-[66%] top-[58%] w-[14%] rotate-[58deg]",
  "left-[42%] top-[70%] w-[16%] rotate-[8deg]",
  "left-[18%] top-[68%] w-[18%] rotate-[6deg]",
];

const dataStreams = [
  { className: "left-[12%] top-[20%] w-24 rotate-[18deg]", delay: 0 },
  { className: "left-[34%] top-[23%] w-20 rotate-[10deg]", delay: 0.8 },
  { className: "left-[58%] top-[22%] w-24 rotate-[14deg]", delay: 1.6 },
  { className: "left-[24%] top-[69%] w-24 rotate-[6deg]", delay: 1.2 },
  { className: "left-[68%] top-[60%] w-20 rotate-[58deg]", delay: 2.1 },
];

const heroImageStack = 'url("/web-and-mobile.jpg"), url("/web-and-mobile1.jpg"), url("/hero-web-mobile.svg")';

type SplitPanel = (typeof splitPanels)[number];

function SplitImagePanel({ panel, progress }: { panel: SplitPanel; progress: MotionValue<number> }) {
  const x = useTransform(progress, [0.24, 0.56, 0.9], panel.x);
  const y = useTransform(progress, [0.24, 0.56, 0.9], panel.y);
  const rotateX = useTransform(progress, [0.24, 0.56, 0.9], panel.rotateX);
  const rotateY = useTransform(progress, [0.24, 0.56, 0.9], panel.rotateY);
  const z = useTransform(progress, [0.24, 0.56, 0.9], panel.z);

  return (
    <motion.div
      style={{
        x,
        y,
        rotateX,
        rotateY,
        z,
        transformOrigin: panel.origin,
      }}
      className="relative min-h-0 overflow-hidden border border-white/20 bg-white/10 shadow-[0_38px_90px_rgba(0,12,38,0.3)] [backface-visibility:hidden]"
    >
      <span
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: heroImageStack,
          backgroundPosition: panel.position,
          backgroundSize: "200% 200%",
        }}
      />
      <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_42%,rgba(0,19,41,0.42))]" />
    </motion.div>
  );
}

export default function ScrollDrivenHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const phoneGlow = useTransform(scrollYProgress, [0, 0.5, 1], [0.72, 1, 0.48]);
  const orbitScale = useTransform(scrollYProgress, [0, 0.42, 0.86], [0.74, 1, 1.18]);
  const orbitOpacity = useTransform(scrollYProgress, [0, 0.12, 0.86, 1], [0, 1, 1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.28, 0.74, 1], [0.86, 1, 1.04, 0.9]);
  const imageY = useTransform(scrollYProgress, [0, 0.52, 1], [56, 18, -28]);
  const imageRotateX = useTransform(scrollYProgress, [0, 0.36, 1], [7, 0, -5]);
  const imageRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 7]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.08, 0.9, 1], [0.82, 1, 1, 0.62]);
  const wholeImageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.52], [1, 0.86, 0]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero-scroll"
      className="relative min-h-[420vh] overflow-hidden text-white"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          aria-hidden="true"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.34),transparent_22%),radial-gradient(circle_at_80%_74%,rgba(111,207,255,0.24),transparent_28%),linear-gradient(135deg,#eafaff_0%,#9bddff_24%,#0096FF_52%,#69d0ff_76%,#f3fcff_100%)] bg-[length:200%_200%]"
        />
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "120px 120px"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[linear-gradient(rgba(8,59,138,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(8,59,138,0.06)_1px,transparent_1px)] bg-[size:90px_90px] opacity-60"
        />
        <div className="absolute left-1/2 top-[52%] h-[72vh] w-[72vw] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-white/18 bg-white/12 blur-[1px]" />
        <div className="absolute inset-x-0 bottom-0 h-[38vh] bg-[linear-gradient(180deg,transparent_0%,rgba(0,150,255,0.1)_58%,rgba(6,67,140,0.28)_100%)]" />

        <div aria-hidden="true" className="absolute inset-0">
          {networkLines.map((line, index) => (
            <motion.span
              key={line}
              animate={{ opacity: [0.12, 0.4, 0.12], scaleX: [0.94, 1.06, 0.94] }}
              transition={{ duration: 4.8 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute h-px origin-left bg-[linear-gradient(90deg,transparent,rgba(56,189,248,0.88),rgba(255,255,255,0.82),transparent)] ${line}`}
            />
          ))}

          {dataStreams.map((stream) => (
            <motion.span
              key={stream.className}
              animate={{ x: ["-24%", "120%"], opacity: [0, 1, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: stream.delay }}
              className={`absolute h-px bg-[linear-gradient(90deg,transparent,rgba(8,59,138,0.04),rgba(56,189,248,0.98),rgba(255,255,255,0.58),transparent)] blur-[1px] ${stream.className}`}
            />
          ))}

          {networkNodes.map((node, index) => (
            <motion.span
              key={node}
              animate={{ y: [0, -8, 0], opacity: [0.35, 1, 0.35], scale: [1, 1.18, 1] }}
              transition={{ duration: 3.2 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute rounded-full bg-sky-400 shadow-[0_0_24px_rgba(56,189,248,0.55)] ${node}`}
            />
          ))}

          <motion.div
            style={{ opacity: phoneGlow }}
            className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.22)_0%,rgba(111,207,255,0.34)_27%,rgba(0,150,255,0.24)_48%,transparent_72%)] blur-sm md:h-[52rem] md:w-[52rem]"
          />
          <motion.div
            aria-hidden="true"
            animate={{ opacity: [0.12, 0.36, 0.12], scale: [0.94, 1.04, 0.94] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-[49%] h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.22),rgba(0,150,255,0.24)_34%,transparent_68%)] blur-2xl md:h-[44rem] md:w-[44rem]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[54%] z-30 aspect-[16/10] w-[min(92vw,1060px)] -translate-x-1/2 -translate-y-1/2 [perspective:1400px] md:w-[min(78vw,1120px)]"
          >
            <motion.div
              data-hero-image-stage
              style={{
                scale: imageScale,
                y: imageY,
                rotateX: imageRotateX,
                rotateY: imageRotateY,
                opacity: imageOpacity,
              }}
              className="relative h-full w-full [transform-style:preserve-3d]"
            >
              <div className="absolute -inset-8 rounded-[2rem] bg-[radial-gradient(circle,rgba(77,159,255,0.26),transparent_66%)] blur-2xl" />
              <motion.div
                style={{
                  opacity: wholeImageOpacity,
                  backgroundImage: heroImageStack,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="absolute inset-0 rounded-[1.35rem] border border-white/16 bg-white/8 shadow-[0_58px_130px_rgba(0,12,38,0.4)]"
              />
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 overflow-visible rounded-[1.35rem]">
                {splitPanels.map((panel) => (
                  <SplitImagePanel key={panel.key} panel={panel} progress={scrollYProgress} />
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            style={{ scale: orbitScale, opacity: orbitOpacity }}
            className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 md:h-[34rem] md:w-[34rem]"
          >
            {floatingModules.map(({ label, icon: Icon, className }, index) => (
              <motion.div
                key={label}
                animate={{ y: [0, index % 2 === 0 ? -14 : 14, 0], rotate: [0, index % 2 === 0 ? 2 : -2, 0] }}
                transition={{ duration: 5.2 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute flex items-center gap-2 border border-white/18 bg-white/10 px-4 py-3 text-sm font-bold text-white shadow-[0_18px_54px_rgba(0,0,0,0.22)] backdrop-blur-md ${className}`}
                style={{ clipPath: "polygon(0 0,100% 0,92% 100%,0 100%,8% 50%)" }}
              >
                <Icon size={18} className="text-cyan-300" />
                {label}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          aria-hidden="true"
          style={{ opacity: cueOpacity }}
          className="absolute bottom-8 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-2 text-sm font-semibold text-white"
        >
          <span>Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.2)] backdrop-blur"
          >
            <ChevronDown size={20} />
          </motion.span>
        </motion.div>
      </div>

    </section>
  );
}


