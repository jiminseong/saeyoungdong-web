# 개발 작업 목록 (Tasks)

이 문서는 새영동 숯불갈비 프로젝트의 개발 단계를 정의합니다.
진행 상황을 추적하기 위해 완료된 항목에 체크(`[x]`)를 표시해 주세요.

## 1. 초기 설정 (Setup)
- [x] Next.js (App Router, TypeScript) 프로젝트 생성
- [x] TailwindCSS v3/v4 설정 및 `DESIGN_SYSTEM.md` 반영 (Color, Font)
- [x] Next-intl 설정 (ko, en, zh) 및 미들웨어 구성
- [x] 기본 디렉토리 구조 (messages, components, libs, types, assets) 구성
- [x] Vercel 배포 및 도메인(saeyoungdong.com) 연결

## 2. 디자인 시스템 구축 (Design System)
- [ ] `globals.css`: 기본 배경색(Warm Beige), 폰트(Pretendard/명조) 설정
- [ ] `tailwind.config.ts` (또는 globals): 커스텀 컬러(Orange, Beige) 및 쉐도우 정의
- [ ] 공통 컴포넌트 개발:
  - [ ] `LangSwitcher`: 언어 변경 컴포넌트 추가
  - [ ] `Button`: Primary(Orange), Secondary(Outline)
  - [ ] `Card`: 메뉴/소개용 둥근 모서리 카드
  - [ ] `Navbar`: 반응형 네비게이션
  - [ ] `Footer`: 정보 및 카피라이트

## 3. 페이지 개발 (Pages)
### 3.1 메인 페이지 (`/`) - Landing & About & Contact
- [ ] Hero Section: 배경 이미지 + 헤드라인 (i18n 적용)
- [ ] Intro Section: 3가지 핵심 특징 (i18n 적용)
- [ ] About Section: 매장 소개(룸 사진 슬라이더) 및 편의시설 아이콘
- [ ] Location Section: 지도 API 연동 & 주차 안내
- [ ] Contact Section: 전화번호 강조 & 영업시간 안내

### 3.2 메뉴 페이지 (`/menu`)
- [ ] `MENU_INFO` 다국어 데이터 확장 (ko.json, en.json, zh.json)
- [ ] 카테고리 탭 (고기류/식사류/주류) 구현
- [ ] 메뉴 리스트 컴포넌트: 이미지 + 가격 + 설명 표시 (다국어)

## 4. 기능 및 최적화
- [ ] SEO 메타 태그 (Title, Description, OG Image) 설정
- [ ] 이미지 최적화 (Next/Image 활용)
- [ ] 반응형 테스트 (Mobile, Tablet, Desktop)
- [ ] 접근성 점검 (Lighthouse)

## 5. 최종 검토 및 배포
- [ ] 도메인 SSL 인증서 확인
- [ ] 최종 빌드 및 프로덕션 배포
