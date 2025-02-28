'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TopicTwoPage() {
  return (
    <>
      <Header currentSection={0} />
      <main className="container mx-auto py-12 px-4">
        <div className="mb-6">
          <Link href="/topics" className="text-blue-600 hover:underline">
            &larr; 목록으로 돌아가기
          </Link>
        </div>
        <article className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">
            &lt;두 사람&gt;2/12 오늘 개봉! 전국 개봉관 리스트 대공개
          </h1>
          <div className="text-gray-500 mb-8">
            <span>관리자</span>
            <span className="ml-4">2025.2.12</span>
          </div>
          <div className="mb-10 border-b pb-10">
            <Image
              src="/images/topic2_full.jpg"
              alt="두 사람 포스터"
              className="w-full max-w-2xl mx-auto mb-8"
              width={800}
              height={450}
            />
            <div className="text-center mb-8">
              <strong className="text-xl">&ldquo;가장 낮선 곳에서, 가장 깊은 사랑으로&rdquo;</strong><br />
              <strong className="text-xl">&lt;두 사람&gt; 바로 오늘! 2월 12일 극장 대개봉 🦋</strong>
            </div>
            <p className="mb-6">
              김윤석, 윤여정, 조진웅의 연기 앙상블로 완성된 김용균 감독의 작품 &lt;두 사람&gt;이 오늘(2/12) 전국 극장에서 대개봉합니다.
            </p>
            <p className="mb-6">
              드디어 개봉! 많은 기대와 성원 부탁드립니다. 🙏
            </p>
            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">📍 서울 개봉관</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>CGV: 강남, 왕십리, 용산아이파크몰, 여의도, 영등포, 홍대, 순천향대, 신촌아트레온</li>
                <li>롯데시네마: 건대입구, 신림, 에비뉴엘, 노원, 브로드웨이, 월드타워</li>
                <li>메가박스: 강남, 동대문, 성수, 코엑스, 센트럴, 하남스타필드</li>
              </ul>
              <h3 className="text-xl font-bold mb-4">📍 경기/인천 개봉관</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>CGV: 고양백석, 동탄, 서현, 부천, 수원, 평택</li>
                <li>롯데시네마: 광명아울렛, 분당, 인천아시아드, 라페스타</li>
                <li>메가박스: 고양백석, 일산벨라시타, 안산중앙, 이천</li>
              </ul>
              <h3 className="text-xl font-bold mb-4">📍 부산/대구/경상 개봉관</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>CGV: 대구스타디움, 대구한일, 동대구, 서면, 부산대, 하단아트몰링</li>
                <li>롯데시네마: 동래, 부산본점, 울산, 포항</li>
                <li>메가박스: 김해, 대구신세계, 울산, 창원</li>
              </ul>
            </div>
            <p className="mb-4">
              🎬 예매 바로가기
            </p>
            <ul className="mb-6">
              <li>▶ 인스타페이스: <a href="https://bit.ly/3A3Kfmi" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://bit.ly/3A3Kfmi</a></li>
              <li>▶ 티켓링크: <a href="https://buly.kr/9" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://buly.kr/9</a></li>
            </ul>
            <p>
              여러분의 많은 관심과 성원 부탁드립니다. 🙏<br />
              극장에서 만나요! 🎬
            </p>
          </div>
          <div className="text-center">
            <Link href="/topics" className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              목록으로 돌아가기
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}