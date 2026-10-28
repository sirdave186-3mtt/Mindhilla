'use client';

import React from 'react';
import Link from 'next/link';
import {
    MessageCircle,
    MapPin,
    Phone,
    Mail,
    ShieldCheck
} from 'lucide-react';

export default function Footer() {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '2349131897480';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        'Hello MindHilla, I would like to make an inquiry.'
    )}`;

    return (
        <footer className="bg-[#02280a] text-white border-t border-white/10 pt-16 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                {/* Main 4-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

                    {/* Column 1: Brand & Socials (4 Cols) */}
                    <div className="lg:col-span-4 space-y-5">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#035c17] border border-[#C5A059]/40 text-white flex items-center justify-center font-serif font-bold text-lg shadow-sm">
                                M
                            </div>
                            <span className="text-2xl font-serif font-bold tracking-tight text-white">
                                MindHilla
                            </span>
                        </div>

                        <p className="text-xs text-stone-300 leading-relaxed max-w-sm">
                            MindHilla is a premier healing and transformation brand dedicated to emotional wellness, identity restoration, healthy relationships, and purposeful living.
                        </p>

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-[#C5A059]">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>Registered Entity • RC: 9193259</span>
                        </div>

                        {/* Social Icons — Inline clean SVGs for brand reliability */}
                        <div className="flex items-center gap-3 pt-2">
                            {/* Instagram */}
                            <a
                                href="https://instagram.com/mindhilla"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-stone-200 hover:text-[#C5A059] hover:border-[#C5A059] hover:bg-white/10 transition-all shadow-sm"
                                aria-label="Instagram"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                </svg>
                            </a>

                            {/* Facebook */}
                            <a
                                href="https://facebook.com/mindhilla"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-stone-200 hover:text-[#C5A059] hover:border-[#C5A059] hover:bg-white/10 transition-all shadow-sm"
                                aria-label="Facebook"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-stone-200 hover:text-[#25D366] hover:border-[#25D366] hover:bg-white/10 transition-all shadow-sm"
                                aria-label="WhatsApp Channel"
                            >
                                <MessageCircle className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Pathways (3 Cols) */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                            Pathways
                        </h4>
                        <ul className="space-y-2.5 text-xs text-stone-300">
                            <li>
                                <Link href="/services#therapy" className="hover:text-white transition-colors">
                                    Individual Therapy
                                </Link>
                            </li>
                            <li>
                                <Link href="/services#therapy" className="hover:text-white transition-colors">
                                    Couples Counseling
                                </Link>
                            </li>
                            <li>
                                <Link href="/services#addiction" className="hover:text-white transition-colors">
                                    Addiction Recovery
                                </Link>
                            </li>
                            <li>
                                <Link href="/academy" className="hover:text-white transition-colors">
                                    MindHilla Academy
                                </Link>
                            </li>
                            <li>
                                <Link href="/academy#heartbreak-recovery" className="hover:text-white transition-colors">
                                    Heartbreak Recovery
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Initiatives (2 Cols) */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                            Initiatives
                        </h4>
                        <ul className="space-y-2.5 text-xs text-stone-300">
                            <li>
                                <Link href="/garden-experience" className="hover:text-white transition-colors">
                                    The Garden Experience
                                </Link>
                            </li>
                            <li>
                                <Link href="/school-outreach" className="hover:text-white transition-colors">
                                    School Outreach
                                </Link>
                            </li>
                            <li>
                                <Link href="/media" className="hover:text-white transition-colors">
                                    MindHilla TV & Media
                                </Link>
                            </li>
                            <li>
                                <Link href="/support" className="hover:text-white transition-colors">
                                    Partner With Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-white transition-colors">
                                    Articles & Guides
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Abuja Office (3 Cols) */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                            Abuja Office
                        </h4>
                        <div className="space-y-3 text-xs text-stone-300">
                            <div className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                                <span>5 Senanga Street, Wuse Zone 5, Abuja FCT, Nigeria</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                                <a href="tel:+2349131897480" className="hover:text-white transition-colors">
                                    +234 913 189 7480
                                </a>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                                <a href="mailto:hello@mindhilla.com" className="hover:text-white transition-colors">
                                    hello@mindhilla.com
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Legal Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-stone-400">
                    <p>© 2026 MindHilla. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/contact" className="hover:text-white transition-colors">
                            Clinical Confidentiality Notice
                        </Link>
                        <Link href="/contact" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/contact" className="hover:text-white transition-colors">
                            Terms of Engagement
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}