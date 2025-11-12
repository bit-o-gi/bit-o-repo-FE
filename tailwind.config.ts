import type { Config } from "tailwindcss";

const config: Config = {
  // 스크린샷에서 확인된 'src' 폴더 없는 구조에 맞췄습니다.
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      // 👇 멋진 UI 애니메이션을 위해 이 부분을 추가합니다.
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out forwards',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'blob': {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '25%': {
            transform: 'translate(20px, -30px) scale(1.1)',
          },
          '50%': {
            transform: 'translate(0, 40px) scale(1)',
          },
          '75%': {
            transform: 'translate(-30px, 10px) scale(0.9)',
          },
        },
      },
      // 👆 여기까지 추가
    },
  },
  plugins: [],
};
export default config;