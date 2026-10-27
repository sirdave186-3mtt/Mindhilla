import React from 'react';
import BookingForm from '@/components/ui/BookingForm';
import { HeartHandshake, ShieldCheck, Sparkles, Flame, CheckCircle, Clock, MapPin } from 'lucide-react';

export const metadata = {
    title: 'Clinical & Advisory Services | MindHilla',
    description:
        'Confidential individual therapy, marriage counseling, and sexual addiction recovery services in Abuja and online.',
};

export default function ServicesPage() {
    const offerings = [
        {
            id: 'individual',
            title: 'Therapy & Clinical Counseling',
            icon: HeartHandshake,
            tag: 'Individual Care',
            summary:
                'Professional, paid clinical counseling tailored to help individuals untangle emotional distress, trauma, unresolved grief, and identity struggles in an empathetic, non-judgmental space.',
            details: [
                'Confidential 1-on-1 virtual or in-person sessions',
                'Cognitive & emotional processing frameworks',
                'Grief, loss, and trauma recovery pathways',
                'Structured progress tracking and behavioral exercises',
            ],
            mode: 'Online (Zoom / Meet) & Abuja Clinic',
            duration: '50 Minutes per Session',
        },
        {
            id: 'couples',
            title: 'Relationship & Marriage Counseling',
            icon: Sparkles,
            tag: 'Singles, Engaged & Married',
            summary:
                'Targeted guidance to assist couples in identifying toxic relational cycles, establishing healthy boundaries, deepening intimacy, and building communication resilience.',
            details: [
                'Premarital alignment & temperament assessment',
                'Conflict de-escalation & communication repairs',
                'Infidelity & betrayal recovery frameworks',
                'Family system balancing & generational pattern shifts',
            ],
            mode: 'Joint Online Sessions or In-Clinic',
            duration: '60 - 75 Minutes per Session',
        },
        {
            id: 'addiction',
            title: 'Sexual Addiction & Compulsive Behavior Recovery',
            icon: Flame,
            tag: 'Specialized Pathway',
            summary:
                'Structured, evidence-informed support addressing pornography compulsion, compulsive lust, emotional shame loops, and trauma roots to restore personal integrity and healthy patterns.',
            details: [
                'Root-cause assessment of addictive triggers',
                'Breaking shame loops & emotional isolation',
                'Coping mechanics replacement & relapse prevention',
                'Gradual restoration of healthy intimacy and self-respect',
            ],
            mode: 'Strictly Confidential Individual Sessions',
            duration: '60 Minutes per Session',
        },
    ];

    return (
        <div className="py-12 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                {/* Header */}
                <div className="max-w-3xl space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 rounded-full border border-[#C5A059]/20">
                        Professional Practice
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#0D3B2E] tracking-tight">
                        Clinical Therapy & Specialized Recovery
                    </h1>
                    <p className="text-[#5C6763] text-base sm:text-lg leading-relaxed">
                        Every journey begins with a safe, confidential space. Our practitioners integrate professional therapeutic insight, clinical ethics, and faith-informed perspectives to facilitate deep, lasting transformation.
                    </p>
                </div>

                {/* Services Detail List */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {offerings.map((svc) => {
                        const Icon = svc.icon;
                        return (
                            <div
                                key={svc.id}
                                id={svc.id}
                                className="bg-white rounded-2xl border border-[#E8E5DF] p-8 flex flex-col justify-between hover:border-[#0D3B2E]/30 transition-all hover:shadow-lg"
                            >
                                <div className="space-y-5">
                                    <div className="flex justify-between items-center">
                                        <div className="w-12 h-12 rounded-xl bg-[#0D3B2E]/5 text-[#0D3B2E] flex items-center justify-center">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-semibold text-[#0D3B2E] bg-stone-100 px-3 py-1 rounded-full">
                                            {svc.tag}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-serif font-bold text-[#0D3B2E]">
                                        {svc.title}
                                    </h2>

                                    <p className="text-sm text-[#5C6763] leading-relaxed">
                                        {svc.summary}
                                    </p>

                                    <div className="pt-2 border-t border-[#E8E5DF] space-y-2.5">
                                        {svc.details.map((point, idx) => (
                                            <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1C2421]">
                                                <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                                                <span>{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-6 mt-6 border-t border-[#E8E5DF] space-y-2 text-xs text-[#5C6763]">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-[#0D3B2E]" />
                                        <span>{svc.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-[#0D3B2E]" />
                                        <span>{svc.mode}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Confidentiality Commitment */}
                <div className="bg-[#0D3B2E] text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2 max-w-2xl">
                        <div className="flex items-center gap-2 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Ethical Standard</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-white">
                            Absolute Clinical Confidentiality
                        </h3>
                        <p className="text-stone-300 text-sm leading-relaxed">
                            Your vulnerability is honored. All communications, clinical notes, and session details are preserved under rigorous standards of confidentiality and professional discretion.
                        </p>
                    </div>
                    <a
                        href="#booking-intake"
                        className="shrink-0 bg-[#C5A059] hover:bg-[#d8b772] text-[#08261D] font-bold text-sm px-6 py-3.5 rounded-full transition-all"
                    >
                        Schedule Session Below
                    </a>
                </div>

                {/* Intake Booking Section */}
                <div id="booking-intake" className="pt-6">
                    <div className="max-w-3xl mx-auto">
                        <BookingForm />
                    </div>
                </div>

            </div>
        </div>
    );
}