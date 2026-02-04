"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";
import { GradientIcon } from "@/components/ui/gradient-icon";
import {
  TOPIC_OPTIONS,
  TopicSlug,
  submitUnifiedInquiry,
  buildMessage,
} from "@/lib/inquiry";
import { useInquiry } from "@/lib/inquiry-context";
import { usePathname } from "next/navigation";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  primaryAnswer: string;
  additionalMessage: string;
  gdprConsent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export default function InquiryForm() {
  const pathname = usePathname();
  const { preselectedTopic, setPreselectedTopic } = useInquiry();
  const [selectedTopic, setSelectedTopic] = useState<TopicSlug | null>(null);

  // Apply preselected topic when it changes
  useEffect(() => {
    if (preselectedTopic) {
      setSelectedTopic(preselectedTopic);
      // Clear the preselection after applying
      setPreselectedTopic(null);
    }
  }, [preselectedTopic, setPreselectedTopic]);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    primaryAnswer: "",
    additionalMessage: "",
    gdprConsent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const selectedTopicData = TOPIC_OPTIONS.find((t) => t.slug === selectedTopic);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!selectedTopic) {
      newErrors.topic = "Izberite temo povpraševanja";
    }
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Ime in priimek sta obvezna";
    }
    if (!formData.email.trim()) {
      newErrors.email = "E-mail je obvezen";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Vnesite veljaven e-mail";
    }
    if (selectedTopic && !formData.primaryAnswer.trim()) {
      newErrors.primaryAnswer = "To polje je obvezno";
    }
    if (!formData.gdprConsent) {
      newErrors.gdprConsent = "Morate potrditi strinjanje";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm() || !selectedTopic || !selectedTopicData) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await submitUnifiedInquiry({
        formType: selectedTopic,
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone || undefined,
        company: formData.company || undefined,
        message: buildMessage(
          selectedTopicData.label,
          formData.primaryAnswer,
          formData.additionalMessage
        ),
        source: "jedroplus.com",
        page: pathname,
        meta: {
          topicLabel: selectedTopicData.label,
          primaryAnswer: formData.primaryAnswer,
          additionalMessage: formData.additionalMessage,
        },
      });
      setIsSubmitted(true);
    } catch (error) {
      void error;
      setSubmitError(
        "Prišlo je do napake. Poskusite znova ali nas kontaktirajte neposredno."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      primaryAnswer: "",
      additionalMessage: "",
      gdprConsent: false,
    });
    setSelectedTopic(null);
    setErrors({});
    setIsSubmitted(false);
    setSubmitError(null);
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

  const handleTopicSelect = (slug: TopicSlug) => {
    setSelectedTopic(slug);
    if (errors.topic) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.topic;
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
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pošlji{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              povpraševanje
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600">
            Izberite temo in nam povejte, kako vam lahko pomagamo
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          onSubmit={handleSubmit}
          className="bg-gray-50 rounded-3xl p-6 lg:p-10"
        >
          {/* Topic Selector */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Kaj vas zanima? *
            </label>
            <div className="flex flex-wrap gap-2">
              {TOPIC_OPTIONS.map((topic) => (
                <button
                  key={topic.slug}
                  type="button"
                  onClick={() => handleTopicSelect(topic.slug)}
                  className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                    selectedTopic === topic.slug
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                      : "bg-white border border-gray-200 text-gray-700 hover:border-primary hover:text-primary"
                  }`}
                >
                  {topic.label}
                </button>
              ))}
            </div>
            {errors.topic && (
              <p className="text-red-500 text-sm mt-2">{errors.topic}</p>
            )}
          </div>

          {/* Error Message */}
          {submitError && (
            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {submitError}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
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

            {/* Company */}
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Ime podjetja
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="Ime vašega podjetja"
              />
            </div>

            {/* Conditional Fields - Animated */}
            <AnimatePresence>
              {selectedTopic && selectedTopicData && (
                <>
                  {/* Primary Question */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:col-span-2 overflow-hidden"
                  >
                    <label
                      htmlFor="primaryAnswer"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {selectedTopicData.questionLabel} *
                    </label>
                    <textarea
                      id="primaryAnswer"
                      name="primaryAnswer"
                      value={formData.primaryAnswer}
                      onChange={handleChange}
                      rows={3}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.primaryAnswer
                          ? "border-red-500"
                          : "border-gray-200"
                      } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none`}
                      placeholder={selectedTopicData.placeholder}
                    />
                    {errors.primaryAnswer && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.primaryAnswer}
                      </p>
                    )}
                  </motion.div>

                  {/* Additional Message */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="md:col-span-2 overflow-hidden"
                  >
                    <label
                      htmlFor="additionalMessage"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Dodatno sporočilo
                    </label>
                    <textarea
                      id="additionalMessage"
                      name="additionalMessage"
                      value={formData.additionalMessage}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Karkoli nas želite vprašati..."
                    />
                  </motion.div>
                </>
              )}
            </AnimatePresence>

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
                  mojim povpraševanjem. *
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
              className={`w-full bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                isSubmitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:shadow-xl hover:scale-[1.02]"
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Pošiljam...
                </>
              ) : (
                "Pošlji povpraševanje"
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
