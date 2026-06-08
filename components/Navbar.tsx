"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/#products" },
    { label: "Blog", href: "/blog" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ];

  const scrollToHash = (hash: string) => {
    const id = hash.replace("#", "") === "product" ? "products" : hash.replace("#", "");
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    const headerOffset = 130;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false);

    if (!href.startsWith("/#")) {
      return;
    }

    event.preventDefault();
    const hash = href.replace("/", "");

    if (pathname !== "/") {
      window.location.assign(href);
      return;
    }

    window.history.pushState(null, "", hash);
    requestAnimationFrame(() => scrollToHash(hash));
  };

  useEffect(() => {
    if (pathname !== "/" || !window.location.hash) {
      return;
    }

    const timer = window.setTimeout(() => scrollToHash(window.location.hash), 120);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-3">
      <div className="container mx-auto flex items-center justify-between rounded-full border border-white/60 bg-white/82 px-5 py-2.5 shadow-[0_18px_70px_rgba(17,24,39,0.12)] backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, y: -14, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: -1 }}
          className="relative"
        >
          <motion.div
            aria-hidden="true"
            animate={{ opacity: [0.25, 0.55, 0.25], scale: [0.9, 1.08, 0.9] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-orange-400/25 blur-2xl"
          />
          <Link href="/" className="relative flex items-center gap-3" aria-label="Macro Solution home">
            <Image
              src="/logo.png"
              alt="Macro Solution"
              width={196}
              height={64}
              priority
              className="h-14 w-auto object-contain drop-shadow-[0_14px_24px_rgba(249,115,22,0.18)] md:h-16"
            />
          </Link>
        </motion.div>

        <nav className="hidden items-center gap-1 rounded-full border border-orange-100 bg-gradient-to-r from-white via-orange-50 to-white p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] md:flex">
          {links.map((item, index) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname === item.href;
            const isContact = item.href === "/contact";

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04, duration: 0.38 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <a
                  href={item.href}
                  onClick={(event) => handleAnchorClick(event, item.href)}
                  className={`group relative block overflow-hidden rounded-full px-4 py-2.5 text-sm font-bold transition ${
                    isActive
                      ? "bg-gray-950 text-white shadow-[0_12px_30px_rgba(17,24,39,0.2)]"
                      : isContact
                        ? "bg-orange-500 text-white shadow-[0_12px_28px_rgba(249,115,22,0.28)] hover:bg-gray-950"
                        : "text-gray-700 hover:text-white"
                  }`}
                >
                  {!isActive && !isContact && (
                    <span className="absolute inset-0 origin-left scale-x-0 rounded-full bg-gradient-to-r from-orange-500 to-gray-950 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  )}
                  <span className="relative inline-flex items-center gap-1.5">
                    {item.label}
                    {isContact && <ArrowUpRight size={15} />}
                  </span>
                </a>
              </motion.div>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-full border border-orange-100 bg-white/85 p-3 text-gray-800 shadow-lg md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/50 bg-white/95 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-3 p-6">
              {links.map((item) => {
                const isActive = item.href === "/" ? pathname === "/" : pathname === item.href;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(event) => handleAnchorClick(event, item.href)}
                    className={`rounded-2xl px-4 py-3 font-bold transition ${
                      isActive
                        ? "bg-gray-950 text-white"
                        : "bg-orange-50 text-gray-800 hover:bg-orange-500 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
