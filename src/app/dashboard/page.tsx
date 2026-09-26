import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { MenuCard } from "@/components/menu-card";
import { demoUser, menuSections } from "@/lib/menu";

export const metadata: Metadata = {
  title: "대시보드",
};

export default function DashboardPage() {
  return (
    <>
      <SiteHeader email={demoUser.email} role={demoUser.role} />
      <main className="mx-auto w-full max-w-6xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">대시보드</h1>
          <p className="mt-1 text-sm text-slate-500">
            현재 역할: <span className="font-medium text-slate-700">{demoUser.role}</span> ·{" "}
            {demoUser.roleSummary}
          </p>
        </div>
        <div className="space-y-10">
          {menuSections.map((section) => (
            <section key={section.title}>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                <h2 className="text-base font-semibold text-slate-800">
                  {section.title}
                </h2>
                {section.description ? (
                  <span className="text-sm text-slate-500">
                    {section.description}
                  </span>
                ) : null}
              </div>
              <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                  <MenuCard key={item.href} item={item} />
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
