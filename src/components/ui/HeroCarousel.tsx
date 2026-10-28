'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface Slide {
    id: number;
    badge: string;
    heading: string;
    subheading: string;
    image: string;
    primaryCtaText: string;
    primaryCtaHref: string;
    secondaryCtaText?: string;
    secondaryCtaHref?: string;
}

const slides: Slide[] = [
    {
        id: 1,
        badge: 'Comprehensive Wholeness',
        heading: 'More Than Healing. A Journey to Wholeness.',
        subheading:
            'From therapy and learning to speaking, community outreach, media, and transformational experiences, MindHilla creates pathways that inspire lasting change.',
        image: '/images/hero/header-1.png',
        primaryCtaText: 'Book a Session',
        primaryCtaHref: '/services',
        secondaryCtaText: 'Explore Initiatives',
        secondaryCtaHref: '/garden-experience',
    },
    {
        id: 2,
        badge: 'Clinical Care & Counseling',
        heading: 'Heal. Grow. Transform.',
        subheading:
            'Through therapy, education, and practical resources, MindHilla equips you to understand yourself, navigate life’s challenges, and build healthier relationships.',
        image: '/images/hero/header-2.png',
        primaryCtaText: 'Our Services',
        primaryCtaHref: '/services',
        secondaryCtaText: 'MindHilla Academy',
        secondaryCtaHref: '/academy',
    },
    {
        id: 3,
        badge: 'Relational Renewal',
        heading: 'Restoring Hearts. Nurturing Love.',
        subheading:
            'Safe, trauma-informed, and faith-integrated counseling for individuals, couples, and families navigating grief, addiction, and emotional transitions.',
        image: '/images/hero/header-3.png',
        primaryCtaText: 'Get in Touch',
        primaryCtaHref: '/contact',
        secondaryCtaText: 'Partner with Us',
        secondaryCtaHref: '/support',
    },
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(nextSlide, 7000);
        return () => clearInterval(interval);
    }, [nextSlide, isPaused]);

    return (
        <section
            className="relative overflow-hidden bg-black text-white min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
        >
            {/* Background Slides with Crossfade */}
            {slides.map((slide, idx) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === current ? 'opacity-100 z-0' : 'opacity-0 -z-10'
                        }`}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center sm:bg-[center_top] transition-transform duration-1000 scale-100"
                        style={{ backgroundImage: `url('${slide.image}')` }}
                    />
                    {/* Mobile-first darker gradient so text remains 100% legible */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/70 sm:bg-gradient-to-r sm:from-black/90 sm:via-black/75 sm:to-black/40" />
                </div>
            ))}

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col justify-center items-center text-center">
                <div className="max-w-3xl flex flex-col items-center">

                    {/* Frosted Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] sm:text-xs font-semibold text-[#C5A059] backdrop-blur-md mb-4 sm:mb-6 shadow-sm">
                        <Sparkles className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span>{slides[current].badge}</span>
                    </div>

                    {/* Heading — Scaled for mobile */}
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight sm:leading-[1.18] drop-shadow-sm min-h-[72px] sm:min-h-[auto] flex items-center justify-center">
                        {slides[current].heading}
                    </h1>

                    {/* Subheading / Description */}
                    <p className="mt-3 sm:mt-5 text-xs sm:text-base md:text-lg text-stone-200 leading-relaxed max-w-2xl font-normal drop-shadow-xs">
                        {slides[current].subheading}
                    </p>

                    {/* CTA Action Buttons */}
                    <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row items-center justify-center gap-3 w-full sm:w-auto">
                        <Link
                            href={slides[current].primaryCtaHref}
                            className="w-full xs:w-auto inline-flex items-center justify-center gap-2 bg-[#035c17] hover:bg-[#0b7823] text-white text-xs sm:text-sm font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all shadow-lg active:scale-95 border border-white/15"
                        >
                            <span>{slides[current].primaryCtaText}</span>
                            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                        </Link>

                        {slides[current].secondaryCtaText && (
                            <Link
                                href={slides[current].secondaryCtaHref!}
                                className="w-full xs:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all backdrop-blur-md border border-white/20 active:scale-95"
                            >
                                <span>{slides[current].secondaryCtaText}</span>
                            </Link>
                        )}
                    </div>

                </div>
            </div>

            {/* Prev / Next Chevrons — Hidden on small mobile screens to prevent thumb collisions */}
            <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#035c17] border border-white/20 text-white items-center justify-center transition-all backdrop-blur-sm shadow-md"
            >
                <ChevronLeft className="w-5 h-5 text-[#C5A059]" />
            </button>

            <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#035c17] border border-white/20 text-white items-center justify-center transition-all backdrop-blur-sm shadow-md"
            >
                <ChevronRight className="w-5 h-5 text-[#C5A059]" />
            </button>

            {/* Slide Indicators (Pills) */}
            <div className="absolute bottom-4 sm:bottom-6 z-20 flex items-center gap-2">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`transition-all duration-300 rounded-full h-1.5 sm:h-2 ${idx === current
                                ? 'w-6 sm:w-8 bg-[#C5A059]'
                                : 'w-2 sm:w-2.5 bg-white/40 hover:bg-white/70'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}