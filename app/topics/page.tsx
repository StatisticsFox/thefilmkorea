'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TopicsPage() {
  const topics = [
    {
      id: 1,
      title: "&quot;여성국극 꿈어질듯 이어지고 사라질듯 영원하다&quot; 3월 19일 개봉",
      excerpt: "&quot;이지도 여성국극하는 꿈을 꾸는 거지&quot;",
      description: "3월 19일 개봉 확정 & 티저 포스터 공개! 남자와 여자를 뛰어넘어 예술이 되는 순간",
      image: '/images/topic1.jpg',
      date: '2025.2.20'
    },
    {
      id: 2,
      title: "&quot;두 사람&quot; 2/12 오늘 개봉! 전국 개봉관 리스트 대공개",
      excerpt: "&quot;가장 낮선 곳에서, 가장 깊은 사랑으로&quot;",
      description: "🎬예매 바로가기▶ 인스타페이스: https://bit.ly/3A3Kfmi ▶티켓링크: https://buly.kr/9",
      image: '/images/topic2.jpg',
      date: '2025.2.12'
    },
    {
      id: 3,
      title: "&quot;두 사람&quot; 2월 12일 극장 개봉 확정 & 보도스틸 16종 최초 공개!",
      excerpt: "&quot;36년 전의 못 섞일이 반평생의 사랑이 됐다&quot; – 중앙일보 나원정 기자",
      description: "2월 12일 전국 극장 개봉 확정! 평생에 걸친 사랑을 연결하는 보도 스틸 16종 공개!",
      image: '/images/topic3.jpg',
      date: '2025.1.7'
    }
  ];

  return (
    <>
      <Header currentSection={0} />
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">DAL TOPIC</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <div key={topic.id} className="bg-white shadow-xl rounded-xl overflow-hidden transition-transform transform hover:scale-105">
              <Link href={`/topics/${topic.id}`}>
                <div>
                  <Image src={topic.image} alt={topic.title} width={400} height={250} className="w-full h-60 object-cover" />
                  <div className="p-4 text-left">
                    <h2 className="text-xl font-semibold mb-2 hover:text-blue-600">{topic.title}</h2>
                    <p className="text-gray-800 mb-2">{topic.excerpt}</p>
                    <p className="text-gray-700 text-sm">{topic.description}</p>
                    <div className="mt-4 text-gray-500 text-sm">관리자 • {topic.date}</div>
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