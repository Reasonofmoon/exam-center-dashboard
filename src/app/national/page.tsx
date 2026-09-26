import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";

export const metadata: Metadata = { title: "전국 종합 현황" };

export default function NationalPage() {
  return (
    <StubPage
      title="전국 종합 현황"
      description="도교육청별 시험장 상태(🔴🟡🟢)·출석률·사고를 숫자로 한눈에 봅니다. 개인정보는 보이지 않습니다."
    />
  );
}
