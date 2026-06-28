"use client";

import { motion } from "framer-motion";

type DataNetworkBackgroundProps = {
  className?: string;
  variant?: "dark" | "light";
};

const nodes = [
  { className: "left-[6%] top-[10%] h-2.5 w-2.5" },
  { className: "left-[16%] top-[34%] h-2 w-2" },
  { className: "left-[31%] top-[18%] h-3 w-3" },
  { className: "left-[46%] top-[44%] h-2.5 w-2.5" },
  { className: "left-[61%] top-[16%] h-2 w-2" },
  { className: "left-[76%] top-[36%] h-3 w-3" },
  { className: "left-[88%] top-[14%] h-2 w-2" },
  { className: "left-[80%] top-[72%] h-2.5 w-2.5" },
  { className: "left-[58%] top-[78%] h-2 w-2" },
  { className: "left-[28%] top-[74%] h-2.5 w-2.5" },
  { className: "left-[10%] top-[68%] h-2 w-2" },
  { className: "left-[22%] top-[86%] h-2 w-2" },
  { className: "left-[68%] top-[88%] h-2.5 w-2.5" },
  { className: "left-[92%] top-[58%] h-2 w-2" },
];

const lines = [
  "left-[8%] top-[12%] w-[18%] rotate-[16deg]",
  "left-[18%] top-[28%] w-[18%] rotate-[-12deg]",
  "left-[30%] top-[23%] w-[20%] rotate-[24deg]",
  "left-[45%] top-[34%] w-[18%] rotate-[-18deg]",
  "left-[58%] top-[18%] w-[18%] rotate-[22deg]",
  "left-[72%] top-[27%] w-[16%] rotate-[-16deg]",
  "left-[68%] top-[56%] w-[16%] rotate-[62deg]",
  "left-[42%] top-[68%] w-[18%] rotate-[10deg]",
  "left-[18%] top-[66%] w-[20%] rotate-[8deg]",
  "left-[10%] top-[80%] w-[18%] rotate-[12deg]",
  "left-[58%] top-[80%] w-[22%] rotate-[9deg]",
  "left-[82%] top-[42%] w-[12%] rotate-[68deg]",
];

const pulses = [
  "left-[14%] top-[18%] h-44 w-44",
  "left-[52%] top-[12%] h-56 w-56",
  "left-[70%] top-[62%] h-52 w-52",
  "left-[18%] top-[64%] h-48 w-48",
];

const dataStreams = [
  { className: "left-[12%] top-[20%] h-px w-[26%] rotate-[18deg]", delay: 0 },
  { className: "left-[36%] top-[30%] h-px w-[18%] rotate-[-14deg]", delay: 0.8 },
  { className: "left-[54%] top-[24%] h-px w-[24%] rotate-[20deg]", delay: 1.6 },
  { className: "left-[22%] top-[70%] h-px w-[30%] rotate-[6deg]", delay: 1.1 },
  { className: "left-[58%] top-[74%] h-px w-[20%] rotate-[12deg]", delay: 2.2 },
];

export default function DataNetworkBackground({ className = "", variant = "dark" }: DataNetworkBackgroundProps) {
  const overlayClass =
    variant === "dark"
      ? "bg-[radial-gradient(circle_at_20%_20%,rgba(77,159,255,0.18),transparent_24%),radial-gradient(circle_at_80%_24%,rgba(255,255,255,0.08),transparent_20%),radial-gradient(circle_at_70%_78%,rgba(11,94,215,0.16),transparent_24%)]"
      : "bg-[radial-gradient(circle_at_20%_20%,rgba(77,159,255,0.18),transparent_24%),radial-gradient(circle_at_80%_24%,rgba(255,255,255,0.45),transparent_20%),radial-gradient(circle_at_70%_78%,rgba(11,94,215,0.14),transparent_24%)]";

  const gridClass =
    variant === "dark"
      ? "bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]"
      : "bg-[linear-gradient(rgba(8,59,138,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(8,59,138,0.06)_1px,transparent_1px)]";

  const lineClass =
    variant === "dark"
      ? "bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent"
      : "bg-gradient-to-r from-transparent via-sky-400/55 to-transparent";

  const nodeClass =
    variant === "dark"
      ? "bg-cyan-300 shadow-[0_0_24px_rgba(103,232,249,0.75)]"
      : "bg-sky-400 shadow-[0_0_22px_rgba(56,189,248,0.42)]";

  const pulseClass =
    variant === "dark"
      ? "bg-[radial-gradient(circle,rgba(103,232,249,0.18),transparent_68%)]"
      : "bg-[radial-gradient(circle,rgba(77,159,255,0.14),transparent_68%)]";

  const streamClass =
    variant === "dark"
      ? "bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.05),rgba(103,232,249,0.95),rgba(255,255,255,0.08),transparent)]"
      : "bg-[linear-gradient(90deg,transparent,rgba(8,59,138,0.04),rgba(56,189,248,0.92),rgba(8,59,138,0.08),transparent)]";

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className={`absolute inset-0 ${overlayClass}`} />
      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "120px 120px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className={`absolute inset-0 bg-[size:90px_90px] opacity-60 ${gridClass}`}
      />

      {pulses.map((pulse, index) => (
        <motion.div
          key={pulse}
          animate={{ opacity: [0.12, 0.34, 0.12], scale: [0.86, 1.14, 0.86] }}
          transition={{ duration: 6 + index * 0.8, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute rounded-full blur-3xl ${pulseClass} ${pulse}`}
        />
      ))}

      {lines.map((line, index) => (
        <motion.span
          key={line}
          animate={{ opacity: [0.12, 0.45, 0.12], scaleX: [0.92, 1.06, 0.92] }}
          transition={{ duration: 5 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute h-px origin-left ${lineClass} ${line}`}
        />
      ))}

      {dataStreams.map((stream) => (
        <motion.span
          key={stream.className}
          animate={{ x: ["-18%", "118%"], opacity: [0, 1, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: stream.delay }}
          className={`absolute w-24 blur-[1px] ${streamClass} ${stream.className}`}
        />
      ))}

      {nodes.map((node, index) => (
        <motion.span
          key={node.className}
          animate={{ y: [0, -8, 0], opacity: [0.35, 1, 0.35], scale: [1, 1.18, 1] }}
          transition={{ duration: 3.2 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute rounded-full ${nodeClass} ${node.className}`}
        />
      ))}
    </div>
  );
}
