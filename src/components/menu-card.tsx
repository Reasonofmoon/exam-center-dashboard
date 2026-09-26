import { ChevronRight } from "lucide-react";
import type { MenuItem } from "@/lib/menu";

export function MenuCard({ item }: { item: MenuItem }) {
  const Icon = item.icon;

  return (
    <li>
      <a
        href={item.href}
        className="group flex h-full items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-blue-600 motion-safe:hover:-translate-y-0.5"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex items-center justify-between gap-2">
            <span className="font-semibold text-slate-900">{item.title}</span>
            <ChevronRight
              className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:text-blue-600 motion-safe:group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
          <span className="mt-1 block text-sm leading-relaxed text-slate-500">
            {item.description}
          </span>
        </span>
      </a>
    </li>
  );
}
