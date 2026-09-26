# exam-center-dashboard

수능시험 통합관리 시스템 대시보드 구조 복제본 (Next.js + Tailwind CSS).

원본: https://exam-center-system.vercel.app/dashboard

## 구성

- `/` : `/dashboard`로 리다이렉트
- `/dashboard` : 대시보드 (본부 역할 메뉴)
  - 등록·발송: `/import`, `/national/setup`, `/national/notices`
  - 현황 조회: `/national`, `/national/reports`, `/national/backup`
  - 도움말: `/guide`
- 하위 페이지 7개는 구조 확보용 스텁(준비 중 화면)

## 실행

```bash
npm install
npm run dev
# http://localhost:3000/dashboard
```

## 구조

```
src/
  app/
    layout.tsx          # html/body, Geist 폰트, 메타데이터
    page.tsx            # / -> /dashboard 리다이렉트
    dashboard/page.tsx  # 대시보드 (섹션 3개, 카드 7개)
    import/ guide/ national/(, setup/, notices/, reports/, backup/)
  components/
    site-header.tsx     # 상단 헤더 (로고/사용자/로그아웃)
    menu-card.tsx       # 메뉴 카드
    stub-page.tsx       # 하위 페이지 공통 스텁 레이아웃
  lib/
    menu.ts             # 사용자·메뉴 데이터 (여기만 바꾸면 메뉴 구성 변경 가능)
```

메뉴 구성은 `src/lib/menu.ts` 하나에서 관리합니다. 역할별 대시보드를
추가하려면 `menuSections`를 역할 키로 나눠 확장하면 됩니다.

## 참고

- 원본과 동일한 스타일: Tailwind CSS v4, lucide-react 아이콘, bg-slate-50 배경
- 로그인/로그아웃·데이터 API는 포함하지 않음 (구조 복제본)
