"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Domov", href: "/" },
  { name: "Funkcije", href: "/features" },
  { name: "Panoge", href: "/industries" },
  { name: "Cenik", href: "/pricing" },
  { name: "O nas", href: "/about" },
  { name: "Kontakt", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav
      aria-label="Glavna navigacija"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-blue-500 to-secondary origin-left z-10"
        style={{ width: progressWidth }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 md:grid md:grid-cols-[auto,1fr,auto] md:items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Jedro+
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="relative group"
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                      : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  {link.name}
                </Link>
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={(event) => event.preventDefault()}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 px-3 py-2.5 rounded-lg transition-colors"
            >
              Prijavi se
            </button>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/prihaja-kmalu"
                className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2.5 rounded-xl font-medium shadow-sm inline-block"
              >
                Preizkusi zdaj
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={isMobileMenuOpen ? "Zapri meni" : "Odpri meni"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t shadow-lg"
          >
            <div className="px-4 py-4">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "block w-full rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      isActive(link.href)
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                <button
                  type="button"
                  onClick={(event) => event.preventDefault()}
                  className="block w-full rounded-xl px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors text-left"
                >
                  Prijavi se
                </button>
                <Link
                  href="/prihaja-kmalu"
                  className="flex items-center justify-center w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Preizkusi zdaj
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
