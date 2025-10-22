import { Shield, ArrowRight, Activity, Heart, Stethoscope, Sparkles, Zap, CheckCircle, Star, Clock, Target, Users, Package } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import FAQSection from '@/components/ui/FAQSection';
import { CTASection } from '@/components/ui/CTASection';
import { ContactInfoSection } from '@/components/ui/ContactInfoSection';

export const metadata = {
    title: 'Bolsa Ozonizada de Ozonoterapia | Ozono Vida',
    description: 'Bolsa ozonisada para tratamiento de heridas, úlceras y lesiones cutáneas. Técnica tópica segura y efectiva con ozono.',
};

export default function BolsaOzonizadaPage() {
    const faqs = [
        {
            pregunta: '¿Qué es la bolsa ozonisada?',
            respuesta: 'La bolsa ozonisada es una técnica que consiste en colocar la zona afectada (generalmente una extremidad) dentro de una bolsa hermética llena de ozono. Esta aplicación tópica permite que el ozono actúe directamente sobre la piel y tejidos superficiales.'
        },
        {
            pregunta: '¿Para qué condiciones está indicada?',
            respuesta: 'Está indicada para heridas infectadas, úlceras crónicas, pie diabético, quemaduras, dermatitis, psoriasis, infecciones cutáneas, problemas circulatorios periféricos y cualquier lesión que requiera tratamiento tópico con ozono.'
        },
        {
            pregunta: '¿Cuánto dura una sesión?',
            respuesta: 'Una sesión de bolsa ozonisada dura entre 15-30 minutos. El tiempo depende del tipo de lesión y la respuesta del paciente. Es un tratamiento cómodo y relajante.'
        },
        {
            pregunta: '¿Es segura esta técnica?',
            respuesta: 'Sí, es una técnica muy segura cuando se realiza por profesionales capacitados. No produce efectos secundarios significativos y es bien tolerada por la mayoría de pacientes.'
        },
        {
            pregunta: '¿Cuántas sesiones se necesitan?',
            respuesta: 'El número de sesiones varía según la condición. Generalmente se requieren entre 5-15 sesiones para heridas agudas y 10-20 sesiones para condiciones crónicas como úlceras.'
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark min-h-[70vh] flex items-center text-white overflow-hidden">
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/applications/bolza_ozonizada.png"
                        alt="Bolsa Ozonizada de Ozonoterapia"
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
                                { label: 'Bolsa Ozonizada' }
                            ]}
                        />
                    </div>

                    <div className="max-w-4xl">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-corporate-blue/30 backdrop-blur-md border border-cyan-300/50 text-cyan-100 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg">
                            <Package className="w-4 h-4 text-cyan-300" />
                            <span>Tratamiento Tópico</span>
                        </div>

                        {/* Título */}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                            <span className="text-white">Bolsa</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 block mt-2">
                                Ozonizada
                            </span>
                        </h1>

                        {/* Descripción */}
                        <p className="text-xl md:text-2xl text-cyan-50 mb-10 leading-relaxed font-light drop-shadow-lg">
                            Tratamiento tópico con ozono para heridas, úlceras y lesiones cutáneas. Técnica segura y efectiva.
                        </p>

                        {/* Características principales */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4">
                                <Package className="w-6 h-6 text-cyan-300" />
                                <span className="text-cyan-100 font-medium">Aplicación Tópica</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4">
                                <Shield className="w-6 h-6 text-cyan-300" />
                                <span className="text-cyan-100 font-medium">Antiséptico</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4">
                                <Activity className="w-6 h-6 text-cyan-300" />
                                <span className="text-cyan-100 font-medium">Regeneración</span>
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
                                ¿Qué es la Bolsa Ozonizada?
                            </h2>
                            <p className="text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-6">
                                La bolsa ozonisada es una técnica que consiste en colocar la zona afectada (generalmente una extremidad) dentro de una bolsa hermética llena de ozono. Esta aplicación tópica permite que el ozono actúe directamente sobre la piel y tejidos superficiales.
                            </p>
                            <p className="text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-8">
                                Es especialmente efectiva para el tratamiento de heridas infectadas, úlceras crónicas, pie diabético y problemas circulatorios periféricos. La técnica es no invasiva y proporciona efectos antisépticos y regenerativos.
                            </p>
                            <div className="flex flex-wrap items-center gap-6 text-corporate-blue dark:text-cyan-400">
                                <div className="flex items-center space-x-2">
                                    <Package className="w-5 h-5" />
                                    <span className="font-semibold">Aplicación Tópica</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Shield className="w-5 h-5" />
                                    <span className="font-semibold">Antiséptico</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Activity className="w-5 h-5" />
                                    <span className="font-semibold">Regeneración</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/applications/bolza_ozonizada.png"
                                alt="Técnica de bolsa ozonisada"
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
                            Condiciones que se benefician del tratamiento tópico con ozono
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                condition: 'Heridas Infectadas',
                                description: 'Tratamiento de heridas con infección bacteriana',
                                effectiveness: '95%',
                                sessions: '5-10',
                                icon: Shield,
                                color: 'from-red-500 to-red-600'
                            },
                            {
                                condition: 'Úlceras Crónicas',
                                description: 'Úlceras de difícil cicatrización',
                                effectiveness: '90%',
                                sessions: '10-20',
                                icon: Heart,
                                color: 'from-blue-500 to-blue-600'
                            },
                            {
                                condition: 'Pie Diabético',
                                description: 'Complicaciones del pie en diabetes',
                                effectiveness: '88%',
                                sessions: '8-15',
                                icon: Activity,
                                color: 'from-green-500 to-green-600'
                            },
                            {
                                condition: 'Quemaduras',
                                description: 'Tratamiento de quemaduras superficiales',
                                effectiveness: '92%',
                                sessions: '5-12',
                                icon: Zap,
                                color: 'from-orange-500 to-orange-600'
                            },
                            {
                                condition: 'Dermatitis',
                                description: 'Inflamaciones cutáneas',
                                effectiveness: '85%',
                                sessions: '6-12',
                                icon: Star,
                                color: 'from-purple-500 to-purple-600'
                            },
                            {
                                condition: 'Problemas Circulatorios',
                                description: 'Mejora de la circulación periférica',
                                effectiveness: '87%',
                                sessions: '8-15',
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
                            Un proceso simple y efectivo paso a paso
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: '1',
                                title: 'Evaluación',
                                description: 'Evaluación de la lesión y preparación del área',
                                icon: Stethoscope,
                                color: 'from-blue-500 to-blue-600'
                            },
                            {
                                step: '2',
                                title: 'Preparación',
                                description: 'Limpieza del área y preparación de la bolsa',
                                icon: Shield,
                                color: 'from-green-500 to-green-600'
                            },
                            {
                                step: '3',
                                title: 'Aplicación',
                                description: 'Colocación de la extremidad en la bolsa ozonisada',
                                icon: Package,
                                color: 'from-purple-500 to-purple-600'
                            },
                            {
                                step: '4',
                                title: 'Tratamiento',
                                description: 'Exposición controlada al ozono durante 15-30 min',
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
                            Efectos terapéuticos comprobados en lesiones cutáneas
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                icon: Shield,
                                title: 'Efecto Antiséptico',
                                description: 'Eliminación de bacterias y microorganismos',
                                percentage: '95%'
                            },
                            {
                                icon: Activity,
                                title: 'Regeneración',
                                description: 'Aceleración de la cicatrización',
                                percentage: '90%'
                            },
                            {
                                icon: Heart,
                                title: 'Mejora Circulatoria',
                                description: 'Optimización del flujo sanguíneo local',
                                percentage: '88%'
                            },
                            {
                                icon: Zap,
                                title: 'Antiinflamatorio',
                                description: 'Reducción de la inflamación',
                                percentage: '92%'
                            },
                            {
                                icon: Star,
                                title: 'Analgésico',
                                description: 'Alivio del dolor local',
                                percentage: '85%'
                            },
                            {
                                icon: Target,
                                title: 'Efectos Duraderos',
                                description: 'Resultados que se mantienen',
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
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-2">5-15</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Sesiones Promedio</div>
                        </div>
                        <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/5 dark:to-corporate-blue-light/5 rounded-2xl p-4 md:p-8 text-center">
                            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-corporate-blue mb-2">15-30min</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Duración Sesión</div>
                        </div>
                        <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/5 dark:to-corporate-blue-light/5 rounded-2xl p-4 md:p-8 text-center">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-2">48h</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Primeros Resultados</div>
                        </div>
                        <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/5 dark:to-corporate-blue-light/5 rounded-2xl p-4 md:p-8 text-center">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-2">92%</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Satisfacción</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <FAQSection 
                faqs={faqs}
                title="Preguntas Frecuentes"
                subtitle="Resolvemos tus dudas sobre la bolsa ozonisada"
            />

            {/* CTA Section */}
            <CTASection
                title="¿Listo para tratar tus lesiones cutáneas?"
                subtitle="Agenda tu cita y experimenta los beneficios de la bolsa ozonisada"
            />

         
        </div>
    );
}