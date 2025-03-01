'use client';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TopicsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header currentSection={0} /> {/* 또는 적절한 섹션 번호 */}
      <div className="pt-36"> {/* 헤더 높이보다 크게 설정 */}
        {children}
      </div>
      <Footer />
    </>
  );
}