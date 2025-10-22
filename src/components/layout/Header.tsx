'use client';

import { Logo } from '@/components/ui/Logo';
import { Navigation } from './Navigation';
import Link from 'next/link';

export function Header() {
    return (
        <header className="header sticky top-0 z-40 w-full bg-white dark:bg-gray-900/90 backdrop-blur-md">
            
            <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                <div className="flex items-center justify-between h-20">
                    {/* Logo como enlace */}
                    <Link href="/" className="flex items-center">
                        <Logo size="md" />
                    </Link>

                    {/* Desktop Navigation */}
                    <Navigation />
                </div>
            </div>
        </header>
    );
}
