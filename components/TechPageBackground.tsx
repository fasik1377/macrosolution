"use client";

import { motion } from "framer-motion";

import DataNetworkBackground from "@/components/DataNetworkBackground";

type TechPageBackgroundProps = {
  className?: string;
  variant?: "light" | "ecosystem";
};

export default function TechPageBackground({ className = "", variant = "ecosystem" }: TechPageBackgroundProps) {
  const isEcosystem = variant === "ecosystem";

  return (
    <>
      <motion.div
        aria-hidden="true"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: isEcosystem ? 18 : 10, repeat: Infinity, ease: "easeInOut" }}
        className={`pointer-events-none fixed inset-0 -z-20 bg-[length:220%_220%] ${
          isEcosystem
            ? "bg-[linear-gradient(125deg,#0000FF_0%,#06174d_24%,#0018a8_48%,#083b8a_72%,#0000FF_100%)]"
            : "bg-[linear-gradient(120deg,#dff5ff_0%,#8dd8ff_24%,#0096FF_52%,#6fcfff_76%,#e6f9ff_100%)]"
        } ${className}`}
      />

      <DataNetworkBackground variant={isEcosystem ? "dark" : "light"} className={`fixed inset-0 -z-10 ${isEcosystem ? "opacity-55" : "opacity-100"}`} />

      <div
        aria-hidden="true"
        className={`pointer-events-none fixed left-[8%] top-[12%] -z-10 hidden h-[24rem] w-[24rem] rounded-full blur-3xl md:block ${isEcosystem ? "bg-[radial-gradient(circle,rgba(34,211,238,0.24),transparent_68%)]" : "bg-[radial-gradient(circle,rgba(255,255,255,0.26),transparent_68%)]"}`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none fixed bottom-[8%] right-[6%] -z-10 hidden h-[28rem] w-[28rem] rounded-full blur-3xl md:block ${isEcosystem ? "bg-[radial-gradient(circle,rgba(96,165,250,0.3),transparent_68%)]" : "bg-[radial-gradient(circle,rgba(0,150,255,0.2),transparent_68%)]"}`}
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
