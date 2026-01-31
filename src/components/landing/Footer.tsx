"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { GradientIcon } from "@/components/ui/gradient-icon";

const routeLinks = [
  { name: "Domov", href: "/" },
  { name: "Funkcije", href: "/features" },
  { name: "Panoge", href: "/industries" },
  { name: "Cenik", href: "/pricing" },
  { name: "O nas", href: "/about" },
  { name: "Kontakt", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About - 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#5B4FE9] via-blue-500 to-[#4ECDC4] bg-clip-text text-transparent mb-4">
              Jedro+
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Aplikacija za storitvena podjetja, ki poveže termine, stranke,
              opomnike, spletno naročanje in AI v eno jedro.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@jedroplus.com"
                className="flex items-center gap-3 text-gray-400 hover:text-secondary transition-colors"
              >
                <GradientIcon icon={Mail} variant="gradient" className="w-5 h-5" />
                <span>info@jedroplus.com</span>
              </a>
              <a
                href="tel:068663410"
                className="flex items-center gap-3 text-gray-400 hover:text-secondary transition-colors"
              >
                <GradientIcon icon={Phone} variant="gradient" className="w-5 h-5" />
                <span>068663410</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <GradientIcon icon={MapPin} variant="gradient" className="w-5 h-5" />
                <span>Slovenija</span>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Navigacija</h4>
            <ul className="space-y-3">
              {routeLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Sledite nam</h4>
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors"
                  aria-label={social.name}
                >
                  <GradientIcon
                    icon={social.icon}
                    variant="gradient"
                    className="w-5 h-5"
                  />
                </a>
              ))}
            </div>

            <h4 className="text-lg font-semibold mb-4">Pravne informacije</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/pogoji-uporabe"
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  Pogoji uporabe
                </a>
              </li>
              <li>
                <a
                  href="/politika-zasebnosti"
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  Politika zasebnosti
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            © 2026 Jedro+. Vse pravice pridržane.
          </p>
        </div>
      </div>
    </footer>
  );
}
