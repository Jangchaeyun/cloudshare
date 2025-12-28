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
    title: "안전한 저장소",
    description: "파일은 암호화되어 안전한 클라우드 인프라에 저장됩니다.",
  },
  {
    iconName: "Share2",
    iconColor: "text-purple-500",
    title: "간단한 파일 공유",
    description:
      "사용자가 직접 제어할 수 있는 안전한 링크로 파일을 공유하세요.",
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
      "어떤 기기에서든 파일을 정리하고, 미리 보고, 관리할 수 있습니다.",
  },
  {
    iconName: "Clock",
    iconColor: "text-indigo-500",
    title: "거래 내역",
    description: "모든 크레딧 구매 및 사용 내역을 한눈에 확인하세요.",
  },
];

export const pricingPlans = [
  {
    name: "무료",
    price: "0",
    description: "시작하기에 적합한 플랜",
    features: [
      "파일 업로드 5개",
      "기본 파일 공유",
      "파일 7일 보관",
      "이메일 지원",
    ],
    cta: "시작하기",
    highlighted: false,
  },
  {
    name: "프리미엄",
    price: "5,000",
    description: "더 많은 기능이 필요한 개인을 위한 플랜",
    features: [
      "파일 업로드 500개",
      "고급 파일 공유",
      "파일 30일 보관",
      "우선 이메일 지원",
      "파일 분석 기능",
    ],
    cta: "프리미엄 시작하기",
    highlighted: true,
  },
  {
    name: "얼티밋",
    price: "10,000",
    description: "팀과 비즈니스를 위한 플랜",
    features: [
      "파일 업로드 5000개",
      "팀 파일 공유 기능",
      "파일 무제한 보관",
      "24/7 우선 지원",
      "고급 분석 기능",
      "API 접근 권한",
    ],
    cta: "얼티밋 시작하기",
    highlighted: false,
  },
];

export const testimonials = [
  {
    name: "사라 존슨",
    role: "마케팅 디렉터",
    company: "크리에이티브마인즈",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote:
      "CloudShare는 우리 팀이 크리에이티브 자산을 협업하는 방식을 완전히 바꿔주었습니다. 안전한 공유 기능과 직관적인 인터페이스 덕분에 파일 관리가 훨씬 쉬워졌어요.",
    rating: 5,
  },
  {
    name: "마이클 첸",
    role: "프리랜서 디자이너",
    company: "개인 사업자",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    quote:
      "프리랜서로 일하다 보니 대용량 디자인 파일을 고객과 안전하게 공유하는 것이 중요합니다. CloudShare의 간단한 사용성과 합리적인 가격 덕분에 항상 선택하게 되는 서비스입니다.",
    rating: 5,
  },
  {
    name: "프리야 샤르마",
    role: "프로젝트 매니저",
    company: "테크솔루션즈",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "여러 팀에 걸쳐 프로젝트 파일을 관리하는 일은 악몽 같았지만, CloudShare를 사용한 이후로는 모든 파일이 체계적으로 정리되고 필요한 순간에 바로 접근할 수 있게 되었습니다.",
    rating: 4,
  },
];

//side menu bar options
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
    label: "거래 내역",
    icon: Receipt,
    path: "/transactions",
  },
];
