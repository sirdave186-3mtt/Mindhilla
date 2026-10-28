'use client';

import React from 'react';

export default function PartnerLogos() {
    const logos = [
        { name: 'Rotary International', src: '/images/logos/rotary.jpg' },
        { name: 'GOtv', src: '/images/logos/gotv.jpg' },
        { name: 'CTV', src: '/images/logos/ctv.png' },
        { name: 'NADA', src: '/images/logos/nada.png' },
        { name: 'FOTUD', src: '/images/logos/fotud.png' },
        { name: 'OIP Network', src: '/images/logos/oip.jpg' },
        { name: 'Partner Community 1', src: '/images/logos/logo-1.png' },
        { name: 'Partner Community 2', src: '/images/logos/logo-2.jpg' },
        { name: 'Partner Community 3', src: '/images/logos/logo-3.png' },
    ];

    return (
        <section className="py-14 sm:py-16 bg-[#FAF8F5] border-y border-[#E8E5DF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">

                {/* Section Heading */}
                <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 rounded-full border border-[#C5A059]/20">
                        Trusted Platform Network
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#035c17]">
                        Trusted by Communities, Schools, Faith Platforms & Media
                    </h3>
                </div>

                {/* Full-Color Logo Grid (Vivid, High-Visibility, No Grayscale) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-center justify-center">
                    {logos.map((partner, idx) => (
                        <div
                            key={idx}
                            className="h-24 sm:h-28 bg-white rounded-2xl border border-[#E8E5DF] p-4 flex items-center justify-center shadow-sm hover:shadow-md hover:border-[#035c17]/30 transition-all duration-300 group"
                        >
                            <img
                                src={partner.src}
                                alt={partner.name}
                                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}