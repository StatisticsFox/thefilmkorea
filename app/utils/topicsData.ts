// utils/topicsData.ts

export interface Topic {
    id: number;
    title: string;
    excerpt: string;
    description: string;
    author: string;
    date: string;
    image: string;
    slug: string;
    content?: string;
  }
  
  export const topics: Topic[] = [
    {
      id: 1,
      title: '<여성국극 꿈이젖듯 이야기고 사라질듯 영원하다> 3월 19일 개봉 & 티저 포스터 공개!',
      excerpt: '"이야기고 여성국극하는 꿈을 꾸는 자지"-여성국극 꿈이젖듯 이야기고 사라질듯 영원하다',
      description: '3월 19일 개봉 확정 & 티저 포스터 공개! 여자의 여자를 뛰어넘어 예술이 되는 순간!',
      author: '관리자',
      date: '2025.2.20',
      image: '/images/topics/topic1.jpg',
      slug: '1',
      content: `
        <h2>여성국극의 세계로 초대합니다</h2>
        <p>3세대 여성국극인 박수빈, 황지영이 '정희'의 이야기를 들려줍니다. 여성국극의 역사와 현재, 그리고 미래를 담아낸 이 작품은 3월 19일 전국 극장에서 만나볼 수 있습니다.</p>
        <p>여성국극은 여성 배우들만이 공연하는 한국의 전통 극 형식으로, 남성 역할까지 여성이 맡아 연기합니다. 이번 영화는 그 예술 형식의 아름다움과 도전을 생생하게 담아냈습니다.</p>
        <p>티저 포스터는 여성국극의 상징적인 이미지를 현대적 감각으로 재해석했습니다. 전통과 현대의 만남, 그 경계에서 피어나는 아름다움을 느껴보세요.</p>
      `
    },
    {
      id: 2,
      title: '<두 사람> 2/12 오늘 개봉! 전국 개봉관 리스트 대공개🌈',
      excerpt: '"가장 낮선 곳에서, 가장 깊은 사랑으로"-<두 사람> 바로 오늘! 2월 12일 극장 대개봉!🎬',
      description: '예매 바로가기 & 티켓팅스, CGV 상영정보 등 상세 안내',
      author: '관리자',
      date: '2025.2.12',
      image: '/images/topics/topic2.jpg',
      slug: '2',
      content: `
        <h2>오늘 바로 극장에서 만나요!</h2>
        <p><두 사람>이 드디어 오늘 개봉합니다! 전국 주요 극장에서 이 감동적인 이야기를 만나보세요.</p>
        <h3>상영관 리스트</h3>
        <ul>
          <li>CGV 명동, 용산아이파크몰, 영등포, 센텀시티, 대구, 광주터미널</li>
          <li>메가박스 코엑스, 부산대, 울산, 대전, 원주, 제주</li>
          <li>롯데시네마 월드타워, 홍대입구, 센텀시티, 동성로</li>
        </ul>
        <p>예매 링크: <a href="https://bit.ly/3A3Kfmi">https://bit.ly/3A3Kfmi</a></p>
        <p>티켓팅스: <a href="https://buly.kr/9t8hmhk">https://buly.kr/9t8hmhk</a></p>
        <p>CGV: <a href="https://buly.kr/2qWOY51">https://buly.kr/2qWOY51</a></p>
      `
    },
    {
      id: 3,
      title: '<두 사람> 2월 12일 극장 개봉 확정 & 보도스틸 16종 대공개!',
      excerpt: '"36년 전의 꽃 선물이 반평생의 사랑이 됐다" – 중앙일보',
      description: '나란히 기차 세계 각국 초청 <두 사람>, 2월 12일 한국 극장 개봉 확정!',
      author: '관리자',
      date: '2025.1.7',
      image: '/images/topics/topic3.jpg',
      slug: '3',
      content: `
        <h2>감동적인 이야기, 2월 12일 극장 개봉 확정!</h2>
        <p>중앙일보는 "<두 사람>은 36년 전의 꽃 선물이 반평생의 사랑이 됐다"고 극찬했습니다. 두 노인의 인생을 담담하게 그려낸 이 작품은 세계 각국의 영화제에 초청되어 큰 호평을 받았습니다.</p>
        <p>이제 드디어 한국 관객들도 만나볼 수 있게 되었습니다. 2월 12일, 극장에서 <두 사람>의 아름다운 이야기를 경험해보세요.</p>
        <p>보도스틸 16종을 통해 영화의 감동적인 순간들을 미리 만나보세요. 낯선 나라 독일에서 반평생을 함께 해온 두 사람의 이야기, 그들의 사랑과 우정, 그리고 인생의 의미를 담아낸 작품입니다.</p>
      `
    }
  ];
  
  // id로 특정 토픽 데이터를 찾는 함수
  export const getTopicData = (id: string): Topic | undefined => {
    return topics.find(topic => topic.slug === id || topic.id.toString() === id);
  };
  
  export default topics;