'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { AppointmentButton } from '@/components/ui/AppointmentButton';
import companyData from '@/data/company.json';

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

export function HeroSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0, 1]));

  // Auto-slider cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Cargar imágenes adyacentes cuando cambia el índice
  useEffect(() => {
    const preloadIndexes = [
      currentImageIndex,
      currentImageIndex === 0 ? heroImages.length - 1 : currentImageIndex - 1,
      currentImageIndex === heroImages.length - 1 ? 0 : currentImageIndex + 1,
    ];

    preloadIndexes.forEach((index) => {
      if (!loadedImages.has(index)) {
        const img = new window.Image();
        img.src = heroImages[index];
        img.onload = () => {
          setLoadedImages((prev) => new Set(prev).add(index));
        };
      }
    });
  }, [currentImageIndex, loadedImages]);

  // Funciones de navegación manual
  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentImageIndex(index);
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
  }, [goToPrevious, goToNext]);

  const whatsappUrl = `https://wa.me/${companyData.whatsapp.replace(/\s/g, '').replace('+', '')}`;

  return (
    <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark py-32 text-white overflow-hidden">
      {/* Slider de imágenes de fondo */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => {
          const isVisible = index === currentImageIndex;
          const shouldLoad = loadedImages.has(index) || index === 0 || index === 1;

          return (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${isVisible ? 'opacity-90' : 'opacity-0'
                }`}
            >
              {shouldLoad && (
                <Image
                  src={image}
                  alt={`Tratamiento de Ozonoterapia ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  quality={85}
                  sizes="100vw"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Capa de viñeta negra */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Flechas de navegación */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-corporate-blue/50 hover:bg-corporate-blue backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-corporate-blue/50 hover:bg-corporate-blue backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <div className="container mx-auto px-4 md:px-8 lg:px-4 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 gap-2 items-center max-w-4xl">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.3] text-white block drop-shadow-[1px_1px_20px_rgba(25,80,150,0.9)]">
             
                Medicina regenerativa, ozonoterapia, tratamiento del dolor
              
              
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <AppointmentButton variant="primary" size="lg" text="Reservar Hora" />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold transition-colors text-center text-base lg:text-lg shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Barra de ubicación */}
            <div className="flex items-end space-x-2 bg-gray-900/80 backdrop-blur-sm rounded-lg px-4 py-2 w-fit">
              <MapPin className="w-5 h-5 text-white" />
              <span className="text-white text-sm">{companyData.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Indicadores del slider */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex justify-center space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${index === currentImageIndex
                  ? 'bg-white w-8 h-2'
                  : 'bg-white/50 hover:bg-white/75 w-2 h-2'
                }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

