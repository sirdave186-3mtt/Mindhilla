'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import {
    BookOpen,
    Clock,
    ArrowRight,
    Tag,
    Send,
    CheckCircle2,
    Loader2,
    AlertCircle,
    Sparkles
} from 'lucide-react';

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [subscriberEmail, setSubscriberEmail] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [subscribed, setSubscribed] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const categories = ['All', 'Emotional Healing', 'Relationships', 'Identity & Growth', 'Faith & Wholeness'];

    const articles = [
        {
            id: 'healing-after-heartbreak',
            title: 'The Anatomy of Emotional Recovery: Healing After Relational Loss',
            excerpt:
                'Why the brain registers rejection similarly to physical injury, and how to interrupt involuntary shame spirals during the critical first six weeks.',
            category: 'Emotional Healing',
            readTime: '6 min read',
            date: 'Oct 24, 2026',
            image: '/images/services/therapy.jpg',
            author: 'Lauretta Okalor',
        },
        {
            id: 'eden-paradigm-identity',
            title: 'The Eden Paradigm: Why Personal Wholeness Must Precede Relational Union',
            excerpt:
                'A study of Genesis 2 showing how discovering intimate communion with God and secure self-worth creates the foundation for enduring love[cite: 3, 4].',
            category: 'Faith & Wholeness',
            readTime: '8 min read',
            date: 'Oct 18, 2026',
            image: '/images/garden/moment-1.jpg',
            author: 'Mimidoo Uyeh',
        },
        {
            id: 'deconstructing-sexual-compulsion',
            title: 'Beyond Moral Shaming: Deconstructing the Roots of Sexual Compulsion',
            excerpt:
                'Unpacking how trauma, emotional isolation, and neurochemical conditioning reinforce compulsive habits, and clinical steps toward sustainable recovery[cite: 3].',
            category: 'Emotional Healing',
            readTime: '10 min read',
            date: 'Oct 12, 2026',
            image: '/images/services/addiction.jpg',
            author: 'Clinical Advisory Team',
        },
        {
            id: 'workplace-burnout-boundaries',
            title: 'Sustaining Excellence Without Burnout: Relational Intelligence at Work',
            excerpt:
                'Practical frameworks for corporate executives and leaders to establish psychological safety, manage cognitive load, and prevent compassion fatigue[cite: 3].',
            category: 'Identity & Growth',
            readTime: '5 min read',
            date: 'Oct 05, 2026',
            image: '/images/partner/partner-bg.jpg',
            author: 'Manasseh Ozege',
        },
        {
            id: 'restoring-trust-betrayal',
            title: 'Can Relational Trust Truly Be Restored? A Roadmap for Couples',
            excerpt:
                'The distinct difference between immediate forgiveness and earned trust. How couples can navigate the complex timeline of transparency and reconciliation[cite: 3].',
            category: 'Relationships',
            readTime: '7 min read',
            date: 'Sep 29, 2026',
            image: '/images/services/courses.jpg',
            author: 'Lauretta Okalor',
        },
        {
            id: 'adolescent-mental-health-classrooms',
            title: 'Equipping Young Minds: Creating Emotionally Safe Classrooms',
            excerpt:
                'Key insights from our school outreach initiatives on spotting early adolescent anxiety, digital overwhelm, and cultivating authentic resilience[cite: 3, 4].',
            category: 'Identity & Growth',
            readTime: '6 min read',
            date: 'Sep 20, 2026',
            image: '/images/outreach/session-1.jpg',
            author: 'School Outreach Faculty',
        },
    ];

    const filteredArticles =
        selectedCategory === 'All'
            ? articles
            : articles.filter((a) => a.category === selectedCategory);

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setErrorMsg('');

        try {
            const hasRealKeys =
                process.env.NEXT_PUBLIC_SUPABASE_URL &&
                !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder');

            if (!hasRealKeys) {
                setSubscribed(true);
                return;
            }

            const { error } = await supabase.from('subscribers').insert([
                {
                    email: subscriberEmail,
                    source: 'blog_insights',
                },
            ]);

            if (error && !error.message.includes('duplicate')) throw error;
            setSubscribed(true);
        } catch (err: any) {
            setErrorMsg(err.message || 'Unable to subscribe right now. Please try again later.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col">
            {/* 1. CENTRALIZED CINEMATIC HERO SECTION */}
            <section className="relative overflow-hidden bg-black text-white min-h-[520px] sm:min-h-[580px] flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('/images/services/courses.jpg')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#024010]/85 via-black/75 to-black/90" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/20 text-xs font-semibold text-[#C5A059] backdrop-blur-md mb-6 shadow-sm">
                        <BookOpen className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>MindHilla Insights & Reflection</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.18] max-w-3xl">
                        Writings on Healing, Identity & Love
                    </h1>

                    <p className="text-stone-100 text-base sm:text-lg leading-relaxed max-w-2xl mt-4">
                        Evidence-informed clinical insights, restorative theological frameworks, and practical tools to guide your emotional and relational flourishing[cite: 3, 4].
                    </p>

                    {/* Interactive Category Filter Pills */}
                    <div className="pt-8 flex flex-wrap items-center justify-center gap-2.5">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 border ${selectedCategory === cat
                                        ? 'bg-[#C5A059] text-[#024010] border-[#C5A059] shadow-md'
                                        : 'bg-black/40 text-stone-200 border-white/20 hover:bg-white/10'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. ARTICLES GRID (UNIFORM SIZED CARDS WITH LIFTED INSET COVERS) */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
                    <div className="space-y-1">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                            Curated Articles
                        </span>
                        <h2 className="text-3xl font-serif font-bold text-[#035c17]">
                            {selectedCategory === 'All' ? 'Latest Publications' : `${selectedCategory} Insights`}
                        </h2>
                    </div>
                    <span className="text-xs text-[#5C6763] font-medium">
                        Showing {filteredArticles.length} of {articles.length} writings
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map((article) => (
                        <div
                            key={article.id}
                            className="bg-white rounded-3xl border border-[#E8E5DF] p-6 flex flex-col justify-between hover:shadow-xl hover:border-[#035c17]/30 transition-all duration-300 group shadow-sm"
                        >
                            <div className="space-y-5">
                                {/* Lifted Inset Cover Frame */}
                                <div className="relative h-52 w-full rounded-2xl overflow-hidden shadow-md border border-stone-200/80 bg-stone-100 group-hover:shadow-lg transition-shadow">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                        style={{ backgroundImage: `url('${article.image}')` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-[#024010] bg-[#C5A059] px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
                                        {article.category}
                                    </span>

                                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-[11px] font-semibold text-white bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                                        <Clock className="w-3 h-3 text-[#C5A059]" />
                                        <span>{article.readTime}</span>
                                    </div>
                                </div>

                                {/* Article Copy */}
                                <div className="space-y-2">
                                    <div className="text-[11px] text-[#5C6763] font-medium">
                                        {article.date} • by <span className="font-semibold text-[#035c17]">{article.author}</span>
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-[#035c17] leading-tight group-hover:text-[#0b7823] transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-xs text-[#5C6763] leading-relaxed line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                </div>
                            </div>

                            {/* Action Link */}
                            <div className="pt-6 mt-6 border-t border-[#E8E5DF]">
                                <button
                                    onClick={() => alert(`Full article view for "${article.title}" is being formatted.`)}
                                    className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#035c17] hover:text-[#0b7823] group-hover:translate-x-0.5 transition-all"
                                >
                                    <span>Read Reflection</span>
                                    <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. EMAIL NEWSLETTER INSIGHTS SUBSCRIPTION BANNER */}
            <section className="py-20 bg-[#FAF8F5] border-t border-[#E8E5DF]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="bg-[#024010] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-white/10 text-center space-y-6">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-[#C5A059] border border-white/15">
                            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                            <span>Weekly Restorative Essays</span>
                        </div>

                        <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white max-w-xl mx-auto leading-tight">
                            Quiet Reflections Delivered Directly to Your Inbox
                        </h3>

                        <p className="text-stone-200 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
                            Join our community of over 1,200 readers receiving thoughtful insights on healing, faith, healthy boundaries, and relational renewal[cite: 3, 4].
                        </p>

                        {subscribed ? (
                            <div className="bg-white/10 border border-white/20 p-5 rounded-2xl max-w-md mx-auto text-center space-y-2">
                                <CheckCircle2 className="w-8 h-8 text-[#C5A059] mx-auto" />
                                <h4 className="font-serif font-bold text-base">You're Subscribed</h4>
                                <p className="text-stone-300 text-xs">
                                    Thank you for joining our circle. Look out for our next Sunday evening reflection.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="max-w-md mx-auto space-y-3">
                                {errorMsg && (
                                    <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2 text-left">
                                        <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                                        <span>{errorMsg}</span>
                                    </div>
                                )}
                                <div className="flex flex-col sm:flex-row gap-2.5">
                                    <input
                                        type="email"
                                        required
                                        value={subscriberEmail}
                                        onChange={(e) => setSubscriberEmail(e.target.value)}
                                        placeholder="Enter your email address..."
                                        className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-sm text-white placeholder-stone-400 focus:outline-none focus:border-[#C5A059]"
                                    />
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="inline-flex items-center justify-center gap-2 bg-[#C5A059] hover:bg-[#d8b772] text-[#024010] text-xs font-bold px-6 py-3 rounded-xl transition shadow-md disabled:opacity-50"
                                    >
                                        {submitting ? (
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                        ) : (
                                            <>
                                                <span>Subscribe</span>
                                                <Send className="w-3.5 h-3.5" />
                                            </>
                                        )}
                                    </button>
                                </div>
                                <p className="text-[11px] text-stone-400">
                                    Strictly confidential. No spam, ever. Unsubscribe anytime.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}