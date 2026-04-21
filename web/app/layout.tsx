import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ideawithflo.com'),
  icons: {
    icon: '/favicon-32.png',
    apple: '/apple-touch-icon.png',
  },
  title: {
    default: 'Florian Huber — Industrial Designer Vienna',
    template: '%s | Florian Huber Industrial Designer',
  },
  description: 'Industrial designer based in Vienna, Austria. Product design, concept development, 3D modeling & CAD, prototyping and design strategy. Florian Huber e.U. — We manifest ideas.',
  keywords: [
    'industrial designer vienna',
    'product design austria',
    'florian huber designer',
    'industrial design wien',
    'produktdesign wien',
    'concept development',
    '3d modeling cad',
    'prototyping austria',
    'design strategy',
    'ideawithflo',
  ],
  authors: [{ name: 'Florian Huber', url: 'https://www.ideawithflo.com' }],
  creator: 'Florian Huber',
  publisher: 'Florian Huber e.U.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'de_AT',
    url: 'https://www.ideawithflo.com',
    siteName: 'Florian Huber — Industrial Designer',
    title: 'Florian Huber — Industrial Designer Vienna',
    description: 'Industrial designer based in Vienna. Product design, concept development, 3D modeling & prototyping. We manifest ideas.',
    images: [
      {
        url: '/Logo@300x.png',
        width: 300,
        height: 300,
        alt: 'Florian Huber Industrial Designer Vienna',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florian Huber — Industrial Designer Vienna',
    description: 'Industrial designer based in Vienna. We manifest ideas.',
    images: ['/Logo@300x.png'],
  },
  alternates: {
    canonical: 'https://www.ideawithflo.com',
    languages: {
      'en-US': 'https://www.ideawithflo.com',
      'de-AT': 'https://www.ideawithflo.com',
    },
  },
  verification: {
    google: 'add-your-google-search-console-token-here',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredDataPerson = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Florian Huber",
    "url": "https://www.ideawithflo.com",
    "jobTitle": "Industrial Designer",
    "description": "Industrial designer based in Vienna, Austria. Specializing in product design, concept development, 3D modeling & CAD, prototyping, and design strategy.",
    "address": { "@type": "PostalAddress", "addressLocality": "Vienna", "addressCountry": "AT" },
    "sameAs": ["https://www.linkedin.com/in/florian-huber-055700169/"]
  })

  const structuredDataOrg = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Florian Huber e.U.",
    "url": "https://www.ideawithflo.com",
    "description": "Industrial design studio based in Vienna, Austria.",
    "slogan": "Florian Huber manifestiert Ideen",
    "address": { "@type": "PostalAddress", "addressLocality": "Vienna", "addressCountry": "AT" },
    "email": "new@ideawithflo.com",
    "areaServed": "Worldwide",
    "sameAs": ["https://www.linkedin.com/in/florian-huber-055700169/"]
  })

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredDataPerson }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredDataOrg }} />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
