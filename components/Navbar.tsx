"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="relative mx-auto flex w-full max-w-[1600px] items-center justify-between px-4 py-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -14, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          whileHover={{ scale: 1.12 }}
          className="relative z-10 [perspective:1100px]"
        >
          <motion.div
            aria-hidden="true"
            animate={{ opacity: [0.24, 0.55, 0.24], scale: [0.96, 1.08, 0.96] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-white/65 blur-2xl"
          />
          <motion.div
            aria-hidden="true"
            animate={{ x: ["-20%", "125%"] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.98),rgba(255,255,255,0.35),transparent_72%)] blur-md md:h-28 md:w-28"
          />
          <Link
            href="/"
            className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/70 bg-white/96 shadow-[0_18px_50px_rgba(255,255,255,0.22)] backdrop-blur-xl transition-transform duration-300 md:h-28 md:w-28"
            aria-label="Macro Solution home"
          >
            <motion.span
              animate={{
                rotateY: [0, -8, 0, 8, 0],
                rotateX: [0, 3, 0, -2, 0],
                y: [0, -2, 0, 2, 0],
                scale: [1, 1.02, 1, 1.01, 1],
              }}
              transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
              className="block [transform-style:preserve-3d]" whileHover={{ scale: 1.08 }}
            >
              <Image
                src="/logo.png"
                alt="Macro Solution"
                width={260}
                height={86}
                priority
                className="h-14 w-14 object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.18)] md:h-16 md:w-16"
              />
            </motion.span>
          </Link>
        </motion.div>

        <nav className="absolute left-1/2 z-10 hidden -translate-x-1/2 items-center gap-1 bg-transparent px-4 py-2.5 md:flex">
          {links.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname === item.href;
            const isContact = item.href === "/contact";

            return (
              <motion.div key={item.href} whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
                <Link
                  href={item.href}
                  className={`group relative overflow-hidden px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] transition duration-300 ${
                    isActive
                      ? "bg-white/10 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.18)]"
                      : isContact
                        ? "text-cyan-200 hover:text-white"
                        : "text-white/85 hover:text-white"
                  }`}
                  style={{ clipPath: "polygon(0 0,100% 0,96% 12%,100% 100%,0 100%,6% 50%)" }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 translate-x-[-120%] bg-[linear-gradient(105deg,transparent_10%,rgba(255,255,255,0.32)_48%,transparent_86%)] transition duration-700 group-hover:translate-x-[120%]"
                  />
                  <span
                    className="absolute inset-0 border border-white/8 opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{ clipPath: "polygon(0 0,100% 0,96% 12%,100% 100%,0 100%,6% 50%)" }}
                  />
                  {!isActive && (
                    <>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-4 bottom-1 h-0.5 origin-center scale-x-0 bg-gradient-to-r from-cyan-300 via-hover-blue to-button-blue opacity-0 transition duration-300 ease-out group-hover:scale-x-100 group-hover:opacity-100"
                      />
                      <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(77,159,255,0.18),transparent_58%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                    </>
                  )}
                  {isActive && (
                    <>
                      <motion.span
                        layoutId="nav-diamond"
                        className="absolute left-1/2 top-1.5 h-2 w-2 -translate-x-1/2 rotate-45 bg-cyan-300 shadow-[0_0_16px_rgba(125,211,252,0.95)]"
                      />
                      <span className="absolute inset-x-3 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.95),transparent)]" />
                    </>
                  )}
                  <span className="relative inline-flex items-center gap-1.5">
                    {item.label}
                    {isContact && <ArrowUpRight size={15} />}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="relative z-10 border border-white/18 bg-white/10 p-3 text-white shadow-[0_12px_32px_rgba(0,40,104,0.18)] backdrop-blur-md md:hidden"
          style={{ clipPath: "polygon(0 0,100% 0,94% 100%,0 100%,10% 50%)" }}
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
            className="mx-4 overflow-hidden border border-white/18 bg-[linear-gradient(180deg,rgba(6,22,58,0.74),rgba(3,18,48,0.82))] shadow-[0_22px_70px_rgba(0,14,38,0.2)] backdrop-blur-xl md:hidden"
            style={{ clipPath: "polygon(0 0,100% 0,100% 100%,10% 100%,0 calc(100% - 30px))" }}
          >
            <div className="flex flex-col gap-3 p-6">
              {links.map((item) => {
                const isActive = item.href === "/" ? pathname === "/" : pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`relative overflow-hidden px-4 py-3 font-bold uppercase tracking-[0.2em] transition ${
                      isActive
                        ? "bg-[linear-gradient(135deg,rgba(77,159,255,0.28),rgba(11,94,215,0.32))] text-white"
                        : "bg-white/6 text-white hover:bg-white/12"
                    }`}
                    style={{ clipPath: "polygon(0 0,100% 0,97% 100%,0 100%,5% 50%)" }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

