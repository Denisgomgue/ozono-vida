import { Shield, ArrowRight, Activity, Heart, Stethoscope, Sparkles, Zap, CheckCircle, Star, Clock, Target, Users, Bone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import FAQSection from '@/components/ui/FAQSection';
import { CTASection } from '@/components/ui/CTASection';
import { ContactInfoSection } from '@/components/ui/ContactInfoSection';

export const metadata = {
    title: 'Aplicación Intraarticular de Ozonoterapia | Ozono Vida',
    description: 'Aplicación intraarticular de ozono para regeneración articular, artritis, artrosis y lesiones de cartílago. Técnica regenerativa efectiva.',
};

export default function IntraarticularPage() {
    const faqs = [
        {
            pregunta: '¿Qué es la aplicación intraarticular de ozono?',
            respuesta: 'La aplicación intraarticular consiste en inyectar ozono directamente en la cavidad articular. Esta técnica permite una concentración máxima de ozono en la articulación afectada, proporcionando efectos antiinflamatorios, analgésicos y regenerativos del cartílago articular.'
        },
        {
            pregunta: '¿Para qué articulaciones está indicada?',
            respuesta: 'Está indicada para todas las articulaciones principales: rodilla, cadera, hombro, codo, muñeca, tobillo, columna vertebral y articulaciones pequeñas de manos y pies. Es especialmente efectiva en articulaciones grandes como rodilla y cadera.'
        },
        {
            pregunta: '¿Es efectiva para la artrosis?',
            respuesta: 'Sí, es muy efectiva para la artrosis. El ozono intraarticular reduce la inflamación, alivia el dolor, mejora la movilidad y puede estimular la regeneración del cartílago articular. Los resultados se observan desde las primeras sesiones.'
        },
        {
            pregunta: '¿Cuántas sesiones se necesitan?',
            respuesta: 'Generalmente se requieren entre 4-8 sesiones para condiciones agudas y 6-12 sesiones para condiciones crónicas como artrosis avanzada. La frecuencia es semanal o quincenal según la severidad de la condición.'
        },
        {
            pregunta: '¿Hay riesgos o efectos secundarios?',
            respuesta: 'Los riesgos son mínimos cuando se realiza por profesionales experimentados. Puede haber una ligera molestia durante la inyección y ocasionalmente inflamación temporal post-tratamiento. No hay efectos secundarios sistémicos significativos.'
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark min-h-[70vh] flex items-center text-white overflow-hidden">
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/applications/aplicacion_intraarticular.png"
                        alt="Aplicación Intraarticular de Ozonoterapia"
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
                                { label: 'Aplicaciones', href: '/aplicaciones' },
                                { label: 'Intraarticular' }
                            ]}
                        />
                    </div>

                    <div className="max-w-4xl">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-corporate-blue/30 backdrop-blur-md border border-cyan-300/50 text-cyan-100 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg">
                            <Bone className="w-4 h-4 text-cyan-300" />
                            <span>Regeneración Articular</span>
                        </div>

                        {/* Título */}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                            <span className="text-white">Aplicación</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 block mt-2">
                                Intraarticular
                            </span>
                        </h1>

                        {/* Descripción */}
                        <p className="text-xl md:text-2xl text-cyan-50 mb-10 leading-relaxed font-light drop-shadow-lg">
                            Inyección directa de ozono en articulaciones para regeneración del cartílago, alivio del dolor articular y mejora de la movilidad.
                        </p>

                        {/* Características principales */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4">
                                <Target className="w-6 h-6 text-cyan-300" />
                                <span className="text-cyan-100 font-medium">Precisión Articular</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4">
                                <Activity className="w-6 h-6 text-cyan-300" />
                                <span className="text-cyan-100 font-medium">Regeneración</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4">
                                <Shield className="w-6 h-6 text-cyan-300" />
                                <span className="text-cyan-100 font-medium">Antiinflamatorio</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Información Técnica */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                                ¿Qué es la Aplicación Intraarticular?
                            </h2>
                            <p className="text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-6">
                                La aplicación intraarticular de ozono es una técnica médica avanzada que consiste en inyectar ozono directamente en la cavidad articular. Esta aplicación permite una concentración máxima de ozono en la articulación afectada, proporcionando efectos antiinflamatorios, analgésicos y regenerativos del cartílago articular.
                            </p>
                            <p className="text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-8">
                                Es especialmente efectiva para el tratamiento de artrosis, artritis, lesiones de cartílago y problemas articulares crónicos. La técnica es mínimamente invasiva y puede evitar la necesidad de cirugías articulares en muchos casos.
                            </p>
                            <div className="flex flex-wrap items-center gap-6 text-corporate-blue dark:text-cyan-400">
                                <div className="flex items-center space-x-2">
                                    <Bone className="w-5 h-5" />
                                    <span className="font-semibold">Regeneración Articular</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Zap className="w-5 h-5" />
                                    <span className="font-semibold">Alivio del Dolor</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Activity className="w-5 h-5" />
                                    <span className="font-semibold">Mejora Movilidad</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/applications/aplicacion_intraarticular.png"
                                alt="Técnica de aplicación intraarticular"
                                width={600}
                                height={400}
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Articulaciones Tratadas */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Articulaciones que Tratamos
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Especialistas en todas las articulaciones del cuerpo humano
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                joint: 'Rodilla',
                                conditions: ['Artrosis', 'Artritis', 'Lesiones de menisco', 'Tendinitis'],
                                effectiveness: '95%',
                                sessions: '4-8'
                            },
                            {
                                joint: 'Cadera',
                                conditions: ['Artrosis', 'Bursitis', 'Síndrome del piramidal', 'Dolor pélvico'],
                                effectiveness: '90%',
                                sessions: '6-10'
                            },
                            {
                                joint: 'Hombro',
                                conditions: ['Capsulitis', 'Tendinitis', 'Bursitis', 'Artritis'],
                                effectiveness: '88%',
                                sessions: '4-6'
                            },
                            {
                                joint: 'Columna',
                                conditions: ['Artrosis vertebral', 'Hernias discales', 'Estenosis', 'Espondilitis'],
                                effectiveness: '85%',
                                sessions: '6-12'
                            },
                            {
                                joint: 'Codo',
                                conditions: ['Epicondilitis', 'Artritis', 'Bursitis', 'Tendinitis'],
                                effectiveness: '92%',
                                sessions: '3-5'
                            },
                            {
                                joint: 'Tobillo',
                                conditions: ['Artrosis', 'Artritis', 'Tendinitis', 'Bursitis'],
                                effectiveness: '87%',
                                sessions: '4-6'
                            }
                        ].map((articulation, index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600">
                                <div className="text-center mb-4">
                                    <div className="w-16 h-16 bg-corporate-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                                        <Bone className="w-8 h-8 text-corporate-blue" />
                                    </div>
                                    <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-2">
                                        {articulation.joint}
                                    </h3>
                                </div>
                                
                                <div className="space-y-2 mb-4">
                                    {articulation.conditions.map((condition, idx) => (
                                        <div key={idx} className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-corporate-blue flex-shrink-0" />
                                            <span className="text-sm text-corporate-text-muted dark:text-gray-300">{condition}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-corporate-blue">{articulation.effectiveness}</div>
                                        <div className="text-xs text-corporate-text-muted dark:text-gray-300">Efectividad</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-corporate-blue">{articulation.sessions}</div>
                                        <div className="text-xs text-corporate-text-muted dark:text-gray-300">Sesiones</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Proceso de Aplicación */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Proceso de Aplicación Intraarticular
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Un proceso seguro y preciso para cada articulación
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: '1',
                                title: 'Evaluación Articular',
                                description: 'Examen físico y diagnóstico de la articulación afectada',
                                icon: Stethoscope,
                                color: 'from-blue-500 to-blue-600'
                            },
                            {
                                step: '2',
                                title: 'Localización Precisa',
                                description: 'Identificación exacta del punto de inyección',
                                icon: Target,
                                color: 'from-green-500 to-green-600'
                            },
                            {
                                step: '3',
                                title: 'Aplicación Guiada',
                                description: 'Inyección precisa de ozono en la cavidad articular',
                                icon: Activity,
                                color: 'from-purple-500 to-purple-600'
                            },
                            {
                                step: '4',
                                title: 'Seguimiento',
                                description: 'Evaluación de resultados y planificación',
                                icon: Heart,
                                color: 'from-orange-500 to-orange-600'
                            }
                        ].map((step, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                                    <step.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-corporate-blue mb-2">{step.step}</div>
                                    <h3 className="text-lg font-bold text-corporate-text-dark dark:text-white mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Beneficios y Resultados */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Beneficios y Resultados Esperados
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Efectos terapéuticos comprobados en articulaciones
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                icon: Zap,
                                title: 'Alivio del Dolor',
                                description: 'Reducción significativa del dolor articular',
                                percentage: '90%'
                            },
                            {
                                icon: Activity,
                                title: 'Mejora Movilidad',
                                description: 'Aumento de la flexibilidad articular',
                                percentage: '85%'
                            },
                            {
                                icon: Bone,
                                title: 'Regeneración',
                                description: 'Estimulación de la regeneración del cartílago',
                                percentage: '75%'
                            },
                            {
                                icon: Shield,
                                title: 'Antiinflamatorio',
                                description: 'Reducción de la inflamación articular',
                                percentage: '88%'
                            },
                            {
                                icon: Heart,
                                title: 'Mejora Circulación',
                                description: 'Optimización del flujo sanguíneo articular',
                                percentage: '92%'
                            },
                            {
                                icon: Star,
                                title: 'Satisfacción',
                                description: 'Alta satisfacción del paciente',
                                percentage: '94%'
                            }
                        ].map((beneficio, index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600">
                                <div className="w-14 h-14 bg-corporate-blue/10 rounded-xl flex items-center justify-center mb-4">
                                    <beneficio.icon className="w-7 h-7 text-corporate-blue" />
                                </div>
                                <h3 className="text-lg font-bold text-corporate-text-dark dark:text-white mb-2">
                                    {beneficio.title}
                                </h3>
                                <p className="text-sm text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-3">
                                    {beneficio.description}
                                </p>
                                <div className="text-2xl font-bold text-corporate-blue">
                                    {beneficio.percentage}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Estadísticas */}
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/5 dark:to-corporate-blue-light/5 rounded-2xl p-4 md:p-8 text-center">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-2">4-8</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Sesiones Promedio</div>
                        </div>
                        <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/5 dark:to-corporate-blue-light/5 rounded-2xl p-4 md:p-8 text-center">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-2">48h</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Primeros Resultados</div>
                        </div>
                        <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/5 dark:to-corporate-blue-light/5 rounded-2xl p-4 md:p-8 text-center">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-2">20min</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Duración Sesión</div>
                        </div>
                        <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/5 dark:to-corporate-blue-light/5 rounded-2xl p-4 md:p-8 text-center">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-2">94%</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Satisfacción</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <FAQSection 
                faqs={faqs}
                title="Preguntas Frecuentes"
                subtitle="Resolvemos tus dudas sobre la aplicación intraarticular"
            />

            {/* CTA Section */}
            <CTASection
                title="¿Listo para mejorar tu movilidad articular?"
                subtitle="Agenda tu cita y experimenta la regeneración articular que proporciona la aplicación intraarticular de ozono"
            />

          
        </div>
    );
}