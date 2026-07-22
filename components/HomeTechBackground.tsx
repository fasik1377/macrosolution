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
        animate={
          isMobile
            ? { backgroundPosition: "18% 50%" }
            : {
                backgroundPosition: ["8% 42%", "88% 58%", "42% 82%", "8% 42%"],
                scale: [1.04, 1.08, 1.05, 1.04],
              }
        }
        transition={
          isMobile
            ? undefined
            : {
                duration: 28,
                repeat: Infinity,
                ease: [0.45, 0, 0.55, 1],
                times: [0, 0.38, 0.7, 1],
              }
        }
        className="absolute -inset-[8%] bg-[linear-gradient(125deg,#0000FF_0%,#06174d_24%,#0018a8_48%,#083b8a_72%,#0000FF_100%)] bg-[length:220%_220%] will-change-transform"
      />
      <motion.div
        animate={
          isMobile
            ? { opacity: 0.2 }
            : {
                x: ["-18%", "22%", "-6%", "-18%"],
                y: ["-12%", "10%", "20%", "-12%"],
                opacity: [0.16, 0.28, 0.2, 0.16],
                scale: [0.9, 1.12, 1, 0.9],
              }
        }
        transition={
          isMobile
            ? undefined
            : {
                duration: 32,
                repeat: Infinity,
                ease: [0.45, 0, 0.55, 1],
                times: [0, 0.36, 0.72, 1],
              }
        }
        className="absolute -right-[18%] -top-[28%] h-[78rem] w-[78rem] rounded-full bg-[radial-gradient(circle,rgba(0,150,255,0.7)_0%,rgba(0,150,255,0.28)_28%,transparent_68%)] blur-3xl will-change-transform"
      />
      <DataNetworkBackground variant="light" className="opacity-75" />
      <motion.div
        animate={isMobile ? { opacity: 0.28 } : { opacity: [0.26, 0.48, 0.26], scale: [0.94, 1.04, 0.94], rotate: [0, 180, 360] }}
        transition={isMobile ? undefined : { duration: 48, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[12%] top-[8%] h-[22rem] w-[22rem] rounded-full border border-white/12"
      />
      <motion.div
        animate={isMobile ? { opacity: 0.24 } : { opacity: [0.2, 0.4, 0.2], scale: [1.04, 0.96, 1.04], rotate: [360, 180, 0] }}
        transition={isMobile ? undefined : { duration: 54, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[6%] right-[8%] h-[28rem] w-[28rem] rounded-full border border-sky-200/12"
      />
      <motion.div
        animate={isMobile ? { opacity: 0.2 } : { opacity: [0.16, 0.3, 0.16], scale: [0.98, 1.02, 0.98] }}
        transition={isMobile ? undefined : { duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_100px_rgba(0,150,255,0.18)] md:h-[50rem] md:w-[50rem]"
      />
    </div>
  );
}
