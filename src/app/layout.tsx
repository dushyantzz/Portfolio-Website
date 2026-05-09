import UmamiAnalytics from '@/components/analytics/UmamiAnalytics';
import { CommandPaletteProvider } from '@/components/common/command-palette';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import OnekoCat from '@/components/common/OnekoCat';
import { Quote } from '@/components/common/Quote';
import { ThemeProvider } from '@/components/common/ThemeProviders';
import { Toaster } from '@/components/ui/sonner';
import { generateMetadata as getMetadata } from '@/config/Meta';
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';

import './globals.css';

export const metadata = getMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-hanken-grotesk antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CommandPaletteProvider>
            <Navbar />
            <ReactLenis root>
              <ViewTransitions>
                {children}
                <OnekoCat />
                <Quote />
                <Footer />
                <UmamiAnalytics />
              </ViewTransitions>
            </ReactLenis>
            <Toaster position="bottom-center" richColors closeButton />
          </CommandPaletteProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
