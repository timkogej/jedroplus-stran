"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ChevronDown, X } from "lucide-react";
import { GradientIcon } from "@/components/ui/gradient-icon";
import { submitInquiry } from "@/lib/inquiry";

interface InquiryFormProps {
  selectedPackage: string | null;
  onClearPackage: () => void;
}

interface FormData {
  companyName: string;
  industry: string;
  fullName: string;
  email: string;
  phone: string;
  companySize: string;
  goals: string;
  message: string;
  gdprConsent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export default function InquiryForm({
  selectedPackage,
  onClearPackage,
}: InquiryFormProps) {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    industry: "",
    fullName: "",
    email: "",
    phone: "",
    companySize: "",
    goals: "",
    message: "",
    gdprConsent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Ime podjetja je obvezno";
    }
    if (!formData.industry.trim()) {
      newErrors.industry = "Dejavnost je obvezna";
    }
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Ime in priimek sta obvezna";
    }
    if (!formData.email.trim()) {
      newErrors.email = "E-mail je obvezen";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Vnesite veljaven e-mail";
    }
    if (!formData.gdprConsent) {
      newErrors.gdprConsent = "Morate potrditi strinjanje";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    await submitInquiry({
      ...formData,
      source: selectedPackage
        ? `Paket: ${selectedPackage}`
        : "Splošno povpraševanje",
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      companyName: "",
      industry: "",
      fullName: "",
      email: "",
      phone: "",
      companySize: "",
      goals: "",
      message: "",
      gdprConsent: false,
    });
    setErrors({});
    setIsSubmitted(false);
    onClearPackage();
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when field is modified
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  if (isSubmitted) {
    return (
      <section id="povprasevanje" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12 text-center border border-primary/10"
          >
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mb-6">
              <GradientIcon
                icon={CheckCircle}
                variant="gradient"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hvala za povpraševanje!
            </h3>
            <p className="text-gray-600 mb-8">
              Kontaktirali vas bomo v kratkem.
            </p>
            <button
              onClick={handleReset}
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Pošlji novo
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="povprasevanje" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pošlji povpraševanje za{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Jedro+
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600">
            Povej nam nekaj o podjetju in pripravimo predlog paketa +
            priporočila
          </p>
        </motion.div>

        {/* Selected Package Badge */}
        {selectedPackage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full px-4 py-2">
              <span className="text-gray-700">Izbran paket:</span>
              <span className="font-semibold text-primary">
                {selectedPackage}
              </span>
              <button
                onClick={onClearPackage}
                className="ml-1 p-1 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-gray-900" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-gray-50 rounded-3xl p-6 lg:p-10"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Company Name */}
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Ime podjetja *
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.companyName ? "border-red-500" : "border-gray-200"
                } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                placeholder="Ime vašega podjetja"
              />
              {errors.companyName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.companyName}
                </p>
              )}
            </div>

            {/* Industry */}
            <div>
              <label
                htmlFor="industry"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Dejavnost / panoga *
              </label>
              <input
                type="text"
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.industry ? "border-red-500" : "border-gray-200"
                } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                placeholder="npr. frizerski salon, klinika..."
              />
              {errors.industry && (
                <p className="text-red-500 text-sm mt-1">{errors.industry}</p>
              )}
            </div>

            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Ime in priimek *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.fullName ? "border-red-500" : "border-gray-200"
                } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                placeholder="Vaše ime in priimek"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                E-mail naslov *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.email ? "border-red-500" : "border-gray-200"
                } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                placeholder="vas@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Telefonska številka
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="+386 XX XXX XXX"
              />
            </div>

            {/* Company Size */}
            <div>
              <label
                htmlFor="companySize"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Velikost podjetja
              </label>
              <div className="relative">
                <select
                  id="companySize"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  aria-label="Velikost podjetja"
                  className="w-full appearance-none px-4 py-3 pr-10 rounded-xl border border-gray-200 bg-white shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                >
                  <option value="">Izberite...</option>
                  <option value="1">1 oseba</option>
                  <option value="2-5">2-5</option>
                  <option value="6-10">6-10</option>
                  <option value="11-20">11-20</option>
                  <option value="21+">21+</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            {/* Goals */}
            <div className="md:col-span-2">
              <label
                htmlFor="goals"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Kaj želite z Jedro+ izboljšati?
              </label>
              <textarea
                id="goals"
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                placeholder="Opišite vaše glavne cilje..."
              />
            </div>

            {/* Additional Message */}
            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Dodatno sporočilo
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                placeholder="Karkoli nas želite vprašati..."
              />
            </div>

            {/* GDPR Consent */}
            <div className="md:col-span-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="gdprConsent"
                  checked={formData.gdprConsent}
                  onChange={handleChange}
                  className="w-5 h-5 mt-0.5 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-gray-600">
                  Strinjam se, da se moji podatki uporabijo za kontakt v zvezi z
                  aplikacijo Jedro+. *
                </span>
              </label>
              {errors.gdprConsent && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.gdprConsent}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                isSubmitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:shadow-xl hover:scale-[1.02]"
              }`}
            >
              {isSubmitting ? "Pošiljam..." : "Pošlji povpraševanje"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
