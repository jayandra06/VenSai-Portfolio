import { NextResponse } from "next/server";

export const runtime = "nodejs";

const FIELD_LIMITS = {
  name: 120,
  company: 160,
  email: 200,
  phone: 40,
  country: 80,
  serviceRequired: 120,
  projectType: 120,
  budgetRange: 120,
  description: 5000,
} as const;

type LeadField = keyof typeof FIELD_LIMITS;

const REQUIRED_FIELDS: LeadField[] = [
  "name",
  "company",
  "email",
  "phone",
  "country",
  "serviceRequired",
  "projectType",
  "description",
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function POST(request: Request) {
  const crmUrl = process.env.CRM_LEADS_URL;
  const crmKey = process.env.CRM_LEADS_API_KEY;

  if (!crmUrl || !crmKey) {
    console.error("Lead capture is not configured: set CRM_LEADS_URL and CRM_LEADS_API_KEY.");
    return NextResponse.json({ error: "Lead capture is temporarily unavailable." }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Bots fill the hidden "website" field; humans never see it.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const lead = {} as Record<LeadField, string>;
  for (const field of Object.keys(FIELD_LIMITS) as LeadField[]) {
    const raw = body[field];
    const value = typeof raw === "string" ? raw.trim() : "";
    if (value.length > FIELD_LIMITS[field]) {
      return NextResponse.json({ error: `${field} is too long.` }, { status: 400 });
    }
    lead[field] = value;
  }

  const missing = REQUIRED_FIELDS.filter((field) => !lead[field]);
  if (missing.length > 0) {
    return NextResponse.json({ error: `Missing required fields: ${missing.join(", ")}.` }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(lead.email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const externalId =
    typeof body.externalId === "string" && UUID_PATTERN.test(body.externalId)
      ? body.externalId
      : crypto.randomUUID();

  const payload = {
    externalId,
    source: "vensailabs.in/contact",
    submittedAt: new Date().toISOString(),
    ...lead,
  };

  try {
    const crmResponse = await fetch(crmUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${crmKey}`,
        "Idempotency-Key": externalId,
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });

    if (!crmResponse.ok) {
      const detail = await crmResponse.text().catch(() => "");
      console.error(`CRM rejected lead ${externalId}: ${crmResponse.status} ${detail.slice(0, 500)}`);
      return NextResponse.json(
        { error: "We could not record your request. Please try again or email us directly." },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error(`CRM unreachable for lead ${externalId}:`, error);
    return NextResponse.json(
      { error: "We could not record your request. Please try again or email us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, externalId });
}
