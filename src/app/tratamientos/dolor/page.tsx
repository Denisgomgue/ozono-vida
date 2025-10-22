import { Shield, ArrowRight, Activity, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { AppointmentButton } from '@/components/ui/AppointmentButton';

export const metadata = {
    title: 'Tratamientos para el Dolor | Ozono Vida',
    description: 'Tratamientos especializados para diferentes tipos de dolor mediante ozonoterapia y medicina regenerativa. Soluciones efectivas y duraderas sin cirugía.',
};

export default function DolorPage() {
    const tratamientos = [
        {
            nombre: 'Hernias Discales',
            href: '/tratamientos/dolor/hernias-discales',
            imagen: '/images/treatments/hernias_discales.png',
            descripcion: 'Tratamiento no invasivo para hernias discales, reducción del dolor y mejora de la movilidad'
        },
        {
            nombre: 'Lumbalgia',
            href: '/tratamientos/dolor/lumbalgia',
            imagen: '/images/treatments/lumbalgia.png',
            descripcion: 'Alivio efectivo para dolor lumbar agudo y crónico'
        },
        {
            nombre: 'Cervicalgia',
            href: '/tratamientos/dolor/cervicalgia',
            imagen: '/images/treatments/cervicalgia.png',
            descripcion: 'Tratamiento para dolor cervical, tensión y rigidez en el cuello'
        },
        {
            nombre: 'Artrosis',
            href: '/tratamientos/dolor/artrosis',
            imagen: '/images/treatments/artrosis/artrosis.png',
            descripcion: 'Regeneración articular y alivio del dolor por artrosis'
        },
        {
            nombre: 'Artritis',
            href: '/tratamientos/dolor/artritis',
            imagen: '/images/treatments/artritis.png',
            descripcion: 'Control de la inflamación y reducción del dolor articular'
        },
        {
            nombre: 'Tendinitis',
            href: '/tratamientos/dolor/tendinitis',
            imagen: '/images/treatments/tendinitis.png',
            descripcion: 'Recuperación rápida de tendones inflamados sin cirugía'
        },
        {
            nombre: 'Fibromialgia',
            href: '/tratamientos/dolor/fibromialgia',
            imagen: '/images/treatments/fibromialgia.png',
            descripcion: 'Manejo integral del dolor generalizado y fatiga crónica'
        },
        {
            nombre: 'Ciatalgia',
            href: '/tratamientos/dolor/ciatalgia',
            imagen: '/images/treatments/ciatalgia.png',
            descripcion: 'Alivio del dolor del nervio ciático sin cirugía'
        },
        {
            nombre: 'Túnel Carpiano',
            href: '/tratamientos/dolor/tunel-carpiano',
            imagen: '/images/treatments/tunel_carpiano.png',
            descripcion: 'Tratamiento efectivo para síndrome del túnel carpiano'
        },
        {
            nombre: 'Escoliosis',
            href: '/tratamientos/dolor/escoliosis',
            imagen: '/images/treatments/escoliosis.png',
            descripcion: 'Manejo del dolor y mejora de la movilidad en escoliosis'
        },
        {
            nombre: 'Espolón Calcáneo',
            href: '/tratamientos/dolor/espolon-calcaneo',
            imagen: '/images/treatments/espolon_calcaneo.png',
            descripcion: 'Alivio del dolor en el talón causado por espolón calcáneo'
        },
        {
            nombre: 'Fascitis Plantar',
            href: '/tratamientos/dolor/fascitis-plantar',
            imagen: '/images/treatments/fascitis_plantar.png',
            descripcion: 'Tratamiento efectivo para dolor en la planta del pie'
        },
        {
            nombre: 'Dolores por Zona',
            href: '/tratamientos/dolor/dolores',
            imagen: '/images/treatments/dolor-cuerpo/dolor_zona.png',
            descripcion: 'Tratamientos especializados según la zona del cuerpo afectada'
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
                        alt="Tratamientos para el Dolor"
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
                                { label: 'Dolor' }
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
                            <span className="text-white">Tratamientos para</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 block mt-2">
                                el Dolor
                            </span>
                        </h1>

                        {/* Descripción */}
                        <p className="text-xl md:text-2xl text-cyan-50 mb-10 leading-relaxed font-light drop-shadow-lg">
                            Soluciones efectivas y naturales para el alivio del dolor mediante ozonoterapia y medicina regenerativa. Recupera tu calidad de vida sin cirugía.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introducción */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Tratamientos Avanzados para el Manejo del Dolor
                        </h2>
                        <p className="text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-8">
                            En Ozono Vida ofrecemos tratamientos especializados con ozonoterapia y medicina regenerativa para una amplia variedad de condiciones dolorosas. Nuestro enfoque integral permite abordar las causas del dolor, proporcionando alivio efectivo y duradero sin necesidad de cirugía ni medicamentos con efectos secundarios.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-corporate-blue dark:text-cyan-400">
                            <div className="flex items-center space-x-2">
                                <Activity className="w-5 h-5" />
                                <span className="font-semibold">13 Tratamientos Especializados</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Shield className="w-5 h-5" />
                                <span className="font-semibold">Sin Cirugía</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Heart className="w-5 h-5" />
                                <span className="font-semibold">Resultados Duraderos</span>
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
                                No Invasivo
                            </h3>
                            <p className="text-corporate-text-muted dark:text-gray-300">
                                Tratamientos sin cirugía ni procedimientos invasivos
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
                                <Activity className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-2">
                                Alivio Efectivo
                            </h3>
                            <p className="text-corporate-text-muted dark:text-gray-300">
                                Reducción significativa del dolor desde las primeras sesiones
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-2">
                                Regeneración Natural
                            </h3>
                            <p className="text-corporate-text-muted dark:text-gray-300">
                                Estimula la capacidad regenerativa del propio cuerpo
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-2">
                                Sin Efectos Secundarios
                            </h3>
                            <p className="text-corporate-text-muted dark:text-gray-300">
                                Tratamiento natural sin los riesgos de medicamentos
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
                            Nuestros Tratamientos para el Dolor
                        </h2>
                        <p className="text-lg text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Selecciona el tratamiento específico para tu condición y descubre cómo podemos ayudarte
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
                                descripcion: 'Aplicación de ozonoterapia de forma ambulatoria y sin dolor'
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
                        ¿Listo para vivir sin dolor?
                    </h2>
                    <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-cyan-100 leading-relaxed">
                        Agenda tu cita hoy y descubre cómo nuestros tratamientos pueden transformar tu vida
                    </p>
                    <AppointmentButton variant="white" size="lg" />
                </div>
            </section>
        </div>
    );
}

