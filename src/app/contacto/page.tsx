import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import Image from 'next/image';
import companyData from '@/data/company.json';
import { AppointmentButton } from '@/components/ui/AppointmentButton';

export const metadata: Metadata = {
  title: 'Contacto - Ozono Vida | Centro Médico Stella Maris',
  description: 'Contáctanos en Ozono Vida. Ubicados en Huaraz, Centro Médico Stella Maris. Teléfono, WhatsApp, email y ubicación. Agenda tu cita hoy.',
};

export default function ContactoPage() {
    return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark py-16 text-white overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image
            src="/images/general/local_ozonovida.png"
            alt="Centro Médico Stella Maris"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        
        {/* Capa de viñeta */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-4xl relative z-10">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Contáctanos</span>
              <span className="text-corporate-blue-light block">Estamos aquí para ayudarte</span>
                </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Tu salud es nuestra prioridad. Contáctanos de la manera que prefieras.
            </p>
          </div>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-corporate-text-dark dark:text-white mb-4">
              <span className="text-corporate-blue">Información</span> de Contacto
            </h2>
            <p className="text-lg text-corporate-text-muted dark:text-gray-300">
              Múltiples formas de contactarnos para tu comodidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Teléfono */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-corporate-blue to-corporate-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-corporate-text-dark dark:text-white mb-2">
                Teléfono
              </h3>
              <p className="text-sm text-corporate-text-muted dark:text-gray-300 mb-4">
                Llámanos directamente
              </p>
              <a
                href={`tel:${companyData.phone}`}
                className="text-corporate-blue hover:text-corporate-blue-light font-semibold transition-colors"
              >
                {companyData.phone}
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </div>
              <h3 className="font-semibold text-corporate-text-dark dark:text-white mb-2">
                WhatsApp
              </h3>
              <p className="text-sm text-corporate-text-muted dark:text-gray-300 mb-4">
                Respuesta rápida
              </p>
              <a
                href={`https://wa.me/${companyData.whatsapp.replace(/\s/g, '').replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Email */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-corporate-red to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-corporate-text-dark dark:text-white mb-2">
                Email
              </h3>
              <p className="text-sm text-corporate-text-muted dark:text-gray-300 mb-4">
                Envíanos un correo
              </p>
              <a
                href={`mailto:${companyData.email}`}
                className="text-corporate-red hover:text-pink-500 font-semibold transition-colors break-all text-sm"
              >
                {companyData.email}
              </a>
            </div>

            {/* Ubicación */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-corporate-blue-light to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-corporate-text-dark dark:text-white mb-2">
                Ubicación
              </h3>
              <p className="text-sm text-corporate-text-muted dark:text-gray-300 mb-4">
                Visítanos
              </p>
              <div className="text-corporate-text-dark dark:text-white font-medium text-sm">
                <p className="mb-1">{companyData.address}</p>
                <p>{companyData.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa y Ubicación */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-corporate-text-dark dark:text-white mb-4">
              <span className="text-corporate-blue">Nuestra</span> Ubicación
            </h2>
            <p className="text-lg text-corporate-text-muted dark:text-gray-300">
              Encuéntranos fácilmente en el Centro Médico Stella Maris
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Información de ubicación */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-corporate-blue/5 to-corporate-blue-light/5 rounded-xl p-6">
                <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-4">
                  Centro Médico Stella Maris
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-corporate-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-corporate-text-dark dark:text-white mb-1">Dirección</h4>
                      <p className="text-sm text-corporate-text-muted dark:text-gray-300">
                        {companyData.address}<br />
                        {companyData.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-corporate-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-corporate-text-dark dark:text-white mb-1">Horarios</h4>
                      <p className="text-sm text-corporate-text-muted dark:text-gray-300">
                        <span className="block">{companyData.hours.weekdays}</span>
                        <span className="block">{companyData.hours.saturday}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-corporate-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-corporate-text-dark dark:text-white mb-1">Teléfono</h4>
                      <a
                        href={`tel:${companyData.phone}`}
                        className="text-corporate-blue hover:text-corporate-blue-light font-semibold transition-colors text-sm"
                      >
                        {companyData.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href={companyData.googleMaps.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-corporate-blue text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-corporate-blue-dark transform hover:scale-105 text-sm"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Cómo llegar</span>
                  </a>
                  <AppointmentButton variant="outline" size="sm" text="Reservar Cita" />
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <iframe
                  src={companyData.googleMaps.embed}
                  width="100%"
                  height={companyData.googleMaps.height}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="Ubicación de Ozono Vida"
                ></iframe>
              </div>

              {/* Overlay con información adicional */}
              <div className="absolute top-3 left-3 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg max-w-xs">
                <h5 className="font-semibold text-corporate-text-dark dark:text-white mb-1 text-sm">
                  {companyData.name}
                </h5>
                <p className="text-xs text-corporate-text-muted dark:text-gray-300 mb-2">
                  {companyData.address}
                </p>
                <div className="flex space-x-2">
                  <a
                    href={companyData.googleMaps.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-corporate-blue text-white px-2 py-1 rounded-full hover:bg-corporate-blue-light transition-colors"
                  >
                    Cómo llegar
                  </a>
                  <a
                    href={companyData.googleMaps.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                  >
                    Ampliar mapa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
        </div>
    );
}