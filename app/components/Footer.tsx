'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h3>제사장 시네마</h3>
            <p className="text-gray">새로운 관점으로 세상을 바라보는 독립·예술영화 배급사</p>
          </div>
          
          <div className="grid grid-cols-3">
            <div>
              <h4>주소</h4>
              <p className="text-gray">서울특별시 종로구 돈화문로 30</p>
              <p className="text-gray">종로5가 167-1</p>
            </div>
            <div>
              <h4>연락처</h4>
              <p className="text-gray">전화: 02-1234-5678</p>
              <p className="text-gray">이메일: contact@cinemadal.com</p>
            </div>
            <div>
              <h4>바로가기</h4>
              <ul>
                <li><a href="#intro" className="text-gray">홈</a></li>
                <li><a href="#movies" className="text-gray">작품들</a></li>
                <li><a href="#about" className="text-gray">배급소개</a></li>
                <li><a href="#contact" className="text-gray">문의</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #333', textAlign: 'center' }}>
          <p className="text-gray">© 2025 제사장시네마. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;