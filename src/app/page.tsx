'use client';

import { Heart, Shield, Zap, Phone, Mail, MapPin, CheckCircle, Star, Clock, ArrowRight, Target, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import companyData from '@/data/company.json';
import { AppointmentButton } from '@/components/ui/AppointmentButton';
import { useState, useEffect, useCallback } from 'react';

export default function Home() {
  const [ currentImageIndex, setCurrentImageIndex ] = useState(0);

  // Array de imágenes del hero
  const heroImages = [
    '/images/hero/image1.png',
    '/images/hero/image2.png',
    '/images/hero/image3.png',
    '/images/hero/image4.png',
    '/images/hero/image5.png',
    '/images/hero/image6.png',
    '/images/hero/image7.png',
    '/images/hero/image8.png',
    '/images/hero/image9.png',
    '/images/hero/image10.png',
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
  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  }, [ heroImages.length ]);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [ heroImages.length ]);

  useEffect(() => {
    // Cargar el script de TikTok embed
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Limpiar el script cuando el componente se desmonte
      const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [ goToPrevious, goToNext ]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section con imagen de fondo */}
      <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark py-32 text-white overflow-hidden">
        {/* Slider de imágenes de fondo */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${index === currentImageIndex ? 'opacity-90' : 'opacity-0'
                }`}
            >
              <Image
                src={image}
                alt={`Tratamiento de Ozonoterapia ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Capa de viñeta negra */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Flechas de navegación en los extremos de la pantalla */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
          aria-label="Siguiente imagen"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        <div className="container mx-auto px-4 md:px-8 lg:px-4 relative z-10 max-w-7xl">


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-white">Medicina  regenerativa</span>
                <span className="text-corporate-blue/80 drop-shadow-[0_2px_1px_rgba(255, 255, 255, 0.918)] bg-corporate-blue-light px-4 py-4 rounded-2xl block mt-2 sm:text-xl md:text-2xl lg:text-xl w-fit lg:mx-0 text-xl">Tratamiento de dolor con ozonoterapia plasma rico en plaquetas</span>
              </h1>

              <div className="flex flex-col sm:flex-row gap-4">
                <AppointmentButton variant="primary" size="lg" text="Reservar Cita Ahora" />
                <a href="/servicios" className="border-2 border-corporate-white text-corporate-white hover:bg-corporate-white hover:text-corporate-blue px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold transition-colors text-center text-base lg:text-lg">
                  Ver Servicios
                </a>
              </div>
            </div>
            <div className="relative">

            </div>
          </div>
        </div>
      </section>

      {/* Indicadores del slider fuera del hero */}
      <div className="bg-white dark:bg-gray-900 py-4">
        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
          <div className="flex justify-center space-x-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`rounded-full transition-all duration-300 ${index === currentImageIndex
                  ? 'bg-corporate-blue w-8 h-2'
                  : 'bg-gray-300 hover:bg-gray-400 w-2 h-2'
                  }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

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

      {/* Servicios Section - Rediseñada */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-corporate-blue rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-corporate-blue-light rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-corporate-red rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl relative z-10">
          {/* Header mejorado */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-corporate-blue/10 text-corporate-blue px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              <span>Nuestros Servicios</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-corporate-text-dark dark:text-white mb-6 leading-tight">
              <span className="text-corporate-blue">Tratamientos</span> de
              <span className="text-corporate-red"> Excelencia</span>
            </h2>
            <p className="text-xl md:text-2xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ofrecemos tratamientos innovadores y efectivos para mejorar tu salud y bienestar con tecnología de vanguardia.
            </p>
          </div>

          {/* Grid de servicios mejorado */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {/* Ozonoterapia */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] border border-gray-100 dark:border-gray-700 cursor-pointer">
              {/* Imagen con overlay mejorado */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src="/images/services/servicios-ozonoterapia.png"
                  alt="Ozonoterapia"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                {/* Badge en la esquina */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs font-semibold text-corporate-blue">O₃</span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8 relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-corporate-blue to-corporate-blue-light rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white group-hover:text-corporate-blue transition-colors duration-300">
                    Ozonoterapia
                  </h3>
                </div>

                <p className="text-corporate-text-muted dark:text-gray-300 mb-6 leading-relaxed">
                  Tratamiento médico con ozono para diversas condiciones de salud y regeneración celular.
                </p>

                <a
                  href="/servicios/ozonoterapia"
                  className="inline-flex items-center space-x-2 text-corporate-blue dark:text-blue-400 hover:text-corporate-blue-light font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  <span>Ver más</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Plasma Rico en Plaquetas */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] border border-gray-100 dark:border-gray-700 cursor-pointer">
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src="/images/services/servicios-plasmaRicoPlaquetas.png"
                  alt="Plasma Rico en Plaquetas"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs font-semibold text-corporate-red">PRP</span>
                </div>
              </div>

              <div className="p-8 relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-corporate-red to-pink-500 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white group-hover:text-corporate-red transition-colors duration-300">
                    Plasma Rico en Plaquetas
                  </h3>
                </div>

                <p className="text-corporate-text-muted dark:text-gray-300 mb-6 leading-relaxed">
                  Tratamiento regenerativo utilizando tu propia sangre para acelerar la curación.
                </p>

                <a
                  href="/servicios/plasma-rico-plaquetas"
                  className="inline-flex items-center space-x-2 text-corporate-blue dark:text-blue-400 hover:text-corporate-blue-light font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  <span>Ver más</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Medicina Regenerativa */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] border border-gray-100 dark:border-gray-700 cursor-pointer">
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src="/images/services/servicios-medicinaRegenerativa.png"
                  alt="Medicina Regenerativa"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs font-semibold text-green-600">MR</span>
                </div>
              </div>

              <div className="p-8 relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white group-hover:text-green-600 transition-colors duration-300">
                    Medicina Regenerativa
                  </h3>
                </div>

                <p className="text-corporate-text-muted dark:text-gray-300 mb-6 leading-relaxed">
                  Terapias avanzadas para regenerar tejidos y mejorar la función corporal.
                </p>

                <a
                  href="/servicios/medicina-regenerativa"
                  className="inline-flex items-center space-x-2 text-corporate-blue dark:text-blue-400 hover:text-corporate-blue-light font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  <span>Ver más</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Cóctel de Vida */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] border border-gray-100 dark:border-gray-700 cursor-pointer">
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src="/images/services/servicios-coctelVida.png"
                  alt="Cóctel de Vida"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs font-semibold text-purple-600">CV</span>
                </div>
              </div>

              <div className="p-8 relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white group-hover:text-purple-600 transition-colors duration-300">
                    Cóctel de Vida
                  </h3>
                </div>

                <p className="text-corporate-text-muted dark:text-gray-300 mb-6 leading-relaxed">
                  Terapia combinada para rejuvenecimiento y vitalidad completa del organismo.
                </p>

                <a
                  href="/servicios/coctel-vida"
                  className="inline-flex items-center space-x-2 text-corporate-blue dark:text-blue-400 hover:text-corporate-blue-light font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  <span>Ver más</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA Section mejorado */}
          {/* <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-corporate-blue/10 to-corporate-blue-light/10 rounded-3xl p-8 lg:p-12 border border-corporate-blue/20">
              <h3 className="text-2xl md:text-3xl font-bold text-corporate-text-dark dark:text-white mb-4">
                ¿No estás seguro cuál es el tratamiento ideal para ti?
              </h3>
              <p className="text-lg text-corporate-text-muted dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Nuestro equipo médico te ayudará a elegir la mejor opción según tu condición específica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AppointmentButton variant="primary" size="lg" text="Consulta Gratuita" />
                <a
                  href="/servicios"
                  className="bg-white dark:bg-gray-800 text-corporate-blue border-2 border-corporate-blue px-8 py-4 text-lg font-semibold rounded-xl hover:bg-corporate-blue hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Ver Todos los Servicios
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Sección de TikTok */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white mb-4">
              <span className="text-corporate-blue">Síguenos</span> en <span className="text-corporate-red">TikTok</span>
            </h2>
            <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-2xl mx-auto">
              Descubre testimonios reales, consejos de salud y el día a día de nuestra clínica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Video 1 - Ubicación del Centro Médico */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col h-full">
              <div className="aspect-[3/5] relative">
                <blockquote
                  className="tiktok-embed"
                  cite={`https://www.tiktok.com/@ozono.vida.huaraz/video/${companyData.tiktok.videos[ 0 ].id}`}
                  data-video-id={companyData.tiktok.videos[ 0 ].id}
                  style={{ maxWidth: '100%', minWidth: '100%', width: '100%', height: '100%' }}
                >
                  <section>
                    <a
                      target="_blank"
                      title="@ozono.vida.huaraz"
                      href={companyData.tiktok.url}
                      rel="noopener noreferrer"
                    >
                      @ozono.vida.huaraz
                    </a>
                  </section>
                </blockquote>
                <script async src="https://www.tiktok.com/embed.js"></script>
              </div>
              <div className="p-4 flex flex-col justify-between h-full">
                <div className="flex items-start justify-around mb-2">
                  <h4 className="font-bold text-corporate-text-dark dark:text-white text-sm leading-tight flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-corporate-blue flex-shrink-0" />
                    {companyData.tiktok.videos[ 0 ].title}
                  </h4>
                </div>
                <p className="text-xs text-corporate-text-muted dark:text-gray-300 mb-3 leading-relaxed line-clamp-2 flex-grow">
                  {companyData.tiktok.videos[ 0 ].description}
                </p>
                <a
                  href={companyData.tiktok.videos[ 0 ].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-corporate-blue hover:text-corporate-blue-light text-xs font-semibold transition-all duration-200 hover:translate-x-1 group text-center"
                >
                  <span>Ver en TikTok</span>
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Video 2 - Plasma Rico en Plaquetas */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col h-full">
              <div className="aspect-[3/5] relative">
                <blockquote
                  className="tiktok-embed"
                  cite={`https://www.tiktok.com/@ozono.vida.huaraz/video/${companyData.tiktok.videos[ 1 ].id}`}
                  data-video-id={companyData.tiktok.videos[ 1 ].id}
                  style={{ maxWidth: '100%', minWidth: '100%', width: '100%', height: '100%' }}
                >
                  <section>
                    <a
                      target="_blank"
                      title="@ozono.vida.huaraz"
                      href={companyData.tiktok.url}
                      rel="noopener noreferrer"
                    >
                      @ozono.vida.huaraz
                    </a>
                  </section>
                </blockquote>
                <script async src="https://www.tiktok.com/embed.js"></script>
              </div>
              <div className="p-4 flex flex-col justify-between h-full">
                <div className="flex items-start justify-around mb-2">
                  <h4 className="font-bold text-corporate-text-dark dark:text-white text-sm leading-tight flex items-center">
                    <Heart className="w-4 h-4 mr-2 text-corporate-red flex-shrink-0" />
                    {companyData.tiktok.videos[ 1 ].title}
                  </h4>
                </div>
                <p className="text-xs text-corporate-text-muted dark:text-gray-300 mb-3 leading-relaxed line-clamp-2 flex-grow">
                  {companyData.tiktok.videos[ 1 ].description}
                </p>
                <a
                  href={companyData.tiktok.videos[ 1 ].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-corporate-blue hover:text-corporate-blue-light text-xs font-semibold transition-all duration-200 hover:translate-x-1 group text-center"
                >
                  <span>Ver en TikTok</span>
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Video 3 - Hernia Discal */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col h-full">
              <div className="aspect-[3/5] relative">
                <blockquote
                  className="tiktok-embed"
                  cite={`https://www.tiktok.com/@ozono.vida.huaraz/video/${companyData.tiktok.videos[ 2 ].id}`}
                  data-video-id={companyData.tiktok.videos[ 2 ].id}
                  style={{ maxWidth: '100%', minWidth: '100%', width: '100%', height: '100%' }}
                >
                  <section>
                    <a
                      target="_blank"
                      title="@ozono.vida.huaraz"
                      href={companyData.tiktok.url}
                      rel="noopener noreferrer"
                    >
                      @ozono.vida.huaraz
                    </a>
                  </section>
                </blockquote>
                <script async src="https://www.tiktok.com/embed.js"></script>
              </div>
              <div className="p-4 flex flex-col justify-between h-full">
                <div className="flex justify-around">
                  <h4 className="font-bold text-corporate-text-dark dark:text-white text-sm leading-tight flex items-center">
                    <Target className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                    {companyData.tiktok.videos[ 2 ].title}
                  </h4>
                </div>
                <p className="text-xs text-corporate-text-muted dark:text-gray-300 mb-3 leading-relaxed line-clamp-2 flex-grow">
                  {companyData.tiktok.videos[ 2 ].description}
                </p>
                <a
                  href={companyData.tiktok.videos[ 2 ].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-corporate-blue hover:text-corporate-blue-light text-xs font-semibold transition-all duration-200 hover:translate-x-1 group text-center"
                >
                  <span>Ver en TikTok</span>
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Botón para seguir en TikTok */}
          <div className="text-center mt-8">
            <a
              href={companyData.tiktok.url}
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
      <section id="nosotros" className="py-20 bg-corporate-gray-light dark:bg-gray-800">
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
                <span className="text-corporate-blue dark:text-corporate-red">Clinica Ozono Vida </span>
                <span className="text-corporate-blue-light block">Aliviamos el dolor</span>
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
          {/* Estadísticas */}
          <div className="bg-gradient-to-br from-corporate-blue/5 to-corporate-blue-light/5 rounded-2xl p-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-corporate-blue-light mb-2">500+</div>
                <div className="text-corporate-text-muted dark:text-gray-300 font-medium text-xs sm:text-sm">Pacientes Felices</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-corporate-blue-light mb-2">5+</div>
                <div className="text-corporate-text-muted dark:text-gray-300 font-medium text-xs sm:text-sm">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-corporate-blue-light mb-2">98%</div>
                <div className="text-corporate-text-muted dark:text-gray-300 font-medium text-xs sm:text-sm">Satisfacción</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-corporate-blue-light mb-2">15+</div>
                <div className="text-corporate-text-muted dark:text-gray-300 font-medium text-xs sm:text-sm">Tratamientos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            ¿Listo para <span className="text-yellow-300">mejorar tu salud</span>?
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
      <section id="contacto" className="py-20 bg-corporate-gray-light dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
          {/* Título de la sección */}

          <div className="text-center mb-2 sm:mb-16">{/* margin bottom 2 en móvil, 16 en sm y superior */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-corporate-blue dark:text-corporate-blue-light">Contáctanos Hoy</span>
            </h2>
            <p className="text-xl md:text-2xl text-corporate-text-muted dark:text-gray-300 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Contáctanos de la manera que prefieras.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Información de contacto y botones de acción */}
            <div className="space-y-4 sm:space-y-8">{/* space-y 4 en móvil, 8 en sm y superior */}
              {/* Información de contacto - Diseño Adaptativo */}
              <div className="space-y-4 sm:space-y-6">
                {/* Ubicación */}
                <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 p-4 sm:p-0 bg-white/5 dark:bg-gray-800/30 sm:bg-transparent dark:sm:bg-transparent rounded-xl sm:rounded-none backdrop-blur-sm sm:backdrop-blur-none transition-all duration-300 hover:bg-white/10 dark:hover:bg-gray-800/50 sm:hover:bg-transparent dark:sm:hover:bg-transparent">
                  <div className="flex items-center space-x-3 sm:space-x-0 sm:flex-col sm:items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-corporate-blue to-corporate-blue-light rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div className="sm:hidden">
                      <h4 className="font-bold text-corporate-text-dark dark:text-white text-sm">Ubicación</h4>
                    </div>
                  </div>
                  <div className="flex-1 sm:ml-0">
                    <h4 className="hidden sm:block font-semibold text-corporate-text-dark dark:text-white mb-1 text-base lg:text-lg">Ubicación</h4>
                    <p className="text-corporate-text-muted dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                      <span className="block sm:inline">{companyData.address}</span>
                      <span className="hidden sm:inline"><br /></span>
                      <span className="block sm:inline">{companyData.location}</span>
                    </p>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 sm:p-0 bg-white/5 dark:bg-gray-800/30 sm:bg-transparent dark:sm:bg-transparent rounded-xl sm:rounded-none backdrop-blur-sm sm:backdrop-blur-none transition-all duration-300 hover:bg-white/10 dark:hover:bg-gray-800/50 sm:hover:bg-transparent dark:sm:hover:bg-transparent">
                  <div className="flex items-center space-x-3 sm:space-x-0 sm:flex-col sm:items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-corporate-blue to-corporate-blue-light rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div className="sm:hidden">
                      <h4 className="font-bold text-corporate-text-dark dark:text-white text-sm">Teléfono</h4>
                    </div>
                  </div>
                  <div className="flex-1 sm:ml-0">
                    <h4 className="hidden sm:block font-semibold text-corporate-text-dark dark:text-white mb-1 text-base lg:text-lg">Teléfono</h4>
                    <p className="text-corporate-text-muted dark:text-gray-300 text-sm sm:text-base">
                      <a href={`tel:${companyData.phone}`} className="hover:text-corporate-blue transition-colors duration-200">
                        {companyData.phone}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 sm:p-0 bg-white/5 dark:bg-gray-800/30 sm:bg-transparent dark:sm:bg-transparent rounded-xl sm:rounded-none backdrop-blur-sm sm:backdrop-blur-none transition-all duration-300 hover:bg-white/10 dark:hover:bg-gray-800/50 sm:hover:bg-transparent dark:sm:hover:bg-transparent">
                  <div className="flex items-center space-x-3 sm:space-x-0 sm:flex-col sm:items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-corporate-red to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div className="sm:hidden">
                      <h4 className="font-bold text-corporate-text-dark dark:text-white text-sm">Email</h4>
                    </div>
                  </div>
                  <div className="flex-1 sm:ml-0">
                    <h4 className="hidden sm:block font-semibold text-corporate-text-dark dark:text-white mb-1 text-base lg:text-lg">Email</h4>
                    <p className="text-corporate-text-muted dark:text-gray-300 text-sm sm:text-base">
                      <a href={`mailto:${companyData.email}`} className="hover:text-corporate-red transition-colors duration-200 break-all">
                        {companyData.email}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Horarios */}
                <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 p-4 sm:p-0 bg-white/5 dark:bg-gray-800/30 sm:bg-transparent dark:sm:bg-transparent rounded-xl sm:rounded-none backdrop-blur-sm sm:backdrop-blur-none transition-all duration-300 hover:bg-white/10 dark:hover:bg-gray-800/50 sm:hover:bg-transparent dark:sm:hover:bg-transparent">
                  <div className="flex items-center space-x-3 sm:space-x-0 sm:flex-col sm:items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-corporate-blue-light to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div className="sm:hidden">
                      <h4 className="font-bold text-corporate-text-dark dark:text-white text-sm">Horarios</h4>
                    </div>
                  </div>
                  <div className="flex-1 sm:ml-0">
                    <h4 className="hidden sm:block font-semibold text-corporate-text-dark dark:text-white mb-1 text-base lg:text-lg">Horarios de Atención</h4>
                    <p className="text-corporate-text-muted dark:text-gray-300 text-sm sm:text-base">
                      <span className="block sm:inline">{companyData.hours.weekdays}</span>
                      <span className="block sm:inline sm:ml-2">·</span>
                      <span className="block sm:inline sm:ml-2">{companyData.hours.saturday}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2 lg:pt-9">{/* padding top 2 en móvil y tablet, 9 en laptop y superior */}
                <AppointmentButton variant="primary" size="md" />
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
              Lo que dicen <span className="text-corporate-blue">nuestros</span> <span className="text-corporate-red">pacientes</span>
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
                &quot;La ozonoterapia cambió completamente mi vida. Después de años sufriendo dolor de rodilla,
                en solo 4 sesiones ya no siento molestias. El equipo es muy profesional y la atención excelente.&quot;
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
                &quot;Increíble la mejora en mi artritis. El plasma rico en plaquetas me ayudó mucho.
                El doctor explica todo muy claro y se nota que realmente se preocupa por sus pacientes.&quot;
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
                &quot;Excelente atención y resultados. El cóctel de vida me ayudó a recuperar mi energía
                y vitalidad. Definitivamente recomiendo Ozono Vida a todos mis conocidos.&quot;
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

    </div>
  );
}