'use client';
import { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import TopicSection from './components/TopicSection';
import CinemaIntroSection from './components/CinemaIntroSection';
import MoviesSection from './components/MoviesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useScrollAnimation } from './hooks/useScrollAnimation';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  
  // 스크롤 애니메이션 훅 사용
  useScrollAnimation();
  
  // 섹션 참조
  const sectionRefs = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
  ];
  
  // 스크롤 모니터링 및 현재 섹션 업데이트
  useEffect(() => {
    // 현재 섹션 관리를 위한 스크롤 이벤트 핸들러
    const handleScroll = () => {
      let current = 0;
      sectionRefs.forEach((ref, index) => {
        const element = ref.current;
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          if (top < viewportHeight / 2 && bottom > viewportHeight / 2) {
            current = index;
          }
        }
      });
      setCurrentSection(current);
    };
    
    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);
    
    // 컴포넌트 언마운트 시 정리
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // React Hook 의존성 배열에 sectionRefs 추가할 필요 없음 (참조는 변경되지 않음)
  
  return (
    <div className="adjacent-sections-layout">
      {/* 고정 헤더 */}
      <Header currentSection={currentSection} />
      
      <main>
        {/* 인트로 섹션 */}
        <IntroSection sectionRef={sectionRefs[0]} />
        
        {/* 토픽 섹션 */}
        <TopicSection sectionRef={sectionRefs[1]} />
        
        {/* 시네마 소개 섹션 */}
        <CinemaIntroSection sectionRef={sectionRefs[2]} />
        
        {/* 작품들 섹션 */}
        <MoviesSection sectionRef={sectionRefs[3]} />
        
        {/* 배급 소개 섹션 */}
        <AboutSection sectionRef={sectionRefs[4]} />
        
        {/* 문의 섹션 */}
        <ContactSection sectionRef={sectionRefs[5]} />
        
        {/* 푸터 */}
        <Footer />
      </main>
    </div>
  );
}