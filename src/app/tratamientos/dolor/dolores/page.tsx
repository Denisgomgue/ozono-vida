import { Shield, ArrowRight, MapPin, Activity } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata = {
    title: 'Tratamiento para Dolores por Zona del Cuerpo | Ozono Vida',
    description: 'Tratamientos especializados para dolores en diferentes zonas del cuerpo mediante ozonoterapia y medicina regenerativa. Alivio efectivo y duradero.',
};

export default function DoloresPorZonaPage() {
    const zonas = [
        {
            nombre: 'Cabeza',
            href: '/tratamientos/dolor/dolores/cabeza',
            imagen: '/images/treatments/dolor-cuerpo/dolor_cabeza.png',
            descripcion: 'Tratamiento para migrañas, cefaleas y dolores de cabeza crónicos'
        },
        {
            nombre: 'Cuello',
            href: '/tratamientos/dolor/dolores/cuello',
            imagen: '/images/treatments/dolor-cuerpo/dolor_cuello.png',
            descripcion: 'Alivio para dolor cervical, tensión y rigidez en el cuello'
        },
        {
            nombre: 'Hombros',
            href: '/tratamientos/dolor/dolores/hombros',
            imagen: '/images/treatments/dolor-cuerpo/dolor_hombro.png',
            descripcion: 'Tratamiento para dolor de hombro, tendinitis y lesiones del manguito rotador'
        },
        {
            nombre: 'Espalda',
            href: '/tratamientos/dolor/dolores/espalda',
            imagen: '/images/treatments/dolor-cuerpo/dolor_espalda.png',
            descripcion: 'Soluciones para dolor de espalda alta, media y baja'
        },
        {
            nombre: 'Codo',
            href: '/tratamientos/dolor/dolores/codo',
            imagen: '/images/treatments/dolor-cuerpo/dolor_codo.png',
            descripcion: 'Tratamiento para codo de tenista, epicondilitis y dolor articular'
        },
        {
            nombre: 'Columna',
            href: '/tratamientos/dolor/dolores/columnas',
            imagen: '/images/treatments/dolor-cuerpo/dolor_columna.png',
            descripcion: 'Alivio para problemas de columna vertebral y desviaciones'
        },
        {
            nombre: 'Manos',
            href: '/tratamientos/dolor/dolores/manos',
            imagen: '/images/treatments/dolor-cuerpo/dolor_manos.png',
            descripcion: 'Tratamiento para artritis, túnel carpiano y dolor en las manos'
        },
        {
            nombre: 'Cadera',
            href: '/tratamientos/dolor/dolores/cadera',
            imagen: '/images/treatments/dolor-cuerpo/dolor_cadera.png',
            descripcion: 'Soluciones para dolor de cadera, artrosis y bursitis'
        },
        {
            nombre: 'Muslo',
            href: '/tratamientos/dolor/dolores/muslo',
            imagen: '/images/treatments/dolor-cuerpo/dolor_muslo.png',
            descripcion: 'Alivio para dolor muscular, desgarros y lesiones en el muslo'
        },
        {
            nombre: 'Rodillas',
            href: '/tratamientos/dolor/dolores/rodillas',
            imagen: '/images/treatments/dolor-cuerpo/dolor_rodilla.png',
            descripcion: 'Tratamiento para artrosis, meniscos y dolor de rodilla'
        },
        {
            nombre: 'Tobillos',
            href: '/tratamientos/dolor/dolores/tobillos',
            imagen: '/images/treatments/dolor-cuerpo/dolor_tobillo.png',
            descripcion: 'Soluciones para esguinces, tendinitis y dolor en tobillos'
        },
        {
            nombre: 'Pies',
            href: '/tratamientos/dolor/dolores/pies',
            imagen: '/images/treatments/dolor-cuerpo/dolor_pie.png',
            descripcion: 'Alivio para fascitis plantar, espolón calcáneo y dolor en los pies'
        },
        {
            nombre: 'Planta de los Pies',
            href: '/tratamientos/dolor/dolores/plantas-de-los-pies',
            imagen: '/images/treatments/dolor-cuerpo/dolor_planta_pie.png',
            descripcion: 'Tratamiento especializado para dolor en la planta del pie'
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark min-h-[50vh] flex items-center text-white overflow-hidden">
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/treatments/dolor-cuerpo/dolor_zona.png"
                        alt="Dolores por Zona del Cuerpo"
                        fill
                        className="object-cover brightness-75"
                        priority
                    />
                </div>

                {/* Contenido */}
                <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl relative z-10 py-16">
                    {/* Breadcrumbs */}
                    <div className="mb-8">
                        <Breadcrumbs
                            items={[
                                { label: 'Tratamientos', href: '/tratamientos' },
                                { label: 'Dolor', href: '/tratamientos/dolor' },
                                { label: 'Dolores por Zona' }
                            ]}
                        />
                    </div>

                    <div className="max-w-3xl">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-corporate-blue/30 backdrop-blur-md border border-cyan-300/50 text-cyan-100 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg">
                            <MapPin className="w-4 h-4 text-cyan-300" />
                            <span>Tratamiento Especializado por Zona</span>
                        </div>

                        {/* Título */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                            <span className="text-white">Dolores por</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 block mt-2">
                                Zona del Cuerpo
                            </span>
                        </h1>

                        {/* Descripción */}
                        <p className="text-xl md:text-2xl text-cyan-50 mb-10 leading-relaxed font-light drop-shadow-lg">
                            Tratamientos especializados para aliviar el dolor en cada área específica de tu cuerpo con ozonoterapia y medicina regenerativa.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introducción */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Tratamiento Personalizado según la Zona Afectada
                        </h2>
                        <p className="text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-8">
                            Cada zona del cuerpo requiere un enfoque específico para el alivio del dolor. Nuestros tratamientos con ozonoterapia y medicina regenerativa están diseñados para abordar las causas específicas del dolor en cada área, proporcionando alivio efectivo y duradero.
                        </p>
                        <div className="flex items-center justify-center space-x-6 text-corporate-blue dark:text-cyan-400">
                            <div className="flex items-center space-x-2">
                                <Activity className="w-5 h-5" />
                                <span className="font-semibold">13 Zonas Específicas</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Shield className="w-5 h-5" />
                                <span className="font-semibold">Tratamiento Especializado</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid de Zonas */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {zonas.map((zona) => (
                            <Link
                                key={zona.href}
                                href={zona.href}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                            >
                                {/* Imagen */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={zona.imagen}
                                        alt={`Tratamiento para dolor de ${zona.nombre.toLowerCase()}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                    {/* Título sobre la imagen */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-xl font-bold text-white">
                                            {zona.nombre}
                                        </h3>
                                    </div>
                                </div>

                                {/* Contenido */}
                                <div className="p-6">
                                    <p className="text-corporate-text-muted dark:text-gray-300 mb-4 leading-relaxed">
                                        {zona.descripcion}
                                    </p>

                                    <div className="flex items-center space-x-2 text-corporate-blue dark:text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                                        <span>Ver tratamiento</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-corporate-blue to-corporate-blue-dark text-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-cyan-50 drop-shadow-lg">
                        ¿Listo para aliviar tu dolor?
                    </h2>
                    <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-cyan-100 leading-relaxed">
                        Agenda tu cita hoy y descubre cómo podemos ayudarte a vivir sin dolor
                    </p>
                    <Link
                        href="/reservar-cita"
                        className="inline-flex items-center space-x-2 bg-white text-corporate-blue px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                    >
                        <span>Reservar Cita</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

