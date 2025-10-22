'use client';

import { ArrowRight, Stethoscope } from 'lucide-react';
import Link from 'next/link';
import { AppointmentButton } from './AppointmentButton';

interface CTASectionProps {
    title: string;
    subtitle: string;
    showContactButton?: boolean;
    variant?: 'gradient' | 'solid';
}

export function CTASection({
    title,
    subtitle,
    showContactButton = true,
    variant = 'gradient'
}: CTASectionProps) {
    const sectionClasses = variant === 'gradient'
        ? 'py-20 bg-gradient-to-br from-corporate-blue to-corporate-blue-dark text-white'
        : 'py-20 bg-corporate-blue text-white';

    return (
        <section className={sectionClasses}>
            <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-cyan-50 drop-shadow-lg">
                    {title}
                </h2>
                <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-cyan-100 leading-relaxed">
                    {subtitle}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <AppointmentButton variant="white" size="lg" />
                    {showContactButton && (
                        <Link
                            href="/#contacto"
                            className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-corporate-blue"
                        >
                            <Stethoscope className="w-5 h-5" />
                            <span>Consultar</span>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
