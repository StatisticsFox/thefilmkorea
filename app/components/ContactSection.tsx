'use client';

import React from 'react';

interface ContactSectionProps {
  // HTMLElement | null을 허용하도록 타입 수정
  sectionRef: React.RefObject<HTMLElement | null>;
}

const ContactSection: React.FC<ContactSectionProps> = ({ sectionRef }) => {
  return (
    <section id="contact" ref={sectionRef}>
      <div className="container">
        <h2>문의하기</h2>
        
        <div style={{ background: '#1f1f1f', padding: '2rem', borderRadius: '0.5rem' }}>
          <form>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div className="form-group">
                <label>이름</label>
                <input type="text" placeholder="이름을 입력하세요" />
              </div>
              <div className="form-group">
                <label>이메일</label>
                <input type="email" placeholder="이메일을 입력하세요" />
              </div>
            </div>
            <div className="form-group">
              <label>제목</label>
              <input type="text" placeholder="제목을 입력하세요" />
            </div>
            <div className="form-group">
              <label>문의내용</label>
              <textarea rows={5} placeholder="문의내용을 입력하세요" />
            </div>
            <button className="btn">보내기</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
