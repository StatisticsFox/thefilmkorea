'use client';
import React, { useState, useEffect, useRef } from 'react';

interface IntroSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const IntroSection: React.FC<IntroSectionProps> = ({ sectionRef }) => {
  const [showContent, setShowContent] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 페이지 로드 후 1초 뒤에 콘텐츠 표시
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="intro"
      ref={sectionRef as React.RefObject<HTMLElement>}
      style={{
        backgroundImage: 'url(/images/bg.png)',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        height: '50vh',
      }}
    >
      {/* 텍스트 가독성을 위한 배경 레이어 (애니메이션 적용) */}
      <div 
        ref={overlayRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6))',
          opacity: showContent ? 1 : 0,
          transition: 'opacity 1.5s ease',
          zIndex: 1
        }}
      />
      
      <div className="container text-center" style={{ position: 'relative', zIndex: 10 }}>
        <div 
          ref={textContainerRef}
          className="text-reveal-container"
          style={{
            opacity: showContent ? 1 : 0,
            transform: `translateY(${showContent ? '0' : '20px'})`,
            transition: 'opacity 1.5s ease, transform 1.5s ease',
          }}
        >
          <h2
            style={{
              fontSize: '4.5rem',
              color: '#000000',
              marginBottom: '1.5rem',
              textShadow: '0px 0px 10px rgba(255, 255, 255, 0.8)',
              fontWeight: 'bold',
            }}
            className="scroll-reveal"
          >
            The Film Korea
          </h2>
          <p
            style={{
              fontSize: '2.5rem',
              color: '#000000',
              maxWidth: '900px',
              margin: '0 auto',
              marginBottom: '3rem',
              textShadow: '0px 0px 8px rgba(255, 255, 255, 0.8)',
              fontWeight: '500',
            }}
            className="scroll-reveal delay-300"
          >
            새로운 관점으로 세상을 바라보는 독립·예술영화 배급사
          </p>
        </div>
        
        {/* 스크롤 화살표 (애니메이션 적용) */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: showContent ? 1 : 0,
            transition: 'opacity 2s ease',
            transitionDelay: '0.5s'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path 
              d="M12 5L12 19M12 19L19 12M12 19L5 12" 
              stroke="#000000" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;