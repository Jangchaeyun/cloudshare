import {
  CreditCard,
  Files,
  LayoutDashboard,
  Receipt,
  Upload,
} from "lucide-react";

export const features = [
  {
    iconName: "ArrowUpCircle",
    iconColor: "text-purple-500",
    title: "간편한 파일 업로드",
    description:
      "직관적인 드래그 앤 드롭 인터페이스로 파일을 빠르게 업로드하세요.",
  },
  {
    iconName: "Shield",
    iconColor: "text-green-500",
    title: "안전한 저장",
    description: "파일은 암호화되어 안전한 클라우드 인프라에 저장됩니다.",
  },
  {
    iconName: "Share2",
    iconColor: "text-purple-500",
    title: "간단한 공유",
    description:
      "사용자가 제어할 수 있는 보안 링크로 누구와도 파일을 공유할 수 있습니다.",
  },
  {
    iconName: "CreditCard",
    iconColor: "text-orange-500",
    title: "유연한 크레딧",
    description: "크레딧 기반 시스템으로 사용한 만큼만 결제하세요.",
  },
  {
    iconName: "FileText",
    iconColor: "text-red-500",
    title: "파일 관리",
    description:
      "어떤 기기에서든 파일을 정리하고 미리보기 및 관리할 수 있습니다.",
  },
  {
    iconName: "Clock",
    iconColor: "text-indigo-500",
    title: "거래 내역",
    description: "크레딧 구매 및 사용 내역을 한눈에 확인하세요.",
  },
];

export const pricingPlans = [
  {
    name: "무료",
    price: "₩0",
    description: "시작하기에 적합한 플랜",
    features: [
      "파일 업로드 5회",
      "기본 파일 공유",
      "7일 파일 보관",
      "이메일 지원",
    ],
    cta: "시작하기",
    highlighted: false,
  },
  {
    name: "프리미엄",
    price: "₩25,000",
    description: "개인 사용자를 위한 확장된 플랜",
    features: [
      "파일 업로드 500회",
      "고급 파일 공유",
      "30일 파일 보관",
      "우선 이메일 지원",
      "파일 분석 기능",
    ],
    cta: "프리미엄 이용하기",
    highlighted: true,
  },
  {
    name: "얼티밋",
    price: "₩35,000",
    description: "팀과 기업을 위한 플랜",
    features: [
      "파일 업로드 5,000회",
      "팀 공유 기능",
      "무제한 파일 보관",
      "24/7 우선 지원",
      "고급 분석 기능",
      "API 접근",
    ],
    cta: "얼티밋 이용하기",
    highlighted: false,
  },
];

export const testimonials = [
  {
    name: "사라 존슨",
    role: "마케팅 디렉터",
    company: "CreativeMinds Inc.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote:
      "CloudShare는 우리 팀의 협업 방식을 완전히 바꿔주었습니다. 안전한 공유와 직관적인 인터페이스 덕분에 파일 관리가 매우 쉬워졌어요.",
    rating: 5,
  },
  {
    name: "마이클 첸",
    role: "프리랜서 디자이너",
    company: "개인 사업자",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    quote:
      "프리랜서로서 대용량 디자인 파일을 안전하게 공유하는 것이 중요한데, CloudShare는 간단한 사용성과 합리적인 가격으로 최고의 선택입니다.",
    rating: 5,
  },
  {
    name: "프리야 샤르마",
    role: "프로젝트 매니저",
    company: "TechSolutions Ltd.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "여러 팀의 프로젝트 파일을 관리하는 일은 늘 어려웠지만, CloudShare 덕분에 이제는 필요한 순간에 바로 접근할 수 있습니다.",
    rating: 4,
  },
];

// side menu bar options
export const SIDE_MENU_DATA = [
  {
    id: "01",
    label: "대시보드",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    id: "02",
    label: "업로드",
    icon: Upload,
    path: "/upload",
  },
  {
    id: "03",
    label: "내 파일",
    icon: Files,
    path: "/my-files",
  },
  {
    id: "04",
    label: "구독",
    icon: CreditCard,
    path: "/subscriptions",
  },
  {
    id: "05",
    label: "결제 내역",
    icon: Receipt,
    path: "/transactions",
  },
];
