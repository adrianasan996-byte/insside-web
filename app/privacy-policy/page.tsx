import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad — Insside",
  description: "Política de Privacidad de Insside Care LLC.",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#FDFBF8" }}>
      {/* Header */}
      <div style={{ background: "#3D4A35" }} className="py-10 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-white/50 text-sm hover:text-white transition-colors mb-4 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="text-3xl font-bold text-white">Política de Privacidad</h1>
          <p className="text-white/50 text-sm mt-2">Última actualización: 10 de abril, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10 text-[#3D3D3D]">

        <p className="text-base leading-relaxed">
          Esta Política de Privacidad describe nuestras políticas y procedimientos sobre la recopilación, uso y divulgación de su información cuando utiliza el Servicio, y le informa sobre sus derechos de privacidad y cómo la ley lo protege.
        </p>
        <p className="text-base leading-relaxed">
          Usamos sus datos personales para proporcionar y mejorar el Servicio. Al utilizar el Servicio, usted acepta la recopilación y el uso de la información de acuerdo con esta Política de Privacidad.
        </p>

        <section>
          <h2 className="text-xl font-bold text-[#262525] mb-4">Definiciones</h2>
          <div className="space-y-3">
            {[
              { term: "Cuenta", def: "Cuenta única creada para que usted acceda a nuestro Servicio o partes del mismo." },
              { term: "Empresa", def: "Insside Care LLC, 11233 W 34TH WAY, Hialeah Gardens, Florida, 33018." },
              { term: "Cookies", def: "Archivos pequeños colocados en su dispositivo por un sitio web, que contienen detalles de su historial de navegación." },
              { term: "Datos personales", def: "Cualquier información que se relacione con una persona identificada o identificable." },
              { term: "Servicio", def: "Se refiere al sitio web Insside, accesible desde http://www.insside.co." },
              { term: "Datos de uso", def: "Datos recopilados automáticamente generados por el uso del Servicio o por la infraestructura del mismo." },
              { term: "Usted", def: "El individuo que accede o utiliza el Servicio, o la entidad legal en cuyo nombre lo hace." },
            ].map(({ term, def }) => (
              <div key={term} className="flex gap-3">
                <span className="font-semibold text-[#5A634F] shrink-0">{term}:</span>
                <span className="text-base leading-relaxed">{def}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#262525] mb-3">Tipos de datos recopilados</h2>
          <h3 className="font-semibold text-[#262525] mb-2">Datos personales</h3>
          <p className="text-base leading-relaxed mb-3">Mientras utiliza nuestro Servicio, es posible que le solicitemos cierta información que puede identificarlo personalmente, como:</p>
          <ul className="space-y-2 pl-1">
            {[
              "Dirección de correo electrónico",
              "Nombre y apellido",
              "Número de teléfono",
              "Dirección, estado, provincia, código postal, ciudad",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#5A634F] shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="font-semibold text-[#262525] mt-5 mb-2">Datos de uso</h3>
          <p className="text-base leading-relaxed">
            Se recopilan automáticamente e incluyen: dirección IP, tipo de navegador, versión del navegador, páginas visitadas, fecha y hora de visita, tiempo en cada página, identificadores únicos del dispositivo. Al acceder desde un dispositivo móvil, también se recopila el tipo de dispositivo, sistema operativo y navegador móvil.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#262525] mb-3">Tecnologías de rastreo y cookies</h2>
          <p className="text-base leading-relaxed mb-3">Usamos cookies y tecnologías similares para rastrear la actividad en nuestro Servicio. Tipos de cookies utilizadas:</p>
          <div className="space-y-3">
            {[
              { type: "Cookies esenciales", desc: "Necesarias para proporcionar el Servicio." },
              { type: "Cookies de aceptación de política", desc: "Registran si el usuario aceptó el uso de cookies." },
              { type: "Cookies de funcionalidad", desc: "Recuerdan sus preferencias, como idioma o inicio de sesión." },
            ].map(({ type, desc }) => (
              <div key={type} className="border-l-2 border-[#D9E5DB] pl-4">
                <p className="font-semibold text-[#262525] text-sm">{type}</p>
                <p className="text-base leading-relaxed text-[#5a5a5a]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#262525] mb-3">Uso de sus datos personales</h2>
          <p className="text-base leading-relaxed">
            Su información será utilizada exclusivamente para fines administrativos, de agendamiento, seguimiento y comunicación directa con la plataforma o el/la especialista. Nunca se compartirá con terceros sin su consentimiento expreso. Insside Care LLC cumple con las leyes de privacidad y protección de datos aplicables.
          </p>
        </section>

        <section className="bg-[#F5F0EB] rounded-2xl p-6">
          <h2 className="text-xl font-bold text-[#262525] mb-3">Contáctanos</h2>
          <p className="text-base leading-relaxed">
            Si tiene alguna pregunta sobre esta Política de Privacidad, contáctenos en{" "}
            <a href="mailto:hello@insside.co" className="text-[#5A634F] font-semibold hover:underline">
              hello@insside.co
            </a>
          </p>
        </section>

      </div>

      {/* Footer simple */}
      <div style={{ background: "#3D4A35" }} className="py-8 px-6 text-center">
        <p className="text-white/40 text-sm">© 2026 Insside. Todos los derechos reservados.</p>
      </div>
    </div>
  );
}
