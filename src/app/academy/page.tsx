import React from 'react';
import Link from 'next/link';
import {
    GraduationCap,
    Clock,
    BookOpen,
    CheckCircle2,
    ArrowRight,
    ExternalLink,
    Sparkles,
    ShieldCheck,
    Video
} from 'lucide-react';

export const metadata = {
    title: 'MindHilla Academy | Masterclasses & Self-Development',
    description:
        'Enrol in transformational masterclasses covering emotional healing, identity, relationships, sexual addiction recovery, and family blueprints.',
};

export default function AcademyPage() {
    const courses = [
        {
            id: 'heartbreak-recovery',
            title: 'The Heartbreak Recovery Masterclass',
            duration: '8 Weeks',
            badge: 'Bestseller',
            summary:
                'A compassionate, structured journey to help you process grief, rebuild shattered self-worth, release emotional attachment, and rediscover joy after a painful breakup or divorce.',
            highlights: [
                'Navigating the emotional stages of heartbreak and shock',
                'Detoxifying emotional triggers and rumination loops',
                'Rebuilding identity, self-trust, and personal boundaries',
                'Preparing wholehearted emotional space for future relationships',
            ],
            instructor: 'Lauretta Okalor & Mimidoo Uyeh',
            selarUrl: 'https://selar.co/mindhilla-heartbreak',
        },
        {
            id: 'divine-intimacy',
            title: 'The Divine Intimacy Blueprint',
            duration: '12 Weeks',
            badge: 'Spiritual Alignment',
            summary:
                'A comprehensive guide designed to help believers grow spiritually, deepen personal communion with God, and experience healing in the place of divine connection.',
            highlights: [
                'Cultivating consistent secret-place fellowship and prayer',
                'Hearing God through emotional noise and past wounds',
                'The Eden Paradigm: Genesis 2 blueprint for whole living',
                'Aligning spiritual health with psychological wholeness',
            ],
            instructor: 'Mimidoo Uyeh & Jesse Mamman',
            selarUrl: 'https://selar.co/mindhilla-intimacy',
        },
        {
            id: 'unmasked',
            title: 'Unmasked: Healing Sexual Addiction & Trauma',
            duration: '6 Weeks',
            badge: 'Restoration',
            summary:
                'An intensive, shame-free recovery guide addressing compulsive sexual behaviors, pornography, emotional trauma roots, and step-by-step pathways toward permanent freedom.',
            highlights: [
                'Deconstructing the neurobiology of sexual compulsion',
                'Breaking the isolation and toxic shame cycle',
                'Trauma-informed triggers, boundaries, and accountability systems',
                'Healthy intimacy and neurological rewiring frameworks',
            ],
            instructor: 'Clinical Recovery Team',
            selarUrl: 'https://selar.co/mindhilla-unmasked',
        },
        {
            id: 'self-reinvention',
            title: 'The Self Reinvention Roadmap',
            duration: '4 Weeks',
            badge: 'Identity & Growth',
            summary:
                'A tactical framework to shed limiting beliefs, heal from past mistakes, clarify your core assignment, and build a courageous new vision for your personal and professional life.',
            highlights: [
                'Auditing personal narratives and conditioned patterns',
                'Clarifying purpose, values, and natural strengths',
                'Designing a 12-month life reset strategy',
                'Executing disciplined daily rituals that sustain growth',
            ],
            instructor: 'Manasseh Ozege',
            selarUrl: 'https://selar.co/mindhilla-reinvention',
        },
        {
            id: 'generational-family',
            title: 'The Generational Family Blueprint',
            duration: '8 Weeks',
            badge: 'Relational Health',
            summary:
                'Equipping couples and parents to break negative ancestral patterns, foster deep parent-child attachment, and establish enduring generational legacies.',
            highlights: [
                'Mapping out inherited family emotional dynamics',
                'Resolving chronic relational tensions without hostility',
                'Intentional parenting and raising emotionally secure children',
                'Formulating family mission charters and value systems',
            ],
            instructor: 'Family Life Specialists',
            selarUrl: 'https://selar.co/mindhilla-family',
        },
        {
            id: 'thrive-at-work',
            title: 'Thrive at Work: The Mental Wellness Advantage',
            duration: '4 Weeks',
            badge: 'Corporate & Career',
            summary:
                'Practical strategies for professionals and leaders to conquer burnout, manage high-stakes workplace anxiety, and sustain productivity with emotional balance.',
            highlights: [
                'Preventing cognitive overload and chronic exhaustion',
                'Navigating workplace politics and relational friction',
                'Work-life integration frameworks for busy professionals',
                'Building psychological resilience in high-demand roles',
            ],
            instructor: 'Corporate Advisory Faculty',
            selarUrl: 'https://selar.co/mindhilla-thrive',
        },
        {
            id: 'school-wellness',
            title: 'The School Wellness Blueprint',
            duration: '6 Weeks',
            badge: 'Educators & Youth',
            summary:
                'A specialized curriculum designed for educators, guidance counselors, and school administrators to build supportive emotional wellness environments for young learners.',
            highlights: [
                'Identifying adolescent depression, anxiety, and trauma signs',
                'Creating safe spaces for student self-expression and counseling',
                'Preventing teacher burnout and compassion fatigue',
                'Institutional protocols for school-wide mental health advocacy',
            ],
            instructor: 'School Outreach Team',
            selarUrl: 'https://selar.co/mindhilla-school-wellness',
        },
    ];

    return (
        <div className="py-12 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                {/* Header Hero */}
                <div className="max-w-3xl space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D3B2E]/5 border border-[#0D3B2E]/10 text-xs font-semibold text-[#0D3B2E]">
                        <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>MindHilla Academy</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#0D3B2E] tracking-tight">
                        Transformational Masterclasses & Self-Development
                    </h1>
                    <p className="text-[#5C6763] text-base sm:text-lg leading-relaxed">
                        Acquire practical knowledge, clinical frameworks, and spiritual tools that you can apply for a lifetime. Each course blends video lectures, reflective assignments, and downloadable guides[cite: 6, 8].
                    </p>
                    <div className="pt-2">
                        <Link
                            href="/academy/portal"
                            className="inline-flex items-center gap-2 bg-[#0D3B2E] hover:bg-[#155744] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all shadow-md"
                        >
                            <Video className="w-4 h-4 text-[#C5A059]" />
                            <span>Enter Student LMS Portal</span>
                        </Link>
                    </div>
                </div>

                {/* Course Catalog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            id={course.id}
                            className="bg-white rounded-2xl border border-[#E8E5DF] p-8 flex flex-col justify-between hover:shadow-xl hover:border-[#0D3B2E]/30 transition-all duration-300 group"
                        >
                            <div className="space-y-5">
                                <div className="flex justify-between items-center">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 rounded-full">
                                        {course.badge}
                                    </span>
                                    <div className="flex items-center gap-1.5 text-xs text-[#5C6763] font-medium">
                                        <Clock className="w-3.5 h-3.5 text-[#0D3B2E]" />
                                        <span>{course.duration}</span>
                                    </div>
                                </div>

                                <h2 className="text-xl font-serif font-bold text-[#0D3B2E] group-hover:text-[#155744] transition-colors leading-snug">
                                    {course.title}
                                </h2>

                                <p className="text-xs text-[#5C6763] leading-relaxed">
                                    {course.summary}
                                </p>

                                <div className="pt-2 border-t border-[#E8E5DF] space-y-2">
                                    <span className="text-[11px] font-bold text-[#0D3B2E] uppercase tracking-wider block">
                                        Curriculum Highlights:
                                    </span>
                                    {course.highlights.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-2 text-xs text-[#1C2421]">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6 mt-6 border-t border-[#E8E5DF] space-y-3">
                                <div className="text-[11px] text-[#5C6763]">
                                    Facilitated by: <span className="font-semibold text-[#0D3B2E]">{course.instructor}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <a
                                        href={course.selarUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0D3B2E] hover:bg-[#155744] text-white text-xs font-semibold py-3 px-4 rounded-xl transition-all"
                                    >
                                        <span>Enroll on Selar</span>
                                        <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
                                    </a>

                                    <Link
                                        href={`/academy/portal?course=${course.id}`}
                                        className="inline-flex items-center justify-center p-3 rounded-xl border border-[#E8E5DF] hover:border-[#0D3B2E] text-[#0D3B2E] transition-colors"
                                        title="Preview in Student Portal"
                                    >
                                        <BookOpen className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Corporate & Cohort Inquiries Banner */}
                <div className="bg-[#08261D] text-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#124234]">
                    <div className="space-y-3 max-w-2xl">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                            Institutional Licensing
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                            Host MindHilla Academy for Your Organization
                        </h3>
                        <p className="text-stone-300 text-sm leading-relaxed">
                            We offer bespoke cohort licenses, live masterclasses, and executive wellness workshops for corporations, churches, and school faculties[cite: 6].
                        </p>
                    </div>
                    <Link
                        href="/support"
                        className="shrink-0 bg-[#C5A059] hover:bg-[#d8b772] text-[#08261D] font-bold text-sm px-6 py-3.5 rounded-full transition-all"
                    >
                        Request Institutional Cohort
                    </Link>
                </div>

            </div>
        </div>
    );
}