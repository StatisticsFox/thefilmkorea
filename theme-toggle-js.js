// 다크모드 토글 함수
function setupThemeToggle() {
    // 테마 상태 초기화 (기본값: 라이트 모드)
    let currentTheme = localStorage.getItem('theme') || 'light';
    
    // 초기 테마 적용
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // 토글 버튼 엘리먼트 찾기
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleTrack = document.querySelector('.theme-toggle-track');
    
    // 초기 상태 설정
    if (currentTheme === 'dark') {
      themeToggleTrack.classList.add('active');
    }
    
    // 테마 토글 이벤트 리스너
    themeToggle.addEventListener('click', () => {
      // 현재 테마 전환
      currentTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      // 토글 상태 시각적 업데이트
      themeToggleTrack.classList.toggle('active');
      
      // 새 테마 적용
      document.documentElement.setAttribute('data-theme', currentTheme);
      
      // 로컬 스토리지에 선호하는 테마 저장
      localStorage.setItem('theme', currentTheme);
    });
  }
  
  // DOM이 로드된 후 테마 토글 함수 실행
  document.addEventListener('DOMContentLoaded', setupThemeToggle);
  
  // 시스템 기본 테마 감지 (선택적)
  function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // 시스템 테마가 다크 모드인 경우
      document.documentElement.setAttribute('data-theme', 'dark');
      document.querySelector('.theme-toggle-track').classList.add('active');
      localStorage.setItem('theme', 'dark');
    }
  }
  
  // 사용자가 로컬 저장소에 테마를 설정하지 않은 경우에만 시스템 테마 감지 실행
  if (!localStorage.getItem('theme')) {
    detectSystemTheme();
  }