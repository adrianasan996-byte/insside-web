import { NextRequest, NextResponse } from "next/server";

const GHL_API_KEY = process.env.GHL_API_KEY!;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID!;
const GHL_BASE = "https://services.leadconnectorhq.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, source, tags = [] } = body;

    if (!email && !phone) {
      return NextResponse.json({ error: "Email o teléfono requerido" }, { status: 400 });
    }

    const payload: Record<string, unknown> = {
      locationId: GHL_LOCATION_ID,
      firstName: firstName ?? "",
      lastName: lastName ?? "",
      email: email ?? "",
      phone: phone ?? "",
      source: source ?? "website",
      tags: [...tags, source].filter(Boolean),
    };

    const res = await fetch(`${GHL_BASE}/contacts/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GHL_API_KEY}`,
        "Content-Type": "application/json",
        Version: "2021-07-28",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("GHL error:", data);
      return NextResponse.json({ error: data }, { status: res.status });
    }

    return NextResponse.json({ success: true, contactId: data.contact?.id });
  } catch (err) {
    console.error("GHL route error:", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
