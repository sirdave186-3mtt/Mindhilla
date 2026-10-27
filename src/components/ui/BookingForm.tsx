'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface BookingFormProps {
    defaultService?: string;
}

export default function BookingForm({ defaultService = 'Individual Therapy' }: BookingFormProps) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [serviceType, setServiceType] = useState(defaultService);
    const [preferredMode, setPreferredMode] = useState('Online');
    const [preferredDate, setPreferredDate] = useState('');
    const [notes, setNotes] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const servicesList = [
        'Individual Therapy',
        'Relationship & Marriage Counseling',
        'Premarital Counseling',
        'Unmasked: Sexual Addiction Recovery',
        'Corporate / Institutional Wellness Consultation',
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg('');

        try {
            const hasRealKeys =
                process.env.NEXT_PUBLIC_SUPABASE_URL &&
                !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder');

            if (!hasRealKeys) {
                // Fallback for development if keys aren't in .env.local yet
                console.warn('Supabase credentials not configured in .env.local yet.');
                setSubmitted(true);
                return;
            }

            const { error } = await supabase.from('consultation_bookings').insert([
                {
                    full_name: fullName,
                    email: email,
                    phone: phone,
                    service_type: serviceType,
                    preferred_mode: preferredMode,
                    preferred_date: preferredDate || null,
                    notes: notes || null,
                },
            ]);

            if (error) throw error;
            setSubmitted(true);
        } catch (err: any) {
            console.error('Booking submission error:', err);
            setErrorMsg(
                err.message || 'Unable to record your booking. Please confirm Supabase credentials or contact via WhatsApp.'
            );
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        const whatsappText = encodeURIComponent(
            `Hello MindHilla, I just submitted a booking request for ${serviceType} (${fullName}).`
        );

        return (
            <div className="bg-[#0D3B2E] text-white p-8 sm:p-10 rounded-2xl shadow-xl text-center space-y-5 border border-[#175240]">
                <div className="w-14 h-14 bg-[#C5A059]/20 text-[#C5A059] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">Booking Request Received</h3>
                <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-medium">{fullName}</span>. Your details have been securely logged. Our clinical administrator will review and reach out within 24 hours.
                </p>
                <div className="pt-2">
                    <a
                        href={`https://wa.me/2349131897480?text=${whatsappText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all"
                    >
                        <span>Notify Us Immediately on WhatsApp</span>
                    </a>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-10 rounded-2xl border border-[#E8E5DF] shadow-sm space-y-6">
            <div className="space-y-1">
                <h3 className="text-2xl font-serif font-bold text-[#0D3B2E]">Confidential Consultation Intake</h3>
                <p className="text-xs sm:text-sm text-[#5C6763]">
                    All information is held under strict professional and clinical confidentiality.
                </p>
            </div>

            {errorMsg && (
                <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label className="block text-xs font-semibold text-[#0D3B2E] uppercase tracking-wider mb-1.5">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Lauretta Okalor"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8E5DF] focus:outline-none focus:border-[#0D3B2E] text-sm text-[#1C2421]"
                    />
                </div>

                <div>
                    <label className="block text-xs font-semibold text-[#0D3B2E] uppercase tracking-wider mb-1.5">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. client@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8E5DF] focus:outline-none focus:border-[#0D3B2E] text-sm text-[#1C2421]"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label className="block text-xs font-semibold text-[#0D3B2E] uppercase tracking-wider mb-1.5">
                        Phone Number / WhatsApp *
                    </label>
                    <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+234..."
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8E5DF] focus:outline-none focus:border-[#0D3B2E] text-sm text-[#1C2421]"
                    />
                </div>

                <div>
                    <label className="block text-xs font-semibold text-[#0D3B2E] uppercase tracking-wider mb-1.5">
                        Service Required *
                    </label>
                    <select
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8E5DF] focus:outline-none focus:border-[#0D3B2E] text-sm text-[#1C2421] bg-white"
                    >
                        {servicesList.map((svc) => (
                            <option key={svc} value={svc}>
                                {svc}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label className="block text-xs font-semibold text-[#0D3B2E] uppercase tracking-wider mb-1.5">
                        Preferred Session Mode *
                    </label>
                    <select
                        value={preferredMode}
                        onChange={(e) => setPreferredMode(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8E5DF] focus:outline-none focus:border-[#0D3B2E] text-sm text-[#1C2421] bg-white"
                    >
                        <option value="Online">Virtual / Online (Secure Video)</option>
                        <option value="In-Person (Abuja)">In-Person (Wuse Zone 5, Abuja)</option>
                    </select>
                </div>

                <div>
                    <label className="block text-xs font-semibold text-[#0D3B2E] uppercase tracking-wider mb-1.5">
                        Preferred Date
                    </label>
                    <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8E5DF] focus:outline-none focus:border-[#0D3B2E] text-sm text-[#1C2421]"
                    />
                </div>
            </div>

            <div>
                <label className="block text-xs font-semibold text-[#0D3B2E] uppercase tracking-wider mb-1.5">
                    Brief Context / Notes (Optional)
                </label>
                <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Briefly describe what brings you to seek therapy or counseling..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E5DF] focus:outline-none focus:border-[#0D3B2E] text-sm text-[#1C2421]"
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0D3B2E] hover:bg-[#155744] text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow disabled:opacity-50"
            >
                {loading ? (
                    <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#C5A059]" />
                        <span>Submitting Securely...</span>
                    </>
                ) : (
                    <>
                        <span>Submit Consultation Request</span>
                        <Send className="w-4 h-4 text-[#C5A059]" />
                    </>
                )}
            </button>
        </form>
    );
}