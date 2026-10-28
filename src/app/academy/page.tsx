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
    Video,
    Users
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
            image: '/images/services/therapy.jpg',
            summary:
                'A compassionate, structured journey to help you process grief, rebuild shattered self-worth, release emotional attachment, and rediscover joy after a painful breakup or divorce.',
            highlights: [
                'Navigating emotional stages of heartbreak and shock',
                'Detoxifying emotional triggers and rumination loops',
                'Rebuilding identity, self-trust, and personal boundaries',
                'Preparing wholehearted emotional space for the future',
            ],
            instructor: 'Lauretta Okalor & Mimidoo Uyeh',
            selarUrl: 'https://selar.co/mindhilla-heartbreak',
        },
        {
            id: 'divine-intimacy',
            title: 'The Divine Intimacy Blueprint',
            duration: '12 Weeks',
            badge: 'Spiritual Alignment',
            image: '/images/garden/moment-1.jpg',
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
            id: 'self-reinvention',
            title: 'The Self Reinvention Roadmap',
            duration: '4 Weeks',
            badge: 'Identity & Growth',
            image: '/images/about/about-hero.png',
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
            id: 'unmasked',
            title: 'Unmasked: Healing Sexual Addiction & Trauma',
            duration: '6 Weeks',
            badge: 'Restoration',
            image: '/images/services/addiction.jpg',
            summary:
                'An intensive, shame-free recovery guide addressing compulsive sexual behaviors, pornography, emotional trauma roots, and step-by-step pathways toward permanent freedom.',
            highlights: [
                'Deconstructing the neurobiology of sexual compulsion',
                'Breaking the isolation and toxic shame cycle',
                'Trauma-informed triggers, boundaries, and accountability',
                'Healthy intimacy and neurological rewiring frameworks',
            ],
            instructor: 'Clinical Recovery Team',
            selarUrl: 'https://selar.co/mindhilla-unmasked',
        },
        {
            id: 'generational-family',
            title: 'The Generational Family Blueprint',
            duration: '8 Weeks',
            badge: 'Relational Health',
            image: '/images/hero/header-3.png',
            summary:
                'Equipping couples and parents to break negative ancestral patterns, foster deep parent-child attachment, and establish enduring generational legacies.',
            highlights: [
                'Mapping out inherited family emotional dynamics',
                'Resolving chronic relational tensions without hostility',
                'Intentional parenting and raising secure children',
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
            image: '/images/partner/partner-bg.jpg',
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
            image: '/images/outreach/session-1.jpg',
            summary:
                'A specialized curriculum designed for educators, guidance counselors, and school administrators to build supportive emotional wellness environments for young learners.',
            highlights: [
                'Identifying adolescent depression, anxiety, and trauma signs',
                'Creating safe spaces for student counseling',
                'Preventing teacher burnout and compassion fatigue',
                'Institutional protocols for school-wide mental health',
            ],
            instructor: 'School Outreach Team',
            selarUrl: 'https://selar.co/mindhilla-school-wellness',
        },
    ];

    return (
        <div className="flex flex-col">
            {/* 1. CENTRALIZED CINEMATIC HERO SECTION */}
            <section className="relative overflow-hidden bg-black text-white min-h-[560px] sm:min-h-[620px] flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('/images/services/courses.jpg')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#024010]/85 via-black/75 to-black/90" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/20 text-xs font-semibold text-[#C5A059] backdrop-blur-md mb-6 shadow-sm">
                        <GraduationCap className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>MindHilla Academy</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.18] max-w-3xl">
                        Transformational Masterclasses & Learning
                    </h1>

                    <p className="text-stone-100 text-base sm:text-lg leading-relaxed max-w-2xl mt-4">
                        Through MindHilla Academy, individuals can access transformational masterclasses and self-development programmes focused on healing, identity, relationships, and personal growth[cite: 3].
                    </p>

                    <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="#catalog"
                            className="inline-flex items-center gap-2 bg-[#035c17] hover:bg-[#0b7823] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all shadow-lg hover:scale-105 border border-white/20"
                        >
                            <BookOpen className="w-4 h-4 text-[#C5A059]" />
                            <span>Browse All Masterclasses</span>
                        </a>
                        <Link
                            href="/academy/portal"
                            className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#d8b772] text-[#024010] text-sm font-bold px-7 py-3.5 rounded-full transition-all shadow-lg hover:scale-105"
                        >
                            <Video className="w-4 h-4 text-[#024010]" />
                            <span>Student LMS Portal</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. OVERVIEW STRIP */}
            <section className="py-16 bg-white border-b border-[#E8E5DF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex items-start gap-4 p-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#035c17]/5 text-[#035c17] flex items-center justify-center shrink-0">
                                <Sparkles className="w-6 h-6 text-[#C5A059]" />
                            </div>
                            <div>
                                <h4 className="font-serif font-bold text-base text-[#035c17]">Practical Tools for Life</h4>
                                <p className="text-xs text-[#5C6763] leading-relaxed mt-1">
                                    Courses provide practical knowledge, actionable frameworks, and tools you can apply far beyond the classroom[cite: 3].
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#035c17]/5 text-[#035c17] flex items-center justify-center shrink-0">
                                <Video className="w-6 h-6 text-[#C5A059]" />
                            </div>
                            <div>
                                <h4 className="font-serif font-bold text-base text-[#035c17]">Interactive LMS Video Hub</h4>
                                <p className="text-xs text-[#5C6763] leading-relaxed mt-1">
                                    Enjoy structured video modules, progress tracking, and downloadable self-paced workbooks[cite: 4].
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#035c17]/5 text-[#035c17] flex items-center justify-center shrink-0">
                                <Users className="w-6 h-6 text-[#C5A059]" />
                            </div>
                            <div>
                                <h4 className="font-serif font-bold text-base text-[#035c17]">Cohort Communities</h4>
                                <p className="text-xs text-[#5C6763] leading-relaxed mt-1">
                                    Connect with mentors and fellow learners in a supportive, shame-free space for honest growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. COURSE CATALOG (UNIFORM SIZED CARDS WITH LIFTED INSET COVERS) */}
            <section id="catalog" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="max-w-3xl space-y-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                        Curriculum
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#035c17]">
                        Signature Masterclasses
                    </h2>
                    <p className="text-sm sm:text-base text-[#5C6763] leading-relaxed">
                        Choose a pathway below to view the syllabus and enroll directly via Selar or access preview modules in the student portal[cite: 4].
                    </p>
                </div>

                {/* 3-column uniform grid matching /services */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            id={course.id}
                            className="bg-white rounded-3xl border border-[#E8E5DF] p-6 flex flex-col justify-between hover:shadow-xl hover:border-[#035c17]/30 transition-all duration-300 group shadow-sm"
                        >
                            <div className="space-y-5">
                                {/* Lifted Inset Cover Frame */}
                                <div className="relative h-52 w-full rounded-2xl overflow-hidden shadow-md border border-stone-200/80 bg-stone-100 group-hover:shadow-lg transition-shadow">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                        style={{ backgroundImage: `url('${course.image}')` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-[#024010] bg-[#C5A059] px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
                                        {course.badge}
                                    </span>

                                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-[11px] font-semibold text-white bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                                        <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                                        <span>{course.duration}</span>
                                    </div>
                                </div>

                                {/* Course Title & Summary */}
                                <div className="space-y-2">
                                    <h3 className="text-xl font-serif font-bold text-[#035c17] leading-tight group-hover:text-[#0b7823] transition-colors">
                                        {course.title}
                                    </h3>
                                    <p className="text-xs text-[#5C6763] leading-relaxed line-clamp-3">
                                        {course.summary}
                                    </p>
                                </div>

                                {/* Curriculum Highlights */}
                                <div className="pt-3 border-t border-[#E8E5DF] space-y-2">
                                    <span className="text-[11px] font-bold text-[#035c17] uppercase tracking-wider block">
                                        Curriculum Highlights:
                                    </span>
                                    {course.highlights.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-2 text-xs text-[#1C2421]">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                                            <span className="leading-snug">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons & Facilitator Info */}
                            <div className="pt-6 mt-6 border-t border-[#E8E5DF] space-y-3">
                                <div className="text-[11px] text-[#5C6763]">
                                    Facilitated by: <span className="font-semibold text-[#035c17]">{course.instructor}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <a
                                        href={course.selarUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#035c17] hover:bg-[#0b7823] text-white text-xs font-semibold py-3 px-4 rounded-xl transition-all shadow-sm"
                                    >
                                        <span>Enroll on Selar</span>
                                        <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
                                    </a>

                                    <Link
                                        href={`/academy/portal?course=${course.id}`}
                                        className="inline-flex items-center justify-center p-3 rounded-xl border border-[#E8E5DF] hover:border-[#035c17] text-[#035c17] hover:bg-[#035c17]/5 transition-colors"
                                        title="Preview in Student Portal"
                                    >
                                        <BookOpen className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. INSTITUTIONAL & COHORT LICENSING BANNER */}
            <section className="py-20 bg-[#FAF8F5] border-t border-[#E8E5DF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-[#024010] text-white rounded-3xl p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl border border-white/10">
                        <div className="space-y-3 max-w-2xl">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                                Institutional Licensing
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                                Host MindHilla Academy for Your Organization
                            </h3>
                            <p className="text-stone-200 text-sm leading-relaxed">
                                We offer bespoke cohort licenses, customized live workshops, and executive wellness training for corporations, churches, school faculties, and community institutions[cite: 3].
                            </p>
                        </div>
                        <Link
                            href="/support"
                            className="shrink-0 bg-[#C5A059] hover:bg-[#d8b772] text-[#024010] font-bold text-sm px-7 py-3.5 rounded-full transition-all shadow-lg hover:scale-105"
                        >
                            Request Institutional Cohort
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}