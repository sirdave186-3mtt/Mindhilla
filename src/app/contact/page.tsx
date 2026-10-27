'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    CheckCircle2,
    AlertCircle,
    Loader2,
    MessageCircle,
    ShieldCheck
} from 'lucide-react';

export default function ContactPage() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('General Consultation');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '2349131897480';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        'Hello MindHilla, I would like to make an inquiry.'
    )}`;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg('');

        try {
            const hasRealKeys =
                process.env.NEXT_PUBLIC_SUPABASE_URL &&
                !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder');

            if (!hasRealKeys) {
                setSubmitted(true);
                return;
            }

            const { error } = await supabase.from('outreach_inquiries').insert([
                {
                    organization_name: 'Individual / General Contact',
                    contact_person: fullName,
                    email: email,
                    phone: phone,
                    inquiry_type: subject,
                    details: message,
                },
            ]);

            if (error) throw error;
            setSubmitted(true);
        } catch (err: any) {
            setErrorMsg(err.message || 'Unable to submit your message. Please reach out directly via WhatsApp.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="py-12 sm:py-20 space-y-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                {/* Header */}
                <div className="max-w-3xl space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 rounded-full border border-[#C5A059]/20">
                        Reach Out
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#0D3B2E] tracking-tight">
                        Connect with MindHilla
                    </h1>
                    <p className="text-[#5C6763] text-base sm:text-lg leading-relaxed">
                        Whether you wish to schedule an in-person consultation at our Abuja office, inquire about Academy programs, or ask a question, we are here to support your journey.
                    </p>
                </div>

                {/* Contact Information & Office Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Card 1: Abuja Center */}
                    <div className="bg-white p-8 rounded-2xl border border-[#E8E5DF] space-y-4 shadow-sm">
                        <div className="w-12 h-12 rounded-xl bg-[#0D3B2E]/5 text-[#0D3B2E] flex items-center justify-center">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-[#0D3B2E]">Physical Office</h3>
                        <p className="text-sm text-[#5C6763] leading-relaxed">
                            5 Senanga Street, Wuse Zone 5,<br />
                            Abuja FCT, Nigeria
                        </p>
                        <div className="pt-2 text-xs text-[#C5A059] font-medium flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-[#0D3B2E]" />
                            <span>Private & Secure Consultation Suites</span>
                        </div>
                    </div>

                    {/* Card 2: Phone & WhatsApp */}
                    <div className="bg-white p-8 rounded-2xl border border-[#E8E5DF] space-y-4 shadow-sm">
                        <div className="w-12 h-12 rounded-xl bg-[#0D3B2E]/5 text-[#0D3B2E] flex items-center justify-center">
                            <Phone className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-[#0D3B2E]">Phone & Instant Chat</h3>
                        <p className="text-sm text-[#5C6763] leading-relaxed">
                            Direct Phone: <a href="tel:+2349131897480" className="text-[#0D3B2E] font-semibold hover:underline">+234 913 189 7480</a>
                        </p>
                        <div className="pt-2">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition"
                            >
                                <MessageCircle className="w-4 h-4" />
                                <span>Message on WhatsApp</span>
                            </a>
                        </div>
                    </div>

                    {/* Card 3: Email & Hours */}
                    <div className="bg-white p-8 rounded-2xl border border-[#E8E5DF] space-y-4 shadow-sm">
                        <div className="w-12 h-12 rounded-xl bg-[#0D3B2E]/5 text-[#0D3B2E] flex items-center justify-center">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-[#0D3B2E]">Email & Operations</h3>
                        <p className="text-sm text-[#5C6763] leading-relaxed">
                            Email: <a href="mailto:hello@mindhilla.com" className="text-[#0D3B2E] font-semibold hover:underline">hello@mindhilla.com</a>
                        </p>
                        <div className="pt-2 text-xs text-[#5C6763] flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#0D3B2E]" />
                            <span>Monday – Saturday: 9:00 AM – 6:00 PM</span>
                        </div>
                    </div>

                </div>

                {/* Contact Form & Location Map Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                    {/* Inquiry Form */}
                    <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#E8E5DF] shadow-sm space-y-6">
                        <div className="space-y-1">
                            <h2 className="text-2xl font-serif font-bold text-[#0D3B2E]">Send Us a Message</h2>
                            <p className="text-xs text-[#5C6763]">
                                Leave a message and our team will get back to you within 24 hours.
                            </p>
                        </div>

                        {errorMsg && (
                            <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                                <AlertCircle className="w-4 h-4 shrink-0" />
                                <span>{errorMsg}</span>
                            </div>
                        )}

                        {submitted ? (
                            <div className="bg-[#0D3B2E] text-white p-8 rounded-xl text-center space-y-3">
                                <CheckCircle2 className="w-10 h-10 text-[#C5A059] mx-auto" />
                                <h3 className="text-xl font-serif font-bold">Message Delivered</h3>
                                <p className="text-stone-300 text-xs max-w-sm mx-auto">
                                    Thank you, {fullName}. We have received your inquiry and will respond shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-xs font-semibold text-[#0D3B2E] uppercase tracking-wider mb-1">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        placeholder="e.g. John Doe"
                                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8E5DF] text-sm text-[#1C2421] focus:outline-none focus:border-[#0D3B2E]"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-[#0D3B2E] uppercase tracking-wider mb-1">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="john@example.com"
                                            className="w-full px-4 py-2.5 rounded-xl border border-[#E8E5DF] text-sm text-[#1C2421] focus:outline-none focus:border-[#0D3B2E]"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-[#0D3B2E] uppercase tracking-wider mb-1">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="+234..."
                                            className="w-full px-4 py-2.5 rounded-xl border border-[#E8E5DF] text-sm text-[#1C2421] focus:outline-none focus:border-[#0D3B2E]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-[#0D3B2E] uppercase tracking-wider mb-1">
                                        Inquiry Subject *
                                    </label>
                                    <select
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8E5DF] text-sm text-[#1C2421] bg-white focus:outline-none focus:border-[#0D3B2E]"
                                    >
                                        <option value="General Consultation">General Consultation</option>
                                        <option value="Academy Masterclass Inquiry">Academy Masterclass Inquiry</option>
                                        <option value="School Outreach Inquiry">School Outreach Inquiry</option>
                                        <option value="Garden Experience Question">The Garden Experience</option>
                                        <option value="Media & Speaking Request">Media / Speaking Engagement</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-[#0D3B2E] uppercase tracking-wider mb-1">
                                        Your Message *
                                    </label>
                                    <textarea
                                        rows={4}
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="How can MindHilla assist you today?"
                                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8E5DF] text-sm text-[#1C2421] focus:outline-none focus:border-[#0D3B2E]"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0D3B2E] hover:bg-[#155744] text-white font-semibold py-3.5 px-6 rounded-xl transition shadow-md disabled:opacity-50"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin text-[#C5A059]" />
                                            <span>Sending Message...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send className="w-4 h-4 text-[#C5A059]" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Interactive Abuja Map / Location Card */}
                    <div className="bg-white rounded-2xl border border-[#E8E5DF] overflow-hidden shadow-sm space-y-6">
                        <div className="p-6 pb-0 space-y-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                                Our Location
                            </span>
                            <h3 className="text-xl font-serif font-bold text-[#0D3B2E]">
                                Abuja Consultation Center
                            </h3>
                            <p className="text-xs text-[#5C6763]">
                                Easily accessible in the center of Wuse Zone 5, Abuja FCT.
                            </p>
                        </div>

                        {/* Embedded Google Maps Viewport */}
                        <div className="relative w-full h-80 bg-stone-100">
                            <iframe
                                title="MindHilla Abuja Location Map"
                                src="https://maps.google.com/maps?q=5%20Senanga%20Street,%20Wuse%20Zone%205,%20Abuja&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                className="w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div className="p-6 pt-0 text-xs text-[#5C6763] space-y-1">
                            <p><strong>Note for In-Person Clients:</strong> In-person consultations are by prior appointment only to preserve client confidentiality and schedule buffer times between sessions.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}