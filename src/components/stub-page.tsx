import { ArrowLeft, Construction } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { demoUser } from "@/lib/menu";

export function StubPage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <SiteHeader email={demoUser.email} role={demoUser.role} />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
          {description ? (
            <p className="mt-1 text-sm text-slate-500">{description}</p>
          ) : null}
        </div>
        <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
            <Construction className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="text-sm text-slate-600">
            이 화면은 아직 준비 중입니다. 대시보드 구조 복제본입니다.
          </p>
          <Link
            href="/dashboard"
            className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-700 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-blue-600"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            대시보드로 돌아가기
          </Link>
        </div>
      </main>
    </>
  );
}
