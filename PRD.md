# 개발용 제품 요구사항 문서 (Development PRD)

## 1. 프로젝트 개요
- **프로젝트명**: 새영동숯불갈비 웹사이트 외주
- **목표**: 노포의 정통성과 따뜻한 가족적인 분위기를 담은 웹사이트 구축
- **핵심 가치**: 사용자 친화적 UI, 자연스럽고 인간적인 디자인, 명확한 정보 전달

## 2. 기술 스택 (Tech Stack)
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS (v4 호환 고려)
- **Internationalization**: `next-intl` (Korean, English, Chinese)
- **Deployment**: Vercel
- **State Management**: Zustand (필요 시)
- **Animation**: Framer Motion (자연스러운 전환 효과)

## 3. 사이트 구조 (Sitemap)

### 3.1 메인 페이지 (/) - Landing & About
- **Hero Section**: 감성적인 카피 & 배경
- **Intro Section**: 주요 특징 3가지 (직접 뽑은 면 등)
- **About & Reservation**:
  - **매장 소개**: 룸 사진(방1~4) 및 수용 인원 안내 (슬라이더)
  - **오시는 길**: 지도 API, 주차 정보(시민 주차 타워 등)
  - **문의 및 예약**: 전화번호(043-645-9008) 강조, 영업시간
  - **편의 시설**: 와이파이, 단체석 등 아이콘 표시

### 3.2 메뉴 페이지 (/menu)
- **데이터 소스**: `MENU_INFO.md` (i18n 적용)
- **구성**:
  - 카테고리 탭 (고기류/식사류/주류)
  - 메뉴 리스트 (이미지, 가격, 설명)
- **기능**: 공유하기 버튼 추가 고려

## 4. 기능 요구사항 (Functional Requirements)

### 4.1 공통
- **다국어 지원 (i18n)**:
  - **지원 언어**: 한국어(KO), 영어(EN), 중국어(ZH)
  - **기본 언어**: 한국어
  - **언어 변경**: 헤더 또는 푸터에 언어 선택 버튼 배치
  - **URL 구조**: `/ko`, `/en`, `/zh` 또는 자동 감지 후 리다이렉트
- **SEO 최적화**: 
  - 각 언어별 Title/Meta Description 제공 (`hreflang` 태그 적용)
- **반응형 웹**: Mobile First 설계, 데스크탑까지 유연하게 대응
- **접근성(a11y)**: 시맨틱 태그 사용, 이미지 alt 텍스트 필수

### 4.2 페이지별 기능
- **메뉴**: 카테고리 필터링 (고기/식사/주류)
- **지도**: 클릭 시 네이버/카카오 지도 앱으로 연결

## 5. 디자인 요구사항 (Design Specs)
- **참고 문서**: `DESIGN_SYSTEM.md` 필독
- **톤앤매너**: Warm Beige (`#FDFBF7`) 배경, Orange (`#F97316`) 포인트
- **UI 스타일**:
  - **Roundness**: `rounded-2xl` ~ `rounded-full` (부드러운 곡선)
  - **Texture**: 미세한 노이즈 텍스처 사용으로 '종이 질감' 구현
  - **Typography**: Pretendard (본문), 명조 계열 (감성 텍스트)

## 6. 도메인 및 배포
- **Main Domain**: `saeyoungdong.com`
- **Sub Domain (Optional)**: `새영동갈비.com` (Redirect only)
