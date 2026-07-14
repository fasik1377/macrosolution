"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import DataNetworkBackground from "@/components/DataNetworkBackground";

type HomeTechBackgroundProps = {
  className?: string;
  fixed?: boolean;
};

export default function HomeTechBackground({ className = "", fixed = false }: HomeTechBackgroundProps) {
  const [isMobile, setIsMobile] = useState(true);
  const frameClass = fixed ? "fixed inset-0" : "absolute -inset-x-6 -inset-y-24";

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const updateIsMobile = () => setIsMobile(mobileQuery.matches);

    updateIsMobile();
    mobileQuery.addEventListener("change", updateIsMobile);

    return () => mobileQuery.removeEventListener("change", updateIsMobile);
  }, []);

  return (
    <div aria-hidden="true" className={`pointer-events-none ${frameClass} overflow-hidden ${className}`}>
      <motion.div
        animate={isMobile ? undefined : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={isMobile ? undefined : { duration: 32, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.16),transparent_22%),radial-gradient(circle_at_80%_74%,rgba(0,150,255,0.34),transparent_28%),linear-gradient(135deg,#0000FF_0%,#0000FF_34%,#005CFF_58%,#0096FF_82%,#0000FF_100%)] bg-[length:220%_220%]"
      />
      <DataNetworkBackground variant="light" className="opacity-90" />
      <motion.div
        animate={isMobile ? { opacity: 0.28 } : { opacity: [0.26, 0.48, 0.26], scale: [0.94, 1.04, 0.94], rotate: [0, 180, 360] }}
        transition={isMobile ? undefined : { duration: 34, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[12%] top-[8%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),rgba(0,150,255,0.22)_38%,transparent_70%)] blur-3xl"
      />
      <motion.div
        animate={isMobile ? { opacity: 0.24 } : { opacity: [0.2, 0.4, 0.2], scale: [1.04, 0.96, 1.04], rotate: [360, 180, 0] }}
        transition={isMobile ? undefined : { duration: 36, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[6%] right-[8%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(0,150,255,0.28),rgba(0,0,255,0.18)_42%,transparent_72%)] blur-3xl"
      />
      <motion.div
        animate={isMobile ? { opacity: 0.2 } : { opacity: [0.16, 0.3, 0.16], scale: [0.98, 1.02, 0.98] }}
        transition={isMobile ? undefined : { duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_100px_rgba(0,150,255,0.18)] md:h-[50rem] md:w-[50rem]"
      />
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,0,255,0.18),transparent_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,transparent_0%,rgba(0,150,255,0.14)_100%)]" />
    </div>
  );
}
