import {
  BarChart3,
  BookOpen,
  Building2,
  DatabaseBackup,
  FileSpreadsheet,
  Landmark,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

export type MenuItem = {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type MenuSection = {
  title: string;
  description?: string;
  items: MenuItem[];
};

export const demoUser = {
  email: "demo-national@example.com",
  role: "본부",
  roleSummary:
    "도교육청별 진행 현황을 숫자로 보고, 도교육청 담당자에게 공지를 보냅니다(개인정보는 보이지 않습니다).",
};

export const menuSections: MenuSection[] = [
  {
    title: "등록·발송",
    description: "지구·학교·시험을 올리고 도교육청에 알립니다",
    items: [
      {
        href: "/import",
        title: "본부 엑셀 일괄 업로드",
        description:
          "지구(도교육청 지정)·학교·시험·교시·시험 물품을 엑셀로 한 번에 올립니다.",
        icon: FileSpreadsheet,
      },
      {
        href: "/national/setup",
        title: "도교육청·지구 등록",
        description:
          "도교육청 목록을 확인하고 지구가 어느 도교육청 소속인지 지정합니다.",
        icon: Building2,
      },
      {
        href: "/national/notices",
        title: "도교육청 공지",
        description:
          "도교육청 담당자에게 공지를 보내고 교육청별 확인 여부를 봅니다.",
        icon: Megaphone,
      },
    ],
  },
  {
    title: "현황 조회",
    description: "도교육청별 진행 상황을 확인합니다",
    items: [
      {
        href: "/national",
        title: "전국 종합 현황",
        description:
          "도교육청별 시험장 상태(🔴🟡🟢)·출석률·사고를 숫자로 한눈에 봅니다. 개인정보는 보이지 않습니다.",
        icon: Landmark,
      },
      {
        href: "/national/reports",
        title: "전국 리포트",
        description: "도교육청별 준비율·출석률·사고를 비교하고 엑셀로 받습니다.",
        icon: BarChart3,
      },
      {
        href: "/national/backup",
        title: "전국 전날 백업",
        description:
          "시험 전날 전국 집계와 도교육청 담당자 연락처를 엑셀로 받아 둡니다.",
        icon: DatabaseBackup,
      },
    ],
  },
  {
    title: "도움말",
    items: [
      {
        href: "/guide",
        title: "역할 안내",
        description: "내 역할이 볼 수 있는 화면과 할 수 있는 일을 안내합니다.",
        icon: BookOpen,
      },
    ],
  },
];
