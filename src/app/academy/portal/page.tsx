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
    ChevronRight,
    ShieldCheck,
    Award
} from 'lucide-react';

export default function StudentPortal() {
    const [activeLessonId, setActiveLessonId] = useState(1);

    const course = {
        title: 'The Heartbreak Recovery Masterclass',
        badge: 'Active Enrolled Cohort',
        facilitator: 'Lauretta Okalor & Mimidoo Uyeh',
        lessons: [
            {
                id: 1,
                title: 'Module 1: The Anatomy of Heartbreak & Emotional Shock',
                duration: '18 mins',
                youtubeEmbedId: 'M7lc1UVf-VE',
                summary:
                    'Understanding why the brain processes relational loss similarly to physical injury, and how to interrupt immediate self-blame loops in the shock phase.',
                resourceName: 'Heartbreak_Recovery_Workbook_M1.pdf',
                completed: true,
            },
            {
                id: 2,
                title: 'Module 2: Detoxifying Attachment & Rumination Loops',
                duration: '24 mins',
                youtubeEmbedId: 'ScMzIvxBSi4',
                summary:
                    'Cognitive and mindfulness techniques to halt obsessive mental checking, release digital attachments, and navigate sudden emotional waves with self-compassion.',
                resourceName: 'Detox_Trigger_Journal_M2.pdf',
                completed: false,
            },
            {
                id: 3,
                title: 'Module 3: Restoring Core Identity & The Eden Pattern',
                duration: '22 mins',
                youtubeEmbedId: 'dQw4w9WgXcQ',
                summary:
                    'Reconnecting with your core identity outside the former relationship. Exploring how Genesis 2 models personal wholeness before relational connection.',
                resourceName: 'Identity_Restoration_Blueprint.pdf',
                completed: false,
            },
            {
                id: 4,
                title: 'Module 4: Rebuilding Trust & Healthy Relational Standards',
                duration: '31 mins',
                youtubeEmbedId: 'ysz5S6PUM-U',
                summary:
                    'Establishing personal boundaries, spotting early relational red flags, and cultivating emotional readiness for future flourishing.',
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
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#5C6763] hover:text-[#035c17] transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Academy Catalog</span>
                    </Link>
                    <span className="text-xs font-semibold text-[#035c17] bg-[#035c17]/10 px-3.5 py-1 rounded-full border border-[#035c17]/20">
                        Student Learning Environment
                    </span>
                </div>

                {/* Course Header Banner */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E5DF] shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="space-y-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059]">
                            {course.badge}
                        </span>
                        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#035c17]">
                            {course.title}
                        </h1>
                        <p className="text-xs text-[#5C6763]">
                            Facilitated by <span className="font-semibold text-[#1C2421]">{course.facilitator}</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-medium text-[#5C6763] bg-[#FAF8F5] px-4 py-2.5 rounded-2xl border border-[#E8E5DF]">
                        <span>Modules: <strong>{course.lessons.length}</strong></span>
                        <span>•</span>
                        <span className="text-[#035c17] font-semibold">25% Completed</span>
                    </div>
                </div>

                {/* Video Player & Lesson Curriculum Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Video Viewport (2 Cols) */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="relative w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-xl border border-stone-200">
                            <iframe
                                src={`https://www.youtube.com/embed/${activeLesson.youtubeEmbedId}?rel=0&modestbranding=1`}
                                title={activeLesson.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full border-0"
                            />
                        </div>

                        {/* Lesson Overview & Download Box */}
                        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E5DF] space-y-5 shadow-sm">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                                <div className="space-y-1">
                                    <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                                        Now Viewing
                                    </span>
                                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#035c17]">
                                        {activeLesson.title}
                                    </h2>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-[#5C6763] bg-[#FAF8F5] px-3 py-1.5 rounded-full border border-[#E8E5DF]">
                                    <Clock className="w-3.5 h-3.5 text-[#035c17]" />
                                    <span>{activeLesson.duration}</span>
                                </div>
                            </div>

                            <p className="text-sm text-[#5C6763] leading-relaxed">
                                {activeLesson.summary}
                            </p>

                            {/* Download Material Row */}
                            <div className="pt-4 border-t border-[#E8E5DF] flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="flex items-center gap-3.5">
                                    <div className="w-11 h-11 rounded-2xl bg-[#035c17]/5 text-[#035c17] flex items-center justify-center shrink-0 border border-[#035c17]/10">
                                        <BookOpen className="w-5 h-5 text-[#C5A059]" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-[#035c17]">{activeLesson.resourceName}</div>
                                        <div className="text-[11px] text-[#5C6763]">Official Module Guide & Guided Journal</div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => alert(`Downloading ${activeLesson.resourceName}...`)}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#035c17] hover:bg-[#0b7823] text-white text-xs font-semibold px-5 py-3 rounded-xl transition shadow-sm"
                                >
                                    <Download className="w-4 h-4 text-[#C5A059]" />
                                    <span>Download Worksheets</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Curriculum Sidebar (1 Col) */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#035c17]">
                            Course Curriculum
                        </h3>

                        <div className="bg-white rounded-3xl border border-[#E8E5DF] p-3 space-y-2 shadow-sm">
                            {course.lessons.map((lesson) => {
                                const isActive = lesson.id === activeLessonId;
                                return (
                                    <button
                                        key={lesson.id}
                                        onClick={() => setActiveLessonId(lesson.id)}
                                        className={`w-full text-left p-4 rounded-2xl flex items-start gap-3 transition-all ${isActive
                                                ? 'bg-[#035c17] text-white shadow-md'
                                                : 'hover:bg-stone-50 text-[#1C2421]'
                                            }`}
                                    >
                                        <div className="mt-0.5 shrink-0">
                                            {lesson.completed ? (
                                                <CheckCircle
                                                    className={`w-4 h-4 ${isActive ? 'text-[#C5A059]' : 'text-[#035c17]'
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
                                                className={`text-xs font-bold leading-snug ${isActive ? 'text-white' : 'text-[#035c17]'
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

                        {/* Cohort Support Card */}
                        <div className="p-5 rounded-3xl bg-[#FAF8F5] border border-[#E8E5DF] space-y-2 text-xs">
                            <span className="font-bold flex items-center gap-1.5 text-[#035c17]">
                                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                                Facilitator & Peer Community
                            </span>
                            <p className="text-[#5C6763] text-[11px] leading-relaxed">
                                Enrolled in the live cohort? Questions on assignments are answered directly during weekly debrief sessions.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}