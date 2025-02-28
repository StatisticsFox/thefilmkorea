'use client';
import React from 'react';

interface IntroSectionProps {
  // HTMLElement | null을 허용하도록 타입 수정
  sectionRef: React.RefObject<HTMLElement | null>;
}

const IntroSection: React.FC<IntroSectionProps> = ({ sectionRef }) => {
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
      {/* 오버레이 제거함 */}
      <div className="container text-center" style={{ position: 'relative', zIndex: 10 }}>
        <div className="text-reveal-container">
          <h2
            style={{
              fontSize: '4.5rem',
              color: '#00000',
              marginBottom: '1.5rem',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
            className="scroll-reveal"
          >
            The Film Korea
          </h2>
          <p
            style={{
              fontSize: '2.5rem',
              color: '#00000',
              maxWidth: '900px',
              margin: '0 auto',
              marginBottom: '3rem',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
            }}
            className="scroll-reveal delay-300"
          >
            새로운 관점으로 세상을 바라보는 독립·예술영화 배급사
          </p>
          <button
            className="btn scroll-reveal delay-600"
            style={{
              fontSize: '1.2rem',
              padding: '0.8rem 2.5rem',
            }}
          >
            자세히 보기
          </button>
        </div>
        {/* 스크롤 화살표 */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;