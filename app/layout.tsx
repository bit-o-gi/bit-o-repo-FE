import type { Metadata } from "next";
import { Inter } from "next/font/google"; // 세련된 Inter 폰트 사용
import "./globals.css";

// 폰트 설정
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3jul",
  description: "리액트 기반 웹 솔루션 전문",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      {/* inter.className을 body에 적용하면 전체 폰트가 Inter로 변경됩니다.
        'font-sans'는 Tailwind의 기본 산세리프 폰트 스택을 의미합니다.
      */}
      <body className={`${inter.className} bg-white text-gray-900 font-sans`}>
        {children}
      </body>
    </html>
  );
}