import { ArrowRight, Stethoscope } from 'lucide-react';
import Link from 'next/link';
import { AppointmentButton } from './AppointmentButton';

export function ContactInfoSection() {
    return (
        <section className="py-16 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-corporate-text-dark dark:text-white mb-4">
                        ¿Necesitas más información?
                    </h3>
                    <p className="text-corporate-text-muted dark:text-gray-300 mb-6">
                        Nuestro equipo médico está disponible para resolver todas tus dudas
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/#contacto"
                            className="inline-flex items-center space-x-2 bg-corporate-blue text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-corporate-blue-dark"
                        >
                            <Stethoscope className="w-4 h-4" />
                            <span>Contactar</span>
                        </Link>
                        <AppointmentButton variant="outline" size="md" />
                    </div>
                </div>
            </div>
        </section>
    );
}
