'use client'; // 'useState'를 사용하므로 클라이언트 컴포넌트로 명시

import React, { useState } from 'react';

// ----------------------------------------------------------------------
// 1. Navbar (상단 네비게이션)
// ----------------------------------------------------------------------
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 메뉴 클릭 시 부드럽게 스크롤 (Next.js에서는 <a> 태그를 그대로 사용합니다)
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* 로고 */}
          <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              BioStudy Dev
            </span>
          </a>

          {/* 데스크탑 메뉴 */}
          <div className="hidden md:flex space-x-8 items-center">
            {['home', 'services', 'portfolio', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => handleScroll(e, item)}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 capitalize"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-all shadow-lg shadow-blue-500/30 transform hover:-translate-y-0.5"
            >
              문의하기
            </a>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="메뉴 열기"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 드롭다운 (애니메이션 적용) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['home', 'services', 'portfolio', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => handleScroll(e, item)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 capitalize"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// ----------------------------------------------------------------------
// 2. Hero Section (메인 화면)
// ----------------------------------------------------------------------
const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm tracking-wide uppercase">
          Premium Web Development
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
          상상을 현실로 만드는 <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
            웹 솔루션 파트너
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 mb-10">
          React, Next.js 기반의 빠르고 세련된 웹사이트를 제작해 드립니다.
          비즈니스의 가치를 높이는 최적의 사용자 경험을 제공하세요.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-xl shadow-xl shadow-blue-500/30 hover:bg-blue-700 transition-all hover:-translate-y-1">
            프로젝트 의뢰하기
          </a>
          <a href="#portfolio" className="px-8 py-4 bg-white text-gray-700 border border-gray-200 text-lg font-bold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all">
            포트폴리오 보기
          </a>
        </div>
      </div>

      {/* 배경 장식 요소 (애니메이션 적용) */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// 3. Services Section (제공 서비스)
// ----------------------------------------------------------------------
const Services = () => {
  const services = [
    {
      title: "Web Application",
      desc: "React & Next.js를 활용한 고성능 웹 애플리케이션 개발",
      icon: "💻",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "UI/UX Design",
      desc: "사용자 중심의 직관적이고 세련된 인터페이스 디자인 구현",
      icon: "🎨",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Maintenance",
      desc: "지속적인 성능 최적화 및 안정적인 서버 유지보수 관리",
      icon: "🛠️",
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">제공 서비스</h2>
          <p className="text-lg text-gray-600">최신 기술 스택으로 비즈니스에 필요한 모든 것을 제공합니다.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div key={idx} className="group p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// 4. Portfolio Section (포트폴리오)
// ----------------------------------------------------------------------
const Portfolio = () => {
  const projects = [
    { title: "E-Commerce Platform", category: "Shopping Mall", img: "https://placehold.co/600x400/3B82F6/FFFFFF?text=Shop+App" },
    { title: "Corporate Dashboard", category: "Admin Tool", img: "https://placehold.co/600x400/8B5CF6/FFFFFF?text=Dashboard" },
    { title: "Brand Landing Page", category: "Marketing", img: "https://placehold.co/600x400/10B981/FFFFFF?text=Landing+Page" },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">주요 프로젝트</h2>
            <p className="text-lg text-gray-600">최근 진행한 성공적인 프로젝트들을 소개합니다.</p>
          </div>
          <a href="#" className="hidden md:block text-blue-600 font-semibold hover:text-blue-700 mt-4 md:mt-0">
            전체 보기 →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/ccc/fff?text=Error'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-blue-400 text-sm font-medium mb-2">{project.category}</span>
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// 5. Contact Section (문의하기)
// ----------------------------------------------------------------------
const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/inquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          content: message,
        }),
      });

      if (!response.ok) {
        throw new Error('전송에 실패했습니다.');
      }

      setSubmitStatus('success');
      setEmail('');
      setMessage('');

      // 3초 후 성공 메시지 숨김
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">프로젝트를 시작할 준비가 되셨나요?</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            성공적인 비즈니스를 위한 첫 걸음, 지금 바로 무료 상담을 받아보세요.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-1">이메일 주소</label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@company.com"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-1">문의 내용</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="프로젝트에 대해 간략히 설명해주세요."
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              ></textarea>
            </div>

            {/* 성공/에러 메시지 */}
            {submitStatus === 'success' && (
              <div className="p-3 bg-green-600 text-white rounded-lg text-center text-sm font-medium">
                문의가 성공적으로 전송되었습니다!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-3 bg-red-600 text-white rounded-lg text-center text-sm font-medium">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? '전송 중...' : '무료 견적 받기'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// 6. Footer (하단)
// ----------------------------------------------------------------------
const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
        <p className="font-bold text-xl text-gray-800 mb-4">BioStudy Dev</p>
        <p className="text-sm">&copy; {new Date().getFullYear()} All Rights Reserved. Designed by React & Tailwind.</p>
      </div>
    </footer>
  );
};

// ----------------------------------------------------------------------
// Main App Component
// ----------------------------------------------------------------------
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
