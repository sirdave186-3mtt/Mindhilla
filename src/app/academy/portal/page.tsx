'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Play,
    CheckCircle,
    Download,
    BookOpen,
    ArrowLeft,
    Clock,
    Sparkles,
    ShieldAlert,
    ChevronRight
} from 'lucide-react';

export default function StudentPortal() {
    const [activeLessonId, setActiveLessonId] = useState(1);

    const course = {
        title: 'The Heartbreak Recovery Masterclass',
        badge: 'Cohort Access',
        lessons: [
            {
                id: 1,
                title: 'Module 1: The Anatomy of Heartbreak & Emotional Shock',
                duration: '18 mins',
                // Default placeholder YouTube video embed (can be replaced with unlisted lecture)
                youtubeEmbedId: 'M7lc1UVf-VE',
                summary:
                    'Understanding why the brain processes relational loss similarly to physical injury, and how to stop self-blame loops in the immediate aftermath.',
                resourceName: 'Heartbreak_Recovery_Workbook_M1.pdf',
                completed: true,
            },
            {
                id: 2,
                title: 'Module 2: Detoxifying Attachment & Rumination',
                duration: '24 mins',
                youtubeEmbedId: 'ScMzIvxBSi4',
                summary:
                    'Practical cognitive techniques to interrupt obsessive mental checking, release digital attachments, and manage sudden emotional tidal waves.',
                resourceName: 'Detox_Trigger_Journal_M2.pdf',
                completed: false,
            },
            {
                id: 3,
                title: 'Module 3: Restoring Self-Identity & The Eden Pattern',
                duration: '22 mins',
                youtubeEmbedId: 'dQw4w9WgXcQ',
                summary:
                    'Reconnecting with your core identity outside of the relationship. Learning how Genesis 2 models wholeness before connection.',
                resourceName: 'Identity_Restoration_Blueprint.pdf',
                completed: false,
            },
            {
                id: 4,
                title: 'Module 4: Rebuilding Trust & Healthy Relational Standards',
                duration: '31 mins',
                youtubeEmbedId: 'ysz5S6PUM-U',
                summary:
                    'Setting unwavering personal boundaries, identifying early red flags, and building emotional readiness for future flourishing.',
                resourceName: 'Boundaries_and_Readiness_Checklist.pdf',
                completed: false,
            },
        ],
    };

    const activeLesson = course.lessons.find((l) => l.id === activeLessonId) || course.lessons[0];

    return (
        <div className="bg-[#FAF8F5] min-h-screen py-8 sm:py-12 border-b border-[#E8E5DF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

                {/* Navigation Breadcrumb */}
                <div className="flex items-center justify-between">
                    <Link
                        href="/academy"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#5C6763] hover:text-[#0D3B2E] transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Academy Catalog</span>
                    </Link>
                    <span className="text-xs font-semibold text-[#0D3B2E] bg-[#0D3B2E]/5 px-3 py-1 rounded-full">
                        Active Student Portal
                    </span>
                </div>

                {/* Course Header */}
                <div className="bg-white p-6 rounded-2xl border border-[#E8E5DF] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="space-y-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059]">
                            {course.badge}
                        </span>
                        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3B2E]">
                            {course.title}
                        </h1>
                    </div>
                    <div className="text-xs text-[#5C6763] flex items-center gap-4">
                        <span>Lessons: <strong>{course.lessons.length}</strong></span>
                        <span>Progress: <strong>25%</strong></span>
                    </div>
                </div>

                {/* Video Player & Lesson Curriculum Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Video Screen (2 Cols) */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-xl border border-stone-200">
                            <iframe
                                src={`https://www.youtube.com/embed/${activeLesson.youtubeEmbedId}?rel=0&modestbranding=1`}
                                title={activeLesson.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full border-0"
                            />
                        </div>

                        {/* Lesson Overview & Download Area */}
                        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8E5DF] space-y-4">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                                <div className="space-y-1">
                                    <span className="text-xs font-bold text-[#C5A059]">Now Viewing</span>
                                    <h2 className="text-xl font-serif font-bold text-[#0D3B2E]">
                                        {activeLesson.title}
                                    </h2>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-[#5C6763]">
                                    <Clock className="w-3.5 h-3.5 text-[#0D3B2E]" />
                                    <span>{activeLesson.duration}</span>
                                </div>
                            </div>

                            <p className="text-sm text-[#5C6763] leading-relaxed">
                                {activeLesson.summary}
                            </p>

                            {/* Downloadable Attachment Trigger */}
                            <div className="pt-4 border-t border-[#E8E5DF] flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#0D3B2E]/5 text-[#0D3B2E] flex items-center justify-center shrink-0">
                                        <BookOpen className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-[#0D3B2E]">{activeLesson.resourceName}</div>
                                        <div className="text-[11px] text-[#5C6763]">Official Module Guide & Worksheets</div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => alert(`Downloading ${activeLesson.resourceName}...`)}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0D3B2E] hover:bg-[#155744] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition"
                                >
                                    <Download className="w-3.5 h-3.5 text-[#C5A059]" />
                                    <span>Download Materials</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Lesson Navigation Sidebar (1 Col) */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#0D3B2E]">
                            Course Curriculum
                        </h3>

                        <div className="bg-white rounded-2xl border border-[#E8E5DF] p-3 space-y-2 shadow-sm">
                            {course.lessons.map((lesson, idx) => {
                                const isActive = lesson.id === activeLessonId;
                                return (
                                    <button
                                        key={lesson.id}
                                        onClick={() => setActiveLessonId(lesson.id)}
                                        className={`w-full text-left p-3.5 rounded-xl flex items-start gap-3 transition-all ${isActive
                                                ? 'bg-[#0D3B2E] text-white shadow'
                                                : 'hover:bg-stone-50 text-[#1C2421]'
                                            }`}
                                    >
                                        <div className="mt-0.5 shrink-0">
                                            {lesson.completed ? (
                                                <CheckCircle
                                                    className={`w-4 h-4 ${isActive ? 'text-[#C5A059]' : 'text-emerald-600'
                                                        }`}
                                                />
                                            ) : (
                                                <Play
                                                    className={`w-4 h-4 ${isActive ? 'text-[#C5A059]' : 'text-stone-400'
                                                        }`}
                                                />
                                            )}
                                        </div>

                                        <div className="space-y-1 flex-1">
                                            <div
                                                className={`text-xs font-bold leading-snug ${isActive ? 'text-white' : 'text-[#0D3B2E]'
                                                    }`}
                                            >
                                                {lesson.title}
                                            </div>
                                            <div
                                                className={`text-[11px] ${isActive ? 'text-stone-300' : 'text-[#5C6763]'
                                                    }`}
                                            >
                                                {lesson.duration}
                                            </div>
                                        </div>

                                        <ChevronRight
                                            className={`w-4 h-4 shrink-0 mt-1 ${isActive ? 'text-[#C5A059]' : 'text-stone-300'
                                                }`}
                                        />
                                    </button>
                                );
                            })}
                        </div>

                        {/* Need Assistance Card */}
                        <div className="p-4 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 text-xs text-[#0D3B2E] space-y-2">
                            <span className="font-bold flex items-center gap-1.5 text-[#0D3B2E]">
                                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                                Student Support & Cohort Groups
                            </span>
                            <p className="text-[#5C6763] text-[11px] leading-relaxed">
                                Need guidance on any module or assignment? Reach your designated facilitator directly via your enrolled cohort channel.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}