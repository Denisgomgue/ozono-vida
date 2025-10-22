import { Shield, ArrowRight, Activity, Heart, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata = {
    title: 'Tratamiento de Infecciones | Ozono Vida',
    description: 'Tratamientos especializados para infecciones y heridas con ozonoterapia. Efecto bactericida potente sin antibióticos sistémicos.',
};

export default function InfeccionesPage() {
    const tratamientos = [
        {
            nombre: 'Heridas Infectadas',
            href: '/tratamientos/infecciones/heridas-infectadas',
            imagen: '/images/treatments/infecciones/heridas_infectadas.png',
            descripcion: 'Eliminación de infecciones y aceleración de cicatrización sin antibióticos sistémicos'
        },
        {
            nombre: 'Pie Diabético',
            href: '/tratamientos/infecciones/pie-diabetico',
            imagen: '/images/treatments/infecciones/pie_diabetico.png',
            descripcion: 'Tratamiento que salva extremidades y previene amputaciones'
        },
        {
            nombre: 'Úlceras Varicosas',
            href: '/tratamientos/infecciones/ulceras-varicosas',
            imagen: '/images/treatments/infecciones/ulceras_varicosas_infecciones.png',
            descripcion: 'Cicatrización efectiva de úlceras crónicas y resistentes'
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-corporate-blue to-corporate-blue-dark min-h-[50vh] flex items-center text-white overflow-hidden">
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/treatments/infecciones/infecciones.png"
                        alt="Tratamiento de Infecciones"
                        fill
                        className="object-cover brightness-75"
                        priority
                    />
                </div>

                {/* Contenido */}
                <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl relative z-10 py-16">
                    {/* Breadcrumbs */}
                    <div className="mb-8">
                        <Breadcrumbs
                            items={[
                                { label: 'Tratamientos', href: '/tratamientos' },
                                { label: 'Infecciones' }
                            ]}
                        />
                    </div>

                    <div className="max-w-3xl">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-corporate-blue/30 backdrop-blur-md border border-cyan-300/50 text-cyan-100 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg">
                            <Zap className="w-4 h-4 text-cyan-300" />
                            <span>Tratamientos Especializados</span>
                        </div>

                        {/* Título */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                            <span className="text-white">Tratamiento de</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 block mt-2">
                                Infecciones
                            </span>
                        </h1>

                        {/* Descripción */}
                        <p className="text-xl md:text-2xl text-cyan-50 mb-10 leading-relaxed font-light drop-shadow-lg">
                            Elimina infecciones y acelera la cicatrización con ozonoterapia. Efecto bactericida potente sin resistencia antibiótica.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introducción */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            Control Efectivo de Infecciones con Ozonoterapia
                        </h2>
                        <p className="text-lg text-corporate-text-muted dark:text-gray-300 leading-relaxed mb-8">
                            La ozonoterapia tiene un poderoso efecto bactericida, fungicida y virucida que elimina microorganismos sin generar resistencia. Es especialmente efectiva en infecciones crónicas, heridas que no cicatrizan y casos resistentes a antibióticos. Nuestro tratamiento acelera la cicatrización, controla infecciones y salva extremidades en riesgo.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-corporate-blue dark:text-cyan-400">
                            <div className="flex items-center space-x-2">
                                <Activity className="w-5 h-5" />
                                <span className="font-semibold">3 Tratamientos Especializados</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Shield className="w-5 h-5" />
                                <span className="font-semibold">Sin Resistencia Bacteriana</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Heart className="w-5 h-5" />
                                <span className="font-semibold">Alta Tasa de Éxito</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beneficios Generales */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-corporate-text-dark dark:text-white mb-12">
                        Ventajas de Nuestros Tratamientos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-2">
                                Efecto Bactericida
                            </h3>
                            <p className="text-corporate-text-muted dark:text-gray-300">
                                Elimina todo tipo de bacterias, hongos y virus
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
                                <Activity className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-2">
                                Sin Resistencia
                            </h3>
                            <p className="text-corporate-text-muted dark:text-gray-300">
                                Efectivo contra bacterias resistentes a antibióticos
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-2">
                                Cicatrización Acelerada
                            </h3>
                            <p className="text-corporate-text-muted dark:text-gray-300">
                                Promueve regeneración rápida de tejidos
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-2">
                                Sin Efectos Secundarios
                            </h3>
                            <p className="text-corporate-text-muted dark:text-gray-300">
                                Tratamiento local sin complicaciones sistémicas
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid de Tratamientos */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-4">
                            Nuestros Tratamientos para Infecciones
                        </h2>
                        <p className="text-lg text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Selecciona el tratamiento específico para tu condición
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {tratamientos.map((tratamiento) => (
                            <Link
                                key={tratamiento.href}
                                href={tratamiento.href}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                            >
                                {/* Imagen */}
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={tratamiento.imagen}
                                        alt={`Tratamiento para ${tratamiento.nombre}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                                    {/* Título sobre la imagen */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-2xl font-bold text-white">
                                            {tratamiento.nombre}
                                        </h3>
                                    </div>
                                </div>

                                {/* Contenido */}
                                <div className="p-6">
                                    <p className="text-corporate-text-muted dark:text-gray-300 mb-4 leading-relaxed">
                                        {tratamiento.descripcion}
                                    </p>

                                    <div className="flex items-center space-x-2 text-corporate-blue dark:text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                                        <span>Ver tratamiento</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Proceso de Tratamiento */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                            ¿Cómo Funciona el Tratamiento?
                        </h2>
                        <p className="text-xl text-corporate-text-muted dark:text-gray-300 max-w-3xl mx-auto">
                            Un proceso efectivo en 4 pasos
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                numero: '01',
                                titulo: 'Evaluación',
                                descripcion: 'Valoración del tipo y severidad de la infección'
                            },
                            {
                                numero: '02',
                                titulo: 'Limpieza y Preparación',
                                descripcion: 'Preparación de la herida para tratamiento óptimo'
                            },
                            {
                                numero: '03',
                                titulo: 'Aplicación de Ozono',
                                descripcion: 'Tratamiento directo con efecto bactericida inmediato'
                            },
                            {
                                numero: '04',
                                titulo: 'Seguimiento',
                                descripcion: 'Monitoreo de cicatrización y control de infección'
                            }
                        ].map((paso, index) => (
                            <div key={index} className="text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-corporate-blue to-corporate-blue-dark text-white rounded-full text-3xl font-bold mb-6 shadow-lg">
                                    {paso.numero}
                                </div>
                                <h3 className="text-xl font-bold text-corporate-text-dark dark:text-white mb-3">
                                    {paso.titulo}
                                </h3>
                                <p className="text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                                    {paso.descripcion}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-corporate-blue to-corporate-blue-dark text-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-cyan-50 drop-shadow-lg">
                        ¿Necesitas tratar una infección o herida?
                    </h2>
                    <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-cyan-100 leading-relaxed">
                        Agenda tu cita hoy y recibe tratamiento efectivo sin resistencia antibiótica
                    </p>
                    <Link
                        href="/reservar-cita"
                        className="inline-flex items-center space-x-2 bg-white text-corporate-blue px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                    >
                        <span>Reservar Cita</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

