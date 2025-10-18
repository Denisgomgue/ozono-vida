'use client';

import { Shield, Zap, CheckCircle, Clock, Award, Users, ArrowRight, Phone, Mail, MapPin, Star, ChevronLeft, ChevronRight, ChevronDown, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import companyData from '@/data/company.json';
import { useState, useEffect } from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export default function OzonoterapiaPage() {
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
            <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark min-h-[70vh] flex items-center text-white overflow-hidden">
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
                                alt={`Ozonoterapia ${index + 1}`}
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
                                { label: 'Ozonoterapia' }
                            ]}
                        />
                    </div>

                    <div className="max-w-3xl">
                        {/* Badge con diseño glassmorphism */}
                        <div className="inline-flex items-center space-x-2 bg-corporate-blue/30 backdrop-blur-md border border-cyan-300/50 text-cyan-100 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg">
                            <Zap className="w-4 h-4 text-cyan-300" />
                            <span>Tratamiento Médico Avanzado</span>
                        </div>

                        {/* Título con mejor espaciado */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                            <span className="text-white">Ozonoterapia</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 block mt-2">
                                Medicina Regenerativa
                            </span>
                        </h1>

                        

                        {/* Botones con mejor diseño */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/reservar-cita" className="group bg-white text-corporate-blue px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center space-x-2">
                                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                <span>Reservar Cita</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/servicios" className="border-2 border-white/30 backdrop-blur-md text-white hover:bg-white hover:text-corporate-blue px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-center hover:border-white">
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

            {/* ¿Qué es la Ozonoterapia? */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                                ¿Qué es la Ozonoterapia?
                            </h2>
                            <div className="space-y-6 text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                                <p>
                                    La <strong className="text-corporate-blue">Ozonoterapia</strong> es un tratamiento médico alternativo que consiste en la administración de una mezcla de ozono y oxígeno medicinal al paciente. La forma de administración de este compuesto en el cuerpo variará de acuerdo al tipo de patología a tratar.
                                </p>
                                <p>
                                    La Ozonoterapia sirve para mejorar el funcionamiento de los órganos y los tejidos del cuerpo, en general, para el tratamiento de diversas enfermedades y condiciones de salud.
                                </p>
                                <div className="bg-corporate-blue/10 rounded-xl p-6 border-l-4 border-corporate-blue">
                                    <h3 className="font-bold text-corporate-text-dark dark:text-white mb-3">
                                        ¿Qué es el Ozono?
                                    </h3>
                                    <p>
                                        El Ozono es un gas, componente básico del aire limpio, puro y seco. Es un compuesto alotrópico del oxígeno, sin el cual la vida en la tierra sería imposible. La fórmula química de la molécula del ozono es <strong>O₃</strong> (posee tres átomos de oxígeno).
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                                <Image
                                    src="/images/services/servicios-ozonoterapia.png"
                                    alt="Ozonoterapia - Tratamiento médico con ozono"
                                    width={500}
                                    height={400}
                                    className="w-full h-80 object-cover rounded-xl"
                                />
                                <div className="mt-6">
                                    <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-3">
                                        Propiedades del Ozono Medicinal
                                    </h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-corporate-blue-light" />
                                            <span className="text-sm text-corporate-text-muted dark:text-gray-300">Oxigenante</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-corporate-blue-light" />
                                            <span className="text-sm text-corporate-text-muted dark:text-gray-300">Antibacteriano</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-corporate-blue-light" />
                                            <span className="text-sm text-corporate-text-muted dark:text-gray-300">Antiinflamatorio</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4 text-corporate-blue-light" />
                                            <span className="text-sm text-corporate-text-muted dark:text-gray-300">Analgésico</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beneficios de la Ozonoterapia */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Beneficios de la Ozonoterapia
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            La terapia de ozono cuenta con propiedades excepcionales que benefician múltiples sistemas del organismo
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Oxigenante y Revitalizante",
                                description: "Mejora la oxigenación celular y aumenta la energía del organismo",
                                icon: Zap,
                                color: "corporate-blue"
                            },
                            {
                                title: "Antioxidante Potente",
                                description: "Elimina radicales libres y protege contra el envejecimiento celular",
                                icon: Shield,
                                color: "corporate-red"
                            },
                            {
                                title: "Inmunomodulador",
                                description: "Fortalece y regula el sistema inmunológico naturalmente",
                                icon: Award,
                                color: "green-600"
                            },
                            {
                                title: "Bactericida y Germicida",
                                description: "Elimina bacterias, virus y hongos de manera efectiva",
                                icon: Shield,
                                color: "purple-600"
                            },
                            {
                                title: "Analgésico Natural",
                                description: "Reduce el dolor de forma natural sin medicamentos",
                                icon: CheckCircle,
                                color: "orange-500"
                            },
                            {
                                title: "Regenerador de Tejidos",
                                description: "Estimula la regeneración y cicatrización de tejidos",
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

            {/* Enfermedades que Tratamos con Ozonoterapia */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Enfermedades que Tratamos con Ozonoterapia
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            La Ozonoterapia es efectiva para tratar más de 200 enfermedades con excelentes resultados
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "Artrosis de rodilla",
                            "Hernia discal",
                            "Várices",
                            "Hiperplasia benigna de próstata",
                            "Cálculos de vesícula",
                            "Asma bronquial",
                            "Demencia senil",
                            "Pie diabético",
                            "Heridas rebeldes",
                            "Fibromialgia",
                            "Dolores crónicos",
                            "Problemas circulatorios",
                            "Infecciones recurrentes",
                            "Fatiga crónica",
                            "Problemas de piel",
                            "Enfermedades inflamatorias"
                        ].map((condicion, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-corporate-blue-light flex-shrink-0" />
                                    <span className="text-corporate-text-dark dark:text-white font-medium">
                                        {condicion}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Megadosis de Vitamina C */}
                    <div className="mt-12 bg-corporate-blue/10 rounded-2xl p-8 border-l-4 border-corporate-blue">
                        <h3 className="text-2xl font-bold text-corporate-text-dark dark:text-white mb-4">
                            Megadosis de Vitamina C
                        </h3>
                        <p className="text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                            Complementamos los tratamientos con megadosis de Vitamina C para potenciar el sistema inmunológico y acelerar la recuperación.
                        </p>
                    </div>
                </div>
            </section>

            {/* Formas de Aplicación del Ozono */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Tratamiento con Ozono: ¿Cómo se Aplica?
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            La aplicación se realiza de acuerdo a la patología a tratar, existiendo distintas formas de administración
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Intramuscular", image: "/images/applications/aplicacion_intramuscular.png" },
                            { name: "Intraarticular", image: "/images/applications/aplicacion_intraarticular.png" },
                            { name: "Insuflación Rectal", image: "/images/applications/insuflacion_rectal.png" },
                            { name: "Autohemoterapia Mayor", image: "/images/applications/autohemoterapia_mayor.png" },
                            { name: "Autohemoterapia Menor", image: "/images/applications/autohemoterapia.png" },
                            { name: "Sueros Ozonizados", image: "/images/applications/sueros_ozonisados.png" },
                            { name: "Bolsas Ozonizadas", image: "/images/applications/bolza_ozonizada.png" },
                            { name: "Embolsados", image: "/images/applications/embolsados.png" }
                        ].map((aplicacion, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="relative h-48">
                                    <Image
                                        src={aplicacion.image}
                                        alt={aplicacion.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-corporate-text-dark dark:text-white text-center">
                                        {aplicacion.name}
                                    </h3>
                                </div>
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
                                    Los resultados de la Ozonoterapia pueden observarse entre 1-4 semanas después del tratamiento, con efectos que pueden durar 6-12 meses dependiendo de la condición tratada.
                                </p>
                                <p>
                                    Para condiciones crónicas, se recomienda un protocolo de 6-15 sesiones espaciadas cada 1-3 días para obtener resultados óptimos y duraderos.
                                </p>
                                <div className="bg-corporate-blue/10 rounded-xl p-6 border-l-4 border-corporate-blue">
                                    <h3 className="font-bold text-corporate-text-dark dark:text-white mb-3">
                                        Ventajas de la Ozonoterapia
                                    </h3>
                                    <ul className="space-y-2">
                                        <li>• Procedimiento ambulatorio</li>
                                        <li>• Sin efectos secundarios</li>
                                        <li>• No requiere hospitalización</li>
                                        <li>• Regreso inmediato a actividades</li>
                                        <li>• Efectos duraderos y progresivos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 rounded-2xl p-8">
                            <div className="grid grid-cols-1 gap-6">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-corporate-blue mb-2">1-4</div>
                                    <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Semanas para ver resultados</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-corporate-blue mb-2">6-12</div>
                                    <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Meses de duración</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-corporate-blue mb-2">6-15</div>
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
                        <div className="inline-flex items-center space-x-2 bg-corporate-blue/10 text-corporate-blue px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <CheckCircle className="w-4 h-4" />
                            <span>FAQ</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Preguntas Frecuentes
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Resolvemos las dudas más comunes sobre la Ozonoterapia
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                pregunta: "¿Es necesario internarse?",
                                respuesta: "Los tratamientos son totalmente ambulatorios, no requiriendo ningún tipo de internamiento. Luego del tratamiento el paciente puede seguir realizando sus tareas habituales."
                            },
                            {
                                pregunta: "¿Cuántas aplicaciones son necesarias?",
                                respuesta: "En general es necesario realizar entre 6 y 15 sesiones, variando en relación con la edad del paciente y las características de la patología a tratar."
                            },
                            {
                                pregunta: "¿Con qué frecuencia deben realizarse?",
                                respuesta: "Una vez hecha la Historia Clínica, el médico determina la cantidad de sesiones, pudiendo ser necesario una sesión al día."
                            },
                            {
                                pregunta: "¿Son dolorosas las aplicaciones?",
                                respuesta: "Las aplicaciones son prácticamente indoloras, presentando el paciente ocasionalmente ligera rubefacción en el sitio de aplicación."
                            },
                            {
                                pregunta: "¿Cuándo se comienza a estar mejor?",
                                respuesta: "La mejoría en los síntomas varía en relación con el tipo de patología, el tiempo de evolución y la edad del paciente. En general, hay pacientes que después de la primera aplicación ya notan una mejoría, y en la mayoría de los casos no más allá de la cuarta aplicación."
                            },
                            {
                                pregunta: "¿Es curativo?",
                                respuesta: "Depende de la patología que estemos tratando. En casos de hernia de disco llega a ser curativo, en las patologías artrósicas el ozono no puede curar la enfermedad, pero sí suprimir o atenuar los síntomas, mejorando la calidad de vida."
                            },
                            {
                                pregunta: "¿Qué hace el ozono en el cuerpo?",
                                respuesta: "El ozono mejora la circulación sanguínea y el suministro de oxígeno a los tejidos, promoviendo la curación. Además, tiene propiedades antimicrobianas y antioxidantes, ayudando a combatir infecciones y reducir el estrés oxidativo."
                            },
                            {
                                pregunta: "¿El tratamiento de cáncer con ozono se puede realizar en etapa avanzada?",
                                respuesta: "Como en todo tratamiento médico, cuanto más pronto se realice, los resultados serán mejores ya que el organismo puede responder. Tenemos buenos resultados con este tipo de pacientes."
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
                                            ? 'bg-corporate-blue text-white'
                                            : 'bg-corporate-blue/10 text-corporate-blue'
                                            }`}>
                                            <span className="font-bold text-sm">{index + 1}</span>
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold text-corporate-text-dark dark:text-white pt-1">
                                            {faq.pregunta}
                                        </h3>
                                    </div>
                                    <ChevronDown
                                        className={`w-6 h-6 text-corporate-blue flex-shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'max-h-96' : 'max-h-0'
                                        }`}
                                >
                                    <div className="px-6 pb-6 pl-20">
                                        <div className="border-l-4 border-corporate-blue/20 pl-6">
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
                            ¿Tienes más preguntas?
                        </h3>
                        <p className="text-corporate-text-muted dark:text-gray-300 mb-6">
                            Nuestro equipo médico está disponible para resolver todas tus dudas sin compromiso
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`https://wa.me/${companyData.whatsapp.replace(/\s/g, '').replace('+', '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center space-x-2 bg-corporate-blue text-white px-6 py-3 rounded-xl font-semibold hover:bg-corporate-blue-light transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                <Phone className="w-5 h-5" />
                                <span>Consultar por WhatsApp</span>
                            </a>
                            <Link
                                href="/reservar-cita"
                                className="inline-flex items-center justify-center space-x-2 border-2 border-corporate-blue text-corporate-blue px-6 py-3 rounded-xl font-semibold hover:bg-corporate-blue hover:text-white transition-all duration-300"
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
                            Testimonios Reales
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Historias de pacientes que han mejorado su calidad de vida con Ozonoterapia
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "María González",
                                condition: "Artritis de Rodilla",
                                testimonial: "La ozonoterapia cambió completamente mi vida. Después de años sufriendo dolor de rodilla, en solo 4 sesiones ya no siento molestias. El equipo es muy profesional y la atención excelente.",
                                rating: 5
                            },
                            {
                                name: "Carlos Mendoza",
                                condition: "Hernia Discal",
                                testimonial: "Increíble la mejora en mi hernia discal. El tratamiento fue muy efectivo y sin dolor. Definitivamente recomiendo Ozono Vida a todos mis conocidos.",
                                rating: 5
                            },
                            {
                                name: "Ana Rodríguez",
                                condition: "Fibromialgia",
                                testimonial: "Excelente atención y resultados. La ozonoterapia me ayudó a recuperar mi energía y vitalidad. El dolor se redujo significativamente desde las primeras sesiones.",
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
                                    "{testimonio.testimonial}"
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
            <section className="py-20 bg-gradient-to-br from-corporate-blue to-corporate-blue-dark text-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        ¿Listo para mejorar tu salud con Ozonoterapia?
                    </h2>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
                        Agenda tu consulta gratuita y descubre cómo la Ozonoterapia puede mejorar tu calidad de vida.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/reservar-cita" className="bg-white text-corporate-blue px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                            Consulta Gratuita
                        </Link>
                        <Link
                            href="/reservar-cita"
                            className="border-2 border-white text-white hover:bg-white hover:text-corporate-blue px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
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
                            ¿Tienes preguntas sobre la Ozonoterapia?
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300">
                            Contáctanos y nuestro equipo médico te asesorará sin compromiso
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