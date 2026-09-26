# exam-center-dashboard

수능시험 통합관리 시스템(본부 화면) 구조 복제본 (Next.js + Tailwind CSS).

원본: https://exam-center-system.vercel.app/dashboard

## 구성

| 라우트 | 화면 | 설명 |
| --- | --- | --- |
| `/` | - | `/dashboard`로 리다이렉트 |
| `/dashboard` | 대시보드 | 섹션 3개(등록·발송 / 현황 조회 / 도움말) + 메뉴 카드 7개 |
| `/import` | 엑셀 일괄 업로드 | 5종 양식 탭(지구·학교·시험·교시·시험 물품), 양식 CSV 다운로드 |
| `/national` | 전국 종합 현황 | 5개 통계 카드, 상태 알림 일괄 보내기, 도교육청→지구→학교 3단 아코디언 |
| `/national/setup` | 도교육청·지구 등록 | 도교육청 16개 목록 + 담당자 입력, 지구 41개 소속 지정 |
| `/national/notices` | 도교육청 공지 | 공지 보내기 폼 + 공지 4건(긴급 포함), 클라이언트 상태로 발송·삭제 |
| `/national/reports` | 전국 리포트 | 도교육청별 비교 표(13열), CSV 내려받기 |
| `/national/backup` | 전날 백업 | 전국 집계 CSV 내려받기 |
| `/national/province` | 도교육청 상세 조회 | ?province= 쿼리로 16개 도교육청별 지구·학교 표(12열) |
| `/guide` | 역할별 사용 안내 | 6개 역할 안내 + 비교 표 + 인쇄/PDF |

## 데모 데이터

`src/lib/demo-data.ts`는 원본([연습] 2학기 중간고사 기준)에서 추출한 정적 데이터입니다.

- 도교육청 16개, 지구 41개, 학교(시험장) 103개
- 학교별 상태(🔴🟡🟢)·체크리스트·물품·사고·출결·상태 사유 포함
- 공지 4건(긴급 1건 포함)

데이터를 바꾸면 모든 화면이 그 값을 따라갑니다. 로그인·Supabase API는
연동하지 않은 구조 복제본이며, 발송/저장 동작은 화면 안(클라이언트 상태)에서만
동작합니다.

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
    layout.tsx            # html/body, Geist 폰트, 메타데이터
    page.tsx              # / -> /dashboard 리다이렉트
    dashboard/page.tsx    # 대시보드
    import/page.tsx       # 엑셀 일괄 업로드
    guide/page.tsx        # 역할별 사용 안내
    national/
      page.tsx            # 전국 종합 현황 (3단 아코디언)
      setup/page.tsx      # 도교육청·지구 등록
      notices/page.tsx    # 도교육청 공지
      reports/page.tsx    # 전국 리포트
      backup/page.tsx     # 전날 백업
      province/page.tsx   # 도교육청 상세 조회
  components/
    site-header.tsx       # 상단 헤더
    menu-card.tsx         # 대시보드 메뉴 카드
    print-button.tsx      # 인쇄/PDF 버튼
  lib/
    menu.ts               # 대시보드 메뉴 구성
    demo-data.ts          # 원본에서 추출한 전체 데모 데이터
    download.ts           # CSV 다운로드 유틸
```

## 참고

- 원본과 동일한 스타일: Tailwind CSS v4, lucide-react 아이콘, bg-slate-50 배경
- CSV 다운로드는 한글 엑셀 호환(BOM 포함)으로 동작합니다
