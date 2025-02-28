'use client';
import React from 'react';

// 영화 데이터를 위한 인터페이스 정의
interface MovieData {
  id: number;
  title: string;
  year: string;
  director: string;
  cast: string;
  duration: string;
  posterImage: string; // 포스터 이미지 URL
  buttonColor?: string; // 버튼 색상 커스터마이징 가능
}

interface MoviesSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const MoviesSection: React.FC<MoviesSectionProps> = ({ sectionRef }) => {
  // 각 영화마다 다른 데이터를 정의
  const moviesData: MovieData[] = [
    {
      id: 1,
      title: "호조",
      year: "2025",
      director: "권혁만",
      cast: "최민우, 장정식, 이환의",
      duration: "117분 36초",
      posterImage: "./images/hozo.png", // 실제 이미지 경로로 교체 필요
      buttonColor: "#facc15"
    },
    {
      id: 2,
      title: "일주일간 친구",
      year: "2023",
      director: "임효겸",
      cast: "조금맥, 린이",
      duration: "106분",
      posterImage: "/images/weekfriends.png", // 실제 이미지 경로로 교체 필요
      buttonColor: "#60a5fa"
    },
    {
      id: 3,
      title: "울고싶은 나는 고양이 가면을 쓴다",
      year: "2020",
      director: "사토 준이치",
      cast: "시다 미라이, 하나에 나츠키",
      duration: "104분",
      posterImage: "/images/cat.png", // 실제 이미지 경로로 교체 필요
      buttonColor: "#facc15"
    },
    {
      id: 4,
      title: "유월",
      year: "2018",
      director: "이병윤",
      cast: "심현서",
      duration: "25분",
      posterImage: "/images/yuwol.png", // 실제 이미지 경로로 교체 필요
      buttonColor: "#10b981"
    },
    {
      id: 5,
      title: "콩나물",
      year: "2013",
      director: "윤가은",
      cast: "김수안, 오동주",
      duration: "20분",
      posterImage: "/images/sprout.png", // 실제 이미지 경로로 교체 필요
      buttonColor: "#facc15"
    },
    {
      id: 6,
      title: "동감",
      year: "2022",
      director: "서은영",
      cast: "여진구, 조이현",
      duration: "114분",
      posterImage: "./images/donggam.png", // 실제 이미지 경로로 교체 필요
      buttonColor: "#facc15"
    }
  ];

  return (
    <section id="movies" ref={sectionRef}>
      <div className="container">
        <h2>주요 작품</h2>
        <div className="grid grid-cols-3">
          {moviesData.map((movie) => (
            <div key={movie.id} className="card">
              <div
                style={{
                  aspectRatio: '2/3',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <img 
                  src={movie.posterImage}
                  alt={`${movie.title} 포스터`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    background: movie.buttonColor || '#facc15',
                    color: 'black',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '0.25rem',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}
                >
                  {movie.year}
                </div>
              </div>
              <div className="card-body">
                <h3>{movie.title}</h3>
                <p className="text-gray">감독: {movie.director}</p>
                <p className="text-gray">출연: {movie.cast}</p>
                <p className="text-gray">{movie.duration}</p>
                <button
                  style={{
                    marginTop: '1rem',
                    width: '100%',
                    background: 'transparent',
                    border: `1px solid ${movie.buttonColor || '#facc15'}`,
                    color: movie.buttonColor || '#facc15',
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