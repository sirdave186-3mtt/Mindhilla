import React from 'react';
import Link from 'next/link';
import HeroCarousel from '@/components/ui/HeroCarousel';
import {
  ArrowRight,
  Sparkles,
  HeartHandshake,
  GraduationCap,
  Building2,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Video,
  Award,
  Users
} from 'lucide-react';

export default function HomePage() {
  const platforms = [
    'National Youth Leadership Summit',
    'Family Life Practitioners Forum',
    'Corporate Wellness Hub Africa',
    'Faith & Mental Health Network',
    'Beacon Secondary Schools Alliance',
    'Broadcast Media Network',
  ];

  const metrics = [
    { value: '1,200+', label: 'Sessions & Consultations Delivered' },
    { value: '7+', label: 'Signature Masterclasses & Frameworks' },
    { value: '15+', label: 'Schools & Communities Reached' },
    { value: '98%', label: 'Client Care & Confidentiality Trust' },
  ];

  const pillars = [
    {
      title: 'Therapy & Counselling',
      description:
        'Individual therapy, relationship and marriage counselling, premarital counselling and online therapy. Providing a safe, compassionate, professional space to gain clarity and heal.',
      icon: HeartHandshake,
      badge: 'Clinical Care',
      link: '/services#individual',
      cta: 'Explore Therapy',
    },
    {
      title: 'Sexual Addiction Recovery',
      description:
        'Structured support addressing sexual addiction, pornography, compulsive sexual behaviours, lust, shame and trauma wounds to restore personal integrity and healthy patterns.',
      icon: Sparkles,
      badge: 'Unmasked Protocol',
      link: '/services#addiction',
      cta: 'View Recovery Program',
    },
    {
      title: 'Courses & Learning (Academy)',
      description:
        'Transformational masterclasses and self-development programmes covering healing, identity, relationships, and personal growth through MindHilla Academy.',
      icon: GraduationCap,
      badge: 'Cohorts & Self-Paced',
      link: '/academy',
      cta: 'Browse Academy Courses',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. HERO IMAGE CAROUSEL WITH WRITE-UPS */}
      <HeroCarousel />

      {/* 2. ABOUT MINDHILLA STATEMENT */}
      <section className="py-20 bg-white border-b border-[#E8E5DF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
            Our Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#035c17] leading-tight">
            At MindHilla, we create pathways to healing, wholeness, and transformation.
          </h2>
          <p className="text-[#5C6763] text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            MindHilla is a healing and transformation brand focused on emotional wellness, faith, identity, relationships, and personal growth. Through therapy, education, speaking, community outreach, signature experiences, media, and transformational resources, MindHilla helps people heal, understand themselves, build healthier relationships, and live more whole and purposeful lives.
          </p>
          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#035c17] hover:text-[#0b7823] transition-colors"
            >
              <span>Read Our Full Story & Mission</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. CORPORATE AUTHORITY: AS SEEN ON / SPOKEN AT */}
      <section className="py-12 bg-[#FAF8F5] border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#5C6763] mb-8">
            Trusted by Communities, Educational Alliances & Professional Platforms
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center">
            {platforms.map((platform, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center text-center p-3 rounded-xl border border-[#E8E5DF] bg-white text-xs font-medium text-[#5C6763] hover:text-[#035c17] hover:border-[#035c17]/30 transition-colors h-16 shadow-sm"
              >
                {platform}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. IMPACT METRICS BAR */}
      <section className="py-16 bg-[#035c17] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/15">
            {metrics.map((metric, idx) => (
              <div key={idx} className="pt-4 md:pt-0 px-4 space-y-1">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-[#C5A059]">
                  {metric.value}
                </span>
                <p className="text-xs sm:text-sm text-stone-200 font-medium">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRI-PILLAR CORE SERVICES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
            Professional Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#035c17]">
            How We Walk With You
          </h2>
          <p className="text-sm sm:text-base text-[#5C6763]">
            Dedicated pathways designed to meet your personal, relational, or corporate wellness needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8E5DF] p-8 flex flex-col justify-between hover:shadow-xl hover:border-[#035c17]/30 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-xl bg-[#035c17]/5 text-[#035c17] flex items-center justify-center group-hover:bg-[#035c17] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A059] bg-[#C5A059]/10 px-2.5 py-1 rounded-full">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#035c17]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#5C6763] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-8">
                  <Link
                    href={pillar.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#035c17] group-hover:text-[#0b7823] transition-colors"
                  >
                    <span>{pillar.cta}</span>
                    <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. FOUNDER SPOTLIGHT: LAURETTA OKALOR */}
      <section className="py-20 bg-white border-y border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Real Founder Picture from Drive */}
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none w-full rounded-3xl overflow-hidden shadow-2xl border border-[#E8E5DF] bg-[#FAF8F5]">
              <div
                className="absolute inset-0 bg-cover bg-top"
                style={{
                  backgroundImage: `url('/images/team/lauretta.png')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider">
                  Founder & Lead Practitioner
                </span>
                <h3 className="text-2xl font-serif font-bold">Lauretta Okalor</h3>
                <p className="text-xs text-stone-200">Relationship & Trauma Therapist</p>
              </div>
            </div>

            {/* Founder Narrative */}
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 rounded-full border border-[#C5A059]/20">
                About the Founder
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#035c17] leading-tight">
                Where Compassion Meets Expertise
              </h2>
              <blockquote className="border-l-2 border-[#C5A059] pl-4 italic text-base text-[#1C2421] leading-relaxed">
                “Experience intentional healing and transformative therapy tailored to nurture your emotional well-being and restore your sense of wholeness.”
              </blockquote>
              <p className="text-sm text-[#5C6763] leading-relaxed">
                Under Lauretta’s leadership, MindHilla provides structured guidance for individuals, couples, and organizations. Her approach combines clinical excellence with profound empathy, helping clients confront deep-rooted emotional wounds, unpack behavioural triggers, and build lasting relational flourishing.
              </p>
              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-[#035c17] hover:bg-[#0b7823] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-all shadow-md"
                >
                  <span>Book a Session with Lauretta</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. THE GARDEN EXPERIENCE SPOTLIGHT */}
      <section className="py-20 bg-[#024010] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/15 px-3 py-1 rounded-full border border-[#C5A059]/30">
                Annual Transformational Event
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold leading-tight">
                Garden Experience
              </h2>
              <blockquote className="border-l-2 border-[#C5A059] pl-4 italic text-stone-200 text-sm">
                Inspired by the picture of the Garden in Genesis 2 — Encounter. Heal. Emerge.
              </blockquote>
              <p className="text-sm sm:text-base text-stone-200 leading-relaxed">
                Garden Experience is our faith-based healing and transformation yearly event created to help individuals reconnect with God, rediscover their true identity, heal from emotional and relational wounds, and return to His original design for their lives.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/garden-experience"
                  className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#d8b772] text-[#024010] text-sm font-bold px-6 py-3.5 rounded-full transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Learn More</span>
                </Link>
                <Link
                  href="/support?type=garden-partner"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-sm font-semibold px-6 py-3.5 rounded-full border border-white/20 transition-all"
                >
                  <span>Partner With Us</span>
                </Link>
              </div>
            </div>

            <div className="bg-[#035c17] border border-white/15 rounded-2xl p-8 space-y-5">
              <h3 className="text-xl font-serif font-bold text-white">
                The Eden Paradigm (Genesis 2)
              </h3>
              <p className="text-xs text-stone-200 leading-relaxed">
                Speaks to the place of intimacy, identity, wholeness, relationship, and divine connection that humanity was created to experience.
              </p>
              <ul className="space-y-3 text-xs text-stone-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Deep scriptural teachings and worship atmosphere</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Therapeutic insights and guided emotional processing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Safe, unfiltered community sharing and restoration</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}