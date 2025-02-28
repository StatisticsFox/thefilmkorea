'use client';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-intro">
            <h3>The Film Korea</h3>
            <p>새로운 관점으로 세상을 바라보는 독립·예술영화 배급사</p>
          </div>
          <div className="grid grid-cols-3">
            <div className="footer-section">
              <h4>주소</h4>
              <p>서울특별시 강남구 태해산로</p>
              <p>107-3 아주빌딩</p>
            </div>
            <div className="footer-section">
              <h4>연락처</h4>
              <p>전화: 010-7451-1002</p>
              <p>이메일: thfilmkorea@gmail.com</p>
            </div>
            <div className="footer-section">
              <h4>바로가기</h4>
              <ul className="footer-links">
                <li><a href="#intro" className="footer-link">홈</a></li>
                <li><a href="#movies" className="footer-link">작품들</a></li>
                <li><a href="#about" className="footer-link">배급소개</a></li>
                <li><a href="#contact" className="footer-link">문의</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© 2025 The Film Korea. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;