"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe2, Mail, Phone } from "lucide-react";
import HomeTechBackground from "@/components/HomeTechBackground";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

const contactItems = [
  { icon: Mail, label: "info@macrosolution.mu", href: "mailto:info@macrosolution.mu" },
  { icon: Phone, label: "+230 5768 0610", href: "tel:+23057680610" },
  { icon: Phone, label: "+230 5763 2872", href: "tel:+23057632872" },
  { icon: Globe2, label: "www.macrosolution.mu", href: "https://www.macrosolution.mu" },
];

type FooterProps = {
  background?: boolean;
};

export default function Footer({ background = true }: FooterProps) {
  return (
    <footer className={`relative overflow-hidden text-white ${background ? "bg-[#0000FF]" : ""}`}>
      {background ? <HomeTechBackground /> : null}

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 py-12 md:px-8 md:py-14">
        <div className="flex flex-col gap-7 border-b border-white/14 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
              Let&apos;s Build the Future Together
            </p>
            <h2 className="mt-3 text-3xl font-bold uppercase leading-none text-white md:text-5xl">
              Macro Solution Ltd
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/72 md:text-lg">
              Your Technology Partner in Mauritius
            </p>
          </div>

          <div className="inline-flex w-fit border border-white/14 bg-white/8 p-3 backdrop-blur-sm">
            <Image
              src="/primus-logo.png"
              alt="PRIMUS secondary logo"
              width={150}
              height={60}
              className="h-auto w-28 object-contain md:w-32"
            />
          </div>
        </div>

        <div className="flex flex-col gap-7 border-b border-white/14 py-8 xl:flex-row xl:items-center xl:justify-between xl:gap-10">
          <div className="grid gap-x-7 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 xl:flex xl:flex-nowrap xl:items-center">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-2.5 whitespace-nowrap text-sm text-white/88 transition hover:text-white"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/14 bg-white/8 transition group-hover:border-cyan-200/50 group-hover:bg-white/12">
                    <Icon size={15} className="text-cyan-200" />
                  </span>
                  <span>{item.label}</span>
                </motion.a>
              );
            })}
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-6 gap-y-3 xl:flex-nowrap">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.16em] text-white/72 transition hover:text-cyan-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="pt-6 text-center text-sm text-white/68">
          Copyright 2026 Macro Solution. All rights reserved.
        </p>
      </div>
    </footer>
  );
}



