import { Shield, ArrowRight, Activity, Heart, Stethoscope, Sparkles, Zap, CheckCircle, Star, Clock, Target, Users, Package } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import FAQSection from '@/components/ui/FAQSection';
import { CTASection } from '@/components/ui/CTASection';
import { ContactInfoSection } from '@/components/ui/ContactInfoSection';

export const metadata = {
    title: 'Embolsados de Ozonoterapia | Ozono Vida',
    description: 'Embolsados de ozono para tratamiento de heridas, úlceras y lesiones cutáneas. Técnica tópica avanzada y efectiva.',
};

export default function EmbolsadosPage() {
    const faqs = [
        {
            pregunta: '¿Qué son los embolsados de ozono?',
            respuesta: 'Los embolsados son una técnica avanzada que consiste en colocar la zona afectada dentro de una bolsa hermética especializada llena de ozono. Esta aplicación tópica permite una exposición controlada y prolongada al ozono para maximizar los efectos terapéuticos.'
        },
        {
            pregunta: '¿Cuál es la diferencia con la bolsa ozonisada?',
            respuesta: 'Los embolsados utilizan tecnología más avanzada con bolsas especializadas, mayor control de la concentración de ozono, y tiempos de exposición más prolongados. Es una evolución de la técnica básica de bolsa ozonisada.'
        },
        {
            pregunta: '¿Para qué condiciones está indicada?',
            respuesta: 'Está indicada para heridas complejas, úlceras crónicas severas, pie diabético avanzado, quemaduras, infecciones cutáneas resistentes, problemas circulatorios periféricos y cualquier lesión que requiera tratamiento tópico intensivo.'
        },
        {
            pregunta: '¿Cuánto dura una sesión?',
            respuesta: 'Una sesión de embolsados dura entre 20-45 minutos. El tiempo depende del tipo de lesión, la severidad y la respuesta del paciente. Es un tratamiento más prolongado que la bolsa ozonisada básica.'
        },
        {
            pregunta: '¿Es segura esta técnica?',
            respuesta: 'Sí, es una técnica muy segura cuando se realiza por profesionales especializados. Utiliza tecnología avanzada y protocolos estrictos de seguridad. No produce efectos secundarios significativos y es bien tolerada.'
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark min-h-[70vh] flex items-center text-white overflow-hidden">
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/applications/embolsados.png"
                        alt="Embolsados de Ozonoterapia"
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
                                { label: 'Embolsados' }
                            ]}
                        />
                    </div>

                    <div className="max-w-4xl">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-corporate-blue/30 backdrop-blur-md border border-cyan-300/50 text-cyan-100 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg">
                            <Package className="w-4 h-4 text-cyan-300" />
                            <span>Técnica Avanzada</span>
                        </div>

                        {/* Título */}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                            <span className="text-white">Embolsados</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 block mt-2">
                                de Ozono
                            </span>
                        </h1>

                        {/* Descripción */}
                        <p className="text-xl md:text-2xl text-cyan-50 mb-10 leading-relaxed font-light drop-shadow-lg">
                            Técnica avanzada de embolsado con ozono para tratamiento intensivo de heridas complejas y lesiones cutáneas severas.
                        </p>

                        {/* Características principales */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4">
                                <Package className="w-6 h-6 text-cyan-300" />
                                <span className="text-cyan-100 font-medium">Tecnología Avanzada</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4">
                                <Shield className="w-6 h-6 text-cyan-300" />
                                <span className="text-cyan-100 font-medium">Control Preciso</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4">
                                <Activity className="w-6 h-6 text-cyan-300" />
                                <span className="text-cyan-100 font-medium">Tratamiento Intensivo</span>
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
                                ¿Qué son los Embolsados de Ozono?
                            </h2>
                            <p className="text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-6">
                                Los embolsados son una técnica avanzada que consiste en colocar la zona afectada dentro de una bolsa hermética especializada llena de ozono. Esta aplicación tópica permite una exposición controlada y prolongada al ozono para maximizar los efectos terapéuticos.
                            </p>
                            <p className="text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-8">
                                Es especialmente efectiva para el tratamiento de heridas complejas, úlceras crónicas severas y lesiones que requieren tratamiento tópico intensivo. La técnica utiliza tecnología avanzada y protocolos estrictos de seguridad.
                            </p>
                            <div className="flex flex-wrap items-center gap-6 text-corporate-blue dark:text-cyan-400">
                                <div className="flex items-center space-x-2">
                                    <Package className="w-5 h-5" />
                                    <span className="font-semibold">Tecnología Avanzada</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Shield className="w-5 h-5" />
                                    <span className="font-semibold">Control Preciso</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Activity className="w-5 h-5" />
                                    <span className="font-semibold">Tratamiento Intensivo</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/applications/embolsados.png"
                                alt="Técnica de embolsados"
                                width={600}
                                height={400}
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparación con Bolsa Ozonizada */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Embolsados vs Bolsa Ozonizada
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Comparación de ambas técnicas para elegir la más adecuada
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Bolsa Ozonizada */}
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-600">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Package className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-corporate-text-dark dark:text-white mb-2">
                                    Bolsa Ozonizada
                                </h3>
                                <p className="text-corporate-text-muted dark:text-gray-300">
                                    Técnica básica y estándar
                                </p>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-blue-500" />
                                    <span className="text-corporate-text-dark dark:text-white">Técnica estándar</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-blue-500" />
                                    <span className="text-corporate-text-dark dark:text-white">15-30 minutos</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-blue-500" />
                                    <span className="text-corporate-text-dark dark:text-white">Concentración básica</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-blue-500" />
                                    <span className="text-corporate-text-dark dark:text-white">Lesiones simples</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-blue-500" />
                                    <span className="text-corporate-text-dark dark:text-white">Tratamiento estándar</span>
                                </div>
                            </div>
                        </div>

                        {/* Embolsados */}
                        <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/20 dark:to-corporate-blue-light/20 rounded-2xl p-8 shadow-lg border-2 border-corporate-blue">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-corporate-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Package className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-corporate-text-dark dark:text-white mb-2">
                                    Embolsados
                                </h3>
                                <p className="text-corporate-text-muted dark:text-gray-300">
                                    Técnica avanzada y especializada
                                </p>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-corporate-blue" />
                                    <span className="text-corporate-text-dark dark:text-white font-semibold">Tecnología avanzada</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-corporate-blue" />
                                    <span className="text-corporate-text-dark dark:text-white font-semibold">20-45 minutos</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-corporate-blue" />
                                    <span className="text-corporate-text-dark dark:text-white font-semibold">Control preciso</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-corporate-blue" />
                                    <span className="text-corporate-text-dark dark:text-white font-semibold">Lesiones complejas</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-corporate-blue" />
                                    <span className="text-corporate-text-dark dark:text-white font-semibold">Tratamiento intensivo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Indicaciones Específicas */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Indicaciones Específicas
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Condiciones que requieren tratamiento intensivo con embolsados
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                condition: 'Heridas Complejas',
                                description: 'Heridas de difícil cicatrización con infección',
                                effectiveness: '95%',
                                sessions: '8-15',
                                icon: Shield,
                                color: 'from-red-500 to-red-600'
                            },
                            {
                                condition: 'Úlceras Crónicas Severas',
                                description: 'Úlceras de larga evolución sin respuesta',
                                effectiveness: '90%',
                                sessions: '10-20',
                                icon: Heart,
                                color: 'from-blue-500 to-blue-600'
                            },
                            {
                                condition: 'Pie Diabético Avanzado',
                                description: 'Complicaciones severas del pie diabético',
                                effectiveness: '88%',
                                sessions: '12-18',
                                icon: Activity,
                                color: 'from-green-500 to-green-600'
                            },
                            {
                                condition: 'Quemaduras',
                                description: 'Tratamiento de quemaduras superficiales',
                                effectiveness: '92%',
                                sessions: '8-15',
                                icon: Zap,
                                color: 'from-orange-500 to-orange-600'
                            },
                            {
                                condition: 'Infecciones Resistentes',
                                description: 'Infecciones cutáneas que no responden',
                                effectiveness: '94%',
                                sessions: '10-16',
                                icon: Star,
                                color: 'from-purple-500 to-purple-600'
                            },
                            {
                                condition: 'Problemas Circulatorios',
                                description: 'Trastornos circulatorios periféricos severos',
                                effectiveness: '87%',
                                sessions: '12-20',
                                icon: Target,
                                color: 'from-indigo-500 to-indigo-600'
                            }
                        ].map((condition, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
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
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Proceso de Aplicación Avanzado
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Un proceso especializado y controlado paso a paso
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: '1',
                                title: 'Evaluación Completa',
                                description: 'Evaluación detallada de la lesión y planificación',
                                icon: Stethoscope,
                                color: 'from-blue-500 to-blue-600'
                            },
                            {
                                step: '2',
                                title: 'Preparación Avanzada',
                                description: 'Preparación del equipo especializado y protocolos',
                                icon: Shield,
                                color: 'from-green-500 to-green-600'
                            },
                            {
                                step: '3',
                                title: 'Embolsado Controlado',
                                description: 'Aplicación con control preciso de concentración',
                                icon: Package,
                                color: 'from-purple-500 to-purple-600'
                            },
                            {
                                step: '4',
                                title: 'Monitoreo Continuo',
                                description: 'Monitoreo durante todo el tratamiento',
                                icon: Activity,
                                color: 'from-orange-500 to-orange-600'
                            }
                        ].map((step, index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600">
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
            <section className="py-20 bg-gradient-to-br from-corporate-blue/5 to-corporate-blue-light/5 dark:from-corporate-blue/10 dark:to-corporate-blue-light/10">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Beneficios y Resultados Esperados
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Efectos terapéuticos intensivos y duraderos
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                icon: Shield,
                                title: 'Efecto Antiséptico Intensivo',
                                description: 'Eliminación completa de microorganismos',
                                percentage: '98%'
                            },
                            {
                                icon: Activity,
                                title: 'Regeneración Acelerada',
                                description: 'Cicatrización más rápida y efectiva',
                                percentage: '95%'
                            },
                            {
                                icon: Heart,
                                title: 'Mejora Circulatoria',
                                description: 'Optimización del flujo sanguíneo local',
                                percentage: '92%'
                            },
                            {
                                icon: Zap,
                                title: 'Antiinflamatorio Potente',
                                description: 'Reducción significativa de inflamación',
                                percentage: '94%'
                            },
                            {
                                icon: Star,
                                title: 'Analgésico Efectivo',
                                description: 'Alivio del dolor local',
                                percentage: '90%'
                            },
                            {
                                icon: Target,
                                title: 'Efectos Duraderos',
                                description: 'Resultados que se mantienen en el tiempo',
                                percentage: '93%'
                            }
                        ].map((beneficio, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
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
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-8 text-center shadow-lg">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-2">8-20</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Sesiones Recomendadas</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-8 text-center shadow-lg">
                            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-corporate-blue mb-2">20-45min</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Duración Sesión</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-8 text-center shadow-lg">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-2">24h</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Primeros Resultados</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-8 text-center shadow-lg">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-2">96%</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Satisfacción</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <FAQSection 
                faqs={faqs}
                title="Preguntas Frecuentes"
                subtitle="Resolvemos tus dudas sobre los embolsados"
            />

            {/* CTA Section */}
            <CTASection
                title="¿Listo para un tratamiento intensivo?"
                subtitle="Agenda tu cita y experimenta los beneficios avanzados de los embolsados"
            />

            
        </div>
    );
}