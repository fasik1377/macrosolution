"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpenText, Clock3, Cpu, Globe, Layers3, Smartphone, TrendingUp } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Page3DHero from "@/components/Page3DHero";
import { fadeUp, stagger } from "@/components/motion";

const posts = [
  {
    title: "How ERP reduces friction between finance, stock, and operations",
    excerpt: "Connected systems help teams make faster decisions when inventory, reporting, purchasing, and sales move in the same flow.",
    category: "ERP",
    readTime: "5 min read",
    icon: Layers3,
  },
  {
    title: "What makes a business mobile app worth building",
    excerpt: "The best mobile apps remove delays for field teams, customers, and managers rather than simply shrinking a website.",
    category: "Mobile",
    readTime: "4 min read",
    icon: Smartphone,
  },
  {
    title: "Web applications that improve client and team visibility",
    excerpt: "Portals, dashboards, and internal tools create better control when they are designed around real user decisions.",
    category: "Web",
    readTime: "6 min read",
    icon: Globe,
  },
  {
    title: "When custom software is the better long-term investment",
    excerpt: "A tailored platform becomes valuable when your workflow creates too many exceptions for off-the-shelf tools.",
    category: "Custom Software",
    readTime: "7 min read",
    icon: Cpu,
  },
];

const topics = ["ERP", "POS", "HRMS", "Mobile", "Cloud", "Security"];

export default function BlogPage() {
  return (
    <main className="overflow-x-hidden bg-background text-gray-900">
      <Navbar />
      <Page3DHero
        eyebrow="Blog"
        title="Ideas for better systems, smoother operations, and stronger digital products."
        description="The Macro Solution blog shares practical thinking on ERP, POS, HR, mobile apps, web platforms, custom software, and the technical decisions behind durable business systems."
        tone="blog"
      />

      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(11,94,215,0.14),transparent_24%),radial-gradient(circle_at_86%_12%,rgba(0,40,104,0.08),transparent_26%),linear-gradient(180deg,#F5F9FF_0%,#ffffff_48%,#F5F9FF_100%)]" />
        <div className="container relative mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="font-semibold uppercase tracking-[0.28em] text-brand-blue">Latest thinking</p>
            <h2 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">Modern notes for teams planning their next system move</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {topics.map((topic) => (
                <span key={topic} className="rounded-full border border-brand-blue/20 bg-white px-5 py-2 text-sm font-bold text-gray-800 shadow-sm">
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]"
          >
            {posts.map((post, index) => {
              const Icon = post.icon;

              return (
                <motion.article
                  key={post.title}
                  variants={fadeUp}
                  whileHover={{ y: -10, rotateX: 4, rotateY: index % 2 === 0 ? 3 : -3 }}
                  className={`relative overflow-hidden rounded-[1.5rem] border border-brand-blue/10 bg-white/88 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur ${index === 0 ? "lg:row-span-2" : ""}`}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-white via-button-blue to-dark-header" />
                  <div className="absolute right-0 top-0 h-28 w-28 bg-button-blue/10 blur-2xl" />
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-button-blue to-dark-header text-white shadow-lg">
                      <Icon size={28} />
                    </div>
                    <span className="rounded-full bg-button-blue/10 px-4 py-2 text-sm font-bold text-brand-blue">{post.category}</span>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500">
                      <Clock3 size={16} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className={`${index === 0 ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"} mt-6 font-bold leading-tight`}>{post.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-gray-600">{post.excerpt}</p>
                  <a href="/contact" className="mt-8 inline-flex items-center gap-2 font-semibold text-button-blue transition hover:text-hover-blue">
                    Discuss this topic
                    <ArrowRight size={18} />
                  </a>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#083B8A_0%,#002868_72%,#001944_100%)] py-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.22),transparent_22%),radial-gradient(circle_at_88%_72%,rgba(77,159,255,0.18),transparent_24%)]" />
        <div className="container mx-auto grid items-center gap-10 px-6 lg:grid-cols-2">
          <motion.div className="relative" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <BookOpenText className="text-hover-blue" size={36} />
            <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">A sharper content hub for practical technology decisions.</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[1.5rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur"
          >
            <TrendingUp className="text-hover-blue" size={32} />
            <p className="mt-5 text-xl leading-9 text-gray-100">
              Built as a polished blog landing page that can later connect to full article routes or a CMS without redesigning the experience.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
