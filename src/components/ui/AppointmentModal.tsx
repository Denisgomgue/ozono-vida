'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Calendar, Phone, Mail, User, MessageSquare, CheckCircle, Loader2, Stethoscope, ChevronDown } from 'lucide-react';
import emailjs from '@emailjs/browser';

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

        try {
            const publicKey = process.env.NEXT_PUBLIC_PUBLICK_KEY_EMAILJS;
            const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID_EMAILJS;
            const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID_EMAILJS;

            // Logs de depuración (solo en desarrollo)
            if (process.env.NODE_ENV === 'development') {
                console.log('EmailJS Config:', {
                    publicKey: publicKey ? `✓ ${publicKey.substring(0, 10)}...` : '✗ Faltante',
                    serviceId: serviceId ? `✓ ${serviceId}` : '✗ Faltante',
                    templateId: templateId ? `✓ ${templateId}` : '✗ Faltante'
                });
            }

            if (!publicKey) {
                throw new Error('Las credenciales de EmailJS no están configuradas. Por favor, configura NEXT_PUBLIC_PUBLICK_KEY_EMAILJS en tu archivo .env.local');
            }

            if (!serviceId) {
                throw new Error('El Service ID de EmailJS no está configurado. Por favor, crea un servicio de email en EmailJS y configura NEXT_PUBLIC_SERVICE_ID_EMAILJS en tu archivo .env.local');
            }

            if (!templateId) {
                throw new Error('El Template ID de EmailJS no está configurado. Por favor, crea un template en EmailJS y configura NEXT_PUBLIC_TEMPLATE_ID_EMAILJS en tu archivo .env.local');
            }

            // Inicializar EmailJS con la public key (User ID)
            emailjs.init(publicKey);

            // Preparar los parámetros del template (estructura exacta del template de EmailJS)
            const templateParams = {
                from_name: formData.nombre,
                phone: formData.telefono,
                from_email: formData.email || 'No proporcionado',
                service: formData.servicio,
                date: formData.fecha,
                message: formData.mensaje || 'Sin mensaje adicional'
            };

            // Enviar el email usando EmailJS
            const response = await emailjs.send(
                serviceId,
                templateId,
                templateParams
            );

            console.log('Email enviado exitosamente:', response);

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
        } catch (err: unknown) {
            console.error('Error al enviar el formulario:', err);

            const error = err as { status?: number; text?: string; message?: string };
            console.error('Detalles del error:', {
                status: error?.status,
                text: error?.text,
                message: error?.message
            });

            // Mensaje de error más específico
            let errorMessage = 'Hubo un error al enviar tu solicitud. Por favor, intenta nuevamente o contáctanos directamente.';

            if (error?.status === 400) {
                errorMessage = 'Error 400: Verifica que el Service ID y Template ID estén correctamente configurados en tu archivo .env.local. Revisa la consola para más detalles.';
            } else if (error?.text) {
                errorMessage = `Error: ${error.text}. Por favor, verifica la configuración de EmailJS en tu archivo .env.local.`;
            } else if (error?.message) {
                errorMessage = error.message;
            }

            setIsSubmitting(false);
            // Mostrar error al usuario
            alert(errorMessage);
        }
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