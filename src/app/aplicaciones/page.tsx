import { Shield, ArrowRight, Activity, Heart, Stethoscope, Sparkles, Zap, Syringe, Droplets, FlaskConical } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata = {
    title: 'Aplicaciones de Ozonoterapia | Ozono Vida',
    description: 'Descubre las diferentes aplicaciones de ozonoterapia: intramuscular, intraarticular, auto hemoterapia, sueros ozonizados y más. Métodos seguros y efectivos.',
};

export default function AplicacionesPage() {
    const aplicaciones = [
        {
            nombre: 'Intramuscular',
            href: '/aplicaciones/intramuscular',
            imagen: '/images/applications/aplicacion_intramuscular.png',
            icono: Syringe,
            descripcion: 'Inyección directa de ozono en músculos para alivio del dolor',
            color: 'from-blue-500 to-cyan-600'
        },
        {
            nombre: 'Intraarticular',
            href: '/aplicaciones/intraarticular',
            imagen: '/images/applications/aplicacion_intraarticular.png',
            icono: Activity,
            descripcion: 'Aplicación directa en articulaciones para regeneración',
            color: 'from-green-500 to-emerald-600'
        },
        {
            nombre: 'Auto Hemoterapia Menor',
            href: '/aplicaciones/auto-hemoterapia-menor',
            imagen: '/images/applications/autohemoterapia.png',
            icono: Droplets,
            descripcion: 'Tratamiento con sangre ozonizada en pequeñas cantidades',
            color: 'from-red-500 to-pink-600'
        },
        {
            nombre: 'Auto Hemoterapia Mayor',
            href: '/aplicaciones/auto-hemoterapia-mayor',
            imagen: '/images/applications/autohemoterapia_mayor.png',
            icono: Heart,
            descripcion: 'Tratamiento con mayor volumen de sangre ozonizada',
            color: 'from-purple-500 to-violet-600'
        },
        {
            nombre: 'Sueros Ozonizados',
            href: '/aplicaciones/sueros-ozonizados',
            imagen: '/images/applications/sueros_ozonisados.png',
            icono: FlaskConical,
            descripcion: 'Sueros fisiológicos enriquecidos con ozono',
            color: 'from-orange-500 to-amber-600'
        },
        {
            nombre: 'Bolsa Ozonisada',
            href: '/aplicaciones/bolsa-ozonisada',
            imagen: '/images/applications/bolza_ozonizada.png',
            icono: Shield,
            descripcion: 'Tratamiento tópico con bolsa de ozono',
            color: 'from-teal-500 to-cyan-600'
        },
        {
            nombre: 'Insuflación Rectal',
            href: '/aplicaciones/insuflacion-rectal',
            imagen: '/images/applications/insuflacion_rectal.png',
            icono: Zap,
            descripcion: 'Aplicación de ozono por vía rectal',
            color: 'from-indigo-500 to-blue-600'
        },
        {
            nombre: 'Embolsados',
            href: '/aplicaciones/embolsados',
            imagen: '/images/applications/embolsados.png',
            icono: Sparkles,
            descripcion: 'Tratamiento localizado con bolsas de ozono',
            color: 'from-pink-500 to-rose-600'
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark min-h-[60vh] flex items-center text-white overflow-hidden">
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/applications/aplicaciones.png"
                        alt="Aplicaciones de Ozonoterapia"
                        fill
                        className="object-cover brightness-50 opacity-40"
                        priority
                    />
                </div>

                {/* Contenido */}
                <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl relative z-10 py-20">
                    {/* Breadcrumbs */}
                    <div className="mb-8">
                        <Breadcrumbs
                            items={[
                                { label: 'Aplicaciones' }
                            ]}
                        />
                    </div>

                    <div className="max-w-4xl">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-corporate-blue/30 backdrop-blur-md border border-cyan-300/50 text-cyan-100 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg">
                            <Syringe className="w-4 h-4 text-cyan-300" />
                            <span>Métodos de Aplicación</span>
                        </div>

                        {/* Título */}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                            <span className="text-white">Aplicaciones de</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 block mt-2">
                                Ozonoterapia
                            </span>
                        </h1>

                        {/* Descripción */}
                        <p className="text-xl md:text-2xl text-cyan-50 mb-10 leading-relaxed font-light drop-shadow-lg">
                            Descubre los diferentes métodos de aplicación de ozonoterapia. Cada técnica está diseñada para maximizar los beneficios terapéuticos según la condición a tratar.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introducción */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            ¿Qué son las Aplicaciones de Ozonoterapia?
                        </h2>
                        <p className="text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-8">
                            Las aplicaciones de ozonoterapia son diferentes métodos para administrar el ozono medicinal al organismo. Cada técnica tiene indicaciones específicas y se selecciona según la condición médica, la zona a tratar y los objetivos terapéuticos. Desde inyecciones directas hasta tratamientos sistémicos, cada método está diseñado para maximizar la efectividad del ozono.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-corporate-blue dark:text-cyan-400">
                            <div className="flex items-center space-x-2">
                                <Syringe className="w-5 h-5" />
                                <span className="font-semibold">8 Métodos Especializados</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Shield className="w-5 h-5" />
                                <span className="font-semibold">Técnicas Seguras</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Heart className="w-5 h-5" />
                                <span className="font-semibold">Personalizado</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beneficios Generales */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Ventajas de las Diferentes Aplicaciones
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Cada método de aplicación ofrece beneficios únicos para diferentes condiciones
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Syringe,
                                title: 'Precisión',
                                description: 'Aplicación directa en la zona afectada'
                            },
                            {
                                icon: Activity,
                                title: 'Efectividad',
                                description: 'Máxima concentración donde se necesita'
                            },
                            {
                                icon: Heart,
                                title: 'Sistémico',
                                description: 'Beneficios en todo el organismo'
                            },
                            {
                                icon: Shield,
                                title: 'Seguridad',
                                description: 'Técnicas médicas validadas'
                            },
                            {
                                icon: Zap,
                                title: 'Rapidez',
                                description: 'Efectos inmediatos y duraderos'
                            },
                            {
                                icon: Sparkles,
                                title: 'Personalización',
                                description: 'Adaptado a cada paciente'
                            },
                            {
                                icon: Droplets,
                                title: 'Tolerancia',
                                description: 'Bien tolerado por el organismo'
                            },
                            {
                                icon: FlaskConical,
                                title: 'Versatilidad',
                                description: 'Múltiples vías de administración'
                            }
                        ].map((beneficio, index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600">
                                <div className="w-14 h-14 bg-corporate-blue/10 rounded-xl flex items-center justify-center mb-4">
                                    <beneficio.icon className="w-7 h-7 text-corporate-blue" />
                                </div>
                                <h3 className="text-lg font-bold text-corporate-text-dark dark:text-white mb-2">
                                    {beneficio.title}
                                </h3>
                                <p className="text-sm text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                                    {beneficio.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Aplicaciones */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Nuestras Aplicaciones
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Selecciona el método de aplicación que mejor se adapte a tu tratamiento
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {aplicaciones.map((aplicacion) => (
                            <Link
                                key={aplicacion.href}
                                href={aplicacion.href}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                            >
                                {/* Imagen */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={aplicacion.imagen}
                                        alt={aplicacion.nombre}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                    {/* Ícono flotante */}
                                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${aplicacion.color} rounded-xl flex items-center justify-center shadow-lg`}>
                                        <aplicacion.icono className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Título sobre la imagen */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-2xl font-bold text-white mb-1">
                                            {aplicacion.nombre}
                                        </h3>
                                    </div>
                                </div>

                                {/* Contenido */}
                                <div className="p-6">
                                    <p className="text-corporate-text-muted dark:text-gray-300 mb-4 leading-relaxed">
                                        {aplicacion.descripcion}
                                    </p>

                                    <div className="flex items-center space-x-2 text-corporate-blue dark:text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                                        <span>Ver detalles</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ¿Por qué elegir nuestras aplicaciones? */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                                ¿Por qué elegir nuestras aplicaciones?
                            </h2>
                            <div className="space-y-6 text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                                <p>
                                    Nuestras aplicaciones de ozonoterapia están diseñadas por <strong className="text-corporate-blue">médicos especializados</strong> con años de experiencia. Cada método está optimizado para maximizar los beneficios terapéuticos del ozono.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        'Técnicas médicas validadas científicamente',
                                        'Personalización según la condición',
                                        'Máxima seguridad y tolerancia',
                                        'Efectos inmediatos y duraderos',
                                        'Sin efectos secundarios adversos',
                                        'Aplicación por profesionales certificados'
                                    ].map((ventaja, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <Shield className="w-6 h-6 text-corporate-blue flex-shrink-0 mt-1" />
                                            <span className="text-corporate-text-muted dark:text-gray-300">{ventaja}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/5 dark:to-corporate-blue-light/5 rounded-2xl p-8 text-center">
                                <div className="text-5xl font-bold text-corporate-blue mb-2">8</div>
                                <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Métodos de Aplicación</div>
                            </div>
                            <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/5 dark:to-corporate-blue-light/5 rounded-2xl p-8 text-center">
                                <div className="text-5xl font-bold text-corporate-blue mb-2">100%</div>
                                <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Seguras y Validadas</div>
                            </div>
                            <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/5 dark:to-corporate-blue-light/5 rounded-2xl p-8 text-center">
                                <div className="text-5xl font-bold text-corporate-blue mb-2">0</div>
                                <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Efectos Secundarios</div>
                            </div>
                            <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/5 dark:to-corporate-blue-light/5 rounded-2xl p-8 text-center">
                                <div className="text-5xl font-bold text-corporate-blue mb-2">15+</div>
                                <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Años de Experiencia</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proceso General */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            ¿Cómo Funciona el Proceso?
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Un proceso profesional en 4 pasos
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                numero: '01',
                                titulo: 'Evaluación Médica',
                                descripcion: 'Análisis completo de tu condición y necesidades'
                            },
                            {
                                numero: '02',
                                titulo: 'Selección del Método',
                                descripcion: 'Elección de la aplicación más adecuada'
                            },
                            {
                                numero: '03',
                                titulo: 'Aplicación Profesional',
                                descripcion: 'Ejecución de la técnica por especialistas'
                            },
                            {
                                numero: '04',
                                titulo: 'Seguimiento',
                                descripcion: 'Monitoreo de resultados y ajustes'
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
                        ¿Listo para comenzar tu tratamiento?
                    </h2>
                    <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-cyan-100 leading-relaxed">
                        Agenda tu cita y descubre cuál es la mejor aplicación de ozonoterapia para tu condición
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
