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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, email, telefono, edad, ciudad, online, mensaje } = body;

    if (!email) {
      return NextResponse.json({ error: "Email requerido" }, { status: 400 });
    }

    const [firstName, ...rest] = (nombre ?? "").trim().split(" ");
    const lastName = rest.join(" ");

    const contactPayload: Record<string, unknown> = {
      locationId: GHL_LOCATION_ID,
      firstName:  firstName ?? "",
      lastName:   lastName  ?? "",
      email,
      phone:      telefono ?? "",
      source:     "apoyo-venezuela",
      tags:       ["apoyo-venezuela", "sesion-gratuita", "terremoto-venezuela"],
    };

    // Create or update contact in GHL
    const createRes = await fetch(`${GHL_BASE}/contacts/`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(contactPayload),
    });

    const createData = await createRes.json();
    let contactId: string | undefined;

    if (!createRes.ok) {
      const isDuplicate =
        createData?.error?.message?.toLowerCase().includes("duplicated") ||
        createData?.message?.toLowerCase().includes("duplicated");

      const existingId =
        createData?.error?.meta?.contactId ||
        createData?.meta?.contactId;

      if (isDuplicate && existingId) {
        contactId = existingId;
        await fetch(`${GHL_BASE}/contacts/${existingId}`, {
          method: "PUT",
          headers: HEADERS,
          body: JSON.stringify({
            firstName:  firstName ?? "",
            lastName:   lastName  ?? "",
            source:     "apoyo-venezuela",
            tags:       ["apoyo-venezuela", "sesion-gratuita", "terremoto-venezuela"],
          }),
        });
      } else {
        console.error("GHL create error:", createData);
        return NextResponse.json({ error: createData }, { status: createRes.status });
      }
    } else {
      contactId = createData.contact?.id;
    }

    // Add a note with the extra form fields
    if (contactId) {
      const noteBody = [
        `Formulario: Apoyo Psicológico Venezuela`,
        `Edad: ${edad ?? "—"}`,
        `Ciudad/País: ${ciudad ?? "—"}`,
        `Sesión online: ${online ?? "—"}`,
        `Situación: ${mensaje ?? "—"}`,
      ].join("\n");

      await fetch(`${GHL_BASE}/contacts/${contactId}/notes`, {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify({ body: noteBody }),
      });
    }

    // Send email notification to hello@insside.co
    if (resend) {
      await resend.emails.send({
        from:    "Insside <noreply@insside.co>",
        to:      ["hello@insside.co"],
        subject: `Nuevo registro — Apoyo Venezuela: ${nombre ?? email}`,
        html: `
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#262525">
            <h2 style="color:#8B9970;margin-bottom:4px">Nuevo registro de apoyo Venezuela</h2>
            <hr style="border:none;border-top:1px solid #EDE7E1;margin:16px 0"/>
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:6px 0;color:#9a9a9a;width:160px">Nombre</td><td style="padding:6px 0;font-weight:600">${nombre ?? "—"}</td></tr>
              <tr><td style="padding:6px 0;color:#9a9a9a">Correo</td><td style="padding:6px 0"><a href="mailto:${email}" style="color:#8B9970">${email}</a></td></tr>
              <tr><td style="padding:6px 0;color:#9a9a9a">Teléfono</td><td style="padding:6px 0">${telefono || "—"}</td></tr>
              <tr><td style="padding:6px 0;color:#9a9a9a">Edad</td><td style="padding:6px 0">${edad ?? "—"}</td></tr>
              <tr><td style="padding:6px 0;color:#9a9a9a">Ciudad/País</td><td style="padding:6px 0">${ciudad ?? "—"}</td></tr>
              <tr><td style="padding:6px 0;color:#9a9a9a">Sesión online</td><td style="padding:6px 0">${online ?? "—"}</td></tr>
            </table>
            ${mensaje ? `
            <div style="margin-top:16px;padding:16px;background:#EDE7E1;border-radius:12px;font-size:14px;line-height:1.6">
              <strong>Situación:</strong><br/>${mensaje}
            </div>` : ""}
            <p style="margin-top:24px;font-size:12px;color:#b0b0b0">Este mensaje fue generado automáticamente desde insside.co/recursos/apoyo-venezuela</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true, contactId });
  } catch (err) {
    console.error("apoyo-venezuela route error:", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
