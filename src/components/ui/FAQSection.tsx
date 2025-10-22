'use client';

import { ArrowRight } from 'lucide-react';
import React from 'react';

interface FAQ {
    pregunta: string;
    respuesta: string;
}

interface FAQSectionProps {
    faqs: FAQ[];
    title: string;
    subtitle: string;
}

export default function FAQSection({ faqs, title, subtitle }: FAQSectionProps) {
    const [openFaq, setOpenFaq] = React.useState<number | null>(null);

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4 md:px-8 lg:px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-corporate-text-dark dark:text-white mb-6">
                        {title}
                    </h2>
                    <p className="text-xl text-corporate-text-muted dark:text-gray-300">
                        {subtitle}
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                            <button
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 rounded-2xl transition-colors"
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            >
                                <span className="font-semibold text-corporate-text-dark dark:text-white pr-4">
                                    {faq.pregunta}
                                </span>
                                <ArrowRight
                                    className={`w-5 h-5 text-corporate-blue transition-transform ${
                                        openFaq === index ? 'rotate-90' : ''
                                    }`}
                                />
                            </button>
                            {openFaq === index && (
                                <div className="px-6 pb-4">
                                    <p className="text-corporate-text-muted dark:text-gray-300 leading-relaxed">
                                        {faq.respuesta}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
