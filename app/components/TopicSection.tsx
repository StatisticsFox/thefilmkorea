'use client';
import React from 'react';
import Link from 'next/link';

interface TopicSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const TopicSection: React.FC<TopicSectionProps> = ({ sectionRef }) => {
  return (
    <section
      id="topics"
      ref={sectionRef}
      className="py-16 topic-section"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">TFK TOPIC</h2>
          <Link href="/topics" className="more-link">
            더보기 &gt;
          </Link>
        </div>
        
        <div className="border-t-2 border-black mb-8"></div>
        
        <div className="compact-topic-list">
          {/* 첫 번째 토픽 */}
          <Link href="/topics/1" className="compact-topic-item">
            <div className="compact-topic-content">
              <h3 className="compact-topic-title">
                &lt;잊혀진 별의 기억&gt; 영화 제작 확정!
              </h3>
              <p className="compact-topic-excerpt">
                &ldquo;우리의 기억은 언제나 서로를 향해 있었다&rdquo; 시간을 넘나드는 잊지 못할 사랑 이야기
              </p>
              <p className="compact-topic-description">
                우주의 비밀, 잊혀진 기억, 그리고 다시 만난 두 영혼의 놀라운 여정! 로맨틱 SF 드라마의 새로운 패러다임
              </p>
              <div className="compact-topic-meta">
                <span className="compact-topic-author">관리자</span>
                <span className="compact-topic-date">2025.2.20</span>
              </div>
            </div>
          </Link>
          
          {/* 두 번째 토픽 */}
          <Link href="/topics/2" className="compact-topic-item">
            <div className="compact-topic-content">
              <h3 className="compact-topic-title">
                &lt;비밀의 정원&gt; 극장 개봉 확정 & 스틸컷 16종 최초 공개 예정
              </h3>
              <p className="compact-topic-excerpt">
              &ldquo;모든 비밀은 결국 꽃피울 준비를 한다&rdquo; – 전 세계가 주목하는 미스터리 로맨스
              </p>
              <p className="compact-topic-description">
               숨겨진 과거, 되살아나는 기억, 그리고 용서의 순간을 담은 스틸컷 16종 공개!
              </p>
              <div className="compact-topic-meta">
                <span className="compact-topic-author">관리자</span>
                <span className="compact-topic-date">2025.2.12</span>
              </div>
            </div>
          </Link>
          
          {/* 세 번째 토픽 */}
          <Link href="/topics/3" className="compact-topic-item">
            <div className="compact-topic-content">
              <h3 className="compact-topic-title">
                &lt;현재진행형 이별&gt; 끊임없이 흔들리는 감정의 지도
              </h3>
              <p className="compact-topic-excerpt">
               &ldquo;아직 끝나지 않은 우리의 이야기&rdquo; 사랑과 이별 사이, 우리의 감정을 향한 여정
              </p>
              <p className="compact-topic-description">
                끝나지 않은 사랑, 끝나지 않은 이별, 끝나지 않은 우리의 이야기. 감정의 미로 속에서 펼쳐지는 감동의 이야기
              </p>
              <div className="compact-topic-meta">
                <span className="compact-topic-author">관리자</span>
                <span className="compact-topic-date">2025.1.7</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopicSection;