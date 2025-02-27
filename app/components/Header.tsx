'use client';

import React, { useState, useEffect } from 'react';

interface HeaderProps {
  currentSection: number;
}

const Header: React.FC<HeaderProps> = ({ currentSection }) => {
  // 스크롤 위치에 따른 투명도 상태
  const [scrolled, setScrolled] = useState(false);
  
  // 스크롤 이벤트 리스너
  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 위치가 100px 이상이면 scrolled 상태를 true로 설정
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '0.8rem 2rem', // 패딩 줄임
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.3)',
        zIndex: 50,
        transition: 'all 0.3s ease',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <h1 
        style={{ 
          fontSize: '1.8rem', // 글자 크기 줄임
          fontWeight: 'bold',
          letterSpacing: '1px',
          color: '#fff',
          margin: 0, // 마진 제거
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        제사장 시네마
      </h1>
      
      <nav>
        <ul
          style={{
            display: 'flex',
            gap: '2rem', // 간격 줄임
            fontSize: '1rem', // 글자 크기 줄임
            fontWeight: '500',
            margin: 0, // 마진 제거
            padding: 0, // 패딩 제거
          }}
        >
          {[
            { id: 0, label: '소개', href: '#intro' },
            { id: 1, label: '작품들', href: '#movies' },
            { id: 2, label: '배급소개', href: '#about' },
            { id: 3, label: '문의', href: '#contact' },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                style={{ 
                  color: currentSection === item.id ? '#facc15' : 'white',
                  position: 'relative',
                  padding: '0.3rem 0', // 패딩 줄임
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => {
                  if (currentSection !== item.id) {
                    e.currentTarget.style.color = 'rgba(250, 204, 21, 0.7)';
                  }
                }}
                onMouseOut={(e) => {
                  if (currentSection !== item.id) {
                    e.currentTarget.style.color = 'white';
                  }
                }}
              >
                {item.label}
                <span 
                  style={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    left: 0, 
                    width: currentSection === item.id ? '100%' : '0%', 
                    height: '2px', 
                    backgroundColor: '#facc15',
                    transition: 'width 0.3s ease'
                  }}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
