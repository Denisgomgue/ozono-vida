'use client';

import { Zap, CheckCircle, Clock, Award, Users, ArrowRight, Phone, Mail, MapPin, Star, Heart, Shield, ChevronLeft, ChevronRight, Calendar, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import companyData from '@/data/company.json';
import { useState, useEffect } from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export default function CoctelVidaPage() {
  const [ currentImageIndex, setCurrentImageIndex ] = useState(0);
  const [ openFaqIndex, setOpenFaqIndex ] = useState<number | null>(0);

  // Array de imágenes del hero
  const heroImages = [
    '/images/hero/image1.png',
    '/images/hero/image2.png',
    '/images/hero/image3.png',
    '/images/hero/image4.png',
    '/images/hero/image5.png',
  ];

  // Auto-slider cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [ heroImages.length ]);

  // Funciones de navegación manual
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="services-page min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section con Slider */}
      <section className="relative bg-gradient-to-br from-purple-500 to-indigo-600 min-h-[70vh] flex items-center text-white overflow-hidden">
        {/* Slider de imágenes de fondo */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <Image
                src={image}
                alt={`Cóctel de Vida ${index + 1}`}
                fill
                className="object-cover brightness-75"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Flechas de navegación - Diseño minimalista */}
        <button
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/5 hover:bg-white/20 backdrop-blur-md rounded-full p-4 transition-all duration-300 group border border-white/10"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/5 hover:bg-white/20 backdrop-blur-md rounded-full p-4 transition-all duration-300 group border border-white/10"
          aria-label="Siguiente imagen"
        >
          <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Contenido */}
        <div className="container mx-auto px-4 md:px-4 max-w-7xl relative z-10 py-20">
          {/* Breadcrumbs mejorados */}
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { label: 'Servicios', href: '/servicios' },
                { label: 'Cóctel de Vida' }
              ]}
            />
          </div>

          <div className="max-w-3xl">
            {/* Badge con diseño glassmorphism */}
            <div className="inline-flex items-center space-x-2 bg-purple-500/30 backdrop-blur-md border border-purple-300/50 text-purple-100 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg">
              <Zap className="w-4 h-4 text-purple-300" />
              <span>Terapia Integral Combinada</span>
            </div>

            {/* Título con mejor espaciado */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
              <span className="text-white">Cóctel de</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-300 to-purple-200 block mt-2">
                Vida
              </span>
            </h1>

            

            {/* Botones con mejor diseño */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/reservar-cita" className="group bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Reservar Cita</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/servicios" className="border-2 border-white/30 backdrop-blur-md text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-center hover:border-white">
                Explorar Servicios
              </Link>
            </div>
          </div>
        </div>

        {/* Indicadores del slider - Diseño moderno */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`transition-all duration-300 rounded-full ${index === currentImageIndex
                ? 'bg-white w-10 h-2'
                : 'bg-white/40 hover:bg-white/60 w-2 h-2'
                }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ¿Qué es el Cóctel de Vida? */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                ¿Qué es el Cóctel de Vida?
              </h2>
              <div className="space-y-6 text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                <p>
                  El <strong className="text-purple-600">Cóctel de Vida</strong> es una terapia integral que combina múltiples tratamientos regenerativos para potenciar al máximo los beneficios para tu salud. Esta terapia personalizada incluye ozonoterapia, plasma rico en plaquetas, vitaminas y minerales esenciales.
                </p>
                <p>
                  Esta combinación terapéutica está diseñada para abordar múltiples aspectos de la salud simultáneamente, proporcionando una mejora integral del bienestar, energía y vitalidad del paciente.
                </p>
                <div className="bg-purple-600/10 rounded-xl p-6 border-l-4 border-purple-600">
                  <h3 className="font-bold text-corporate-text-dark dark:text-white mb-3">
                    Componentes del Cóctel de Vida
                  </h3>
                  <ul className="space-y-2">
                    <li>• Ozonoterapia médica</li>
                    <li>• Plasma Rico en Plaquetas (PRP)</li>
                    <li>• Vitaminas y minerales esenciales</li>
                    <li>• Antioxidantes naturales</li>
                    <li>• Factores de crecimiento</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                <Image
                  src="/images/services/servicios-coctelVida.png"
                  alt="Cóctel de Vida - Terapia integral"
                  width={500}
                  height={400}
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-3">
                    Beneficios Combinados
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="text-sm text-corporate-text-muted dark:text-gray-300">Energía Vital</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="text-sm text-corporate-text-muted dark:text-gray-300">Regeneración</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="text-sm text-corporate-text-muted dark:text-gray-300">Anti-envejecimiento</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="text-sm text-corporate-text-muted dark:text-gray-300">Bienestar Total</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios del Cóctel de Vida */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
              Beneficios del Cóctel de Vida
            </h2>
            <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
              Esta terapia integral ofrece beneficios múltiples para tu salud y bienestar general
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Aumento de Energía y Vitalidad",
                description: "Potencia tu energía natural y mejora tu vitalidad general",
                icon: Zap,
                color: "purple-600"
              },
              {
                title: "Regeneración Celular Acelerada",
                description: "Estimula la renovación y regeneración de células",
                icon: Heart,
                color: "corporate-red"
              },
              {
                title: "Fortalecimiento del Sistema Inmunológico",
                description: "Mejora la respuesta inmunitaria y defensas naturales",
                icon: Shield,
                color: "corporate-blue"
              },
              {
                title: "Efecto Anti-envejecimiento",
                description: "Retarda los signos del envejecimiento de forma natural",
                icon: Award,
                color: "green-600"
              },
              {
                title: "Mejora de la Calidad del Sueño",
                description: "Promueve un descanso reparador y sueño profundo",
                icon: Clock,
                color: "orange-500"
              },
              {
                title: "Optimización de la Función Cerebral",
                description: "Mejora la concentración, memoria y función cognitiva",
                icon: Users,
                color: "pink-500"
              }
            ].map((beneficio, index) => {
              const IconComponent = beneficio.icon;
              return (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-${beneficio.color} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-4">
                    {beneficio.title}
                  </h3>
                  <p className="text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                    {beneficio.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Indicaciones Específicas */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
              Indicaciones Específicas
            </h2>
            <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
              El Cóctel de Vida es especialmente beneficioso para estas condiciones con excelentes resultados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fatiga Crónica */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-4">
                Fatiga Crónica
              </h3>
              <ul className="space-y-2 text-corporate-text-muted dark:text-gray-300">
                <li>• Síndrome de fatiga crónica</li>
                <li>• Agotamiento mental y físico</li>
                <li>• Falta de energía persistente</li>
                <li>• Dificultad para concentrarse</li>
                <li>• Debilidad generalizada</li>
              </ul>
            </div>

            {/* Problemas de Sueño */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-corporate-blue rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-4">
                Problemas de Sueño
              </h3>
              <ul className="space-y-2 text-corporate-text-muted dark:text-gray-300">
                <li>• Insomnio crónico</li>
                <li>• Sueño no reparador</li>
                <li>• Despertar frecuente</li>
                <li>• Dificultad para conciliar el sueño</li>
                <li>• Somnolencia diurna</li>
              </ul>
            </div>

            {/* Envejecimiento Prematuro */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-corporate-red rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-4">
                Envejecimiento Prematuro
              </h3>
              <ul className="space-y-2 text-corporate-text-muted dark:text-gray-300">
                <li>• Signos tempranos de envejecimiento</li>
                <li>• Pérdida de elasticidad de la piel</li>
                <li>• Aparición de arrugas prematuras</li>
                <li>• Pérdida de densidad ósea</li>
                <li>• Deterioro cognitivo temprano</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso del Tratamiento */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
              Proceso del Tratamiento
            </h2>
            <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
              Un protocolo personalizado que combina múltiples terapias para máxima efectividad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Evaluación Integral",
                description: "Análisis completo de tu estado de salud y necesidades específicas"
              },
              {
                step: "02",
                title: "Preparación Personalizada",
                description: "Desarrollo del protocolo de Cóctel de Vida adaptado a tu caso"
              },
              {
                step: "03",
                title: "Aplicación Combinada",
                description: "Administración coordinada de todos los componentes terapéuticos"
              },
              {
                step: "04",
                title: "Seguimiento Continuo",
                description: "Monitoreo de resultados y ajustes del tratamiento según progreso"
              }
            ].map((paso, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {paso.step}
                </div>
                <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-4">
                  {paso.title}
                </h3>
                <p className="text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                  {paso.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Duración y Resultados */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                Resultados y Duración
              </h2>
              <div className="space-y-6 text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                <p>
                  Los efectos del Cóctel de Vida pueden comenzar a notarse desde las primeras 24-48 horas, con mejoras progresivas durante las siguientes semanas. Los resultados son más duraderos y efectivos que las terapias individuales.
                </p>
                <p>
                  Para obtener los mejores resultados, se recomienda un protocolo de 4-6 sesiones espaciadas cada 2-3 semanas, seguido de sesiones de mantenimiento según las necesidades individuales.
                </p>
                <div className="bg-purple-600/10 rounded-xl p-6 border-l-4 border-purple-600">
                  <h3 className="font-bold text-corporate-text-dark dark:text-white mb-3">
                    Ventajas del Cóctel de Vida
                  </h3>
                  <ul className="space-y-2">
                    <li>• Efectos más rápidos y duraderos</li>
                    <li>• Beneficios múltiples en una sola sesión</li>
                    <li>• Mejora integral de la salud</li>
                    <li>• Potenciación de resultados</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600/10 to-indigo-600/10 rounded-2xl p-8">
              <div className="grid grid-cols-1 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">24-48</div>
                  <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Horas para efectos iniciales</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">4-6</div>
                  <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Sesiones recomendadas</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">3-6</div>
                  <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Meses de efectos duraderos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-600/10 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <CheckCircle className="w-4 h-4" />
              <span>FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
              Preguntas Frecuentes sobre Cóctel de Vida
            </h2>
            <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
              Resolvemos las dudas más comunes sobre esta terapia integral
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                pregunta: "¿En qué consiste el Cóctel de Vida?",
                respuesta: "Es una terapia integral que combina ozonoterapia, plasma rico en plaquetas, vitaminas y minerales esenciales para potenciar al máximo los beneficios para tu salud y vitalidad."
              },
              {
                pregunta: "¿Cuánto tiempo dura cada sesión?",
                respuesta: "Una sesión completa del Cóctel de Vida dura aproximadamente 60-90 minutos, incluyendo la evaluación, preparación de componentes y aplicación del tratamiento."
              },
              {
                pregunta: "¿Hay contraindicaciones?",
                respuesta: "Es un tratamiento muy seguro. Se realiza una evaluación previa para determinar si es adecuado para tu caso específico y personalizar el protocolo."
              },
              {
                pregunta: "¿Cuándo se notan los efectos?",
                respuesta: "Los primeros efectos pueden notarse desde las primeras 24-48 horas, con mejoras progresivas durante las siguientes semanas. Los beneficios se acumulan con cada sesión."
              },
              {
                pregunta: "¿Es doloroso el tratamiento?",
                respuesta: "No, el Cóctel de Vida es prácticamente indoloro. Puede haber una leve molestia similar a una extracción de sangre rutinaria."
              },
              {
                pregunta: "¿Se puede combinar con otros tratamientos?",
                respuesta: "Sí, el Cóctel de Vida se puede combinar con otros tratamientos médicos para potenciar aún más los resultados, siempre bajo supervisión médica."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                >
                  <div className="flex items-start space-x-4 flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${openFaqIndex === index
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-600/10 text-purple-600'
                      }`}>
                      <span className="font-bold text-sm">{index + 1}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-corporate-text-dark dark:text-white pt-1">
                      {faq.pregunta}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-purple-600 flex-shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                >
                  <div className="px-6 pb-6 pl-20">
                    <div className="border-l-4 border-purple-600/20 pl-6">
                      <p className="text-corporate-text-muted dark:text-gray-300 leading-relaxed text-base md:text-lg">
                        {faq.respuesta}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA adicional */}
          <div className="mt-12 text-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-corporate-text-dark dark:text-white mb-4">
              ¿Tienes más preguntas sobre el Cóctel de Vida?
            </h3>
            <p className="text-corporate-text-muted dark:text-gray-300 mb-6">
              Nuestro equipo médico está disponible para resolver todas tus dudas sin compromiso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${companyData.whatsapp.replace(/\s/g, '').replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Consultar por WhatsApp</span>
              </a>
              <Link
                href="/reservar-cita"
                className="inline-flex items-center justify-center space-x-2 border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar Consulta</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
              Testimonios de Pacientes
            </h2>
            <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
              Historias reales de pacientes que han transformado su vitalidad con el Cóctel de Vida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Isabel Morales",
                condition: "Fatiga Crónica",
                testimonial: "El Cóctel de Vida cambió completamente mi energía. Después de años de fatiga constante, ahora me siento llena de vitalidad y puedo disfrutar de mis actividades diarias.",
                rating: 5
              },
              {
                name: "Roberto Castillo",
                condition: "Problemas de Sueño",
                testimonial: "Increíble cómo mejoró mi calidad de sueño. Ahora descanso profundamente y me levanto renovado cada mañana. La diferencia es notable.",
                rating: 5
              },
              {
                name: "Carmen Ruiz",
                condition: "Envejecimiento Prematuro",
                testimonial: "El Cóctel de Vida me ha devuelto mi vitalidad y energía juvenil. Mi piel se ve más joven y me siento más activa que nunca. Excelente tratamiento.",
                rating: 5
              }
            ].map((testimonio, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[ ...Array(testimonio.rating) ].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-corporate-text-dark dark:text-white text-lg mb-6 leading-relaxed">
                  "{testimonio.testimonial}"
                </blockquote>
                <div className="border-t pt-6">
                  <h4 className="font-semibold text-corporate-text-dark dark:text-white">{testimonio.name}</h4>
                  <p className="text-sm text-corporate-text-muted dark:text-gray-400">{testimonio.condition}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            ¿Listo para revitalizar tu vida?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
            Descubre cómo el Cóctel de Vida puede transformar tu energía, vitalidad y bienestar integral.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservar-cita" className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Consulta Gratuita
            </Link>
            <Link
              href="/reservar-cita"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              Reservar Cita
            </Link>
          </div>
        </div>
      </section>

      {/* Información de contacto */}
      <section className="py-16 bg-corporate-gray-light dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-4">
              ¿Tienes preguntas sobre el Cóctel de Vida?
            </h2>
            <p className="text-xl text-corporate-text-muted dark:text-gray-300">
              Contáctanos y nuestro equipo médico te asesorará sobre esta terapia integral
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-2">Llámanos</h3>
              <p className="text-corporate-text-muted dark:text-gray-300 mb-4">{companyData.phone}</p>
              <a href={`tel:${companyData.phone}`} className="text-corporate-blue hover:text-corporate-blue-light font-semibold transition-colors">
                Llamar ahora
              </a>
            </div>

            <div className="text-center bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-corporate-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-2">Escríbenos</h3>
              <p className="text-corporate-text-muted dark:text-gray-300 mb-4 text-sm">{companyData.email}</p>
              <a href={`mailto:${companyData.email}`} className="text-corporate-red hover:text-pink-500 font-semibold transition-colors">
                Enviar email
              </a>
            </div>

            <div className="text-center bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-2">Visítanos</h3>
              <p className="text-corporate-text-muted dark:text-gray-300 mb-4 text-sm">{companyData.address}</p>
              <a href={companyData.googleMaps.directions} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-500 font-semibold transition-colors">
                Cómo llegar
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}