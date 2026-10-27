import React from 'react';
import Link from 'next/link';
import { Sparkles, Calendar, MapPin, Heart, BookOpen, Users, ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'The Garden Experience | MindHilla',
    description:
        'An annual faith-informed restoration gathering bringing people back to authentic identity, healing, and intimate connection.',
};

export default function GardenExperiencePage() {
    const pillars = [
        {
            title: 'Divine Connection & Intimacy',
            desc: 'Drawing from Genesis 2 to return to the original design of unfiltered communion with God and inner peace.',
            icon: Heart,
        },
        {
            title: 'Therapeutic Restoration',
            desc: 'Integrating clinical insights to confront deep emotional scars, heartbreak, and unaddressed trauma in a supportive space.',
            icon: Sparkles,
        },
        {
            title: 'Authentic Community',
            desc: 'Gathering with honest individuals journeying toward wholeness, breaking isolation through vulnerable sharing.',
            icon: Users,
        },
        {
            title: 'Scriptural Alignment',
            desc: 'Anchored in Isaiah 61:1–3, receiving beauty for ashes and discovering restorative strength for life ahead.',
            icon: BookOpen,
        },
    ];

    return (
        <div className="py-12 sm:py-20 space-y-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                {/* Hero Section */}
                <div className="bg-[#08261D] text-white rounded-3xl p-8 sm:p-14 lg:p-16 border border-[#124234] relative overflow-hidden">
                    <div className="max-w-3xl space-y-6 relative z-10">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/15 px-3.5 py-1.5 rounded-full border border-[#C5A059]/30">
                            Flagship Annual Gathering
                        </span>
                        <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight leading-tight">
                            The Garden Experience
                        </h1>
                        <p className="text-sm sm:text-lg text-stone-300 leading-relaxed">
                            Encounter. Heal. Emerge. An intentional gathering designed to help you pause, reconnect with your authentic design, and experience profound emotional and spiritual renewal.
                        </p>

                        <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-stone-300 pt-2">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-[#C5A059]" />
                                <span>Annual Gathering (Abuja & Virtual Broadcast)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-[#C5A059]" />
                                <span>Abuja FCT, Nigeria</span>
                            </div>
                        </div>

                        <div className="pt-4 flex flex-wrap gap-4">
                            <Link className="bg-[#C5A059] hover:bg-[#d8b772] text-[#08261D] text-sm font-bold px-6 py-3.5 rounded-full transition-all shadow-md" href="/support?type=garden-partner">
                                Partner or Sponsor The Gathering
                            </Link>
                            <a
                                href="#pillars"
                                className="bg-white/10 hover:bg-white/15 text-white text-sm font-semibold px-6 py-3.5 rounded-full border border-white/20 transition-all"
                            >
                                Explore the Experience
                            </a>
                        </div>
                    </div>
                </div>

                {/* Biblical & Clinical Foundation */}
                <div id="pillars" className="space-y-8">
                    <div className="max-w-2xl space-y-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                            The Core Framework
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3B2E]">
                            Restoring the Original Pattern
                        </h2>
                        <p className="text-sm text-[#5C6763] leading-relaxed">
                            Inspired by the imagery of Eden in Genesis 2 and the mantle of restoration in Isaiah 61, this gathering bridges therapeutic depth with living faith.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pillars.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="bg-white p-6 rounded-2xl border border-[#E8E5DF] space-y-3 hover:border-[#0D3B2E]/30 transition-all shadow-sm"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-[#0D3B2E]/5 text-[#0D3B2E] flex items-center justify-center">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-serif font-bold text-[#0D3B2E]">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-[#5C6763] leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Registration & Waiting List Banner */}
                <div className="bg-[#F4F1EA] rounded-2xl p-8 sm:p-12 border border-[#E8E5DF] text-center space-y-4 max-w-3xl mx-auto">
                    <span className="text-xs font-bold text-[#0D3B2E] uppercase tracking-wider">
                        Be the First to Know
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3B2E]">
                        Join the Next Garden Experience Waitlist
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C6763] max-w-lg mx-auto">
                        Registration details and speaker announcements will be released to waitlist members first.
                    </p>
                    <div className="pt-2">
                        <Link className="inline-flex items-center gap-2 bg-[#0D3B2E] hover:bg-[#155744] text-white text-xs font-semibold px-6 py-3 rounded-full transition-all" href="/contact">
                            <span>Notify Me on Launch</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}