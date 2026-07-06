"use client";

import { motion } from "framer-motion";
import { Landmark, BadgePercent, CalendarRange, ClipboardList, CircleDollarSign, Fingerprint, LayoutDashboard, ShieldCheck, UserRoundCheck } from "lucide-react";

const features = [
  {
    title: "Bank transfer statements",
    icon: Landmark,
    color: "from-cyan-300 via-sky-400 to-blue-500",
    angle: 0,
  },
  {
    title: "Tax calculating & filing (PAYE)",
    icon: BadgePercent,
    color: "from-violet-300 via-fuchsia-400 to-purple-500",
    angle: 36,
  },
  {
    title: "Multiple payroll period support",
    icon: CalendarRange,
    color: "from-emerald-300 via-teal-400 to-green-500",
    angle: 72,
  },
  {
    title: "MNS / CNP compatibility",
    icon: ClipboardList,
    color: "from-amber-300 via-orange-400 to-yellow-500",
    angle: 108,
  },
  {
    title: "Customisable pay-slips",
    icon: CircleDollarSign,
    color: "from-rose-300 via-pink-400 to-red-500",
    angle: 144,
  },
  {
    title: "Employee Self-Service portal",
    icon: UserRoundCheck,
    color: "from-indigo-300 via-blue-400 to-cyan-500",
    angle: 180,
  },
  {
    title: "Role-based user profiles",
    icon: ShieldCheck,
    color: "from-lime-300 via-emerald-400 to-teal-500",
    angle: 216,
  },
  {
    title: "Management dashboards & reports",
    icon: LayoutDashboard,
    color: "from-sky-300 via-blue-400 to-indigo-500",
    angle: 252,
  },
  {
    title: "Payroll compliance & audit",
    icon: ShieldCheck,
    color: "from-orange-300 via-amber-400 to-yellow-500",
    angle: 288,
  },
  {
    title: "Biometric device integration",
    icon: Fingerprint,
    color: "from-fuchsia-300 via-violet-400 to-indigo-500",
    angle: 324,
  },
];

export default function PayrollFeatures3D() {
  return (
    <section className="relative overflow-hidden py-16 text-white md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(77,159,255,0.14),transparent_24%),radial-gradient(circle_at_82%_24%,rgba(139,92,246,0.12),transparent_22%),radial-gradient(circle_at_50%_78%,rgba(11,94,215,0.16),transparent_26%)]" />
      <motion.div
        aria-hidden="true"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[58rem] w-[58rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/6"
      />
      <motion.div
        aria-hidden="true"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/12"
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.34em] text-cyan-300">
            PRIMUS - Payroll Features at a Glance
          </p>
          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            Complete Payroll Processing Engine
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/74">
            Payroll Highlights
          </p>
        </div>

        <div className="relative mt-12 h-[980px] md:mt-16 md:h-[860px]">
          <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 md:h-[46rem] md:w-[46rem]" />
          <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/12 md:h-[54rem] md:w-[54rem]" />

          <motion.div
            animate={{ rotateZ: [0, 360] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d] md:h-[54rem] md:w-[54rem]"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.title}
                  whileHover={{ scale: 1.03 }}
                  className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/14 bg-white/10 p-4 text-center shadow-[0_28px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl"
                  style={{ transform: `translate(-50%, -50%) rotate(${feature.angle}deg) translateY(-18rem) rotate(-${feature.angle}deg)` }}
                >
                  <div className={`absolute inset-2 rounded-full bg-gradient-to-br ${feature.color} opacity-85`} />
                  <div className="absolute inset-[1px] rounded-full border border-white/22" />
                  <motion.div
                    aria-hidden="true"
                    animate={{ opacity: [0.16, 0.34, 0.16], scale: [0.94, 1.08, 0.94] }}
                    transition={{ duration: 4.6 + index * 0.22, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-full bg-white/10 blur-xl"
                  />
                  <div className="relative flex flex-col items-center justify-center">
                    <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/18 text-white shadow-[0_12px_28px_rgba(0,0,0,0.14)]">
                      <Icon size={22} />
                    </span>
                    <p className="text-sm font-bold leading-5 text-white">
                      {feature.title}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          <div className="absolute left-1/2 top-1/2 z-10 flex h-[16rem] w-[16rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/14 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(77,159,255,0.1))] text-center shadow-[0_34px_110px_rgba(0,0,0,0.22)] backdrop-blur-xl">
            <div className="px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/82">
                PRIMUS
              </p>
              <h3 className="mt-4 text-2xl font-bold leading-tight">
                Payroll Processing Engine
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
