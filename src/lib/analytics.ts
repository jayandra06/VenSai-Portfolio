"use client";

export type VensaiConversionEventName =
  | "contact_requirement_submitted"
  | "lead_form_submit"
  | "career_application_submitted"
  | "career_application_submit"
  | "direct_channel_clicked"
  | "direct_channel_click"
  | "cta_clicked"
  | "service_explored";

export interface VensaiConversionPayload {
  event_category?: string;
  service_category?: string;
  service_required?: string;
  project_type?: string;
  budget_range?: string;
  engagement_model?: string;
  channel?: string;
  role_track?: string;
  destination?: string;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Privacy-safe conversion tracking utility.
 * Never transmits personal information (name, email, phone, free-text description).
 * Only emits categorical business metadata for funnel measurement in GTM / GA4.
 */
export function trackConversionEvent(
  eventName: VensaiConversionEventName,
  payload: VensaiConversionPayload = {}
) {
  if (typeof window === "undefined") return;

  const safePayload: Record<string, unknown> = {
    event: eventName,
    ...payload,
    timestamp: new Date().toISOString(),
  };

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(safePayload);
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload as Record<string, unknown>);
  }

  window.dispatchEvent(
    new CustomEvent("vensai:conversion", { detail: safePayload })
  );
}
