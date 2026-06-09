"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, ShieldCheck, Clock, Settings } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Page3DHero from "@/components/Page3DHero";
import { fadeUp, stagger } from "@/components/motion";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "info@macrosolution.mu",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+230 589 006 07",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mauritius",
  },
];

const responseItems = [
  { icon: Clock, title: "Quick Discovery", text: "We clarify your workflow, users, timelines, and system requirements." },
  { icon: Settings, title: "Tailored Proposal", text: "You get a focused solution plan for ERP, POS, HRMS, DMS, cloud, or custom software." },
  { icon: ShieldCheck, title: "Reliable Delivery", text: "Implementation, support, security, and training stay aligned with your business." },
];

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden bg-background text-gray-900">
      <Navbar />
      <Page3DHero
        eyebrow="Contact Macro Solution"
        title="Start a smarter business system."
        description="Tell us what you need to improve, automate, connect, or secure. Macro Solution helps businesses in Mauritius turn operational challenges into practical software and IT solutions."
        tone="contact"
      />

      <section className="py-28">
        <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold">
              Let&apos;s talk about your next system
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-lg leading-8 text-gray-600">
              Whether you need POS software, payroll compliance, ERP, mobile apps, document management, fuel industry software, IT security, or infrastructure support, we can help you define the right path.
            </motion.p>

            <div className="mt-10 space-y-4">
              {contactCards.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    whileHover={{ y: -6, rotateX: 4 }}
                    className="flex items-center gap-4 rounded-2xl border border-brand-blue/10 bg-white p-5 shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-button-blue/10 text-button-blue">
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">{item.label}</p>
                      <p className="mt-1 font-bold">{item.value}</p>
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
            className="rounded-3xl border border-brand-blue/10 bg-background p-6 shadow-2xl md:p-10"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-gray-700">Name</span>
                <input className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-4 outline-none transition focus:border-button-blue" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-gray-700">Company</span>
                <input className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-4 outline-none transition focus:border-button-blue" placeholder="Company name" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-gray-700">Email</span>
                <input type="email" className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-4 outline-none transition focus:border-button-blue" placeholder="you@company.com" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-gray-700">Solution</span>
                <select className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-4 outline-none transition focus:border-button-blue">
                  <option>ERP</option>
                  <option>POS</option>
                  <option>Payroll & HRMS</option>
                  <option>DMS</option>
                  <option>Mobile App</option>
                  <option>IT Security</option>
                </select>
              </label>
            </div>

            <label className="mt-5 block">
              <span className="text-sm font-bold text-gray-700">Message</span>
              <textarea className="mt-2 min-h-40 w-full rounded-xl border border-gray-200 bg-white px-4 py-4 outline-none transition focus:border-button-blue" placeholder="Tell us about your workflow, problem, or project." />
            </label>

            <button type="button" className="mt-6 inline-flex items-center gap-2 rounded-full bg-button-blue px-7 py-4 font-bold text-white transition hover:bg-hover-blue">
              Send inquiry
              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </section>

      <section className="bg-dark-header py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {responseItems.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10, rotateY: 5 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur"
                >
                  <Icon className="text-hover-blue" size={32} />
                  <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-gray-300">{item.text}</p>
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
