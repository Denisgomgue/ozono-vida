'use client';

import { Logo } from '@/components/ui/Logo';
import { Heart, Shield, Zap, Users, Phone, Mail, MapPin, CheckCircle, Star, Clock, Award, Calendar, MessageCircle, ArrowRight, Target, Play, Quote } from 'lucide-react';
import Image from 'next/image';
import companyData from '@/data/company.json';
import { AppointmentModal } from '@/components/ui/AppointmentModal';
import { useState } from 'react';

export default function Home() {
  const [ isAppointmentModalOpen, setIsAppointmentModalOpen ] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Top Bar con información de contacto */}
      <div className="bg-corporate-blue-light text-white py-3">
        <div className="container mx-auto px-4 md:px-8 lg:px-4">
          {/* Mobile Layout */}
          <div className="block md:hidden">
            <div className="grid grid-cols-1 gap-3 text-center">
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{companyData.phone}</span>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{companyData.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{companyData.hours.weekdays} · {companyData.hours.saturday}</span>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{companyData.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{companyData.email}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span>Horario: {companyData.hours.weekdays} · {companyData.hours.saturday}</span>
              <Clock className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section con imagen de fondo */}
      <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark py-40 text-white">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/imagen1.jpeg"
            alt="Tratamiento de Ozonoterapia"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overlay para mejor legibilidad */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-4 md:px-8 lg:px-4 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6">
                <span className="text-white md:text-6xl">Medicina regenerativa ozonoterapia, aliviamos el dolor</span>
              </h1>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/reservar-cita"
                  className="btn-gradient-corporate text-lg lg:text-xl px-8 py-4 lg:px-10 lg:py-5"
                >
                  Reservar Cita Ahora
                </a>
                <a href="/servicios" className="border-2 border-corporate-white text-corporate-white hover:bg-corporate-white hover:text-corporate-blue px-8 py-4 lg:px-10 lg:py-5 rounded-lg font-semibold transition-colors text-center text-lg lg:text-xl">
                  Ver Servicios
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-xl">
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-10 h-10 text-corporate-blue-light drop-shadow-lg" />
                    <div>
                      <h3 className="font-bold text-lg lg:text-xl text-white drop-shadow-md">Tratamientos Avanzados</h3>
                      <p className="text-base lg:text-lg text-white/90 drop-shadow-sm">Tecnología de vanguardia</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Award className="w-10 h-10 lg:w-12 lg:h-12 text-corporate-blue-light drop-shadow-lg" />
                    <div>
                      <h3 className="font-bold text-lg lg:text-xl text-white drop-shadow-md">Profesionales Certificados</h3>
                      <p className="text-base lg:text-lg text-white/90 drop-shadow-sm">Experiencia garantizada</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Heart className="w-10 h-10 lg:w-12 lg:h-12 text-corporate-blue-light drop-shadow-lg" />
                    <div>
                      <h3 className="font-bold text-lg lg:text-xl text-white drop-shadow-md">Atención Personalizada</h3>
                      <p className="text-base lg:text-lg text-white/90 drop-shadow-sm">Cuidado integral</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características Destacadas */}
      {/* <section className="py-16 bg-corporate-gray-light dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-corporate-text-dark dark:text-white mb-3">
                Cobertura en Huaraz
              </h3>
              <p className="text-lg lg:text-xl text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                Atendemos en el Centro Médico Stella Maris, ubicado estratégicamente en Huaraz.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-corporate-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-corporate-text-dark dark:text-white mb-3">
                Equipo Médico
              </h3>
              <p className="text-lg lg:text-xl text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                Profesionales especializados en ozonoterapia y medicina regenerativa.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-corporate-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-corporate-text-dark dark:text-white mb-3">
                Tratamientos Seguros
              </h3>
              <p className="text-lg lg:text-xl text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                Métodos probados y seguros para mejorar tu salud y bienestar.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Servicios Section */}
      <section className="py-20 bg-corporate-gray-light dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-corporate-text-muted dark:text-gray-300 max-w-2xl mx-auto">
              Ofrecemos tratamientos innovadores y efectivos para mejorar tu salud y bienestar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Ozonoterapia */}
            <div className="card p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/services/servicios-ozonoterapia.png"
                  alt="Ozonoterapia"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-corporate-text-dark dark:text-white mb-2">
                Ozonoterapia
              </h3>
              <p className="text-corporate-text-muted dark:text-gray-300 mb-4">
                Tratamiento médico con ozono para diversas condiciones de salud.
              </p>
              <a href="/servicios/ozonoterapia" className="text-corporate-blue dark:text-blue-400 hover:text-corporate-blue-light font-medium">
                Ver más →
              </a>
            </div>

            {/* Plasma Rico en Plaquetas */}
            <div className="card p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/services/servicios-plasmaRicoPlaquetas.png"
                  alt="Plasma Rico en Plaquetas"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-corporate-text-dark dark:text-white mb-2">
                Plasma Rico en Plaquetas
              </h3>
              <p className="text-corporate-text-muted dark:text-gray-300 mb-4">
                Tratamiento regenerativo utilizando tu propia sangre.
              </p>
              <a href="/servicios/plasma-rico-plaquetas" className="text-corporate-blue dark:text-blue-400 hover:text-corporate-blue-light font-medium">
                Ver más →
              </a>
            </div>

            {/* Medicina Regenerativa */}
            <div className="card p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/services/servicios-medicinaRegenerativa.png"
                  alt="Medicina Regenerativa"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-corporate-text-dark dark:text-white mb-2">
                Medicina Regenerativa
              </h3>
              <p className="text-corporate-text-muted dark:text-gray-300 mb-4">
                Terapias avanzadas para regenerar tejidos y mejorar la función.
              </p>
              <a href="/servicios/medicina-regenerativa" className="text-corporate-blue dark:text-blue-400 hover:text-corporate-blue-light font-medium">
                Ver más →
              </a>
            </div>

            {/* Cóctel de Vida */}
            <div className="card p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/services/servicios-coctelVida.png"
                  alt="Cóctel de Vida"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-corporate-text-dark dark:text-white mb-2">
                Cóctel de Vida
              </h3>
              <p className="text-corporate-text-muted dark:text-gray-300 mb-4">
                Terapia combinada para rejuvenecimiento y vitalidad.
              </p>
              <a href="/servicios/coctel-vida" className="text-corporate-blue dark:text-blue-400 hover:text-corporate-blue-light font-medium">
                Ver más →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de TikTok */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-4">
              Síguenos en TikTok
            </h2>
            <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-2xl mx-auto">
              Descubre testimonios reales, consejos de salud y el día a día de nuestra clínica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Video 1 */}
            <a
              href="https://www.tiktok.com/@ozonovidahuaraz"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              aria-label="Ver video de testimonio en TikTok"
            >
              <div className="aspect-[9/16] bg-gradient-to-br from-corporate-blue to-corporate-blue-light relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                      <Play className="w-8 h-8 ml-1" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Testimonio Real</h3>
                    <p className="text-sm opacity-90">Paciente recuperado</p>
                  </div>
                </div>
                {/* Overlay de TikTok */}
                <div className="absolute top-3 right-3">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-corporate-text-dark dark:text-white mb-2">
                  Testimonio de Ozonoterapia
                </h4>
                <p className="text-sm text-corporate-text-muted dark:text-gray-300">
                  Conoce la experiencia real de nuestros pacientes
                </p>
              </div>
            </a>

            {/* Video 2 */}
            <a
              href="https://www.tiktok.com/@ozonovidahuaraz"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              aria-label="Ver consejos de salud en TikTok"
            >
              <div className="aspect-[9/16] bg-gradient-to-br from-corporate-red to-pink-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                      <Heart className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Consejos de Salud</h3>
                    <p className="text-sm opacity-90">Tips diarios</p>
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-corporate-text-dark dark:text-white mb-2">
                  Consejos de Bienestar
                </h4>
                <p className="text-sm text-corporate-text-muted dark:text-gray-300">
                  Tips diarios para mejorar tu calidad de vida
                </p>
              </div>
            </a>

            {/* Video 3 */}
            <a
              href="https://www.tiktok.com/@ozonovidahuaraz"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              aria-label="Ver detrás de escenas en TikTok"
            >
              <div className="aspect-[9/16] bg-gradient-to-br from-corporate-blue-light to-green-400 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                      <Users className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Detrás de Escenas</h3>
                    <p className="text-sm opacity-90">Nuestro día a día</p>
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-corporate-text-dark dark:text-white mb-2">
                  Conoce Nuestro Equipo
                </h4>
                <p className="text-sm text-corporate-text-muted dark:text-gray-300">
                  El día a día en nuestra clínica
                </p>
              </div>
            </a>
          </div>

          {/* Botón para seguir en TikTok */}
          <div className="text-center mt-8">
            <a
              href="https://www.tiktok.com/@ozonovidahuaraz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              aria-label="Seguir a Ozono Vida en TikTok"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              <span>Síguenos en TikTok</span>
            </a>
          </div>
        </div>
      </section>

      {/* Acerca de Nosotros - Rediseñado */}
      <section className="py-20 bg-corporate-gray-light dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Lado izquierdo - Contenido */}
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <div className="flex items-center space-x-2 mb-6">
                <Target className="w-5 h-5 text-corporate-blue-light" />
                <span className="text-corporate-blue-light font-semibold text-sm uppercase tracking-wide">
                  Acerca de Nosotros
                </span>
              </div>

              {/* Título principal */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-corporate-text-dark dark:text-white mb-6 leading-tight">
                Clinica Ozono Vida
                <span className="text-corporate-blue block">Aliviamos el dolor</span>
              </h2>

              {/* Descripción concisa */}
              <p className="text-xl text-corporate-text-muted dark:text-gray-300 mb-8 leading-relaxed">
                Somos un centro médico con enfoque humano, especializado en terapias avanzadas para el dolor. Nuestro equipo está comprometido con brindar resultados reales y un acompañamiento cercano.
              </p>

              {/* Lista de características */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-corporate-blue-light flex-shrink-0" />
                  <span className="text-corporate-text-dark dark:text-white font-medium">Ozonoterapia Avanzada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-corporate-blue-light flex-shrink-0" />
                  <span className="text-corporate-text-dark dark:text-white font-medium">Medicina Regenerativa</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-corporate-blue-light flex-shrink-0" />
                  <span className="text-corporate-text-dark dark:text-white font-medium">Plasma Rico en Plaquetas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-corporate-blue-light flex-shrink-0" />
                  <span className="text-corporate-text-dark dark:text-white font-medium">Cóctel de Vida</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-corporate-blue-light flex-shrink-0" />
                  <span className="text-corporate-text-dark dark:text-white font-medium">Atención Personalizada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-corporate-blue-light flex-shrink-0" />
                  <span className="text-corporate-text-dark dark:text-white font-medium">Tecnología de Vanguardia</span>
                </div>
              </div>

              {/* Botón principal */}
              {/* <div className="flex flex-col sm:flex-row gap-4 items-start">
                <a
                  href="/nosotros"
                  className="text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center space-x-2"
                  style={{ background: 'linear-gradient(135deg, var(--corporate-blue-light), var(--corporate-blue))' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, var(--corporate-blue), var(--corporate-blue-light))';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(100, 178, 231, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, var(--corporate-blue-light), var(--corporate-blue))';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  <span>Acerca de nosotros</span>
                  <ArrowRight className="w-5 h-5" />
                </a>


              </div> */}

            </div>

            {/* Lado derecho - Imagen y Estadísticas */}
            <div className="order-1 lg:order-2">
              {/* Imagen del local */}
              <div className="mb-8">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/general/local_ozonovida.png"
                    alt="Local de Ozono Vida - Centro Médico Stella Maris"
                    width={400}
                    height={400}
                    className="w-full h-80 object-cover"
                    priority
                  />
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  {/* Badge en la imagen */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-corporate-blue" />
                      <span className="text-sm font-semibold text-corporate-text-dark">
                        Centro Médico Stella Maris
                      </span>
                    </div>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </div>
        {/* Estadísticas */}
        <div className="bg-gradient-to-br from-corporate-blue/5 to-corporate-blue-light/5 rounded-2xl p-6">
          <div className="grid grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-corporate-blue-light mb-2">500+</div>
              <div className="text-corporate-text-muted dark:text-gray-300 font-medium text-sm">Pacientes Felices</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-corporate-blue-light mb-2">5+</div>
              <div className="text-corporate-text-muted dark:text-gray-300 font-medium text-sm">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-corporate-blue-light mb-2">98%</div>
              <div className="text-corporate-text-muted dark:text-gray-300 font-medium text-sm">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-corporate-blue-light mb-2">15+</div>
              <div className="text-corporate-text-muted dark:text-gray-300 font-medium text-sm">Tratamientos</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            ¿Listo para mejorar tu salud?
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-2xl mx-auto text-white opacity-90">
            Agenda tu cita hoy y comienza tu camino hacia una mejor calidad de vida.
          </p>
          {/* <a
            href="/reservar-cita"
            className="btn-gradient-corporate px-8 py-3"
          >
            Reservar Cita Ahora
          </a> */}
        </div>
      </section>

      {/* Sección de Contacto Mejorada */}
      <section className="py-20 bg-corporate-gray-light dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
          {/* Título de la sección */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-4">
              Contáctanos
            </h2>
            <p className="text-xl md:text-2xl text-corporate-text-muted dark:text-gray-300 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Contáctanos de la manera que prefieras.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Información de contacto y botones de acción */}
            <div className="space-y-8">
              {/* Información de contacto */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-corporate-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-corporate-text-dark dark:text-white mb-1">Ubicación</h4>
                    <p className="text-corporate-text-muted dark:text-gray-300">
                      {companyData.address}<br />
                      {companyData.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-corporate-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-corporate-text-dark dark:text-white mb-1">Teléfono</h4>
                    <p className="text-corporate-text-muted dark:text-gray-300">{companyData.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-corporate-red rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-corporate-text-dark dark:text-white mb-1">Email</h4>
                    <p className="text-corporate-text-muted dark:text-gray-300">{companyData.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-corporate-blue-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-corporate-text-dark dark:text-white mb-1">Horarios de Atención</h4>
                    <p className="text-corporate-text-muted dark:text-gray-300">
                      {companyData.hours.weekdays}<br />
                      {companyData.hours.saturday}
                    </p>
                  </div>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  onClick={() => setIsAppointmentModalOpen(true)}
                  className="btn-gradient-corporate flex items-center justify-center space-x-2 px-6 py-3 text-center"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Reservar Cita</span>
                </button>
                <a
                  href={`https://wa.me/${companyData.whatsapp.replace(/\s/g, '').replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient-whatsapp px-6 py-3"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Mapa integrado */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src={companyData.googleMaps.embed}
                  width="100%"
                  height={companyData.googleMaps.height}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                  title="Ubicación de Ozono Vida"
                ></iframe>
              </div>

              {/* Overlay con información adicional */}
              <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg max-w-xs">
                <h5 className="font-semibold text-corporate-text-dark dark:text-white mb-1">
                  {companyData.name}
                </h5>
                <p className="text-sm text-corporate-text-muted dark:text-gray-300 mb-2">
                  {companyData.address}
                </p>
                <div className="flex space-x-2">
                  <a
                    href={companyData.googleMaps.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-corporate-blue text-white px-3 py-1 rounded-full hover:bg-corporate-blue-light transition-colors"
                  >
                    Cómo llegar
                  </a>
                  <a
                    href={companyData.googleMaps.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                  >
                    Ampliar mapa
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
              Lo que dicen nuestros pacientes
            </h2>
            <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
              Historias reales de recuperación y mejora en la calidad de vida de quienes confiaron en nosotros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonio 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[ ...Array(5) ].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-corporate-blue ml-4 opacity-50" />
              </div>

              <blockquote className="text-corporate-text-dark dark:text-white text-lg mb-6 leading-relaxed">
                "La ozonoterapia cambió completamente mi vida. Después de años sufriendo dolor de rodilla,
                en solo 4 sesiones ya no siento molestias. El equipo es muy profesional y la atención excelente."
              </blockquote>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-corporate-blue to-corporate-blue-light rounded-full flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-corporate-text-dark dark:text-white">María González</h4>
                  <p className="text-sm text-corporate-text-muted dark:text-gray-400">Paciente de Ozonoterapia</p>
                </div>
              </div>
            </div>

            {/* Testimonio 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[ ...Array(5) ].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-corporate-blue ml-4 opacity-50" />
              </div>

              <blockquote className="text-corporate-text-dark dark:text-white text-lg mb-6 leading-relaxed">
                "Increíble la mejora en mi artritis. El plasma rico en plaquetas me ayudó mucho.
                El doctor explica todo muy claro y se nota que realmente se preocupa por sus pacientes."
              </blockquote>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-corporate-red to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  C
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-corporate-text-dark dark:text-white">Carlos Mendoza</h4>
                  <p className="text-sm text-corporate-text-muted dark:text-gray-400">Paciente de PRP</p>
                </div>
              </div>
            </div>

            {/* Testimonio 3 */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[ ...Array(5) ].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-corporate-blue ml-4 opacity-50" />
              </div>

              <blockquote className="text-corporate-text-dark dark:text-white text-lg mb-6 leading-relaxed">
                "Excelente atención y resultados. El cóctel de vida me ayudó a recuperar mi energía
                y vitalidad. Definitivamente recomiendo Ozono Vida a todos mis conocidos."
              </blockquote>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-corporate-text-dark dark:text-white">Ana Rodríguez</h4>
                  <p className="text-sm text-corporate-text-muted dark:text-gray-400">Paciente de Cóctel de Vida</p>
                </div>
              </div>
            </div>
          </div>

          {/* Estadísticas de confianza */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-corporate-blue mb-2">500+</div>
              <p className="text-corporate-text-muted dark:text-gray-400 font-medium">Pacientes Atendidos</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-corporate-blue mb-2">98%</div>
              <p className="text-corporate-text-muted dark:text-gray-400 font-medium">Satisfacción</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-corporate-blue mb-2">5</div>
              <p className="text-corporate-text-muted dark:text-gray-400 font-medium">Años de Experiencia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de reserva de cita */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </div>
  );
}