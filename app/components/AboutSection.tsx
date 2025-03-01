'use client';
import React from 'react';

interface AboutSectionProps {
  // HTMLElement | null을 허용하도록 타입 수정
  sectionRef: React.RefObject<HTMLElement | null>;
}

const AboutSection: React.FC<AboutSectionProps> = ({ sectionRef }) => {
  return (
    <section
      id="about"
      ref={sectionRef}
      className="about-section"
    >
      <div className="container">
        <h2>배급 소개</h2>
        <div className="about-container">
          <p className="about-text">
            The Film Korea는 2012년 설립 이래 다양한 독립·예술영화를 발굴하고 배급해 왔습니다.
            우리는 새롭고 진취적인 영화적 시각을 가진 창작자들의 작품을 관객들에게 소개하는 것을 목표로 합니다.
          </p>
          <p className="about-text">
            매년 6여 편의 국내외 독립·예술영화를 배급하며, 영화제 출품 및 부가판권 유통을 통해
            작품이 더 많은 관객과 만날 수 있도록 지원하고 있습니다.
          </p>
          <div className="grid grid-cols-3">
            <div className="stat-card">
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">배급 작품 수</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">4+</h3>
              <p className="stat-label">영화제 수상</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">3년+</h3>
              <p className="stat-label">배급 경력</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;