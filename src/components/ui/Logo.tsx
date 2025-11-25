import React from 'react';
import Image from 'next/image';

interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
    const sizeClasses = {
        sm: 'w-10 h-10',
        md: 'w-12 h-12',
        lg: 'w-14 h-14'
    };

    return (
        <div className={`brand__logo flex items-center ${className}`}>
            <Image
                src="/images/icons/logo-space.png"
                alt="OZONO VIDA HUARAZ"
                width={size === 'sm' ? 96 : size === 'md' ? 128 : 160}
                height={size === 'sm' ? 32 : size === 'md' ? 40 : 48}
                className={`${sizeClasses[ size ]} object-contain`}
                priority
            />
            <div className="flex flex-col leading-none">
                <span className="text-xl text-corporate-blue font-bold text-center">OZONO VIDA</span>
                <span className="text-[15px] text-corporate-red font-bold text-center">TRATAMIENTO</span>
            </div>
        </div>
    );
}