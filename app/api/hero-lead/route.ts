import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const GHL_API_KEY     = process.env.GHL_API_KEY!;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID!;
const GHL_BASE        = "https://services.leadconnectorhq.com";

const HEADERS = {
  Authorization: `Bearer ${GHL_API_KEY}`,
  "Content-Type": "application/json",
  Version: "2021-07-28",
};

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

interface HeroLeadPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  source: string;
  tags?: string[];
  formLabel: string;
  fields?: Record<string, string>;
}

export async function POST(req: NextRequest) {
  try {
    const body: HeroLeadPayload = await req.json();
    const { firstName, lastName, email, phone, source, tags = [], formLabel, fields = {} } = body;

    if (!email && !phone) {
      return NextResponse.json({ error: "Email o teléfono requerido" }, { status: 400 });
    }

    const contactPayload: Record<string, unknown> = {
      locationId: GHL_LOCATION_ID,
      firstName:  firstName ?? "",
      lastName:   lastName  ?? "",
      email:      email     ?? "",
      phone:      phone     ?? "",
      source:     source    ?? "website",
      tags:       [...tags, source].filter(Boolean),
    };

    // 1️⃣ Create or update contact in GHL (CRM)
    const createRes = await fetch(`${GHL_BASE}/contacts/`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(contactPayload),
    });

    const createData = await createRes.json();
    let contactId: string | undefined = createData.contact?.id;

    if (!createRes.ok) {
      const isDuplicate =
        createData?.error?.message?.toLowerCase().includes("duplicated") ||
        createData?.message?.toLowerCase().includes("duplicated");
      const existingId = createData?.error?.meta?.contactId || createData?.meta?.contactId;

      if (isDuplicate && existingId) {
        contactId = existingId;
        await fetch(`${GHL_BASE}/contacts/${existingId}`, {
          method: "PUT",
          headers: HEADERS,
          body: JSON.stringify({
            firstName: firstName ?? "",
            lastName:  lastName  ?? "",
            phone:     phone     ?? "",
            source:    source    ?? "website",
            tags:      [...tags, source].filter(Boolean),
          }),
        });
      } else {
        console.error("GHL create error:", createData);
        return NextResponse.json({ error: createData }, { status: createRes.status });
      }
    }

    // 2️⃣ Note with the extra fields selected in the form
    if (contactId && Object.keys(fields).length) {
      const noteBody = [`Formulario: ${formLabel}`, ...Object.entries(fields).map(([k, v]) => `${k}: ${v || "—"}`)].join("\n");
      await fetch(`${GHL_BASE}/contacts/${contactId}/notes`, {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify({ body: noteBody }),
      }).catch(() => {});
    }

    // 3️⃣ Email notification — sent once the contact is in the CRM, before WhatsApp opens
    if (resend) {
      const rows = [
        `<tr><td style="padding:6px 0;color:#9a9a9a;width:160px">Nombre</td><td style="padding:6px 0;font-weight:600">${firstName ?? ""} ${lastName ?? ""}</td></tr>`,
        email ? `<tr><td style="padding:6px 0;color:#9a9a9a">Correo</td><td style="padding:6px 0"><a href="mailto:${email}" style="color:#8B9970">${email}</a></td></tr>` : "",
        phone ? `<tr><td style="padding:6px 0;color:#9a9a9a">Teléfono</td><td style="padding:6px 0">${phone}</td></tr>` : "",
        ...Object.entries(fields).map(([k, v]) => `<tr><td style="padding:6px 0;color:#9a9a9a">${k}</td><td style="padding:6px 0">${v || "—"}</td></tr>`),
      ].filter(Boolean).join("");

      await resend.emails.send({
        from:    "Insside <noreply@insside.co>",
        to:      ["hello@insside.co"],
        subject: `Nuevo lead — ${formLabel}: ${firstName ?? email ?? "Sin nombre"}`,
        html: `
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#262525">
            <h2 style="color:#8B9970;margin-bottom:4px">Nuevo lead desde el home — ${formLabel}</h2>
            <hr style="border:none;border-top:1px solid #EDE7E1;margin:16px 0"/>
            <table style="width:100%;border-collapse:collapse;font-size:14px">${rows}</table>
            <p style="margin-top:24px;font-size:12px;color:#b0b0b0">Este contacto ya fue creado/actualizado en GHL. Este mensaje fue generado automáticamente desde insside.co</p>
          </div>
        `,
      }).catch((err) => console.error("Resend error:", err));
    } else {
      console.warn("RESEND_API_KEY no configurada — no se envió correo de notificación");
    }

    return NextResponse.json({ success: true, contactId });
  } catch (err) {
    console.error("hero-lead route error:", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
