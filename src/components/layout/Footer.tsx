import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#08261D] text-[#FBF9F5] border-t border-[#124234]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

                    {/* Brand & Stature */}
                    <div className="lg:col-span-2 space-y-5">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#C5A059] flex items-center justify-center text-[#08261D] font-serif font-bold text-xl">
                                M
                            </div>
                            <span className="text-2xl font-bold font-serif tracking-tight text-white">
                                MindHilla
                            </span>
                        </div>

                        <p className="text-stone-300 text-sm leading-relaxed max-w-sm">
                            MindHilla is a premier healing and transformation brand dedicated to emotional wellness, identity restoration, healthy relationships, and purposeful living.
                        </p>

                        <div className="flex items-center gap-2 text-xs text-[#C5A059] bg-[#0D3B2E] py-1.5 px-3 rounded-md w-fit border border-[#175240]">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Registered Entity • RC: 9193259</span>
                        </div>

                        <div className="flex items-center space-x-3 pt-2">
                            {/* Instagram SVG */}
                            <a
                                href="https://instagram.com/mindhilla"
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-full bg-[#0D3B2E] flex items-center justify-center text-stone-300 hover:text-white hover:bg-[#C5A059] transition-all"
                                aria-label="Instagram"
                            >
                                <svg className="w-4 h-4 fill-none stroke-currentColor stroke-2 stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                </svg>
                            </a>

                            {/* Facebook SVG */}
                            <a
                                href="https://facebook.com/mindhilla"
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-full bg-[#0D3B2E] flex items-center justify-center text-stone-300 hover:text-white hover:bg-[#C5A059] transition-all"
                                aria-label="Facebook"
                            >
                                <svg className="w-4 h-4 fill-none stroke-currentColor stroke-2 stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Pathways */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold tracking-wider text-[#C5A059] uppercase">
                            Pathways
                        </h4>
                        <ul className="space-y-2.5 text-sm text-stone-300">
                            <li><Link href="/services#individual" className="hover:text-white transition">Individual Therapy</Link></li>
                            <li><Link href="/services#couples" className="hover:text-white transition">Couples Counseling</Link></li>
                            <li><Link href="/services#addiction" className="hover:text-white transition">Addiction Recovery</Link></li>
                            <li><Link href="/academy" className="hover:text-white transition">MindHilla Academy</Link></li>
                            <li><Link href="/academy#heartbreak" className="hover:text-white transition">Heartbreak Recovery</Link></li>
                        </ul>
                    </div>

                    {/* Initiatives */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold tracking-wider text-[#C5A059] uppercase">
                            Initiatives
                        </h4>
                        <ul className="space-y-2.5 text-sm text-stone-300">
                            <li><Link href="/garden-experience" className="hover:text-white transition">The Garden Experience</Link></li>
                            <li><Link href="/school-outreach" className="hover:text-white transition">School Outreach</Link></li>
                            <li><Link href="/media" className="hover:text-white transition">MindHilla TV & Media</Link></li>
                            <li><Link href="/support" className="hover:text-white transition">Partner With Us</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition">Articles & Guides</Link></li>
                        </ul>
                    </div>

                    {/* Abuja Office */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold tracking-wider text-[#C5A059] uppercase">
                            Abuja Office
                        </h4>
                        <ul className="space-y-3 text-sm text-stone-300">
                            <li className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
                                <span>5 Senanga Street, Wuse Zone 5, Abuja FCT, Nigeria</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                                <a href="tel:+2349131897480" className="hover:text-white transition">+234 913 189 7480</a>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                                <a href="mailto:hello@mindhilla.com" className="hover:text-white transition">hello@mindhilla.com</a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-14 pt-8 border-t border-[#124234] flex flex-col sm:flex-row justify-between items-center text-xs text-stone-400 gap-4">
                    <p>© 2026 MindHilla. All rights reserved.</p>
                    <div className="flex items-center space-x-6">
                        <Link href="/confidentiality" className="hover:underline">Clinical Confidentiality Notice</Link>
                        <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                        <Link href="/terms" className="hover:underline">Terms of Engagement</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}