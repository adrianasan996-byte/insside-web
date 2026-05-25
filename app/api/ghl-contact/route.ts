import { NextRequest, NextResponse } from "next/server";

const GHL_API_KEY     = process.env.GHL_API_KEY!;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID!;
const GHL_BASE        = "https://services.leadconnectorhq.com";

const HEADERS = {
  Authorization: `Bearer ${GHL_API_KEY}`,
  "Content-Type": "application/json",
  Version: "2021-07-28",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, source, tags = [] } = body;

    if (!email && !phone) {
      return NextResponse.json({ error: "Email o teléfono requerido" }, { status: 400 });
    }

    const payload: Record<string, unknown> = {
      locationId: GHL_LOCATION_ID,
      firstName:  firstName ?? "",
      lastName:   lastName  ?? "",
      email:      email     ?? "",
      phone:      phone     ?? "",
      source:     source    ?? "website",
      tags:       [...tags, source].filter(Boolean),
    };

    // 1️⃣ Try to CREATE contact
    const createRes = await fetch(`${GHL_BASE}/contacts/`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    const createData = await createRes.json();

    // 2️⃣ If duplicate → UPDATE the existing contact
    if (!createRes.ok) {
      const isDuplicate =
        createData?.error?.message?.toLowerCase().includes("duplicated") ||
        createData?.message?.toLowerCase().includes("duplicated");

      const existingId =
        createData?.error?.meta?.contactId ||
        createData?.meta?.contactId;

      if (isDuplicate && existingId) {
        const updateRes = await fetch(`${GHL_BASE}/contacts/${existingId}`, {
          method: "PUT",
          headers: HEADERS,
          body: JSON.stringify({
            firstName:  firstName ?? "",
            lastName:   lastName  ?? "",
            phone:      phone     ?? "",
            source:     source    ?? "website",
            tags:       [...tags, source].filter(Boolean),
          }),
        });

        const updateData = await updateRes.json();

        if (!updateRes.ok) {
          console.error("GHL update error:", updateData);
          return NextResponse.json({ error: updateData }, { status: updateRes.status });
        }

        return NextResponse.json({ success: true, contactId: existingId, updated: true });
      }

      // Other error
      console.error("GHL create error:", createData);
      return NextResponse.json({ error: createData }, { status: createRes.status });
    }

    return NextResponse.json({ success: true, contactId: createData.contact?.id });

  } catch (err) {
    console.error("GHL route error:", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
