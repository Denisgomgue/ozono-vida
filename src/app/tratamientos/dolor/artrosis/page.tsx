import { Shield, ArrowRight, Activity, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata = {
    title: 'Tratamiento para Artrosis | Ozono Vida',
    description: 'Tratamientos especializados para artrosis en diferentes articulaciones mediante ozonoterapia y medicina regenerativa. Alivio efectivo del dolor y mejora de la movilidad.',
};

export default function ArtrosisPage() {
    const tiposArtrosis = [
        {
            nombre: 'Artrosis de Cadera',
            href: '/tratamientos/dolor/artrosis/cadera',
            imagen: '/images/treatments/artrosis/artrosis_cadera.png',
            descripcion: 'Tratamiento para artrosis de cadera, reducción del dolor y mejora de la movilidad'
        },
        {
            nombre: 'Artrosis de Hombro',
            href: '/tratamientos/dolor/artrosis/hombro',
            imagen: '/images/treatments/artrosis/artrosis_hombro.png',
            descripcion: 'Alivio para artrosis de hombro, recupera tu rango de movimiento'
        },
        {
            nombre: 'Artrosis de Rodilla',
            href: '/tratamientos/dolor/artrosis/rodilla',
            imagen: '/images/treatments/artrosis/artrosis_rodilla.png',
            descripcion: 'Tratamiento efectivo para artrosis de rodilla, vuelve a caminar sin dolor'
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark min-h-[50vh] flex items-center text-white overflow-hidden">
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/treatments/artrosis/artrosis.png"
                        alt="Tratamiento para Artrosis"
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
                                { label: 'Artrosis' }
                            ]}
                        />
                    </div>

                    <div className="max-w-3xl">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-corporate-blue/30 backdrop-blur-md border border-cyan-300/50 text-cyan-100 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg">
                            <Heart className="w-4 h-4 text-cyan-300" />
                            <span>Tratamiento Regenerativo Especializado</span>
                        </div>

                        {/* Título */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                            <span className="text-white">Tratamiento para</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 block mt-2">
                                Artrosis
                            </span>
                        </h1>

                        {/* Descripción */}
                        <p className="text-xl md:text-2xl text-cyan-50 mb-10 leading-relaxed font-light drop-shadow-lg">
                            Alivia el dolor y mejora tu movilidad con nuestros tratamientos especializados de ozonoterapia y medicina regenerativa para artrosis.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introducción */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Tratamiento Efectivo para la Artrosis
                        </h2>
                        <p className="text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-8">
                            La artrosis es una enfermedad degenerativa de las articulaciones que causa dolor, rigidez y pérdida de movilidad. Nuestros tratamientos con ozonoterapia y medicina regenerativa ayudan a reducir la inflamación, regenerar el tejido cartilaginoso y mejorar significativamente la calidad de vida de nuestros pacientes.
                        </p>
                        <div className="flex items-center justify-center space-x-6 text-corporate-blue dark:text-cyan-400">
                            <div className="flex items-center space-x-2">
                                <Activity className="w-5 h-5" />
                                <span className="font-semibold">Tratamiento No Invasivo</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Shield className="w-5 h-5" />
                                <span className="font-semibold">Resultados Duraderos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Grid de Tipos de Artrosis */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-4">
                            Tratamientos por Tipo de Artrosis
                        </h2>
                        <p className="text-lg text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Contamos con tratamientos especializados para cada tipo de artrosis según la articulación afectada
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {tiposArtrosis.map((tipo) => (
                            <Link
                                key={tipo.href}
                                href={tipo.href}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                            >
                                {/* Imagen */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={tipo.imagen}
                                        alt={tipo.nombre}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                                    {/* Título sobre la imagen */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-2xl font-bold text-white">
                                            {tipo.nombre}
                                        </h3>
                                    </div>
                                </div>

                                {/* Contenido */}
                                <div className="p-6">
                                    <p className="text-corporate-text-muted dark:text-gray-300 mb-4 leading-relaxed">
                                        {tipo.descripcion}
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
                        ¿Listo para recuperar tu movilidad?
                    </h2>
                    <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-cyan-100 leading-relaxed">
                        Agenda tu cita hoy y descubre cómo nuestros tratamientos pueden ayudarte a vivir sin dolor
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

