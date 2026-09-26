import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";

export const metadata: Metadata = { title: "역할 안내" };

export default function GuidePage() {
  return (
    <StubPage
      title="역할 안내"
      description="내 역할이 볼 수 있는 화면과 할 수 있는 일을 안내합니다."
    />
  );
}
