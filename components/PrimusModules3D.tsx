"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, type MotionValue, useScroll, useTransform } from "framer-motion";
import {
  BellRing,
  BriefcaseBusiness,
  ClipboardList,
  FileWarning,
  Fingerprint,
  LineChart,
  ShieldCheck,
  UserCog,
} from "lucide-react";

const modules = [
  {
    title: "Employee Monitoring",
    description: "Real-time attendance and activity visibility with powerful dashboards for HR managers.",
    icon: LineChart,
  },
  {
    title: "Payroll Management",
    description: "Automated payroll runs, statutory calculations, payslip generation, and compliance workflows.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Employee Self-Service",
    description: "Give employees secure access to leave, documents, payslips, and profile updates anytime.",
    icon: UserCog,
  },
  {
    title: "Approvals & Workflows",
    description: "Multi-level validation for leave, claims, overtime, and HR processes to keep operations smooth.",
    icon: ClipboardList,
  },
  {
    title: "Security & Biometrics",
    description: "Role-based access, audit trails, and biometric integrations for secure workforce operations.",
    icon: Fingerprint,
  },
  {
    title: "Compliance & Alerts",
    description: "Stay ready for audits with compliance reporting, reminders, and escalation alerts.",
    icon: ShieldCheck,
  },
  {
    title: "Grievance Module v18",
    description: "Track employee concerns through a structured digital workflow built for fairness and clarity.",
    icon: FileWarning,
  },
  {
    title: "Announcements",
    description: "Share notices, HR updates, and internal communications with the right teams instantly.",
    icon: BellRing,
  },
];

function ModuleCard({
  module,
  index,
  progress,
}: {
  module: (typeof modules)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index / modules.length;
  const center = (index + 0.5) / modules.length;
  const end = (index + 1) / modules.length;
  const x = useTransform(progress, [start, center, end], [index % 2 === 0 ? -260 : 260, 0, index % 2 === 0 ? 210 : -210]);
  const y = useTransform(progress, [start, center, end], [96, 0, -96]);
  const rotateY = useTransform(progress, [start, center, end], [index % 2 === 0 ? -46 : 46, 0, index % 2 === 0 ? 32 : -32]);
  const rotateX = useTransform(progress, [start, center, end], [16, 0, -14]);
  const scale = useTransform(progress, [start, center, end], [0.66, 1, 0.7]);
  const opacity = useTransform(progress, [start, center, end], [0.12, 1, 0.16]);
  const Icon = module.icon;

  return (
    <motion.article
      style={{ x, y, rotateY, rotateX, scale, opacity, zIndex: modules.length - index }}
      className="absolute left-1/2 top-1/2 flex h-[250px] w-[min(86vw,410px)] -translate-x-1/2 -translate-y-1/2 flex-col justify-between overflow-hidden border border-white/18 bg-white/12 p-7 text-white shadow-[0_34px_100px_rgba(0,0,0,0.24)] backdrop-blur-xl [clip-path:polygon(8%_0,100%_0,92%_100%,0_100%)] [transform-style:preserve-3d]"
    >
      <span className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
      <div className="flex items-start justify-between gap-4 [transform:translateZ(34px)]">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-white/18 bg-white/12 text-hover-blue [clip-path:polygon(16%_0,100%_0,84%_100%,0_100%)]">
          <Icon size={28} />
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.26em] text-blue-100">
          Module {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="[transform:translateZ(38px)]">
        <h3 className="text-2xl font-bold leading-tight md:text-3xl">{module.title}</h3>
        <p className="mt-4 text-base leading-7 text-blue-50">{module.description}</p>
      </div>
    </motion.article>
  );
}

export default function PrimusModules3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const railX = useTransform(scrollYProgress, [0, 1], ["0%", "-52%"]);

  return (
    <section id="services" ref={sectionRef} className="relative min-h-[520vh] bg-dark-header text-white">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(77,159,255,0.2),transparent_24%),radial-gradient(circle_at_80%_74%,rgba(11,94,215,0.26),transparent_30%),linear-gradient(135deg,#001329_0%,#083B8A_48%,#001B47_100%)]" />
        <motion.div
          aria-hidden="true"
          style={{ rotate: orbitRotate }}
          className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12 shadow-[0_0_90px_rgba(77,159,255,0.16)] md:h-[48rem] md:w-[48rem]"
        />
        <motion.div aria-hidden="true" style={{ x: railX }} className="absolute bottom-10 left-0 flex w-max gap-4 opacity-35">
          {[...modules, ...modules].map((module, index) => (
            <span key={`${module.title}-${index}`} className="border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white/80 [clip-path:polygon(10%_0,100%_0,90%_100%,0_100%)]">
              {module.title}
            </span>
          ))}
        </motion.div>

        <div className="container relative z-10 mx-auto grid h-full items-center gap-10 px-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="max-w-xl">
            <p className="font-semibold uppercase tracking-[0.3em] text-hover-blue">PRIMUS - Key Modules</p>
            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Comprehensive HRMS Functionality
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-50">
              A complete HRMS command center covering monitoring, payroll, performance, employee self-service, compliance, approvals, security, and the new v18 grievance module.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-3 border border-white/18 bg-white/10 px-5 py-4 font-bold backdrop-blur [clip-path:polygon(8%_0,100%_0,92%_100%,0_100%)]">
                <ClipboardList size={22} className="text-hover-blue" />
                Scroll to explore every module
              </div>
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 2, 0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-[1.6rem] border border-white/14 bg-white/10 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl"
              >
                <Image src="/PRIMUS LOGO VERTICAL.png" alt="PRIMUS vertical logo" width={110} height={140} className="h-auto w-20 object-contain md:w-24" />
              </motion.div>
            </div>
          </div>

          <div className="relative h-[600px] [perspective:1500px]">
            {modules.map((module, index) => (
              <ModuleCard key={module.title} module={module} index={index} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
