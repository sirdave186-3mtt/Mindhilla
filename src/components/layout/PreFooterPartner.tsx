'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function PreFooterPartner() {
    return (
        <section className="relative overflow-hidden py-24 sm:py-32 bg-[#02280a] text-white">
            {/* Background Image: Boosted Opacity & Sharp Focus */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-65 scale-100 transition-transform duration-700"
                style={{
                    backgroundImage: `url('/images/partner/partner-bg.jpg')`,
                }}
            />

            {/* Balanced Vignette: Darkens center text area without swallowing the image */}
            <div className="absolute inset-0 bg-black/55 backdrop-brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#02280a] via-transparent to-[#02280a]/70" />

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 border border-white/20 text-xs font-semibold text-[#C5A059] backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Strategic Partnership & Alignment</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight drop-shadow-md">
                    Ready to make a difference?
                </h2>

                <p className="text-stone-100 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow">
                    Whether you are looking to sponsor a school outreach, partner with The Garden Experience, or bring mental wellness into your institution, there are many ways to engage with MindHilla and be part of our journey toward transformative wholeness.
                </p>

                <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
                    <Link
                        href="/support"
                        className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#d8b772] text-[#024010] text-sm font-bold px-7 py-3.5 rounded-full transition-all shadow-lg hover:scale-105"
                    >
                        <span>Partner with Us</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white text-sm font-semibold px-6 py-3.5 rounded-full border border-white/30 transition-all backdrop-blur-sm"
                    >
                        <span>Contact Our Team</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}