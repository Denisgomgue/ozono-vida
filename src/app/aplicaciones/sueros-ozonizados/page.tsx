import { Shield, ArrowRight, Activity, Heart, Stethoscope, Sparkles, Zap, Droplets, CheckCircle, Star, Clock, Target, Users, Syringe, Beaker } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import FAQSection from '@/components/ui/FAQSection';
import { CTASection } from '@/components/ui/CTASection';
import { ContactInfoSection } from '@/components/ui/ContactInfoSection';

export const metadata = {
    title: 'Sueros Ozonizados de Ozonoterapia | Ozono Vida',
    description: 'Sueros ozonizados para hidratación, desintoxicación y revitalización celular. Tratamiento intravenoso seguro y efectivo con ozono.',
};

export default function SuerosOzonizadosPage() {
    const faqs = [
        {
            pregunta: '¿Qué son los sueros ozonizados?',
            respuesta: 'Los sueros ozonizados son soluciones salinas o glucosadas que han sido mezcladas con ozono médico. Se administran por vía intravenosa para proporcionar hidratación, desintoxicación y revitalización celular con los beneficios del ozono.'
        },
        {
            pregunta: '¿Cuáles son sus principales beneficios?',
            respuesta: 'Los principales beneficios incluyen hidratación profunda, desintoxicación del organismo, mejora de la circulación, aumento de la energía, mejoría de la oxigenación celular, reducción del estrés oxidativo y revitalización general del organismo.'
        },
        {
            pregunta: '¿Cuánto dura una sesión?',
            respuesta: 'Una sesión de sueros ozonizados dura entre 30-45 minutos. El tiempo depende del volumen de suero administrado y la condición del paciente. Es un tratamiento relajante que se puede realizar cómodamente.'
        },
        {
            pregunta: '¿Es seguro este tratamiento?',
            respuesta: 'Sí, es un tratamiento muy seguro cuando se realiza por profesionales capacitados. Los sueros ozonizados son bien tolerados y no producen efectos secundarios significativos. Siempre se realiza una evaluación médica previa.'
        },
        {
            pregunta: '¿Para quién está indicado?',
            respuesta: 'Está indicado para personas con deshidratación, fatiga crónica, estrés oxidativo, problemas circulatorios, desintoxicación general, mejora del rendimiento físico y mental, y como complemento en tratamientos de diversas condiciones.'
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark min-h-[70vh] flex items-center text-white overflow-hidden">
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/applications/sueros_ozonisados.png"
                        alt="Sueros Ozonizados de Ozonoterapia"
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
                                { label: 'Sueros Ozonizados' }
                            ]}
                        />
                    </div>

                    <div className="max-w-4xl">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-corporate-blue/30 backdrop-blur-md border border-cyan-300/50 text-cyan-100 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg">
                            <Beaker className="w-4 h-4 text-cyan-300" />
                            <span>Hidratación Terapéutica</span>
                        </div>

                        {/* Título */}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                            <span className="text-white">Sueros</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 block mt-2">
                                Ozonizados
                            </span>
                        </h1>

                        {/* Descripción */}
                        <p className="text-xl md:text-2xl text-cyan-50 mb-10 leading-relaxed font-light drop-shadow-lg">
                            Hidratación terapéutica con ozono para desintoxicación, revitalización celular y mejora del bienestar general.
                        </p>

                        {/* Características principales */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4">
                                <Beaker className="w-6 h-6 text-cyan-300" />
                                <span className="text-cyan-100 font-medium">Hidratación Profunda</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4">
                                <Zap className="w-6 h-6 text-cyan-300" />
                                <span className="text-cyan-100 font-medium">Desintoxicación</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4">
                                <Heart className="w-6 h-6 text-cyan-300" />
                                <span className="text-cyan-100 font-medium">Revitalización</span>
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
                                ¿Qué son los Sueros Ozonizados?
                            </h2>
                            <p className="text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-6">
                                Los sueros ozonizados son soluciones salinas o glucosadas que han sido mezcladas con ozono médico. Se administran por vía intravenosa para proporcionar hidratación profunda, desintoxicación y revitalización celular con todos los beneficios del ozono.
                            </p>
                            <p className="text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-8">
                                Es un tratamiento relajante y efectivo que combina la hidratación intravenosa con los efectos terapéuticos del ozono. Ideal para desintoxicación, mejora del rendimiento y revitalización general del organismo.
                            </p>
                            <div className="flex flex-wrap items-center gap-6 text-corporate-blue dark:text-cyan-400">
                                <div className="flex items-center space-x-2">
                                    <Beaker className="w-5 h-5" />
                                    <span className="font-semibold">Hidratación IV</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Zap className="w-5 h-5" />
                                    <span className="font-semibold">Desintoxicación</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Activity className="w-5 h-5" />
                                    <span className="font-semibold">Revitalización</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/applications/sueros_ozonisados.png"
                                alt="Técnica de sueros ozonizados"
                                width={600}
                                height={400}
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Tipos de Sueros */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Tipos de Sueros Ozonizados
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Diferentes formulaciones según las necesidades del paciente
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                type: 'Suero Salino Ozonizado',
                                description: 'Solución salina isotónica con ozono para hidratación básica y desintoxicación',
                                benefits: ['Hidratación profunda', 'Desintoxicación', 'Mejora circulatoria', 'Energía'],
                                volume: '500-1000ml',
                                duration: '30-45min',
                                color: 'from-blue-500 to-blue-600'
                            },
                            {
                                type: 'Suero Glucosado Ozonizado',
                                description: 'Solución glucosada con ozono para energía y revitalización celular',
                                benefits: ['Energía inmediata', 'Revitalización', 'Mejora cognitiva', 'Rendimiento'],
                                volume: '250-500ml',
                                duration: '20-30min',
                                color: 'from-green-500 to-green-600'
                            },
                            {
                                type: 'Suero Multivitamínico Ozonizado',
                                description: 'Solución con vitaminas y minerales ozonizada para nutrición celular',
                                benefits: ['Nutrición celular', 'Antioxidantes', 'Inmunidad', 'Bienestar'],
                                volume: '250-500ml',
                                duration: '30-40min',
                                color: 'from-purple-500 to-purple-600'
                            }
                        ].map((suero, index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600">
                                <div className={`w-16 h-16 bg-gradient-to-r ${suero.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                                    <Beaker className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-3 text-center">
                                    {suero.type}
                                </h3>
                                <p className="text-sm text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-4 text-center">
                                    {suero.description}
                                </p>
                                
                                <div className="space-y-2 mb-4">
                                    {suero.benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-corporate-blue flex-shrink-0" />
                                            <span className="text-sm text-corporate-text-muted dark:text-gray-300">{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-corporate-blue">{suero.volume}</div>
                                        <div className="text-xs text-corporate-text-muted dark:text-gray-300">Volumen</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-corporate-blue">{suero.duration}</div>
                                        <div className="text-xs text-corporate-text-muted dark:text-gray-300">Duración</div>
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
                            Un proceso relajante y seguro paso a paso
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: '1',
                                title: 'Evaluación',
                                description: 'Evaluación médica y selección del tipo de suero',
                                icon: Stethoscope,
                                color: 'from-blue-500 to-blue-600'
                            },
                            {
                                step: '2',
                                title: 'Preparación',
                                description: 'Preparación del suero ozonizado y acceso venoso',
                                icon: Beaker,
                                color: 'from-green-500 to-green-600'
                            },
                            {
                                step: '3',
                                title: 'Administración',
                                description: 'Infusión intravenosa del suero ozonizado',
                                icon: Droplets,
                                color: 'from-purple-500 to-purple-600'
                            },
                            {
                                step: '4',
                                title: 'Monitoreo',
                                description: 'Monitoreo durante la infusión y seguimiento',
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
                            Efectos terapéuticos inmediatos y duraderos
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                icon: Beaker,
                                title: 'Hidratación Profunda',
                                description: 'Hidratación celular profunda y equilibrada',
                                percentage: '95%'
                            },
                            {
                                icon: Zap,
                                title: 'Desintoxicación',
                                description: 'Eliminación de toxinas del organismo',
                                percentage: '88%'
                            },
                            {
                                icon: Heart,
                                title: 'Mejora Circulatoria',
                                description: 'Optimización del flujo sanguíneo',
                                percentage: '92%'
                            },
                            {
                                icon: Activity,
                                title: 'Energía Vital',
                                description: 'Aumento de la energía y vitalidad',
                                percentage: '85%'
                            },
                            {
                                icon: Shield,
                                title: 'Sistema Inmune',
                                description: 'Fortalecimiento del sistema inmune',
                                percentage: '90%'
                            },
                            {
                                icon: Star,
                                title: 'Bienestar General',
                                description: 'Mejora del bienestar y calidad de vida',
                                percentage: '93%'
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
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Sesiones Recomendadas</div>
                        </div>
                        <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/5 dark:to-corporate-blue-light/5 rounded-2xl p-4 md:p-8 text-center">
                            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-corporate-blue mb-2">30-45min</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Duración Sesión</div>
                        </div>
                        <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/5 dark:to-corporate-blue-light/5 rounded-2xl p-4 md:p-8 text-center">
                            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-corporate-blue mb-2">Inmediatos</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Primeros Resultados</div>
                        </div>
                        <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/5 dark:to-corporate-blue-light/5 rounded-2xl p-4 md:p-8 text-center">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-2">95%</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Satisfacción</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <FAQSection 
                faqs={faqs}
                title="Preguntas Frecuentes"
                subtitle="Resolvemos tus dudas sobre los sueros ozonizados"
            />

            {/* CTA Section */}
            <CTASection
                title="¿Listo para hidratarte y revitalizarte?"
                subtitle="Agenda tu cita y experimenta los beneficios de los sueros ozonizados"
            />

        </div>
    );
}