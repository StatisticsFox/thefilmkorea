'use client';
import React from 'react';

interface ContactSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const ContactSection: React.FC<ContactSectionProps> = ({ sectionRef }) => {
  return (
    <section id="contact" ref={sectionRef}>
      <div className="container">
        <h2>문의하기</h2>
        <div className="contact-form-container">
          <form>
            <div className="form-grid">
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
            <button className="btn">
              <span>보내기</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;