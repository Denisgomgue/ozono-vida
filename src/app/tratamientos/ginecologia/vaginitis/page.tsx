'use client';

import { Shield, CheckCircle, Clock, ArrowRight, Phone, Mail, MapPin, Star, ChevronDown, Calendar, Activity, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import companyData from '@/data/company.json';
import { useState } from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export default function VaginitisPage() {
    const [ openFaqIndex, setOpenFaqIndex ] = useState<number | null>(0);

    return (
        <div className="services-page min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark min-h-[60vh] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/treatments/ginecologia/vaginitis.png"
                        alt="Tratamiento para Vaginitis"
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
                                { label: 'Ginecología', href: '/tratamientos/ginecologia' },
                                { label: 'Vaginitis' }
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
                                Vaginitis
                            </span>
                        </h1>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/reservar-cita" className="group bg-white text-corporate-blue px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center space-x-2">
                                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                <span>Reservar Cita</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/tratamientos/ginecologia" className="border-2 border-white/30 backdrop-blur-md text-white hover:bg-white hover:text-corporate-blue px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-center hover:border-white">
                                Ver Otros Tratamientos
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ¿Qué es la Vaginitis? */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                                ¿Qué es la Vaginitis?
                            </h2>
                            <div className="space-y-6 text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                                <p>
                                    La <strong className="text-corporate-blue">vaginitis</strong> es la inflamación de la vagina que puede ser causada por infecciones (bacterianas, por hongos o parásitos), cambios hormonales o irritantes químicos, produciendo flujo anormal, picazón y malestar.
                                </p>
                                <p>
                                    La ozonoterapia es altamente efectiva para tratar todos los tipos de vaginitis, eliminando microorganismos causantes, reduciendo la inflamación y restaurando el equilibrio natural de la flora vaginal sin alterar el pH.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/treatments/ginecologia/vaginitis.png"
                                alt="Vaginitis"
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
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-corporate-text-dark dark:text-white mb-6">
                                Tipos y Causas
                            </h3>
                            <div className="space-y-4">
                                {[
                                    'Vaginosis bacteriana',
                                    'Vaginitis por hongos (Candida)',
                                    'Tricomoniasis',
                                    'Vaginitis atrófica (menopausia)',
                                    'Irritantes químicos',
                                    'Alergias a productos íntimos',
                                    'Desequilibrio hormonal'
                                ].map((causa, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-corporate-blue flex-shrink-0 mt-1" />
                                        <span className="text-lg text-corporate-text-muted dark:text-gray-300">{causa}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-corporate-text-dark dark:text-white mb-6">
                                Síntomas Principales
                            </h3>
                            <div className="space-y-4">
                                {[
                                    'Flujo vaginal anormal',
                                    'Picazón o ardor',
                                    'Mal olor vaginal',
                                    'Irritación y enrojecimiento',
                                    'Dolor durante relaciones',
                                    'Ardor al orinar',
                                    'Malestar pélvico'
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
                            Tratamiento efectivo para todos los tipos de vaginitis
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: 'Elimina Microorganismos',
                                description: 'Efecto contra bacterias, hongos y parásitos'
                            },
                            {
                                icon: Activity,
                                title: 'Restaura el pH',
                                description: 'Reequilibra el ambiente vaginal natural'
                            },
                            {
                                icon: Heart,
                                title: 'Reduce la Inflamación',
                                description: 'Alivia irritación y enrojecimiento rápidamente'
                            },
                            {
                                icon: CheckCircle,
                                title: 'Fortalece Flora Normal',
                                description: 'Promueve crecimiento de bacterias beneficiosas'
                            },
                            {
                                icon: Clock,
                                title: 'Alivio Rápido',
                                description: 'Mejora síntomas desde la primera aplicación'
                            },
                            {
                                icon: Star,
                                title: 'Previene Recurrencias',
                                description: 'Reduce el riesgo de infecciones futuras'
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
                                    Las pacientes experimentan alivio significativo de síntomas desde la primera sesión, con resolución completa de la vaginitis en pocos días.
                                </p>
                                <p>
                                    Se recomienda un protocolo de 3-6 sesiones según el tipo de vaginitis. Para casos recurrentes, sesiones de mantenimiento mensuales ayudan a prevenir recaídas.
                                </p>
                                <div className="bg-corporate-blue/10 rounded-xl p-6 border-l-4 border-corporate-blue">
                                    <h3 className="font-bold text-corporate-text-dark dark:text-white mb-3">
                                        Ventajas del Tratamiento
                                    </h3>
                                    <ul className="space-y-2">
                                        <li>• Trata todos los tipos de vaginitis</li>
                                        <li>• Sin alterar flora vaginal normal</li>
                                        <li>• Alivio rápido de molestias</li>
                                        <li>• Sin efectos secundarios sistémicos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 rounded-2xl p-8">
                            <div className="grid grid-cols-1 gap-6">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-corporate-blue mb-2">24-48h</div>
                                    <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Para alivio de síntomas</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-corporate-blue mb-2">3-6</div>
                                    <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Sesiones recomendadas</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-corporate-blue mb-2">85%</div>
                                    <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Tasa de curación completa</div>
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
                                pregunta: '¿La ozonoterapia trata todos los tipos de vaginitis?',
                                respuesta: 'Sí, la ozonoterapia es efectiva para vaginitis bacteriana, por hongos, por parásitos (tricomonas) y vaginitis atrófica. Su amplio espectro antimicrobiano la hace versátil.'
                            },
                            {
                                pregunta: '¿Cuándo sentiré alivio?',
                                respuesta: 'La mayoría de pacientes experimentan alivio significativo en 24-48 horas después de la primera sesión. La picazón, ardor y flujo anormal comienzan a disminuir rápidamente.'
                            },
                            {
                                pregunta: '¿Es seguro durante el embarazo?',
                                respuesta: 'La ozonoterapia puede ser usada durante el embarazo bajo supervisión médica apropiada. Es una alternativa segura cuando otros tratamientos están contraindicados.'
                            },
                            {
                                pregunta: '¿Mi pareja necesita tratamiento?',
                                respuesta: 'En algunos casos de vaginitis recurrente, puede ser necesario tratar a la pareja. Su médico evaluará cada caso individualmente.'
                            },
                            {
                                pregunta: '¿Cómo prevenir que vuelva?',
                                respuesta: 'Mantener buena higiene íntima sin excesos, usar ropa interior de algodón, evitar duchas vaginales, usar preservativo, controlar diabetes si la hay, y sesiones de mantenimiento si hay recurrencias.'
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
                        Elimina la vaginitis y recupera tu bienestar íntimo. Agenda tu cita ahora.
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

