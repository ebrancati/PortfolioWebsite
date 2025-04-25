import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vincent Brancati Portfolio - Web Developer | SEO Specialist',
  description: "Vincent Brancati's web development projects and skills.",
  keywords: ['Vincent Brancati', 'web developer', 'seo specialist'],
  creator: 'Vincent Brancati',
  publisher: 'Vincent Brancati',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.vincentbrancati.com',
  },
  openGraph: {
    title: 'Vincent Brancati Portfolio - Web Developer | SEO Specialist',
    description: "Vincent Brancati's web development projects and skills.",
    siteName: 'Vincent Brancati Portfolio',
    locale: 'en_US',
    type: 'website',
    url: 'https://www.vincentbrancati.com/',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Person',
              name: 'Vincent Brancati',
              url: 'https://www.vincentbrancati.com/',
              jobTitle: 'Web Developer',
              description: 'Full Stack Developer & SEO specialist',
              sameAs: [
                'https://github.com/ebrancati',
                'https://www.linkedin.com/in/enzo-brancati-a2880520b/',
                'https://www.youtube.com/@e.brancati'
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}