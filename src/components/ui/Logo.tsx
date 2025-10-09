import React from 'react';
import Image from 'next/image';

interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
    const sizeClasses = {
        sm: 'w-32 h-8',
        md: 'w-40 h-10',
        lg: 'w-48 h-12'
    };

    return (
        <div className={`brand__logo flex items-center ${className}`}>
            <Image
                src="/images/icons/Logotipo_ozonoVida.png"
                alt="OZONO VIDA HUARAZ"
                width={size === 'sm' ? 128 : size === 'md' ? 160 : 192}
                height={size === 'sm' ? 32 : size === 'md' ? 40 : 48}
                className={`${sizeClasses[ size ]} object-contain`}
                priority
            />
        </div>
    );
}