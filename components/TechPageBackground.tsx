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
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className={`pointer-events-none fixed inset-0 -z-20 bg-[linear-gradient(120deg,#dff5ff_0%,#8dd8ff_24%,#0096FF_52%,#6fcfff_76%,#e6f9ff_100%)] bg-[length:200%_200%] ${className}`}
      />

      <DataNetworkBackground variant="light" className="fixed inset-0 -z-10 opacity-100" />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-[8%] top-[12%] -z-10 hidden h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.26),transparent_68%)] blur-3xl md:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-[8%] right-[6%] -z-10 hidden h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(0,150,255,0.2),transparent_68%)] blur-3xl md:block"
      />

      <motion.div
        aria-hidden="true"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none fixed left-1/2 top-1/2 -z-10 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8"
      />

      <motion.div
        aria-hidden="true"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none fixed left-1/2 top-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/18"
      />
    </>
  );
}
