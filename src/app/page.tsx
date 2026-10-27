import React from 'react';
import Link from 'next/link';
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
  ExternalLink
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
      title: 'Individual Therapy & Healing',
      description:
        'Structured, private therapy addressing emotional trauma, identity exploration, grief, and compulsive behavioral patterns in a secure, confidential environment.',
      icon: HeartHandshake,
      badge: 'Clinical Care',
      link: '/services#individual',
      cta: 'Explore Therapy',
    },
    {
      title: 'Couples & Family Restoration',
      description:
        'Tailored counseling for singles, engaged partners, and married couples navigating communication, intimacy, conflict resolution, and family cycles.',
      icon: Sparkles,
      badge: 'Relational Intelligence',
      link: '/services#couples',
      cta: 'View Relational Programs',
    },
    {
      title: 'MindHilla Academy & Training',
      description:
        'Transformational masterclasses, self-development curriculums, and practical frameworks designed for deep spiritual, emotional, and relational growth.',
      icon: GraduationCap,
      badge: 'Self-Paced & Cohorts',
      link: '/academy',
      cta: 'Browse Academy Courses',
    },
  ];

  const signatureCourses = [
    {
      title: 'The Heartbreak Recovery Masterclass',
      duration: '8 Weeks',
      focus: 'Emotional Healing & Joy Restoration',
      slug: 'heartbreak-recovery',
    },
    {
      title: 'The Divine Intimacy Blueprint',
      duration: '12 Weeks',
      focus: 'Spiritual Alignment & Deep Connection',
      slug: 'divine-intimacy',
    },
    {
      title: 'Unmasked: Healing Sexual Addiction',
      duration: '6 Weeks',
      focus: 'Trauma Resolution & Freedom Strategies',
      slug: 'unmasked-addiction-recovery',
    },
    {
      title: 'The Self Reinvention Roadmap',
      duration: '4 Weeks',
      focus: 'Purpose, Mindset & Identity Reset',
      slug: 'self-reinvention-roadmap',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">

            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D3B2E]/5 border border-[#0D3B2E]/10 text-xs font-semibold text-[#0D3B2E]">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Restoring People to Their Original Design</span>
            </div>

            {/* Editorial Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0D3B2E] tracking-tight leading-[1.15]">
              Pathways to healing, identity, and relational wholeness.
            </h1>

            {/* Sub-text */}
            <p className="text-lg text-[#5C6763] leading-relaxed max-w-2xl">
              MindHilla unites professional therapeutic insight, practical education, and faith-informed principles to help individuals, couples, and institutions cultivate emotional resilience and purposeful lives.
            </p>

            {/* Actions Grid */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link className="inline-flex items-center gap-2 bg-[#0D3B2E] hover:bg-[#155744] text-white text-base font-semibold px-6 py-3.5 rounded-full shadow-md transition-all hover:scale-[1.02]" href="/services">
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </Link>

              <Link className="inline-flex items-center gap-2 bg-white hover:bg-stone-50 text-[#0D3B2E] text-base font-semibold px-6 py-3.5 rounded-full border border-[#0D3B2E]/20 transition-all hover:border-[#0D3B2E]" href="/academy">
                <span>Explore Academy</span>
              </Link>

              <Link className="inline-flex items-center gap-2 bg-[#C5A059]/15 hover:bg-[#C5A059]/25 text-[#0D3B2E] text-base font-semibold px-6 py-3.5 rounded-full border border-[#C5A059]/40 transition-all" href="/support">
                <span>Partner with Us</span>
                <ExternalLink className="w-4 h-4 text-[#C5A059]" />
              </Link>
            </div>

            {/* Safety & Location Assurance */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-[#5C6763]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0D3B2E]" />
                <span>Strict Clinical Confidentiality</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#0D3B2E]" />
                <span>Abuja Clinic & Virtual Global Consultations</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CORPORATE AUTHORITY: AS SEEN ON / PLATFORMS SPOKEN AT */}
      <section className="py-12 bg-white border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#5C6763] mb-8">
            Trusted by Communities, Educational Alliances & Professional Platforms
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center">
            {platforms.map((platform, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center text-center p-3 rounded-lg border border-[#E8E5DF] bg-[#FBF9F5] text-xs font-medium text-[#5C6763] hover:text-[#0D3B2E] hover:border-[#0D3B2E]/30 transition-colors h-16"
              >
                {platform}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. IMPACT METRICS BAR */}
      <section className="py-16 bg-[#0D3B2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {metrics.map((metric, idx) => (
              <div key={idx} className="pt-4 md:pt-0 px-4 space-y-1">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-[#C5A059]">
                  {metric.value}
                </span>
                <p className="text-xs sm:text-sm text-stone-300 font-medium">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRI-PILLAR CORE SERVICES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
            Comprehensive Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3B2E]">
            How We Support Your Wholeness
          </h2>
          <p className="text-sm sm:text-base text-[#5C6763]">
            Dedicated pathways designed to meet you at every stage of your personal, relational, or institutional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8E5DF] p-8 flex flex-col justify-between hover:shadow-xl hover:border-[#0D3B2E]/20 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-xl bg-[#0D3B2E]/5 text-[#0D3B2E] flex items-center justify-center group-hover:bg-[#0D3B2E] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A059] bg-[#C5A059]/10 px-2.5 py-1 rounded-full">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0D3B2E]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#5C6763] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-8">
                  <Link className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D3B2E] group-hover:text-[#C5A059] transition-colors" href="{pillar.link}">
                    <span>{pillar.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. FLAGSHIP EVENT: THE GARDEN EXPERIENCE */}
      <section className="py-20 bg-[#08261D] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 rounded-full border border-[#C5A059]/20">
                Annual Transformational Encounter
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold leading-tight">
                The Garden Experience
              </h2>
              <blockquote className="border-l-2 border-[#C5A059] pl-4 italic text-stone-300 text-sm">
                Inspired by Genesis 2 and Isaiah 61:1–3 — Return to intimacy, authentic identity, and wholehearted alignment.
              </blockquote>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                A yearly faith-informed gathering where deep conversations, therapeutic insights, worship, teaching, and intentional reflection converge to create safe spaces for confronting brokenness and emerging renewed.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#d8b772] text-[#08261D] text-sm font-bold px-6 py-3.5 rounded-full transition-all" href="/garden-experience">
                  <Calendar className="w-4 h-4" />
                  <span>Discover Next Gathering</span>
                </Link>
                <Link className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-sm font-semibold px-6 py-3.5 rounded-full border border-white/20 transition-all" href="/media">
                  <Video className="w-4 h-4 text-[#C5A059]" />
                  <span>Watch Past Moments</span>
                </Link>
              </div>
            </div>

            <div className="bg-[#0D3B2E] border border-white/10 rounded-2xl p-8 space-y-6">
              <h3 className="text-xl font-serif font-bold text-white">
                Core Pillars of The Gathering
              </h3>
              <ul className="space-y-4 text-sm text-stone-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Intimacy with God:</strong> Rediscovering presence, communion, and spiritual alignment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Therapeutic Insights:</strong> Evidence-backed emotional processing and trauma tools.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Safe Community:</strong> Unfiltered conversations with individuals walking the healing journey.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 6. ACADEMY PREVIEW */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
              MindHilla Academy
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3B2E]">
              Signature Masterclasses
            </h2>
          </div>
          <Link className="inline-flex items-center gap-2 text-sm font-bold text-[#0D3B2E] hover:text-[#C5A059] transition-colors" href="/academy">
            <span>View All 7 Courses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatureCourses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#E8E5DF] p-6 flex flex-col justify-between hover:border-[#0D3B2E]/30 transition-all hover:shadow-md"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-[#0D3B2E] bg-[#0D3B2E]/5 px-2.5 py-1 rounded-md">
                  {course.duration}
                </span>
                <h3 className="text-lg font-serif font-bold text-[#0D3B2E] leading-snug">
                  {course.title}
                </h3>
                <p className="text-xs text-[#5C6763]">
                  {course.focus}
                </p>
              </div>

              <div className="pt-6">
                <Link className="text-xs font-semibold text-[#0D3B2E] hover:underline inline-flex items-center gap-1" href="{`/academy#${course.slug}`}">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. INTAKE & CONSULTATION BANNER */}
      <section className="py-20 bg-[#F4F1EA] border-t border-[#E8E5DF]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3B2E]">
            Begin Your Journey to Restoration
          </h2>
          <p className="text-sm sm:text-base text-[#5C6763] max-w-xl mx-auto leading-relaxed">
            Whether you are seeking confidential individual counseling, marital restoration, or enrollment in an upcoming masterclass, compassionate help is within reach.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link className="inline-flex items-center gap-2 bg-[#0D3B2E] hover:bg-[#155744] text-white text-sm font-semibold px-6 py-3.5 rounded-full shadow-md transition-all" href="/services">
              <span>Schedule a Clinical Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </Link>
            <Link className="inline-flex items-center gap-2 bg-white hover:bg-stone-50 text-[#0D3B2E] text-sm font-semibold px-6 py-3.5 rounded-full border border-[#0D3B2E]/20 transition-all" href="/contact">
              <span>Visit our Abuja Center</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}