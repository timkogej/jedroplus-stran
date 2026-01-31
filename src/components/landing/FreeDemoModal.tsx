"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GradientIcon } from "@/components/ui/gradient-icon";
import { submitInquiry } from "@/lib/inquiry";

interface FreeDemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  inquiryTag?: string;
}

interface FormData {
  companyName: string;
  industry: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
  gdprConsent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const initialFormData: FormData = {
  companyName: "",
  industry: "",
  fullName: "",
  email: "",
  phone: "",
  message: "",
  gdprConsent: false,
};

export default function FreeDemoModal({
  open,
  onOpenChange,
  title = "Brezplačna predstavitev funkcij Jedro+",
  description = "Pustite podatke in v 15 minutah vam pokažemo Jedro+ v praksi.",
  inquiryTag = "Brezplačna predstavitev",
}: FreeDemoModalProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const openRef = useRef(open);

  useEffect(() => {
    openRef.current = open;
    if (!open) {
      setFormData(initialFormData);
      setErrors({});
      setIsSubmitting(false);
      setIsSubmitted(false);
      setSubmitError(null);
    }
  }, [open]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Ime podjetja je obvezno";
    }
    if (!formData.industry.trim()) {
      newErrors.industry = "Panoga je obvezna";
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
    setSubmitError(null);

    try {
      await submitInquiry({
        companyName: formData.companyName,
        industry: formData.industry,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        gdprConsent: formData.gdprConsent,
        source: inquiryTag,
      });
      if (openRef.current) {
        setIsSubmitted(true);
      }
    } catch (error) {
      void error;
      if (openRef.current) {
        setSubmitError(
          "Prišlo je do napake. Poskusite znova ali nas kontaktirajte neposredno."
        );
      }
    } finally {
      if (openRef.current) {
        setIsSubmitting(false);
      }
    }
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

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-3xl max-h-[calc(100vh-4rem)] overflow-y-auto p-5 sm:p-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-4"
            >
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
                <GradientIcon
                  icon={CheckCircle}
                  variant="gradient"
                  className="w-7 h-7"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Hvala za povpraševanje!
              </h3>
              <p className="text-gray-600">
                Kontaktirali vas bomo v kratkem glede brezplačne predstavitve.
              </p>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="border-2 border-gray-200 text-gray-700 px-6 py-2.5 rounded-xl font-semibold hover:border-primary hover:text-primary transition-all duration-300"
              >
                Zapri
              </button>
            </motion.div>
          ) : (
          <div className="space-y-5">
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
              </DialogHeader>

              {submitError && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {submitError}
                </div>
              )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="inquiryType" value={inquiryTag} />
              <div className="grid gap-4 md:grid-cols-2">
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
                        errors.companyName
                          ? "border-red-500"
                          : "border-gray-200"
                      } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                      placeholder="Ime vašega podjetja"
                    />
                    {errors.companyName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.companyName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="industry"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Panoga / dejavnost *
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
                      <p className="text-red-500 text-sm mt-1">
                        {errors.industry}
                      </p>
                    )}
                  </div>

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
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      E-mail *
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
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Telefonska številka (opcijsko)
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

                  <div className="md:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Sporočilo (opcijsko)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Kaj želite izboljšati?"
                    />
                  </div>

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
                        Strinjam se, da se moji podatki uporabijo za kontakt v
                        zvezi z Jedro+. *
                      </span>
                    </label>
                    {errors.gdprConsent && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.gdprConsent}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:shadow-lg hover:scale-[1.01]"
                  }`}
                >
                  {isSubmitting ? "Pošiljam..." : "Pošlji povpraševanje"}
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
