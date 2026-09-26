import { GraduationCap, LogOut } from "lucide-react";
import Link from "next/link";

export function SiteHeader({
  email,
  role,
  homeHref = "/dashboard",
}: {
  email: string;
  role: string;
  homeHref?: string;
}) {
  const initial = email.charAt(0).toUpperCase();

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white print:hidden">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4">
        <Link
          href={homeHref}
          className="flex min-w-0 items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="truncate text-sm font-semibold text-slate-900">
            수능시험 통합관리 시스템
          </span>
        </Link>
        <div className="flex shrink-0 items-center gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
              {initial}
            </span>
            <div className="hidden leading-tight sm:block">
              <div className="max-w-56 truncate text-sm font-medium text-slate-800">
                {email}
              </div>
              <div className="text-xs text-slate-500">{role}</div>
            </div>
          </div>
          <button
            type="button"
            className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-700 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-blue-600 disabled:opacity-50"
          >
            <LogOut className="h-4 w-4" aria-hidden="true" />
            로그아웃
          </button>
        </div>
      </div>
    </header>
  );
}
