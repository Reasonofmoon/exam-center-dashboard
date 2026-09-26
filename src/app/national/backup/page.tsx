"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { demoUser } from "@/lib/menu";
import { DEFAULT_EXAM_ID, exams, provinces, reportRows } from "@/lib/demo-data";
import { downloadCsv } from "@/lib/download";

export default function NationalBackupPage() {
  const [examId, setExamId] = useState(DEFAULT_EXAM_ID);

  const download = () => {
    downloadCsv("전날 백업 (전국 집계).csv", [
      ["도교육청", "학교", "응시 예정", "출석 / 결시", "처리 중 사고", "담당자", "연락처"],
      ...reportRows.map((r) => {
        const p = provinces.find((x) => x.id === r.provinceId);
        return [r.name, r.schools, r.expected, r.attendance, r.accidents, p?.managerName ?? "", p?.managerPhone ?? ""];
      }),
    ]);
  };

  return (
    <>
      <SiteHeader email={demoUser.email} role={demoUser.role} />
      <main className="mx-auto max-w-3xl space-y-6 p-8">
        <h1 className="text-2xl font-semibold">전날 백업 (전국 집계)</h1>
        <p className="text-sm text-zinc-600">
          시험 전날 전국 현황을 엑셀 파일로 받아 두세요. 도교육청 요약,
          학교별 현황, 도교육청 담당자 연락처가 시트로 나뉘어 들어 있습니다.
          시험 당일 접속이 어려울 때 연락과 확인에 씁니다.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <select
            aria-label="시험 선택"
            className="rounded border p-2"
            value={examId}
            onChange={(e) => setExamId(e.target.value)}
          >
            <option value="">시험 선택</option>
            {exams.map((x) => (
              <option key={x.id} value={x.id}>
                {x.name}
              </option>
            ))}
          </select>
        </div>
        <section className="space-y-2 rounded border bg-white p-4">
          <p className="text-sm">
            도교육청 {provinces.length}곳 · 학교 {reportRows.reduce((a, r) => a + Number(r.schools), 0)}곳
          </p>
          <button
            type="button"
            className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
            onClick={download}
          >
            전국 집계 엑셀 내려받기
          </button>
        </section>
        <p className="text-sm text-zinc-600">
          이 파일에는 학교 이름과 도교육청 담당자 연락처가 들어 있습니다.
          시험이 끝나면 안전하게 폐기·삭제해 주세요. 수험생·감독관 개인정보는
          들어 있지 않습니다.
        </p>
      </main>
    </>
  );
}
