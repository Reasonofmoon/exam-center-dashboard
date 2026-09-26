"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      className="rounded border bg-blue-600 px-3 py-1 text-sm text-white"
      onClick={() => window.print()}
    >
      인쇄 / PDF 저장
    </button>
  );
}
