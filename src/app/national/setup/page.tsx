"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { demoUser } from "@/lib/menu";
import { districts, provinces } from "@/lib/demo-data";

export default function NationalSetupPage() {
  const [list, setList] = useState(provinces);
  const [managers, setManagers] = useState(() =>
    Object.fromEntries(
      provinces.map((p) => [p.name, { name: p.managerName ?? "", phone: p.managerPhone ?? "" }])
    )
  );
  const [newName, setNewName] = useState("");
  const [status, setStatus] = useState("");

  const addProvince = () => {
    const name = newName.trim();
    if (!name) return;
    if (list.some((p) => p.name === name)) {
      setStatus("이미 있는 도교육청 이름입니다.");
      return;
    }
    setList((prev) => [...prev, { id: `local-${Date.now()}`, name, managerName: null, managerPhone: null }]);
    setManagers((prev) => ({ ...prev, [name]: { name: "", phone: "" } }));
    setNewName("");
    setStatus("도교육청을 추가했습니다.");
  };

  return (
    <>
      <SiteHeader email={demoUser.email} role={demoUser.role} />
      <main className="mx-auto max-w-4xl space-y-6 p-8">
        <h1 className="text-2xl font-semibold">도교육청·지구 등록</h1>
        {status ? (
          <p role="status" className="text-sm text-green-700">
            {status}
          </p>
        ) : null}
        <section className="space-y-2 rounded border bg-white p-4">
          <h2 className="font-semibold">1. 도교육청 목록과 담당자 연락처 ({list.length}개)</h2>
          <p className="text-sm text-zinc-600">
            도교육청 담당자 계정이 어느 도교육청 소속인지는 계정을 만들 때
            관리자가 지정합니다. (README의 계정 만들기 참고)
          </p>
          <ul className="space-y-2">
            {list.map((p) => (
              <li key={p.name} className="flex flex-wrap items-center gap-2 text-sm">
                <span className="min-w-56 font-medium">{p.name}</span>
                <input
                  aria-label={`${p.name} 담당자 이름`}
                  className="rounded border p-1.5"
                  placeholder="담당자 이름"
                  maxLength={100}
                  value={managers[p.name]?.name ?? ""}
                  onChange={(e) =>
                    setManagers((prev) => ({
                      ...prev,
                      [p.name]: { ...prev[p.name], name: e.target.value },
                    }))
                  }
                />
                <input
                  aria-label={`${p.name} 담당자 연락처`}
                  className="rounded border p-1.5"
                  placeholder="연락처"
                  maxLength={30}
                  value={managers[p.name]?.phone ?? ""}
                  onChange={(e) =>
                    setManagers((prev) => ({
                      ...prev,
                      [p.name]: { ...prev[p.name], phone: e.target.value },
                    }))
                  }
                />
                <button
                  type="button"
                  className="rounded border px-3 py-1 text-sm"
                  onClick={() => setStatus(`${p.name} 담당자 정보를 저장했습니다.`)}
                >
                  저장
                </button>
              </li>
            ))}
          </ul>
          <form
            className="flex flex-wrap gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              addProvince();
            }}
          >
            <input
              aria-label="새 도교육청 이름"
              className="rounded border p-2"
              placeholder="도교육청 이름"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <button type="submit" className="rounded border px-3 py-1.5 text-sm">
              추가
            </button>
          </form>
        </section>
        <section className="space-y-2 rounded border bg-white p-4">
          <h2 className="font-semibold">2. 지구의 소속 도교육청</h2>
          {districts.length === 0 ? (
            <p className="text-sm text-zinc-600">
              등록된 지구가 없습니다. 지구는 각 도교육청 담당자가 등록합니다.
            </p>
          ) : null}
          <ul className="space-y-2">
            {districts.map((d) => (
              <li key={d.name} className="flex flex-wrap items-center gap-2">
                <span className="min-w-56 font-medium">{d.name}</span>
                <select
                  aria-label={`${d.name} 소속 도교육청`}
                  className="rounded border p-2"
                  defaultValue={list.some((p) => p.name === d.province) ? d.province : ""}
                >
                  <option value="">도교육청 미지정</option>
                  {list.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                </select>
                <button type="button" className="rounded border px-3 py-1.5 text-sm" onClick={() => setStatus(`${d.name} 소속을 저장했습니다.`)}>
                  저장
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
