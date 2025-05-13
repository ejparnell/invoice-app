import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';

import Providers from '@/context/providers';
import Nav from '@/components/Nav';
import '@/styles/globals.css';

export const metadata: Metadata = {
    title: 'Invoice app',
    icons: {
        icon: '/favicon-32x32.png',
        shortcut: '/favicon-32x32.png',
        apple: '/favicon-32x32.png',
    },
};

const leagueSpartan = League_Spartan({
    subsets: ['latin'],
    variable: '--font-league-spartan',
    display: 'swap',
    weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <Providers>
                <body className={leagueSpartan.className}>
                    <Nav />
                    {children}
                </body>
            </Providers>
        </html>
    );
}
