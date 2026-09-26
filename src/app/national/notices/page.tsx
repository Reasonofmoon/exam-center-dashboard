"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { demoUser } from "@/lib/menu";
import { notices as initialNotices, provinces, type Notice } from "@/lib/demo-data";

const nowLabel = () => {
  const d = new Date();
  const ampm = d.getHours() < 12 ? "오전" : "오후";
  const h = d.getHours() % 12 || 12;
  return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}. ${ampm} ${h}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}`;
};

export default function NationalNoticesPage() {
  const [items, setItems] = useState<Notice[]>(initialNotices);
  const [target, setTarget] = useState("all");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [urgent, setUrgent] = useState(false);

  const send = () => {
    if (!title.trim() || !body.trim()) return;
    const targetName = target === "all" ? "전체 도교육청" : provinces.find((p) => p.id === target)?.name + "";
    const total = target === "all" ? provinces.length : 1;
    const unconfirmed = target === "all" ? provinces.map((p) => p.name) : [provinces.find((p) => p.id === target)?.name ?? ""];
    const notice: Notice = {
      date: nowLabel(),
      target: targetName,
      urgent,
      title: urgent ? `[긴급]${title.trim()}` : title.trim(),
      body: body.trim(),
      confirmed: 0,
      total,
      unconfirmed,
    };
    setItems((prev) => [notice, ...prev]);
    setTitle("");
    setBody("");
    setUrgent(false);
  };

  return (
    <>
      <SiteHeader email={demoUser.email} role={demoUser.role} />
      <main className="mx-auto max-w-3xl space-y-6 p-8">
        <h1 className="text-2xl font-semibold">도교육청 공지 (본부)</h1>
        <form
          className="space-y-2 rounded border bg-white p-4"
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
        >
          <h2 className="font-semibold">공지 보내기</h2>
          <p className="text-sm text-zinc-600">
            도교육청 담당자에게 전달됩니다. 학교에는 각 도교육청이 따로
            공지합니다.
          </p>
          <select
            aria-label="공지 대상"
            className="rounded border p-2"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          >
            <option value="all">전체 도교육청</option>
            {provinces.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}만
              </option>
            ))}
          </select>
          <input
            aria-label="제목"
            className="min-w-60 flex-1 rounded border p-2"
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            aria-label="공지 내용"
            className="w-full rounded border p-2"
            placeholder="내용"
            rows={4}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-1 text-sm">
              <input
                type="checkbox"
                checked={urgent}
                onChange={(e) => setUrgent(e.target.checked)}
              />{" "}
              긴급 공지
            </label>
            <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">
              보내기
            </button>
          </div>
        </form>
        {items.length === 0 ? (
          <ul className="space-y-3">
            <li className="rounded border bg-white p-4">보낸 공지가 없습니다.</li>
          </ul>
        ) : (
          <ul className="space-y-3">
            {items.map((n, i) => (
              <li key={`${n.date}-${i}`} className="rounded border bg-white p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="text-xs text-zinc-500">{n.date} · {n.target}</div>
                    <h2 className="font-semibold">
                      {n.urgent ? (
                        <span className="mr-1 text-red-600">[긴급]</span>
                      ) : null}
                      {n.urgent ? n.title.replace(/^\[긴급\]/, "") : n.title}
                    </h2>
                  </div>
                  <button
                    type="button"
                    className="rounded border px-2 py-1 text-xs"
                    onClick={() => setItems((prev) => prev.filter((_, j) => j !== i))}
                  >
                    삭제
                  </button>
                </div>
                <p className="mt-2 whitespace-pre-wrap text-sm">{n.body}</p>
                <p className="mt-3 text-sm">
                  확인 {n.confirmed} / {n.total}
                  {n.unconfirmed.length > 0 ? (
                    <span className="text-red-600"> · 미확인: {n.unconfirmed.join(", ")}</span>
                  ) : null}
                </p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
