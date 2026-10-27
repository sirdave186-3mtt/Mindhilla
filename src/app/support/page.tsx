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
    AlertCircle
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
            desc: 'Support the annual gathering through financial sponsorship, venue collaboration, or creative production[cite: 9, 17].',
            icon: Sparkles,
        },
        {
            title: 'Sponsor a School Outreach',
            desc: 'Fund adolescent mental health awareness, counseling resources, and workshops for underserved secondary schools[cite: 10, 17].',
            icon: School,
        },
        {
            title: 'Corporate & Institutional Wellness',
            desc: 'Collaborate to deliver mental wellness frameworks, leadership coaching, and employee debriefs for your team[cite: 6, 8].',
            icon: Building2,
        },
        {
            title: 'Direct Restorative Giving',
            desc: 'Contribute toward subsidized therapy sessions for individuals and single parents undergoing severe trauma or crisis[cite: 6].',
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
            setErrorMsg(err.message || 'Unable to submit your partnership inquiry. Please try again or reach out on WhatsApp.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="py-12 sm:py-20 space-y-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                {/* Page Header */}
                <div className="max-w-3xl space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 rounded-full border border-[#C5A059]/20">
                        Strategic Alignment
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#0D3B2E] tracking-tight">
                        Partner with MindHilla
                    </h1>
                    <p className="text-[#5C6763] text-base sm:text-lg leading-relaxed">
                        We partner with visionary organizations, donors, and educational leaders committed to advancing emotional wellness, restoring families, and building resilient communities[cite: 2, 4, 10].
                    </p>
                </div>

                {/* Partnership Models Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {partnershipModels.map((model, idx) => {
                        const Icon = model.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-white p-6 rounded-2xl border border-[#E8E5DF] space-y-3 hover:border-[#0D3B2E]/30 transition-all shadow-sm"
                            >
                                <div className="w-10 h-10 rounded-xl bg-[#0D3B2E]/5 text-[#0D3B2E] flex items-center justify-center">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-base font-serif font-bold text-[#0D3B2E]">
                                    {model.title}
                                </h3>
                                <p className="text-xs text-[#5C6763] leading-relaxed">
                                    {model.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Partnership Form Section */}
                <div className="max-w-3xl mx-auto">
                    {submitted ? (
                        <div className="bg-[#0D3B2E] text-white p-8 sm:p-10 rounded-2xl shadow-xl text-center space-y-4 border border-[#175240]">
                            <div className="w-12 h-12 bg-[#C5A059]/20 text-[#C5A059] rounded-full flex items-center justify-center mx-auto">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-white">Partnership Inquiry Received</h3>
                            <p className="text-stone-300 text-sm max-w-md mx-auto">
                                Thank you for your willingness to partner with MindHilla. Our leadership team will review your message and reach out promptly.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-10 rounded-2xl border border-[#E8E5DF] shadow-sm space-y-6">
                            <div className="space-y-1">
                                <h3 className="text-2xl font-serif font-bold text-[#0D3B2E]">Initiate a Partnership</h3>
                                <p className="text-xs text-[#5C6763]">
                                    Tell us about your organization and how you envision collaborating with MindHilla.
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
                                        Organization / Entity Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={orgName}
                                        onChange={(e) => setOrgName(e.target.value)}
                                        placeholder="e.g. Hope Foundation or Individual"
                                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8E5DF] text-sm text-[#1C2421] focus:outline-none focus:border-[#0D3B2E]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-[#0D3B2E] uppercase tracking-wider mb-1.5">
                                        Contact Person *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={contactPerson}
                                        onChange={(e) => setContactPerson(e.target.value)}
                                        placeholder="Your Full Name"
                                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8E5DF] text-sm text-[#1C2421] focus:outline-none focus:border-[#0D3B2E]"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-semibold text-[#0D3B2E] uppercase tracking-wider mb-1.5">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="contact@org.com"
                                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8E5DF] text-sm text-[#1C2421] focus:outline-none focus:border-[#0D3B2E]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-[#0D3B2E] uppercase tracking-wider mb-1.5">
                                        Phone / WhatsApp *
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
                                <label className="block text-xs font-semibold text-[#0D3B2E] uppercase tracking-wider mb-1.5">
                                    Partnership Area *
                                </label>
                                <select
                                    value={inquiryType}
                                    onChange={(e) => setInquiryType(e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E5DF] text-sm text-[#1C2421] bg-white focus:outline-none focus:border-[#0D3B2E]"
                                >
                                    <option value="Partner with The Garden Experience">Partner with The Garden Experience[cite: 17]</option>
                                    <option value="Sponsor a School Outreach">Sponsor a School Outreach Program[cite: 17]</option>
                                    <option value="Corporate Wellness Partnership">Corporate Wellness Partnership[cite: 17]</option>
                                    <option value="Direct Philanthropic Support">Direct Philanthropic Support[cite: 17]</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-[#0D3B2E] uppercase tracking-wider mb-1.5">
                                    Proposed Collaboration Details *
                                </label>
                                <textarea
                                    rows={4}
                                    required
                                    value={details}
                                    onChange={(e) => setDetails(e.target.value)}
                                    placeholder="Share details regarding your proposed partnership, sponsorship scope, or inquiry..."
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
                                        <span>Submitting Inquiry...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Submit Partnership Proposal</span>
                                        <Send className="w-4 h-4 text-[#C5A059]" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>

            </div>
        </div>
    );
}