import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      nombre, email, telefono, profesion,
      experienciaCrisis, colegiado, linkedin,
      dias, franjas, zonaHoraria,
      trabajoDesastre, trabajoDesastreDetalle,
    } = body;

    if (!email || !nombre || !profesion) {
      return NextResponse.json({ error: "Campos requeridos faltantes" }, { status: 400 });
    }

    const experienciaLabel: Record<string, string> = {
      si: "Sí, es parte de mi práctica",
      formacion: "Tengo formación pero no es mi foco",
      no: "No — mi trabajo es acompañamiento, no clínico",
    };

    if (resend) {
      await resend.emails.send({
        from:    "Insside <onboarding@resend.dev>",
        to:      ["hello@insside.co"],
        subject: `Nuevo voluntario especialista: ${nombre} — ${profesion}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#262525">
            <h2 style="color:#8B9970;margin-bottom:4px">Nuevo voluntario — Apoyo Venezuela</h2>
            <hr style="border:none;border-top:1px solid #EDE7E1;margin:16px 0"/>
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:6px 0;color:#9a9a9a;width:200px">Nombre</td><td style="padding:6px 0;font-weight:600">${nombre}</td></tr>
              <tr><td style="padding:6px 0;color:#9a9a9a">Correo</td><td style="padding:6px 0"><a href="mailto:${email}" style="color:#8B9970">${email}</a></td></tr>
              <tr><td style="padding:6px 0;color:#9a9a9a">Teléfono</td><td style="padding:6px 0">${telefono || "—"}</td></tr>
              <tr><td style="padding:6px 0;color:#9a9a9a">Profesión</td><td style="padding:6px 0">${profesion}</td></tr>
              <tr><td style="padding:6px 0;color:#9a9a9a">Experiencia en crisis</td><td style="padding:6px 0">${(experienciaLabel[experienciaCrisis] ?? experienciaCrisis) || "—"}</td></tr>
              <tr><td style="padding:6px 0;color:#9a9a9a">Colegiado / licencia</td><td style="padding:6px 0">${colegiado || "—"}</td></tr>
              <tr><td style="padding:6px 0;color:#9a9a9a">LinkedIn / perfil</td><td style="padding:6px 0">${linkedin ? `<a href="${linkedin}" style="color:#8B9970">${linkedin}</a>` : "—"}</td></tr>
              <tr><td style="padding:6px 0;color:#9a9a9a">Días disponibles</td><td style="padding:6px 0">${(dias as string[])?.join(", ") || "—"}</td></tr>
              <tr><td style="padding:6px 0;color:#9a9a9a">Franjas horarias</td><td style="padding:6px 0">${(franjas as string[])?.join(", ") || "—"}</td></tr>
              <tr><td style="padding:6px 0;color:#9a9a9a">Zona horaria</td><td style="padding:6px 0">${zonaHoraria || "—"}</td></tr>
              <tr><td style="padding:6px 0;color:#9a9a9a">Trabajo en emergencias</td><td style="padding:6px 0">${trabajoDesastre || "—"}</td></tr>
            </table>
            ${trabajoDesastreDetalle ? `
            <div style="margin-top:16px;padding:16px;background:#EDE7E1;border-radius:12px;font-size:14px;line-height:1.6">
              <strong>Detalle experiencia en emergencias:</strong><br/>${trabajoDesastreDetalle}
            </div>` : ""}
            <p style="margin-top:24px;font-size:12px;color:#b0b0b0">Generado desde insside.co/voluntariado</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("voluntariado route error:", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
