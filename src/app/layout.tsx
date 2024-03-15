import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';
import { auth } from 'auth';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/providers/theme';
import { ReduxProvider } from '@/providers/client';
import { QueryProvider } from '@/providers/query';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GlamHub',
  description: 'GlamHub',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <ReduxProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <Toaster />
              <QueryProvider>{children}</QueryProvider>
            </ThemeProvider>
          </ReduxProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
