"use client";

import { motion } from "framer-motion";

const orbitRings = [
  "h-[18rem] w-[18rem] md:h-[24rem] md:w-[24rem]",
  "h-[26rem] w-[26rem] md:h-[34rem] md:w-[34rem]",
  "h-[36rem] w-[36rem] md:h-[46rem] md:w-[46rem]",
];

const codeWindows = [
  {
    className: "left-[4%] top-[12%] w-44 md:w-56",
    lines: ["const payroll = automate();", "syncCloud(data);", "deploy(\"production\");"],
    delay: 0,
  },
  {
    className: "right-[6%] top-[18%] w-40 md:w-52",
    lines: ["API /auth/secure", "POST /reports/export", "WS realtime.connected"],
    delay: 0.5,
  },
  {
    className: "left-[10%] bottom-[14%] w-48 md:w-60",
    lines: ["UI.render(metrics);", "animate(nodes);", "trackPerformance();"],
    delay: 1,
  },
];

const floatingNodes = [
  { className: "left-[18%] top-[24%]", size: "h-4 w-4", delay: 0 },
  { className: "left-[32%] top-[14%]", size: "h-3 w-3", delay: 0.4 },
  { className: "right-[24%] top-[22%]", size: "h-4 w-4", delay: 0.8 },
  { className: "right-[16%] bottom-[26%]", size: "h-3.5 w-3.5", delay: 1.1 },
  { className: "left-[24%] bottom-[18%]", size: "h-3 w-3", delay: 1.5 },
  { className: "left-1/2 top-[30%]", size: "h-5 w-5", delay: 1.9 },
];

const beams = [
  "left-[17%] top-[24%] w-[22%] rotate-[14deg]",
  "left-[30%] top-[17%] w-[24%] rotate-[28deg]",
  "left-[48%] top-[30%] w-[25%] rotate-[-18deg]",
  "left-[24%] top-[62%] w-[28%] rotate-[-12deg]",
  "left-[50%] top-[56%] w-[22%] rotate-[16deg]",
];

export default function HeroSoftwareBackground3D() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.18),transparent_16%),radial-gradient(circle_at_18%_22%,rgba(111,207,255,0.2),transparent_22%),radial-gradient(circle_at_82%_30%,rgba(77,159,255,0.18),transparent_20%),radial-gradient(circle_at_50%_82%,rgba(10,37,84,0.22),transparent_30%)]" />

      {orbitRings.map((ring, index) => (
        <motion.div
          key={ring}
          animate={{ rotate: index % 2 === 0 ? [0, 360] : [360, 0], scale: [0.97, 1.03, 0.97] }}
          transition={{ duration: 24 + index * 8, repeat: Infinity, ease: "linear" }}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/12 shadow-[0_0_90px_rgba(125,211,252,0.08)] ${ring}`}
        >
          <div className="absolute inset-[14%] rounded-full border border-dashed border-cyan-100/10" />
        </motion.div>
      ))}

      {beams.map((beam, index) => (
        <motion.div
          key={beam}
          animate={{ opacity: [0.2, 0.85, 0.2], scaleX: [0.84, 1.05, 0.84] }}
          transition={{ duration: 3.4 + index * 0.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
          className={`absolute h-px bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.9),transparent)] ${beam}`}
        >
          <motion.div
            animate={{ x: ["-10%", "110%"] }}
            transition={{ duration: 2.8 + index * 0.35, repeat: Infinity, ease: "linear", delay: index * 0.25 }}
            className="absolute top-1/2 h-2 w-10 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95),rgba(125,211,252,0.55),transparent_72%)] blur-[1px]"
          />
        </motion.div>
      ))}

      {floatingNodes.map((node, index) => (
        <motion.div
          key={`${node.className}-${index}`}
          animate={{ y: [0, -18, 0], scale: [1, 1.18, 1], opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 4.2 + index * 0.35, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
          className={`absolute rounded-full border border-cyan-100/20 bg-cyan-200/70 shadow-[0_0_26px_rgba(125,211,252,0.8)] ${node.className} ${node.size}`}
        >
          <div className="absolute inset-[-10px] rounded-full bg-cyan-200/20 blur-md" />
        </motion.div>
      ))}

      {codeWindows.map((window) => (
        <motion.div
          key={window.className}
          initial={{ opacity: 0, y: 20, rotateX: 18, rotateY: -12 }}
          animate={{ opacity: [0.3, 0.8, 0.3], y: [0, -12, 0], rotateY: [-10, 0, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: window.delay }}
          className={`absolute hidden rounded-[1.5rem] border border-white/12 bg-[linear-gradient(180deg,rgba(4,26,64,0.56),rgba(4,26,64,0.24))] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl lg:block ${window.className}`}
        >
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-200/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-sky-300/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-indigo-300/70" />
          </div>
          <div className="mt-4 space-y-2 font-mono text-[11px] leading-5 text-cyan-50/80">
            {window.lines.map((line, index) => (
              <motion.div
                key={line}
                animate={{ opacity: [0.35, 1, 0.35], x: [0, 4, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: window.delay + index * 0.18 }}
                className="flex items-center gap-2"
              >
                <span className="text-cyan-300/70">{`0${index + 1}`}</span>
                <span>{line}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      <motion.div
        animate={{ rotateY: [0, 14, 0, -14, 0], rotateX: [0, 6, 0, -6, 0], y: [0, -12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 hidden h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/14 bg-[linear-gradient(145deg,rgba(255,255,255,0.18),rgba(255,255,255,0.05))] shadow-[0_40px_120px_rgba(0,0,0,0.24)] backdrop-blur-2xl [transform-style:preserve-3d] md:block"
      >
        <div className="absolute inset-5 rounded-[1.6rem] border border-cyan-100/12 bg-[radial-gradient(circle_at_50%_32%,rgba(125,211,252,0.18),transparent_34%),linear-gradient(180deg,rgba(2,20,50,0.38),rgba(2,20,50,0.12))]" />
        <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-[1.4rem] border border-cyan-100/14 bg-[linear-gradient(135deg,rgba(125,211,252,0.18),rgba(255,255,255,0.04))] shadow-[0_0_50px_rgba(125,211,252,0.2)] [transform:translateZ(42px)]" />
        <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-100/16 [transform:translateZ(12px)]" />
        <div className="absolute left-[18%] top-[20%] h-8 w-20 rounded-full border border-cyan-100/16 bg-white/6 [transform:translateZ(54px)]" />
        <div className="absolute right-[18%] top-[28%] h-8 w-16 rounded-full border border-cyan-100/16 bg-white/6 [transform:translateZ(32px)]" />
        <div className="absolute bottom-[20%] left-[22%] h-10 w-24 rounded-2xl border border-cyan-100/16 bg-white/8 [transform:translateZ(48px)]" />
      </motion.div>
    </div>
  );
}
