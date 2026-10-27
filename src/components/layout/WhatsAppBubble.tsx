'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppBubble() {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '2349131897480';
    const prefilledMessage = encodeURIComponent(
        'Hello MindHilla, I would like to make an inquiry about your therapy sessions and programs.'
    );

    return (
        <a
            href={`https://wa.me/${whatsappNumber}?text=${prefilledMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group border border-white/20"
            aria-label="Direct WhatsApp Consultation"
        >
            <MessageCircle className="w-5 h-5 fill-white text-[#25D366] group-hover:rotate-12 transition-transform" />
            <span className="text-sm font-semibold tracking-wide hidden sm:inline">
                Chat with Us
            </span>
        </a>
    );
}