import React from 'react';
import Link from 'next/link';
import { topics } from '../utils/topicsData';

interface Topic {
  id: number;
  title: string;
  excerpt: string;
  description: string;
  author: string;
  date: string;
  image: string;
  slug: string;
}

const TopicListSection: React.FC = () => {
  // topics가 없을 경우를 대비한 빈 배열 기본값 설정
  const topicsData: Topic[] = topics || [];
  
  return (
    <section className="topic-section">
      <div className="container">
        <div className="section-header">
          <h2>토픽</h2>
          <Link href="/" className="more-link">
            홈으로 &rarr;
          </Link>
        </div>
        
        <div className="section-divider"></div>
        
        <div className="compact-topic-list">
          {topicsData.length > 0 ? (
            topicsData.map((topic) => (
              <Link href={`/topics/${topic.slug}`} key={topic.id} className="compact-topic-item">
                <div className="compact-topic-content">
                  <h3 className="compact-topic-title">{topic.title}</h3>
                  <p className="compact-topic-excerpt">{topic.excerpt}</p>
                  <p className="compact-topic-description">{topic.description}</p>
                  
                  <div className="compact-topic-meta">
                    <span className="compact-topic-author">{topic.author}</span>
                    <span className="compact-topic-date">{topic.date}</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>토픽 데이터를 불러오는 중입니다...</p>
          )}
        </div>
      </div>
    </section>
  );
};

// 페이지 컴포넌트
export default function TopicsPage() {
  return (
    <main>
      <div className="pt-20"> {/* 헤더 높이만큼 상단 여백 추가 */}
        <TopicListSection />
      </div>
    </main>
  );
}