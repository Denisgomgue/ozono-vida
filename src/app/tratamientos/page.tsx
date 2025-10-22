import { Shield, ArrowRight, Activity, Heart, Stethoscope, Sparkles, Zap, Flower2, CheckCircle, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { AppointmentButton } from '@/components/ui/AppointmentButton';


export const metadata = {
    title: 'Tratamientos con Ozonoterapia | Ozono Vida',
    description: 'Tratamientos especializados con ozonoterapia y medicina regenerativa. Dolor, enfermedades, estética, infecciones y ginecología. Soluciones naturales y efectivas.',
};

export default function TratamientosPage() {
    const categorias = [
        {
            nombre: 'Tratamiento del Dolor',
            href: '/tratamientos/dolor',
            imagen: '/images/treatments/dolor-cuerpo/dolor_zona.png',
            icono: Activity,
            descripcion: 'Tratamientos especializados para alivio del dolor en diversas condiciones',
            tratamientos: '13 Tratamientos',
            color: 'from-blue-500 to-cyan-600'
        },
        {
            nombre: 'Tratamiento de Enfermedades',
            href: '/tratamientos/enfermedades',
            imagen: '/images/treatments/enfermedades/tratamiento_enfermedades.png',
            icono: Stethoscope,
            descripcion: 'Manejo complementario de enfermedades crónicas con ozonoterapia',
            tratamientos: '11 Tratamientos',
            color: 'from-green-500 to-emerald-600'
        },
        {
            nombre: 'Estética',
            href: '/tratamientos/estetica',
            imagen: '/images/treatments/estetica/tratamiento_estetica.png',
            icono: Sparkles,
            descripcion: 'Tratamientos estéticos naturales para rejuvenecer y embellecer',
            tratamientos: '4 Tratamientos',
            color: 'from-pink-500 to-rose-600'
        },
        {
            nombre: 'Infecciones',
            href: '/tratamientos/infecciones',
            imagen: '/images/treatments/infecciones/infecciones.png',
            icono: Zap,
            descripcion: 'Control efectivo de infecciones con efecto bactericida potente',
            tratamientos: '3 Tratamientos',
            color: 'from-orange-500 to-amber-600'
        },
        {
            nombre: 'Ginecología',
            href: '/tratamientos/ginecologia',
            imagen: '/images/treatments/ginecologia/ginecologia.png',
            icono: Flower2,
            descripcion: 'Soluciones para la salud íntima femenina',
            tratamientos: '5 Tratamientos',
            color: 'from-purple-500 to-violet-600'
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark min-h-[60vh] flex items-center text-white overflow-hidden">
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/treatments/dolor-cuerpo/dolor_zona.png"
                        alt="Tratamientos con Ozonoterapia"
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
                                { label: 'Tratamientos' }
                            ]}
                        />
                    </div>

                    <div className="max-w-4xl">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-corporate-blue/30 backdrop-blur-md border border-cyan-300/50 text-cyan-100 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg">
                            <Heart className="w-4 h-4 text-cyan-300" />
                            <span>Medicina Regenerativa</span>
                        </div>

                        {/* Título */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                            <span className="text-white">Tratamientos con</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 block mt-2">
                                Ozonoterapia
                            </span>
                        </h1>

                        {/* Descripción */}
                        <p className="text-xl md:text-2xl text-cyan-50 mb-10 leading-relaxed font-light drop-shadow-lg">
                            Descubre nuestros tratamientos especializados con ozonoterapia y medicina regenerativa. Soluciones naturales, efectivas y sin efectos secundarios para mejorar tu salud y calidad de vida.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introducción */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            ¿Qué es la Ozonoterapia?
                        </h2>
                        <p className="text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-8">
                            La ozonoterapia es un tratamiento médico que utiliza ozono (O₃) con fines terapéuticos. El ozono tiene propiedades antiinflamatorias, antimicrobianas, analgésicas y regenerativas que lo hacen efectivo para tratar una amplia variedad de condiciones médicas. Es un tratamiento natural, seguro y sin efectos secundarios que complementa perfectamente la medicina convencional.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-corporate-blue dark:text-cyan-400">
                            <div className="flex items-center space-x-2">
                                <Activity className="w-5 h-5" />
                                <span className="font-semibold">36+ Tratamientos Especializados</span>
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
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Beneficios de la Ozonoterapia
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Un tratamiento integral con múltiples beneficios para tu salud
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: 'Antiinflamatorio',
                                description: 'Reduce la inflamación de forma natural y efectiva'
                            },
                            {
                                icon: Activity,
                                title: 'Regenerativo',
                                description: 'Estimula la regeneración de tejidos dañados'
                            },
                            {
                                icon: Heart,
                                title: 'Analgésico',
                                description: 'Alivia el dolor sin necesidad de medicamentos'
                            },
                            {
                                icon: Zap,
                                title: 'Antimicrobiano',
                                description: 'Elimina bacterias, hongos y virus sin resistencia'
                            },
                            {
                                icon: Stethoscope,
                                title: 'Mejora Circulación',
                                description: 'Optimiza la oxigenación y flujo sanguíneo'
                            },
                            {
                                icon: Sparkles,
                                title: 'Fortalece Inmunidad',
                                description: 'Potencia las defensas naturales del organismo'
                            },
                            {
                                icon: CheckCircle,
                                title: 'Sin Efectos Secundarios',
                                description: 'Tratamiento natural seguro y bien tolerado'
                            },
                            {
                                icon: Star,
                                title: 'Complementario',
                                description: 'Compatible con otros tratamientos médicos'
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

            {/* Categorías de Tratamientos */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Nuestras Categorías de Tratamientos
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Selecciona la categoría que necesitas y descubre cómo podemos ayudarte
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categorias.map((categoria) => (
                            <Link
                                key={categoria.href}
                                href={categoria.href}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                            >
                                {/* Imagen */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={categoria.imagen}
                                        alt={categoria.nombre}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                    {/* Ícono flotante */}
                                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${categoria.color} rounded-xl flex items-center justify-center shadow-lg`}>
                                        <categoria.icono className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Título sobre la imagen */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-2xl font-bold text-white mb-1">
                                            {categoria.nombre}
                                        </h3>
                                        <p className="text-cyan-200 text-sm font-semibold">
                                            {categoria.tratamientos}
                                        </p>
                                    </div>
                                </div>

                                {/* Contenido */}
                                <div className="p-6">
                                    <p className="text-corporate-text-muted dark:text-gray-300 mb-4 leading-relaxed">
                                        {categoria.descripcion}
                                    </p>

                                    <div className="flex items-center space-x-2 text-corporate-blue dark:text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                                        <span>Explorar tratamientos</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ¿Por qué elegir Ozonoterapia? */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                                ¿Por qué elegir Ozonoterapia?
                            </h2>
                            <div className="space-y-6 text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                                <p>
                                    La <strong className="text-corporate-blue">ozonoterapia</strong> es reconocida mundialmente como un tratamiento médico seguro y efectivo. Ha sido utilizada durante décadas en Europa y América con excelentes resultados en una amplia variedad de condiciones médicas.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        'Tratamiento 100% natural sin químicos',
                                        'Sin efectos secundarios adversos',
                                        'Compatible con otros tratamientos',
                                        'Resultados comprobados científicamente',
                                        'Mejora la calidad de vida',
                                        'Procedimientos ambulatorios rápidos'
                                    ].map((ventaja, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <CheckCircle className="w-6 h-6 text-corporate-blue flex-shrink-0 mt-1" />
                                            <span className="text-corporate-text-muted dark:text-gray-300">{ventaja}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/5 dark:to-corporate-blue-light/5 rounded-2xl p-8 text-center">
                                <div className="text-5xl font-bold text-corporate-blue mb-2">36+</div>
                                <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Tratamientos Especializados</div>
                            </div>
                            <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/5 dark:to-corporate-blue-light/5 rounded-2xl p-8 text-center">
                                <div className="text-5xl font-bold text-corporate-blue mb-2">90%</div>
                                <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Satisfacción de Pacientes</div>
                            </div>
                            <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/5 dark:to-corporate-blue-light/5 rounded-2xl p-8 text-center">
                                <div className="text-5xl font-bold text-corporate-blue mb-2">0</div>
                                <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Efectos Secundarios</div>
                            </div>
                            <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/5 dark:to-corporate-blue-light/5 rounded-2xl p-8 text-center">
                                <div className="text-5xl font-bold text-corporate-blue mb-2">100%</div>
                                <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Natural y Seguro</div>
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
                                titulo: 'Consulta Inicial',
                                descripcion: 'Evaluación médica completa de tu condición y necesidades'
                            },
                            {
                                numero: '02',
                                titulo: 'Plan Personalizado',
                                descripcion: 'Diseño de un protocolo de tratamiento específico para ti'
                            },
                            {
                                numero: '03',
                                titulo: 'Sesiones de Tratamiento',
                                descripcion: 'Aplicación de ozonoterapia de forma ambulatoria y segura'
                            },
                            {
                                numero: '04',
                                titulo: 'Seguimiento',
                                descripcion: 'Monitoreo de tu evolución y ajustes según sea necesario'
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
                        Agenda tu cita hoy y descubre cómo la ozonoterapia puede transformar tu vida de forma natural y efectiva
                    </p>
                    <AppointmentButton variant="white" size="lg" />
                </div>
            </section>
        </div>
    );
}

