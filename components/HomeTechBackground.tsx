"use client";

import { motion } from "framer-motion";
import DataNetworkBackground from "@/components/DataNetworkBackground";

type HomeTechBackgroundProps = {
  className?: string;
};

export default function HomeTechBackground({ className = "" }: HomeTechBackgroundProps) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute -inset-x-6 -inset-y-24 overflow-hidden ${className}`}>
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.34),transparent_22%),radial-gradient(circle_at_80%_74%,rgba(111,207,255,0.24),transparent_28%),linear-gradient(135deg,#eafaff_0%,#9bddff_24%,#0096FF_52%,#69d0ff_76%,#f3fcff_100%)] bg-[length:220%_220%]"
      />
      <DataNetworkBackground variant="light" className="opacity-90" />
      <motion.div
        animate={{ opacity: [0.26, 0.62, 0.26], scale: [0.9, 1.08, 0.9], rotate: [0, 180, 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[12%] top-[8%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.36),rgba(125,211,252,0.26)_38%,transparent_70%)] blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1.08, 0.92, 1.08], rotate: [360, 180, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[6%] right-[8%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(0,150,255,0.28),rgba(14,165,233,0.18)_42%,transparent_72%)] blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.16, 0.38, 0.16], scale: [0.96, 1.04, 0.96] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_100px_rgba(0,150,255,0.18)] md:h-[50rem] md:w-[50rem]"
      />
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(234,250,255,0.18),transparent_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,transparent_0%,rgba(234,250,255,0.12)_100%)]" />
    </div>
  );
}
