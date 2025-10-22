'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Calendar, Phone, Mail, User, MessageSquare, CheckCircle, Loader2, Stethoscope, ChevronDown } from 'lucide-react';

interface AppointmentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
    const [ formData, setFormData ] = useState({
        nombre: '',
        telefono: '',
        email: '',
        servicio: '',
        fecha: '',
        mensaje: ''
    });

    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ isSubmitted, setIsSubmitted ] = useState(false);
    const [ mounted, setMounted ] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const servicios = [
        'Ozonoterapia',
        'Plasma Rico en Plaquetas (PRP)',
        'Medicina Regenerativa',
        'Cóctel de Vida',
        'Tratamiento de Artrosis',
        'Tratamiento de Hernia Discal',
        'Tratamiento de Várices',
        'Tratamiento de Fibromialgia',
        'Tratamiento de Pie Diabético',
        'Tratamiento de Dolor Crónico',
        'Megadosis de Vitamina C',
        'Consulta General',
        'Evaluación Médica'
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simular envío del formulario
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Cerrar modal después de 3 segundos
        setTimeout(() => {
            setIsSubmitted(false);
            onClose();
            // Resetear formulario
            setFormData({
                nombre: '',
                telefono: '',
                email: '',
                servicio: '',
                fecha: '',
                mensaje: ''
            });
        }, 3000);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [ e.target.name ]: e.target.value
        });
    };

    const handleClose = () => {
        if (!isSubmitting) {
            setIsSubmitted(false);
            onClose();
            // Resetear formulario
            setFormData({
                nombre: '',
                telefono: '',
                email: '',
                servicio: '',
                fecha: '',
                mensaje: ''
            });
        }
    };

    if (!isOpen || !mounted) return null;

    const modalContent = (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 min-h-screen">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={handleClose}
            ></div>

            {/* Modal */}
            <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] sm:max-h-[85vh] overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {/* Header con gradiente */}
                <div className="p-6 rounded-t-3xl relative gradient-primary">
                    <button
                        onClick={handleClose}
                        disabled={isSubmitting}
                        className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors disabled:opacity-50"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">Reserva tu cita</h2>
                            <p className="text-white/80 text-sm">Completa el formulario y nos pondremos en contacto contigo</p>
                        </div>
                    </div>
                </div>

                    {/* Contenido del modal */}
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="p-6">
                            {/* Grid de 2 columnas en desktop */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Columna izquierda */}
                                <div className="space-y-6">
                                    {/* Nombre completo */}
                                    <div>
                                        <label className="block text-gray-800 dark:text-gray-100 font-semibold mb-2">
                                            <User className="w-4 h-4 inline mr-2" />
                                            Nombre completo *
                                        </label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all"
                                            placeholder="Ej. Juan Pérez"
                                            required
                                        />
                                    </div>

                                    {/* Teléfono */}
                                    <div>
                                        <label className="block text-gray-800 dark:text-gray-100 font-semibold mb-2">
                                            <Phone className="w-4 h-4 inline mr-2" />
                                            Teléfono *
                                        </label>
                                        <input
                                            type="tel"
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all"
                                            placeholder="Ej. +51 999 999 999"
                                            required
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-gray-800 dark:text-gray-100 font-semibold mb-2">
                                            <Mail className="w-4 h-4 inline mr-2" />
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all"
                                            placeholder="Ej. juan@email.com"
                                        />
                                    </div>
                                </div>

                                {/* Columna derecha */}
                                <div className="space-y-6">
                                    {/* Servicio de interés */}
                                    <div>
                                        <label className="block text-gray-800 dark:text-gray-100 font-semibold mb-2">
                                            Servicio de interés *
                                        </label>
                                        <div className="relative">
                                            <select
                                                name="servicio"
                                                value={formData.servicio}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 pr-10 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all appearance-none cursor-pointer hover:border-blue-400"
                                                required
                                            >
                                                <option value="">Selecciona un servicio</option>
                                                {servicios.map((servicio) => (
                                                    <option key={servicio} value={servicio}>
                                                        {servicio}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>

                                    {/* Fecha preferida */}
                                    <div>
                                        <label className="block text-gray-800 dark:text-gray-100 font-semibold mb-2">
                                            <Calendar className="w-4 h-4 inline mr-2" />
                                            Fecha preferida *
                                        </label>
                                        <input
                                            type="date"
                                            name="fecha"
                                            value={formData.fecha}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all"
                                            required
                                        />
                                    </div>

                                    {/* Mensaje adicional */}
                                    <div>
                                        <label className="block text-gray-800 dark:text-gray-100 font-semibold mb-2">
                                            <MessageSquare className="w-4 h-4 inline mr-2" />
                                            Mensaje adicional
                                        </label>
                                        <textarea
                                            name="mensaje"
                                            value={formData.mensaje}
                                            onChange={handleInputChange}
                                            rows={4}
                                            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all resize-none"
                                            placeholder="Cuéntanos más sobre tu consulta..."
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Botón de envío */}
                            <div className="pt-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none gradient-primary gradient-primary-hover"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            <span>Enviando...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Enviar solicitud</span>
                                            <Stethoscope className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    ) : (
                        /* Animación de confirmación */
                        <div className="p-8 text-center">
                            <div className="animate-pulse">
                                <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-12 h-12 text-green-500 animate-bounce" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                                    ¡Solicitud enviada!
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    Hemos recibido tu solicitud de cita. Nos pondremos en contacto contigo pronto para confirmar tu cita.
                                </p>
                                <div className="flex items-center justify-center space-x-2 text-blue-600">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                </div>
                            </div>
                        </div>
                    )}

                {/* Footer */}
                {!isSubmitted && (
                    <div className="px-6 pb-6">
                        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                            Al enviar este formulario, aceptas que nos pongamos en contacto contigo para confirmar tu cita.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}