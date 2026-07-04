"use client";

import { motion } from "framer-motion";

import DataNetworkBackground from "@/components/DataNetworkBackground";

type TechPageBackgroundProps = {
  className?: string;
};

export default function TechPageBackground({ className = "" }: TechPageBackgroundProps) {
  return (
    <>
      <motion.div
        aria-hidden="true"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className={`pointer-events-none fixed inset-0 -z-20 bg-[linear-gradient(120deg,#dff5ff_0%,#8dd8ff_24%,#0096FF_52%,#6fcfff_76%,#e6f9ff_100%)] bg-[length:200%_200%] ${className}`}
      />

      <DataNetworkBackground variant="light" className="fixed inset-0 -z-10 opacity-100" />

      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.2, 0.38, 0.2], scale: [0.96, 1.04, 0.96] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed left-[8%] top-[12%] -z-10 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.34),transparent_68%)] blur-3xl"
      />

      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.12, 0.32, 0.12], scale: [0.92, 1.06, 0.92] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed bottom-[8%] right-[6%] -z-10 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(0,150,255,0.26),transparent_68%)] blur-3xl"
      />

      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.16, 0.34, 0.16], scale: [0.94, 1.08, 0.94], x: [0, 18, 0], y: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed left-[18%] top-[58%] -z-10 h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(111,207,255,0.24),transparent_70%)] blur-3xl"
      />

      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.1, 0.24, 0.1], scale: [0.9, 1.08, 0.9], x: [0, -14, 0], y: [0, 14, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed right-[16%] top-[18%] -z-10 h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(11,94,215,0.18),transparent_70%)] blur-3xl"
      />

      <motion.div
        aria-hidden="true"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none fixed left-1/2 top-1/2 -z-10 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8"
      />

      <motion.div
        aria-hidden="true"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none fixed left-1/2 top-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/18"
      />
    </>
  );
}
