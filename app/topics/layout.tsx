'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TopicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 현재 섹션을 Topic 섹션으로 설정 (1번 인덱스)
  const [currentSection] = useState(1);

  return (
    <>
      <Header currentSection={currentSection} />
      {children}
      <Footer />
    </>
  );
}