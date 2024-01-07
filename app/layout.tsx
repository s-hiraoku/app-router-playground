import { Theme } from '@radix-ui/themes';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@radix-ui/themes/styles.css';
import { useMediaQuery } from './hooks/useMediaQuery';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const appearance = useMediaQuery('(prefers-color-scheme: dark)')? 'dark' : 'light';
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance={appearance}>{children}</Theme>
      </body>
    </html>
  );
}
