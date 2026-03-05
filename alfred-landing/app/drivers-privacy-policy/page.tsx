import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad para Conductores | Alfred',
  description: 'Política de Privacidad de información y datos de geolocalización para conductores de Alfred.',
};

export default function DriversPrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#020D20] text-gray-300 font-jakarta py-16 px-6 sm:px-12 lg:px-24 leading-relaxed">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* POLÍTICA DE PRIVACIDAD */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-gotham mb-4">
            Política de Privacidad
          </h1>
          <p className="text-lg text-gray-400">
            Versión actualizada, 6 de octubre de 2025
          </p>
        </div>

        <section className="space-y-6">
          <p>
            En cumplimiento de la Ley Estatutaria 1581 de 2012 de Protección de Datos Personales y las normas concordantes, se informa al Titular que, mediante el suministro y registro voluntario de sus datos en la aplicación móvil desarrollada por ALFRED S.A.S. (en adelante, “la aplicación”), autoriza para que sean incorporados en una base de datos responsabilidad de ALFRED S.A.S., siendo tratados con la finalidad de realizar gestión administrativa, fidelización de clientes, gestión de estadísticas internas, gestión de cobros y pagos, gestión de facturación, gestión económica y contable, gestión fiscal, marketing, encuestas de opinión, prospección comercial, publicidad propia, segmentación de mercados y envío de comunicaciones comerciales sobre nuestros productos y/o servicios.
          </p>
          <p>
            Los usuarios de la aplicación son exclusivamente los empleados de ALFRED S.A.S. y la información recopilada se utiliza únicamente para la gestión operativa de la empresa, incluyendo el seguimiento y monitoreo de los servicios prestados a los clientes. La información recopilada a través de la aplicación no se comparte con terceros y se utiliza únicamente para fines internos de la empresa. Todos los usuarios de la aplicación son empleados de ALFRED S.A.S. y tienen acceso limitado a la información recopilada a través de la aplicación en función de sus responsabilidades laborales. Asimismo, autorizo la transmisión y/o transferencia nacional e internacional de datos con terceras entidades tales como: aliados comerciales y filiales para el adecuado desarrollo de la relación contractual o vínculo comercial de ALFRED S.A.S., con la finalidad específica de realizar promociones y ofrecimientos de nuevos proyectos o productos por parte de los aliados de ALFRED S.A.S. y gestión administrativa en general.
          </p>
          <p>
            El alcance de esta autorización comprende la facultad para que ALFRED S.A.S. envíe mensajes con contenidos, notificaciones, facturas pendientes de pago y demás información relativa a los productos y servicios de ALFRED S.A.S., a través de correo electrónico y/o mensajes de texto al teléfono móvil.
          </p>

          <h2 className="text-2xl font-bold text-white font-gotham mt-10">Datos de ubicación / Localización</h2>
          <p>
            La aplicación accede y recopila datos de ubicación en tiempo real del dispositivo móvil del usuario (por ejemplo, a través de GPS, Wi-Fi o redes móviles) con las siguientes finalidades:
          </p>

          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Prestación del servicio:</strong> permitir el seguimiento en tiempo real de los conductores por parte de los clientes mientras se encuentran en servicio.
            </li>
            <li>
              <strong>Gestión operativa:</strong> asignación de servicios cercanos, optimización de rutas, cálculo de tiempos estimados de llegada y validación de la prestación del servicio en las zonas acordadas.
            </li>
            <li>
              <strong>Mejora de la experiencia:</strong> generación de estadísticas internas, métricas de eficiencia y seguridad, así como notificaciones basadas en la ubicación (por ejemplo, llegada al punto de recogida).
            </li>
          </ol>

          <p>
            Los datos de ubicación se procesan a través de la plataforma HyperTrack, que actúa como proveedor tecnológico encargado del tratamiento. HyperTrack almacena y procesa estos datos únicamente para habilitar la funcionalidad de seguimiento en tiempo real y bajo sus propios términos y condiciones de uso y privacidad.
          </p>
          <p>
            La información de ubicación no se comparte con terceros no autorizados. Únicamente podrá ser visualizada por los clientes mientras el servicio esté activo, y podrá compartirse con autoridades competentes cuando así lo exija la ley.
          </p>
          <p>
            Los datos de ubicación se conservan únicamente durante el tiempo necesario para la prestación del servicio, la gestión administrativa de ALFRED S.A.S. o el cumplimiento de obligaciones legales. Posteriormente, pueden ser anonimizados o eliminados.
          </p>
          <p>
            El usuario puede revocar en cualquier momento el permiso de acceso a la ubicación desde la configuración de su dispositivo. No obstante, debe tener en cuenta que la desactivación de dicho permiso impedirá el funcionamiento correcto de la aplicación y la prestación de los servicios asociados.
          </p>
          <p>
            Es de carácter facultativo suministrar información que verse sobre Datos Sensibles, entendidos como aquellos que afectan la intimidad o generen algún tipo de discriminación, o sobre menores de edad.
          </p>
          <p>
            La política de tratamiento de los datos del Titular, así como los cambios sustanciales que se produzcan en ésta, se podrán consultar a través del siguiente correo electrónico: <a href="mailto:soporte@alfred.co" className="text-[#00E5FF] hover:underline">soporte@alfred.co</a>. De igual manera, la misma se mantendrá actualizada en la página web de la entidad, cuya dirección es <a href="/privacy-policy-and-guarantee" className="text-[#00E5FF] hover:underline break-words">/politica-de-proteccion-de-datos-personales/</a>.
          </p>
          <p>
            Usted puede ejercitar los derechos de acceso, corrección, supresión, revocación o reclamo por infracción sobre los datos, mediante escrito dirigido a ALFRED S.A.S., a la dirección de correo electrónico <a href="mailto:soporte@alfred.co" className="text-[#00E5FF] hover:underline">soporte@alfred.co</a>, indicando en el asunto el derecho que desea ejercitar, o mediante correo ordinario remitido a la dirección: Calle 93A #11-36 Oficina 203 en la Ciudad de Bogotá D.C.
          </p>

        </section>

        {/* Footer Contact Info from the snippet */}
        <div className="mt-16 pt-8 border-t border-gray-700/50 flex flex-col items-center text-center space-y-4">
          <p className="font-bold text-white font-gotham uppercase tracking-wider">Hacemos que tener vehículos, sea fácil.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
            <div>
              <h4 className="font-bold text-white mb-2">Bogotá</h4>
              <p><a href="mailto:soporte@alfred.co" className="text-[#00E5FF] hover:underline">soporte@alfred.co</a></p>
              <p className="text-sm">Calle 93A #11-36 Oficina 203</p>
              <p className="text-sm">+57 (323) 254-0101</p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-2">Medellín</h4>
              <p><a href="mailto:soporte@alfred.co" className="text-[#00E5FF] hover:underline">soporte@alfred.co</a></p>
              <p className="text-sm">+57 (323) 254-0101</p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-2">CDMX</h4>
              <p><a href="mailto:soporte@alfred.co" className="text-[#00E5FF] hover:underline">soporte@alfred.co</a></p>
              <p className="text-sm">Ibsen 46, Cdmx, 11540</p>
              <p className="text-sm">+55 5199 3044</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
