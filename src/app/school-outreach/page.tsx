import React from 'react';
import Link from 'next/link';
import { School, Heart, ShieldCheck, CheckCircle2, ArrowRight, Users, BookOpen } from 'lucide-react';

export const metadata = {
    title: 'School Outreach | MindHilla',
    description:
        'Taking mental health and emotional wellness education into classrooms. Building healthier minds. Shaping healthier futures.',
};

export default function SchoolOutreachPage() {
    const topics = [
        'Self-Worth & Adolescent Identity Formation',
        'Recognizing Early Signs of Depression, Stress & Anxiety',
        'Navigating Peer Pressure & Making Wise Decisions',
        'Healthy Relational Boundaries & Communication',
        'Digital Wellness & Overcoming Smartphone Addiction',
        'Educator Self-Care & Compassion Fatigue Prevention',
    ];

    const galleryItems = [
        {
            title: 'Classroom Conversations',
            audience: 'Secondary Students',
            image: '/images/outreach/session-1.jpg',
        },
        {
            title: 'School Hall Assembly',
            audience: 'Whole School Community',
            image: '/images/outreach/session-2.jpg',
        },
        {
            title: 'Interactive Q&A Circles',
            audience: 'Safe Spaces',
            image: '/images/outreach/session-3.png',
        },
        {
            title: 'Counseling & Mentorship',
            audience: '1-on-1 Student Guidance',
            image: '/images/outreach/session-4.jpeg',
        },
        {
            title: 'Educator & Staff Wellness',
            audience: 'Teachers & Leadership',
            image: '/images/outreach/session-5.png',
        },
        {
            title: 'Youth Identity Workshops',
            audience: 'Empowerment Sessions',
            image: '/images/hero/header-4.png',
        },
    ];

    return (
        <div className="flex flex-col">
            {/* 1. CENTRALIZED HERO SECTION WITH session-1.jpg */}
            <section className="relative overflow-hidden bg-[#024010] text-white min-h-[560px] sm:min-h-[620px] flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('/images/outreach/session-1.jpg')` }}
                />
                {/* Balanced Dark Gradient for Central Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#024010]/85 via-[#035c17]/75 to-black/85" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/20 text-xs font-semibold text-[#C5A059] backdrop-blur-md mb-6 shadow-sm">
                        <School className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>Building Healthier Minds. Shaping Healthier Futures.</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.18] max-w-3xl">
                        Taking Mental Health to the Classrooms
                    </h1>

                    <p className="text-stone-100 text-sm sm:text-lg leading-relaxed max-w-2xl mt-4">
                        We equip students, educators and school communities with practical tools for emotional wellness, healthy relationships, self-awareness and personal growth.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
                        <Link
                            href="/contact?type=school-outreach"
                            className="inline-flex items-center gap-2 bg-[#035c17] hover:bg-[#0b7823] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all shadow-lg hover:scale-105 border border-white/20"
                        >
                            <span>Invite MindHilla to Your School</span>
                            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                        </Link>
                        <Link
                            href="/support?type=sponsor-school"
                            className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#d8b772] text-[#024010] text-sm font-bold px-7 py-3.5 rounded-full transition-all shadow-lg hover:scale-105"
                        >
                            <span>Sponsor a School Outreach</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. OVERVIEW */}
            <section className="py-20 bg-white border-b border-[#E8E5DF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl space-y-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                            About MindHilla School Outreach
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#035c17] leading-tight">
                            Proactive Emotional Wellness Education
                        </h2>
                        <p className="text-[#5C6763] text-base sm:text-lg leading-relaxed">
                            MindHilla takes mental health and emotional wellness education into schools through programmes designed for students, educators and the wider school community. Topics may include identity, self-esteem, emotional wellbeing, relationships, healthy boundaries, personal development and other age-appropriate mental health concerns.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. CORE PROGRAM TOPICS */}
            <section className="py-20 bg-[#FAF8F5] border-b border-[#E8E5DF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div className="max-w-2xl space-y-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                            Program Scope
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#035c17]">
                            Key Focus Areas in Schools
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topics.map((topic, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-6 rounded-2xl border border-[#E8E5DF] flex items-start gap-3.5 shadow-sm hover:border-[#035c17]/30 transition-all"
                            >
                                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                                <span className="text-sm font-semibold text-[#1C2421]">{topic}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. REAL OUTREACH MOMENTS GALLERY */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="max-w-2xl space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                        Impact on the Ground
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#035c17]">
                        Classroom & Assembly Engagements
                    </h2>
                    <p className="text-sm text-[#5C6763]">
                        Empowering students and teachers in secondary and primary school environments.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative h-80 rounded-2xl overflow-hidden border border-[#E8E5DF] shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                style={{ backgroundImage: `url('${item.image}')` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] bg-[#C5A059]/20 px-2.5 py-0.5 rounded-full border border-[#C5A059]/30">
                                    {item.audience}
                                </span>
                                <h4 className="font-serif font-bold text-lg text-white">
                                    {item.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. INVITATION & SPONSOR BANNER */}
            <section className="py-20 bg-[#FAF8F5] border-t border-[#E8E5DF]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#035c17]">
                        Bring MindHilla to Your Institution
                    </h2>
                    <p className="text-sm text-[#5C6763] max-w-xl mx-auto leading-relaxed">
                        We work with primary, secondary, and tertiary schools across Abuja and surrounding territories to build emotionally resilient cultures.
                    </p>
                    <div className="pt-2 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact?type=school-outreach"
                            className="inline-flex items-center gap-2 bg-[#035c17] hover:bg-[#0b7823] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all shadow-md"
                        >
                            <span>Request School Visit</span>
                            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                        </Link>
                        <Link
                            href="/support?type=sponsor-school"
                            className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#d8b772] text-[#024010] text-sm font-bold px-7 py-3.5 rounded-full transition-all shadow-md"
                        >
                            <span>Sponsor Outreach Sessions</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}