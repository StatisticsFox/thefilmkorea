'use client';

import React from 'react';

interface AboutSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const AboutSection: React.FC<AboutSectionProps> = ({ sectionRef }) => {
  return (
    <section 
      id="about" 
      ref={sectionRef}
      style={{ 
        background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9))'
      }}
    >
      <div className="container">
        <h2>배급 소개</h2>
        
        <div style={{ background: 'rgba(0,0,0,0.5)', padding: '2rem', borderRadius: '0.5rem' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
            제사장 시네마는 2012년 설립 이래 다양한 독립·예술영화를 발굴하고 배급해 왔습니다. 
            우리는 새롭고 진취적인 영화적 시각을 가진 창작자들의 작품을 관객들에게 소개하는 것을 목표로 합니다.
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            매년 10여 편의 국내외 독립·예술영화를 배급하며, 영화제 출품 및 부가판권 유통을 통해 
            작품이 더 많은 관객과 만날 수 있도록 지원하고 있습니다.
          </p>
          
          <div className="grid grid-cols-3">
            <div style={{ background: '#1f1f1f', padding: '1.5rem', borderRadius: '0.5rem', textAlign: 'center' }}>
              <h3 style={{ color: '#facc15', fontSize: '2rem' }}>200+</h3>
              <p>배급 작품 수</p>
            </div>
            <div style={{ background: '#1f1f1f', padding: '1.5rem', borderRadius: '0.5rem', textAlign: 'center' }}>
              <h3 style={{ color: '#facc15', fontSize: '2rem' }}>50+</h3>
              <p>영화제 수상</p>
            </div>
            <div style={{ background: '#1f1f1f', padding: '1.5rem', borderRadius: '0.5rem', textAlign: 'center' }}>
              <h3 style={{ color: '#facc15', fontSize: '2rem' }}>10년+</h3>
              <p>배급 경력</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;