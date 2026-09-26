import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";

export const metadata: Metadata = { title: "도교육청·지구 등록" };

export default function NationalSetupPage() {
  return (
    <StubPage
      title="도교육청·지구 등록"
      description="도교육청 목록을 확인하고 지구가 어느 도교육청 소속인지 지정합니다."
    />
  );
}
