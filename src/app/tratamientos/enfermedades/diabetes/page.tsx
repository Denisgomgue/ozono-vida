'use client';

import { Shield, CheckCircle, Clock, ArrowRight, Phone, Mail, MapPin, Star, ChevronDown, Calendar, Activity, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import companyData from '@/data/company.json';
import { useState } from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export default function DiabetesPage() {
    const [ openFaqIndex, setOpenFaqIndex ] = useState<number | null>(0);

    return (
        <div className="services-page min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark min-h-[60vh] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/treatments/enfermedades/diabetes_mellitus.png"
                        alt="Tratamiento para Diabetes Mellitus"
                        fill
                        className="object-cover brightness-75"
                        priority
                    />
                </div>

                <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl relative z-10 py-20">
                    <div className="mb-8">
                        <Breadcrumbs
                            items={[
                                { label: 'Tratamientos', href: '/tratamientos' },
                                { label: 'Enfermedades', href: '/tratamientos/enfermedades' },
                                { label: 'Diabetes Mellitus' }
                            ]}
                        />
                    </div>

                    <div className="max-w-3xl">
                        <div className="inline-flex items-center space-x-2 bg-corporate-blue/30 backdrop-blur-md border border-cyan-300/50 text-cyan-100 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg">
                            <Activity className="w-4 h-4 text-cyan-300" />
                            <span>Tratamiento Especializado</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                            <span className="text-white">Tratamiento para</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 block mt-2">
                                Diabetes Mellitus
                            </span>
                        </h1>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/reservar-cita" className="group bg-white text-corporate-blue px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center space-x-2">
                                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                <span>Reservar Cita</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/tratamientos/enfermedades" className="border-2 border-white/30 backdrop-blur-md text-white hover:bg-white hover:text-corporate-blue px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-center hover:border-white">
                                Ver Otras Enfermedades
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ¿Qué es la Diabetes Mellitus? */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                                ¿Qué es la Diabetes Mellitus?
                            </h2>
                            <div className="space-y-6 text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                                <p>
                                    La <strong className="text-corporate-blue">diabetes mellitus</strong> es una enfermedad crónica que afecta la forma en que el cuerpo procesa la glucosa en la sangre. Se caracteriza por niveles elevados de azúcar que pueden causar complicaciones graves a largo plazo.
                                </p>
                                <p>
                                    La ozonoterapia ha demostrado ser efectiva como tratamiento complementario en diabetes, mejorando la sensibilidad a la insulina, reduciendo complicaciones vasculares y ayudando a controlar los niveles de glucosa.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/treatments/enfermedades/diabetes_mellitus.png"
                                alt="Diabetes Mellitus"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Causas y Síntomas */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Factores de Riesgo */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-corporate-text-dark dark:text-white mb-6">
                                Factores de Riesgo
                            </h3>
                            <div className="space-y-4">
                                {[
                                    'Sobrepeso y obesidad',
                                    'Sedentarismo',
                                    'Antecedentes familiares',
                                    'Edad mayor de 45 años',
                                    'Presión arterial alta',
                                    'Colesterol alto',
                                    'Síndrome de ovario poliquístico'
                                ].map((factor, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-corporate-blue flex-shrink-0 mt-1" />
                                        <span className="text-lg text-corporate-text-muted dark:text-gray-300">{factor}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Síntomas */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-corporate-text-dark dark:text-white mb-6">
                                Síntomas Principales
                            </h3>
                            <div className="space-y-4">
                                {[
                                    'Sed excesiva',
                                    'Micción frecuente',
                                    'Hambre intensa',
                                    'Pérdida de peso inexplicable',
                                    'Fatiga y debilidad',
                                    'Visión borrosa',
                                    'Cicatrización lenta de heridas'
                                ].map((sintoma, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <Heart className="w-6 h-6 text-corporate-red flex-shrink-0 mt-1" />
                                        <span className="text-lg text-corporate-text-muted dark:text-gray-300">{sintoma}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beneficios del Tratamiento */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Beneficios del Tratamiento con Ozonoterapia
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Nuestro tratamiento complementario ofrece múltiples beneficios para el manejo de la diabetes
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: 'Mejora la Sensibilidad a la Insulina',
                                description: 'Ayuda al cuerpo a utilizar mejor la insulina disponible'
                            },
                            {
                                icon: Activity,
                                title: 'Reduce Complicaciones',
                                description: 'Previene y trata complicaciones vasculares de la diabetes'
                            },
                            {
                                icon: Heart,
                                title: 'Mejora la Circulación',
                                description: 'Optimiza el flujo sanguíneo y oxigenación de tejidos'
                            },
                            {
                                icon: CheckCircle,
                                title: 'Cicatrización Mejorada',
                                description: 'Acelera la curación de heridas diabéticas'
                            },
                            {
                                icon: Clock,
                                title: 'Control Glucémico',
                                description: 'Ayuda a estabilizar los niveles de glucosa en sangre'
                            },
                            {
                                icon: Star,
                                title: 'Previene Neuropatía',
                                description: 'Reduce el riesgo de daño nervioso por diabetes'
                            }
                        ].map((beneficio, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="w-16 h-16 bg-corporate-blue/10 rounded-xl flex items-center justify-center mb-6">
                                    <beneficio.icon className="w-8 h-8 text-corporate-blue" />
                                </div>
                                <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-4">
                                    {beneficio.title}
                                </h3>
                                <p className="text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                                    {beneficio.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resultados y Duración */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                                Resultados y Duración
                            </h2>
                            <div className="space-y-6 text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                                <p>
                                    Los pacientes con diabetes experimentan mejoras en el control glucémico y reducción de complicaciones desde las primeras semanas de tratamiento.
                                </p>
                                <p>
                                    Se recomienda un protocolo inicial de 15-20 sesiones, seguido de sesiones de mantenimiento mensuales para mantener los beneficios a largo plazo. Debe combinarse con dieta, ejercicio y medicación indicada por su endocrinólogo.
                                </p>
                                <div className="bg-corporate-blue/10 rounded-xl p-6 border-l-4 border-corporate-blue">
                                    <h3 className="font-bold text-corporate-text-dark dark:text-white mb-3">
                                        Ventajas del Tratamiento
                                    </h3>
                                    <ul className="space-y-2">
                                        <li>• Complementa el tratamiento médico convencional</li>
                                        <li>• Reduce riesgo de complicaciones crónicas</li>
                                        <li>• Mejora la calidad de vida del paciente</li>
                                        <li>• Sin efectos secundarios adversos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 rounded-2xl p-8">
                            <div className="grid grid-cols-1 gap-6">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-corporate-blue mb-2">4-6</div>
                                    <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Semanas para notar mejoría</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-corporate-blue mb-2">15-20</div>
                                    <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Sesiones iniciales recomendadas</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-corporate-blue mb-2">70%</div>
                                    <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Mejora en control glucémico</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Preguntas Frecuentes */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Preguntas Frecuentes
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                pregunta: '¿La ozonoterapia puede curar la diabetes?',
                                respuesta: 'La ozonoterapia no cura la diabetes, pero es un tratamiento complementario muy efectivo que ayuda a mejorar el control glucémico, reduce complicaciones y mejora la calidad de vida del paciente.'
                            },
                            {
                                pregunta: '¿Puedo dejar mi medicación si empiezo ozonoterapia?',
                                respuesta: 'No. La ozonoterapia es un tratamiento complementario que debe usarse junto con su medicación habitual. Cualquier ajuste en medicamentos debe ser realizado solo por su endocrinólogo.'
                            },
                            {
                                pregunta: '¿Cuántas sesiones necesito?',
                                respuesta: 'Se recomiendan 15-20 sesiones iniciales realizadas 2-3 veces por semana, seguidas de sesiones de mantenimiento mensuales. El plan se personaliza según la respuesta de cada paciente.'
                            },
                            {
                                pregunta: '¿El tratamiento ayuda con las complicaciones de la diabetes?',
                                respuesta: 'Sí, la ozonoterapia es especialmente efectiva para tratar y prevenir complicaciones como pie diabético, neuropatía, problemas de cicatrización y complicaciones vasculares.'
                            },
                            {
                                pregunta: '¿Es seguro para pacientes con diabetes tipo 1 y tipo 2?',
                                respuesta: 'Sí, la ozonoterapia es segura y beneficiosa tanto para diabetes tipo 1 como tipo 2. Sin embargo, cada caso debe ser evaluado individualmente por nuestro equipo médico.'
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                                <button
                                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                >
                                    <div className="flex items-start space-x-4 flex-1">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${openFaqIndex === index
                                            ? 'bg-corporate-blue text-white'
                                            : 'bg-corporate-blue/10 text-corporate-blue'
                                            }`}>
                                            <span className="font-bold text-sm">{index + 1}</span>
                                        </div>
                                        <span className="text-lg font-semibold text-corporate-text-dark dark:text-white pr-8">
                                            {faq.pregunta}
                                        </span>
                                    </div>
                                    <ChevronDown
                                        className={`w-6 h-6 text-corporate-blue flex-shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                {openFaqIndex === index && (
                                    <div className="px-8 pb-6">
                                        <div className="ml-14 text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                                            {faq.respuesta}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 bg-gradient-to-br from-corporate-blue to-corporate-blue-dark text-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-cyan-50 drop-shadow-lg">
                        Comienza tu Tratamiento Hoy
                    </h2>
                    <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-cyan-100 leading-relaxed">
                        Mejora el control de tu diabetes y previene complicaciones. Agenda tu cita y recupera tu bienestar.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/reservar-cita"
                            className="bg-white text-corporate-blue px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center justify-center space-x-2"
                        >
                            <Calendar className="w-5 h-5" />
                            <span>Reservar Cita</span>
                        </Link>
                        <a
                            href={`https://wa.me/${companyData.whatsapp.replace(/\s/g, '').replace('+', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-white text-white hover:bg-white hover:text-corporate-blue px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
                        >
                            <Phone className="w-5 h-5" />
                            <span>Contactar por WhatsApp</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Información de Contacto */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-corporate-blue rounded-xl flex items-center justify-center flex-shrink-0">
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-corporate-text-dark dark:text-white mb-2">Teléfono</h3>
                                <p className="text-corporate-text-muted dark:text-gray-300">{companyData.phone}</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-corporate-blue rounded-xl flex items-center justify-center flex-shrink-0">
                                <Mail className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-corporate-text-dark dark:text-white mb-2">Email</h3>
                                <p className="text-corporate-text-muted dark:text-gray-300">{companyData.email}</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-corporate-blue rounded-xl flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-corporate-text-dark dark:text-white mb-2">Ubicación</h3>
                                <p className="text-corporate-text-muted dark:text-gray-300">{companyData.address}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

