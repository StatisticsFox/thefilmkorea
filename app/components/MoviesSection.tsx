'use client';

import React from 'react';

interface MoviesSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const MoviesSection: React.FC<MoviesSectionProps> = ({ sectionRef }) => {
  return (
    <section id="movies" ref={sectionRef}>
      <div className="container">
        <h2>주요 작품</h2>
        
        <div className="grid grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="card">
              <div 
                style={{ 
                  aspectRatio: '2/3', 
                  background: '#222',
                  position: 'relative'
                }}
              >
                <div 
                  style={{ 
                    position: 'absolute', 
                    bottom: '1rem', 
                    left: '1rem',
                    background: '#facc15',
                    color: 'black',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '0.25rem',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}
                >
                  2023
                </div>
              </div>
              <div className="card-body">
                <h3>영화 제목 {item}</h3>
                <p className="text-gray">감독: 홍길동</p>
                <p className="text-gray">출연: 김배우, 이배우</p>
                <p className="text-gray">120분</p>
                <button 
                  style={{
                    marginTop: '1rem',
                    width: '100%',
                    background: 'transparent',
                    border: '1px solid #facc15',
                    color: '#facc15',
                    padding: '0.5rem',
                    borderRadius: '0.25rem',
                    cursor: 'pointer'
                  }}
                >
                  자세히 보기
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button 
            style={{
              border: '1px solid white',
              background: 'transparent',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '0.25rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            모든 작품 보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default MoviesSection;