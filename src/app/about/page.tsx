import React from 'react';
import Link from 'next/link';
import {
    HeartHandshake,
    ShieldCheck,
    Sparkles,
    Award,
    ArrowRight,
    Users
} from 'lucide-react';

export const metadata = {
    title: 'About Us & Leadership | MindHilla',
    description:
        'Learn about our vision, mission, core values, and multidisciplinary team restoring individuals and relationships to their original design.',
};

export default function AboutPage() {
    const values = [
        {
            title: 'Professionalism',
            badge: '01',
            desc: 'We uphold the highest standards of professionalism, care, and confidentiality in every interaction. We are committed to creating a safe, respectful, and trustworthy experience for everyone we serve.',
            icon: ShieldCheck,
        },
        {
            title: 'Integrity',
            badge: '02',
            desc: 'We act with honesty, transparency, accountability, and respect in all that we do. We remain true to our values and uphold the trust placed in us by our clients, partners, and communities.',
            icon: Award,
        },
        {
            title: 'Empathy',
            badge: '03',
            desc: 'We listen without judgment and seek to understand each person\'s unique story, experiences, and needs. We approach every individual with compassion, dignity, patience, and genuine care.',
            icon: HeartHandshake,
        },
        {
            title: 'Excellence',
            badge: '04',
            desc: 'We are committed to delivering quality, evidence-informed, and impactful services that make a meaningful difference. We continually learn, improve, and pursue excellence in everything we do.',
            icon: Sparkles,
        },
    ];

    const culture = [
        { title: 'Learn', desc: 'Continual learning, shared knowledge, and professional development.' },
        { title: 'Connect', desc: 'Open, compassionate communication that fosters genuine belonging.' },
        { title: 'Collaborate', desc: 'Cross-functional teamwork honoring diverse therapeutic perspectives.' },
        { title: 'Create', desc: 'Innovative frameworks, critical thinking, and fresh therapeutic approaches.' },
        { title: 'Support', desc: 'Empowering team members so together we provide exemplary client care.' },
        { title: 'Respect', desc: 'Honoring every individual with dignity regardless of role or background.' },
    ];

    // Exactly matches the order in the MindHilla Business Presentation
    const team = [
        {
            id: 1,
            name: 'Lauretta Okalor',
            role: 'Relationship & Trauma Therapist',
            category: 'Clinical Advisory',
            image: '/images/team/1.png',
        },
        {
            id: 2,
            name: 'Manasseh Ozege',
            role: 'Managing Director',
            category: 'Executive Leadership',
            image: '/images/team/2.png',
        },
        {
            id: 3,
            name: 'Mimidoo Uyeh',
            role: 'Course Administrator',
            category: 'Academy & Programs',
            image: '/images/team/3.png',
        },
        {
            id: 4,
            name: 'Rufus E. Ejukonemu',
            role: 'Media & Publicity Lead',
            category: 'Media & Outreach',
            image: '/images/team/4.png',
        },
        {
            id: 5,
            name: 'Marcillina Okalor',
            role: 'Non-Executive Director',
            category: 'Governance',
            image: '/images/team/5.png',
        },
        {
            id: 6,
            name: 'Chidinma Victoria Iwegbu',
            role: 'Grief & Trauma Counselor',
            category: 'Clinical Care',
            image: '/images/team/6.jpeg',
        },
        {
            id: 7,
            name: 'Hammed Lateefat O.',
            role: 'Mental Health Therapist',
            category: 'Clinical Care',
            image: null, // Excluded from client assets -> renders initials placeholder
        },
        {
            id: 8,
            name: 'Sunday E. Atumeyi',
            role: 'Protocol & Logistics Lead',
            category: 'Operations',
            image: '/images/team/8.jpeg',
        },
        {
            id: 9,
            name: 'Ruth K. Tsav-Iv',
            role: 'Financial Secretary',
            category: 'Finance & Compliance',
            image: '/images/team/9.jpeg',
        },
        {
            id: 10,
            name: 'Jennifer Nnamani',
            role: 'Content Creation Lead',
            category: 'Media & Brand',
            image: '/images/team/10.png',
        },
        {
            id: 11,
            name: 'Jesse Mamman',
            role: 'Prayer Lead',
            category: 'Spiritual Care',
            image: '/images/team/11.png',
        },
        {
            id: 12,
            name: 'Helen Mnena G. Esq.',
            role: 'Legal Advisor',
            category: 'Legal & Ethics',
            image: '/images/team/12.png',
        },

    ];

    return (
        <div className="flex flex-col">
            {/* 1. LEFT-CENTRALIZED HERO SECTION */}
            <section className="relative overflow-hidden bg-[#024010] text-white min-h-[500px] flex items-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('/images/hero/header-1.jpg')` }}
                />
                {/* Left Asymmetric Gradient for High Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-[#024010]/85 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                    <div className="max-w-2xl text-left space-y-5">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/20 text-xs font-semibold text-[#C5A059] backdrop-blur-md">
                            <Users className="w-3.5 h-3.5 text-[#C5A059]" />
                            <span>Identity, Mission & People</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
                            Pathways to Wholeness and Transformation
                        </h1>

                        <p className="text-stone-100 text-base sm:text-lg leading-relaxed max-w-xl">
                            MindHilla is a healing and transformation brand focused on emotional wellness, faith, identity, relationships, and personal growth.
                        </p>

                        <div className="pt-2">
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 bg-[#035c17] hover:bg-[#0b7823] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all shadow-lg hover:scale-105 border border-white/20"
                            >
                                <span>Explore Our Work</span>
                                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* 2. ABOUT MINDHILLA ON HOME & ABOUT PAGE */}
            <section className="py-20 bg-white border-b border-[#E8E5DF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    <div className="max-w-4xl space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#035c17] leading-tight">
                            At MindHilla, we create pathways to healing, wholeness, and transformation.
                        </h2>
                        <p className="text-[#5C6763] text-base sm:text-lg leading-relaxed">
                            MindHilla is a healing and transformation brand focused on emotional wellness, faith, identity, relationships, and personal growth. Through therapy, education, speaking, community outreach, signature experiences, media, and transformational resources, MindHilla helps people heal, understand themselves, build healthier relationships, and live more whole and purposeful lives.
                        </p>
                    </div>

                    {/* Founder Spotlight Frame */}
                    <div className="bg-[#FAF8F5] rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-5 relative aspect-square max-w-sm mx-auto lg:max-w-none w-full rounded-2xl overflow-hidden shadow-xl border border-[#E8E5DF] bg-stone-100">
                            <div
                                className="absolute inset-0 bg-cover bg-top"
                                style={{ backgroundImage: `url('/images/team/1.png')` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-5 left-5 right-5 text-white">
                                <h3 className="text-xl font-serif font-bold">Lauretta Okalor</h3>
                                <p className="text-xs text-[#C5A059]">Relationship & Trauma Therapist</p>
                            </div>
                        </div>

                        <div className="lg:col-span-7 space-y-5">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 rounded-full border border-[#C5A059]/20">
                                About the Founder
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#035c17]">
                                Where Compassion Meets Expertise
                            </h3>
                            <blockquote className="border-l-2 border-[#C5A059] pl-4 italic text-base text-[#1C2421] leading-relaxed">
                                “Experience intentional healing and transformative therapy tailored to nurture your emotional well-being and restore your sense of wholeness.”
                            </blockquote>
                            <p className="text-sm text-[#5C6763] leading-relaxed">
                                Under Lauretta’s leadership, MindHilla provides structured guidance for individuals, couples, and organizations. Her approach combines clinical excellence with profound empathy, helping clients confront deep-rooted emotional wounds, unpack behavioural triggers, and build lasting relational flourishing.
                            </p>
                            <div className="pt-2">
                                <Link
                                    href="/services#therapy"
                                    className="inline-flex items-center gap-2 bg-[#035c17] hover:bg-[#0b7823] text-white text-xs font-semibold px-6 py-3 rounded-full transition shadow"
                                >
                                    <span>Book a Session with Lauretta</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. VISION & MISSION */}
            <section className="py-20 bg-[#FAF8F5] border-b border-[#E8E5DF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[#035c17] text-white p-8 sm:p-12 rounded-3xl space-y-4 shadow-md">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                                Vision
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-serif font-bold">
                                Restoring People to Their Original Design
                            </h3>
                            <p className="text-stone-200 text-sm leading-relaxed">
                                To bring healing and wholeness to individuals, relationships, and families, restoring people to their original design and empowering them to live in love, purpose, and wholeness.
                            </p>
                        </div>

                        <div className="bg-white text-[#1C2421] p-8 sm:p-12 rounded-3xl border border-[#E8E5DF] space-y-4 shadow-sm">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                                Mission
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#035c17]">
                                Transformative Pathways to Wholeness
                            </h3>
                            <p className="text-[#5C6763] text-sm leading-relaxed">
                                To create transformative pathways to healing and personal growth through compassionate therapy, education, speaking, community outreach, meaningful experiences, media, and transformational resources—helping individuals and families cultivate emotional well-being, healthier relationships, and purposeful lives.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CORE VALUES */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="max-w-2xl space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                        The Standard We Uphold
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#035c17]">
                        Core Values
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((val, idx) => {
                        const Icon = val.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-white p-8 rounded-3xl border border-[#E8E5DF] space-y-4 hover:border-[#035c17]/30 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                            >
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="w-12 h-12 rounded-xl bg-[#035c17]/5 text-[#035c17] flex items-center justify-center">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-bold text-[#C5A059]">
                                            {val.badge}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-[#035c17]">
                                        {val.title}
                                    </h3>
                                    <p className="text-xs text-[#5C6763] leading-relaxed">
                                        {val.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 5. CORPORATE CULTURE */}
            <section className="py-20 bg-[#FAF8F5] border-y border-[#E8E5DF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                    <div className="max-w-2xl space-y-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                            Our Culture
                        </span>
                        <h2 className="text-3xl font-serif font-bold text-[#035c17]">
                            How We Work Together
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {culture.map((c, idx) => (
                            <div key={idx} className="bg-white p-5 rounded-2xl border border-[#E8E5DF] space-y-1.5 shadow-sm">
                                <span className="text-xs font-bold text-[#035c17] block">{c.title}</span>
                                <p className="text-[11px] text-[#5C6763] leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. TEAM DIRECTORY (12 MEMBERS IN EXACT PRESENTATION ORDER) */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="max-w-3xl space-y-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                        Our People
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#035c17]">
                        Our Team
                    </h2>
                    <p className="text-sm text-[#5C6763] leading-relaxed">
                        Our team is a passionate and growing community of professionals committed to creating safe spaces for healing, learning, connection, and personal growth. Together, we bring compassion, expertise, creativity, and excellence to every person and community we serve.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member) => (
                        <div
                            key={member.id}
                            className="bg-white rounded-2xl border border-[#E8E5DF] overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-[#035c17]/30 transition-all"
                        >
                            {member.image ? (
                                <div className="relative h-64 w-full bg-stone-100">
                                    <div
                                        className="absolute inset-0 bg-cover bg-top"
                                        style={{ backgroundImage: `url('${member.image}')` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                </div>
                            ) : (
                                <div className="h-64 w-full bg-[#035c17]/5 flex flex-col items-center justify-center space-y-2 border-b border-[#E8E5DF]">
                                    <div className="w-16 h-16 rounded-full bg-[#035c17] text-white flex items-center justify-center font-serif font-bold text-xl shadow">
                                        {member.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                                    </div>
                                    <span className="text-[11px] text-[#5C6763] font-medium">MindHilla Practitioner</span>
                                </div>
                            )}

                            <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-base font-serif font-bold text-[#035c17]">
                                        {member.name}
                                    </h3>
                                    <p className="text-xs text-[#C5A059] font-medium">
                                        {member.role}
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-[#E8E5DF] text-[10px] uppercase tracking-wider text-[#5C6763] font-semibold">
                                    {member.category}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}