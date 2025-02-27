import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    // 스크롤 애니메이션을 위한 Intersection Observer
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          // 화면 밖으로 벗어나면 다시 숨김 (스크롤 다시 올릴 때 효과 재생을 위해)
          // 이 줄을 주석 해제하면 요소가 화면을 벗어날 때 다시 숨겨집니다
          // entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });  // 요소가 10% 이상 보이면 트리거
  
    // 모든 애니메이션 요소에 observer 적용
    document.querySelectorAll('.scroll-reveal').forEach(el => {
      animationObserver.observe(el);
    });
  
    // 컴포넌트 언마운트 시 정리
    return () => {
      document.querySelectorAll('.scroll-reveal').forEach(el => {
        animationObserver.unobserve(el);
      });
    };
  }, []);
}