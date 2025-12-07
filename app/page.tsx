'use client'; // 'useState'를 사용하므로 클라이언트 컴포넌트로 명시

import React, { useState } from 'react';

// ----------------------------------------------------------------------
// SVG 아이콘 컴포넌트
// ----------------------------------------------------------------------

// Services: Web Application 아이콘
const IconWebApp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H5.25A2.25 2.25 0 0 0 3 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 20.25V10.5M10.5 1.5L15 1.5m-4.5 0h3m-3 18c-1.12 0-2.16-.39-3-1.05m3 1.05c1.12 0 2.16-.39 3-1.05m-3 1.05c.15.03.3.05.45.07m3.45-1.07c.15-.02.3-.05.45-.07m0 0a2.25 2.25 0 0 1-2.25 2.25c-1.12 0-2.16-.39-3-1.05m3 1.05c-1.12 0-2.16-.39-3-1.05m0 0c.15.03.3.05.45.07M10.5 1.5V6a1.5 1.5 0 0 0 1.5 1.5h3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21m-4.5 4.5v6m0 0v-6m0 6H15m3 0h3" />
  </svg>
);

// Services: UI/UX Design 아이콘
const IconDesign = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 3 3 0 0 1-5.78-1.128 3 3 0 0 0 5.78-1.128 3 3 0 0 1 5.78 1.128v.001zm-1.06-7.662a3 3 0 0 0-5.78 1.128 3 3 0 0 1-5.78-1.128 3 3 0 0 0 5.78-1.128 3 3 0 0 1 5.78 1.128zm1.06 7.662a3 3 0 0 0-5.78 1.128 3 3 0 0 1-5.78-1.128 3 3 0 0 0 5.78-1.128 3 3 0 0 1 5.78 1.128v.001zm-1.06-7.662a3 3 0 0 0-5.78 1.128 3 3 0 0 1-5.78-1.128 3 3 0 0 0 5.78-1.128 3 3 0 0 1 5.78 1.128z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m21.75 12-5.75 5.75-5.75-5.75L21.75 12zM16 17.75l-5.75-5.75-5.75 5.75L16 17.75z" />
  </svg>
);

// Services: Maintenance 아이콘
const IconMaintenance = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.83-5.83M11.42 15.17l-3.35-3.35m3.35 3.35L6.25 10.5 15.17 1.57l3.35 3.35M6.25 10.5 1.57 15.17l3.35 3.35L10.5 13.75M6.25 10.5 10.5 6.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5c.621.621.621 1.638 0 2.259l-3.35 3.35c-.621.621-1.638.621-2.259 0l-3.35-3.35c-.621-.621-.621-1.638 0-2.259l3.35-3.35c.621-.621 1.638-.621 2.259 0l3.35 3.35Z" />
  </svg>
);

// LinkedIn 아이콘
const IconLinkedIn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-2.38-1.77-2.38-1.11 0-1.52.79-1.78 1.56-.1.28-.12.65-.12.91V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.96 0 3.39 1.25 3.39 3.99V19z"></path>
  </svg>
);

