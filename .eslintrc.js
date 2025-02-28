module.exports = {
    extends: 'next/core-web-vitals',
    rules: {
      // 따옴표 이스케이프 관련 규칙 비활성화
      'react/no-unescaped-entities': 'off',
      
      // img 태그 경고를 error에서 warning으로 변경
      '@next/next/no-img-element': 'warn',
      
      // useEffect 의존성 배열 경고를 error에서 warning으로 변경
      'react-hooks/exhaustive-deps': 'warn',
      
      // 미사용 변수 경고를 error에서 warning으로 변경
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  }