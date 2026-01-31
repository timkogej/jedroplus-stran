"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { TopicSlug } from "./inquiry";

const STORAGE_KEY = "jedroplus_preselected_topic";

interface InquiryContextType {
  preselectedTopic: TopicSlug | null;
  setPreselectedTopic: (topic: TopicSlug | null) => void;
}

const InquiryContext = createContext<InquiryContextType | undefined>(undefined);

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [preselectedTopic, setPreselectedTopicState] =
    useState<TopicSlug | null>(null);

  // Check localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setPreselectedTopicState(stored as TopicSlug);
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const setPreselectedTopic = (topic: TopicSlug | null) => {
    setPreselectedTopicState(topic);
  };

  return (
    <InquiryContext.Provider value={{ preselectedTopic, setPreselectedTopic }}>
      {children}
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  const context = useContext(InquiryContext);
  if (context === undefined) {
    throw new Error("useInquiry must be used within an InquiryProvider");
  }
  return context;
}

// Helper function to set preselected topic from outside the provider (e.g., from other pages)
export function setPreselectedTopicExternal(topic: TopicSlug) {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, topic);
  }
}
