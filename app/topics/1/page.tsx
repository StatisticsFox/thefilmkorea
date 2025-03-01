import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTopicData } from '../../utils/topicsData';

// 토픽 상세 페이지 컴포넌트
export default function TopicDetailPage({ params }: { params: { id: string } }) {
  const topicId = params.id;
  const topic = getTopicData(topicId);
  
  // 토픽이 없는 경우 404 페이지로 리다이렉트
  if (!topic) {
    notFound();
  }

  return (
    <main>
      <div className="pt-20 pb-10"> {/* 헤더 높이만큼 상단 여백 추가 */}
        <div className="container">
          <div className="mb-6">
            <Link href="/topics" className="text-gray hover:text-yellow">
              &larr; 토픽 목록으로 돌아가기
            </Link>
          </div>

          <article className="bg-dark p-6 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">{topic.title}</h1>
            
            <div className="flex items-center mb-6 text-gray">
              <span>{topic.author}</span>
              <span className="mx-2">•</span>
              <span>{topic.date}</span>
            </div>
            
            {topic.image && (
              <div className="mb-6 relative h-64 w-full">
                <Image 
                  src={topic.image} 
                  alt={topic.title} 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            
            <div className="mb-6">
              <p className="text-lg font-medium mb-4">{topic.excerpt}</p>
              <p className="mb-4">{topic.description}</p>
              
              {/* 실제 컨텐츠가 있다면 여기에 렌더링 */}
              {topic.content && (
                <div className="mt-6">
                  <div dangerouslySetInnerHTML={{ __html: topic.content }} />
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}