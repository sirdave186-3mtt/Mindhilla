import React from 'react';
import Link from 'next/link';
import { Sparkles, Calendar, MapPin, Heart, BookOpen, Users, ArrowRight, CheckCircle2, Camera } from 'lucide-react';

export const metadata = {
    title: 'The Garden Experience | MindHilla',
    description:
        'Faith-based healing and transformation yearly event inspired by Genesis 2 and Isaiah 61:1–3. Encounter. Heal. Emerge.',
};

export default function GardenExperiencePage() {
    const edenPillars = [
        {
            title: 'Intimacy with God',
            desc: 'Drawing from Genesis 2 to return to the original design of communion, spiritual rest, and divine connection.',
            icon: Heart,
        },
        {
            title: 'Identity Restoration',
            desc: 'Unpacking your authentic design beyond trauma, personal brokenness, cultural pressure, and emotional wounds.',
            icon: Sparkles,
        },
        {
            title: 'Therapeutic Insights',
            desc: 'Integrating clinical counseling perspectives, guided processing, prayer, and practical restoration exercises.',
            icon: BookOpen,
        },
        {
            title: 'Authentic Community',
            desc: 'Sharing safe spaces with individuals committed to deep healing, honest reflection, and lasting renewal.',
            icon: Users,
        },
    ];

    // 6 Completed photos from the 2025 Conference in Drive
    const gallery2025 = [
        {
            title: 'Worship & Presence',
            category: 'Spiritual Alignment',
            image: '/images/garden/moment-1.jpg',
        },
        {
            title: 'Therapeutic Teaching',
            category: 'Clinical & Faith Insights',
            image: '/images/garden/moment-2.jpg',
        },
        {
            title: 'Emotional Release & Prayer',
            category: 'Healing Ministration',
            image: '/images/garden/moment-3.jpg',
        },
        {
            title: 'Safe Conversations',
            category: 'Vulnerable Community',
            image: '/images/garden/moment-4.jpg',
        },
        {
            title: 'Identity & Emergence',
            category: 'Restoration Moments',
            image: '/images/garden/moment-5.jpg',
        },
        {
            title: 'The Garden Gathering',
            category: 'Fellowship',
            image: '/images/garden/moment-2.jpg',
        },
    ];

    // Placeholder frames for the newly held 2026 conference
    const placeholders2026 = [
        { label: 'Keynote & Word Ministration', tag: '2026 Session 1' },
        { label: 'Panel on Broken Appetites & Wholeness', tag: '2026 Dialogue' },
        { label: 'Therapeutic Breakouts & Q&A', tag: '2026 Workshop' },
    ];

    return (
        <div className="flex flex-col">
            {/* 1. CENTRALIZED HERO SECTION */}
            <section className="relative overflow-hidden bg-[#024010] text-white min-h-[560px] sm:min-h-[620px] flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('/images/garden/moment-1.jpg')` }}
                />
                {/* Balanced Dark Gradient for Central Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#024010]/85 via-[#035c17]/75 to-black/85" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/20 text-xs font-semibold text-[#C5A059] backdrop-blur-md mb-6 shadow-sm">
                        <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>Encounter. Heal. Emerge.</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.18] max-w-3xl">
                        Garden Experience
                    </h1>

                    <p className="text-stone-100 text-sm sm:text-lg leading-relaxed max-w-2xl mt-4">
                        Garden Experience is our faith-based healing and transformation yearly event created to help individuals reconnect with God, rediscover their true identity, heal from emotional and relational wounds, and return to His original design for their lives.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
                        <Link
                            href="/support?type=garden-partner"
                            className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#d8b772] text-[#024010] text-sm font-bold px-7 py-3.5 rounded-full transition-all shadow-lg hover:scale-105"
                        >
                            <span>Partner or Sponsor</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                            href="#gallery-2025"
                            className="inline-flex items-center gap-2 bg-[#035c17] hover:bg-[#0b7823] text-white text-sm font-semibold px-7 py-3.5 rounded-full border border-white/20 transition-all shadow-md"
                        >
                            <Camera className="w-4 h-4 text-[#C5A059]" />
                            <span>Explore 2025 Pictures</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. SCRIPTURAL FOUNDATION */}
            <section className="py-20 bg-white border-b border-[#E8E5DF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                                The Eden Paradigm
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#035c17] leading-tight">
                                Inspired by the Picture of the Garden in Genesis 2
                            </h2>
                            <blockquote className="border-l-2 border-[#C5A059] pl-4 italic text-base text-[#1C2421] leading-relaxed">
                                “Inspired by the picture of the Garden in Genesis 2, Garden Experience speaks to the place of intimacy, identity, wholeness, relationship, and divine connection that humanity was created to experience.”
                            </blockquote>
                            <p className="text-sm text-[#5C6763] leading-relaxed">
                                Through deep conversations, teaching God’s word, worship, storytelling, therapeutic insights, prayer, creative expressions, and transformative gatherings, Garden Experience creates a safe and intentional space where people can pause, reflect, confront what is broken, encounter God, and begin the journey toward healing and restoration.
                            </p>
                            <div className="text-xs text-[#035c17] font-semibold flex items-center gap-4 pt-2">
                                <span>Genesis 2</span>
                                <span>•</span>
                                <span>Isaiah 61:1–3</span>
                                <span>•</span>
                                <span>Isaiah 60:1–3</span>
                            </div>
                        </div>

                        <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-xl border border-[#E8E5DF]">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url('/images/garden/moment-2.jpg')` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <span className="text-xs text-[#C5A059] uppercase tracking-wider font-semibold">Abuja FCT & Global Broadcast</span>
                                <p className="text-lg font-serif font-bold">Annual Restorative Gathering</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FOUR CORE PILLARS */}
            <section className="py-20 bg-[#FAF8F5] border-b border-[#E8E5DF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div className="max-w-2xl space-y-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                            What to Expect
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#035c17]">
                            Pillars of the Gathering
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {edenPillars.map((pillar, idx) => {
                            const Icon = pillar.icon;
                            return (
                                <div
                                    key={idx}
                                    className="bg-white p-8 rounded-3xl border border-[#E8E5DF] space-y-4 hover:border-[#035c17]/30 transition-all shadow-sm"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[#035c17]/5 text-[#035c17] flex items-center justify-center">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-[#035c17]">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-xs text-[#5C6763] leading-relaxed">
                                        {pillar.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4. GARDEN EXPERIENCE 2025 PICTURES */}
            <section id="gallery-2025" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="max-w-2xl space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                        Previous Edition
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#035c17]">
                        Garden Experience 2025 Pictures
                    </h2>
                    <p className="text-sm text-[#5C6763]">
                        Excerpts of healing, worship, honest sharing, and spiritual breakthrough from our 2025 gathering.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gallery2025.map((item, idx) => (
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
                                    {item.category}
                                </span>
                                <h4 className="font-serif font-bold text-lg text-white">
                                    {item.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. GARDEN EXPERIENCE 2026 (EXCERPTS & HIGHLIGHTS COMING SOON) */}
            <section className="py-16 bg-[#FAF8F5] border-t border-[#E8E5DF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
                        <div className="space-y-1">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                                Recent Edition (Abuja FCT)
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#035c17]">
                                Garden Experience 2026 Highlights
                            </h3>
                        </div>
                        <span className="text-xs font-semibold text-[#035c17] bg-[#035c17]/10 px-3.5 py-1.5 rounded-full">
                            Full Media & Pictures Processing
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {placeholders2026.map((slot, idx) => (
                            <div
                                key={idx}
                                className="h-64 rounded-2xl border-2 border-dashed border-[#035c17]/30 bg-white p-6 flex flex-col justify-between items-center text-center shadow-sm"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#035c17]/5 text-[#035c17] flex items-center justify-center mt-6">
                                    <Camera className="w-6 h-6 text-[#C5A059]" />
                                </div>
                                <div className="space-y-1 mb-4">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059]">
                                        {slot.tag}
                                    </span>
                                    <h4 className="font-serif font-bold text-sm text-[#035c17]">
                                        {slot.label}
                                    </h4>
                                    <p className="text-[11px] text-[#5C6763]">
                                        Official photography release coming soon.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. SPONSOR & INVITATION BANNER */}
            <section className="py-20 bg-white border-t border-[#E8E5DF]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-6">
                    <div className="w-12 h-12 rounded-full bg-[#035c17]/10 text-[#035c17] flex items-center justify-center mx-auto">
                        <Calendar className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#035c17]">
                        Be Part of the Next Garden Experience
                    </h2>
                    <p className="text-sm text-[#5C6763] max-w-lg mx-auto leading-relaxed">
                        Venue, registration access, and ministry sessions are announced to waitlist members first. Connect with our team to secure early priority.
                    </p>
                    <div className="pt-2 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact?type=garden-experience"
                            className="inline-flex items-center gap-2 bg-[#035c17] hover:bg-[#0b7823] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all shadow-md"
                        >
                            <span>Join Notification List</span>
                            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                        </Link>
                        <Link
                            href="/support?type=garden-partner"
                            className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#d8b772] text-[#024010] text-sm font-bold px-7 py-3.5 rounded-full transition-all shadow-md"
                        >
                            <span>Sponsor This Gathering</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}