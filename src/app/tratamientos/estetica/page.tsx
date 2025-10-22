import { Shield, ArrowRight, Activity, Heart, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata = {
    title: 'Tratamientos Estéticos | Ozono Vida',
    description: 'Tratamientos estéticos naturales con ozonoterapia. Rejuvenecimiento facial, celulitis, acné y úlceras. Resultados visibles sin cirugía.',
};

export default function EsteticaPage() {
    const tratamientos = [
        {
            nombre: 'Rejuvenecimiento Facial',
            href: '/tratamientos/estetica/rejuvenecimiento-facial',
            imagen: '/images/treatments/estetica/rejuvenecimiento_facial.png',
            descripcion: 'Tratamiento natural para reducir arrugas y recuperar la juventud de tu piel'
        },
        {
            nombre: 'Celulitis',
            href: '/tratamientos/estetica/celulitis',
            imagen: '/images/treatments/estetica/tratamiento_celulitis.png',
            descripcion: 'Reducción visible de piel de naranja y mejora en textura corporal'
        },
        {
            nombre: 'Úlceras Crónicas y Varicosas',
            href: '/tratamientos/estetica/ulceras-cronicas',
            imagen: '/images/treatments/estetica/ulceras_varicosas.png',
            descripcion: 'Cicatrización acelerada de úlceras resistentes a tratamientos convencionales'
        },
        {
            nombre: 'Acné',
            href: '/tratamientos/estetica/acne',
            imagen: '/images/treatments/estetica/tratamiento_acne.png',
            descripcion: 'Tratamiento efectivo para piel limpia sin efectos secundarios'
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark min-h-[50vh] flex items-center text-white overflow-hidden">
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/treatments/estetica/tratamiento_estetica.png"
                        alt="Tratamientos Estéticos"
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
                                { label: 'Estética' }
                            ]}
                        />
                    </div>

                    <div className="max-w-3xl">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-corporate-blue/30 backdrop-blur-md border border-cyan-300/50 text-cyan-100 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg">
                            <Sparkles className="w-4 h-4 text-cyan-300" />
                            <span>Tratamientos Estéticos Naturales</span>
                        </div>

                        {/* Título */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                            <span className="text-white">Tratamientos</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 block mt-2">
                                Estéticos
                            </span>
                        </h1>

                        {/* Descripción */}
                        <p className="text-xl md:text-2xl text-cyan-50 mb-10 leading-relaxed font-light drop-shadow-lg">
                            Rejuvenece tu piel y mejora tu apariencia de forma natural con ozonoterapia. Resultados visibles sin cirugía ni efectos secundarios.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introducción */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Estética Natural con Ozonoterapia
                        </h2>
                        <p className="text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-8">
                            En Ozono Vida ofrecemos tratamientos estéticos con ozonoterapia que aprovechan el poder regenerativo natural del oxígeno. Nuestros tratamientos mejoran la apariencia de tu piel, reducen signos del envejecimiento y tratan problemas estéticos de forma segura, efectiva y sin los riesgos de procedimientos invasivos.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-corporate-blue dark:text-cyan-400">
                            <div className="flex items-center space-x-2">
                                <Activity className="w-5 h-5" />
                                <span className="font-semibold">4 Tratamientos Especializados</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Shield className="w-5 h-5" />
                                <span className="font-semibold">Sin Cirugía</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Heart className="w-5 h-5" />
                                <span className="font-semibold">Resultados Naturales</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beneficios Generales */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-corporate-text-dark dark:text-white mb-12">
                        Ventajas de Nuestros Tratamientos Estéticos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-2">
                                100% Natural
                            </h3>
                            <p className="text-corporate-text-muted dark:text-gray-300">
                                Tratamientos basados en el poder del oxígeno
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
                                <Activity className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-2">
                                Sin Cirugía
                            </h3>
                            <p className="text-corporate-text-muted dark:text-gray-300">
                                Procedimientos no invasivos sin tiempo de recuperación
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-2">
                                Resultados Visibles
                            </h3>
                            <p className="text-corporate-text-muted dark:text-gray-300">
                                Mejoras progresivas y naturales en cada sesión
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-2">
                                Sin Efectos Secundarios
                            </h3>
                            <p className="text-corporate-text-muted dark:text-gray-300">
                                Tratamientos seguros sin complicaciones
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
                            Nuestros Tratamientos Estéticos
                        </h2>
                        <p className="text-lg text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Selecciona el tratamiento que necesitas y descubre cómo podemos ayudarte a verte mejor
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                                descripcion: 'Valoración estética de tu piel y necesidades específicas'
                            },
                            {
                                numero: '02',
                                titulo: 'Plan Personalizado',
                                descripcion: 'Diseño de un protocolo de tratamiento adaptado a ti'
                            },
                            {
                                numero: '03',
                                titulo: 'Sesiones de Tratamiento',
                                descripcion: 'Aplicación de ozonoterapia de forma cómoda y relajante'
                            },
                            {
                                numero: '04',
                                titulo: 'Seguimiento',
                                descripcion: 'Monitoreo de resultados y ajustes para mejores resultados'
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
                        ¿Lista para verte radiante?
                    </h2>
                    <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-cyan-100 leading-relaxed">
                        Agenda tu cita hoy y descubre cómo nuestros tratamientos naturales pueden realzar tu belleza
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

