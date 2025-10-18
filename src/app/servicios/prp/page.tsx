'use client';

import { Heart, CheckCircle, Clock, Award, Users, ArrowRight, Phone, Mail, MapPin, Star, Zap, Shield, ChevronLeft, ChevronRight, Calendar, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import companyData from '@/data/company.json';
import { useState, useEffect } from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export default function PRPPage() {
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
            <section className="relative bg-gradient-to-br from-corporate-red to-pink-500 min-h-[70vh] flex items-center text-white overflow-hidden">
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
                                alt={`PRP ${index + 1}`}
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
                                { label: 'Plasma Rico en Plaquetas' }
                            ]}
                        />
                    </div>

                    <div className="max-w-3xl">
                        {/* Badge con diseño glassmorphism */}
                        <div className="inline-flex items-center space-x-2 bg-rose-500/30 backdrop-blur-md border border-pink-300/50 text-pink-100 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg">
                            <Heart className="w-4 h-4 text-pink-300" />
                            <span>Tratamiento Regenerativo Natural</span>
                        </div>

                        {/* Título con mejor espaciado */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                            <span className="text-white">Plasma Rico en</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-300 to-pink-200 block mt-2">
                                Plaquetas (PRP)
                            </span>
                        </h1>

                      

                        {/* Botones con mejor diseño */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/reservar-cita" className="group bg-white text-corporate-red px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center space-x-2">
                                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                <span>Reservar Cita</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/servicios" className="border-2 border-white/30 backdrop-blur-md text-white hover:bg-white hover:text-corporate-red px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-center hover:border-white">
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

            {/* ¿Qué es el PRP? */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                                ¿Qué es el Plasma Rico en Plaquetas?
                            </h2>
                            <div className="space-y-6 text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                                <p>
                                    El <strong className="text-corporate-red">Plasma Rico en Plaquetas (PRP)</strong> es un tratamiento regenerativo que utiliza las propiedades curativas de tu propia sangre. Se extrae una muestra de sangre que se centrifuga para concentrar las plaquetas, que contienen factores de crecimiento naturales.
                                </p>
                                <p>
                                    Las plaquetas son células sanguíneas que desempeñan un papel crucial en la coagulación y la curación de heridas. Contienen más de 30 factores de crecimiento que estimulan la regeneración celular y la formación de nuevos tejidos.
                                </p>
                                <div className="bg-corporate-red/10 rounded-xl p-6 border-l-4 border-corporate-red">
                                    <h3 className="font-bold text-corporate-text-dark dark:text-white mb-3">
                                        Proceso del Tratamiento
                                    </h3>
                                    <p>
                                        1. Extracción de sangre del paciente<br />
                                        2. Centrifugado para separar las plaquetas<br />
                                        3. Concentración de factores de crecimiento<br />
                                        4. Aplicación en la zona a tratar
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                                <Image
                                    src="/images/services/servicios-plasmaRicoPlaquetas.png"
                                    alt="Plasma Rico en Plaquetas - Tratamiento regenerativo"
                                    width={500}
                                    height={400}
                                    className="w-full h-80 object-cover rounded-xl"
                                />
                                <div className="mt-6">
                                    <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-3">
                                        Factores de Crecimiento
                                    </h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-corporate-red" />
                                            <span className="text-sm text-corporate-text-muted dark:text-gray-300">PDGF</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-corporate-red" />
                                            <span className="text-sm text-corporate-text-muted dark:text-gray-300">VEGF</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-corporate-red" />
                                            <span className="text-sm text-corporate-text-muted dark:text-gray-300">EGF</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-corporate-red" />
                                            <span className="text-sm text-corporate-text-muted dark:text-gray-300">TGF-β</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beneficios del PRP */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Beneficios del PRP
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            El Plasma Rico en Plaquetas ofrece múltiples beneficios para la regeneración y curación de tejidos
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Regeneración Celular Acelerada",
                                description: "Estimula la formación de nuevas células y tejidos de forma natural",
                                icon: Heart,
                                color: "corporate-red"
                            },
                            {
                                title: "Reducción de la Inflamación",
                                description: "Disminuye la inflamación y acelera el proceso de curación",
                                icon: Shield,
                                color: "corporate-blue"
                            },
                            {
                                title: "Mejora de la Circulación",
                                description: "Promueve la formación de nuevos vasos sanguíneos",
                                icon: Zap,
                                color: "green-600"
                            },
                            {
                                title: "Estimulación del Colágeno",
                                description: "Aumenta la producción de colágeno para mayor firmeza",
                                icon: Award,
                                color: "purple-600"
                            },
                            {
                                title: "Curación Más Rápida",
                                description: "Reduce significativamente el tiempo de recuperación",
                                icon: Clock,
                                color: "orange-500"
                            },
                            {
                                title: "Efecto Anti-edad Natural",
                                description: "Rejuvenece la piel y los tejidos de forma natural",
                                icon: Users,
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

            {/* Aplicaciones del PRP */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Aplicaciones del PRP
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            El PRP es efectivo para tratar múltiples condiciones médicas y estéticas con excelentes resultados
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Lesiones Deportivas */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-corporate-red rounded-xl flex items-center justify-center mb-6">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-4">
                                Lesiones Deportivas
                            </h3>
                            <ul className="space-y-2 text-corporate-text-muted dark:text-gray-300">
                                <li>• Tendinitis del manguito rotador</li>
                                <li>• Lesiones de ligamentos</li>
                                <li>• Distensiones musculares</li>
                                <li>• Esguinces de tobillo</li>
                                <li>• Lesiones de rodilla</li>
                            </ul>
                        </div>

                        {/* Osteoartritis */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-corporate-blue rounded-xl flex items-center justify-center mb-6">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-4">
                                Osteoartritis
                            </h3>
                            <ul className="space-y-2 text-corporate-text-muted dark:text-gray-300">
                                <li>• Artritis de rodilla</li>
                                <li>• Artritis de cadera</li>
                                <li>• Artritis de hombro</li>
                                <li>• Espondilosis cervical</li>
                                <li>• Artritis de tobillo</li>
                            </ul>
                        </div>

                        {/* Estética y Rejuvenecimiento */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                                <Award className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-4">
                                Estética y Rejuvenecimiento
                            </h3>
                            <ul className="space-y-2 text-corporate-text-muted dark:text-gray-300">
                                <li>• Rejuvenecimiento facial</li>
                                <li>• Tratamiento de arrugas</li>
                                <li>• Mejora de textura de piel</li>
                                <li>• Tratamiento de cicatrices</li>
                                <li>• Restauración capilar</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proceso del Tratamiento PRP */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Proceso del Tratamiento PRP
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Un procedimiento seguro y efectivo que utiliza tu propia sangre para la regeneración
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Extracción de Sangre",
                                description: "Se extrae una muestra de sangre del paciente de forma segura"
                            },
                            {
                                step: "02",
                                title: "Centrifugado",
                                description: "La sangre se centrifuga para separar y concentrar las plaquetas"
                            },
                            {
                                step: "03",
                                title: "Preparación del PRP",
                                description: "Se obtiene el plasma rico en plaquetas con factores de crecimiento"
                            },
                            {
                                step: "04",
                                title: "Aplicación",
                                description: "Se inyecta el PRP en la zona a tratar para estimular la regeneración"
                            }
                        ].map((paso, index) => (
                            <div key={index} className="text-center">
                                <div className="w-20 h-20 bg-corporate-red rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
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
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                                Resultados y Duración
                            </h2>
                            <div className="space-y-6 text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                                <p>
                                    Los resultados del PRP pueden observarse entre 2-4 semanas después del tratamiento, con efectos que pueden durar 6-12 meses dependiendo de la condición tratada.
                                </p>
                                <p>
                                    Para condiciones crónicas, se recomienda un protocolo de 3-4 sesiones espaciadas cada 4-6 semanas para obtener resultados óptimos y duraderos.
                                </p>
                                <div className="bg-corporate-red/10 rounded-xl p-6 border-l-4 border-corporate-red">
                                    <h3 className="font-bold text-corporate-text-dark dark:text-white mb-3">
                                        Ventajas del PRP
                                    </h3>
                                    <ul className="space-y-2">
                                        <li>• Procedimiento ambulatorio</li>
                                        <li>• Sin efectos secundarios</li>
                                        <li>• No requiere hospitalización</li>
                                        <li>• Regreso inmediato a actividades</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-corporate-red/10 to-pink-500/10 rounded-2xl p-8">
                            <div className="grid grid-cols-1 gap-6">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-corporate-red mb-2">2-4</div>
                                    <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Semanas para ver resultados</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-corporate-red mb-2">6-12</div>
                                    <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Meses de duración</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-corporate-red mb-2">3-4</div>
                                    <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Sesiones recomendadas</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Preguntas Frecuentes */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-corporate-red/10 text-corporate-red px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <CheckCircle className="w-4 h-4" />
                            <span>FAQ</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Preguntas Frecuentes sobre PRP
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Resolvemos las dudas más comunes sobre el Plasma Rico en Plaquetas
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                pregunta: "¿Es doloroso el tratamiento PRP?",
                                respuesta: "El tratamiento PRP es generalmente bien tolerado. Puede haber una leve molestia durante la extracción de sangre y la inyección, similar a una extracción de sangre rutinaria."
                            },
                            {
                                pregunta: "¿Cuánto tiempo dura cada sesión?",
                                respuesta: "Una sesión completa de PRP dura aproximadamente 45-60 minutos, incluyendo la extracción de sangre, procesamiento y aplicación."
                            },
                            {
                                pregunta: "¿Hay efectos secundarios?",
                                respuesta: "Los efectos secundarios son mínimos y temporales. Puede haber leve hinchazón, enrojecimiento o sensibilidad en el área tratada por 24-48 horas."
                            },
                            {
                                pregunta: "¿Cuándo puedo ver resultados?",
                                respuesta: "Los primeros resultados pueden observarse entre 2-4 semanas, con mejoras continuas durante los siguientes 3-6 meses."
                            },
                            {
                                pregunta: "¿Es seguro el PRP?",
                                respuesta: "Sí, es muy seguro ya que utiliza tu propia sangre, eliminando riesgos de reacciones alérgicas o transmisión de enfermedades."
                            },
                            {
                                pregunta: "¿Cuántas sesiones necesito?",
                                respuesta: "Generalmente se requieren 3-4 sesiones espaciadas cada 4-6 semanas para obtener resultados óptimos, dependiendo de la condición tratada."
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
                                            ? 'bg-corporate-red text-white'
                                            : 'bg-corporate-red/10 text-corporate-red'
                                            }`}>
                                            <span className="font-bold text-sm">{index + 1}</span>
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold text-corporate-text-dark dark:text-white pt-1">
                                            {faq.pregunta}
                                        </h3>
                                    </div>
                                    <ChevronDown
                                        className={`w-6 h-6 text-corporate-red flex-shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'max-h-96' : 'max-h-0'
                                        }`}
                                >
                                    <div className="px-6 pb-6 pl-20">
                                        <div className="border-l-4 border-corporate-red/20 pl-6">
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
                            ¿Tienes más preguntas sobre PRP?
                        </h3>
                        <p className="text-corporate-text-muted dark:text-gray-300 mb-6">
                            Nuestro equipo médico está disponible para resolver todas tus dudas sin compromiso
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`https://wa.me/${companyData.whatsapp.replace(/\s/g, '').replace('+', '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center space-x-2 bg-corporate-red text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-500 transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                <Phone className="w-5 h-5" />
                                <span>Consultar por WhatsApp</span>
                            </a>
                            <Link
                                href="/reservar-cita"
                                className="inline-flex items-center justify-center space-x-2 border-2 border-corporate-red text-corporate-red px-6 py-3 rounded-xl font-semibold hover:bg-corporate-red hover:text-white transition-all duration-300"
                            >
                                <Calendar className="w-5 h-5" />
                                <span>Agendar Consulta</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonios */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Testimonios de Pacientes
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Historias reales de pacientes que han mejorado su calidad de vida con PRP
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Roberto Silva",
                                condition: "Tendinitis de Hombro",
                                testimonial: "Después de 3 sesiones de PRP, mi tendinitis del hombro mejoró significativamente. Ya no tengo dolor y puedo realizar mis actividades deportivas normalmente.",
                                rating: 5
                            },
                            {
                                name: "Carmen López",
                                condition: "Artritis de Rodilla",
                                testimonial: "El PRP ha sido una bendición para mis rodillas. El dolor se redujo considerablemente y mi movilidad mejoró mucho. Lo recomiendo totalmente.",
                                rating: 5
                            },
                            {
                                name: "Miguel Torres",
                                condition: "Lesión Deportiva",
                                testimonial: "Como deportista, el PRP me ayudó a recuperarme más rápido de mi lesión. Los resultados fueron excelentes y sin efectos secundarios.",
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
            <section className="py-20 bg-gradient-to-br from-corporate-red to-pink-500 text-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        ¿Listo para regenerar tus tejidos con PRP?
                    </h2>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
                        Descubre cómo el Plasma Rico en Plaquetas puede mejorar tu salud y calidad de vida de forma natural.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/reservar-cita" className="bg-white text-corporate-red px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                            Consulta Gratuita
                        </Link>
                        <Link
                            href="/reservar-cita"
                            className="border-2 border-white text-white hover:bg-white hover:text-corporate-red px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
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
                            ¿Tienes preguntas sobre el PRP?
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300">
                            Contáctanos y nuestro equipo médico te asesorará sobre este tratamiento regenerativo
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