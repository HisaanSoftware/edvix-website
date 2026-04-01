import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navigation } from "@/components/landing/navigation"
import { FooterSection } from "@/components/landing/footer-section"

export const metadata: Metadata = {
  title: "Edvix | Complete Education & Tuition Platform",
  description:
    "Edvix helps students learn better with expert tutors, live classes, structured practice, and measurable progress.",
  generator: "Edvix",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navigation />
        {children}
        <Analytics />
              <FooterSection />

      </body>
    </html>
  )
}
