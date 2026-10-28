'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import BookingForm from '@/components/ui/BookingForm';
import {
    HeartHandshake,
    ShieldCheck,
    Sparkles,
    GraduationCap,
    Mic,
    Building2,
    BookOpen,
    Calendar,
    Tv,
    Flower2,
    ArrowRight,
    CheckCircle2,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

export default function ServicesPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const heroSlides = [
        {
            id: 1,
            badge: 'Clinical Care & Counseling',
            heading: 'Therapy & Clinical Counseling',
            copy: 'Every journey begins with a safe, confidential space. Our practitioners integrate professional therapeutic insight, clinical ethics, and faith-informed perspectives to facilitate deep, lasting transformation.',
            image: '/images/services/therapy.jpg',
            ctaText: 'Book a Consultation',
            ctaHref: '#intake-form',
        },
        {
            id: 2,
            badge: 'Unmasked Protocol',
            heading: 'Sexual Addiction & Trauma Recovery',
            copy: 'A structured, shame-free pathway addressing compulsive behaviors, pornography, emotional trauma, and relational wounds to restore personal wholeness and authentic integrity.',
            image: '/images/services/addiction.jpg',
            ctaText: 'Explore Recovery',
            ctaHref: '#addiction',
        },
        {
            id: 3,
            badge: 'Institutional Health',
            heading: 'Corporate & Executive Wellness',
            copy: 'Equipping organizational leaders, staff, and teams with emotional intelligence, burnout resilience, and mental wellness systems that foster sustainable productivity.',
            image: '/images/partner/partner-bg.jpg',
            ctaText: 'Corporate Inquiries',
            ctaHref: '#corporate',
        },
        {
            id: 4,
            badge: 'Seminars & Keynotes',
            heading: 'Speaking Engagements & Training',
            copy: 'Delivering transformative talks, masterclasses, and specialized workshops for corporate bodies, churches, educators, and community platforms.',
            image: '/images/services/speaking.jpg',
            ctaText: 'Request Speaker',
            ctaHref: '#speaking',
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1 >= heroSlides.length ? 0 : prev + 1));
        }, 6500);
        return () => clearInterval(timer);
    }, [heroSlides.length]);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 < 0 ? heroSlides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1 >= heroSlides.length ? 0 : prev + 1));
    };

    const professionalServices = [
        {
            id: 'therapy',
            title: '1. Therapy & Counselling',
            badge: 'Clinical Care',
            image: '/images/services/therapy.jpeg',
            icon: HeartHandshake,
            description:
                'MindHilla provides individual therapy, relationship and marriage counselling, premarital counselling and online therapy to support emotional wellbeing, personal growth and healthier relationships. Sessions offer a safe, compassionate and professional space to understand challenges, gain clarity and develop healthier patterns.',
            features: [
                'Individual Therapy (Trauma, Grief, Emotional Regulation)',
                'Relationship & Marital Restoration',
                'Premarital Foundations & Assessment',
                'Confidential Online Sessions & Abuja Clinic',
            ],
        },
        {
            id: 'addiction',
            title: '2. Sexual Addiction Recovery',
            badge: 'Unmasked Protocol',
            image: '/images/services/addiction.jpg',
            icon: Sparkles,
            description:
                'MindHilla provides structured support and educational programmes for individuals dealing with sexual addiction, pornography, compulsive sexual behaviours, lust, shame and related trauma[cite: 3]. The focus is on understanding underlying patterns, developing healthier coping strategies and moving toward emotional and spiritual wholeness[cite: 3].',
            features: [
                'Root-cause compulsive pattern assessments',
                'Breaking shame loops & emotional isolation',
                'Cognitive & spiritual recovery tools',
                'Confidential 1-on-1 recovery pathways',
            ],
        },
        {
            id: 'courses',
            title: '3. Courses & Learning',
            badge: 'MindHilla Academy',
            image: '/images/services/courses.jpg',
            icon: GraduationCap,
            description:
                'Through MindHilla Academy, individuals can access transformational masterclasses and self-development programmes focused on healing, identity, relationships, personal growth and other areas of wellbeing[cite: 3]. These programmes provide practical knowledge and tools that participants can apply beyond the learning environment[cite: 3].',
            features: [
                '7 Signature Masterclasses & Frameworks',
                'LMS video portal with progress tracking',
                'Downloadable workbooks & guided assignments',
                'Cohort communities & facilitator access',
            ],
        },
        {
            id: 'speaking',
            title: '4. Speaking & Training',
            badge: 'Keynotes & Seminars',
            image: '/images/services/speaking.jpg',
            icon: Mic,
            description:
                'MindHilla delivers talks, seminars, workshops and professional training for organisations, churches, schools, communities and other groups[cite: 3]. Sessions address relevant topics around mental health, relationships, identity, emotional wellness, personal development and human wellbeing[cite: 3].',
            features: [
                'Conferences, summits, and keynote addresses',
                'Faith communities & family life forums',
                'School assemblies & youth leadership retreats',
                'Interactive audience Q&A and workshops',
            ],
        },
        {
            id: 'corporate',
            title: '5. Corporate Programs',
            badge: 'Institutional Health',
            image: '/images/partner/partner-bg.jpg',
            icon: Building2,
            description:
                'MindHilla designs and delivers tailored programs for churches and faith-based institutions, primary and secondary schools, tertiary institutions, and corporate organizations[cite: 3]. Through emotional wellness, relational intelligence, and transformative learning, we equip leaders and staff with tools to build healthier relationships and thrive[cite: 3].',
            features: [
                'Executive burnout prevention & stress debriefs',
                'Relational intelligence for leadership teams',
                'Institutional wellness culture audits',
                'Custom employee assistance frameworks',
            ],
        },
    ];

    const futureServices = [
        {
            title: '6. Books & Resources',
            badge: 'Publications',
            image: '/images/services/books.jpg',
            icon: BookOpen,
            desc: 'MindHilla develops books, workbooks, guides, digital resources and practical tools that support healing, self-understanding, personal growth and healthier relationships[cite: 3]. These resources are designed to make helpful knowledge and practical guidance accessible beyond therapy sessions and live programmes[cite: 3].',
        },
        {
            title: '7. Workshops & Experiences',
            badge: 'Gatherings',
            image: '/images/services/experiences.jpg',
            icon: Calendar,
            desc: 'MindHilla creates interactive workshops, transformational sessions and curated experiences around specific emotional, relational and personal-growth themes[cite: 3]. These experiences provide opportunities for deeper learning, reflection, connection and practical transformation in an engaging environment[cite: 3].',
        },
        {
            title: '8. Media & Awareness',
            badge: 'MindHilla TV',
            image: '/images/services/media.jpg',
            icon: Tv,
            desc: 'MindHilla uses media and storytelling to make conversations around mental health, relationships, identity and emotional wellbeing more accessible to wider audiences[cite: 3]. MindHilla TV forms part of this platform through short films, true-life stories, storytelling, talk-show conversations, expert insights, interviews, and awareness campaigns[cite: 3].',
        },
        {
            title: '9. Wellness, Spa & Massage Therapy',
            badge: 'Coming Soon',
            image: '/images/services/spa.jpg',
            icon: Flower2,
            desc: 'MindHilla will offer wellness, spa and massage therapy services designed to promote relaxation, physical restoration and overall wellbeing[cite: 3]. This future offering will complement our holistic approach to healing by creating space for self-care, renewal and therapeutic wellness[cite: 3].',
        },
    ];

    return (
        <div className="flex flex-col">
            {/* 1. CENTRALIZED HERO IMAGE CAROUSEL SECTION */}
            <section className="relative overflow-hidden bg-black text-white min-h-[580px] sm:min-h-[660px] flex items-center justify-center">
                {heroSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                            }`}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-100"
                            style={{ backgroundImage: `url('${slide.image}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#024010]/85 via-black/75 to-black/90" />
                    </div>
                ))}

                <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/20 text-xs font-semibold text-[#C5A059] backdrop-blur-md mb-6 shadow-sm">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>{heroSlides[currentSlide].badge}</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.18] max-w-3xl min-h-[130px] sm:min-h-[150px] flex items-center justify-center">
                        {heroSlides[currentSlide].heading}
                    </h1>

                    <p className="text-stone-100 text-base sm:text-lg leading-relaxed max-w-2xl mt-3 min-h-[80px]">
                        {heroSlides[currentSlide].copy}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
                        <a
                            href={heroSlides[currentSlide].ctaHref}
                            className="inline-flex items-center gap-2 bg-[#035c17] hover:bg-[#0b7823] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all shadow-lg hover:scale-105 border border-white/20"
                        >
                            <span>{heroSlides[currentSlide].ctaText}</span>
                            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                        </a>

                        <Link
                            href="/support"
                            className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#d8b772] text-[#024010] text-sm font-bold px-7 py-3.5 rounded-full transition-all shadow-lg hover:scale-105"
                        >
                            <span>Partner with Us</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                <div className="absolute z-20 bottom-8 left-0 right-0 max-w-5xl mx-auto px-4 flex justify-between items-center">
                    <button
                        onClick={prevSlide}
                        className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
                        aria-label="Previous Slide"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="flex items-center space-x-2.5">
                        {heroSlides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-[#C5A059]' : 'w-2.5 bg-white/40 hover:bg-white/70'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
                        aria-label="Next Slide"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </section>

            {/* 2. CORE PROFESSIONAL SERVICES (UNIFORM SIZED CARDS WITH LIFTED INSET IMAGES) */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="max-w-3xl space-y-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                        Active Pathways
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#035c17]">
                        Core Professional Services
                    </h2>
                    <p className="text-sm sm:text-base text-[#5C6763] leading-relaxed">
                        Delivering structured, evidence-informed care tailored to your emotional, relational, educational, and corporate needs.
                    </p>
                </div>

                {/* Uniform Grid: 3 columns on desktop, 2 on tablet, equal sizing */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {professionalServices.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.id}
                                id={service.id}
                                className="bg-white rounded-3xl border border-[#E8E5DF] p-6 flex flex-col justify-between hover:shadow-xl hover:border-[#035c17]/30 transition-all duration-300 group shadow-sm"
                            >
                                <div className="space-y-5">
                                    {/* LIFTED INSET IMAGE FRAME: Inset with padding, soft shadow & border */}
                                    <div className="relative h-56 w-full rounded-2xl overflow-hidden shadow-md border border-stone-200/80 bg-stone-100 group-hover:shadow-lg transition-shadow">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                            style={{ backgroundImage: `url('${service.image}')` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                        <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-[#024010] bg-[#C5A059] px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
                                            {service.badge}
                                        </span>
                                    </div>

                                    {/* Header & Title */}
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-8 h-8 rounded-lg bg-[#035c17]/5 text-[#035c17] flex items-center justify-center shrink-0">
                                                <Icon className="w-4 h-4" />
                                            </div>
                                            <h3 className="text-xl font-serif font-bold text-[#035c17] leading-tight">
                                                {service.title}
                                            </h3>
                                        </div>
                                        <p className="text-xs text-[#5C6763] leading-relaxed line-clamp-4">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Features List */}
                                    <div className="pt-3 border-t border-[#E8E5DF] space-y-2">
                                        <span className="text-[11px] font-bold text-[#035c17] uppercase tracking-wider block">
                                            Included in this service:
                                        </span>
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-2 text-xs text-[#1C2421]">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                                                <span className="leading-snug">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Card Action Button */}
                                <div className="pt-6 mt-6 border-t border-[#E8E5DF]">
                                    <a
                                        href="#intake-form"
                                        className="w-full inline-flex items-center justify-center gap-2 bg-[#035c17] hover:bg-[#0b7823] text-white text-xs font-semibold py-3 px-4 rounded-xl transition-all shadow-sm"
                                    >
                                        <span>Book This Pathway</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 3. FUTURE & EXPANDING SERVICES (MATCHING LIFTED CARD STYLE) */}
            <section className="py-20 bg-[#FAF8F5] border-y border-[#E8E5DF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div className="max-w-2xl space-y-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                            Future Horizons
                        </span>
                        <h2 className="text-3xl font-serif font-bold text-[#035c17]">
                            Expanding Services & Wellness Initiatives
                        </h2>
                        <p className="text-sm text-[#5C6763]">
                            Upcoming initiatives designed to make transformational knowledge, reflection, and physical rest accessible.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {futureServices.map((service, idx) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={idx}
                                    className="bg-white rounded-3xl border border-[#E8E5DF] p-5 flex flex-col justify-between hover:shadow-lg transition-all group"
                                >
                                    <div className="space-y-4">
                                        {/* Lifted Image Frame */}
                                        <div className="relative h-44 w-full rounded-2xl overflow-hidden shadow-sm border border-stone-200 bg-stone-100">
                                            <div
                                                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                                style={{ backgroundImage: `url('${service.image}')` }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                            <span className="absolute top-2.5 right-2.5 text-[9px] font-bold uppercase tracking-wider text-[#024010] bg-[#C5A059] px-2.5 py-1 rounded-full shadow">
                                                {service.badge}
                                            </span>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-[#035c17]">
                                                <Icon className="w-4 h-4 text-[#C5A059]" />
                                                <h4 className="font-serif font-bold text-base text-[#035c17] leading-tight">
                                                    {service.title}
                                                </h4>
                                            </div>
                                            <p className="text-xs text-[#5C6763] leading-relaxed line-clamp-4">
                                                {service.desc}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-4 mt-4 border-t border-[#E8E5DF]">
                                        <Link
                                            href="/contact"
                                            className="text-xs font-semibold text-[#035c17] hover:underline inline-flex items-center gap-1"
                                        >
                                            <span>Join Notification List</span>
                                            <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4. INTAKE & CONSULTATION BOOKING FUNNEL */}
            <section id="intake-form" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <BookingForm />
            </section>
        </div>
    );
}