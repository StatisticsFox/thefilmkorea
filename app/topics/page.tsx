'use client';
import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TopicsPage() {
  const topics = [
    {
      id: 1,
      title: '<여성국극 꿈어질듯 이어지고 사라질듯 영원하다> 3월 19일 개봉',
      excerpt: '"이지도 여성국극하는 꿈을 꾸는 거지"<여성국극 꿈어질듯 이어지고 사라질듯 영원하다>',
      description: '3월 19일 개봉 확정 & 티저 포스터 공개! 남자와 여자를 뛰어넘어 예술이 되는 순간',
      image: '/images/topic1.jpg',
      date: '2025.2.20'
    },
    {
      id: 2,
      title: '<두 사람>2/12 오늘 개봉! 전국 개봉관 리스트 대공개',
      excerpt: '"가장 낮선 곳에서, 가장 깊은 사랑으로"<두 사람> 바로 오늘! 2월 12일 극장 대개봉 🦋',
      description: '🎬예매 바로가기▶ 인스타페이스: https://bit.ly/3A3Kfmi▶티켓링크: https://buly.kr/9',
      image: '/images/topic2.jpg',
      date: '2025.2.12'
    },
    {
      id: 3,
      title: '<두 사람>2월 12일 극장 개봉 확정 & 보도스틸 16종 최초 공개!',
      excerpt: '"36년 전의 못 섞일이 반평생의 사랑이 됐다" – 중앙일보 나원정 기자 세계 각국 초청 <두 사람>',
      description: '2월 12일 전국 극장 개봉 확정! 평생에 걸친 사랑을 연결하는 보도 스틸 16종 공개!',
      image: '/images/topic3.jpg',
      date: '2025.1.7'
    }
  ];

  return (
    <>
      <Header currentSection={0} />
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">DAL TOPIC</h1>
        <div className="border-t-2 border-black mb-8"></div>
        
        <div className="grid grid-cols-1 gap-12">
          {topics.map((topic) => (
            <div key={topic.id} className="border-b pb-8">
              <Link href={`/topics/${topic.id}`}>
                <div className="group">
                  <h2 className="text-2xl font-medium mb-4 group-hover:text-blue-600 transition-colors">{topic.title}</h2>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <p className="text-gray-700 mb-4">{topic.excerpt}</p>
                      <p className="text-gray-600">{topic.description}</p>
                      <div className="mt-4 text-gray-500 text-sm">
                        <span>관리자</span>
                        <span className="ml-4">{topic.date}</span>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <div className="aspect-video bg-gray-200 overflow-hidden">
                        {/* 실제 프로젝트에서는 Next/Image 사용을 권장합니다 */}
                        <img 
                          src={topic.image}
                          alt={topic.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
