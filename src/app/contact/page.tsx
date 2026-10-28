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
    ShieldCheck,
    Building2
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
        <div className="flex flex-col">
            {/* 1. CENTRALIZED CINEMATIC HERO SECTION */}
            <section className="relative overflow-hidden bg-black text-white min-h-[520px] sm:min-h-[580px] flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('/images/partner/partner-bg.jpg')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#024010]/85 via-black/75 to-black/90" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/20 text-xs font-semibold text-[#C5A059] backdrop-blur-md mb-6 shadow-sm">
                        <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>Abuja Center & Global Inquiries</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.18] max-w-3xl">
                        Connect with MindHilla
                    </h1>

                    <p className="text-stone-100 text-base sm:text-lg leading-relaxed max-w-2xl mt-4">
                        Whether you wish to schedule an in-person consultation at our Abuja office, inquire about masterclasses, or propose a partnership, our team is here for you.
                    </p>

                    <div className="pt-6">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all shadow-lg hover:scale-105"
                        >
                            <MessageCircle className="w-4 h-4" />
                            <span>Chat Immediately on WhatsApp</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. CONTACT INFORMATION CARDS */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Physical Office Card */}
                    <div className="bg-white p-8 rounded-3xl border border-[#E8E5DF] space-y-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-2xl bg-[#035c17]/5 text-[#035c17] flex items-center justify-center">
                            <MapPin className="w-6 h-6 text-[#C5A059]" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-[#035c17]">Abuja Office</h3>
                        <p className="text-sm text-[#5C6763] leading-relaxed">
                            5 Senanga Street, Wuse Zone 5,<br />
                            Abuja FCT, Nigeria[cite: 4]
                        </p>
                        <div className="pt-2 text-xs text-[#035c17] font-semibold flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                            <span>Private Consultation Suites (By Prior Booking)</span>
                        </div>
                    </div>

                    {/* Direct Line & WhatsApp Card */}
                    <div className="bg-white p-8 rounded-3xl border border-[#E8E5DF] space-y-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-2xl bg-[#035c17]/5 text-[#035c17] flex items-center justify-center">
                            <Phone className="w-6 h-6 text-[#C5A059]" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-[#035c17]">Direct Lines</h3>
                        <p className="text-sm text-[#5C6763] leading-relaxed">
                            Phone: <a href="tel:+2349131897480" className="text-[#035c17] font-bold hover:underline">+234 913 189 7480</a>[cite: 4]
                        </p>
                        <div className="pt-2">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#035c17] hover:text-[#0b7823] transition"
                            >
                                <span>Instant WhatsApp Dispatch</span>
                                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                            </a>
                        </div>
                    </div>

                    {/* Email & Hours Card */}
                    <div className="bg-white p-8 rounded-3xl border border-[#E8E5DF] space-y-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-2xl bg-[#035c17]/5 text-[#035c17] flex items-center justify-center">
                            <Mail className="w-6 h-6 text-[#C5A059]" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-[#035c17]">Official Email</h3>
                        <p className="text-sm text-[#5C6763] leading-relaxed">
                            Email: <a href="mailto:hello@mindhilla.com" className="text-[#035c17] font-bold hover:underline">hello@mindhilla.com</a>[cite: 4]
                        </p>
                        <div className="pt-2 text-xs text-[#5C6763] flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#035c17]" />
                            <span>Monday – Saturday: 9:00 AM – 6:00 PM</span>
                        </div>
                    </div>

                </div>

                {/* Form and Map Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start pt-6">

                    {/* Inquiry Form */}
                    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E8E5DF] shadow-sm space-y-6">
                        <div className="space-y-1">
                            <h2 className="text-2xl font-serif font-bold text-[#035c17]">Send Us a Message</h2>
                            <p className="text-xs text-[#5C6763]">
                                Leave a detailed message and our clinical intake desk will reply within 24 hours.
                            </p>
                        </div>

                        {errorMsg && (
                            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                                <AlertCircle className="w-4 h-4 shrink-0" />
                                <span>{errorMsg}</span>
                            </div>
                        )}

                        {submitted ? (
                            <div className="bg-[#035c17] text-white p-8 rounded-2xl text-center space-y-3">
                                <CheckCircle2 className="w-10 h-10 text-[#C5A059] mx-auto" />
                                <h3 className="text-xl font-serif font-bold">Message Delivered</h3>
                                <p className="text-stone-200 text-xs max-w-sm mx-auto">
                                    Thank you, {fullName}. We have received your inquiry and will respond promptly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-xs font-semibold text-[#035c17] uppercase tracking-wider mb-1.5">
                                        Your Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        placeholder="e.g. Lauretta Okalor"
                                        className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm text-[#1C2421] focus:outline-none focus:border-[#035c17]"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-[#035c17] uppercase tracking-wider mb-1.5">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="you@example.com"
                                            className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm text-[#1C2421] focus:outline-none focus:border-[#035c17]"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-[#035c17] uppercase tracking-wider mb-1.5">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="+234..."
                                            className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm text-[#1C2421] focus:outline-none focus:border-[#035c17]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-[#035c17] uppercase tracking-wider mb-1.5">
                                        Subject / Area of Interest *
                                    </label>
                                    <select
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm text-[#1C2421] bg-white focus:outline-none focus:border-[#035c17]"
                                    >
                                        <option value="General Consultation">General Consultation</option>
                                        <option value="Academy Masterclass Inquiry">Academy Masterclass Inquiry</option>
                                        <option value="School Outreach Inquiry">School Outreach Inquiry</option>
                                        <option value="The Garden Experience Inquiry">The Garden Experience</option>
                                        <option value="Speaking & Corporate Wellness">Speaking & Corporate Wellness</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-[#035c17] uppercase tracking-wider mb-1.5">
                                        Your Message *
                                    </label>
                                    <textarea
                                        rows={4}
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="How can MindHilla serve you today?"
                                        className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm text-[#1C2421] focus:outline-none focus:border-[#035c17]"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full inline-flex items-center justify-center gap-2 bg-[#035c17] hover:bg-[#0b7823] text-white font-semibold py-3.5 px-6 rounded-xl transition shadow-md disabled:opacity-50"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin text-[#C5A059]" />
                                            <span>Sending Message...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Confidential Message</span>
                                            <Send className="w-4 h-4 text-[#C5A059]" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Interactive Google Maps Viewport */}
                    <div className="bg-white rounded-3xl border border-[#E8E5DF] overflow-hidden shadow-sm space-y-6">
                        <div className="p-8 pb-0 space-y-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                                Physical Consultation Suites
                            </span>
                            <h3 className="text-2xl font-serif font-bold text-[#035c17]">
                                Abuja Location Map
                            </h3>
                            <p className="text-xs text-[#5C6763]">
                                Centrally situated at 5 Senanga Street, Wuse Zone 5, Abuja FCT[cite: 4].
                            </p>
                        </div>

                        <div className="relative w-full h-84 bg-stone-100">
                            <iframe
                                title="MindHilla Abuja Location Map"
                                src="https://maps.google.com/maps?q=5%20Senanga%20Street,%20Wuse%20Zone%205,%20Abuja&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                className="w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div className="p-8 pt-0 text-xs text-[#5C6763]">
                            <p><strong>Note for In-Person Visitors:</strong> To preserve client confidentiality and ensure unhurried sessions, all in-person consultations are strictly scheduled in advance.</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}