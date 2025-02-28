'use client';
import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TopicThreePage() {
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
            &lt;두 사람&gt;2월 12일 극장 개봉 확정 & 보도스틸 16종 최초 공개!
          </h1>
          
          <div className="text-gray-500 mb-8">
            <span>관리자</span>
            <span className="ml-4">2025.1.7</span>
          </div>
          
          <div className="mb-10 border-b pb-10">
            <img 
              src="/images/topic3_full.jpg" 
              alt="두 사람 스틸컷" 
              className="w-full max-w-2xl mx-auto mb-8"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            
            <div className="text-center mb-8">
              <strong className="text-xl">"36년 전의 못 섞일이 반평생의 사랑이 됐다"</strong><br />
              <strong className="text-xl">– 중앙일보 나원정 기자 세계 각국 초청 &lt;두 사람&gt;</strong><br />
              <strong className="text-xl">2월 12일 전국 극장 개봉 확정!</strong>
            </div>
            
            <p className="mb-4">
              시네마달(대표 김일권)은 배우 김윤석, 윤여정, 조진웅의 앙상블로 완성된 김용균 감독의 신작 &lt;두 사람&gt;을 오는 2월 12일 CGV아트하우스, 메가박스, 롯데시네마 아트하우스관 및 전국 독립·예술영화관에서 개봉한다.
            </p>
            
            <p className="mb-4">
              &lt;두 사람&gt;은 36년 전 북한에서 만난 두 남녀가 남한에서 우연히 재회하며 벌어지는 이야기를 그린 작품으로, 제26회 부산국제영화제 '한국영화감독조합상', 제42회 청룡영화상 감독상, 제20회 피렌체 한국영화제 관객상 수상 및 2021 토론토국제영화제, 2022 시카고국제영화제, 2022 판타지아영화제, 2022 로테르담국제영화제, 2022 뉴욕아시안영화제 등 해외 유수의 영화제에 초청되며 작품성을 인정받았다.
            </p>
            
            <p className="mb-4">
              이번에 공개된 보도스틸 16종에는 북에서 만난 '덕수'(김윤석)와 '미래'(한독)의 서투른 첫 만남부터, 36년 뒤 남한에서 우연히 재회한 두 사람의 모습까지 담겨있다. 또한 '미래'가 세탁소에서 일하는 모습과 두 사람이 함께 걷는 모습, 그리고 '미래'의 아들 '성운'(조진웅)과 갈등하는 장면까지, 영화 속 주요 장면들을 미리 만나볼 수 있다.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              {/* 스틸컷 16개를 그리드로 표시 - 실제 이미지 경로로 수정 필요 */}
              {Array.from({ length: 16 }).map((_, index) => (
                <div key={index} className="aspect-video bg-gray-200 overflow-hidden">
                  <img 
                    src={`/images/topic3_still_${index + 1}.jpg`}
                    alt={`두 사람 스틸컷 ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              ))}
            </div>
            
            <p className="mb-4">
              김용균 감독은 "이들의 관계는 단지 삶에 대한 애착보다는 서로에게 뭔가 의지하고 싶고, 의지되고 싶은 인간에 대한 감정이 중요하다고 생각했다"라고 전했다.
            </p>
            
            <p className="mb-4">
              오는 2월 12일 개봉하는 &lt;두 사람&gt;은 베테랑 배우들의 깊이 있는 연기와 김용균 감독의 섬세한 연출로, 관객들에게 잔잔하지만 깊은 여운을 선사할 예정이다.
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