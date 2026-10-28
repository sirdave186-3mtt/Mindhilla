'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, Menu, X, ArrowUpRight, ChevronDown, Sparkles, School, Tv } from 'lucide-react';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [initiativesOpen, setInitiativesOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    const initiatives = [
        {
            name: 'The Garden Experience',
            desc: 'Annual restorative gathering',
            href: '/garden-experience',
            icon: Sparkles,
        },
        {
            name: 'School Outreach',
            desc: 'Youth identity & mental health',
            href: '/school-outreach',
            icon: School,
        },
        {
            name: 'Media & MindHilla TV',
            desc: 'Stories, podcasts & guides',
            href: '/media',
            icon: Tv,
        },
    ];

    return (
        <header className="sticky top-0 z-50 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E8E5DF]">
            {/* Micro Announcement Bar */}
            <div className="bg-[#0D3B2E] text-[#FBF9F5] text-xs py-1.5 px-4 text-center font-medium tracking-wide flex justify-center items-center gap-3">
                <span>MindHilla • Healing Hearts, Nurturing Love</span>
                <span className="hidden sm:inline text-stone-400">|</span>
                <span className="hidden sm:inline text-stone-300">RC: 9193259</span>
                <Link
                    href="/support"
                    className="ml-2 inline-flex items-center gap-1 text-[#C5A059] hover:underline font-semibold"
                >
                    Partner with Us <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
            </div>

            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                {/* Brand Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#C5A059]/40 bg-white shadow-xs flex items-center justify-center shrink-0">
                        <img
                            src="/images/icon.png"
                            alt="MindHilla Logo"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-serif font-bold tracking-tight text-[#035c17] leading-none">
                            MindHilla
                        </span>
                        <span className="text-[9px] uppercase tracking-widest text-[#5C6763] mt-0.5 font-semibold">
                            Wellness & Therapy
                        </span>
                    </div>
                </Link>

                {/* Streamlined Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-7">
                    <Link
                        href="/"
                        className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-[#0D3B2E] font-bold border-b-2 border-[#0D3B2E] pb-1' : 'text-[#5C6763] hover:text-[#0D3B2E]'
                            }`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-[#0D3B2E] font-bold border-b-2 border-[#0D3B2E] pb-1' : 'text-[#5C6763] hover:text-[#0D3B2E]'
                            }`}
                    >
                        About
                    </Link>
                    <Link
                        href="/services"
                        className={`text-sm font-medium transition-colors ${isActive('/services') ? 'text-[#0D3B2E] font-bold border-b-2 border-[#0D3B2E] pb-1' : 'text-[#5C6763] hover:text-[#0D3B2E]'
                            }`}
                    >
                        Services
                    </Link>
                    <Link
                        href="/academy"
                        className={`text-sm font-medium transition-colors ${isActive('/academy') ? 'text-[#0D3B2E] font-bold border-b-2 border-[#0D3B2E] pb-1' : 'text-[#5C6763] hover:text-[#0D3B2E]'
                            }`}
                    >
                        Academy
                    </Link>

                    {/* Initiatives Dropdown Menu */}
                    <div
                        className="relative"
                        onMouseEnter={() => setInitiativesOpen(true)}
                        onMouseLeave={() => setInitiativesOpen(false)}
                    >
                        <button
                            className={`inline-flex items-center gap-1 text-sm font-medium transition-colors py-2 ${pathname.includes('garden') || pathname.includes('outreach') || pathname.includes('media')
                                ? 'text-[#0D3B2E] font-bold'
                                : 'text-[#5C6763] hover:text-[#0D3B2E]'
                                }`}
                        >
                            <span>Initiatives</span>
                            <ChevronDown className="w-3.5 h-3.5" />
                        </button>

                        {initiativesOpen && (
                            <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-[#E8E5DF] p-2 space-y-1 z-50">
                                {initiatives.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#FBF9F5] transition"
                                        >
                                            <Icon className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                                            <div>
                                                <div className="text-sm font-semibold text-[#0D3B2E]">{item.name}</div>
                                                <div className="text-xs text-[#5C6763]">{item.desc}</div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    <Link
                        href="/blog"
                        className={`text-sm font-medium transition-colors ${isActive('/blog') ? 'text-[#0D3B2E] font-bold border-b-2 border-[#0D3B2E] pb-1' : 'text-[#5C6763] hover:text-[#0D3B2E]'
                            }`}
                    >
                        Blog
                    </Link>
                </div>

                {/* Right CTA Suite */}
                <div className="hidden lg:flex items-center space-x-4">
                    <Link
                        href="/contact"
                        className="text-sm font-medium text-[#5C6763] hover:text-[#0D3B2E] px-2 py-1"
                    >
                        Contact
                    </Link>

                    <Link
                        href="/support"
                        className="text-xs font-semibold text-[#0D3B2E] border border-[#0D3B2E]/20 hover:border-[#0D3B2E] px-3.5 py-2 rounded-full transition-all"
                    >
                        Support
                    </Link>

                    <Link
                        href="/academy/portal"
                        className="inline-flex items-center gap-2 bg-[#0D3B2E] hover:bg-[#155744] text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all shadow-sm"
                    >
                        <User className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>My Account</span>
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <div className="flex lg:hidden items-center gap-2">
                    <Link
                        href="/academy/portal"
                        className="p-2 rounded-full bg-[#0D3B2E]/5 text-[#0D3B2E]"
                        aria-label="My Account"
                    >
                        <User className="w-5 h-5" />
                    </Link>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 rounded-md text-[#0D3B2E]"
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-[#FBF9F5] border-b border-[#E8E5DF] px-6 py-6 space-y-4 shadow-xl">
                    <div className="flex flex-col space-y-3">
                        <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#0D3B2E]">Home</Link>
                        <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#0D3B2E]">About</Link>
                        <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#0D3B2E]">Services</Link>
                        <Link href="/academy" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#0D3B2E]">Academy</Link>

                        <div className="pt-2 pb-1 border-t border-[#E8E5DF] space-y-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059]">Initiatives</span>
                            <div className="pl-2 space-y-2">
                                <Link href="/garden-experience" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#5C6763]">The Garden Experience</Link>
                                <Link href="/school-outreach" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#5C6763]">School Outreach</Link>
                                <Link href="/media" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#5C6763]">Media & MindHilla TV</Link>
                            </div>
                        </div>

                        <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#0D3B2E]">Blog</Link>
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#0D3B2E]">Contact Us</Link>
                        <Link href="/support" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#C5A059]">Support / Partner with Us</Link>
                    </div>

                    <div className="pt-4 border-t border-[#E8E5DF]">
                        <Link
                            href="/academy/portal"
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-full flex justify-center items-center gap-2 bg-[#0D3B2E] text-white text-sm font-semibold py-3 rounded-xl"
                        >
                            <User className="w-4 h-4 text-[#C5A059]" />
                            <span>Access Student Portal</span>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
<Link
    href="/account"
    className="inline-flex items-center gap-2 bg-[#035c17] hover:bg-[#0b7823] text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all shadow-sm"
>
    <User className="w-3.5 h-3.5 text-[#C5A059]" />
    <span>My Account</span>
</Link>