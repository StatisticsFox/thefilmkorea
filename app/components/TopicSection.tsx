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
                &lt;여성국극 꿈어질듯 이어지고 사라질듯 영원하다&gt; 3월 19일 개봉
              </h3>
              <p className="compact-topic-excerpt">
                &ldquo;이지도 여성국극하는 꿈을 꾸는 거지&rdquo;&lt;여성국극 꿈어질듯 이어지고 사라질듯 영원하다&gt;
              </p>
              <p className="compact-topic-description">
                3월 19일 개봉 확정 &티저 포스터 공개!단 위, 남자와 여자를 뒤어넘어 예술이 되는 순간
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
                &lt;두 사람&gt;2/12 오늘 개봉! 전국 개봉관 리스트 대공개
              </h3>
              <p className="compact-topic-excerpt">
                &ldquo;가장 낮선 곳에서, 가장 깊은 사랑으로&rdquo;&lt;두 사람&gt; 바로 오늘! 2월 12일 극장 대개봉 🦋
              </p>
              <p className="compact-topic-description">
                🎬예매 바로가기▶ 인스타페이스: https://bit.ly/3A3Kfmi▶티켓링크: https://buly.kr/9
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
                &lt;두 사람&gt;2월 12일 극장 개봉 확정 & 보도스틸 16종 최초 공개!
              </h3>
              <p className="compact-topic-excerpt">
                &ldquo;36년 전의 못 섞일이 반평생의 사랑이 됐다&rdquo; – 중앙일보 나원정 기자 세계 각국 초청 &lt;두 사람&gt;
              </p>
              <p className="compact-topic-description">
                2월 12일 전국 극장 개봉 확정!평생에 걸친 사랑을 연결하는 보도 스틸 16종 공개!
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