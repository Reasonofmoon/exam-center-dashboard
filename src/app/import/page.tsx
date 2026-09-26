"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { demoUser } from "@/lib/menu";
import { importTypes } from "@/lib/demo-data";
import { downloadCsv } from "@/lib/download";

export default function ImportPage() {
  const [active, setActive] = useState(importTypes[0].key);
  const type = importTypes.find((t) => t.key === active) ?? importTypes[0];

  const downloadForm = () => {
    downloadCsv(`${type.label} 양식.csv`, [
      type.fields.map((f) => f.name),
      type.fields.map((f) => (f.required ? "(예) 필수" : "(예) 선택")),
    ]);
  };

  return (
    <>
      <SiteHeader email={demoUser.email} role={demoUser.role} />
      <main className="mx-auto max-w-4xl space-y-4 p-8">
        <h1 className="text-2xl font-semibold">엑셀 일괄 업로드</h1>
        <p className="text-sm text-zinc-600">
          종류를 고르고 <strong>양식을 내려받아</strong> 채운 뒤 올려 주세요.
          저장하기 전에 미리보기와 오류를 먼저 보여 드립니다. 본부 양식은
          엑셀에 도교육청·지구·학교·시험 이름을 적으면 저장할 때 자동으로
          연결됩니다.
        </p>
        <div className="flex flex-wrap gap-2">
          {importTypes.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setActive(t.key)}
              className={`rounded border px-3 py-2 text-sm ${
                t.key === active ? "bg-blue-600 text-white" : "bg-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <section className="space-y-3 rounded border bg-white p-4">
          <p className="text-sm text-zinc-600">올리는 사람: {type.uploader}</p>
          <ul className="list-inside list-disc text-sm text-zinc-700">
            {type.fields.map((f) => (
              <li key={f.name}>
                <strong>
                  {f.name}
                  {f.required ? " (필수)" : ""}
                </strong>
                : {f.note}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={downloadForm}
              className="rounded border px-3 py-2 text-sm"
            >
              엑셀 양식 내려받기
            </button>
            <span className="inline-flex items-center gap-2">
              <label className="cursor-pointer rounded border px-3 py-2 text-sm hover:bg-zinc-50 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-blue-600">
                엑셀 양식 업로드
                <input
                  accept=".xlsx"
                  className="sr-only"
                  type="file"
                  onChange={(e) => {
                    e.target.value = "";
                  }}
                />
              </label>
            </span>
          </div>
        </section>
      </main>
    </>
  );
}
