import { Shield, ArrowRight, Activity, Heart, Stethoscope, Sparkles, Zap, Droplets, CheckCircle, Star, Clock, Target, Users, Syringe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import FAQSection from '@/components/ui/FAQSection';
import { CTASection } from '@/components/ui/CTASection';
import { ContactInfoSection } from '@/components/ui/ContactInfoSection';

export const metadata = {
    title: 'Auto Hemoterapia Mayor de Ozonoterapia | Ozono Vida',
    description: 'Auto hemoterapia mayor con ozono para tratamiento sistémico avanzado, regeneración celular y fortalecimiento del sistema inmune. Técnica de alta efectividad.',
};

export default function AutoHemoterapiaMayorPage() {
    const faqs = [
        {
            pregunta: '¿Qué es la auto hemoterapia mayor?',
            respuesta: 'La auto hemoterapia mayor es una técnica que consiste en extraer una cantidad mayor de sangre del paciente (50-200ml), ozonizarla y reinfundirla por vía intravenosa. Este proceso proporciona efectos sistémicos más intensos y duraderos que la hemoterapia menor.'
        },
        {
            pregunta: '¿Cuáles son las principales diferencias con la hemoterapia menor?',
            respuesta: 'La hemoterapia mayor utiliza mayor cantidad de sangre (50-200ml vs 5-10ml), se reinfunde por vía intravenosa (vs intramuscular), proporciona efectos más intensos y duraderos, y está indicada para condiciones más severas o crónicas.'
        },
        {
            pregunta: '¿Para qué condiciones está indicada?',
            respuesta: 'Está indicada para enfermedades crónicas, procesos inflamatorios severos, enfermedades autoinmunes, problemas circulatorios avanzados, desintoxicación profunda, fatiga crónica severa y como complemento en tratamientos oncológicos.'
        },
        {
            pregunta: '¿Cuántas sesiones se requieren?',
            respuesta: 'Generalmente se requieren entre 8-15 sesiones para obtener beneficios completos. La frecuencia es semanal o quincenal según la condición. Es un tratamiento más intensivo que requiere un protocolo específico.'
        },
        {
            pregunta: '¿Es segura esta técnica?',
            respuesta: 'Sí, es una técnica muy segura cuando se realiza por profesionales especializados. Requiere mayor experiencia técnica que la hemoterapia menor. Siempre se realiza una evaluación médica completa previa al tratamiento.'
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark min-h-[70vh] flex items-center text-white overflow-hidden">
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/applications/autohemoterapia_mayor.png"
                        alt="Auto Hemoterapia Mayor de Ozonoterapia"
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
                                { label: 'Auto Hemoterapia Mayor' }
                            ]}
                        />
                    </div>

                    <div className="max-w-4xl">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-corporate-blue/30 backdrop-blur-md border border-cyan-300/50 text-cyan-100 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg">
                            <Droplets className="w-4 h-4 text-cyan-300" />
                            <span>Tratamiento Avanzado</span>
                        </div>

                        {/* Título */}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                            <span className="text-white">Auto Hemoterapia</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 block mt-2">
                                Mayor
                            </span>
                        </h1>

                        {/* Descripción */}
                        <p className="text-xl md:text-2xl text-cyan-50 mb-10 leading-relaxed font-light drop-shadow-lg">
                            Tratamiento sistémico avanzado con sangre ozonizada para regeneración celular profunda y fortalecimiento del sistema inmune.
                        </p>

                        {/* Características principales */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4">
                                <Droplets className="w-6 h-6 text-cyan-300" />
                                <span className="text-cyan-100 font-medium">Mayor Volumen</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4">
                                <Zap className="w-6 h-6 text-cyan-300" />
                                <span className="text-cyan-100 font-medium">Efectos Intensos</span>
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
                                ¿Qué es la Auto Hemoterapia Mayor?
                            </h2>
                            <p className="text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-6">
                                La auto hemoterapia mayor es una técnica médica avanzada que consiste en extraer una cantidad mayor de sangre del paciente (50-200ml), ozonizarla y reinfundirla por vía intravenosa. Este proceso proporciona efectos sistémicos más intensos y duraderos.
                            </p>
                            <p className="text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-8">
                                Es especialmente efectiva para el tratamiento de enfermedades crónicas, procesos inflamatorios severos y regeneración celular profunda. La técnica utiliza mayor volumen de sangre y vía intravenosa para maximizar los efectos terapéuticos.
                            </p>
                            <div className="flex flex-wrap items-center gap-6 text-corporate-blue dark:text-cyan-400">
                                <div className="flex items-center space-x-2">
                                    <Droplets className="w-5 h-5" />
                                    <span className="font-semibold">Mayor Volumen</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Heart className="w-5 h-5" />
                                    <span className="font-semibold">Vía Intravenosa</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Activity className="w-5 h-5" />
                                    <span className="font-semibold">Efectos Intensos</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/applications/autohemoterapia_mayor.png"
                                alt="Técnica de auto hemoterapia mayor"
                                width={600}
                                height={400}
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparación con Hemoterapia Menor */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Hemoterapia Mayor vs Menor
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Comparación de ambas técnicas para elegir la más adecuada
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Hemoterapia Menor */}
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-600">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Droplets className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-corporate-text-dark dark:text-white mb-2">
                                    Hemoterapia Menor
                                </h3>
                                <p className="text-corporate-text-muted dark:text-gray-300">
                                    Técnica básica y preventiva
                                </p>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-blue-500" />
                                    <span className="text-corporate-text-dark dark:text-white">5-10ml de sangre</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-blue-500" />
                                    <span className="text-corporate-text-dark dark:text-white">Vía intramuscular</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-blue-500" />
                                    <span className="text-corporate-text-dark dark:text-white">Efectos moderados</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-blue-500" />
                                    <span className="text-corporate-text-dark dark:text-white">6-12 sesiones</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-blue-500" />
                                    <span className="text-corporate-text-dark dark:text-white">Prevención y mantenimiento</span>
                                </div>
                            </div>
                        </div>

                        {/* Hemoterapia Mayor */}
                        <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 dark:from-corporate-blue/20 dark:to-corporate-blue-light/20 rounded-2xl p-8 shadow-lg border-2 border-corporate-blue">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-corporate-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Droplets className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-corporate-text-dark dark:text-white mb-2">
                                    Hemoterapia Mayor
                                </h3>
                                <p className="text-corporate-text-muted dark:text-gray-300">
                                    Técnica avanzada y terapéutica
                                </p>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-corporate-blue" />
                                    <span className="text-corporate-text-dark dark:text-white font-semibold">50-200ml de sangre</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-corporate-blue" />
                                    <span className="text-corporate-text-dark dark:text-white font-semibold">Vía intravenosa</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-corporate-blue" />
                                    <span className="text-corporate-text-dark dark:text-white font-semibold">Efectos intensos</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-corporate-blue" />
                                    <span className="text-corporate-text-dark dark:text-white font-semibold">8-15 sesiones</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-corporate-blue" />
                                    <span className="text-corporate-text-dark dark:text-white font-semibold">Tratamiento de enfermedades</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proceso Detallado */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Proceso de Auto Hemoterapia Mayor
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Un proceso especializado y seguro paso a paso
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: '1',
                                title: 'Evaluación Médica',
                                description: 'Evaluación completa del paciente y análisis de sangre',
                                icon: Stethoscope,
                                color: 'from-blue-500 to-blue-600',
                                details: 'Examen físico y laboratorios'
                            },
                            {
                                step: '2',
                                title: 'Extracción',
                                description: 'Extracción de 50-200ml de sangre venosa',
                                icon: Syringe,
                                color: 'from-red-500 to-red-600',
                                details: 'Proceso controlado y seguro'
                            },
                            {
                                step: '3',
                                title: 'Ozonización',
                                description: 'Mezcla de la sangre con ozono médico',
                                icon: Droplets,
                                color: 'from-green-500 to-green-600',
                                details: 'Concentración optimizada'
                            },
                            {
                                step: '4',
                                title: 'Reinfusión IV',
                                description: 'Reinfusión intravenosa de la sangre ozonizada',
                                icon: Activity,
                                color: 'from-purple-500 to-purple-600',
                                details: 'Efectos sistémicos inmediatos'
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

            {/* Indicaciones Específicas */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Indicaciones Específicas
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Condiciones que requieren tratamiento intensivo
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                category: 'Enfermedades Crónicas',
                                conditions: ['Diabetes tipo 2', 'Hipertensión arterial', 'Enfermedades cardiovasculares', 'Problemas circulatorios'],
                                icon: Heart,
                                color: 'from-red-500 to-red-600'
                            },
                            {
                                category: 'Procesos Inflamatorios',
                                conditions: ['Artritis reumatoide', 'Enfermedad de Crohn', 'Colitis ulcerosa', 'Lupus eritematoso'],
                                icon: Activity,
                                color: 'from-orange-500 to-orange-600'
                            },
                            {
                                category: 'Sistema Inmune',
                                conditions: ['Inmunodeficiencias', 'Enfermedades autoinmunes', 'Infecciones recurrentes', 'Fatiga crónica'],
                                icon: Shield,
                                color: 'from-blue-500 to-blue-600'
                            },
                            {
                                category: 'Desintoxicación',
                                conditions: ['Intoxicación por metales', 'Exposición a toxinas', 'Estrés oxidativo severo', 'Envejecimiento prematuro'],
                                icon: Zap,
                                color: 'from-green-500 to-green-600'
                            },
                            {
                                category: 'Oncología',
                                conditions: ['Complemento oncológico', 'Reducción efectos secundarios', 'Fortalecimiento inmune', 'Mejora calidad de vida'],
                                icon: Star,
                                color: 'from-purple-500 to-purple-600'
                            },
                            {
                                category: 'Neurología',
                                conditions: ['Esclerosis múltiple', 'Parkinson', 'Alzheimer', 'Neuropatías'],
                                icon: Target,
                                color: 'from-indigo-500 to-indigo-600'
                            }
                        ].map((category, index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600">
                                <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                                    <category.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-corporate-text-dark dark:text-white mb-4">
                                    {category.category}
                                </h3>
                                <div className="space-y-2">
                                    {category.conditions.map((condition, idx) => (
                                        <div key={idx} className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-corporate-blue flex-shrink-0" />
                                            <span className="text-sm text-corporate-text-muted dark:text-gray-300">{condition}</span>
                                        </div>
                                    ))}
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
                            Efectos terapéuticos intensos y duraderos
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                icon: Heart,
                                title: 'Regeneración Celular',
                                description: 'Estimulación de la regeneración celular profunda',
                                percentage: '95%'
                            },
                            {
                                icon: Shield,
                                title: 'Sistema Inmune',
                                description: 'Fortalecimiento significativo del sistema inmune',
                                percentage: '92%'
                            },
                            {
                                icon: Zap,
                                title: 'Desintoxicación',
                                description: 'Eliminación profunda de toxinas del organismo',
                                percentage: '88%'
                            },
                            {
                                icon: Activity,
                                title: 'Antiinflamatorio',
                                description: 'Reducción de procesos inflamatorios severos',
                                percentage: '90%'
                            },
                            {
                                icon: Star,
                                title: 'Calidad de Vida',
                                description: 'Mejora significativa de la calidad de vida',
                                percentage: '94%'
                            },
                            {
                                icon: Target,
                                title: 'Efectos Duraderos',
                                description: 'Efectos terapéuticos que se mantienen en el tiempo',
                                percentage: '87%'
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
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-2">8-15</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Sesiones Recomendadas</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-8 text-center shadow-lg">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-2">45min</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Duración por Sesión</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-8 text-center shadow-lg">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-2">96h</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Primeros Resultados</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-8 text-center shadow-lg">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-2">98%</div>
                            <div className="text-xs md:text-sm lg:text-base text-corporate-text-muted dark:text-gray-300 font-medium">Satisfacción</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <FAQSection 
                faqs={faqs}
                title="Preguntas Frecuentes"
                subtitle="Resolvemos tus dudas sobre la auto hemoterapia mayor"
            />

            {/* CTA Section */}
            <CTASection
                title="¿Listo para un tratamiento sistémico avanzado?"
                subtitle="Agenda tu cita y experimenta los beneficios intensos de la auto hemoterapia mayor"
            />

            
        </div>
    );
}