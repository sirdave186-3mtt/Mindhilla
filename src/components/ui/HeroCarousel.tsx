'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Building2 } from 'lucide-react';

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            badge: 'Welcome to MindHilla',
            heading: 'Your Journey to Wholeness Begins Here',
            copy: 'Experience a compassionate space for healing, self-discovery, healthier relationships, and personal transformation. Through therapy, education, and meaningful experiences, MindHilla walks with you toward emotional well-being, purpose, and a more whole life.',
            ctaText: 'Learn More',
            ctaHref: '/about',
            image: '/images/hero/header-1.jpg',
        },
        {
            id: 2,
            badge: 'Clinical Care & Counseling',
            heading: 'Heal. Grow. Transform.',
            copy: 'Through therapy, education, and practical resources, MindHilla equips you to understand yourself, navigate life’s challenges, build healthier relationships, and grow with intention.',
            ctaText: 'Book a Session',
            ctaHref: '/services',
            image: '/images/hero/header-2.png',
        },
        {
            id: 3,
            badge: 'Comprehensive Wholeness',
            heading: 'More Than Healing. A Journey to Wholeness.',
            copy: 'From therapy and learning to speaking, community outreach, media, and transformational experiences, MindHilla creates pathways that inspire healing, purpose, connection, and lasting change.',
            ctaText: 'Explore Pathways',
            ctaHref: '/about',
            image: '/images/hero/header-3.png',
        },
        {
            id: 4,
            badge: 'Community Transformation',
            heading: 'Taking Mental Health to the Classrooms',
            copy: 'We equip students, educators and school communities with practical tools for emotional wellness, healthy relationships, self-awareness and personal growth. Building healthier minds. Shaping healthier futures.',
            ctaText: 'School Outreach',
            ctaHref: '/school-outreach',
            image: '/images/hero/header-4.png',
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 7000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    return (
        <div className="relative overflow-hidden bg-[#024010] text-white min-h-[640px] sm:min-h-[720px] flex items-center">
            {/* Background Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-100"
                        style={{ backgroundImage: `url('${slide.image}')` }}
                    />
                    {/* Asymmetric Gradient: deep on the left for contrast, open on the right to reveal the subject */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-[#024010]/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
            ))}

            {/* Slide Text Content — Left Aligned */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                <div className="max-w-2xl text-left space-y-6">

                    {/* Pill Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/20 text-xs font-semibold text-[#C5A059] backdrop-blur-md shadow-sm">
                        <span>{slides[currentSlide].badge}</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15] min-h-[140px] sm:min-h-[160px] flex items-center">
                        {slides[currentSlide].heading}
                    </h1>

                    {/* Sub-copy */}
                    <p className="text-stone-100 text-sm sm:text-lg leading-relaxed max-w-xl min-h-[80px]">
                        {slides[currentSlide].copy}
                    </p>

                    {/* Action CTAs */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <Link
                            href={slides[currentSlide].ctaHref}
                            className="inline-flex items-center gap-2 bg-[#035c17] hover:bg-[#0b7823] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all shadow-lg hover:scale-105 border border-white/20"
                        >
                            <span>{slides[currentSlide].ctaText}</span>
                            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                        </Link>

                        <Link
                            href="/support"
                            className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#d8b772] text-[#024010] text-sm font-bold px-7 py-3.5 rounded-full transition-all shadow-lg hover:scale-105"
                        >
                            <span>Partner with Us</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap items-center gap-6 pt-6 text-xs text-stone-200">
                        <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                            <span>Strict Clinical Confidentiality</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Building2 className="w-4 h-4 text-[#C5A059]" />
                            <span>Abuja Center & Global Virtual Sessions</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Pagination Dots & Navigation Controls */}
            <div className="absolute z-20 bottom-8 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                {/* Pagination Dots */}
                <div className="flex items-center space-x-2.5">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-[#C5A059]' : 'w-2.5 bg-white/40 hover:bg-white/70'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>

                {/* Previous / Next Controls */}
                <div className="flex items-center space-x-2">
                    <button
                        onClick={prevSlide}
                        className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
                        aria-label="Previous Slide"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
                        aria-label="Next Slide"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}