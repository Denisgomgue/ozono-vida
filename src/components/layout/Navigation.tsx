'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Plus, Menu, X } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { AppointmentButton } from '@/components/ui/AppointmentButton';

export function Navigation() {
    const [ openDropdown, setOpenDropdown ] = useState<string | null>(null);
    const [ openSubmenu, setOpenSubmenu ] = useState<string | null>(null);
    const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);

    const navigationData = {
        servicios: {
            title: 'Servicios',
            items: [
                { name: 'Ozonoterapia', href: '/servicios/ozonoterapia' },
                { name: 'Plasma Rico en Plaquetas', href: '/servicios/prp' },
                { name: 'Medicina Regenerativa', href: '/servicios/medicina-regenerativa' },
                { name: 'Cóctel de Vida', href: '/servicios/coctel-vida' }
            ]
        },
        tratamientos: {
            title: 'Tratamientos',
            items: [
                {
                    name: 'Tratamiento de Dolor',
                    href: '/tratamientos/dolor',
                    submenu: [
                        {
                            name: 'Dolores por Zona',
                            href: '/tratamientos/dolor/dolores',
                            submenu: [
                                { name: 'Cabeza', href: '/tratamientos/dolor/dolores/cabeza' },
                                { name: 'Cuello', href: '/tratamientos/dolor/dolores/cuello' },
                                { name: 'Hombros', href: '/tratamientos/dolor/dolores/hombros' },
                                { name: 'Espalda', href: '/tratamientos/dolor/dolores/espalda' },
                                { name: 'Codo', href: '/tratamientos/dolor/dolores/codo' },
                                { name: 'Columnas', href: '/tratamientos/dolor/dolores/columnas' },
                                { name: 'Manos', href: '/tratamientos/dolor/dolores/manos' },
                                { name: 'Cadera', href: '/tratamientos/dolor/dolores/cadera' },
                                { name: 'Muslo', href: '/tratamientos/dolor/dolores/muslo' },
                                { name: 'Rodillas', href: '/tratamientos/dolor/dolores/rodillas' },
                                { name: 'Tobillos', href: '/tratamientos/dolor/dolores/tobillos' },
                                { name: 'Pies', href: '/tratamientos/dolor/dolores/pies' },
                                { name: 'Planta de los pies', href: '/tratamientos/dolor/dolores/plantas-de-los-pies' }
                            ]
                        },
                        {
                            name: 'Artrosis',
                            href: '/tratamientos/dolor/artrosis',
                            submenu: [
                                { name: 'Hombro', href: '/tratamientos/dolor/artrosis/hombro' },
                                { name: 'Cadera', href: '/tratamientos/dolor/artrosis/cadera' },
                                { name: 'Rodilla', href: '/tratamientos/dolor/artrosis/rodilla' }
                            ]
                        },
                        { name: 'Hernias Discales', href: '/tratamientos/dolor/hernias-discales' },
                        { name: 'Lumbalgia', href: '/tratamientos/dolor/lumbalgia' },
                        { name: 'Cervicalgia', href: '/tratamientos/dolor/cervicalgia' },
                        { name: 'Artritis', href: '/tratamientos/dolor/artritis' },
                        { name: 'Tendinitis', href: '/tratamientos/dolor/tendinitis' },
                        { name: 'Fibromialgia', href: '/tratamientos/dolor/fibromialgia' },
                        { name: 'Ciatalgia', href: '/tratamientos/dolor/ciatalgia' },
                        { name: 'Túnel carpiano', href: '/tratamientos/dolor/tunel-carpiano' },
                        { name: 'Escoliosis', href: '/tratamientos/dolor/escoliosis' },
                        { name: 'Espolón calcáneo', href: '/tratamientos/dolor/espolon-calcaneo' },
                        { name: 'Fascitis plantar', href: '/tratamientos/dolor/fascitis-plantar' }
                    ]
                },
                {
                    name: 'Tratamiento de Enfermedades',
                    href: '/tratamientos/enfermedades',
                    submenu: [
                        { name: 'Diabetes Mellitus', href: '/tratamientos/enfermedades/diabetes' },
                        { name: 'Insuficiencia Vascular', href: '/tratamientos/enfermedades/insuficiencia-vascular' },
                        { name: 'Hepatitis Crónica', href: '/tratamientos/enfermedades/hepatitis' },
                        { name: 'Colitis Ulcerosa', href: '/tratamientos/enfermedades/colitis' },
                        { name: 'Enfermedad de Crohn', href: '/tratamientos/enfermedades/enfermedad-de-crohn' },
                        { name: 'Varices', href: '/tratamientos/enfermedades/varices' },
                        { name: 'Prostatitis', href: '/tratamientos/enfermedades/prostatitis' },
                        { name: 'Gota', href: '/tratamientos/enfermedades/gota' },
                        { name: 'Gastritis', href: '/tratamientos/enfermedades/gastritis' },
                        { name: 'Cefaleas y Migrañas', href: '/tratamientos/enfermedades/cefaleas-migranas' },
                        { name: 'Lupus eritematoso', href: '/tratamientos/enfermedades/lupus-eritematoso' }
                    ]
                },
                {
                    name: 'Estética',
                    href: '/tratamientos/estetica',
                    submenu: [
                        { name: 'Rejuvenecimiento Facial', href: '/tratamientos/estetica/rejuvenecimiento-facial' },
                        { name: 'Celulitis', href: '/tratamientos/estetica/celulitis' },
                        { name: 'Úlceras Crónicas y Varicosas', href: '/tratamientos/estetica/ulceras-cronicas' },
                        { name: 'Acné', href: '/tratamientos/estetica/acne' }
                    ]
                },
                {
                    name: 'Infecciones',
                    href: '/tratamientos/infecciones',
                    submenu: [
                        { name: 'Heridas Infectadas', href: '/tratamientos/infecciones/heridas-infectadas' },
                        { name: 'Pie Diabético', href: '/tratamientos/infecciones/pie-diabetico' },
                        { name: 'Úlceras Varicosas', href: '/tratamientos/infecciones/ulceras-varicosas' }
                    ]
                },
                {
                    name: 'Ginecología',
                    href: '/tratamientos/ginecologia',
                    submenu: [
                        { name: 'Candidiasis', href: '/tratamientos/ginecologia/candidiasis' },
                        { name: 'Vaginitis', href: '/tratamientos/ginecologia/vaginitis' },
                        { name: 'Virus de Papiloma Humano', href: '/tratamientos/ginecologia/vph' },
                        { name: 'Endometriosis', href: '/tratamientos/ginecologia/endometriosis' },
                        { name: 'Post Cesárea', href: '/tratamientos/ginecologia/post-cesarea' }
                    ]
                }
            ]
        },
        aplicaciones: {
            title: 'Aplicaciones',
            items: [
                { name: 'Intramuscular', href: '/aplicaciones/intramuscular' },
                { name: 'Intraarticular', href: '/aplicaciones/intraarticular' },
                { name: 'Auto hemoterapia menor', href: '/aplicaciones/auto-hemoterapia-menor' },
                { name: 'Auto hemoterapia mayor', href: '/aplicaciones/auto-hemoterapia-mayor' },
                { name: 'Sueros ozonizados', href: '/aplicaciones/sueros-ozonizados' },
                { name: 'Bolsa ozonisada', href: '/aplicaciones/bolsa-ozonisada' },
                { name: 'Insuflación rectal', href: '/aplicaciones/insuflacion-rectal' },
                { name: 'Embolsados', href: '/aplicaciones/embolsados' }
            ]
        }
    };

    return (
        <>
            {/* Menú Desktop */}
            <nav className="hidden xl:flex items-center space-x-6">
                {/* Servicios */}
                <div className="relative group">
                    <button className="flex items-center space-x-1 text-lg font-medium text-gray-800 dark:text-white hover:text-white dark:hover:text-white hover:bg-corporate-blue dark:hover:bg-corporate-blue group-hover:text-white dark:group-hover:text-white group-hover:bg-corporate-blue dark:group-hover:bg-corporate-blue px-4 py-2 rounded-lg transition-all duration-300">
                        <span>{navigationData.servicios.title}</span>
                        <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-2">
                            {navigationData.servicios.items.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block  px-2 py-3 text-gray-800 dark:text-white hover:text-white dark:hover:text-white hover:bg-corporate-blue dark:hover:bg-corporate-blue transition-all duration-300 rounded-md"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tratamientos */}
                <div className="relative group">
                    <button className="flex items-center space-x-1 text-lg font-medium text-gray-800 dark:text-white hover:text-white dark:hover:text-white hover:bg-corporate-blue dark:hover:bg-corporate-blue group-hover:text-white dark:group-hover:text-white group-hover:bg-corporate-blue dark:group-hover:bg-corporate-blue px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105">
                        <span>{navigationData.tratamientos.title}</span>
                        <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-2">
                            {navigationData.tratamientos.items.map((item) => (
                                <div key={item.href} className="relative group/submenu">
                                    <button className="w-full flex items-center justify-between  px-2 py-3 text-base text-gray-800 dark:text-white hover:text-white dark:hover:text-white hover:bg-corporate-blue dark:hover:bg-corporate-blue group-hover/submenu:text-white dark:group-hover/submenu:text-white group-hover/submenu:bg-corporate-blue dark:group-hover/submenu:bg-corporate-blue transition-all duration-300 rounded-md">
                                        <span>{item.name}</span>
                                        {item.submenu && <Plus className="w-3 h-3" />}
                                    </button>
                                    {item.submenu && (
                                        <div className="absolute left-full top-0 ml-1 w-60 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200">
                                            <div className="py-2">
                                                {item.submenu.map((subItem) => (
                                                    <div key={subItem.href}>
                                                        {subItem.submenu ? (
                                                            <div className="relative group/subsubmenu">
                                                                <button className="w-full flex items-center justify-between  px-4 py-3 text-base text-gray-800 dark:text-white hover:text-white dark:hover:text-white hover:bg-corporate-blue dark:hover:bg-corporate-blue group-hover/subsubmenu:text-white dark:group-hover/subsubmenu:text-white group-hover/subsubmenu:bg-corporate-blue dark:group-hover/subsubmenu:bg-corporate-blue transition-all duration-300 rounded-md">
                                                                    <span>{subItem.name}</span>
                                                                    <Plus className="w-3 h-3" />
                                                                </button>
                                                                <div className="absolute left-full top-0 ml-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg opacity-0 invisible group-hover/subsubmenu:opacity-100 group-hover/subsubmenu:visible transition-all duration-200">
                                                                    <div className="py-2">
                                                                        {subItem.submenu.map((subSubItem) => (
                                                                            <Link
                                                                                key={subSubItem.href}
                                                                                href={subSubItem.href}
                                                                                className="block  px-2 py-2 text-sm text-gray-800 dark:text-white hover:text-white dark:hover:text-white hover:bg-corporate-blue dark:hover:bg-corporate-blue transition-all duration-300 rounded-md"
                                                                            >
                                                                                {subSubItem.name}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <Link
                                                                href={subItem.href}
                                                                className="block  px-2 py-3 text-base text-gray-800 dark:text-white hover:text-white dark:hover:text-white hover:bg-corporate-blue dark:hover:bg-corporate-blue transition-all duration-300 rounded-md"
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Aplicaciones */}
                <div className="relative group">
                    <button className="flex items-center space-x-1 text-lg font-medium text-gray-800 dark:text-white hover:text-white dark:hover:text-white hover:bg-corporate-blue dark:hover:bg-corporate-blue group-hover:text-white dark:group-hover:text-white group-hover:bg-corporate-blue dark:group-hover:bg-corporate-blue px-4 py-2 rounded-lg transition-all duration-300">
                        <span>{navigationData.aplicaciones.title}</span>
                        <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-2">
                            {navigationData.aplicaciones.items.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block px-2 py-3 text-base text-gray-800 dark:text-white hover:text-white dark:hover:text-white hover:bg-corporate-blue dark:hover:bg-corporate-blue transition-all duration-300 rounded-md"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <Link href="/#nosotros" className="text-lg font-medium text-gray-800 dark:text-white hover:text-white dark:hover:text-white hover:bg-corporate-blue dark:hover:bg-corporate-blue px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105">
                    Nosotros
                </Link>
                <Link href="/#contacto" className="text-lg font-medium text-gray-800 dark:text-white hover:text-white dark:hover:text-white hover:bg-corporate-blue dark:hover:bg-corporate-blue px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105">
                    Contacto
                </Link>
                <AppointmentButton variant="primary" size="md" />
            </nav>

            {/* Menú Intermedio (lg-xl) */}
            <nav className="hidden lg:flex xl:hidden items-center space-x-2">
                <Link href="/servicios" className="text-sm font-medium text-gray-800 dark:text-white hover:text-white dark:hover:text-white hover:bg-corporate-blue dark:hover:bg-corporate-blue px-2 py-2 rounded-lg transition-all duration-300 hover:scale-105">
                    Servicios
                </Link>
                <Link href="/tratamientos" className="text-sm font-medium text-gray-800 dark:text-white hover:text-white dark:hover:text-white hover:bg-corporate-blue dark:hover:bg-corporate-blue px-2 py-2 rounded-lg transition-all duration-300 hover:scale-105">
                    Tratamientos
                </Link>
                <Link href="/aplicaciones" className="text-sm font-medium text-gray-800 dark:text-white hover:text-white dark:hover:text-white hover:bg-corporate-blue dark:hover:bg-corporate-blue px-2 py-2 rounded-lg transition-all duration-300 hover:scale-105">
                    Aplicaciones
                </Link>
                <Link href="/#nosotros" className="text-sm font-medium text-gray-800 dark:text-white hover:text-white dark:hover:text-white hover:bg-corporate-blue dark:hover:bg-corporate-blue px-2 py-2 rounded-lg transition-all duration-300 hover:scale-105">
                    Nosotros
                </Link>
                <Link href="/#contacto" className="text-sm font-medium text-gray-800 dark:text-white hover:text-white dark:hover:text-white hover:bg-corporate-blue dark:hover:bg-corporate-blue px-2 py-2 rounded-lg transition-all duration-300 hover:scale-105">
                    Contacto
                </Link>
                <AppointmentButton variant="primary" size="md" />
            </nav>

            {/* Menú Mobile - Solo cuando el menú intermedio no cabe */}
            <div className="lg:hidden">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)} />
                    <div className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 shadow-xl flex flex-col">
                        {/* Header fijo */}
                        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
                            <div className="flex items-center justify-between">
                                <Logo size="sm" />
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Contenido libre */}
                        <div className="flex-1 p-4 bg-white">
                            <nav className="space-y-4">
                                {/* Mobile Servicios */}
                                <div>
                                    <button
                                        onClick={() => setOpenDropdown(openDropdown === 'servicios' ? null : 'servicios')}
                                        className={`flex items-center justify-between w-full py-2 px-3 rounded-lg transition-all duration-300 ${
                                            openDropdown === 'servicios' 
                                                ? 'bg-corporate-blue text-white' 
                                                : 'text-gray-700 dark:text-white hover:bg-corporate-blue hover:text-white'
                                        }`}
                                    >
                                        <span>Servicios</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'servicios' ? 'rotate-180' : ''}`} />
                                    </button>
                                    {openDropdown === 'servicios' && (
                                        <div className="ml-4 space-y-2 mt-2">
                                            {navigationData.servicios.items.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className="block py-2 px-3 text-sm text-gray-600 dark:text-white hover:bg-corporate-blue hover:text-white rounded-lg transition-all duration-300"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Mobile Tratamientos */}
                                <div>
                                    <button
                                        onClick={() => setOpenDropdown(openDropdown === 'tratamientos' ? null : 'tratamientos')}
                                        className={`flex items-center justify-between w-full py-2 px-3 rounded-lg transition-all duration-300 ${
                                            openDropdown === 'tratamientos' 
                                                ? 'bg-corporate-blue text-white' 
                                                : 'text-gray-700 dark:text-white hover:bg-corporate-blue hover:text-white'
                                        }`}
                                    >
                                        <span>Tratamientos</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'tratamientos' ? 'rotate-180' : ''}`} />
                                    </button>
                                    {openDropdown === 'tratamientos' && (
                                        <div className="ml-4 space-y-2 mt-2">
                                            {navigationData.tratamientos.items.map((item) => (
                                                <div key={item.href}>
                                                    <button
                                                        onClick={() => setOpenSubmenu(openSubmenu === item.href ? null : item.href)}
                                                        className={`flex items-center justify-between w-full py-2 px-3 text-sm rounded-lg transition-all duration-300 ${
                                                            openSubmenu === item.href 
                                                                ? 'bg-corporate-blue text-white' 
                                                                : 'text-gray-600 dark:text-white hover:bg-corporate-blue hover:text-white'
                                                        }`}
                                                    >
                                                        <span>{item.name}</span>
                                                        {item.submenu && <Plus className="w-3 h-3" />}
                                                    </button>
                                                    {item.submenu && openSubmenu === item.href && (
                                                        <div className="ml-4 space-y-1 mt-2">
                                                            {item.submenu.map((subItem) => (
                                                                <Link
                                                                    key={subItem.href}
                                                                    href={subItem.href}
                                                                    className="block py-1 px-3 text-xs text-gray-500 dark:text-gray-300 hover:bg-corporate-blue hover:text-white rounded-lg transition-all duration-300"
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Mobile Aplicaciones */}
                                <div>
                                    <button
                                        onClick={() => setOpenDropdown(openDropdown === 'aplicaciones' ? null : 'aplicaciones')}
                                        className={`flex items-center justify-between w-full py-2 px-3 rounded-lg transition-all duration-300 ${
                                            openDropdown === 'aplicaciones' 
                                                ? 'bg-corporate-blue text-white' 
                                                : 'text-gray-700 dark:text-white hover:bg-corporate-blue hover:text-white'
                                        }`}
                                    >
                                        <span>Aplicaciones</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'aplicaciones' ? 'rotate-180' : ''}`} />
                                    </button>
                                    {openDropdown === 'aplicaciones' && (
                                        <div className="ml-4 space-y-2 mt-2">
                                            {navigationData.aplicaciones.items.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className="block py-2 px-3 text-sm text-gray-600 dark:text-white hover:bg-corporate-blue hover:text-white rounded-lg transition-all duration-300"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <Link href="/#nosotros" className="block py-2 px-3 text-gray-700 dark:text-white hover:bg-corporate-blue hover:text-white rounded-lg transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                                    Nosotros
                                </Link>
                                <Link href="/#contacto" className="block py-2 px-3 text-gray-700 dark:text-white hover:bg-corporate-blue hover:text-white rounded-lg transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                                    Contacto
                                </Link>
                                <div onClick={() => setIsMobileMenuOpen(false)}>
                                    <AppointmentButton variant="primary" size="md" fullWidth={true} />
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
