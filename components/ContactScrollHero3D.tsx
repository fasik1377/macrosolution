"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef } from "react";
import DataNetworkBackground from "@/components/DataNetworkBackground";

const orbitLabels = ["Mail", "Call", "Meet", "Plan"];
const techStreams = [
  { className: "left-[6%] top-[20%] w-48 rotate-12", delay: 0 },
  { className: "right-[10%] top-[26%] w-56 -rotate-6", delay: 0.8 },
  { className: "left-[14%] bottom-[22%] w-44 -rotate-12", delay: 1.5 },
  { className: "right-[16%] bottom-[18%] w-40 rotate-[18deg]", delay: 2.2 },
];
const glowDots = [
  "left-[12%] top-[22%] h-2.5 w-2.5",
  "left-[24%] bottom-[22%] h-2 w-2",
  "right-[20%] top-[20%] h-3 w-3",
  "right-[12%] bottom-[24%] h-2.5 w-2.5",
  "left-1/2 top-[16%] h-2 w-2",
];

export default function ContactScrollHero3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const phoneRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -8]);
  const phoneRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-18, 0, 10]);
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const orbitScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 1.08]);
  const glowY = useTransform(scrollYProgress, [0, 0.5, 1], [-36, 0, 36]);

  return (
    <section ref={sectionRef} className="relative min-h-[108vh] overflow-hidden text-white md:min-h-[112vh]">
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden bg-[#0000FF] pt-28">
        <DataNetworkBackground variant="dark" className="absolute inset-0 opacity-64" />
        <motion.div
          aria-hidden="true"
          animate={{ backgroundPosition: ["0% 40%", "100% 60%", "0% 40%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(34,211,238,0.2),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(96,165,250,0.26),transparent_22%),radial-gradient(circle_at_80%_74%,rgba(14,165,233,0.18),transparent_30%),linear-gradient(135deg,#0000FF_0%,#06174d_38%,#0018a8_68%,#083b8a_100%)] bg-[length:180%_180%]"
        />

        <motion.div
          aria-hidden="true"
          style={{ y: glowY }}
          animate={{ opacity: [0.16, 0.34, 0.16], scale: [0.94, 1.06, 0.94] }}
          transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-[46%] h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(186,230,253,0.2)_0%,rgba(125,211,252,0.18)_28%,rgba(56,189,248,0.1)_52%,transparent_74%)] blur-2xl md:h-[48rem] md:w-[48rem]"
        />

        {techStreams.map((stream) => (
          <motion.span
            key={stream.className}
            aria-hidden="true"
            animate={{ x: ["-18%", "120%"], opacity: [0, 1, 0] }}
            transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut", delay: stream.delay }}
            className={`absolute h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),rgba(255,255,255,0.85),rgba(186,230,253,0.42),transparent)] blur-[1px] ${stream.className}`}
          />
        ))}

        {glowDots.map((dot, index) => (
          <motion.span
            key={dot}
            aria-hidden="true"
            animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0], opacity: [0.32, 1, 0.32], scale: [1, 1.24, 1] }}
            transition={{ duration: 3.4 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute rounded-full bg-white/75 shadow-[0_0_20px_rgba(255,255,255,0.45)] ${dot}`}
          />
        ))}

        <motion.div
          aria-hidden="true"
          style={{ rotate: orbitRotate, scale: orbitScale }}
          className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/18 shadow-[0_0_90px_rgba(255,255,255,0.14)] md:h-[42rem] md:w-[42rem]"
        >
          <motion.div
            animate={{ rotate: [0, -180, -360] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 rounded-full border border-white/14"
          />
        </motion.div>

        <div className="container relative z-10 mx-auto grid min-h-[620px] items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-semibold uppercase tracking-[0.28em] text-cyan-100">Contact Macro Solution</p>
            <h1 className="mt-6 text-3xl font-bold leading-[1.08] md:text-5xl lg:text-6xl">
              A contact flow built for discovery, alignment, and action.
            </h1>
            <p className="mt-7 max-w-2xl border border-white/14 bg-white/10 p-5 text-base font-medium leading-8 text-white/88 shadow-[0_18px_45px_rgba(0,0,0,0.16)] backdrop-blur md:text-lg [clip-path:polygon(0_0,100%_0,96%_100%,0_100%,4%_50%)]">
              Tell us what you need to improve, automate, connect, or secure. Macro Solution helps businesses in Mauritius turn operational challenges into practical software and IT solutions.
            </p>
          </motion.div>

          <div className="relative h-[700px] [perspective:1800px]">
            <motion.div
              style={{ rotateX: phoneRotateX, rotateY: phoneRotateY }}
              animate={{ y: [0, -12, 0], rotateX: [0, 4, 0], rotateY: [0, -6, 0] }}
              transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-0 h-[27rem] w-[min(76vw,20rem)] -translate-x-1/2 overflow-hidden rounded-[2.4rem] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.24)] backdrop-blur-xl [transform-style:preserve-3d]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_34%,rgba(255,255,255,0.04)_60%,rgba(186,230,253,0.12))]" />
              <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/20" />
              <div className="relative flex h-full flex-col justify-between rounded-[2rem] border border-white/10 bg-[#0a72c7]/65 p-5 [transform:translateZ(26px)]">
                <div>
                  <div className="flex items-center justify-between text-cyan-100">
                    <Phone size={20} />
                    <span className="text-xs font-semibold uppercase tracking-[0.28em]">Call</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">Direct Connection</h3>
                  <p className="mt-4 text-sm leading-7 text-white/78">
                    Start the discussion, explain the workflow challenge, and map the next best solution.
                  </p>
                </div>
                <div className="space-y-3">
                  {orbitLabels.map((item, index) => (
                    <motion.div
                      key={item}
                      animate={{ y: index % 2 === 0 ? [0, -4, 0] : [0, 4, 0] }}
                      transition={{ duration: 4.4 + index * 0.22, repeat: Infinity, ease: "easeInOut" }}
                      className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -14, 0], rotateY: [0, 8, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 w-[48%] rounded-[1.5rem] border border-white/12 bg-[linear-gradient(135deg,rgba(11,94,215,0.9),rgba(77,159,255,0.82))] p-4 shadow-[0_26px_80px_rgba(11,94,215,0.24)]"
            >
              <Mail className="text-white" />
              <h3 className="mt-3 text-lg font-bold">Mail Brief</h3>
              <p className="mt-2 text-sm leading-5 text-white/85">Send your needs, expected outcome, and business priorities in one clear brief.</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 3, 0, -3, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 right-0 w-[48%] rounded-[1.5rem] border border-white/12 bg-[linear-gradient(135deg,rgba(124,58,237,0.88),rgba(11,94,215,0.76))] p-4 shadow-[0_26px_80px_rgba(0,0,0,0.22)]"
            >
              <MapPin className="text-white" />
              <h3 className="mt-3 text-lg font-bold">Local Presence</h3>
              <p className="mt-2 text-sm leading-5 text-white/85">A nearby technology partner for practical collaboration and long-term support.</p>
            </motion.div>

            <motion.div
              animate={{ x: [0, 14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 top-0 hidden items-center gap-2 rounded-full border border-white/18 bg-white/10 px-5 py-3 text-sm font-semibold text-cyan-100 shadow-[0_18px_60px_rgba(255,255,255,0.12)] backdrop-blur-md xl:inline-flex"
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
