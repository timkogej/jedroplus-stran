export type TopicSlug =
  | "jedroplus_app"
  | "enterprise"
  | "website"
  | "chatbot"
  | "integration"
  | "other";

export interface TopicOption {
  slug: TopicSlug;
  label: string;
  questionLabel: string;
  placeholder: string;
}

export const TOPIC_OPTIONS: TopicOption[] = [
  {
    slug: "jedroplus_app",
    label: "Jedro+ app",
    questionLabel: "Kaj želite izboljšati z Jedro+ aplikacijo?",
    placeholder: "Opišite vaše cilje z Jedro+ aplikacijo...",
  },
  {
    slug: "enterprise",
    label: "Enterprise paket",
    questionLabel: "Kaj želite izboljšati z Enterprise paketom?",
    placeholder: "Opišite vaše cilje z Enterprise paketom...",
  },
  {
    slug: "website",
    label: "Izdelava spletne strani",
    questionLabel: "Kaj želite doseči s spletno stranjo?",
    placeholder: "Opišite vaše cilje za spletno stran...",
  },
  {
    slug: "chatbot",
    label: "Izdelava AI funkcije",
    questionLabel: "Kaj želite doseči z AI funkcijo?",
    placeholder: "Opišite vaše cilje za AI funkcijo...",
  },
  {
    slug: "integration",
    label: "Integracija sporočanja",
    questionLabel: "Kateri sistem za rezervacije že uporabljate?",
    placeholder: "Npr. Fresha, Booksy, Google Calendar, lastna rešitev...",
  },
  {
    slug: "other",
    label: "Drugo",
    questionLabel: "Kaj vas zanima?",
    placeholder: "Opišite vaše povpraševanje...",
  },
];

export interface UnifiedInquiryPayload {
  formType: TopicSlug;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  source: string;
  page: string;
  meta: {
    topicLabel: string;
    primaryAnswer: string;
    additionalMessage: string;
  };
}

export async function submitUnifiedInquiry(
  payload: UnifiedInquiryPayload
): Promise<void> {
  const response = await fetch("/api/inquiry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Submission failed: ${response.status}`);
  }
}

export function buildMessage(
  topicLabel: string,
  primaryAnswer: string,
  additionalMessage: string
): string {
  const parts: string[] = [];
  parts.push(`Topic: ${topicLabel}`);
  if (primaryAnswer) {
    parts.push(`Improve: ${primaryAnswer}`);
  }
  if (additionalMessage) {
    parts.push(`Additional: ${additionalMessage}`);
  }
  return parts.join("\n");
}

// Legacy type for backwards compatibility during transition
export type InquiryPayload = {
  companyName: string;
  industry: string;
  fullName: string;
  email: string;
  phone?: string;
  companySize?: string;
  goals?: string;
  message?: string;
  gdprConsent: boolean;
  source?: string;
};

// Legacy function - kept for backwards compatibility
export async function submitInquiry(payload: InquiryPayload): Promise<void> {
  void payload;
  await new Promise((resolve) => setTimeout(resolve, 1500));
}
