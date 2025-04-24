import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vincent Brancati Portfolio - Web Developer | SEO Specialist',
  description: "Vincent Brancati's web development projects and skills.",
  keywords: ['Vincent Brancati', 'web developer', 'seo specialist'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Vincent Brancati Portfolio - Web Developer | SEO Specialist',
    description: "Vincent Brancati's web development projects and skills.",
    siteName: 'Vincent Brancati Portfolio',
    locale: 'en_US',
    type: 'website',
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
      </head>
      <body>{children}</body>
    </html>
  );
}