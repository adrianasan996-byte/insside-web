import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      nombre, apellido, email, telefono, paisCodigo,
      especialidad, otraEspecialidad, modalidad, anios,
      ciudad, pais, mensaje,
    } = body;

    const esp = especialidad === "Otra especialidad" ? otraEspecialidad : especialidad;

    const { error } = await resend.emails.send({
      from: "Insside Website <onboarding@resend.dev>",
      to: ["hello@insside.co"],
      subject: `Nueva aplicación de especialista — ${nombre} ${apellido}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; color: #262525;">
          <div style="background: #5A634F; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 20px;">Nueva aplicación de especialista</h1>
          </div>
          <div style="border: 1px solid #e5e7eb; border-top: none; padding: 28px 32px; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b6b6b; width: 160px; font-size: 14px;">Nombre</td>
                <td style="padding: 8px 0; font-weight: 600; font-size: 14px;">${nombre} ${apellido}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b6b6b; font-size: 14px;">Email</td>
                <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #5A634F;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b6b6b; font-size: 14px;">Teléfono</td>
                <td style="padding: 8px 0; font-size: 14px;">${paisCodigo} ${telefono}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b6b6b; font-size: 14px;">Especialidad</td>
                <td style="padding: 8px 0; font-size: 14px;">${esp || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b6b6b; font-size: 14px;">Modalidad</td>
                <td style="padding: 8px 0; font-size: 14px;">${modalidad || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b6b6b; font-size: 14px;">Experiencia</td>
                <td style="padding: 8px 0; font-size: 14px;">${anios || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b6b6b; font-size: 14px;">Ubicación</td>
                <td style="padding: 8px 0; font-size: 14px;">${ciudad || "—"}, ${pais || "—"}</td>
              </tr>
            </table>
            ${mensaje ? `
            <div style="margin-top: 20px; background: #f9f7f4; padding: 16px 20px; border-radius: 8px; border-left: 3px solid #B5BC8F;">
              <p style="margin: 0 0 6px; font-size: 12px; color: #6b6b6b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Mensaje</p>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #262525;">${mensaje}</p>
            </div>` : ""}
            <div style="margin-top: 24px; text-align: center;">
              <a href="https://app.gohighlevel.com" style="background: #5A634F; color: #fff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-size: 14px; font-weight: 600;">
                Ver en GHL →
              </a>
            </div>
          </div>
          <p style="text-align: center; font-size: 12px; color: #9a9a9a; margin-top: 16px;">Insside — insside-web.vercel.app</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("specialist-notify error:", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
