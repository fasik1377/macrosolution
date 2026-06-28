"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef } from "react";
import DataNetworkBackground from "@/components/DataNetworkBackground";

const orbitLabels = ["Mail", "Call", "Meet", "Plan"];

export default function ContactScrollHero3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const phoneY = useTransform(scrollYProgress, [0, 0.5, 1], [90, 0, -90]);
  const phoneRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -8]);
  const phoneRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-18, 0, 10]);
  const mailY = useTransform(scrollYProgress, [0, 0.5, 1], [120, 0, -110]);
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 240]);

  return (
    <section ref={sectionRef} className="relative min-h-[250vh] overflow-hidden text-white">
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden bg-dark-header pt-28">
        <DataNetworkBackground variant="dark" className="absolute inset-0 opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(77,159,255,0.2),transparent_24%),radial-gradient(circle_at_80%_74%,rgba(11,94,215,0.26),transparent_30%),linear-gradient(135deg,#001329_0%,#083B8A_48%,#001B47_100%)]" />
        <motion.div
          aria-hidden="true"
          style={{ rotate: orbitRotate }}
          className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12 shadow-[0_0_90px_rgba(77,159,255,0.18)] md:h-[42rem] md:w-[42rem]"
        />

        <div className="container relative z-10 mx-auto grid min-h-[620px] items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-semibold uppercase tracking-[0.28em] text-cyan-300">Contact Macro Solution</p>
            <h1 className="mt-6 text-3xl font-bold leading-[1.08] md:text-5xl lg:text-6xl">
              A contact flow built for discovery, alignment, and action.
            </h1>
            <p className="mt-7 max-w-2xl border border-white/12 bg-white/8 p-5 text-base font-medium leading-8 text-white/82 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur md:text-lg [clip-path:polygon(0_0,100%_0,96%_100%,0_100%,4%_50%)]">
              Tell us what you need to improve, automate, connect, or secure. Macro Solution helps businesses in Mauritius turn operational challenges into practical software and IT solutions.
            </p>
          </motion.div>

          <div className="relative h-[620px] [perspective:1800px]">
            <motion.div
              style={{ y: phoneY, rotateX: phoneRotateX, rotateY: phoneRotateY }}
              className="absolute left-1/2 top-1/2 h-[27rem] w-[min(76vw,20rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2.4rem] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.28)] backdrop-blur-xl [transform-style:preserve-3d]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(77,159,255,0.18),transparent_34%,rgba(255,255,255,0.04)_60%,rgba(77,159,255,0.12))]" />
              <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/20" />
              <div className="relative flex h-full flex-col justify-between rounded-[2rem] border border-white/10 bg-[#071c42]/70 p-5 [transform:translateZ(26px)]">
                <div>
                  <div className="flex items-center justify-between text-cyan-200">
                    <Phone size={20} />
                    <span className="text-xs font-semibold uppercase tracking-[0.28em]">Call</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">Direct Connection</h3>
                  <p className="mt-4 text-sm leading-7 text-white/74">
                    Start the discussion, explain the workflow challenge, and map the next best solution.
                  </p>
                </div>
                <div className="space-y-3">
                  {orbitLabels.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{ y: mailY }}
              className="absolute right-4 top-10 w-[min(72vw,18rem)] rounded-[1.8rem] border border-white/12 bg-[linear-gradient(135deg,rgba(11,94,215,0.9),rgba(77,159,255,0.8))] p-5 shadow-[0_26px_80px_rgba(11,94,215,0.28)]"
            >
              <Mail className="text-white" />
              <h3 className="mt-6 text-2xl font-bold">Mail Brief</h3>
              <p className="mt-3 text-sm leading-6 text-white/85">Send your needs, expected outcome, and business priorities in one clear brief.</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 3, 0, -3, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 left-4 w-[min(72vw,18rem)] rounded-[1.8rem] border border-white/12 bg-[linear-gradient(135deg,rgba(124,58,237,0.88),rgba(11,94,215,0.76))] p-5 shadow-[0_26px_80px_rgba(0,0,0,0.24)]"
            >
              <MapPin className="text-white" />
              <h3 className="mt-6 text-2xl font-bold">Local Presence</h3>
              <p className="mt-3 text-sm leading-6 text-white/85">A nearby technology partner for practical collaboration and long-term support.</p>
            </motion.div>

            <motion.div
              animate={{ x: [0, 14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-16 top-4 hidden items-center gap-2 rounded-full border border-cyan-300/18 bg-white/10 px-5 py-3 text-sm font-semibold text-cyan-200 shadow-[0_18px_60px_rgba(77,159,255,0.16)] backdrop-blur-md md:inline-flex"
            >
              Connect with us
              <Send size={16} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}