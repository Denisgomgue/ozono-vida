'use client';

import { Target, CheckCircle, Award, Users, ArrowRight, Phone, Mail, MapPin, Star, Zap, Heart, Shield, ChevronLeft, ChevronRight, Calendar, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import companyData from '@/data/company.json';
import { useState, useEffect } from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export default function MedicinaRegenerativaPage() {
    const [ currentImageIndex, setCurrentImageIndex ] = useState(0);
    const [ openFaqIndex, setOpenFaqIndex ] = useState<number | null>(0);

    // Array de imágenes del hero
    const heroImages = [
        '/images/hero/image1.png',
        '/images/hero/image2.png',
        '/images/hero/image3.png',
        '/images/hero/image4.png',
        '/images/hero/image5.png',
    ];

    // Auto-slider cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [ heroImages.length ]);

    // Funciones de navegación manual
    const goToPrevious = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="services-page min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section con Slider */}
            <section className="relative bg-gradient-to-br from-green-500 to-emerald-600 min-h-[70vh] flex items-center text-white overflow-hidden">
                {/* Slider de imágenes de fondo */}
                <div className="absolute inset-0">
                    {heroImages.map((image, index) => (
                        <div
                            key={image}
                            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <Image
                                src={image}
                                alt={`Medicina Regenerativa ${index + 1}`}
                                fill
                                className="object-cover brightness-75"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>

                {/* Flechas de navegación - Diseño minimalista */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/5 hover:bg-white/20 backdrop-blur-md rounded-full p-4 transition-all duration-300 group border border-white/10"
                    aria-label="Imagen anterior"
                >
                    <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/5 hover:bg-white/20 backdrop-blur-md rounded-full p-4 transition-all duration-300 group border border-white/10"
                    aria-label="Siguiente imagen"
                >
                    <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </button>

                {/* Contenido */}
                <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl relative z-10 py-20">
                    {/* Breadcrumbs mejorados */}
                    <div className="mb-8">
                        <Breadcrumbs
                            items={[
                                { label: 'Servicios', href: '/servicios' },
                                { label: 'Medicina Regenerativa' }
                            ]}
                        />
                    </div>

                    <div className="max-w-3xl">
                        {/* Badge con diseño glassmorphism */}
                        <div className="inline-flex items-center space-x-2 bg-emerald-500/30 backdrop-blur-md border border-emerald-300/50 text-emerald-100 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg">
                            <Target className="w-4 h-4 text-emerald-300" />
                            <span>Medicina Avanzada del Futuro</span>
                        </div>

                        {/* Título con mejor espaciado */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                            <span className="text-white">Medicina</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-300 to-emerald-200 block mt-2">
                                Regenerativa
                            </span>
                        </h1>

                        

                        {/* Botones con mejor diseño */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/reservar-cita" className="group bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center space-x-2">
                                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                <span>Reservar Cita</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/servicios" className="border-2 border-white/30 backdrop-blur-md text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-center hover:border-white">
                                Explorar Servicios
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Indicadores del slider - Diseño moderno */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
                    {heroImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`transition-all duration-300 rounded-full ${index === currentImageIndex
                                ? 'bg-white w-10 h-2'
                                : 'bg-white/40 hover:bg-white/60 w-2 h-2'
                                }`}
                            aria-label={`Ir a imagen ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* ¿Qué es la Medicina Regenerativa? */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                                ¿Qué es la Medicina Regenerativa?
                            </h2>
                            <div className="space-y-6 text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                                <p>
                                    La <strong className="text-green-600">Medicina Regenerativa</strong> es una rama de la medicina que se enfoca en restaurar la estructura y función de tejidos y órganos dañados. Utiliza técnicas avanzadas para estimular los mecanismos naturales de curación del cuerpo.
                                </p>
                                <p>
                                    Esta disciplina combina terapias como la ozonoterapia, plasma rico en plaquetas, terapia celular y otras técnicas innovadoras para promover la regeneración tisular y mejorar la función orgánica.
                                </p>
                                <div className="bg-green-600/10 rounded-xl p-6 border-l-4 border-green-600">
                                    <h3 className="font-bold text-corporate-text-dark dark:text-white mb-3">
                                        Principios Fundamentales
                                    </h3>
                                    <p>
                                        La medicina regenerativa se basa en aprovechar la capacidad innata del cuerpo para curarse a sí mismo, utilizando herramientas que potencian estos procesos naturales de regeneración.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                                <Image
                                    src="/images/services/servicios-medicinaRegenerativa.png"
                                    alt="Medicina Regenerativa - Terapias avanzadas"
                                    width={500}
                                    height={400}
                                    className="w-full h-80 object-cover rounded-xl"
                                />
                                <div className="mt-6">
                                    <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-3">
                                        Técnicas Utilizadas
                                    </h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            <span className="text-sm text-corporate-text-muted dark:text-gray-300">Ozonoterapia</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            <span className="text-sm text-corporate-text-muted dark:text-gray-300">PRP</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            <span className="text-sm text-corporate-text-muted dark:text-gray-300">Terapia Celular</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            <span className="text-sm text-corporate-text-muted dark:text-gray-300">Factores de Crecimiento</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beneficios de la Medicina Regenerativa */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Beneficios de la Medicina Regenerativa
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Esta disciplina ofrece múltiples ventajas para la salud y el bienestar integral
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Regeneración de Tejidos",
                                description: "Estimula la formación de nuevos tejidos sanos y funcionales",
                                icon: Target,
                                color: "green-600"
                            },
                            {
                                title: "Mejora de la Función Orgánica",
                                description: "Restaura y optimiza el funcionamiento de órganos y sistemas",
                                icon: Heart,
                                color: "corporate-red"
                            },
                            {
                                title: "Reducción del Dolor Crónico",
                                description: "Alivia el dolor de forma natural sin medicamentos",
                                icon: Shield,
                                color: "corporate-blue"
                            },
                            {
                                title: "Fortalecimiento Inmunológico",
                                description: "Mejora la respuesta del sistema inmunológico",
                                icon: Award,
                                color: "purple-600"
                            },
                            {
                                title: "Mejora de la Calidad de Vida",
                                description: "Aumenta la energía, vitalidad y bienestar general",
                                icon: Users,
                                color: "orange-500"
                            },
                            {
                                title: "Tratamientos Personalizados",
                                description: "Protocolos adaptados a las necesidades específicas",
                                icon: Zap,
                                color: "pink-500"
                            }
                        ].map((beneficio, index) => {
                            const IconComponent = beneficio.icon;
                            return (
                                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div className={`w-16 h-16 bg-${beneficio.color} rounded-xl flex items-center justify-center mb-6`}>
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-4">
                                        {beneficio.title}
                                    </h3>
                                    <p className="text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                                        {beneficio.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Aplicaciones Específicas */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Aplicaciones Específicas
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            La medicina regenerativa es efectiva para tratar múltiples condiciones de salud con excelentes resultados
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Enfermedades Degenerativas */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                                <Target className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-4">
                                Enfermedades Degenerativas
                            </h3>
                            <ul className="space-y-2 text-corporate-text-muted dark:text-gray-300">
                                <li>• Osteoartritis</li>
                                <li>• Artritis reumatoide</li>
                                <li>• Degeneración discal</li>
                                <li>• Enfermedades neurodegenerativas</li>
                                <li>• Degeneración macular</li>
                            </ul>
                        </div>

                        {/* Lesiones Traumáticas */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-corporate-blue rounded-xl flex items-center justify-center mb-6">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-4">
                                Lesiones Traumáticas
                            </h3>
                            <ul className="space-y-2 text-corporate-text-muted dark:text-gray-300">
                                <li>• Fracturas complejas</li>
                                <li>• Lesiones de ligamentos</li>
                                <li>• Daño muscular severo</li>
                                <li>• Lesiones de tendones</li>
                                <li>• Traumatismos deportivos</li>
                            </ul>
                        </div>

                        {/* Problemas Cardiovasculares */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-corporate-red rounded-xl flex items-center justify-center mb-6">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-4">
                                Problemas Cardiovasculares
                            </h3>
                            <ul className="space-y-2 text-corporate-text-muted dark:text-gray-300">
                                <li>• Enfermedad arterial periférica</li>
                                <li>• Isquemia cardíaca</li>
                                <li>• Problemas de circulación</li>
                                <li>• Ulceras venosas</li>
                                <li>• Gangrena diabética</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proceso de Tratamiento */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Nuestro Proceso de Tratamiento
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Un enfoque sistemático y personalizado para cada paciente
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Evaluación Inicial",
                                description: "Análisis completo de tu condición médica y necesidades específicas"
                            },
                            {
                                step: "02",
                                title: "Plan Personalizado",
                                description: "Desarrollo de un protocolo de tratamiento adaptado a tu caso"
                            },
                            {
                                step: "03",
                                title: "Aplicación de Terapias",
                                description: "Implementación de las técnicas regenerativas más adecuadas"
                            },
                            {
                                step: "04",
                                title: "Seguimiento y Monitoreo",
                                description: "Evaluación continua de resultados y ajustes del tratamiento"
                            }
                        ].map((paso, index) => (
                            <div key={index} className="text-center">
                                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                                    {paso.step}
                                </div>
                                <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-4">
                                    {paso.title}
                                </h3>
                                <p className="text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                                    {paso.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Proceso del Tratamiento */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Nuestro Proceso de Tratamiento
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Un enfoque sistemático y personalizado para cada paciente
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Evaluación Integral",
                                description: "Análisis completo de tu condición médica y necesidades específicas"
                            },
                            {
                                step: "02",
                                title: "Plan Personalizado",
                                description: "Desarrollo de un protocolo de tratamiento adaptado a tu caso"
                            },
                            {
                                step: "03",
                                title: "Aplicación de Terapias",
                                description: "Implementación de las técnicas regenerativas más adecuadas"
                            },
                            {
                                step: "04",
                                title: "Seguimiento y Monitoreo",
                                description: "Evaluación continua de resultados y ajustes del tratamiento"
                            }
                        ].map((paso, index) => (
                            <div key={index} className="text-center">
                                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                                    {paso.step}
                                </div>
                                <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-4">
                                    {paso.title}
                                </h3>
                                <p className="text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                                    {paso.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Duración y Resultados */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                                Resultados y Duración
                            </h2>
                            <div className="space-y-6 text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                                <p>
                                    Los tratamientos de medicina regenerativa pueden mostrar mejoras progresivas durante varios meses, con efectos duraderos a largo plazo. La duración específica depende de la condición tratada y la respuesta individual.
                                </p>
                                <p>
                                    Los resultados iniciales pueden observarse entre 4-8 semanas, con mejoras continuas durante 3-6 meses. Para condiciones crónicas, se recomienda un protocolo de mantenimiento.
                                </p>
                                <div className="bg-green-600/10 rounded-xl p-6 border-l-4 border-green-600">
                                    <h3 className="font-bold text-corporate-text-dark dark:text-white mb-3">
                                        Ventajas del Tratamiento
                                    </h3>
                                    <ul className="space-y-2">
                                        <li>• Efectos duraderos y progresivos</li>
                                        <li>• Mínimos efectos secundarios</li>
                                        <li>• Mejora la calidad de vida</li>
                                        <li>• Reduce la dependencia de medicamentos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-2xl p-8">
                            <div className="grid grid-cols-1 gap-6">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-green-600 mb-2">4-8</div>
                                    <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Semanas para resultados iniciales</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-green-600 mb-2">3-6</div>
                                    <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Meses de mejoras continuas</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-green-600 mb-2">12+</div>
                                    <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Meses de efectos duraderos</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Preguntas Frecuentes */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-green-600/10 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <CheckCircle className="w-4 h-4" />
                            <span>FAQ</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Preguntas Frecuentes sobre Medicina Regenerativa
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Resolvemos las dudas más comunes sobre la medicina regenerativa
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                pregunta: "¿Qué diferencia a la medicina regenerativa de la medicina tradicional?",
                                respuesta: "La medicina regenerativa se enfoca en estimular la capacidad natural del cuerpo para curarse, mientras que la medicina tradicional se centra en tratar síntomas. Buscamos la causa raíz y promovemos la regeneración natural."
                            },
                            {
                                pregunta: "¿Es segura la medicina regenerativa?",
                                respuesta: "Sí, es muy segura. Utilizamos técnicas que aprovechan los mecanismos naturales del cuerpo y minimizamos el uso de medicamentos químicos, reduciendo significativamente los efectos secundarios."
                            },
                            {
                                pregunta: "¿Cuánto tiempo toma ver resultados?",
                                respuesta: "Los resultados iniciales pueden observarse entre 4-8 semanas, con mejoras progresivas durante 3-6 meses. Los efectos son duraderos y continúan mejorando con el tiempo."
                            },
                            {
                                pregunta: "¿Es adecuada para todas las edades?",
                                respuesta: "La medicina regenerativa es beneficiosa para pacientes de todas las edades, desde jóvenes con lesiones deportivas hasta adultos mayores con condiciones degenerativas."
                            },
                            {
                                pregunta: "¿Se puede combinar con otros tratamientos?",
                                respuesta: "Sí, la medicina regenerativa se puede combinar con otros tratamientos médicos para potenciar los resultados y acelerar la recuperación."
                            },
                            {
                                pregunta: "¿Qué condiciones se pueden tratar?",
                                respuesta: "Tratamos enfermedades degenerativas, lesiones traumáticas, problemas cardiovasculares, condiciones autoinmunes y muchas otras patologías que se benefician de la regeneración tisular."
                            }
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-700"
                            >
                                <button
                                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                    className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                                >
                                    <div className="flex items-start space-x-4 flex-1">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${openFaqIndex === index
                                            ? 'bg-green-600 text-white'
                                            : 'bg-green-600/10 text-green-600'
                                            }`}>
                                            <span className="font-bold text-sm">{index + 1}</span>
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold text-corporate-text-dark dark:text-white pt-1">
                                            {faq.pregunta}
                                        </h3>
                                    </div>
                                    <ChevronDown
                                        className={`w-6 h-6 text-green-600 flex-shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'max-h-96' : 'max-h-0'
                                        }`}
                                >
                                    <div className="px-6 pb-6 pl-20">
                                        <div className="border-l-4 border-green-600/20 pl-6">
                                            <p className="text-corporate-text-muted dark:text-gray-300 leading-relaxed text-base md:text-lg">
                                                {faq.respuesta}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA adicional */}
                    <div className="mt-12 text-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                        <h3 className="text-2xl font-bold text-corporate-text-dark dark:text-white mb-4">
                            ¿Tienes más preguntas sobre Medicina Regenerativa?
                        </h3>
                        <p className="text-corporate-text-muted dark:text-gray-300 mb-6">
                            Nuestro equipo médico está disponible para resolver todas tus dudas sin compromiso
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`https://wa.me/${companyData.whatsapp.replace(/\s/g, '').replace('+', '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                <Phone className="w-5 h-5" />
                                <span>Consultar por WhatsApp</span>
                            </a>
                            <Link
                                href="/reservar-cita"
                                className="inline-flex items-center justify-center space-x-2 border-2 border-green-600 text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all duration-300"
                            >
                                <Calendar className="w-5 h-5" />
                                <span>Agendar Consulta</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonios */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Testimonios de Pacientes
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Historias reales de pacientes que han transformado su salud con medicina regenerativa
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Patricia Vega",
                                condition: "Osteoartritis Severa",
                                testimonial: "La medicina regenerativa cambió mi vida. Después de años de dolor por artritis, ahora puedo caminar sin molestias y realizar mis actividades diarias normalmente.",
                                rating: 5
                            },
                            {
                                name: "Luis Fernández",
                                condition: "Lesión Deportiva Crónica",
                                testimonial: "Como deportista profesional, la medicina regenerativa me permitió recuperarme completamente de una lesión que parecía imposible de sanar. Excelente tratamiento.",
                                rating: 5
                            },
                            {
                                name: "Rosa Martínez",
                                condition: "Problemas Circulatorios",
                                testimonial: "Los tratamientos regenerativos mejoraron significativamente mi circulación. Ya no tengo problemas de hinchazón y mi calidad de vida mejoró mucho.",
                                rating: 5
                            }
                        ].map((testimonio, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="flex text-yellow-400">
                                        {[ ...Array(testimonio.rating) ].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-current" />
                                        ))}
                                    </div>
                                </div>
                                <blockquote className="text-corporate-text-dark dark:text-white text-lg mb-6 leading-relaxed">
                                    &quot;{testimonio.testimonial}&quot;
                                </blockquote>
                                <div className="border-t pt-6">
                                    <h4 className="font-semibold text-corporate-text-dark dark:text-white">{testimonio.name}</h4>
                                    <p className="text-sm text-corporate-text-muted dark:text-gray-400">{testimonio.condition}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        ¿Listo para regenerar tu salud?
                    </h2>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
                        Descubre cómo la medicina regenerativa puede transformar tu calidad de vida y restaurar tu bienestar.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/reservar-cita" className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                            Consulta Gratuita
                        </Link>
                        <Link
                            href="/reservar-cita"
                            className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                        >
                            Reservar Cita
                        </Link>
                    </div>
                </div>
            </section>

            {/* Información de contacto */}
            <section className="py-16 bg-corporate-gray-light dark:bg-gray-800">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-4">
                            ¿Tienes preguntas sobre Medicina Regenerativa?
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300">
                            Contáctanos y nuestro equipo médico te asesorará sobre estas terapias avanzadas
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-2">Llámanos</h3>
                            <p className="text-corporate-text-muted dark:text-gray-300 mb-4">{companyData.phone}</p>
                            <a href={`tel:${companyData.phone}`} className="text-corporate-blue hover:text-corporate-blue-light font-semibold transition-colors">
                                Llamar ahora
                            </a>
                        </div>

                        <div className="text-center bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-corporate-red rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-2">Escríbenos</h3>
                            <p className="text-corporate-text-muted dark:text-gray-300 mb-4 text-sm">{companyData.email}</p>
                            <a href={`mailto:${companyData.email}`} className="text-corporate-red hover:text-pink-500 font-semibold transition-colors">
                                Enviar email
                            </a>
                        </div>

                        <div className="text-center bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-2">Visítanos</h3>
                            <p className="text-corporate-text-muted dark:text-gray-300 mb-4 text-sm">{companyData.address}</p>
                            <a href={companyData.googleMaps.directions} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-500 font-semibold transition-colors">
                                Cómo llegar
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}