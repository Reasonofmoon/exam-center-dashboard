"use client";

import { use, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { demoUser } from "@/lib/menu";
import { DEFAULT_EXAM_ID, exams, provinceDetails, provinces } from "@/lib/demo-data";

export default function ProvinceDetailPage({
  searchParams,
}: {
  searchParams: Promise<{ province?: string; exam?: string }>;
}) {
  const params = use(searchParams);
  const [examId, setExamId] = useState(params.exam || DEFAULT_EXAM_ID);
  const provinceId = params.province || "";
  const detail = provinceDetails.find((d) => d.provinceId === provinceId);
  const prov = provinces.find((p) => p.id === provinceId);

  return (
    <>
      <SiteHeader email={demoUser.email} role={demoUser.role} />
      <main className="mx-auto max-w-7xl space-y-6 p-8">
        <p>
          <Link className="text-blue-700 underline" href="/national">
            ← 전국 종합 현황
          </Link>
        </p>
        <h1 className="text-2xl font-semibold">{detail ? `${detail.name} 상세 조회` : "도교육청 상세 조회"}</h1>
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
          <span className="text-sm text-zinc-500">
            담당자:{" "}
            {prov?.managerName ? `${prov.managerName} (${prov.managerPhone})` : "미입력"}
          </span>
        </div>
        {detail ? (
          <>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
              <div className="rounded border bg-white p-3 text-center">
                <div className="text-sm text-zinc-500">상태</div>
                <div className="text-2xl font-semibold">{detail.statusText}</div>
              </div>
              <div className="rounded border bg-white p-3 text-center">
                <div className="text-sm text-zinc-500">학교</div>
                <div className="text-2xl font-semibold">{detail.schools}</div>
              </div>
              <div className="rounded border bg-white p-3 text-center">
                <div className="text-sm text-zinc-500">응시 예정</div>
                <div className="text-2xl font-semibold">{detail.expected}</div>
              </div>
              <div className="rounded border bg-white p-3 text-center">
                <div className="text-sm text-zinc-500">출석 / 결시</div>
                <div className="text-2xl font-semibold">{detail.attendance}</div>
              </div>
              <div className="rounded border bg-white p-3 text-center">
                <div className="text-sm text-zinc-500">처리 중 사고</div>
                <div className="text-2xl font-semibold">{detail.accidents}</div>
              </div>
            </div>
            <p>
              🟢 정상 {detail.emojiCounts.green} · 🟡 확인 필요{" "}
              {detail.emojiCounts.yellow} · 🔴 문제 {detail.emojiCounts.red}
            </p>
            {detail.districts.map((d) => (
              <section key={d.name} className="rounded-lg border bg-white">
                <h2 className="p-3 font-semibold">
                  {d.name}{" "}
                  <span className="text-sm font-normal text-zinc-500">{d.stats}</span>
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-zinc-100">
                      <tr>
                        <th className="border p-1">상태</th>
                        <th className="border p-1">시험장</th>
                        <th className="border p-1">수험생</th>
                        <th className="border p-1">시험실/좌석</th>
                        <th className="border p-1">좌석 배치</th>
                        <th className="border p-1">감독관</th>
                        <th className="border p-1">준비 체크리스트</th>
                        <th className="border p-1">물품 수령</th>
                        <th className="border p-1">감독관 도착</th>
                        <th className="border p-1">출석 / 결시</th>
                        <th className="border p-1">사고</th>
                        <th className="border p-1">상태 사유</th>
                      </tr>
                    </thead>
                    <tbody>
                      {d.rows.map((r) => (
                        <tr key={r.school}>
                          <td className="border p-1 text-center">
                            <span role="img" aria-label={r.statusTitle} title={r.statusTitle}>
                              {r.emoji}
                            </span>
                          </td>
                          <td className="border p-1">{r.school}</td>
                          <td className="border p-1 text-center">{r.students}</td>
                          <td className="border p-1 text-center">{r.roomsSeats}</td>
                          <td className="border p-1 text-center">{r.seats}</td>
                          <td className="border p-1 text-center">{r.supervisors}</td>
                          <td className="border p-1 text-center">{r.checklist}</td>
                          <td className="border p-1 text-center">{r.items}</td>
                          <td className="border p-1 text-center">{r.arrivals}</td>
                          <td className="border p-1 text-center">{r.attendance}</td>
                          <td className="border p-1 text-center">{r.accidents}</td>
                          <td className="min-w-56 border p-1 text-xs">
                            {r.normal ? <span className="text-green-700">{r.normal}</span> : null}
                            <ul className="space-y-0.5">
                              {r.reasons.map((x, i) => (
                                <li
                                  key={i}
                                  className={
                                    x.level === "red"
                                      ? "font-medium text-red-700"
                                      : "text-amber-700"
                                  }
                                >
                                  {x.text}
                                </li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ))}
          </>
        ) : (
          <p className="text-sm text-zinc-600">
            도교육청을 찾을 수 없습니다. 전국 종합 현황에서 &apos;상세 조회&apos;로
            접근해 주세요.
          </p>
        )}
      </main>
    </>
  );
}
