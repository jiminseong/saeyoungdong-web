# 디자인 시스템 가이드 (Design System Guide)

이 문서는 새영동 숯불갈비 웹사이트의 디자인 원칙과 스타일 가이드를 정의합니다.
개발 시 모든 UI 컴포넌트는 이 가이드를 따라야 합니다.

## 1. 디자인 컨셉 (Core Concept)
- **키워드**: 깔끔함, 따뜻함, 노포(Clean Old Shop), 가족적인
- **분위기**: 
  - 각진 형태보다는 **둥글고 부드러운** 라인 사용
- **추가 키워드**: 자연스러움(Natural), 아날로그 감성(Analogue), 인간적인(Human-touch)
- **AI 느낌 피하기 (Anti-AI Aesthetic)**:
  - **불규칙성 활용**: 너무 기계적인 그리드나 대칭을 피하고, 미묘한 비대칭이나 유동적인 레이아웃 사용
  - **질감 (Texture)**: 매끈한 디지털 느낌 대신 **종이 질감(Noise/Paper)**이나 **따뜻한 그레인(Grain)** 효과를 은은하게 사용
  - **이미지 중심**: 텍스트 위주가 아닌, 먹음직스러운 음식 사진과 가게 전경을 과감하게 배치하여 **시각적 스토리텔링** 강화
  - **감성적 타이포**: 제목이나 강조 문구에 명조체(Serif) 계열을 섞어 사용하여 깊이감 전달  - 차가운 흰색보다는 **따뜻한 미색(Beige, Ivory)** 배경 사용
  - 식욕을 돋우고 활기를 주는 **주황색(Orange)** 포인트

## 2. 색상 팔레트 (Color Palette)

### Primary (주조색)
- **Warm Beige (배경/베이스)**: `#FDFBF7` (따뜻한 느낌의 옅은 아이보리)
- **Soft Brown (텍스트/테두리)**: `#4A4A4A` (너무 강하지 않은 다크 그레이/브라운)

### Accent (강조색)
- **Vibrant Orange (메인 포인트)**: `#F97316` (Tailwind `orange-500`)
- **Burnt Orange (호버/클릭)**: `#EA580C` (Tailwind `orange-600`)

### Text Coloring
- **Title**: `#1F2937` (Suitably dark for readability)
- **Body**: `#4B5563` (Softer gray for long text)
- **Muted**: `#9CA3AF` (For placeholders/captions)

## 3. 타이포그래피 (Typography)
- **Font Family**: `Pretendard`, `Noto Sans KR`, sans-serif
- **Styles**:
  - **Headings**: Bold, 깔끔하고 가독성 높게
  - **Body**: Regular/Medium, 편안한 읽기 경험 제공

## 4. UI 컴포넌트 스타일 (Component Styles)

### Buttons
- **Shape**: `rounded-full` 또는 `rounded-2xl` (완전 둥글거나 둥근 모서리)
- **Style**:
  - **Primary**: 주황색 배경, 흰색 텍스트, 그림자 (`shadow-md`)
  - **Secondary**: 베이지 배경, 주황색 테두리

### Cards (메뉴/소개)
- **Background**: White (`#FFFFFF`) or Light Beige (`#FFFDF5`)
- **Border**: Soft, rounded (`rounded-3xl` 권장)
- **Shadow**: `shadow-lg` (부드럽고 퍼지는 그림자)

### Inputs
- **Shape**: `rounded-xl`
- **Border**: Focus 시 주황색 라인 (`ring-orange-500`)

## 5. 레이아웃 및 여백 (Layout & Spacing)
- **Padding/Margin**: 넉넉한 여백을 사용하여 여유로운 느낌 (`p-8`, `gap-6` 등 적극 활용)
- **Container**: 중앙 정렬, 최대 너비 제한으로 집중도 향상

---
**Note to AI (Antigravity)**: 
코드를 생성할 때 위 디자인 토큰(Color, Radius, Shadow)을 TailwindCSS 클래스로 변환하여 적용하십시오.
예: `bg-[#FDFBF7]`, `text-orange-500`, `rounded-2xl`
