import { Metadata } from 'next';
import { Calendar, Phone, Mail, User, MessageSquare, CheckCircle, Loader2, Stethoscope, ChevronDown, X } from 'lucide-react';
import Image from 'next/image';
import companyData from '@/data/company.json';
import { AppointmentButton } from '@/components/ui/AppointmentButton';

export const metadata: Metadata = {
  title: 'Reservar Cita - Ozono Vida | Centro Médico Stella Maris',
  description: 'Reserva tu cita médica en Ozono Vida. Ozonoterapia, PRP, Medicina Regenerativa y más. Centro Médico Stella Maris en Huaraz. Agenda tu consulta hoy.',
};

export default function ReservarCitaPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">  

      {/* Formulario de Reserva */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-4xl">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
            {/* Header del formulario */}
            <div className="bg-gradient-to-r from-corporate-blue to-corporate-blue-light px-6 py-8 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Reserva tu cita</h2>
                  <p className="text-blue-100">Completa el formulario y nos pondremos en contacto contigo</p>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="p-6 lg:p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Columna izquierda */}
                  <div className="space-y-6">
                    {/* Nombre completo */}
                    <div>
                      <label className="block text-gray-800 dark:text-gray-100 font-semibold mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-corporate-blue focus:border-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all"
                        placeholder="Ej. Juan Pérez"
                      />
                    </div>

                    {/* Teléfono */}
                    <div>
                      <label className="block text-gray-800 dark:text-gray-100 font-semibold mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-corporate-blue focus:border-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all"
                        placeholder="Ej. +51 999 999 999"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-gray-800 dark:text-gray-100 font-semibold mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-corporate-blue focus:border-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all"
                        placeholder="Ej. juan@email.com"
                      />
                    </div>
                  </div>

                  {/* Columna derecha */}
                  <div className="space-y-6">
                    {/* Servicio de interés */}
                    <div>
                      <label className="block text-gray-800 dark:text-gray-100 font-semibold mb-2">
                        Servicio de interés *
                      </label>
                      <div className="relative">
                        <select
                          name="servicio"
                          required
                          className="w-full px-4 py-3 pr-10 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-corporate-blue focus:border-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all appearance-none cursor-pointer hover:border-corporate-blue-light custom-select"
                        >
                          <option value="">Selecciona un servicio</option>
                          <option value="Ozonoterapia">Ozonoterapia</option>
                          <option value="Plasma Rico en Plaquetas">Plasma Rico en Plaquetas</option>
                          <option value="Medicina Regenerativa">Medicina Regenerativa</option>
                          <option value="Cóctel de Vida">Cóctel de Vida</option>
                          <option value="Consulta General">Consulta General</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Fecha preferida */}
                    <div>
                      <label className="block text-gray-800 dark:text-gray-100 font-semibold mb-2">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Fecha preferida *
                      </label>
                      <input
                        type="date"
                        name="fecha"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-corporate-blue focus:border-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all"
                      />
                    </div>

                    {/* Mensaje adicional */}
                    <div>
                      <label className="block text-gray-800 dark:text-gray-100 font-semibold mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Mensaje adicional
                      </label>
                      <textarea
                        name="mensaje"
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-corporate-blue focus:border-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all resize-none"
                        placeholder="Cuéntanos más sobre tu consulta..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Botón de envío */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-corporate-blue to-corporate-blue-light text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Stethoscope className="w-5 h-5" />
                    <span>Enviar solicitud de cita</span>
                  </button>
                </div>

                {/* Footer */}
                <div className="pt-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    Al enviar este formulario, aceptas que nos pongamos en contacto contigo para confirmar tu cita.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-4xl">
          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Teléfono */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-corporate-blue to-corporate-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-corporate-text-dark dark:text-white mb-2">Teléfono</h3>
              <a
                href={`tel:${companyData.phone}`}
                className="text-corporate-blue hover:text-corporate-blue-light font-semibold transition-colors"
              >
                {companyData.phone}
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </div>
              <h3 className="font-semibold text-corporate-text-dark dark:text-white mb-2">WhatsApp</h3>
              <a
                href={`https://wa.me/${companyData.whatsapp.replace(/\s/g, '').replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-semibold transition-colors"
              >
                Escribir por WhatsApp
              </a>
            </div>

            {/* Ubicación */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-corporate-blue-light to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-corporate-text-dark dark:text-white mb-2">Ubicación</h3>
              <p className="text-sm text-corporate-text-muted dark:text-gray-300">
                Centro Médico Stella Maris<br />
                Huaraz
              </p>
            </div>
          </div>
        </div>
      </section>

  
    </div>
  );
}