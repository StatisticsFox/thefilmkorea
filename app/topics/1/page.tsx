'use client';
export default function TopicOnePage() {
  return (
    <div className="flex items-center justify-center h-screen pt-20"> {/* 상단 패딩 추가 */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500"> </h1>
        <h1 className="text-4xl font-bold text-white">.</h1> {/* 색상을 하얀색으로 변경 */}
        <h1 className="text-4xl font-bold text-red-500">페이지를 찾을 수 없습니다</h1>
        <p className="mt-4">요청하신 페이지가 존재하지 않습니다.</p>
        {/* <a href="/topics" className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded">
          토픽 목록으로 돌아가기
        </a> */}
      </div>
    </div>
  );
}
// 'use client';
// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';


// export default function TopicOnePage() {
  
//   return (
//     <>
//       <Header currentSection={0} />
//       <main className="container mx-auto py-12 px-4">
//         <div className="mb-6">
//           <Link href="/topics" className="text-blue-600 hover:underline">
//             &larr; 목록으로 돌아가기
//           </Link>
//         </div>
//         <article className="max-w-4xl mx-auto">
//           <h1 className="text-3xl font-bold mb-4">
//             &lt;여성국극 꿈어질듯 이어지고 사라질듯 영원하다&gt; 3월 19일 개봉
//           </h1>
//           <div className="text-gray-500 mb-8">
//             <span>관리자</span>
//             <span className="ml-4">2025.2.20</span>
//           </div>
//           <div className="mb-10 border-b pb-10">
//             <Image
//               src="/images/topic1_full.jpg"
//               alt="여성국극 포스터"
//               className="w-full max-w-2xl mx-auto mb-8"
//               width={800}
//               height={450}
//             />
//             <div className="text-center mb-8">
//               <strong className="text-xl">&ldquo;이지도 여성국극하는 꿈을 꾸는 거지&rdquo;</strong><br />
//               <strong className="text-xl">&lt;여성국극 꿈어질듯 이어지고 사라질듯 영원하다&gt;</strong><br />
//               <strong className="text-xl">3월 19일 개봉 확정 & 티저 포스터 공개!</strong>
//             </div>
//             <p className="mb-4">
//               시네마달(대표 김일권)은 서지영, 김미례 감독의 다큐멘터리 <strong>&lt;여성국극 꿈어질듯 이어지고 사라질듯 영원하다&gt;</strong>(이하 &lt;여성국극&gt;)를 오는 3월 19일 개봉한다.
//             </p>
//             <p className="mb-4">
//               &lt;여성국극&gt;은 &lsquo;여자가 남자역할을 하는&rsquo; 국극을 소재로 한 다큐멘터리로, 1948년 창단되어 1960-70년대 전성기를 누렸던 &lsquo;여성국극&rsquo;의 배우들이 지금 이 순간에도 계속해서 무대에 오르는 모습을 담아냈다. 배우들은 지금은 87세, 90세의 나이에도 무대 위에서 &lsquo;청춘&rsquo;으로 살아가고 있다.
//             </p>
//             <p className="mb-4">
//               &lt;여성국극&gt;은 2022 DMZ국제다큐멘터리영화제를 비롯하여 제24회 정동진독립영화제 &lsquo;새벽&rsquo; 부문, 2022 부산독립영화제 등에서 상영되었으며, 관객들의 뜨거운 호응과 함께 &ldquo;인생이라는 무대에서 영원히 꺼지지 않을 춤과 노래의 기록&rdquo;(씨네21)이라는 호평을 받았다.
//             </p>
//             <p className="mb-4">
//               영화는 전성기 당시 청춘스타로 활약했던 배우들이 오늘날에도 변함없이 무대 위에서 예술혼을 불태우는 모습을 통해, 예술가로서의 삶과 열정이 지니는 의미를 되새기게 한다.
//             </p>
//             <p className="mb-4">
//               공개된 티저 포스터에서는 무대 위 국극 배우의 모습을 통해 &ldquo;단 위, 남자와 여자를 뒤어넘어 예술이 되는 순간&rdquo;을 보여주며 관객들의 호기심을 자극한다.
//             </p>
//             <p className="mb-4">
//               시네마달은 이 작품을 3월 19일부터 CGV아트하우스, 메가박스, 롯데시네마 아트하우스관 및 전국 독립영화관에서 개봉할 예정이다.
//             </p>
//           </div>
//           <div className="text-center">
//             <Link href="/topics" className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
//               목록으로 돌아가기
//             </Link>
//           </div>
//         </article>
//       </main>
//       <Footer />
//     </>
//   );
// }