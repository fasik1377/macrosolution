"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  Database,
  Globe,
  MonitorSmartphone,
  Settings2,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Page3DHero from "@/components/Page3DHero";
import { fadeUp, stagger } from "@/components/motion";

const services = [
  {
    title: "Enterprise Resource Planning",
    text: "Connected finance, inventory, sales, purchasing, and operational workflows for growing businesses.",
    icon: Database,
  },
  {
    title: "POS",
    text: "Retail POS systems for single-store and multi-store teams that need cleaner sales and stock control.",
    icon: MonitorSmartphone,
  },
  {
    title: "Payroll & HR Software",
    text: "Payroll, compliance, leave, attendance, and employee management built around reliable daily operations.",
    icon: Users,
  },
  {
    title: "Mobile Application Development",
    text: "Native and cross-platform mobile apps for customer-facing journeys, field teams, and internal workflows.",
    icon: Smartphone,
  },
  {
    title: "Web Application Development",
    text: "Fast, maintainable web platforms for portals, operations, client dashboards, and business automation.",
    icon: Globe,
  },
  {
    title: "Custom Software Development",
    text: "Purpose-built systems designed around the way your business actually runs instead of forcing process compromises.",
    icon: Code2,
  },
  {
    title: "Cloud & DMS",
    text: "Cloud deployment, hosting, backups, and document management systems that improve access and control.",
    icon: Cloud,
  },
  {
    title: "IT Security & Networks",
    text: "Infrastructure protection, device security, network design, and practical support for resilient business operations.",
    icon: Shield,
  },
];

const approach = [
  "Discovery sessions that clarify users, workflows, and technical priorities.",
  "Architecture choices that stay practical for budget, performance, and supportability.",
  "Implementation focused on adoption, not just feature delivery.",
];

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden bg-background text-gray-900">
      <Navbar />
      <Page3DHero
        eyebrow="Services"
        title="Software and IT services built around real business flow."
        description="Macro Solution delivers ERP, POS, HR, mobile, web, cloud, and custom development services shaped to improve daily operations, visibility, and growth."
        tone="services"
      />

      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(11,94,215,0.12),transparent_24%),radial-gradient(circle_at_88%_16%,rgba(77,159,255,0.14),transparent_28%),linear-gradient(180deg,#F5F9FF_0%,#ffffff_100%)]" />
        <div className="container relative mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="font-semibold uppercase tracking-[0.28em] text-brand-blue">Core capabilities</p>
            <h2 className="mt-5 text-3xl font-bold md:text-4xl">A broader delivery team for your business systems</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From packaged software to custom builds, we design solutions that are easier to operate, easier to support, and more aligned with how your team works.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  variants={fadeUp}
                  whileHover={{ y: -16, rotateX: 7, rotateY: index % 2 === 0 ? 6 : -6, scale: 1.025 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/82 p-8 shadow-[0_26px_70px_rgba(0,40,104,0.12)] backdrop-blur [transform-style:preserve-3d]"
                >
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-button-blue/14 blur-2xl transition duration-500 group-hover:scale-150" />
                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-hover-blue/70 to-transparent" />
                  <motion.div
                    animate={{ rotateY: [0, 12, 0, -12, 0], y: [0, -4, 0, 4, 0] }}
                    transition={{ duration: 5.8 + index * 0.18, repeat: Infinity, ease: "easeInOut" }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-button-blue text-white shadow-[0_18px_45px_rgba(11,94,215,0.28)] [transform:translateZ(34px)]"
                  >
                    <Icon size={28} />
                  </motion.div>
                  <h3 className="mt-6 text-2xl font-bold text-dark-header [transform:translateZ(26px)]">{service.title}</h3>
                  <p className="mt-4 leading-7 text-gray-600">{service.text}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-dark-header py-28 text-white">
        <div className="container mx-auto grid items-center gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="font-semibold uppercase tracking-[0.28em] text-hover-blue">How we work</p>
            <h2 className="mt-5 text-3xl font-bold md:text-4xl">Delivery with clarity, control, and room to scale.</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ rotateY: -5, rotateX: 3, scale: 1.015 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-[0_32px_90px_rgba(0,0,0,0.22)] backdrop-blur [transform-style:preserve-3d]"
          >
            <div className="space-y-4">
              {approach.map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 [transform:translateZ(22px)]">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-hover-blue/20 text-hover-blue shadow-lg">
                    <Settings2 size={20} />
                  </div>
                  <p className="leading-7 text-gray-200">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
