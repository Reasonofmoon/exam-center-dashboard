import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";

export const metadata: Metadata = { title: "전국 리포트" };

export default function NationalReportsPage() {
  return (
    <StubPage
      title="전국 리포트"
      description="도교육청별 준비율·출석률·사고를 비교하고 엑셀로 받습니다."
    />
  );
}
