"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, type MotionValue, useScroll, useTransform } from "framer-motion";
import { BadgeCheck, BarChart3, CalendarDays, Clock3, DollarSign, UserRound } from "lucide-react";

const features = [
  { title: "Payroll Processing", icon: DollarSign },
  { title: "Employee Self-Service", icon: UserRound },
  { title: "Leave Management", icon: CalendarDays },
  { title: "Attendance Tracking", icon: Clock3 },
  { title: "MRA/PAYE Compliance", icon: BadgeCheck },
  { title: "Reports & Analytics", icon: BarChart3 },
];

function FeatureTile({
  feature,
  index,
  progress,
}: {
  feature: (typeof features)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index / features.length;
  const center = (index + 0.5) / features.length;
  const end = (index + 1) / features.length;
  const x = useTransform(progress, [start, center, end], [index % 2 === 0 ? -180 : 180, 0, index % 2 === 0 ? 170 : -170]);
  const y = useTransform(progress, [start, center, end], [80, 0, -80]);
  const rotateY = useTransform(progress, [start, center, end], [index % 2 === 0 ? -38 : 38, 0, index % 2 === 0 ? 28 : -28]);
  const scale = useTransform(progress, [start, center, end], [0.72, 1, 0.74]);
  const opacity = useTransform(progress, [start, center, end], [0.2, 1, 0.18]);
  const Icon = feature.icon;

  return (
    <motion.div
      style={{ x, y, rotateY, scale, opacity, zIndex: features.length - index }}
      className="absolute left-1/2 top-1/2 flex h-28 w-[min(74vw,320px)] -translate-x-1/2 -translate-y-1/2 items-center gap-4 border border-white/18 bg-white/14 p-5 text-white shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl [clip-path:polygon(9%_0,100%_0,91%_100%,0_100%)] [transform-style:preserve-3d]"
    >
      <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-hover-blue/18 text-hover-blue [clip-path:polygon(16%_0,100%_0,84%_100%,0_100%)] [transform:translateZ(34px)]">
        <Icon size={28} />
      </span>
      <span className="text-xl font-bold leading-tight [transform:translateZ(30px)]">{feature.title}</span>
    </motion.div>
  );
}

export default function PrimusShowcase3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const platformRotate = useTransform(scrollYProgress, [0, 1], [-18, 18]);
  const platformY = useTransform(scrollYProgress, [0, 0.5, 1], [56, 0, -42]);
  const platformScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.86, 1, 0.92]);
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 240]);

  return (
    <section ref={sectionRef} className="relative min-h-[360vh] bg-[#F5F9FF] text-gray-950">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(11,94,215,0.16),transparent_24%),radial-gradient(circle_at_76%_72%,rgba(35,197,170,0.18),transparent_26%),linear-gradient(135deg,#F8FBFF_0%,#ffffff_45%,#DCEBFF_100%)]" />
        <motion.div
          aria-hidden="true"
          style={{ rotate: orbitRotate }}
          className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-blue/12 shadow-[0_0_100px_rgba(11,94,215,0.12)] md:h-[48rem] md:w-[48rem]"
        />

        <div className="container relative z-10 mx-auto grid h-full items-center gap-10 px-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-2xl">
            <p className="font-semibold uppercase tracking-[0.3em] text-brand-blue">PRIMUS - HR & Payroll System</p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-dark-header md:text-6xl">
              Smart Workforce Management Platform
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              PRIMUS is Macro Solution&apos;s flagship Human Resource, Attendance & Payroll Management System, built for modern enterprises in Mauritius and the Indian Ocean region.
            </p>
            <p className="mt-5 text-lg leading-8 text-gray-700">
              Used by leading organisations, PRIMUS handles the complete employee lifecycle from onboarding to payroll compliance.
            </p>
          </div>

          <div className="relative h-[620px] [perspective:1500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              whileHover={{ y: -8, rotate: 4, scale: 1.04 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute right-6 top-6 z-20 rounded-[1.5rem] border border-brand-blue/10 bg-white/90 p-3 shadow-[0_22px_50px_rgba(8,59,138,0.18)] backdrop-blur-sm"
            >
              <Image src="/PRIMUS LOGO.png" alt="PRIMUS logo" width={140} height={56} className="h-auto w-28 object-contain md:w-36" />
            </motion.div>

            <motion.div
              style={{ rotateY: platformRotate, y: platformY, scale: platformScale }}
              className="absolute left-1/2 top-1/2 h-[430px] w-[min(86vw,520px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden border border-white/70 bg-white/78 p-7 shadow-[0_42px_120px_rgba(0,40,104,0.18)] backdrop-blur-xl [clip-path:polygon(7%_0,100%_0,93%_100%,0_100%)] [transform-style:preserve-3d]"
            >
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/60 to-transparent" />
              <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-hover-blue/50 to-transparent" />
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-blue/10 blur-3xl" />
              <div className="absolute -bottom-14 -left-12 h-44 w-44 rounded-full bg-hover-blue/14 blur-3xl" />

              <div className="relative flex h-full flex-col justify-between [transform:translateZ(36px)]">
                <div>
                  <span className="inline-flex items-center gap-2 border border-brand-blue/10 bg-[#F5F9FF] px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-blue [clip-path:polygon(8%_0,100%_0,92%_100%,0_100%)]">
                    HRMS Platform
                  </span>
                  <h3 className="mt-5 text-5xl font-bold text-dark-header">PRIMUS</h3>
                  <p className="mt-4 max-w-md text-base leading-7 text-gray-600">
                    Manage attendance, leave, payroll, ESS, reports, statutory compliance, and employee operations on one modern platform.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Payroll",
                    "Attendance",
                    "Leave",
                    "Reports",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between border border-brand-blue/10 bg-[#F5F9FF] px-5 py-4 text-sm font-bold text-dark-header shadow-sm [clip-path:polygon(4%_0,100%_0,96%_100%,0_100%)]"
                    >
                      <span>{item}</span>
                      <span className="h-2 w-24 bg-gradient-to-r from-hover-blue via-button-blue to-dark-header" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {features.map((feature, index) => (
              <FeatureTile key={feature.title} feature={feature} index={index} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
