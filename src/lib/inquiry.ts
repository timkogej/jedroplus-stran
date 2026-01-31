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

export async function submitInquiry(payload: InquiryPayload): Promise<void> {
  // Placeholder for the real endpoint (keeps shared behavior in one place).
  void payload;
  await new Promise((resolve) => setTimeout(resolve, 1500));
}
