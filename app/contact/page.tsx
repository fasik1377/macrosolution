"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Clock, Mail, MapPin, Phone, Send, Settings, ShieldCheck } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import DataNetworkBackground from "@/components/DataNetworkBackground";
import TechPageBackground from "@/components/TechPageBackground";
import { company, products } from "@/components/companyProfile";
import { fadeUp, stagger } from "@/components/motion";

const ContactScrollHero3D = dynamic(() => import("@/components/ContactScrollHero3D"), {
  ssr: false,
  loading: () => <div aria-hidden="true" className="min-h-[34rem] md:min-h-[42rem]" />,
});

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: company.email,
  },
  {
    icon: Phone,
    label: "Phone",
    value: company.phone,
  },
  {
    icon: MapPin,
    label: "Location",
    value: company.location,
  },
];

const responseItems = [
  { icon: Clock, title: "Business Discovery", text: "We clarify your business vision, workflows, users, timelines, and system requirements." },
  { icon: Settings, title: "Tailored Solution", text: "You get a focused plan for ERP, POS, payroll, HRMS, DMS, cloud, security, or custom software." },
  { icon: ShieldCheck, title: "Reliable Implementation", text: "Implementation, support, security, training, hardware, and network guidance stay aligned with your business." },
];

export default function ContactPage() {
  return (
    <main className="relative isolate overflow-x-clip bg-[#0000FF] text-white">
      <TechPageBackground variant="ecosystem" />

      <Navbar />

      <section className="relative overflow-hidden pb-14 pt-40 text-white [perspective:1800px] md:pb-16 md:pt-48">
        <DataNetworkBackground variant="light" className="opacity-85" />
        <div className="container relative z-10 mx-auto grid gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold">
              Let&apos;s talk about your next system
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-lg leading-8 text-white/72">
              Whether you need POS software, payroll compliance, ERP, mobile apps, document management, fuel industry software, IT security, hardware, networks, or infrastructure support, we can help you define the right path.
            </motion.p>

            <div className="mt-10 space-y-4">
              {contactCards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    whileHover={{ y: -6, rotateX: 4, rotateY: index % 2 === 0 ? -4 : 4 }}
                    className="flex items-center gap-4 rounded-[1.8rem] border border-white/10 bg-white/8 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-button-blue/10 text-cyan-200">
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-widest text-white/50">{item.label}</p>
                      <p className="mt-1 font-bold text-white">{item.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40, rotateX: 4 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-10"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-white/75">Name</span>
                <input className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-4 text-white outline-none transition focus:border-cyan-300" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-white/75">Company</span>
                <input className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-4 text-white outline-none transition focus:border-cyan-300" placeholder="Company name" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-white/75">Email</span>
                <input type="email" className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-4 text-white outline-none transition focus:border-cyan-300" placeholder="you@company.com" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-white/75">Solution</span>
                <select className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-4 text-white outline-none transition focus:border-cyan-300">
                  {products.map((product) => (
                    <option key={product.title} className="text-black">{product.title}</option>
                  ))}
                  <option className="text-black">Mobile Application Development</option>
                  <option className="text-black">Web Application Development</option>
                  <option className="text-black">Custom Software Development</option>
                  <option className="text-black">IT Security, Hardware & Networks</option>
                </select>
              </label>
            </div>

            <label className="mt-5 block">
              <span className="text-sm font-bold text-white/75">Message</span>
              <textarea className="mt-2 min-h-40 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-4 text-white outline-none transition focus:border-cyan-300" placeholder="Tell us about your workflow, problem, or project." />
            </label>

            <button type="button" className="mt-6 inline-flex items-center gap-2 rounded-full bg-button-blue px-7 py-4 font-bold text-white transition hover:bg-hover-blue">
              Send inquiry
              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </section>

      <ContactScrollHero3D />

      <section className="relative overflow-hidden py-14 text-white md:py-20">
        <DataNetworkBackground variant="dark" className="opacity-72" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {responseItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10, rotateY: index % 2 === 0 ? 6 : -6, rotateX: 5 }}
                  viewport={{ once: true }}
                  className="rounded-[2rem] border border-white/10 bg-white/8 p-8 backdrop-blur-xl"
                >
                  <Icon className="text-hover-blue" size={32} />
                  <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-white/72">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 text-white [perspective:1800px] md:py-20">
        <DataNetworkBackground variant="light" className="opacity-85" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-cyan-300">Connection Points</p>
            <h2 className="mt-5 text-3xl font-bold md:text-5xl">A dynamic communication grid for starting your next project.</h2>
          </div>
          <div className="mt-10 grid gap-8 md:mt-12 lg:grid-cols-3">
            {[
              "Tell us your goals",
              "Share your workflow",
              "Plan the right solution",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30, rotateX: 12 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                whileHover={{ y: -12, rotateY: index % 2 === 0 ? -8 : 8 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="rounded-[2rem] border border-white/12 bg-white/8 p-8 shadow-[0_30px_100px_rgba(0,0,0,0.22)] backdrop-blur-xl"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">Step 0{index + 1}</div>
                <h3 className="mt-6 text-2xl font-bold">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}



