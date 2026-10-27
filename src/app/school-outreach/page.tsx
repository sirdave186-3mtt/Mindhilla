import React from 'react';
import Link from 'next/link';
import { School, ShieldCheck, Heart, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata = {
    title: 'School Outreach | MindHilla',
    description:
        'Equipping secondary schools, students, and educators with emotional resilience, identity discovery, and healthy mental patterns.',
};

export default function SchoolOutreachPage() {
    const topics = [
        'Self-Worth & Adolescent Identity Formation',
        'Recognizing Early Signs of Depression & Anxiety',
        'Overcoming Peer Pressure & Destructive Traps',
        'Navigating Digital Addiction & Online Boundaries',
        'Educator Well-being & Compassion Fatigue Prevention',
    ];

    return (
        <div className="py-12 sm:py-20 space-y-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                {/* Intro Banner */}
                <div className="max-w-3xl space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 rounded-full border border-[#C5A059]/20">
                        Community Transformation
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#0D3B2E] tracking-tight">
                        MindHilla School Outreach
                    </h1>
                    <p className="text-[#5C6763] text-base sm:text-lg leading-relaxed">
                        Taking proactive mental health education and self-discovery into secondary schools. We work alongside students, teachers, and school leadership to cultivate emotionally secure learning environments.
                    </p>
                </div>

                {/* Core Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl border border-[#E8E5DF] space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-[#0D3B2E]/5 text-[#0D3B2E] flex items-center justify-center">
                            <Heart className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-[#0D3B2E]">Student Sessions</h3>
                        <p className="text-xs text-[#5C6763] leading-relaxed">
                            Interactive, age-appropriate assemblies that unpack identity, emotional processing, positive peer culture, and purpose.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-[#E8E5DF] space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-[#0D3B2E]/5 text-[#0D3B2E] flex items-center justify-center">
                            <School className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-[#0D3B2E]">Teacher Training</h3>
                        <p className="text-xs text-[#5C6763] leading-relaxed">
                            Equipping educators to spot behavioral changes, offer first-line emotional support, and safeguard their own mental wellness.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-[#E8E5DF] space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-[#0D3B2E]/5 text-[#0D3B2E] flex items-center justify-center">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-[#0D3B2E]">Counseling Frameworks</h3>
                        <p className="text-xs text-[#5C6763] leading-relaxed">
                            Assisting institutional administrators in establishing practical counseling pipelines and supportive response policies.
                        </p>
                    </div>
                </div>

                {/* Focus Areas & Invitation */}
                <div className="bg-[#0D3B2E] text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#175240] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                            Curriculum Focus
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-serif font-bold">
                            Key Themes Addressed in Our Programs
                        </h2>
                        <div className="space-y-2.5 pt-2">
                            {topics.map((t, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-stone-200">
                                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                                    <span>{t}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white text-[#1C2421] p-8 rounded-2xl space-y-4">
                        <h3 className="text-xl font-serif font-bold text-[#0D3B2E]">
                            Invite MindHilla to Your School
                        </h3>
                        <p className="text-xs text-[#5C6763] leading-relaxed">
                            We partner with public and private secondary schools across the Federal Capital Territory and beyond. Reach out to schedule a program for your student body.
                        </p>
                        <div className="pt-2">
                            <Link className="w-full inline-flex items-center justify-center gap-2 bg-[#0D3B2E] hover:bg-[#155744] text-white text-xs font-semibold py-3.5 px-6 rounded-xl transition" href="/contact?type=school-outreach">
                                <span>Request School Outreach Visit</span>
                                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}