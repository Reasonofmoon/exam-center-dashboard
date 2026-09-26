import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";

export const metadata: Metadata = { title: "전국 전날 백업" };

export default function NationalBackupPage() {
  return (
    <StubPage
      title="전국 전날 백업"
      description="시험 전날 전국 집계와 도교육청 담당자 연락처를 엑셀로 받아 둡니다."
    />
  );
}
