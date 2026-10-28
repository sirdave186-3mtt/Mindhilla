'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import {
    Heart,
    Sparkles,
    School,
    Building2,
    CheckCircle2,
    Send,
    Loader2,
    AlertCircle,
    ArrowRight
} from 'lucide-react';

export default function SupportPage() {
    const [orgName, setOrgName] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [inquiryType, setInquiryType] = useState('Partner with The Garden Experience');
    const [details, setDetails] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const partnershipModels = [
        {
            title: 'Partner with The Garden Experience',
            badge: 'Flagship Event',
            desc: 'Support the annual gathering through financial sponsorship, venue collaboration, production logistics, or broadcast resources[cite: 4].',
            icon: Sparkles,
        },
        {
            title: 'Sponsor a School Outreach',
            badge: 'Youth & Classrooms',
            desc: 'Fund adolescent mental health education, counseling resources, and workshops for underserved secondary and primary schools[cite: 4].',
            icon: School,
        },
        {
            title: 'Corporate & Institutional Wellness',
            badge: 'Corporate Culture',
            desc: 'Collaborate to deliver ongoing mental wellness frameworks, executive debriefs, and staff resilience training for your organization[cite: 3, 4].',
            icon: Building2,
        },
        {
            title: 'Direct Restorative Giving',
            badge: 'Care Subsidies',
            desc: 'Contribute toward subsidized therapy sessions for individuals, youths, and single parents navigating severe trauma or emotional crisis[cite: 3, 4].',
            icon: Heart,
        },
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
                setSubmitted(true);
                return;
            }

            const { error } = await supabase.from('outreach_inquiries').insert([
                {
                    organization_name: orgName,
                    contact_person: contactPerson,
                    email: email,
                    phone: phone,
                    inquiry_type: inquiryType,
                    details: details,
                },
            ]);

            if (error) throw error;
            setSubmitted(true);
        } catch (err: any) {
            setErrorMsg(err.message || 'Unable to submit your partnership inquiry. Please reach out directly on WhatsApp.');
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
                        <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>Strategic Alignment & Transformation</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.18] max-w-3xl">
                        Partner with MindHilla
                    </h1>

                    <p className="text-stone-100 text-base sm:text-lg leading-relaxed max-w-2xl mt-4">
                        We partner with visionary organizations, philanthropic donors, and educational institutions committed to advancing emotional wellness, restoring families, and building resilient communities[cite: 3, 4].
                    </p>

                    <div className="pt-6">
                        <a
                            href="#partner-form"
                            className="inline-flex items-center gap-2 bg-[#035c17] hover:bg-[#0b7823] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all shadow-lg hover:scale-105 border border-white/20"
                        >
                            <span>Submit Partnership Proposal</span>
                            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. PARTNERSHIP MODELS (UNIFORM LIFTED CARDS) */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="max-w-3xl space-y-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                        Avenues of Impact
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#035c17]">
                        How You Can Collaborate with Us
                    </h2>
                    <p className="text-sm sm:text-base text-[#5C6763] leading-relaxed">
                        Choose a pillar below to align your organization or personal giving with sustainable emotional wellness initiatives[cite: 4].
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {partnershipModels.map((model, idx) => {
                        const Icon = model.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-white p-7 rounded-3xl border border-[#E8E5DF] flex flex-col justify-between hover:shadow-xl hover:border-[#035c17]/30 transition-all duration-300 shadow-sm"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="w-12 h-12 rounded-2xl bg-[#035c17]/5 text-[#035c17] flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-[#C5A059]" />
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#024010] bg-[#C5A059] px-2.5 py-0.5 rounded-full">
                                            {model.badge}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-serif font-bold text-[#035c17] leading-snug">
                                        {model.title}
                                    </h3>
                                    <p className="text-xs text-[#5C6763] leading-relaxed">
                                        {model.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 3. PROPOSAL INTAKE FORM */}
            <section id="partner-form" className="py-20 bg-[#FAF8F5] border-t border-[#E8E5DF]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    {submitted ? (
                        <div className="bg-[#035c17] text-white p-10 rounded-3xl shadow-xl text-center space-y-4 border border-white/10">
                            <div className="w-12 h-12 bg-[#C5A059]/20 text-[#C5A059] rounded-full flex items-center justify-center mx-auto">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-white">Partnership Inquiry Received</h3>
                            <p className="text-stone-200 text-sm max-w-md mx-auto leading-relaxed">
                                Thank you for reaching out to partner with MindHilla. Our executive directorate will review your proposal and schedule a preliminary alignment discussion[cite: 4].
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E8E5DF] shadow-sm space-y-6">
                            <div className="space-y-1">
                                <h3 className="text-2xl font-serif font-bold text-[#035c17]">Initiate a Partnership</h3>
                                <p className="text-xs text-[#5C6763]">
                                    Tell us about your organization and how you envision collaborating with MindHilla[cite: 4].
                                </p>
                            </div>

                            {errorMsg && (
                                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                                    <AlertCircle className="w-4 h-4 shrink-0" />
                                    <span>{errorMsg}</span>
                                </div>
                            )}

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-semibold text-[#035c17] uppercase tracking-wider mb-1.5">
                                        Organization / Entity Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={orgName}
                                        onChange={(e) => setOrgName(e.target.value)}
                                        placeholder="e.g. Hope Alliance or Individual"
                                        className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm text-[#1C2421] focus:outline-none focus:border-[#035c17]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-[#035c17] uppercase tracking-wider mb-1.5">
                                        Contact Person *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={contactPerson}
                                        onChange={(e) => setContactPerson(e.target.value)}
                                        placeholder="Your Full Name"
                                        className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm text-[#1C2421] focus:outline-none focus:border-[#035c17]"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-semibold text-[#035c17] uppercase tracking-wider mb-1.5">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="contact@entity.com"
                                        className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm text-[#1C2421] focus:outline-none focus:border-[#035c17]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-[#035c17] uppercase tracking-wider mb-1.5">
                                        Phone / WhatsApp *
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
                                    Partnership Area *
                                </label>
                                <select
                                    value={inquiryType}
                                    onChange={(e) => setInquiryType(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm text-[#1C2421] bg-white focus:outline-none focus:border-[#035c17]"
                                >
                                    <option value="Partner with The Garden Experience">Partner with The Garden Experience[cite: 4]</option>
                                    <option value="Sponsor a School Outreach">Sponsor a School Outreach Program[cite: 4]</option>
                                    <option value="Corporate Wellness Partnership">Corporate Wellness Partnership[cite: 4]</option>
                                    <option value="Direct Philanthropic Support">Direct Philanthropic Support[cite: 4]</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-[#035c17] uppercase tracking-wider mb-1.5">
                                    Proposed Collaboration Scope *
                                </label>
                                <textarea
                                    rows={4}
                                    required
                                    value={details}
                                    onChange={(e) => setDetails(e.target.value)}
                                    placeholder="Share details regarding your proposed sponsorship, program scope, or institutional collaboration..."
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
                                        <span>Submitting Proposal...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Submit Strategic Proposal</span>
                                        <Send className="w-4 h-4 text-[#C5A059]" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
}