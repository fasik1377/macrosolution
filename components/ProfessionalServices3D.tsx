"use client";

import { motion } from "framer-motion";
import { Boxes, MonitorCog, ShieldCheck, Wrench } from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    description:
      "We design tailor-made software solutions that address the unique requirements of businesses across various industries. Our custom-built applications streamline operations, improve efficiency, enhance productivity and support long-term business growth through innovative scalable technology.",
    icon: MonitorCog,
    orbit: "md:left-[50%] md:top-[20%]",
    card: "md:-translate-x-1/2",
    accent: "from-cyan-300/55 via-sky-400/35 to-transparent",
    glow: "bg-cyan-300/16",
    size: "w-[min(92vw,620px)]",
  },
  {
    title: "Cybersecurity",
    description:
      "Vulnerability assessments, firewall management and security policy implementation.",
    icon: ShieldCheck,
    orbit: "md:left-[12%] md:top-[56%]",
    card: "",
    accent: "from-violet-300/55 via-fuchsia-400/35 to-transparent",
    glow: "bg-violet-300/16",
    size: "w-[min(82vw,320px)]",
  },
  {
    title: "IT Infrastructure",
    description:
      "Network setup, server configuration, cloud migration and hardware procurement & support.",
    icon: Boxes,
    orbit: "md:left-[50%] md:top-[82%]",
    card: "md:-translate-x-1/2",
    accent: "from-emerald-300/55 via-teal-400/35 to-transparent",
    glow: "bg-emerald-300/16",
    size: "w-[min(82vw,360px)]",
  },
  {
    title: "Managed Services",
    description:
      "Ongoing IT support, monitoring and maintenance ensuring maximum uptime and performance.",
    icon: Wrench,
    orbit: "md:left-[88%] md:top-[56%]",
    card: "md:-translate-x-full",
    accent: "from-amber-300/55 via-orange-400/35 to-transparent",
    glow: "bg-amber-300/16",
    size: "w-[min(82vw,320px)]",
  },
];

const connectors = [
  "left-[24%] top-[48%] w-[28%] rotate-[-18deg]",
  "left-[50%] top-[34%] h-[20%] w-px -translate-x-1/2",
  "left-[50%] top-[58%] h-[20%] w-px -translate-x-1/2",
  "right-[24%] top-[48%] w-[28%] rotate-[18deg]",
];

export default function ProfessionalServices3D() {
  return (
    <section className="relative overflow-hidden py-16 text-white md:py-24">
      <motion.div
        aria-hidden="true"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[52rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/6"
      />
      <motion.div
        aria-hidden="true"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/12"
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.34em] text-cyan-300">
            Professional Services
          </p>
          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            End-to-End IT Support for Your Business
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/74">
            A new orbit-based 3D service system that presents software, security, infrastructure and managed support as one connected business technology ecosystem.
          </p>
        </div>

        <div className="relative mt-10 [perspective:2200px] md:mt-16 md:h-[760px]">
          <motion.div
            animate={{ rotateX: [0, 6, 0], rotateY: [0, -5, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="relative grid gap-5 [transform-style:preserve-3d] md:absolute md:inset-0 md:block"
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8 shadow-[0_0_120px_rgba(77,159,255,0.08)] md:block md:h-[38rem] md:w-[38rem]" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/12 md:block md:h-[26rem] md:w-[26rem]" />

            {connectors.map((connector, index) => (
              <motion.span
                key={connector}
                animate={{ opacity: [0.18, 0.44, 0.18], scaleX: [0.94, 1.04, 0.94] }}
                transition={{ duration: 4.6 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute hidden origin-left bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.7),transparent)] md:block ${connector} ${connector.includes("w-px") ? "h-[22%]" : "h-px"}`}
              />
            ))}

            <motion.div
              animate={{ y: [0, -10, 0], scale: [0.98, 1.02, 0.98] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto h-[8rem] w-full max-w-[18rem] border border-cyan-300/18 bg-[linear-gradient(145deg,rgba(255,255,255,0.14),rgba(77,159,255,0.1))] shadow-[0_26px_100px_rgba(0,0,0,0.22)] backdrop-blur-xl [clip-path:polygon(18%_0,82%_0,100%_18%,100%_82%,82%_100%,18%_100%,0_82%,0_18%)] md:absolute md:left-1/2 md:top-1/2 md:h-[10rem] md:w-[10rem] md:-translate-x-1/2 md:-translate-y-1/2"
            >
              <div className="flex h-full w-full items-center justify-center text-center text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100">
                Service Core
              </div>
            </motion.div>

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  whileHover={{ y: -14, rotateX: 8, rotateY: index % 2 === 0 ? -8 : 8, scale: 1.02 }}
                  className={`relative mx-auto w-full overflow-hidden border border-white/14 bg-white/8 p-5 shadow-[0_34px_110px_rgba(0,0,0,0.22)] backdrop-blur-xl [clip-path:polygon(0_0,100%_0,100%_86%,88%_100%,0_100%)] [transform-style:preserve-3d] sm:p-7 md:absolute md:mx-0 md:-translate-y-1/2 ${service.orbit} ${service.card} ${service.size}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-70`} />
                  <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.72),transparent)]" />
                  <motion.div
                    aria-hidden="true"
                    animate={{ opacity: [0.14, 0.3, 0.14], scale: [0.94, 1.06, 0.94] }}
                    transition={{ duration: 4.8 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute -right-6 top-6 h-24 w-24 rounded-full blur-2xl ${service.glow}`}
                  />

                  <div className="relative [transform-style:preserve-3d]">
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-14 w-14 items-center justify-center border border-white/16 bg-white/10 text-white shadow-[0_18px_44px_rgba(0,0,0,0.16)] [clip-path:polygon(0_0,100%_0,82%_100%,0_100%)] [transform:translateZ(30px)]">
                        <Icon size={26} />
                      </span>
                      <span className="text-3xl font-black text-white/10 [transform:translateZ(18px)]">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-7 text-2xl font-bold [transform:translateZ(30px)]">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-white/76 [transform:translateZ(24px)]">
                      {service.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
