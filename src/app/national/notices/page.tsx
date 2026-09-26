import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";

export const metadata: Metadata = { title: "도교육청 공지" };

export default function NationalNoticesPage() {
  return (
    <StubPage
      title="도교육청 공지"
      description="도교육청 담당자에게 공지를 보내고 교육청별 확인 여부를 봅니다."
    />
  );
}
