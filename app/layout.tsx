import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import "./globals.css"

export const metadata: Metadata = {
  title: "ALL SYSTEMSCO - Solutions en télécommunications et énergie",
  description:
    "Spécialiste en radio, télécoms, panneaux solaires et antennes à Brazzaville, Congo. Installation, conseil et équipements professionnels.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <ScrollToTop />
          {children}
          <ScrollToTopButton />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
