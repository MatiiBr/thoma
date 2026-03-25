import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import SmoothScroll from '@/components/layout/SmoothScroll'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: {
    default: 'Thoma — Software Development & Marketing',
    template: '%s | Thoma',
  },
  description:
    'Transformamos ideas en productos digitales de alto impacto. Desarrollo de software y marketing digital.',
  keywords: [
    'desarrollo web',
    'marketing digital',
    'apps móviles',
    'branding',
    'software',
    'React',
    'Next.js',
  ],
  authors: [{ name: 'Thoma' }],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'Thoma',
    title: 'Thoma — Software Development & Marketing',
    description:
      'Transformamos ideas en productos digitales de alto impacto. Desarrollo de software y marketing digital.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thoma — Software Development & Marketing',
    description:
      'Transformamos ideas en productos digitales de alto impacto.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
