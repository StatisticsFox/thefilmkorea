import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Film Korea - 독립·예술영화 배급사',
  description: '새로운 관점으로 세상을 바라보는 독립·예술영화 배급사 The Film Korea입니다.',
  metadataBase: new URL('https://thefilmkorea.pages.dev'),
  openGraph: {
    title: 'The Film Korea - 독립·예술영화 배급사',
    description: '새로운 관점으로 세상을 바라보는 독립·예술영화 배급사 The Film Korea입니다.',
    url: 'https://thefilmkorea.pages.dev',
    siteName: 'The Film Korea',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/images/cinema-logo.jpg', // 실제 로고 이미지 경로로 변경하세요
        width: 1200,
        height: 630,
        alt: 'The Film Korea 로고',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Film Korea - 독립·예술영화 배급사',
    description: '새로운 관점으로 세상을 바라보는 독립·예술영화 배급사 The Film Korea입니다.',
    images: ['/images/cinema-logo.svg'], // 실제 로고 이미지 경로로 변경하세요
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}