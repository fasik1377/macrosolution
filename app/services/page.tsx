"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight, Cpu, Layers3, Radar, Settings2, Workflow } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import DataNetworkBackground from "@/components/DataNetworkBackground";
import TechPageBackground from "@/components/TechPageBackground";
import { services } from "@/components/companyProfile";
import { fadeUp, stagger } from "@/components/motion";

const ServicesScrollHero3D = dynamic(() => import("@/components/ServicesScrollHero3D"), {
  ssr: false,
  loading: () => <div aria-hidden="true" className="min-h-[34rem] md:min-h-[42rem]" />,
});

const approach = [
  "Discovery sessions that clarify your business vision, workflows, users, and technical priorities.",
  "Solution choices that stay practical for budget, performance, security, and supportability.",
  "Implementation, training, and support focused on adoption, not just feature delivery.",
];

const deliveryLayers = [
  { title: "Strategy", icon: Radar, text: "We align technology decisions with business direction and operational reality." },
  { title: "System Design", icon: Layers3, text: "Architecture, integrations, and scalable product thinking come together early." },
  { title: "Execution", icon: Cpu, text: "Implementation moves with quality controls, testing rhythm, and delivery focus." },
  { title: "Optimization", icon: Workflow, text: "Launch is only the beginning - we refine for adoption, speed, and resilience." },
];

export default function ServicesPage() {
  return (
    <main className="relative isolate overflow-x-clip bg-[#0000FF] text-white">
      <TechPageBackground />

      <Navbar />
      <ServicesScrollHero3D />

      <section className="relative -mt-10 overflow-hidden py-10 text-white [perspective:2200px] md:-mt-14 md:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(77,159,255,0.12),transparent_24%),radial-gradient(circle_at_84%_70%,rgba(11,94,215,0.16),transparent_26%)]" />
        <motion.div
          aria-hidden="true"
          animate={{ rotate: [0, 180, 360] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8 shadow-[0_0_90px_rgba(77,159,255,0.14)] md:h-[42rem] md:w-[42rem]"
        />

        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="font-semibold uppercase tracking-[0.28em] text-cyan-300">Core capabilities</p>
            <h2 className="mt-5 text-3xl font-bold md:text-5xl">A broader delivery team for your business systems</h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              From packaged software to custom builds, we design, create, and implement solutions that are easier to operate, easier to support, and more aligned with how your team works.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2 xl:grid-cols-4"
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  variants={fadeUp}
                  whileHover={{ y: -16, rotateX: 7, rotateY: index % 2 === 0 ? 8 : -8, scale: 1.03 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 p-8 shadow-[0_26px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl [transform-style:preserve-3d]"
                >
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-button-blue/14 blur-2xl transition duration-500 group-hover:scale-150" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(77,159,255,0.12),transparent_42%,rgba(255,255,255,0.05),rgba(77,159,255,0.08))]" />
                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-hover-blue/70 to-transparent" />
                  <motion.div
                    animate={{ rotateY: [0, 12, 0, -12, 0], y: [0, -4, 0, 4, 0] }}
                    transition={{ duration: 5.8 + index * 0.18, repeat: Infinity, ease: "easeInOut" }}
                    className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-button-blue text-white shadow-[0_18px_45px_rgba(11,94,215,0.28)] [transform:translateZ(34px)]"
                  >
                    <Icon size={28} />
                  </motion.div>
                  <h3 className="relative mt-6 text-2xl font-bold [transform:translateZ(26px)]">{service.title}</h3>
                  <p className="relative mt-4 leading-7 text-white/72">{service.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 text-white [perspective:2200px] md:py-14">
        <DataNetworkBackground variant="light" className="opacity-88" />
        <div className="container relative z-10 mx-auto grid items-center gap-12 px-6 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="font-semibold uppercase tracking-[0.28em] text-cyan-300">How we work</p>
            <h2 className="mt-5 text-3xl font-bold md:text-5xl">Delivery with clarity, control, and room to scale.</h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              We do not just ship features. We shape delivery into a reliable, transparent journey that helps teams understand progress and trust outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            whileHover={{ rotateY: -5, rotateX: 3, scale: 1.015 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/12 bg-white/8 p-8 shadow-[0_32px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl [transform-style:preserve-3d]"
          >
            <div className="space-y-4">
              {approach.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 [transform:translateZ(22px)]"
                >
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-hover-blue/20 text-hover-blue shadow-lg">
                    <Settings2 size={20} />
                  </div>
                  <p className="leading-7 text-gray-200">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 text-white [perspective:2200px] md:py-14">
        <DataNetworkBackground variant="light" className="opacity-85" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="font-semibold uppercase tracking-[0.3em] text-cyan-300"
            >
              Delivery Journey
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-5 text-3xl font-bold md:text-5xl"
            >
              A new 3D process system with layered motion and guided flow.
            </motion.h2>
          </div>

          <div className="relative mt-12 h-[38rem] md:mt-16">
            {deliveryLayers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, y: 40, rotateY: index % 2 === 0 ? -10 : 10 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  whileHover={{ y: -14, rotateX: 8, rotateY: index % 2 === 0 ? -8 : 8, scale: 1.03 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute left-1/2 w-[min(88vw,38rem)] -translate-x-1/2 rounded-[2rem] border border-white/12 bg-white/8 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.24)] backdrop-blur-xl [transform-style:preserve-3d]"
                  style={{ top: `${index * 94}px`, zIndex: 12 - index }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(77,159,255,0.12),transparent_42%,rgba(255,255,255,0.04),rgba(77,159,255,0.08))]" />
                  <div className="relative flex items-start justify-between gap-4 [transform:translateZ(22px)]">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">0{index + 1}</p>
                      <h3 className="mt-4 text-3xl font-bold">{layer.title}</h3>
                      <p className="mt-4 max-w-xl leading-7 text-white/72">{layer.text}</p>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-button-blue text-white shadow-[0_16px_40px_rgba(11,94,215,0.22)]">
                      <Icon size={26} />
                    </div>
                  </div>
                  {index < deliveryLayers.length - 1 && (
                    <motion.div
                      animate={{ x: [0, 12, 0] }}
                      transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -bottom-8 right-10 flex items-center gap-2 text-cyan-200"
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.3em]">Next</span>
                      <ArrowRight size={16} />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}




