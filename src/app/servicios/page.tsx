'use client';

import { Shield, Zap, Heart, Target, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { AppointmentButton } from '@/components/ui/AppointmentButton';

export default function ServiciosPage() {
    const servicios = [
        {
            id: 'ozonoterapia',
            title: 'Ozonoterapia',
            subtitle: 'Tratamiento médico con ozono',
            icon: Zap,
            color: 'from-corporate-blue to-corporate-blue-dark',
            image: '/images/services/servicios-ozonoterapia.png',
            description: 'Tratamiento médico que utiliza ozono medicinal (O₃) para regenerar tejidos, reducir inflamación y tratar más de 200 enfermedades. Procedimiento ambulatorio sin efectos secundarios.',
            href: '/servicios/ozonoterapia',
            benefits: [ 'Más de 200 enfermedades tratadas', 'Procedimiento ambulatorio', 'Sin efectos secundarios' ]
        },
        {
            id: 'prp',
            title: 'Plasma Rico en Plaquetas',
            subtitle: 'Tratamiento regenerativo con tu propia sangre',
            icon: Heart,
            color: 'from-corporate-red to-pink-500',
            image: '/images/services/servicios-plasmaRicoPlaquetas.png',
            description: 'Utiliza tu propia sangre para acelerar la curación y regeneración de tejidos de forma natural. Ideal para lesiones deportivas, artrosis y regeneración celular.',
            href: '/servicios/prp',
            benefits: [ '100% Natural - Tu propia sangre', 'Sin rechazo inmunológico', 'Resultados rápidos y duraderos' ]
        },
        {
            id: 'medicina-regenerativa',
            title: 'Medicina Regenerativa',
            subtitle: 'Terapias avanzadas de regeneración',
            icon: Target,
            color: 'from-green-500 to-emerald-600',
            image: '/images/services/servicios-medicinaRegenerativa.png',
            description: 'Terapias avanzadas que estimulan la capacidad natural del cuerpo para regenerar tejidos y órganos dañados. Combinamos ozonoterapia con megadosis de vitamina C.',
            href: '/servicios/medicina-regenerativa',
            benefits: [ 'Regeneración de tejidos dañados', 'Mejora la función orgánica', 'Tratamiento personalizado' ]
        },
        {
            id: 'coctel-vida',
            title: 'Cóctel de Vida',
            subtitle: 'Terapia integral de vitalidad',
            icon: Shield,
            color: 'from-purple-500 to-indigo-600',
            image: '/images/services/servicios-coctelVida.png',
            description: 'Terapia combinada integral que potencia tu vitalidad, energía y bienestar general mediante múltiples tratamientos regenerativos. Ideal para mejorar la calidad de vida.',
            href: '/servicios/coctel-vida',
            benefits: [ 'Aumenta la energía vital', 'Bienestar integral', 'Resultados visibles desde la primera sesión' ]
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark py-20 text-white overflow-hidden">
                {/* Imagen de fondo */}
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/images/hero/image1.png"
                        alt="Servicios de Ozonoterapia"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-corporate-blue/90 to-corporate-blue-dark/90"></div>

                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl relative z-10">
                    {/* Breadcrumbs */}
                    <Breadcrumbs
                        items={[
                            { label: 'Servicios' }
                        ]}
                    />

                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                            Nuestros
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue-light to-white block">
                                Servicios
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                            Ofrecemos tratamientos innovadores y efectivos de medicina regenerativa para mejorar tu salud y bienestar.
                        </p>
                    </div>
                </div>
            </section>

            {/* Grid de Servicios */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {servicios.map((servicio) => {
                            const IconComponent = servicio.icon;
                            return (
                                <Link
                                    key={servicio.id}
                                    href={servicio.href}
                                    className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                                >
                                    {/* Imagen */}
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={servicio.image}
                                            alt={servicio.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${servicio.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>

                                        {/* Badge flotante */}
                                        <div className="absolute top-6 left-6">
                                            <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                                                <IconComponent className={`w-8 h-8 bg-gradient-to-br ${servicio.color} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent' }} />
                                            </div>
                                        </div>

                                        {/* Título sobre la imagen */}
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                                {servicio.title}
                                            </h3>
                                            <p className="text-white/90 text-sm">
                                                {servicio.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Contenido */}
                                    <div className="p-8">
                                        <p className="text-corporate-text-muted dark:text-gray-300 mb-6 leading-relaxed">
                                            {servicio.description}
                                        </p>

                                        {/* Beneficios */}
                                        <div className="space-y-2 mb-6">
                                            {servicio.benefits.map((benefit, index) => (
                                                <div key={index} className="flex items-center space-x-2">
                                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${servicio.color}`}></div>
                                                    <span className="text-sm text-corporate-text-dark dark:text-white">
                                                        {benefit}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Botón */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                                            <span className={`font-semibold bg-gradient-to-r ${servicio.color} bg-clip-text text-transparent`}>
                                                Ver más detalles
                                            </span>
                                            <ArrowRight className={`w-5 h-5 bg-gradient-to-r ${servicio.color} bg-clip-text text-transparent transform group-hover:translate-x-2 transition-transform duration-300`} />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-corporate-blue to-corporate-blue-dark text-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        ¿No estás seguro cuál servicio elegir?
                    </h2>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
                        Nuestro equipo médico especializado en medicina regenerativa te ayudará a elegir el tratamiento ideal según tu condición específica. Más de 200 enfermedades tratadas exitosamente.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <AppointmentButton variant="white" size="lg" text="Consulta Gratuita" />
                        <Link
                            href="/contacto"
                            className="border-2 border-white text-white hover:bg-white hover:text-corporate-blue px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                        >
                            Contáctanos
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}