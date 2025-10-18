'use client';

import { CheckCircle, ArrowRight, Phone, Mail, MapPin, ChevronDown, Calendar, Activity, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import companyData from '@/data/company.json';
import { useState } from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export default function DolorEspaldaPage() {
    const [ openFaqIndex, setOpenFaqIndex ] = useState<number | null>(0);

    return (
        <div className="services-page min-h-screen bg-white dark:bg-gray-900">
            <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark min-h-[60vh] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/treatments/dolor-cuerpo/dolor_espalda.png"
                        alt="Tratamiento para Dolor de Espalda"
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
                                { label: 'Dolor', href: '/tratamientos/dolor' },
                                { label: 'Dolores por Zona', href: '/tratamientos/dolor/dolores' },
                                { label: 'Espalda' }
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
                                Dolor de Espalda
                            </span>
                        </h1>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/reservar-cita" className="group bg-white text-corporate-blue px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center space-x-2">
                                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                <span>Reservar Cita</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/tratamientos/dolor/dolores" className="border-2 border-white/30 backdrop-blur-md text-white hover:bg-white hover:text-corporate-blue px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-center hover:border-white">
                                Ver Otras Zonas
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ¿Qué es el Dolor de Espalda? */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                                ¿Qué es el Dolor de Espalda?
                            </h2>
                            <div className="space-y-6 text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                                <p>
                                    El <strong className="text-corporate-blue">dolor de espalda</strong> puede afectar la zona alta (dorsal), media o baja (lumbar), siendo una de las causas más comunes de incapacidad laboral.
                                </p>
                                <p>
                                    La ozonoterapia ofrece un tratamiento integral que reduce la inflamación, relaja los músculos contracturados y promueve la regeneración de tejidos afectados.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/treatments/dolor-cuerpo/dolor_espalda.png"
                                alt="Dolor de Espalda"
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
                                Causas Comunes
                            </h3>
                            <div className="space-y-4">
                                {[
                                    'Mala postura al sentarse',
                                    'Levantamiento de objetos pesados',
                                    'Hernias discales',
                                    'Escoliosis y desviaciones',
                                    'Contracturas musculares',
                                    'Degeneración vertebral',
                                    'Sedentarismo prolongado'
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
                                    'Dolor constante o intermitente',
                                    'Rigidez al levantarse',
                                    'Dificultad para moverse',
                                    'Espasmos musculares',
                                    'Dolor que irradia a piernas',
                                    'Hormigueo en extremidades',
                                    'Pérdida de fuerza muscular'
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

            {/* Resultados y Duración */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                                Resultados y Duración
                            </h2>
                            <div className="space-y-6 text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                                <p>
                                    Los pacientes experimentan alivio significativo del dolor de espalda después de 2-4 sesiones, con mejora progresiva en la movilidad y flexibilidad.
                                </p>
                                <p>
                                    Se recomienda un protocolo de 8-15 sesiones según la severidad, con efectos que pueden durar 6-12 meses.
                                </p>
                                <div className="bg-corporate-blue/10 rounded-xl p-6 border-l-4 border-corporate-blue">
                                    <h3 className="font-bold text-corporate-text-dark dark:text-white mb-3">
                                        Ventajas del Tratamiento
                                    </h3>
                                    <ul className="space-y-2">
                                        <li>• Tratamiento ambulatorio sin cirugía</li>
                                        <li>• Regreso inmediato a actividades</li>
                                        <li>• Complementario con terapia física</li>
                                        <li>• Sin necesidad de anestesia</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-corporate-blue/10 to-corporate-blue-light/10 rounded-2xl p-8">
                            <div className="grid grid-cols-1 gap-6">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-corporate-blue mb-2">2-4</div>
                                    <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Sesiones para notar mejoría</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-corporate-blue mb-2">8-15</div>
                                    <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Sesiones recomendadas</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-corporate-blue mb-2">6-12</div>
                                    <div className="text-corporate-text-muted dark:text-gray-300 font-medium">Meses de alivio prolongado</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Preguntas Frecuentes */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Preguntas Frecuentes
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                pregunta: '¿La ozonoterapia funciona para hernias discales?',
                                respuesta: 'Sí, es muy efectiva. La ozonoterapia puede reducir el tamaño de la hernia y aliviar el dolor sin necesidad de cirugía en muchos casos.'
                            },
                            {
                                pregunta: '¿Cuánto tiempo dura cada sesión?',
                                respuesta: 'Cada sesión dura aproximadamente 30-45 minutos. Es un procedimiento ambulatorio que no requiere hospitalización.'
                            },
                            {
                                pregunta: '¿Puedo trabajar después del tratamiento?',
                                respuesta: 'Sí, puedes retomar tu trabajo inmediatamente. Se recomienda evitar cargar objetos pesados las primeras 24 horas.'
                            },
                            {
                                pregunta: '¿Es efectivo para lumbalgia crónica?',
                                respuesta: 'Absolutamente. La ozonoterapia es una de las mejores opciones para lumbalgia crónica, con tasas de éxito superiores al 80%.'
                            },
                            {
                                pregunta: '¿Necesito hacer ejercicios complementarios?',
                                respuesta: 'Se recomienda combinar el tratamiento con ejercicios de fortalecimiento y estiramientos para mantener los resultados a largo plazo.'
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
                        Libérate del Dolor de Espalda
                    </h2>
                    <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-cyan-100 leading-relaxed">
                        Recupera tu calidad de vida sin dolor. Agenda tu cita y vuelve a disfrutar de tus actividades.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/reservar-cita" className="bg-white text-corporate-blue px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center justify-center space-x-2">
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

