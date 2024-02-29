import { ThemeProvider} from '@/src/context/ThemeProvider';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";
import { ContextWrapper } from '@/src/context/ContextWrapper';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Game Day Grill',
    description: 'Game Day Grill is a restaurant located in Southlake, Texas. We serve a variety of food and drinks. We are open 7 days a week. We are open for breakfast, lunch, and dinner. We also offer catering services. We are located at 1720 Southlake Blvd. Southlake, TX. 76092. We are open from 7:00 am to 10:00 pm',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className} >
      <ThemeProvider>
          <ContextWrapper>
              {children}
          </ContextWrapper>
      </ThemeProvider>
      </body>
    </html>
  )
}