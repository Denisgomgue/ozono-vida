'use client';

import { Phone, Mail, Clock } from 'lucide-react';
import companyData from '@/data/company.json';

export function TopBar() {
    return (
        <div className="bg-corporate-blue                                    text-white py-3 dark:bg-gray-800">
            <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl">
                {/* Mobile Layout */}
                <div className="block md:hidden">
                    <div className="grid grid-cols-1 gap-3 text-center">
                        <div className="flex items-center justify-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4" />
                                <span className="text-sm">{companyData.phone}</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <Mail className="w-4 h-4" />
                            <span className="text-sm">{companyData.email}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{companyData.hours.weekdays} · {companyData.hours.saturday}</span>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4" />
                            <span>{companyData.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4" />
                            <span>{companyData.email}</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span>Horario: {companyData.hours.weekdays} · {companyData.hours.saturday}</span>
                        <Clock className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </div>
    );
}
