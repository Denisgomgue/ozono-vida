import { Shield, ArrowRight, Activity, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata = {
    title: 'Tratamiento de Enfermedades | Ozono Vida',
    description: 'Tratamientos especializados para enfermedades crónicas mediante ozonoterapia y medicina regenerativa. Soluciones efectivas y complementarias sin efectos secundarios.',
};

export default function EnfermedadesPage() {
    const tratamientos = [
        {
            nombre: 'Diabetes Mellitus',
            href: '/tratamientos/enfermedades/diabetes',
            imagen: '/images/treatments/enfermedades/diabetes_mellitus.png',
            descripcion: 'Tratamiento complementario para mejorar control glucémico y prevenir complicaciones'
        },
        {
            nombre: 'Insuficiencia Vascular',
            href: '/tratamientos/enfermedades/insuficiencia-vascular',
            imagen: '/images/treatments/enfermedades/insuficiencia_vascular.png',
            descripcion: 'Mejora de la circulación y prevención de complicaciones vasculares'
        },
        {
            nombre: 'Hepatitis Crónica',
            href: '/tratamientos/enfermedades/hepatitis',
            imagen: '/images/treatments/enfermedades/hepatitis_cronica.png',
            descripcion: 'Apoyo a la función hepática y reducción de carga viral'
        },
        {
            nombre: 'Colitis Ulcerosa',
            href: '/tratamientos/enfermedades/colitis',
            imagen: '/images/treatments/enfermedades/colitis_ulcerosa.png',
            descripcion: 'Control de la inflamación intestinal y reducción de brotes'
        },
        {
            nombre: 'Enfermedad de Crohn',
            href: '/tratamientos/enfermedades/enfermedad-de-crohn',
            imagen: '/images/treatments/enfermedades/enferemedad_crohn.png',
            descripcion: 'Manejo integral de síntomas y mejora de calidad de vida'
        },
        {
            nombre: 'Varices',
            href: '/tratamientos/enfermedades/varices',
            imagen: '/images/treatments/enfermedades/varices.png',
            descripcion: 'Tratamiento efectivo para varices sin cirugía invasiva'
        },
        {
            nombre: 'Prostatitis',
            href: '/tratamientos/enfermedades/prostatitis',
            imagen: '/images/treatments/enfermedades/prostatitis_cronica.png',
            descripcion: 'Alivio del dolor pélvico y mejora de la función prostática'
        },
        {
            nombre: 'Gota',
            href: '/tratamientos/enfermedades/gota',
            imagen: '/images/treatments/enfermedades/gota.png',
            descripcion: 'Control de ataques agudos y prevención de brotes'
        },
        {
            nombre: 'Gastritis',
            href: '/tratamientos/enfermedades/gastritis',
            imagen: '/images/treatments/enfermedades/gastritis.png',
            descripcion: 'Cicatrización de mucosa gástrica y alivio de síntomas digestivos'
        },
        {
            nombre: 'Cefaleas y Migrañas',
            href: '/tratamientos/enfermedades/cefaleas-migranas',
            imagen: '/images/treatments/enfermedades/cefaleas_migrañas.png',
            descripcion: 'Reducción de frecuencia e intensidad de dolores de cabeza'
        },
        {
            nombre: 'Lupus Eritematoso',
            href: '/tratamientos/enfermedades/lupus-eritematoso',
            imagen: '/images/treatments/enfermedades/lupus_eritematoso_sistemico.png',
            descripcion: 'Modulación inmunológica y control de síntomas autoinmunes'
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark min-h-[50vh] flex items-center text-white overflow-hidden">
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/treatments/enfermedades/tratamiento_enfermedades.png"
                        alt="Tratamiento de Enfermedades"
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
                                { label: 'Enfermedades' }
                            ]}
                        />
                    </div>

                    <div className="max-w-3xl">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-corporate-blue/30 backdrop-blur-md border border-cyan-300/50 text-cyan-100 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg">
                            <Heart className="w-4 h-4 text-cyan-300" />
                            <span>Tratamientos Especializados</span>
                        </div>

                        {/* Título */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                            <span className="text-white">Tratamiento de</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 block mt-2">
                                Enfermedades
                            </span>
                        </h1>

                        {/* Descripción */}
                        <p className="text-xl md:text-2xl text-cyan-50 mb-10 leading-relaxed font-light drop-shadow-lg">
                            Tratamientos complementarios con ozonoterapia y medicina regenerativa para el manejo de enfermedades crónicas. Mejora tu calidad de vida de forma natural.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introducción */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Tratamientos Complementarios para Enfermedades Crónicas
                        </h2>
                        <p className="text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-8">
                            En Ozono Vida ofrecemos tratamientos especializados con ozonoterapia y medicina regenerativa como complemento efectivo para el manejo de enfermedades crónicas. Nuestro enfoque integral ayuda a controlar síntomas, mejorar la función de órganos y sistemas, y aumentar significativamente la calidad de vida sin efectos secundarios adversos.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-corporate-blue dark:text-cyan-400">
                            <div className="flex items-center space-x-2">
                                <Activity className="w-5 h-5" />
                                <span className="font-semibold">11 Tratamientos Especializados</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Shield className="w-5 h-5" />
                                <span className="font-semibold">Sin Efectos Secundarios</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Heart className="w-5 h-5" />
                                <span className="font-semibold">Resultados Comprobados</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beneficios Generales */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-corporate-text-dark dark:text-white mb-12">
                        Ventajas de Nuestros Tratamientos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-2">
                                Tratamiento Complementario
                            </h3>
                            <p className="text-corporate-text-muted dark:text-gray-300">
                                Potencia la efectividad del tratamiento médico convencional
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
                                <Activity className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-2">
                                Control de Síntomas
                            </h3>
                            <p className="text-corporate-text-muted dark:text-gray-300">
                                Mejora significativa en el control de la enfermedad
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-2">
                                Mejora la Calidad de Vida
                            </h3>
                            <p className="text-corporate-text-muted dark:text-gray-300">
                                Reduce síntomas y permite llevar una vida más activa
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-2">
                                Sin Efectos Adversos
                            </h3>
                            <p className="text-corporate-text-muted dark:text-gray-300">
                                Tratamiento natural seguro y bien tolerado
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid de Tratamientos */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-4">
                            Nuestros Tratamientos para Enfermedades
                        </h2>
                        <p className="text-lg text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Selecciona el tratamiento específico para tu enfermedad y descubre cómo podemos ayudarte
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {tratamientos.map((tratamiento) => (
                            <Link
                                key={tratamiento.href}
                                href={tratamiento.href}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                            >
                                {/* Imagen */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={tratamiento.imagen}
                                        alt={`Tratamiento para ${tratamiento.nombre}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                    {/* Título sobre la imagen */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-xl font-bold text-white">
                                            {tratamiento.nombre}
                                        </h3>
                                    </div>
                                </div>

                                {/* Contenido */}
                                <div className="p-6">
                                    <p className="text-corporate-text-muted dark:text-gray-300 mb-4 leading-relaxed">
                                        {tratamiento.descripcion}
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

            {/* Proceso de Tratamiento */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            ¿Cómo Funciona el Tratamiento?
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Un proceso simple y efectivo en 4 pasos
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                numero: '01',
                                titulo: 'Evaluación',
                                descripcion: 'Valoración médica completa de tu condición y necesidades específicas'
                            },
                            {
                                numero: '02',
                                titulo: 'Plan Personalizado',
                                descripcion: 'Diseño de un protocolo de tratamiento adaptado a tu caso'
                            },
                            {
                                numero: '03',
                                titulo: 'Sesiones de Tratamiento',
                                descripcion: 'Aplicación de ozonoterapia de forma ambulatoria y segura'
                            },
                            {
                                numero: '04',
                                titulo: 'Seguimiento',
                                descripcion: 'Monitoreo de tu progreso y ajustes según tu evolución'
                            }
                        ].map((paso, index) => (
                            <div key={index} className="text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-corporate-blue to-corporate-blue-dark text-white rounded-full text-3xl font-bold mb-6 shadow-lg">
                                    {paso.numero}
                                </div>
                                <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-3">
                                    {paso.titulo}
                                </h3>
                                <p className="text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                                    {paso.descripcion}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-corporate-blue to-corporate-blue-dark text-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-cyan-50 drop-shadow-lg">
                        ¿Listo para mejorar tu salud?
                    </h2>
                    <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-cyan-100 leading-relaxed">
                        Agenda tu cita hoy y descubre cómo nuestros tratamientos complementarios pueden mejorar tu calidad de vida
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

