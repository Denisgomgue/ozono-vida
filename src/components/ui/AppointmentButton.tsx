'use client';

import { useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { AppointmentModal } from './AppointmentModal';

interface AppointmentButtonProps {
    variant?: 'primary' | 'secondary' | 'outline' | 'white';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    className?: string;
    showIcon?: boolean;
    text?: string;
}

export function AppointmentButton({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    showIcon = true,
    text = 'Reservar Cita'
}: AppointmentButtonProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Estilos base según variante
    const variantStyles = {
        primary: 'btn-gradient-corporate',
        secondary: 'bg-corporate-blue text-white hover:bg-corporate-blue-dark',
        outline: 'border-2 border-corporate-blue text-corporate-blue hover:bg-corporate-blue hover:text-white',
        white: 'bg-white text-corporate-blue hover:scale-105 shadow-xl hover:shadow-2xl'
    };

    // Estilos de tamaño
    const sizeStyles = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    const baseStyles = 'inline-flex items-center justify-center space-x-2 rounded-xl font-semibold transition-all duration-300';
    const widthStyle = fullWidth ? 'w-full' : '';
    const finalClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`;

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className={finalClassName}
            >
                {showIcon && <Calendar className="w-5 h-5" />}
                <span>{text}</span>
                {variant === 'white' && <ArrowRight className="w-5 h-5" />}
            </button>

            <AppointmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
