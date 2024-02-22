import { ThemeProvider } from '@/src/context/ThemeProvider';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";
import { ContextWrapper } from '@/src/context/ContextWrapper';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Game Day Grill',
  description: 'Game Day Grill for BPA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ContextWrapper>
            {children}
          </ContextWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
