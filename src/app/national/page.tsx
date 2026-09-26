"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Send } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { demoUser } from "@/lib/menu";
import {
  DEFAULT_EXAM_ID,
  exams,
  nationalSummary,
  provinceCards,
  provinceDetails,
  provinces,
  type SchoolRow,
} from "@/lib/demo-data";

function cardEmoji(stats: { red: number; yellow: number; green: number }) {
  if (stats.red > 0) return { emoji: "🔴", title: "문제" };
  if (stats.yellow > 0) return { emoji: "🟡", title: "확인 필요" };
  return { emoji: "🟢", title: "정상" };
}

function ReasonCell({ row }: { row: SchoolRow }) {
  return (
    <td className="min-w-56 border p-1 text-xs">
      {row.normal ? <span className="text-green-700">{row.normal}</span> : null}
      <ul className="space-y-0.5">
        {row.reasons.map((r, i) => (
          <li
            key={i}
            className={r.level === "red" ? "font-medium text-red-700" : "text-amber-700"}
          >
            {r.text}
          </li>
        ))}
      </ul>
    </td>
  );
}

function SchoolTable({ rows }: { rows: SchoolRow[] }) {
  return (
    <div className="overflow-x-auto border-t">
      <table className="w-full text-sm">
        <thead className="bg-zinc-100">
          <tr>
            <th className="border p-1">상태</th>
            <th className="border p-1">시험장</th>
            <th className="border p-1">수험생</th>
            <th className="border p-1">좌석 배치</th>
            <th className="border p-1">준비 체크리스트</th>
            <th className="border p-1">물품 수령</th>
            <th className="border p-1">출석 / 결시</th>
            <th className="border p-1">사고</th>
            <th className="border p-1">상태 사유</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.school}>
              <td className="border p-1 text-center">
                <span role="img" aria-label={r.emoji === "🟢" ? "정상" : r.emoji === "🟡" ? "확인 필요" : "문제"} title={r.statusTitle}>
                  {r.emoji}
                </span>
              </td>
              <td className="border p-1">{r.school}</td>
              <td className="border p-1 text-center">{r.students}</td>
              <td className="border p-1 text-center">{r.seats}</td>
              <td className="border p-1 text-center">{r.checklist}</td>
              <td className="border p-1 text-center">{r.items}</td>
              <td className="border p-1 text-center">{r.attendance}</td>
              <td className="border p-1 text-center">{r.accidents}</td>
              <ReasonCell row={r} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function NationalPage() {
  const [examId, setExamId] = useState(DEFAULT_EXAM_ID);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [openProvinces, setOpenProvinces] = useState<Set<string>>(new Set());
  const [openDistricts, setOpenDistricts] = useState<Set<string>>(new Set());
  const [message, setMessage] = useState("");
  const [extraMessage, setExtraMessage] = useState("");
  const [urgent, setUrgent] = useState(false);

  const toggle = (set: Set<string>, id: string, apply: (s: Set<string>) => void) => {
    const next = new Set(set);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    apply(next);
  };

  const selectAll = (filter: "warn" | "red" | "none") => {
    if (filter === "none") {
      setSelected(new Set());
      return;
    }
    setSelected(
      new Set(
        provinceCards
          .filter((c) =>
            filter === "red" ? c.stats.red > 0 : c.stats.red > 0 || c.stats.yellow > 0
          )
          .map((c) => c.provinceId)
      )
    );
  };

  const stats = nationalSummary;

  return (
    <>
      <SiteHeader email={demoUser.email} role={demoUser.role} />
      <main className="mx-auto max-w-7xl space-y-6 p-8">
        <h1 className="text-2xl font-semibold">전국 종합 현황</h1>
        <p className="text-sm text-zinc-600">
          도교육청별로 시험장 진행 상태를 숫자로만 볼 수 있습니다.
          수험생·감독관 개인정보와 학교 책임자 연락처는 보이지 않습니다.
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
          <span className="text-sm text-zinc-500">1분마다 새로고침됩니다</span>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          <div className="rounded border bg-white p-3 text-center">
            <div className="text-sm text-zinc-500">도교육청</div>
            <div className="text-2xl font-semibold">{stats.provinces}</div>
          </div>
          <div className="rounded border bg-white p-3 text-center">
            <div className="text-sm text-zinc-500">시험장</div>
            <div className="text-2xl font-semibold">{stats.venues}</div>
          </div>
          <div className="rounded border bg-white p-3 text-center">
            <div className="text-sm text-zinc-500">응시 예정</div>
            <div className="text-2xl font-semibold">{stats.expected}</div>
          </div>
          <div className="rounded border bg-white p-3 text-center">
            <div className="text-sm text-zinc-500">출석률</div>
            <div className="text-2xl font-semibold">{stats.rate}</div>
          </div>
          <div className="rounded border bg-white p-3 text-center">
            <div className="text-sm text-zinc-500">처리 중 사고</div>
            <div className="text-2xl font-semibold">{stats.accidents}</div>
          </div>
        </div>
        <p>
          🟢 정상 {stats.green} · 🟡 확인 필요 {stats.yellow} · 🔴 문제 {stats.red}{" "}
          <span className="text-sm text-zinc-500">(도교육청 이름순으로 표시됩니다)</span>
        </p>
        <section
          className="space-y-3 rounded-lg border border-blue-200 bg-blue-50 p-4"
          aria-label="상태 알림 보내기"
        >
          <h2 className="flex items-center gap-2 font-semibold text-blue-900">
            <Send className="h-4 w-4" aria-hidden="true" />
            도교육청에 상태 알림 일괄 보내기
          </h2>
          <p className="text-sm text-blue-900">
            도교육청을 선택하면 각 도교육청의 <strong>상태와 문제 학교</strong>가
            그 도교육청 담당자에게 공지됩니다. 학교에는 각 도교육청이
            전달합니다. 필요하면 추가 메시지를 덧붙일 수 있습니다.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <button
              type="button"
              className="rounded border bg-white px-3 py-1.5"
              onClick={() => selectAll("warn")}
            >
              확인 필요 이상 도교육청 모두 선택
            </button>
            <button
              type="button"
              className="rounded border bg-white px-3 py-1.5"
              onClick={() => selectAll("red")}
            >
              문제(🔴) 도교육청만 선택
            </button>
            <button
              type="button"
              className="rounded border bg-white px-3 py-1.5"
              disabled={selected.size === 0}
              onClick={() => selectAll("none")}
            >
              선택 해제
            </button>
            <span className="font-medium">선택 {selected.size}개 도교육청</span>
          </div>
          <textarea
            aria-label="추가 메시지 (선택)"
            className="w-full rounded border p-2 text-sm"
            rows={2}
            maxLength={1000}
            placeholder="추가 메시지 (선택) 예: 오늘 오후 3시까지 조치 후 회신해 주세요."
            value={extraMessage}
            onChange={(e) => setExtraMessage(e.target.value)}
          />
          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-1 text-sm">
              <input
                type="checkbox"
                checked={urgent}
                onChange={(e) => setUrgent(e.target.checked)}
              />{" "}
              긴급 공지
            </label>
            <button
              type="button"
              className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
              disabled={selected.size === 0}
              onClick={() =>
                setMessage(
                  `${selected.size}개 도교육청에 상태 알림을 보냈습니다.${
                    extraMessage ? ` (추가 메시지: ${extraMessage})` : ""
                  }${urgent ? " [긴급]" : ""}`
                )
              }
            >
              선택한 {selected.size}개 도교육청에 알림 보내기
            </button>
            {message ? (
              <span role="status" className="text-sm text-green-700">
                {message}
              </span>
            ) : null}
          </div>
        </section>
        <div className="flex flex-wrap gap-2 text-sm">
          <button
            type="button"
            className="rounded border bg-white px-3 py-1.5"
            onClick={() =>
              setOpenProvinces(new Set(provinceCards.map((c) => c.provinceId)))
            }
          >
            도교육청 모두 펼치기
          </button>
          <button
            type="button"
            className="rounded border bg-white px-3 py-1.5"
            onClick={() => {
              setOpenProvinces(new Set());
              setOpenDistricts(new Set());
            }}
          >
            도교육청 모두 접기
          </button>
        </div>
        {provinceCards.map((card) => {
          const detail = provinceDetails.find((d) => d.provinceId === card.provinceId);
          const prov = provinces.find((p) => p.id === card.provinceId);
          const st = cardEmoji(card.stats);
          const open = openProvinces.has(card.provinceId);
          const provinceHref = `/national/province?province=${card.provinceId}&exam=${examId}`;
          return (
            <section key={card.provinceId} className="rounded-lg border bg-white">
              <div className="flex flex-wrap items-center gap-3 p-3">
                <input
                  aria-label={`${card.name} 선택`}
                  type="checkbox"
                  checked={selected.has(card.provinceId)}
                  onChange={() => toggle(selected, card.provinceId, setSelected)}
                />
                <span role="img" aria-label={st.title} title={st.title}>
                  {st.emoji}
                </span>
                <span className="flex-1" />
                <span className="text-xs text-zinc-600">
                  담당자:{" "}
                  {prov?.managerName ? (
                    <>
                      {prov.managerName}{" "}
                      <a
                        className="text-blue-700 underline"
                        href={`tel:${(prov.managerPhone ?? "").replace(/-/g, "")}`}
                      >
                        {prov.managerPhone}
                      </a>
                    </>
                  ) : (
                    <span className="text-zinc-400">미입력</span>
                  )}{" "}
                  · <Link className="text-blue-700 underline" href={provinceHref}>상세 조회</Link>
                </span>
              </div>
              <button
                type="button"
                className="flex w-full flex-wrap items-center gap-2 border-t p-3 text-left font-semibold"
                aria-expanded={open}
                aria-controls={`province-${card.provinceId}`}
                onClick={() => toggle(openProvinces, card.provinceId, setOpenProvinces)}
              >
                {open ? (
                  <ChevronDown className="h-5 w-5 shrink-0" aria-hidden="true" />
                ) : (
                  <ChevronRight className="h-5 w-5 shrink-0" aria-hidden="true" />
                )}
                {card.name}
                <span className="text-sm font-normal text-zinc-500">
                  학교 {card.stats.schools}곳 · 응시 예정 {card.stats.expected}명 · 출석{" "}
                  {card.stats.attended} · 결시 {card.stats.absent} · 처리 중 사고{" "}
                  {card.stats.accidents} · 🔴 {card.stats.red} · 🟡 {card.stats.yellow} · 🟢{" "}
                  {card.stats.green}
                </span>
              </button>
              {open && detail ? (
                <div className="space-y-2 border-t p-3">
                  {detail.districts.map((d) => {
                    const dOpen = openDistricts.has(d.name);
                    return (
                      <div key={d.name} className="rounded border">
                        <button
                          type="button"
                          className="flex w-full flex-wrap items-center gap-2 p-2 text-left text-sm font-medium"
                          aria-expanded={dOpen}
                          onClick={() => toggle(openDistricts, d.name, setOpenDistricts)}
                        >
                          {dOpen ? (
                            <ChevronDown className="h-4 w-4 shrink-0" aria-hidden="true" />
                          ) : (
                            <ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                          )}
                          {d.name}
                          <span className="font-normal text-zinc-500">{d.stats}</span>
                        </button>
                        {dOpen ? <SchoolTable rows={d.rows} /> : null}
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </section>
          );
        })}
      </main>
    </>
  );
}
