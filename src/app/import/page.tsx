import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";

export const metadata: Metadata = { title: "본부 엑셀 일괄 업로드" };

export default function ImportPage() {
  return (
    <StubPage
      title="본부 엑셀 일괄 업로드"
      description="지구(도교육청 지정)·학교·시험·교시·시험 물품을 엑셀로 한 번에 올립니다."
    />
  );
}
