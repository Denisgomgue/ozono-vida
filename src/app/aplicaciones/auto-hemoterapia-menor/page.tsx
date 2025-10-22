import { Shield, ArrowRight, Activity, Heart, Stethoscope, Sparkles, Zap, Droplets, CheckCircle, Star, Clock, Target, Users, Syringe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import FAQSection from '@/components/ui/FAQSection';
import { CTASection } from '@/components/ui/CTASection';
import { ContactInfoSection } from '@/components/ui/ContactInfoSection';

export const metadata = {
    title: 'Auto Hemoterapia Menor de Ozonoterapia | Ozono Vida',
    description: 'Auto hemoterapia menor con ozono para fortalecimiento del sistema inmune, desintoxicación y mejora de la circulación. Tratamiento sistémico efectivo.',
};

export default function AutoHemoterapiaMenorPage() {
    const faqs = [
        {
            pregunta: '¿Qué es la auto hemoterapia menor?',
            respuesta: 'La auto hemoterapia menor es una técnica que consiste en extraer una pequeña cantidad de sangre del paciente (5-10ml), ozonizarla y reinfundirla intramuscularmente. Este proceso activa el sistema inmune y proporciona beneficios sistémicos con mínima invasividad.'
        },
        {
            pregunta: '¿Cuáles son sus principales beneficios?',
            respuesta: 'Los principales beneficios incluyen fortalecimiento del sistema inmune, desintoxicación del organismo, mejora de la circulación sanguínea, aumento de la energía vital, mejoría de la oxigenación celular y activación de los mecanismos de defensa naturales.'
        },
        {
            pregunta: '¿Cuántas sesiones se requieren?',
            respuesta: 'Generalmente se requieren entre 6-12 sesiones para obtener beneficios completos. La frecuencia es semanal o quincenal según las necesidades del paciente. Es un tratamiento que se puede realizar de forma preventiva o terapéutica.'
        },
        {
            pregunta: '¿Es segura esta técnica?',
            respuesta: 'Sí, es una técnica muy segura cuando se realiza por profesionales capacitados. Utiliza la propia sangre del paciente, eliminando riesgos de alergias o rechazo. Solo requiere una pequeña extracción de sangre, similar a un análisis de laboratorio.'
        },
        {
            pregunta: '¿Para quién está indicada?',
            respuesta: 'Está indicada para personas con sistema inmune debilitado, fatiga crónica, procesos inflamatorios, problemas circulatorios, desintoxicación general, prevención de enfermedades y como complemento en tratamientos de enfermedades crónicas.'
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark min-h-[70vh] flex items-center text-white overflow-hidden">
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/applications/autohemoterapia.png"
                        alt="Auto Hemoterapia Menor de Ozonoterapia"
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
                                { label: 'Auto Hemoterapia Menor' }
                            ]}
                        />
                    </div>

                    <div className="max-w-4xl">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-corporate-blue/30 backdrop-blur-md border border-cyan-300/50 text-cyan-100 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg">
                            <Droplets className="w-4 h-4 text-cyan-300" />
                            <span>Tratamiento Sistémico</span>
                        </div>

                        {/* Título */}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                            <span className="text-white">Auto Hemoterapia</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 block mt-2">
                                Menor
                            </span>
                        </h1>

                        {/* Descripción */}
                        <p className="text-xl md:text-2xl text-cyan-50 mb-10 leading-relaxed font-light drop-shadow-lg">
                            Tratamiento sistémico con sangre ozonizada para fortalecimiento del sistema inmune, desintoxicación y mejora de la circulación.
                        </p>

                        {/* Características principales */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4">
                                <Heart className="w-6 h-6 text-cyan-300" />
                                <span className="text-cyan-100 font-medium">Sistema Inmune</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4">
                                <Zap className="w-6 h-6 text-cyan-300" />
                                <span className="text-cyan-100 font-medium">Desintoxicación</span>
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
                                ¿Qué es la Auto Hemoterapia Menor?
                            </h2>
                            <p className="text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-6">
                                La auto hemoterapia menor es una técnica médica que consiste en extraer una pequeña cantidad de sangre del paciente (5-10ml), ozonizarla y reinfundirla intramuscularmente. Este proceso activa el sistema inmune y proporciona beneficios sistémicos con mínima invasividad.
                            </p>
                            <p className="text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-8">
                                Es especialmente efectiva para fortalecer el sistema inmune, desintoxicar el organismo y mejorar la circulación sanguínea. La técnica utiliza la propia sangre del paciente, eliminando riesgos de alergias o rechazo.
                            </p>
                            <div className="flex flex-wrap items-center gap-6 text-corporate-blue dark:text-cyan-400">
                                <div className="flex items-center space-x-2">
                                    <Droplets className="w-5 h-5" />
                                    <span className="font-semibold">Sangre Propia</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Heart className="w-5 h-5" />
                                    <span className="font-semibold">Sistema Inmune</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Activity className="w-5 h-5" />
                                    <span className="font-semibold">Desintoxicación</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/applications/autohemoterapia.png"
                                alt="Técnica de auto hemoterapia menor"
                                width={600}
                                height={400}
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Proceso Detallado */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Proceso de Auto Hemoterapia Menor
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Un proceso seguro y eficiente paso a paso
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: '1',
                                title: 'Extracción',
                                description: 'Extracción de 5-10ml de sangre venosa del paciente',
                                icon: Syringe,
                                color: 'from-red-500 to-red-600',
                                details: 'Similar a un análisis de laboratorio'
                            },
                            {
                                step: '2',
                                title: 'Ozonización',
                                description: 'Mezcla de la sangre con ozono médico',
                                icon: Droplets,
                                color: 'from-blue-500 to-blue-600',
                                details: 'Proceso controlado y seguro'
                            },
                            {
                                step: '3',
                                title: 'Reinfusión',
                                description: 'Inyección intramuscular de la sangre ozonizada',
                                icon: Activity,
                                color: 'from-green-500 to-green-600',
                                details: 'Aplicación en músculo glúteo'
                            },
                            {
                                step: '4',
                                title: 'Activación',
                                description: 'Activación del sistema inmune y desintoxicación',
                                icon: Heart,
                                color: 'from-purple-500 to-purple-600',
                                details: 'Efectos sistémicos inmediatos'
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
                                    <p className="text-sm text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-2">
                                        {step.description}
                                    </p>
                                    <p className="text-xs text-corporate-blue font-medium">
                                        {step.details}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Indicaciones y Beneficios */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Indicaciones */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-8">
                                Indicaciones Principales
                            </h2>
                            <div className="space-y-6">
                                {[
                                    { condition: 'Sistema inmune debilitado', description: 'Fortalecimiento de las defensas naturales' },
                                    { condition: 'Fatiga crónica', description: 'Aumento de la energía vital' },
                                    { condition: 'Procesos inflamatorios', description: 'Reducción de la inflamación sistémica' },
                                    { condition: 'Problemas circulatorios', description: 'Mejora de la circulación sanguínea' },
                                    { condition: 'Desintoxicación general', description: 'Eliminación de toxinas del organismo' },
                                    { condition: 'Prevención de enfermedades', description: 'Refuerzo del sistema inmunológico' },
                                    { condition: 'Enfermedades crónicas', description: 'Complemento en tratamientos existentes' },
                                    { condition: 'Estrés oxidativo', description: 'Reducción del daño celular' }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                                        <div className="w-6 h-6 bg-corporate-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white text-xs font-bold">{index + 1}</span>
                                        </div>
                                        <div>
                                            <span className="font-semibold text-corporate-text-dark dark:text-white block">{item.condition}</span>
                                            <span className="text-sm text-corporate-text-muted dark:text-gray-300">{item.description}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Beneficios */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-8">
                                Beneficios Esperados
                            </h2>
                            <div className="space-y-6">
                                {[
                                    { benefit: 'Fortalecimiento del sistema inmune', percentage: '95%' },
                                    { benefit: 'Mejora de la circulación sanguínea', percentage: '90%' },
                                    { benefit: 'Aumento de la energía vital', percentage: '85%' },
                                    { benefit: 'Desintoxicación del organismo', percentage: '88%' },
                                    { benefit: 'Mejora de la oxigenación celular', percentage: '92%' },
                                    { benefit: 'Reducción del estrés oxidativo', percentage: '87%' },
                                    { benefit: 'Activación de mecanismos de defensa', percentage: '93%' },
                                    { benefit: 'Mejora del bienestar general', percentage: '89%' }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                                        <div className="flex items-center space-x-3">
                                            <CheckCircle className="w-5 h-5 text-corporate-blue flex-shrink-0" />
                                            <span className="text-corporate-text-dark dark:text-white font-medium">{item.benefit}</span>
                                        </div>
                                        <div className="text-lg font-bold text-corporate-blue">
                                            {item.percentage}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ventajas y Seguridad */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Ventajas y Seguridad
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Una técnica segura con múltiples ventajas
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: 'Máxima Seguridad',
                                description: 'Utiliza la propia sangre del paciente, eliminando riesgos de alergias o rechazo',
                                color: 'from-green-500 to-green-600'
                            },
                            {
                                icon: Droplets,
                                title: 'Mínima Invasividad',
                                description: 'Solo requiere una pequeña extracción de sangre, similar a un análisis',
                                color: 'from-blue-500 to-blue-600'
                            },
                            {
                                icon: Heart,
                                title: 'Efectos Sistémicos',
                                description: 'Beneficios que se extienden a todo el organismo',
                                color: 'from-red-500 to-red-600'
                            },
                            {
                                icon: Activity,
                                title: 'Sin Efectos Secundarios',
                                description: 'No produce efectos secundarios significativos',
                                color: 'from-purple-500 to-purple-600'
                            },
                            {
                                icon: Zap,
                                title: 'Resultados Rápidos',
                                description: 'Efectos visibles desde las primeras sesiones',
                                color: 'from-yellow-500 to-yellow-600'
                            },
                            {
                                icon: Star,
                                title: 'Alta Efectividad',
                                description: 'Técnica comprobada con excelentes resultados',
                                color: 'from-orange-500 to-orange-600'
                            }
                        ].map((ventaja, index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600">
                                <div className={`w-14 h-14 bg-gradient-to-r ${ventaja.color} rounded-xl flex items-center justify-center mb-4`}>
                                    <ventaja.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-corporate-text-dark dark:text-white mb-2">
                                    {ventaja.title}
                                </h3>
                                <p className="text-sm text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                                    {ventaja.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Estadísticas */}
            <section className="py-20 bg-gradient-to-br from-corporate-blue/5 to-corporate-blue-light/5 dark:from-corporate-blue/10 dark:to-corporate-blue-light/10">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Resultados y Estadísticas
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Datos comprobados de efectividad
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-8 text-center shadow-lg">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-2">6-12</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Sesiones Recomendadas</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-8 text-center shadow-lg">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-2">15min</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Duración por Sesión</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-8 text-center shadow-lg">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-2">72h</div>
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
                subtitle="Resolvemos tus dudas sobre la auto hemoterapia menor"
            />

            {/* CTA Section */}
            <CTASection
                title="¿Listo para fortalecer tu sistema inmune?"
                subtitle="Agenda tu cita y experimenta los beneficios sistémicos de la auto hemoterapia menor"
            />

            {/* Información de Contacto */}
         
        </div>
    );
}