'use client';

import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
    return (
        <nav className={`flex items-center space-x-1 md:space-x-2 text-xs md:text-sm text-white/80 mb-6 md:mb-8 overflow-x-auto scrollbar-hide ${className}`}>
            <Link href="/" className="hover:text-white transition-colors flex items-center px-2 py-1 md:px-0 md:py-0 rounded-md hover:bg-white/10 flex-shrink-0">
                <Home className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                <span className="hidden sm:inline">Inicio</span>
            </Link>
            {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-1 md:space-x-2 flex-shrink-0">
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                    {item.href ? (
                        <Link 
                            href={item.href} 
                            className="hover:text-white transition-colors px-2 py-1 md:px-0 md:py-0 rounded-md hover:bg-white/10 whitespace-nowrap"
                            title={item.label}
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-white font-semibold px-2 py-1 md:px-0 md:py-0 whitespace-nowrap" title={item.label}>
                            {item.label}
                        </span>
                    )}
                </div>
            ))}
        </nav>
    );
}
