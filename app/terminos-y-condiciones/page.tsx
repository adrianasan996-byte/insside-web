import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones — Insside",
  description: "Términos y Condiciones de uso de la plataforma Insside Care LLC.",
  robots: { index: false, follow: false },
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen" style={{ background: "#FDFBF8" }}>
      {/* Header */}
      <div style={{ background: "#3D4A35" }} className="py-10 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-white/50 text-sm hover:text-white transition-colors mb-4 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="text-3xl font-bold text-white">Términos y Condiciones</h1>
          <p className="text-white/50 text-sm mt-2">Última actualización: Mayo, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10 text-[#3D3D3D]">

        <p className="text-base leading-relaxed">
          Antes de utilizar nuestros servicios, por favor lea cuidadosamente los siguientes Términos y Condiciones. Al acceder, registrarse o agendar cualquier sesión en la plataforma, usted acepta estar legalmente sujeto/a a los siguientes términos:
        </p>

        <section>
          <h2 className="text-xl font-bold text-[#262525] mb-3">Naturaleza de la plataforma</h2>
          <p className="text-base leading-relaxed">
            Insside Care LLC es una plataforma digital que conecta a usuarios con especialistas independientes en diversas áreas del bienestar integral, como psicología, coaching, nutrición, astrología, entre otras.
          </p>
          <p className="text-base leading-relaxed mt-3">
            La plataforma actúa exclusivamente como intermediaria entre los usuarios y los especialistas. Insside Care LLC no presta servicios médicos, psicológicos o terapéuticos directos, no realiza diagnósticos ni prescribe tratamientos. Los servicios son ejecutados por profesionales externos que actúan bajo su responsabilidad ética y profesional.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#262525] mb-3">Exención de responsabilidad legal</h2>
          <p className="text-base leading-relaxed">
            Al utilizar esta plataforma, usted reconoce y acepta que Insside Care LLC no es responsable por los resultados del proceso individual entre usted y el/la especialista. Esto incluye, pero no se limita a, consecuencias psicológicas, emocionales, económicas, relacionales o de cualquier otra naturaleza.
          </p>
          <p className="text-base leading-relaxed mt-3">
            Cualquier decisión tomada durante o después del acompañamiento es responsabilidad del usuario. Insside Care LLC no garantiza resultados específicos ni asume responsabilidad por el contenido, estilo de acompañamiento o metodología utilizada por el/la especialista.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#262525] mb-3">Compromiso ético de los especialistas</h2>
          <p className="text-base leading-relaxed">
            Insside Care LLC realiza un proceso de selección de especialistas basado en su formación, experiencia, reputación y valores éticos. Sin embargo, la plataforma no supervisa cada sesión en tiempo real ni garantiza la idoneidad absoluta de cada acompañamiento.
          </p>
          <p className="text-base leading-relaxed mt-3">
            En caso de inconformidad, el cliente podrá comunicar su experiencia al equipo de soporte de Insside Care LLC, quien revisará el caso y, si corresponde, podrá suspender o desvincular al/la especialista de la plataforma.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#262525] mb-3">Consentimiento informado del cliente</h2>
          <p className="text-base leading-relaxed mb-3">Al agendar una sesión, el cliente declara entender que:</p>
          <ul className="space-y-2 pl-1">
            {[
              "El acompañamiento recibido no sustituye atención médica, psiquiátrica o de urgencia.",
              "Es responsable de su proceso, decisiones y estado emocional.",
              "Deberá buscar atención profesional especializada en caso de presentar una situación crítica.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#5A634F] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#262525] mb-3">Política de emergencias</h2>
          <p className="text-base leading-relaxed">
            Insside Care LLC no está diseñada para atender crisis emocionales graves, emergencias médicas o situaciones psiquiátricas de riesgo inmediato. En caso de emergencia, el usuario deberá contactar a servicios de salud o apoyo en su localidad.
          </p>
          <p className="text-base leading-relaxed mt-3">
            Si usted o alguien que conoce está en peligro, por favor contacte a una línea de ayuda, ambulancia o centro de asistencia especializado.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#262525] mb-4">Política de cancelaciones, reprogramaciones y devoluciones</h2>
          <p className="text-base leading-relaxed mb-4">En Insside, valoramos tu tiempo y el de nuestros especialistas. Por eso, hemos establecido las siguientes políticas:</p>
          <div className="space-y-5">
            {[
              {
                title: "1. Cancelaciones o reprogramaciones con antelación",
                desc: "El cliente podrá cancelar o reprogramar su sesión sin penalización si lo hace con al menos 24 horas de anticipación al horario previamente acordado.",
              },
              {
                title: "2. Cancelaciones con menos de 24 horas",
                desc: "Si el cliente cancela la sesión con menos de 24 horas de anticipación y no desea reprogramarla, la sesión se considerará completada. Se realizará una devolución simbólica del 15% del monto pagado. El 85% restante no será reembolsable.",
              },
              {
                title: "3. No asistencia sin aviso",
                desc: "Si el cliente no se presenta a la sesión sin previo aviso, también se considerará sesión completada. El/la especialista esperará hasta 10 minutos. Si pasado este tiempo el cliente no se presenta, la sesión se dará por finalizada sin derecho a reembolso.",
              },
              {
                title: "4. Reprogramaciones por parte del/la especialista",
                desc: "En caso de que sea el/la especialista quien necesite cancelar o mover una sesión, deberá notificarlo con al menos 24 horas de anticipación y ofrecer una nueva fecha al cliente sin penalización.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-[#D9E5DB] pl-4">
                <p className="font-semibold text-[#262525] mb-1">{item.title}</p>
                <p className="text-base leading-relaxed text-[#5a5a5a]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#262525] mb-3">Privacidad y manejo de datos</h2>
          <p className="text-base leading-relaxed">
            Insside Care LLC cumple con las leyes de privacidad y protección de datos aplicables. Su información será utilizada exclusivamente para fines administrativos, de agendamiento, seguimiento o comunicación directa con la plataforma o el/la especialista. Nunca se compartirá con terceros sin su consentimiento expreso.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#262525] mb-3">Edad mínima</h2>
          <p className="text-base leading-relaxed">
            Los servicios ofrecidos por Insside están destinados exclusivamente a personas mayores de 18 años. Al utilizar nuestra plataforma, usted declara y garantiza que tiene al menos 18 años de edad. Insside se reserva el derecho de suspender o cancelar cualquier cuenta si se detecta que esta condición no se cumple.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#262525] mb-3">Derecho de Insside a retirar especialistas</h2>
          <p className="text-base leading-relaxed">
            La plataforma se reserva el derecho de desvincular de forma parcial o definitiva a cualquier especialista que, a juicio de Insside Care LLC, incurra en comportamientos inadecuados, falte a sus principios éticos o genere experiencias negativas reiteradas a los usuarios.
          </p>
        </section>

        <section className="bg-[#F5F0EB] rounded-2xl p-6">
          <h2 className="text-xl font-bold text-[#262525] mb-3">Aceptación de los términos</h2>
          <p className="text-base leading-relaxed text-[#5a5a5a]">
            Antes de realizar una reserva o pago, el usuario deberá hacer clic en un recuadro de aceptación con el siguiente texto:
          </p>
          <blockquote className="mt-4 border-l-2 border-[#5A634F] pl-4 italic text-[#3D3D3D] text-base leading-relaxed">
            "He leído y acepto los Términos y Condiciones de uso de Insside Care LLC, y entiendo que esta plataforma actúa únicamente como intermediaria entre el especialista y yo, sin asumir responsabilidad directa sobre los resultados del proceso."
          </blockquote>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#262525] mb-3">Contáctanos</h2>
          <p className="text-base leading-relaxed">
            Si tiene alguna pregunta sobre nuestros Términos y Condiciones, contáctanos a{" "}
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
