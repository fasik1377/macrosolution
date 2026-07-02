"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, type MotionValue, useScroll, useTransform } from "framer-motion";
import {
  BellRing,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  ClipboardList,
  FileWarning,
  Fingerprint,
  LayoutDashboard,
  LineChart,
  ShieldCheck,
  Smartphone,
  Star,
  UserCog,
} from "lucide-react";

const modules = [
  {
    title: "Dashboard & Monitoring",
    description: "Leave charts, org hierarchy, aging analysis, HR statistics.",
    icon: LineChart,
  },
  {
    title: "HR & Payroll Processes",
    description: "Leave register updates, government compensation, payroll transactions.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Performance & Grievance",
    description: "Monthly & yearly appraisals, KRA dashboards, grievance tracking.",
    icon: Star,
  },
  {
    title: "Employee Self-Service",
    description: "Download payslips, submit claims, OT applications, grievances.",
    icon: Smartphone,
  },
  {
    title: "Master Data Management",
    description: "Banks, departments, positions, holidays, branches, leave policies.",
    icon: Building2,
  },
  {
    title: "Leave & Claims",
    description: "Leave applications, monthly claims, OT claims, automated calculations.",
    icon: ClipboardList,
  },
  {
    title: "Statutory Reports",
    description: "Emolument, PAYE, CSG, PRGF and yearly statutory returns.",
    icon: LayoutDashboard,
  },
  {
    title: "System Configuration",
    description: "Company profile, financial year, system parameters and custom themes.",
    icon: BellRing,
  },
  {
    title: "Employee Management",
    description: "Profiles, career history, document storage, transfers and promotions.",
    icon: UserCog,
  },
  {
    title: "Approval Workflow",
    description: "Multi-level leave, claims and overtime approval authorisation.",
    icon: ClipboardCheck,
  },
  {
    title: "User & Security",
    description: "Role-based access, password control, audit logs, activity tracking.",
    icon: ShieldCheck,
  },
  {
    title: "v18 New: Grievance Module",
    description: "Newly added: raise, track and resolve grievances end-to-end.",
    icon: FileWarning,
  },
];

function ModuleCard({
  module,
  index,
  progress,
  activeIndex,
}: {
  module: (typeof modules)[number];
  index: number;
  progress: MotionValue<number>;
  activeIndex: number;
}) {
  const distance = index - activeIndex;
  const wrappedDistance = ((distance + modules.length + modules.length / 2) % modules.length) - modules.length / 2;
  const center = (index + 0.5) / modules.length;
  const end = (index + 1) / modules.length;
  const x = wrappedDistance * 190;
  const y = Math.abs(wrappedDistance) * 18;
  const rotateY = wrappedDistance * -16;
  const rotateX = Math.abs(wrappedDistance) * 4;
  const scale = Math.max(0.72, 1 - Math.abs(wrappedDistance) * 0.12);
  const opacity = Math.max(0.18, 1 - Math.abs(wrappedDistance) * 0.22);
  const Icon = module.icon;

  return (
    <motion.article
      style={{ x, y, rotateY, rotateX, scale, opacity, zIndex: modules.length - Math.abs(wrappedDistance) }}
      className="absolute left-1/2 top-1/2 flex h-[280px] w-[min(88vw,440px)] -translate-x-1/2 -translate-y-1/2 flex-col justify-between overflow-hidden rounded-[2rem] border border-white/18 bg-white/12 p-7 text-white shadow-[0_34px_100px_rgba(0,0,0,0.24)] backdrop-blur-xl [transform-style:preserve-3d]"
    >
      <span className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
      <div className="flex items-start justify-between gap-4 [transform:translateZ(34px)]">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1rem] border border-white/18 bg-white/16 text-cyan-100">
          <Icon size={28} />
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.26em] text-blue-50">
          Module {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="[transform:translateZ(38px)]">
        <h3 className="text-2xl font-bold leading-tight md:text-3xl">{module.title}</h3>
        <p className="mt-4 text-base leading-7 text-white/88">{module.description}</p>
      </div>
    </motion.article>
  );
}

