'use client';
import React from 'react';
import Link from 'next/link';

interface CinemaIntroSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const CinemaIntroSection: React.FC<CinemaIntroSectionProps> = ({ sectionRef }) => {
  return (
    <section
      id="cinema-intro"
      ref={sectionRef}
      className="cinema-intro-section"
    >
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2>The Film Korea 소개</h2>
          <Link href="/about" className="more-link">
            더보기 &gt;
          </Link>
        </div>
        
        <div className="section-divider"></div>
        
        <div className="cinema-content">
          <div className="cinema-image">
            <img 
              src="/images/cinema-logo.jpg" 
              alt="시네마 달 로고" 
              className="w-full h-auto"
              onError={(e) => {
                // e.currentTarget.src = '/public/images/background.JPG';
              }}
            />
          </div>
          
          <div className="cinema-text">
            <h2>The Film Korea 더 필름 코리아</h2>
            <p>The Film Korea는 독립영화 전문 제작/배급사입니다.</p>
            <p>
            The Film Korea는 독립영화를 제작하고 국내외로 배급하는 독립영화 전문 제작/배급사입니다. 2008년에 설립된 후 250여 편의 다큐멘터리와 극영화 작품을 배급, 한국 사회의 주요한 이슈와 장르 작품과 다양한 경험을 관객들과 함께 나누고 있습니다.
            </p>
            <p>
              창의적이고 유연한 독립영화 배급 시스템을 지향합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinemaIntroSection;