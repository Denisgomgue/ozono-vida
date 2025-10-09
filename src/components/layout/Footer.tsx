import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import companyData from '@/data/company.json';

export function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-7xl py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo y Descripción */}
                    <div className="space-y-4">
                        <Logo size="md" />
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Clínica especializada en ozonoterapia y medicina regenerativa en Huaraz.
                            Tratamientos efectivos para mejorar tu calidad de vida.
                        </p>
                    </div>

                    {/* Servicios */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Servicios</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/servicios/ozonoterapia" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                    Ozonoterapia
                                </Link>
                            </li>
                            <li>
                                <Link href="/servicios/plasma-rico-plaquetas" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                    Plasma Rico en Plaquetas
                                </Link>
                            </li>
                            <li>
                                <Link href="/servicios/medicina-regenerativa" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                    Medicina Regenerativa
                                </Link>
                            </li>
                            <li>
                                <Link href="/servicios/coctel-vida" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                    Cóctel de Vida
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Tratamientos */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Tratamientos</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/tratamientos/dolor" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                    Tratamiento de Dolor
                                </Link>
                            </li>
                            <li>
                                <Link href="/tratamientos/enfermedades" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                    Tratamiento de Enfermedades
                                </Link>
                            </li>
                            <li>
                                <Link href="/tratamientos/estetica" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                    Estética
                                </Link>
                            </li>
                            <li>
                                <Link href="/tratamientos/ginecologia" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                    Ginecología
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Contacto</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center space-x-2">
                                <Phone className="w-4 h-4 text-primary" />
                                <span className="text-gray-600 dark:text-gray-400">{companyData.phone}</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail className="w-4 h-4 text-primary" />
                                <span className="text-gray-600 dark:text-gray-400">{companyData.email}</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span className="text-gray-600 dark:text-gray-400">
                                    {companyData.address}<br />
                                    {companyData.location}
                                </span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Clock className="w-4 h-4 text-primary" />
                                <span className="text-gray-600 dark:text-gray-400">
                                    {companyData.hours.weekdays}<br />
                                    {companyData.hours.saturday}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            © 2025 OZONO VIDA HUARAZ. Todos los derechos reservados.
                        </p>
                        <div className="flex space-x-6">
                            <Link href="/politica-privacidad" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                Política de Privacidad
                            </Link>
                            <Link href="/terminos-condiciones" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                Términos y Condiciones
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
