# 개발 작업 목록 (Tasks)

이 문서는 새영동 숯불갈비 프로젝트의 개발 단계를 정의합니다.
진행 상황을 추적하기 위해 완료된 항목에 체크(`[x]`)를 표시해 주세요.

## 1. 초기 설정 (Setup)
- [x] Next.js (App Router, TypeScript) 프로젝트 생성
- [x] 커스텀 컬러(Brown, Beige, Orange) 및 폰트(Noto Serif KR) 설정
- [x] Next-intl 설정 (ko, en, zh) 및 미들웨어 구성
- [x] 기본 디렉토리 구조 (messages, components, layout, ui) 구성
- [x] Vercel 배포 및 도메인 연결 준비

## 2. 디자인 시스템 구축 (Design System)
- [x] `globals.css`: Warm Beige 배경, Noto Serif KR/Pretendard 폰트 최적화
- [x] 공통 컴포넌트 개발:
  - [x] `LangSwitcher`: 언어 변경 컴포넌트
  - [x] `Button`: Primary, Outline 스타일
  - [x] `Navbar`: 반응형 네비게이션 (Fixed, Blur)
  - [x] `Footer`: Location & Info 스타일 (Naver/Kakao 링크 포함)
  - [x] `KakaoMap`: 카카오 지도 SDK 연동 및 마커 표시

## 3. 페이지 개발 (Pages)
### 3.1 메인 페이지 (`/`)
- [x] Hero Section: 33년 전통 강조, 슬로건 (i18n), 커스텀 뱃지 및 그림자 최적화
- [x] Feature Section: 3가지 핵심 강점 (Alternating Layout)
- [x] Story Section: 브랜드 스토리 및 매장 분위기 (반응형 최적화)
- [x] Gallery Section: 무한 루프 자동 스크롤 및 매뉴얼 스와이프 기능
- [x] Location & Info: 실제 약도 연동 및 영업 정보 (버튼 가독성 보강)

### 3.2 메뉴 페이지 (`/menu`)
- [x] `ko.json` 메뉴 데이터 업데이트 (실제 메뉴판 기준 최신화)
- [x] 카테고리별 메뉴 리스트: 한우, 돼지고기, 식사류, 주류 구성
- [x] 메뉴 아이템 컴포넌트: 대시 라인 스타일링 및 다국어 설명 대응
- [x] `en.json`, `zh.json` 영문/중문 메뉴 번역 완성 (룸 넘버 연동 포함)

## 4. 기능 및 최적화
- [x] 반응형 세부 조정: 모바일 뱃지 스케일, 히어로 섹션 여백 최적화
- [x] 내추럴 디자인: 브라운 톤 organic/photo 그림자 및 미세 테두리 적용
- [x] 커스텀 언어 선택기: 프리미엄 드롭다운(Picker) 방식 구현
- [ ] SEO 메타 태그 (Title, Description, OG Image) 설정
- [ ] 이미지 최적화 (실제 고화질 에셋 반영 필요)
- [ ] 성능 및 접근성 최적화

## 5. 최종 검토
- [ ] 다국어 번역 검수 (특히 영문/중문 자연스러움 확인)
- [ ] 모든 버튼 및 링크 동작 확인
- [ ] 최종 배포 및 도메인 연결
