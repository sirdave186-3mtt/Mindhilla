'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import {
    User,
    GraduationCap,
    Calendar,
    FileText,
    LogOut,
    ArrowRight,
    Clock,
    Play,
    Download,
    ShieldCheck,
    Sparkles,
    Lock,
    Mail,
    UserPlus,
    Loader2,
    AlertCircle,
    CheckCircle2
} from 'lucide-react';

export default function AccountPage() {
    const [sessionUser, setSessionUser] = useState<any>(null);
    const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    // Check active Supabase session on mount
    useEffect(() => {
        async function checkUser() {
            try {
                const { data } = await supabase.auth.getUser();
                if (data?.user) {
                    setSessionUser(data.user);
                }
            } catch (err) {
                // Fallback for offline/local environment
            }
        }
        checkUser();
    }, []);

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg('');
        setSuccessMsg('');

        try {
            const hasRealKeys =
                process.env.NEXT_PUBLIC_SUPABASE_URL &&
                !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder');

            if (!hasRealKeys) {
                // Dev fallback simulation
                const fakeUser = {
                    email,
                    user_metadata: { full_name: fullName || email.split('@')[0] },
                };
                setSessionUser(fakeUser);
                setLoading(false);
                return;
            }

            if (authMode === 'signup') {
                const { data, error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: {
                            full_name: fullName,
                        },
                    },
                });
                if (error) throw error;
                if (data?.user) {
                    setSessionUser(data.user);
                    setSuccessMsg('Account created successfully! Welcome to MindHilla.');
                }
            } else {
                const { data, error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                if (error) throw error;
                if (data?.user) {
                    setSessionUser(data.user);
                }
            }
        } catch (err: any) {
            setErrorMsg(err.message || 'Authentication failed. Please verify credentials.');
        } finally {
            setLoading(false);
        }
    };

    const handleSignOut = async () => {
        try {
            await supabase.auth.signOut();
        } catch (err) { }
        setSessionUser(null);
    };

    // Enrolled Courses & Consultations
    const enrolledCourses = [
        {
            id: 'heartbreak-recovery',
            title: 'The Heartbreak Recovery Masterclass',
            progress: 25,
            completedLessons: 1,
            totalLessons: 4,
            image: '/images/services/therapy.jpg',
            nextLesson: 'Module 2: Detoxifying Attachment & Rumination',
        },
    ];

    const upcomingSessions = [
        {
            id: 'session-01',
            service: '1-on-1 Individual Therapy',
            practitioner: 'Lauretta Okalor',
            date: 'Thursday, November 5, 2026',
            time: '10:00 AM WAT',
            mode: 'Abuja Consultation Suites (Senanga St, Wuse Zone 5)',
            status: 'Confirmed',
        },
    ];

    const downloadableGuides = [
        { name: 'Heartbreak_Recovery_Workbook_M1.pdf', size: '2.4 MB' },
        { name: 'Identity_Restoration_Blueprint.pdf', size: '1.8 MB' },
        { name: 'Daily_Relational_Boundaries_Guide.pdf', size: '1.2 MB' },
    ];

    // 1. AUTHENTICATION VIEW (SIGN IN / CREATE ACCOUNT TABS)
    if (!sessionUser) {
        return (
            <div className="min-h-[640px] flex items-center justify-center py-20 px-4 bg-[#FAF8F5]">
                <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E8E5DF] shadow-md max-w-md w-full space-y-6">

                    <div className="text-center space-y-2">
                        <div className="w-12 h-12 rounded-2xl bg-[#035c17]/10 text-[#035c17] flex items-center justify-center mx-auto">
                            <Lock className="w-6 h-6 text-[#C5A059]" />
                        </div>
                        <h1 className="text-2xl font-serif font-bold text-[#035c17]">
                            Student & Client Portal
                        </h1>
                        <p className="text-xs text-[#5C6763]">
                            Access your enrolled masterclasses, private session bookings, and course downloads.
                        </p>
                    </div>

                    {/* Dual Tabs */}
                    <div className="flex bg-[#FAF8F5] p-1.5 rounded-2xl border border-[#E8E5DF]">
                        <button
                            onClick={() => { setAuthMode('signin'); setErrorMsg(''); }}
                            className={`flex-1 py-2 text-xs font-semibold rounded-xl transition ${authMode === 'signin'
                                    ? 'bg-white text-[#035c17] shadow-sm'
                                    : 'text-[#5C6763] hover:text-[#1C2421]'
                                }`}
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => { setAuthMode('signup'); setErrorMsg(''); }}
                            className={`flex-1 py-2 text-xs font-semibold rounded-xl transition ${authMode === 'signup'
                                    ? 'bg-white text-[#035c17] shadow-sm'
                                    : 'text-[#5C6763] hover:text-[#1C2421]'
                                }`}
                        >
                            Create Account
                        </button>
                    </div>

                    {errorMsg && (
                        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            <span>{errorMsg}</span>
                        </div>
                    )}

                    {successMsg && (
                        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 shrink-0" />
                            <span>{successMsg}</span>
                        </div>
                    )}

                    <form onSubmit={handleAuth} className="space-y-4">
                        {authMode === 'signup' && (
                            <div>
                                <label className="block text-xs font-semibold text-[#035c17] uppercase tracking-wider mb-1.5">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="e.g. David Amosun"
                                    className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm text-[#1C2421] focus:outline-none focus:border-[#035c17]"
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-xs font-semibold text-[#035c17] uppercase tracking-wider mb-1.5">
                                Email Address
                            </label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm text-[#1C2421] focus:outline-none focus:border-[#035c17]"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-[#035c17] uppercase tracking-wider mb-1.5">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm text-[#1C2421] focus:outline-none focus:border-[#035c17]"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#035c17] hover:bg-[#0b7823] text-white text-xs font-semibold py-3.5 px-6 rounded-xl transition shadow-md disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin text-[#C5A059]" />
                                    <span>Processing...</span>
                                </>
                            ) : authMode === 'signup' ? (
                                <>
                                    <UserPlus className="w-4 h-4 text-[#C5A059]" />
                                    <span>Create Account & Enter</span>
                                </>
                            ) : (
                                <>
                                    <Lock className="w-4 h-4 text-[#C5A059]" />
                                    <span>Sign In</span>
                                </>
                            )}
                        </button>
                    </form>

                    <div className="pt-2 text-center text-xs text-[#5C6763]">
                        {authMode === 'signin' ? (
                            <span>
                                New learner?{' '}
                                <button
                                    type="button"
                                    onClick={() => setAuthMode('signup')}
                                    className="text-[#035c17] font-semibold hover:underline"
                                >
                                    Create an account
                                </button>
                            </span>
                        ) : (
                            <span>
                                Already registered?{' '}
                                <button
                                    type="button"
                                    onClick={() => setAuthMode('signin')}
                                    className="text-[#035c17] font-semibold hover:underline"
                                >
                                    Sign in
                                </button>
                            </span>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // 2. AUTHENTICATED DASHBOARD VIEW
    const displayName = sessionUser.user_metadata?.full_name || sessionUser.email.split('@')[0];

    return (
        <div className="bg-[#FAF8F5] min-h-screen py-10 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

                {/* User Welcome Banner */}
                <div className="bg-white p-8 rounded-3xl border border-[#E8E5DF] shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-[#035c17] text-white flex items-center justify-center font-serif font-bold text-2xl shadow-md">
                            {displayName.charAt(0).toUpperCase()}
                        </div>
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] bg-[#C5A059]/10 px-2.5 py-0.5 rounded-full">
                                Active Learner
                            </span>
                            <h1 className="text-2xl font-serif font-bold text-[#035c17]">
                                Welcome back, {displayName}
                            </h1>
                            <p className="text-xs text-[#5C6763]">
                                {sessionUser.email}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/academy/portal"
                            className="inline-flex items-center gap-2 bg-[#035c17] hover:bg-[#0b7823] text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition shadow-sm"
                        >
                            <Play className="w-3.5 h-3.5 text-[#C5A059]" />
                            <span>Resume Active Lesson</span>
                        </Link>
                        <button
                            onClick={handleSignOut}
                            className="inline-flex items-center gap-1.5 text-xs text-[#5C6763] hover:text-red-700 p-2.5 rounded-xl border border-[#E8E5DF] hover:bg-red-50 transition"
                            title="Sign Out"
                        >
                            <LogOut className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* 2-Column Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Main Column (8 Cols): Enrolled Courses & Consultations */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* Active Masterclasses */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-serif font-bold text-[#035c17] flex items-center gap-2">
                                    <GraduationCap className="w-5 h-5 text-[#C5A059]" />
                                    <span>Enrolled Masterclasses</span>
                                </h2>
                                <Link href="/academy" className="text-xs font-semibold text-[#035c17] hover:underline">
                                    Browse Catalog
                                </Link>
                            </div>

                            {enrolledCourses.map((course) => (
                                <div
                                    key={course.id}
                                    className="bg-white rounded-3xl border border-[#E8E5DF] p-6 shadow-sm flex flex-col sm:flex-row items-center gap-6"
                                >
                                    <div className="relative h-32 w-full sm:w-44 rounded-2xl overflow-hidden shadow-sm shrink-0">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center"
                                            style={{ backgroundImage: `url('${course.image}')` }}
                                        />
                                    </div>

                                    <div className="space-y-3 flex-1 w-full">
                                        <div>
                                            <h3 className="text-base font-serif font-bold text-[#035c17]">
                                                {course.title}
                                            </h3>
                                            <p className="text-xs text-[#5C6763] mt-0.5">
                                                Next: {course.nextLesson}
                                            </p>
                                        </div>

                                        <div className="space-y-1">
                                            <div className="flex justify-between text-[11px] font-semibold text-[#5C6763]">
                                                <span>Progress ({course.completedLessons}/{course.totalLessons} modules)</span>
                                                <span className="text-[#035c17] font-bold">{course.progress}%</span>
                                            </div>
                                            <div className="w-full h-2 rounded-full bg-stone-100 overflow-hidden">
                                                <div
                                                    className="h-full bg-[#035c17] rounded-full transition-all duration-500"
                                                    style={{ width: `${course.progress}%` }}
                                                />
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <Link
                                                href="/academy/portal"
                                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#035c17] hover:text-[#0b7823]"
                                            >
                                                <span>Open LMS Classroom</span>
                                                <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Booked Consultations */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-serif font-bold text-[#035c17] flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-[#C5A059]" />
                                    <span>Clinical Consultations</span>
                                </h2>
                                <Link href="/services#intake-form" className="text-xs font-semibold text-[#035c17] hover:underline">
                                    Book New Session
                                </Link>
                            </div>

                            {upcomingSessions.map((session) => (
                                <div
                                    key={session.id}
                                    className="bg-white rounded-3xl border border-[#E8E5DF] p-6 shadow-sm space-y-3"
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                                            {session.status}
                                        </span>
                                        <span className="text-xs text-[#5C6763] flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5 text-[#035c17]" />
                                            <span>{session.time}</span>
                                        </span>
                                    </div>

                                    <h3 className="text-base font-serif font-bold text-[#035c17]">
                                        {session.service} with {session.practitioner}
                                    </h3>

                                    <div className="text-xs text-[#5C6763] space-y-1">
                                        <p><strong>Date:</strong> {session.date}</p>
                                        <p><strong>Venue:</strong> {session.mode}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Sidebar Column (4 Cols): Downloads & Intake Notes */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Downloadable Materials */}
                        <div className="bg-white p-6 rounded-3xl border border-[#E8E5DF] shadow-sm space-y-4">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-[#035c17] flex items-center gap-2">
                                <FileText className="w-4 h-4 text-[#C5A059]" />
                                <span>Course Workbooks</span>
                            </h3>

                            <div className="space-y-2.5">
                                {downloadableGuides.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#E8E5DF] flex items-center justify-between text-xs hover:border-[#035c17]/30 transition"
                                    >
                                        <div className="truncate mr-2">
                                            <div className="font-semibold text-[#1C2421] truncate">{item.name}</div>
                                            <div className="text-[10px] text-[#5C6763]">{item.size}</div>
                                        </div>
                                        <button
                                            onClick={() => alert(`Downloading ${item.name}...`)}
                                            className="p-2 rounded-xl bg-white border border-[#E8E5DF] text-[#035c17] hover:bg-[#035c17] hover:text-white transition shrink-0"
                                            title="Download File"
                                        >
                                            <Download className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Privacy Card */}
                        <div className="bg-[#024010] text-white p-6 rounded-3xl border border-white/10 space-y-3 shadow-md">
                            <div className="flex items-center gap-2 text-[#C5A059]">
                                <ShieldCheck className="w-5 h-5" />
                                <span className="text-xs font-bold uppercase tracking-wider">Client Privacy</span>
                            </div>
                            <p className="text-stone-300 text-xs leading-relaxed">
                                All clinical records and consultation notes are safeguarded under strict medical confidentiality protocols.
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}