export default function PrimusModules3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const railX = useTransform(scrollYProgress, [0, 1], ["0%", "-52%"]);

  return (
    <section id="services" ref={sectionRef} className="relative min-h-[220vh] overflow-hidden text-white">
      <div className="sticky top-0 h-screen overflow-hidden [perspective:1500px]">
        <motion.div
          aria-hidden="true"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.34),transparent_22%),radial-gradient(circle_at_80%_74%,rgba(111,207,255,0.24),transparent_28%),linear-gradient(135deg,#eafaff_0%,#9bddff_24%,#0096FF_52%,#69d0ff_76%,#f3fcff_100%)] bg-[length:200%_200%]"
        />
        <motion.div
          aria-hidden="true"
          style={{ rotate: orbitRotate }}
          className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/18 shadow-[0_0_90px_rgba(77,159,255,0.16)] md:h-[48rem] md:w-[48rem]"
        />
        <motion.div
          aria-hidden="true"
          animate={{ opacity: [0.12, 0.34, 0.12], scale: [0.94, 1.06, 0.94] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] top-[12%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.24),transparent_68%)] blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{ opacity: [0.12, 0.28, 0.12], scale: [0.92, 1.08, 0.92] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[8%] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(0,150,255,0.24),transparent_68%)] blur-3xl"
        />

        {["UI", "API", "DB", "HR", "PAY", "ERP"].map((label, index) => (
          <motion.div
            key={label}
            aria-hidden="true"
            animate={{ y: [0, -16, 0], scale: [1, 1.08, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.6 }}
            className={
              "absolute z-0 flex h-14 w-14 items-center justify-center rounded-full border border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.08))] text-[11px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_12px_30px_rgba(0,0,0,0.14)] backdrop-blur-md " +
              ["left-[10%] top-[22%]", "left-[24%] top-[14%]", "right-[24%] top-[18%]", "right-[12%] top-[30%]", "left-[14%] bottom-[18%]", "right-[18%] bottom-[14%]"][index]
            }
          >
            <span className="relative z-10">{label}</span>
          </motion.div>
        ))}

        <motion.div aria-hidden="true" style={{ x: railX }} className="absolute bottom-10 left-0 flex w-max gap-4 opacity-35">
          {[...modules, ...modules].map((module, index) => (
            <span key={module.title + "-" + index} className="rounded-[1rem] border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white/80">
              {module.title}
            </span>
          ))}
        </motion.div>

        <div className="container relative z-10 mx-auto grid h-full items-center gap-10 px-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="max-w-xl">
            <p className="font-semibold uppercase tracking-[0.3em] text-cyan-100">PRIMUS - Key Modules</p>
            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Comprehensive HRMS Functionality
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80">
              A complete HRMS command center covering monitoring, payroll, performance, employee self-service, compliance, approvals, security, grievance handling, and daily workforce operations.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-3 rounded-[1.2rem] border border-white/18 bg-white/12 px-5 py-4 font-bold text-white shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur">
                <ClipboardList size={22} className="text-cyan-100" />
                Scroll to explore every module
              </div>
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 2, 0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-[1.6rem] border border-white/14 bg-white/10 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl"
              >
                <Image src="/primus-logo-vertical.png" alt="PRIMUS vertical logo" width={110} height={140} className="h-auto w-20 object-contain md:w-24" />
              </motion.div>
            </div>
          </div>

          <div className="relative h-[700px] [perspective:1500px]">
            {modules.map((module, index) => (
              <ModuleCard key={module.title} module={module} index={index} progress={scrollYProgress} activeIndex={activeIndex} />
            ))}

            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveIndex((current) => (current - 1 + modules.length) % modules.length)}
                className="rounded-full border border-white/16 bg-white/12 px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-[0_14px_36px_rgba(0,0,0,0.18)] backdrop-blur-md transition hover:bg-white/18"
              >
                Prev
              </button>
              <div className="rounded-full border border-white/16 bg-white/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-white/80 backdrop-blur-md">
                {activeIndex + 1} / {modules.length}
              </div>
              <button
                type="button"
                onClick={() => setActiveIndex((current) => (current + 1) % modules.length)}
                className="rounded-full border border-white/16 bg-white/12 px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-[0_14px_36px_rgba(0,0,0,0.18)] backdrop-blur-md transition hover:bg-white/18"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




