import { Shield, ArrowRight, Activity, Heart, Stethoscope, Sparkles, Zap, Syringe, CheckCircle, Star, Clock, Target, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import FAQSection from '@/components/ui/FAQSection';
import { CTASection } from '@/components/ui/CTASection';
import { ContactInfoSection } from '@/components/ui/ContactInfoSection';

export const metadata = {
    title: 'Aplicación Intramuscular de Ozonoterapia | Ozono Vida',
    description: 'Aplicación intramuscular de ozono para alivio del dolor muscular, inflamación y regeneración. Técnica segura y efectiva con resultados inmediatos.',
};

export default function IntramuscularPage() {
    const faqs = [
        {
            pregunta: '¿Qué es la aplicación intramuscular de ozono?',
            respuesta: 'La aplicación intramuscular es una técnica que consiste en inyectar ozono directamente en el músculo afectado. Esta aplicación permite una concentración máxima de ozono en la zona específica, proporcionando alivio inmediato del dolor y acelerando la regeneración muscular.'
        },
        {
            pregunta: '¿Para qué condiciones está indicada?',
            respuesta: 'Está indicada para contracturas musculares, lesiones deportivas, fibromialgia, dolor muscular crónico, espasmos musculares, rehabilitación post-quirúrgica y cualquier condición que involucre dolor o inflamación muscular.'
        },
        {
            pregunta: '¿Es dolorosa la aplicación?',
            respuesta: 'La aplicación es mínimamente invasiva y bien tolerada. Se utiliza anestesia local cuando es necesario. La mayoría de pacientes reportan solo una ligera molestia durante la inyección, seguida de alivio inmediato del dolor.'
        },
        {
            pregunta: '¿Cuántas sesiones se necesitan?',
            respuesta: 'El número de sesiones varía según la condición. Generalmente se requieren entre 3-6 sesiones para condiciones agudas y 6-12 sesiones para condiciones crónicas. Los resultados se pueden observar desde la primera sesión.'
        },
        {
            pregunta: '¿Hay contraindicaciones?',
            respuesta: 'Las contraindicaciones son mínimas e incluyen alergia al ozono (extremadamente rara), embarazo en el primer trimestre, y trastornos hemorrágicos severos. Siempre se realiza una evaluación médica previa para determinar la idoneidad del tratamiento.'
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark min-h-[70vh] flex items-center text-white overflow-hidden">
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/applications/aplicacion_intramuscular.png"
                        alt="Aplicación Intramuscular de Ozonoterapia"
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
                                { label: 'Intramuscular' }
                            ]}
                        />
                    </div>

                    <div className="max-w-4xl">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-corporate-blue/30 backdrop-blur-md border border-cyan-300/50 text-cyan-100 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg">
                            <Syringe className="w-4 h-4 text-cyan-300" />
                            <span>Aplicación Directa</span>
                        </div>

                        {/* Título */}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                            <span className="text-white">Aplicación</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 block mt-2">
                                Intramuscular
                            </span>
                        </h1>

                        {/* Descripción */}
                        <p className="text-xl md:text-2xl text-cyan-50 mb-10 leading-relaxed font-light drop-shadow-lg">
                            Inyección directa de ozono en músculos para alivio inmediato del dolor, reducción de inflamación y aceleración de la regeneración muscular.
                        </p>

                        {/* Características principales */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4">
                                <Target className="w-6 h-6 text-cyan-300" />
                                <span className="text-cyan-100 font-medium">Precisión Máxima</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4">
                                <Zap className="w-6 h-6 text-cyan-300" />
                                <span className="text-cyan-100 font-medium">Efectos Inmediatos</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4">
                                <Shield className="w-6 h-6 text-cyan-300" />
                                <span className="text-cyan-100 font-medium">Máxima Seguridad</span>
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
                                ¿Qué es la Aplicación Intramuscular?
                            </h2>
                            <p className="text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-6">
                                La aplicación intramuscular de ozono es una técnica médica avanzada que consiste en inyectar ozono directamente en el músculo afectado. Esta aplicación permite una concentración máxima de ozono en la zona específica, proporcionando efectos terapéuticos inmediatos y duraderos.
                            </p>
                            <p className="text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-8">
                                Es especialmente efectiva para el tratamiento del dolor muscular, inflamación y aceleración de la regeneración tisular. La técnica es mínimamente invasiva y proporciona resultados superiores a los tratamientos convencionales.
                            </p>
                            <div className="flex flex-wrap items-center gap-6 text-corporate-blue dark:text-cyan-400">
                                <div className="flex items-center space-x-2">
                                    <Syringe className="w-5 h-5" />
                                    <span className="font-semibold">Aplicación Directa</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Zap className="w-5 h-5" />
                                    <span className="font-semibold">Efectos Inmediatos</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Heart className="w-5 h-5" />
                                    <span className="font-semibold">Regeneración Acelerada</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/applications/aplicacion_intramuscular.png"
                                alt="Técnica de aplicación intramuscular"
                                width={600}
                                height={400}
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
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
                            Un proceso seguro y eficiente paso a paso
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: '1',
                                title: 'Evaluación Médica',
                                description: 'Examen físico y evaluación de la condición a tratar',
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
                                title: 'Aplicación',
                                description: 'Inyección precisa de ozono en el músculo',
                                icon: Syringe,
                                color: 'from-purple-500 to-purple-600'
                            },
                            {
                                step: '4',
                                title: 'Seguimiento',
                                description: 'Monitoreo y planificación de sesiones',
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
                            Efectos terapéuticos comprobados y resultados medibles
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                icon: Zap,
                                title: 'Alivio Inmediato',
                                description: 'Reducción del dolor desde la primera sesión',
                                percentage: '85%'
                            },
                            {
                                icon: Activity,
                                title: 'Regeneración Acelerada',
                                description: 'Mejora de la cicatrización muscular',
                                percentage: '70%'
                            },
                            {
                                icon: Heart,
                                title: 'Mejora Circulatoria',
                                description: 'Optimización del flujo sanguíneo local',
                                percentage: '90%'
                            },
                            {
                                icon: Shield,
                                title: 'Antiinflamatorio',
                                description: 'Reducción significativa de inflamación',
                                percentage: '80%'
                            },
                            {
                                icon: Sparkles,
                                title: 'Mejora Movilidad',
                                description: 'Aumento de la flexibilidad muscular',
                                percentage: '75%'
                            },
                            {
                                icon: Star,
                                title: 'Satisfacción',
                                description: 'Alta satisfacción del paciente',
                                percentage: '95%'
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
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-2">3-6</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Sesiones Promedio</div>
                        </div>
                        <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/5 dark:to-corporate-blue-light/5 rounded-2xl p-4 md:p-8 text-center">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-2">24h</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Primeros Resultados</div>
                        </div>
                        <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/5 dark:to-corporate-blue-light/5 rounded-2xl p-4 md:p-8 text-center">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-2">15min</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Duración Sesión</div>
                        </div>
                        <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/5 dark:to-corporate-blue-light/5 rounded-2xl p-4 md:p-8 text-center">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-2">90%</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Satisfacción</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <FAQSection 
                faqs={faqs}
                title="Preguntas Frecuentes"
                subtitle="Resolvemos tus dudas sobre la aplicación intramuscular"
            />

            {/* CTA Section */}
            <CTASection
                title="¿Listo para aliviar tu dolor muscular?"
                subtitle="Agenda tu cita y experimenta el alivio inmediato que proporciona la aplicación intramuscular de ozono"
            />

            
        </div>
    );
}