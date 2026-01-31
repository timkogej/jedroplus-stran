"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
            <Link
              href="/prihaja-kmalu"
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2.5 rounded-xl font-medium shadow-sm"
            >
              Preizkusi zdaj
            </Link>
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
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "block w-full rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    isActive(link.href)
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button
                type="button"
                onClick={(event) => event.preventDefault()}
                className="block w-full rounded-xl px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                Prijavi se
              </button>
              <Link
                href="/prihaja-kmalu"
                className="w-full mt-4 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Preizkusi zdaj
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
