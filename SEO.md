# SEO 최적화 및 검색 엔진 등록 가이드

새영동 숯불갈비 프로젝트에 적용된 SEO 기술 스택과 배포 후 필수 등록 절차를 안내합니다.

## 1. 적용된 기술적 SEO 사항
검색 엔진(구글, 네이버)이 사이트를 잘 읽고 분석할 수 있도록 다음 기능들이 이미 구현되어 있습니다.

*   **Dynamic Metadata**: 언어별(한국어, 영어, 중국어) 맞춤형 Title 및 Description 제공.
*   **Open Graph & Twitter Card**: 카카오톡, 페이스북, X(Twitter) 공유 시 고화질 프리미엄 이미지와 설명 노출.
*   **JSON-LD (Structured Data)**: 검색 결과에 식당 이름, 주소, 영업시간, 평점 등이 풍부하게 표현되도록 구조화 데이터 삽입.
*   **Sitemap (`/sitemap.xml`)**: 모든 페이지 경로를 검색 엔진에 제공하여 빠른 인덱싱 유도.
*   **Robots.txt (`/robots.txt`)**: 검색 로봇의 수집 허용 범위를 지정하고 사이트맵 위치 알림.
*   **Favicon & Apple Touch Icon**: 모든 브라우저 및 기기(아이폰 등)에서 브랜드 로고 노출.
*   **Hreflang & Canonical**: 다국어 페이지 간의 관계를 정의하여 중복 콘텐츠 방지 및 정확한 언어 제공.

---

## 2. 배포 후 필수 등록 절차 (Action Items)

사이트 배포(Vercel 등) 완료 후, 다음 사이트에 접속하여 소유권 확인 및 사이트맵 등록을 진행해야 합니다.

### A. 구글 서치콘솔 (Google Search Console) 등록
1.  [Google Search Console](https://search.google.com/search-console/about)에 접속합니다.
2.  속성 유형에서 **URL 접두사**를 선택하고 배포된 사이트 URL(예: `https://saeyoungdong.vercel.app`)을 입력합니다.
3.  확인 방법 중 **HTML 태그**를 선택하여 제공되는 `content` 값(예: `google-site-verification=...`)을 복사합니다.
4.  `src/app/[locale]/layout.tsx` 파일의 `verification.google` 항목에 복사한 값을 붙여넣습니다.
5.  수정 후 다시 배포하고, 구글 서치콘솔에서 **확인** 버튼을 누릅니다.
6.  좌측 메뉴의 **Sitemaps**에서 `sitemap.xml`을 입력하고 제출합니다.

### B. 네이버 서치어드바이저 (Naver Search Advisor) 등록
1.  [Naver Search Advisor](https://searchadvisor.naver.com/)에 접속하여 로그인합니다.
2.  **웹마스터 도구**로 이동하여 사이트 URL을 등록합니다.
3.  **HTML 태그** 확인 방식을 선택하고 meta 태그 명칭과 content 값을 복사합니다.
4.  `src/app/[locale]/layout.tsx` 파일의 `verification.other["naver-site-verification"]` 항목에 복사한 값을 붙여넣습니다.
5.  수정 후 다시 배포하고, 네이버 서치어드바이저에서 **보안코드 입력 후 확인**을 누릅니다.
6.  **요청 > 사이트맵 제출** 메뉴에서 `sitemap.xml`을 입력하고 확인을 누릅니다.

---

## 3. 코드 수정 위치 (Token 업데이트)

`src/app/[locale]/layout.tsx` 파일 내 다음 부분을 실제 발급받은 토큰으로 교체해 주세요.

```tsx
// src/app/[locale]/layout.tsx

verification: {
  google: "여기에_구글_토큰_입력",
  other: {
    "naver-site-verification": "여기에_네이버_토큰_입력",
  },
},
```

---

## 4. 추가 팁: 네이버 플레이스 등록
식당 검색 노출을 극대화하려면 웹사이트 SEO뿐만 아니라 **네이버 스마트플레이스** 등록이 필수입니다.
*   이미 등록되어 있다면, 플레이스 정보 내 '웹사이트' 항목에 현재 제작한 사이트 URL을 연결해 주세요.
*   이렇게 하면 네이버 검색 결과에서 지도 정보와 웹사이트가 함께 노출되어 신뢰도가 상승합니다.