// ----------------------------------------------------------------------
// 1. Navbar (상단 네비게이션)
// ----------------------------------------------------------------------
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              3jul
            </span>
          </a>

          <div className="hidden md:flex space-x-8 items-center">
            {/* Examples 메뉴 추가 */}
            {['home', 'services', 'examples', 'portfolio', 'team', 'contact'].map((item) => (
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

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['home', 'services', 'examples', 'portfolio', 'team', 'contact'].map((item) => (
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
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white">
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
          <br/>
          단순 페이지부터 복잡한 시스템까지, <strong>모든 개발 일체</strong> 맡겨주세요.
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
      icon: <IconWebApp />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "UI/UX Design",
      desc: "사용자 중심의 직관적이고 세련된 인터페이스 디자인 구현",
      icon: <IconDesign />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Maintenance",
      desc: "지속적인 성능 최적화 및 안정적인 서버 유지보수 관리",
      icon: <IconMaintenance />,
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
              <div className={`w-16 h-16 rounded-xl ${item.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
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
// 4. UseCases Section (제작 예시) - 새로 추가
// ----------------------------------------------------------------------
const UseCases = () => {
  const cases = [
    {
      title: "모바일 청첩장",
      desc: "소중한 날을 위한 감성적이고 아름다운 모바일 초대장",
      img: "https://placehold.co/600x400/FFE4E6/BE123C?text=Wedding+Invite",
      tag: "Mobile Web"
    },
    {
      title: "회사/브랜드 소개",
      desc: "기업의 신뢰도를 높여주는 깔끔하고 전문적인 상세페이지",
      img: "https://placehold.co/600x400/F3F4F6/1F2937?text=Company+Page",
      tag: "Landing Page"
    },
    {
      title: "이벤트/프로모션",
      desc: "사용자의 참여와 전환율을 극대화하는 마케팅 페이지",
      img: "https://placehold.co/600x400/FEF3C7/B45309?text=Event+Page",
      tag: "Promotion"
    },
  ];

  return (
    <section id="examples" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">제작 예시</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            간단한 모바일 페이지부터 복잡한 기업형 웹사이트까지,<br/>
            <strong>모든 종류의 개발 의뢰</strong>를 완벽하게 수행합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-1 rounded-full">
                  {item.tag}
                </span>
                <h3 className="mt-3 text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// 5. Portfolio Section (포트폴리오)
// ----------------------------------------------------------------------
const Portfolio = () => {
  const projects = [
    {
      title: "아이쇼핑",
      category: "AI 안경 추천 서비스",
      img: "https://placehold.co/600x400/3B82F6/FFFFFF?text=Eye-Shopping",
      githubUrl: "https://github.com/eye-I-shopping/eye-I-Shopping"
    },
    {
      title: "어흥",
      category: "초등학생 경제 교육 플랫폼",
      img: "https://placehold.co/600x400/8B5CF6/FFFFFF?text=Eo-heung",
      githubUrl: "https://github.com/Eo-heung/Eo-heungReadme"
    },
    {
      title: "먹자취",
      category: "맛집 기록 및 공유",
      img: "https://placehold.co/600x400/10B981/FFFFFF?text=Mukjachi",
      githubUrl: "https://github.com/bitcampprettytiger/mukjachi"
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">주요 프로젝트</h2>
            <p className="text-lg text-gray-600">직접 기획하고 개발한 대표 프로젝트들입니다.</p>
          </div>
          <a
            href="https://github.com/BioStudy" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:text-blue-700 mt-4 md:mt-0"
          >
            전체 보기 →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer block"
            >
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// ----------------------------------------------------------------------
// 6. Team Section (팀원 소개)
// ----------------------------------------------------------------------
const Team = () => {
  const teamMembers = [
    {
      name: "박준형",
      role: "풀스택 개발자",
      experience: "경력 4년",
      bio: "다양한 비즈니스 로직과 복잡한 시스템을 설계하고 구현합니다.",
      imageUrl: "https://placehold.co/200x200/E0E7FF/4F46E5?text=JH&fontsize=40",
      linkedIn: null, 
    },
    {
      name: "심봉교",
      role: "풀스택 개발자",
      experience: "경력 3년",
      bio: "사용자 경험을 최우선으로 생각하며, 안정적이고 확장 가능한 백엔드를 구축합니다.",
      imageUrl: "https://placehold.co/200x200/DBEAFE/1D4ED8?text=BG&fontsize=40",
      linkedIn: "https://www.linkedin.com/in/%EB%B4%89%EA%B5%90-%EC%8B%AC-35979829a",
    },{
    name: "성지민",
    role: "풀스택 개발자",
    experience: "경력 3년",
    bio: "폭넓은 기술 스택으로 신뢰할 수 있는 서비스를 만들며, 구조적인 문제 분석과 안정적인 시스템 구축에 강점이 있습니다.",
    imageUrl: "https://placehold.co/200x200/FDE68A/CA8A04?text=JM&fontsize=40"
  }
  ,
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">함께하는 팀원</h2>
          <p className="text-lg text-gray-600">열정과 실력을 갖춘 최고의 전문가들입니다.</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-16">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center max-w-xs w-full">
              <div className="relative mb-5">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full object-cover shadow-lg"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/200x200/ccc/fff?text=Error'; }}
                />
                {member.linkedIn && (
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -bottom-2 -right-1 bg-blue-600 text-white rounded-full p-2.5 shadow-md hover:bg-blue-700 transition-transform hover:scale-110"
                    aria-label={`${member.name}의 LinkedIn 프로필`}
                  >
                    <IconLinkedIn />
                  </a>
                )}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 font-semibold">{member.role}</p>
              <p className="text-gray-500 text-sm mb-3">{member.experience}</p>
              <p className="text-gray-600 text-base leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// ----------------------------------------------------------------------
// 7. Contact Section (문의하기)
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

    // NOTE: 실제 API 연동 시 .env.local 파일에 NEXT_PUBLIC_API_URL 설정 필요
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

    try {
      const response = await fetch(`${apiUrl}/api/v1/inquiries`, {
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
        if (apiUrl === 'https://api.example.com') {
           console.warn('테스트 모드: 실제 API가 아니지만 성공으로 간주합니다.');
        } else {
          throw new Error('전송에 실패했습니다.');
        }
      }

      setSubmitStatus('success');
      setEmail('');
      setMessage('');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.');
      setTimeout(() => setSubmitStatus('idle'), 3000);
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
            모바일 청첩장부터 기업용 시스템까지, <strong>모든 개발 의뢰</strong>를 환영합니다.<br/>
            지금 바로 무료 견적 상담을 받아보세요.
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

            {submitStatus === 'success' && (
              <div className="p-3 bg-green-600 text-white rounded-lg text-center text-sm font-medium animate-fade-in-down">
                문의가 성공적으로 전송되었습니다!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-3 bg-red-600 text-white rounded-lg text-center text-sm font-medium animate-fade-in-down">
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
// 8. Footer (하단)
// ----------------------------------------------------------------------
const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
        <p className="font-bold text-xl text-gray-800 mb-4">3jul</p>
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
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <UseCases />
        <Portfolio />
        <Team /> 
        <Contact />
      </main>
      <Footer />
    </div>
  );
}