import React from 'react';
import Link from 'next/link';
import { Tv, Play, BookOpen, Sparkles, ArrowRight, Video } from 'lucide-react';

export const metadata = {
    title: 'Media & MindHilla TV | Stories, Talks & Resources',
    description:
        'Watch transformative conversations, short films, expert therapeutic insights, and downloadable resources from MindHilla.',
};

export default function MediaPage() {
    const mediaItems = [
        {
            title: 'Breaking the Cycle of Compulsive Shame',
            type: 'Conversation Series',
            duration: '32 mins',
            embedId: 'M7lc1UVf-VE',
            desc: 'Therapeutic and faith perspectives on healing from hidden addictions and finding emotional safety.',
        },
        {
            title: 'Restoring Intimacy After Betrayal',
            type: 'Couples Masterclass Segment',
            duration: '28 mins',
            embedId: 'ScMzIvxBSi4',
            desc: 'Understanding what true repentance and rebuilding broken relational trust looks like over time.',
        },
        {
            title: 'Why Identity Comes Before Relationship',
            type: 'Teaching & Reflection',
            duration: '19 mins',
            embedId: 'dQw4w9WgXcQ',
            desc: 'Exploring the Genesis 2 paradigm: becoming whole as an individual before building relational unions.',
        },
    ];

    return (
        <div className="py-12 sm:py-20 space-y-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                {/* Header */}
                <div className="max-w-3xl space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 rounded-full border border-[#C5A059]/20">
                        MindHilla TV & Digital Media
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#0D3B2E] tracking-tight">
                        Conversations That Transform
                    </h1>
                    <p className="text-[#5C6763] text-base sm:text-lg leading-relaxed">
                        Through real-life stories, short films, expert insights, and purposeful interviews, we bring crucial conversations around mental wellness, relationships, and faith into accessible formats.
                    </p>
                </div>

                {/* Video Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {mediaItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl border border-[#E8E5DF] overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all"
                        >
                            <div>
                                <div className="relative aspect-video bg-stone-900">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${item.embedId}?rel=0&modestbranding=1`}
                                        title={item.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full border-0"
                                    />
                                </div>
                                <div className="p-6 space-y-2">
                                    <div className="flex justify-between items-center text-[11px] font-bold text-[#C5A059] uppercase tracking-wider">
                                        <span>{item.type}</span>
                                        <span className="text-[#5C6763] font-normal">{item.duration}</span>
                                    </div>
                                    <h3 className="text-lg font-serif font-bold text-[#0D3B2E]">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-[#5C6763] leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 pt-0">
                                <a
                                    href={`https://www.youtube.com/watch?v=${item.embedId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0D3B2E] hover:text-[#C5A059] transition"
                                >
                                    <span>Watch on YouTube</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Digital Guides & Workbooks Coming Soon Banner */}
                <div className="bg-[#FAF8F5] rounded-2xl p-8 sm:p-12 border border-[#E8E5DF] flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2 max-w-2xl">
                        <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                            Publications & Resources
                        </span>
                        <h3 className="text-2xl font-serif font-bold text-[#0D3B2E]">
                            Books, Guides & Workbooks
                        </h3>
                        <p className="text-xs sm:text-sm text-[#5C6763] leading-relaxed">
                            Practical self-guided journals, recovery tools, and relationship manuals are currently in development to complement your personal healing journey.
                        </p>
                    </div>
                    <Link className="shrink-0 bg-[#0D3B2E] hover:bg-[#155744] text-white text-xs font-semibold px-6 py-3 rounded-full transition" href="/contact">
                        Get Notified on Release
                    </Link>
                </div>

            </div>
        </div>
    );
}