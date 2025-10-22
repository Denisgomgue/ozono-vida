import { Shield, ArrowRight, Activity, Heart, Stethoscope, Sparkles, Zap, CheckCircle, Star, Clock, Target, Users, Wind } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import FAQSection from '@/components/ui/FAQSection';
import { CTASection } from '@/components/ui/CTASection';
import { ContactInfoSection } from '@/components/ui/ContactInfoSection';

export const metadata = {
    title: 'Insuflación Rectal de Ozonoterapia | Ozono Vida',
    description: 'Insuflación rectal de ozono para tratamiento de problemas digestivos, inflamación intestinal y desintoxicación. Técnica segura y efectiva.',
};

export default function InsuflacionRectalPage() {
    const faqs = [
        {
            pregunta: '¿Qué es la insuflación rectal de ozono?',
            respuesta: 'La insuflación rectal es una técnica que consiste en introducir ozono gaseoso en el recto mediante una sonda especial. Esta aplicación permite que el ozono actúe directamente sobre el tracto digestivo inferior y sea absorbido por el organismo.'
        },
        {
            pregunta: '¿Para qué condiciones está indicada?',
            respuesta: 'Está indicada para colitis, enfermedad de Crohn, síndrome del intestino irritable, prostatitis, problemas digestivos, desintoxicación intestinal, inflamación del tracto digestivo y como complemento en tratamientos sistémicos.'
        },
        {
            pregunta: '¿Es incómoda la aplicación?',
            respuesta: 'La aplicación es bien tolerada y no es dolorosa. Se utiliza una sonda especial muy fina y lubricada. La mayoría de pacientes reportan solo una ligera sensación de presión durante la insuflación.'
        },
        {
            pregunta: '¿Cuántas sesiones se necesitan?',
            respuesta: 'Generalmente se requieren entre 6-12 sesiones para obtener beneficios completos. La frecuencia es semanal o quincenal según la condición. Los resultados se pueden observar desde las primeras sesiones.'
        },
        {
            pregunta: '¿Hay contraindicaciones?',
            respuesta: 'Las contraindicaciones incluyen hemorroides activas, fisuras anales, cirugía rectal reciente y embarazo en el primer trimestre. Siempre se realiza una evaluación médica previa para determinar la idoneidad del tratamiento.'
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark min-h-[70vh] flex items-center text-white overflow-hidden">
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/applications/insuflacion_rectal.png"
                        alt="Insuflación Rectal de Ozonoterapia"
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
                                { label: 'Insuflación Rectal' }
                            ]}
                        />
                    </div>

                    <div className="max-w-4xl">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-corporate-blue/30 backdrop-blur-md border border-cyan-300/50 text-cyan-100 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg">
                            <Wind className="w-4 h-4 text-cyan-300" />
                            <span>Tratamiento Digestivo</span>
                        </div>

                        {/* Título */}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                            <span className="text-white">Insuflación</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 block mt-2">
                                Rectal
                            </span>
                        </h1>

                        {/* Descripción */}
                        <p className="text-xl md:text-2xl text-cyan-50 mb-10 leading-relaxed font-light drop-shadow-lg">
                            Aplicación de ozono por vía rectal para tratamiento de problemas digestivos, inflamación intestinal y desintoxicación.
                        </p>

                        {/* Características principales */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4">
                                <Wind className="w-6 h-6 text-cyan-300" />
                                <span className="text-cyan-100 font-medium">Aplicación Gaseosa</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4">
                                <Shield className="w-6 h-6 text-cyan-300" />
                                <span className="text-cyan-100 font-medium">Antiinflamatorio</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4">
                                <Activity className="w-6 h-6 text-cyan-300" />
                                <span className="text-cyan-100 font-medium">Desintoxicación</span>
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
                                ¿Qué es la Insuflación Rectal?
                            </h2>
                            <p className="text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-6">
                                La insuflación rectal es una técnica que consiste en introducir ozono gaseoso en el recto mediante una sonda especial. Esta aplicación permite que el ozono actúe directamente sobre el tracto digestivo inferior y sea absorbido por el organismo.
                            </p>
                            <p className="text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-8">
                                Es especialmente efectiva para el tratamiento de problemas digestivos, inflamación intestinal y desintoxicación. La técnica es bien tolerada y proporciona efectos sistémicos beneficiosos.
                            </p>
                            <div className="flex flex-wrap items-center gap-6 text-corporate-blue dark:text-cyan-400">
                                <div className="flex items-center space-x-2">
                                    <Wind className="w-5 h-5" />
                                    <span className="font-semibold">Aplicación Gaseosa</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Shield className="w-5 h-5" />
                                    <span className="font-semibold">Antiinflamatorio</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Activity className="w-5 h-5" />
                                    <span className="font-semibold">Desintoxicación</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/applications/insuflacion_rectal.png"
                                alt="Técnica de insuflación rectal"
                                width={600}
                                height={400}
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Indicaciones Principales */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Indicaciones Principales
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Condiciones que se benefician del tratamiento rectal con ozono
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                condition: 'Colitis',
                                description: 'Inflamación del colon y recto',
                                effectiveness: '90%',
                                sessions: '6-12',
                                icon: Heart,
                                color: 'from-red-500 to-red-600'
                            },
                            {
                                condition: 'Enfermedad de Crohn',
                                description: 'Enfermedad inflamatoria intestinal',
                                effectiveness: '85%',
                                sessions: '8-15',
                                icon: Activity,
                                color: 'from-blue-500 to-blue-600'
                            },
                            {
                                condition: 'Síndrome del Intestino Irritable',
                                description: 'Trastorno funcional del intestino',
                                effectiveness: '88%',
                                sessions: '6-10',
                                icon: Zap,
                                color: 'from-green-500 to-green-600'
                            },
                            {
                                condition: 'Prostatitis',
                                description: 'Inflamación de la próstata',
                                effectiveness: '92%',
                                sessions: '6-12',
                                icon: Shield,
                                color: 'from-purple-500 to-purple-600'
                            },
                            {
                                condition: 'Desintoxicación Intestinal',
                                description: 'Limpieza del tracto digestivo',
                                effectiveness: '95%',
                                sessions: '4-8',
                                icon: Star,
                                color: 'from-orange-500 to-orange-600'
                            },
                            {
                                condition: 'Problemas Digestivos',
                                description: 'Trastornos digestivos generales',
                                effectiveness: '87%',
                                sessions: '6-10',
                                icon: Target,
                                color: 'from-indigo-500 to-indigo-600'
                            }
                        ].map((condition, index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600">
                                <div className={`w-14 h-14 bg-gradient-to-r ${condition.color} rounded-xl flex items-center justify-center mb-4`}>
                                    <condition.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-corporate-text-dark dark:text-white mb-2">
                                    {condition.condition}
                                </h3>
                                <p className="text-sm text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-4">
                                    {condition.description}
                                </p>
                                
                                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-corporate-blue">{condition.effectiveness}</div>
                                        <div className="text-xs text-corporate-text-muted dark:text-gray-300">Efectividad</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-corporate-blue">{condition.sessions}</div>
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
                            Proceso de Aplicación
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Un proceso seguro y bien tolerado paso a paso
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: '1',
                                title: 'Evaluación',
                                description: 'Evaluación médica y preparación del paciente',
                                icon: Stethoscope,
                                color: 'from-blue-500 to-blue-600'
                            },
                            {
                                step: '2',
                                title: 'Preparación',
                                description: 'Limpieza del área y preparación del equipo',
                                icon: Shield,
                                color: 'from-green-500 to-green-600'
                            },
                            {
                                step: '3',
                                title: 'Insuflación',
                                description: 'Introducción de ozono gaseoso por vía rectal',
                                icon: Wind,
                                color: 'from-purple-500 to-purple-600'
                            },
                            {
                                step: '4',
                                title: 'Absorción',
                                description: 'Tiempo de contacto para absorción del ozono',
                                icon: Activity,
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
                            Efectos terapéuticos comprobados en el tracto digestivo
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                icon: Shield,
                                title: 'Antiinflamatorio',
                                description: 'Reducción de la inflamación intestinal',
                                percentage: '90%'
                            },
                            {
                                icon: Activity,
                                title: 'Desintoxicación',
                                description: 'Limpieza del tracto digestivo',
                                percentage: '95%'
                            },
                            {
                                icon: Heart,
                                title: 'Mejora Digestiva',
                                description: 'Optimización de la función digestiva',
                                percentage: '88%'
                            },
                            {
                                icon: Zap,
                                title: 'Alivio de Síntomas',
                                description: 'Reducción de síntomas digestivos',
                                percentage: '85%'
                            },
                            {
                                icon: Star,
                                title: 'Bienestar General',
                                description: 'Mejora del bienestar general',
                                percentage: '92%'
                            },
                            {
                                icon: Target,
                                title: 'Efectos Sistémicos',
                                description: 'Beneficios que se extienden al organismo',
                                percentage: '87%'
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
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-2">6-12</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Sesiones Promedio</div>
                        </div>
                        <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/5 dark:to-corporate-blue-light/5 rounded-2xl p-4 md:p-8 text-center">
                            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-corporate-blue mb-2">15-20min</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Duración Sesión</div>
                        </div>
                        <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/5 dark:to-corporate-blue-light/5 rounded-2xl p-4 md:p-8 text-center">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-2">72h</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Primeros Resultados</div>
                        </div>
                        <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/5 dark:to-corporate-blue-light/5 rounded-2xl p-4 md:p-8 text-center">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-2">89%</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Satisfacción</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <FAQSection 
                faqs={faqs}
                title="Preguntas Frecuentes"
                subtitle="Resolvemos tus dudas sobre la insuflación rectal"
            />

            {/* CTA Section */}
            <CTASection
                title="¿Listo para mejorar tu salud digestiva?"
                subtitle="Agenda tu cita y experimenta los beneficios de la insuflación rectal"
            />

     
        </div>
    );
}