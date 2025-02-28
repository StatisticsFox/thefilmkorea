'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  currentSection: number;
}

const Header: React.FC<HeaderProps> = ({ currentSection }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // 컴포넌트가 마운트될 때 로컬 스토리지에서 테마 설정 로드
  useEffect(() => {
    // 초기 테마 설정 로드
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // 사용자 설정이 없지만 시스템이 다크 모드인 경우
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);
    
    // 초기 스크롤 위치 확인
    handleScroll();
    
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // 테마 전환 핸들러
  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  // 스크롤에 따른 헤더 배경 스타일
  const headerStyle = {
    backgroundColor: isScrolled 
      ? (isDarkMode ? '#1a1a1a' : '#ffffff') 
      : 'transparent',
    transition: 'background-color 0.3s ease',
    position: 'fixed',
    width: '100%',
    zIndex: 50,
  } as React.CSSProperties;
  
  return (
    <header style={headerStyle}>
      <div className="logo">
        <Link href="/">
          <h1>The Film Korea</h1>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/" className={currentSection === 0 ? 'text-yellow' : ''}>
              홈
            </Link>
          </li>
          <li>
            <a href="#intro" className={currentSection === 1 ? 'text-yellow' : ''}>
              Topic
            </a>
          </li>
          <li>
            <a href="#topics" className={currentSection === 2 ? 'text-yellow' : ''}>
              소식
            </a>
          </li>
          <li>
            <a href="#cinema-intro" className={currentSection === 3 ? 'text-yellow' : ''}>
              소개
            </a>
          </li>
          <li>
            <a href="#movies" className={currentSection === 4 ? 'text-yellow' : ''}>
              작품
            </a>
          </li>
          <li>
            <a href="#about" className={currentSection === 5 ? 'text-yellow' : ''}>
              배급
            </a>
          </li>
          <li>
            <a href="#contact" className={currentSection === 6 ? 'text-yellow' : ''}>
              문의
            </a>
          </li>
          <li>
            <div className="theme-toggle" onClick={toggleTheme}>
              <span className="theme-toggle-icon">
                {isDarkMode ? '🌙' : '☀️'}
              </span>
              <div className={`theme-toggle-track ${isDarkMode ? 'active' : ''}`}>
                <div className="theme-toggle-thumb"></div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;