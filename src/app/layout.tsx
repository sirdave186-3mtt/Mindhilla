import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppBubble from '@/components/layout/WhatsAppBubble';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MindHilla | Healing Hearts, Nurturing Love',
  description:
    'MindHilla is a healing and transformation brand focused on emotional wellness, identity restoration, relationship counseling, and personal growth.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C2421]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppBubble />
      </body>
    </html>
  );
}