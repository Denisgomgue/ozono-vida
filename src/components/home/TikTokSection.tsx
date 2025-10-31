'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { MapPin, Heart, Target, ArrowRight } from 'lucide-react';
import companyData from '@/data/company.json';

// Componente para TikTok Embed
function TikTokEmbed({ videoId }: { videoId: string }) {
  useEffect(() => {
    // Cargar el script de TikTok solo cuando el componente se monta
    if (typeof window !== 'undefined' && !document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <blockquote
      className="tiktok-embed"
      cite={`https://www.tiktok.com/@ozono.vida.huaraz/video/${videoId}`}
      data-video-id={videoId}
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
  );
}

// Cargar TikTokEmbed dinámicamente
const DynamicTikTokEmbed = dynamic(() => Promise.resolve(TikTokEmbed), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-2xl">
      <div className="text-gray-500">Cargando video...</div>
    </div>
  ),
});

export function TikTokSection() {
  const videos = companyData.tiktok.videos;
  const icons = [MapPin, Heart, Target];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white mb-4">
            <span className="text-corporate-blue">Síguenos</span> en{' '}
            <span className="text-corporate-red">TikTok</span>
          </h2>
          <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-2xl mx-auto">
            Descubre testimonios reales, consejos de salud y el día a día de nuestra clínica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {videos.map((video, index) => {
            const Icon = icons[index] || MapPin;
            const iconColors = [
              'text-corporate-blue',
              'text-corporate-red',
              'text-green-600',
            ];
            const iconColor = iconColors[index] || 'text-corporate-blue';

            return (
              <div
                key={video.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col h-full"
              >
                <div className="aspect-[3/5] relative">
                  <DynamicTikTokEmbed videoId={video.id} />
                </div>
                <div className="p-4 flex flex-col justify-between h-full">
                  <div className="flex items-start justify-around mb-2">
                    <h4 className="font-bold text-corporate-text-dark dark:text-white text-sm leading-tight flex items-center">
                      <Icon className={`w-4 h-4 mr-2 ${iconColor} flex-shrink-0`} />
                      {video.title}
                    </h4>
                  </div>
                  <p className="text-xs text-corporate-text-muted dark:text-gray-300 mb-3 leading-relaxed line-clamp-2 flex-grow">
                    {video.description}
                  </p>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-corporate-blue hover:text-corporate-blue-light text-xs font-semibold transition-all duration-200 hover:translate-x-1 group text-center"
                  >
                    <span>Ver en TikTok</span>
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
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
  );
}

