import React from 'react';
import Link from 'next/link';
import {
    Tv,
    Play,
    BookOpen,
    Sparkles,
    ArrowRight,
    Video,
    Film,
    Radio,
    Clock,
    CheckCircle2
} from 'lucide-react';

export const metadata = {
    title: 'Media & MindHilla TV | Stories, Talks & Resources',
    description:
        'MindHilla TV uses storytelling, short films, expert insights, and conversations to make emotional wellness and personal growth accessible.',
};

export default function MediaPage() {
    const videoCatalog = [
        {
            title: 'Breaking the Cycle of Compulsive Shame',
            category: 'Talk-Show Conversations',
            duration: '32 mins',
            embedId: 'M7lc1UVf-VE',
            summary:
                'A frank, therapeutic dialogue exploring how hidden addictions and shame spirals take root, and the clinical/spiritual pathways toward lasting freedom.',
        },
        {
            title: 'Restoring Intimacy After Relational Betrayal',
            category: 'Expert Insights',
            duration: '28 mins',
            embedId: 'ScMzIvxBSi4',
            summary:
                'Deconstructing what true repentance, boundary restoration, and the rebuilding of broken trust look like in real relationships.',
        },
        {
            title: 'The Eden Blueprint: Identity Precedes Union',
            category: 'Storytelling & Teaching',
            duration: '19 mins',
            embedId: 'dQw4w9WgXcQ',
            summary:
                'Examining Genesis 2: why finding wholeness in personal identity with God must come before navigating romantic relationships.',
        },
    ];

    const contentPillars = [
        {
            title: 'Short Films & True-Life Stories',
            desc: 'Compelling cinematic portrayals depicting real-life struggles with trauma, addiction, heartbreak, and resilience.',
            icon: Film,
        },
        {
            title: 'Expert Talks & Vox Pops',
            desc: 'Therapists, counselors, and faith leaders answering practical questions and unpacking everyday mental health concerns[cite: 3].',
            icon: Radio,
        },
        {
            title: 'Guided Reflections',
            desc: 'Audio meditations, prayer blueprints, and educational video sessions to help you ground your day in peace.',
            icon: Tv,
        },
        {
            title: 'Educational Content',
            desc: 'Short, practical breakdowns demystifying emotional regulation, healthy communication, and personal boundaries[cite: 3].',
            icon: Video,
        },
    ];

    return (
        <div className="flex flex-col">
            {/* 1. CENTRALIZED CINEMATIC HERO SECTION */}
            <section className="relative overflow-hidden bg-black text-white min-h-[560px] sm:min-h-[620px] flex items-center justify-center">
                {/* Background Image from Client Assets */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('/images/services/media.jpg')` }}
                />
                {/* Dark Vignette Gradient for Text Protection & Emerald Atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#024010]/85 via-black/75 to-black/90" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/20 text-xs font-semibold text-[#C5A059] backdrop-blur-md mb-6 shadow-sm">
                        <Tv className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>MindHilla TV & Digital Media</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.18] max-w-3xl">
                        Conversations That Transform
                    </h1>

                    <p className="text-stone-100 text-base sm:text-lg leading-relaxed max-w-2xl mt-4">
                        Through real-life stories, short films, expert insights, and purposeful interviews, we bring crucial conversations around mental wellness, relationships, and faith into accessible formats[cite: 3].
                    </p>

                    <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="#episodes"
                            className="inline-flex items-center gap-2 bg-[#035c17] hover:bg-[#0b7823] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all shadow-lg hover:scale-105 border border-white/20"
                        >
                            <Play className="w-4 h-4 text-[#C5A059] fill-[#C5A059]" />
                            <span>Explore Episodes</span>
                        </a>
                        <Link
                            href="/contact?type=media-speaking"
                            className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#d8b772] text-[#024010] text-sm font-bold px-7 py-3.5 rounded-full transition-all shadow-lg hover:scale-105"
                        >
                            <span>Media & Speaking Requests</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. MEDIA FORMAT PILLARS */}
            <section className="py-20 bg-white border-b border-[#E8E5DF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div className="max-w-2xl space-y-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                            Format & Focus
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#035c17]">
                            How MindHilla TV Tells the Story
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contentPillars.map((pillar, idx) => {
                            const Icon = pillar.icon;
                            return (
                                <div
                                    key={idx}
                                    className="bg-[#FAF8F5] p-6 rounded-3xl border border-[#E8E5DF] space-y-3 hover:border-[#035c17]/30 transition-all shadow-sm"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-[#035c17]/5 text-[#035c17] flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-[#C5A059]" />
                                    </div>
                                    <h3 className="text-lg font-serif font-bold text-[#035c17]">
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

            {/* 3. FEATURED EPISODES (UNIFORM SIZED CARDS WITH LIFTED INSET VIDEO FRAMES) */}
            <section id="episodes" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="max-w-2xl space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                        Recent Broadcasts
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#035c17]">
                        Featured Episodes & Dialogues
                    </h2>
                    <p className="text-sm text-[#5C6763]">
                        Explore selected segments unpacking restorative psychology, healing, and faith.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videoCatalog.map((episode, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-3xl border border-[#E8E5DF] p-6 flex flex-col justify-between hover:shadow-xl hover:border-[#035c17]/30 transition-all duration-300 group shadow-sm"
                        >
                            <div className="space-y-4">
                                {/* Lifted Inset Video Player Frame */}
                                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-md border border-stone-200/80 bg-black">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${episode.embedId}?rel=0&modestbranding=1`}
                                        title={episode.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full border-0"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider">
                                        <span className="text-[#C5A059] bg-[#C5A059]/10 px-2.5 py-0.5 rounded-full">
                                            {episode.category}
                                        </span>
                                        <div className="flex items-center gap-1 text-[#5C6763]">
                                            <Clock className="w-3 h-3 text-[#035c17]" />
                                            <span>{episode.duration}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-serif font-bold text-[#035c17] leading-tight group-hover:text-[#0b7823] transition-colors">
                                        {episode.title}
                                    </h3>

                                    <p className="text-xs text-[#5C6763] leading-relaxed line-clamp-3">
                                        {episode.summary}
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4 mt-6 border-t border-[#E8E5DF]">
                                <a
                                    href={`https://www.youtube.com/watch?v=${episode.embedId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#035c17] hover:text-[#0b7823] transition"
                                >
                                    <span>Watch on YouTube</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. BOOKS, WORKBOOKS & PUBLICATIONS COMING SOON BANNER */}
            <section className="py-20 bg-[#FAF8F5] border-t border-[#E8E5DF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl border border-[#E8E5DF] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
                        <div className="lg:col-span-8 space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                                Future Services (Books & Resources)[cite: 3]
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#035c17]">
                                Practical Guides, Journals & Self-Development Tools
                            </h3>
                            <p className="text-sm text-[#5C6763] leading-relaxed">
                                MindHilla develops books, workbooks, guides, digital resources and practical tools that support healing, self-understanding, personal growth and healthier relationships[cite: 3]. These resources are designed to make helpful knowledge and practical guidance accessible beyond therapy sessions and live programmes[cite: 3].
                            </p>
                        </div>

                        <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-[#035c17] hover:bg-[#0b7823] text-white text-xs font-semibold px-6 py-3.5 rounded-full transition shadow-md"
                            >
                                <span>Join Publication Waitlist</span>
                                <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}