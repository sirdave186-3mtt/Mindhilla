import React from 'react';
import Link from 'next/link';
import {
    HeartHandshake,
    ShieldCheck,
    Sparkles,
    Award,
    BookOpen,
    Users,
    Compass,
    ArrowRight
} from 'lucide-react';

export const metadata = {
    title: 'About Us & Leadership | MindHilla',
    description:
        'Meet the multidisciplinary team and clinical leadership at MindHilla guiding individuals and families toward wholeness.',
};

export default function AboutPage() {
    const values = [
        {
            title: 'Professionalism',
            desc: 'We uphold rigorous standards of clinical care, confidentiality, and ethical responsibility in every interaction[cite: 3].',
            icon: ShieldCheck,
        },
        {
            title: 'Integrity',
            desc: 'We act with absolute honesty, transparency, and deep honor for the vulnerable trust placed in us[cite: 3].',
            icon: Award,
        },
        {
            title: 'Empathy',
            desc: 'We listen with intentional compassion and non-judgmental care, seeking to understand the unique story behind every pain[cite: 3].',
            icon: HeartHandshake,
        },
        {
            title: 'Excellence',
            desc: 'We are committed to continuous learning, refined methodologies, and lasting restorative impact[cite: 3].',
            icon: Sparkles,
        },
    ];

    const culture = [
        { title: 'Learn', desc: 'Continual learning, shared knowledge, and professional development[cite: 4].' },
        { title: 'Connect', desc: 'Open, compassionate communication that fosters genuine belonging[cite: 4].' },
        { title: 'Collaborate', desc: 'Cross-functional teamwork honoring diverse therapeutic perspectives[cite: 4].' },
        { title: 'Create', desc: 'Innovative frameworks, critical thinking, and fresh therapeutic approaches[cite: 4].' },
        { title: 'Support', desc: 'Empowering team members so together we provide exemplary client care[cite: 4].' },
        { title: 'Respect', desc: 'Honoring every individual with dignity regardless of role or background[cite: 4].' },
    ];

    const team = [
        {
            name: 'Lauretta Okalor',
            role: 'Relationship & Trauma Therapist',
            category: 'Clinical Advisory',
        },
        {
            name: 'Manasseh Ozege',
            role: 'Managing Director',
            category: 'Executive Leadership',
        },
        {
            name: 'Mimidoo Uyeh',
            role: 'Course Administrator & Lead Presenter',
            category: 'Academy & Programs',
        },
        {
            name: 'Rufus E. Ejukonemu',
            role: 'Media & Publicity Lead',
            category: 'Media & Outreach',
        },
        {
            name: 'Marcillina Okalor',
            role: 'Non-Executive Director',
            category: 'Governance',
        },
        {
            name: 'Chidinma Victoria Iwegbu',
            role: 'Grief & Trauma Counselor',
            category: 'Clinical Care',
        },
        {
            name: 'Hammed Lateefat O.',
            role: 'Mental Health Therapist',
            category: 'Clinical Care',
        },
        {
            name: 'Sunday E. Atumeyi',
            role: 'Protocol & Logistics Lead',
            category: 'Operations',
        },
        {
            name: 'Ruth K. Tsav-Iv',
            role: 'Financial Secretary',
            category: 'Finance & Compliance',
        },
        {
            name: 'Jennifer Nnamani',
            role: 'Content Creation Lead',
            category: 'Media & Brand',
        },
        {
            name: 'Jesse Mamman',
            role: 'Prayer & Spiritual Alignment Lead',
            category: 'Spiritual Care',
        },
        {
            name: 'Helen Mnena G. Esq.',
            role: 'Legal Advisor',
            category: 'Legal & Ethics',
        },
    ];

    return (
        <div className="py-12 sm:py-20 space-y-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

                {/* Story & Philosophical Foundation */}
                <div className="max-w-3xl space-y-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 rounded-full border border-[#C5A059]/20">
                        Who We Are
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#0D3B2E] tracking-tight">
                        Restoring individuals, relationships, and families to their original design[cite: 2].
                    </h1>
                    <p className="text-[#5C6763] text-base sm:text-lg leading-relaxed">
                        MindHilla is a healing and transformation brand focused on emotional wellness, identity restoration, healthy relationships, and personal growth[cite: 2]. Through professional therapy, transformational masterclasses, school outreach, signature experiences, and digital media, we help people heal and cultivate whole, purposeful lives[cite: 2].
                    </p>
                </div>

                {/* Vision & Mission Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#0D3B2E] text-white p-8 sm:p-10 rounded-3xl space-y-4 border border-[#175240]">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                            Our Vision
                        </span>
                        <h2 className="text-2xl font-serif font-bold">
                            Restoring People to Their Original Design[cite: 2]
                        </h2>
                        <p className="text-stone-300 text-sm leading-relaxed">
                            To bring healing and wholeness to individuals, relationships, and families, restoring people to their original design and empowering them to live in love, purpose, and wholeness[cite: 2].
                        </p>
                    </div>

                    <div className="bg-white text-[#1C2421] p-8 sm:p-10 rounded-3xl border border-[#E8E5DF] space-y-4 shadow-sm">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                            Our Mission
                        </span>
                        <h2 className="text-2xl font-serif font-bold text-[#0D3B2E]">
                            Transformative Pathways to Wholeness[cite: 2]
                        </h2>
                        <p className="text-[#5C6763] text-sm leading-relaxed">
                            To create transformative pathways to healing and personal growth through compassionate therapy, education, speaking, community outreach, meaningful experiences, media, and transformational resources[cite: 2].
                        </p>
                    </div>
                </div>

                {/* Core Values */}
                <div className="space-y-8">
                    <div className="max-w-2xl space-y-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                            Guiding Principles
                        </span>
                        <h2 className="text-3xl font-serif font-bold text-[#0D3B2E]">
                            Our Core Values[cite: 3]
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((val, idx) => {
                            const Icon = val.icon;
                            return (
                                <div
                                    key={idx}
                                    className="bg-white p-6 rounded-2xl border border-[#E8E5DF] space-y-3 hover:border-[#0D3B2E]/30 transition-all shadow-sm"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-[#0D3B2E]/5 text-[#0D3B2E] flex items-center justify-center">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-serif font-bold text-[#0D3B2E]">
                                        {val.title}
                                    </h3>
                                    <p className="text-xs text-[#5C6763] leading-relaxed">
                                        {val.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Corporate Culture Pillars */}
                <div className="bg-[#FAF8F5] p-8 sm:p-12 rounded-3xl border border-[#E8E5DF] space-y-6">
                    <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                            Our Corporate Culture[cite: 4]
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3B2E]">
                            How We Work Together[cite: 4]
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {culture.map((c, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-xl border border-[#E8E5DF] space-y-1">
                                <span className="text-xs font-bold text-[#0D3B2E] block">{c.title}</span>
                                <p className="text-[11px] text-[#5C6763] leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team & Leadership Directory */}
                <div className="space-y-8">
                    <div className="max-w-2xl space-y-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                            Clinical, Governance & Operational Board
                        </span>
                        <h2 className="text-3xl font-serif font-bold text-[#0D3B2E]">
                            Meet Our Team[cite: 12, 13]
                        </h2>
                        <p className="text-sm text-[#5C6763]">
                            A multidisciplinary group of licensed counselors, leadership strategists, legal advisors, and program leads committed to creating safe spaces[cite: 12, 13].
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-6 rounded-2xl border border-[#E8E5DF] flex flex-col justify-between hover:shadow-md hover:border-[#0D3B2E]/30 transition-all"
                            >
                                <div className="space-y-3">
                                    <div className="w-12 h-12 rounded-full bg-[#0D3B2E] text-white flex items-center justify-center font-serif font-bold text-lg">
                                        {member.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="text-base font-serif font-bold text-[#0D3B2E]">
                                            {member.name}
                                        </h3>
                                        <p className="text-xs text-[#C5A059] font-medium">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-4 mt-4 border-t border-[#E8E5DF] text-[10px] uppercase tracking-wider text-[#5C6763] font-semibold">
                                    {member.category}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}