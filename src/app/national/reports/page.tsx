"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { demoUser } from "@/lib/menu";
import { DEFAULT_EXAM_ID, exams, reportRows } from "@/lib/demo-data";
import { downloadCsv } from "@/lib/download";

export default function NationalReportsPage() {
  const [examId, setExamId] = useState(DEFAULT_EXAM_ID);

  const download = () => {
    downloadCsv("전국 리포트.csv", [
      ["도교육청", "상태", "학교", "응시 예정", "준비 체크리스트", "좌석 배치", "물품 수령", "출석 / 결시", "출석률", "처리 중 사고", "🔴", "🟡", "🟢"],
      ...reportRows.map((r) => [r.name, r.emoji, r.schools, r.expected, r.checklist, r.seats, r.items, r.attendance, r.rate, r.accidents, r.red, r.yellow, r.green]),
    ]);
  };

  return (
    <>
      <SiteHeader email={demoUser.email} role={demoUser.role} />
      <main className="mx-auto max-w-7xl space-y-6 p-8">
        <h1 className="text-2xl font-semibold">전국 리포트</h1>
        <p className="text-sm text-zinc-600">
          도교육청별 준비율·출석률·사고를 비교합니다. 숫자 요약만 있고
          수험생·감독관 개인정보는 없습니다.
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
          <button type="button" onClick={download} className="rounded border bg-white px-3 py-2 text-sm disabled:opacity-50">
            엑셀로 내려받기
          </button>
          <Link className="text-sm text-blue-700 underline" href="/national">
            ← 전국 종합 현황
          </Link>
        </div>
        <div className="overflow-x-auto rounded-lg border bg-white">
          <table className="w-full text-sm">
            <thead className="bg-zinc-100">
              <tr>
                <th className="border p-1">도교육청</th>
                <th className="border p-1">상태</th>
                <th className="border p-1">학교</th>
                <th className="border p-1">응시 예정</th>
                <th className="border p-1">준비 체크리스트</th>
                <th className="border p-1">좌석 배치</th>
                <th className="border p-1">물품 수령</th>
                <th className="border p-1">출석 / 결시</th>
                <th className="border p-1">출석률</th>
                <th className="border p-1">처리 중 사고</th>
                <th className="border p-1">🔴</th>
                <th className="border p-1">🟡</th>
                <th className="border p-1">🟢</th>
              </tr>
            </thead>
            <tbody>
              {reportRows.map((r) => (
                <tr key={r.provinceId}>
                  <td className="border p-1">
                    <Link
                      className="text-blue-700 underline"
                      href={`/national/province?province=${r.provinceId}&exam=${examId}`}
                    >
                      {r.name}
                    </Link>
                  </td>
                  <td className="border p-1 text-center">
                    <span role="img" aria-label="문제" title="문제">
                      {r.emoji}
                    </span>
                  </td>
                  <td className="border p-1 text-center">{r.schools}</td>
                  <td className="border p-1 text-center">{r.expected}</td>
                  <td className="border p-1 text-center">{r.checklist}</td>
                  <td className="border p-1 text-center">{r.seats}</td>
                  <td className="border p-1 text-center">{r.items}</td>
                  <td className="border p-1 text-center">{r.attendance}</td>
                  <td className="border p-1 text-center">{r.rate}</td>
                  <td className="border p-1 text-center font-semibold text-red-600">{r.accidents}</td>
                  <td className="border p-1 text-center">{r.red}</td>
                  <td className="border p-1 text-center">{r.yellow}</td>
                  <td className="border p-1 text-center">{r.green}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-zinc-500">
          준비 체크리스트·좌석 배치·물품 수령은 그 도교육청 전체 학교의 합계로
          계산한 비율입니다. 출석률은 응시 예정 인원 대비 출석 인원입니다.
        </p>
      </main>
    </>
  );
}
