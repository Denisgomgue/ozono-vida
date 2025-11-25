'use client';

import { useState } from 'react';
import { Calendar, Phone, Mail, User, MessageSquare, CheckCircle, Loader2, Stethoscope, ChevronDown } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function AppointmentForm() {
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
    const [ error, setError ] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [ e.target.name ]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

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

            // Resetear formulario después de 3 segundos
            setTimeout(() => {
                setIsSubmitted(false);
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

            setError(errorMessage);
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
            {/* Header del formulario */}
            <div className="bg-gradient-to-r from-corporate-blue to-corporate-blue-light px-6 py-8 text-white">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white">Reserva tu cita</h2>
                        <p className="text-blue-100">Completa el formulario y nos pondremos en contacto contigo</p>
                    </div>
                </div>
            </div>

            {/* Formulario */}
            <div className="p-6 lg:p-8">
                {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 px-4 py-3 rounded-xl">
                                <p className="text-sm">{error}</p>
                            </div>
                        )}

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
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-corporate-blue focus:border-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all"
                                        placeholder="Ej. Juan Pérez"
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
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-corporate-blue focus:border-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all"
                                        placeholder="Ej. +51 999 999 999"
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
                                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-corporate-blue focus:border-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all"
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
                                            required
                                            className="w-full px-4 py-3 pr-10 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-corporate-blue focus:border-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all appearance-none cursor-pointer hover:border-corporate-blue-light custom-select"
                                        >
                                            <option value="">Selecciona un servicio</option>
                                            <option value="Ozonoterapia">Ozonoterapia</option>
                                            <option value="Plasma Rico en Plaquetas">Plasma Rico en Plaquetas</option>
                                            <option value="Medicina Regenerativa">Medicina Regenerativa</option>
                                            <option value="Cóctel de Vida">Cóctel de Vida</option>
                                            <option value="Consulta General">Consulta General</option>
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
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-corporate-blue focus:border-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all"
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
                                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-corporate-blue focus:border-transparent dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all resize-none"
                                        placeholder="Cuéntanos más sobre tu consulta..."
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Botón de envío */}
                        <div className="pt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-corporate-blue to-corporate-blue-light text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        <span>Enviando...</span>
                                    </>
                                ) : (
                                    <>
                                        <Stethoscope className="w-5 h-5" />
                                        <span>Enviar solicitud de cita</span>
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Footer */}
                        <div className="pt-4">
                            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                                Al enviar este formulario, aceptas que nos pongamos en contacto contigo para confirmar tu cita.
                            </p>
                        </div>
                    </form>
                ) : (
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
            </div>
        </div>
    );
}

