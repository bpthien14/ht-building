import { Maximize2, LayoutGrid } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const floorPlansData = [
  {
    id: "tang-2-4", // Thêm ID để dễ dàng tìm kiếm, cũng có thể dùng tabValue
    tabValue: "tang-2-4",
    tabLabel: "Tầng 2 - 4",
    status: "Còn Trống",
    title: "MẶT BẰNG TẦNG 2-4",
    heroTitle: "Mặt Bằng Tầng 2-4", // Tiêu đề cho trang chi tiết
    area: { icon: Maximize2, label: "Diện Tích Cho Thuê", value: "485m²" },
    subdivision: { icon: LayoutGrid, label: "Diện Tích Phân Khu", value: "47 - 124 - 148m²" },
    price: { label: "Giá Thuê", value: "Liên Hệ 0919 999 939" },
    description: "Quý khách có nhu cầu thuê diện tích linh hoạt hoặc thuê toàn bộ sàn, vui lòng liên hệ chúng tôi để được hỗ trợ.",
    imageSrc: "/images/BV-tang24.png",
    imageAlt: "Bản vẽ mặt bằng tầng 2-4",
    aiHint: "architectural floor plan",
    subSections: [ // Các phân khu chi tiết
      { 
        title: "Diện Tích 47m²", 
        imageSrc: "/images/BV-tang24-phanKhu1.png", // Giả sử có ảnh riêng cho phân khu
        imageAlt: "Phân khu 47m2",
        status: "Còn Trống", 
        price: "Liên Hệ" 
      },
      { 
        title: "Diện Tích 124m²", 
        imageSrc: "/images/BV-tang24-phanKhu2.png",
        imageAlt: "Phân khu 124m2",
        status: "Còn Trống", 
        price: "Liên Hệ" 
      },
      { 
        title: "Diện Tích 148m²", 
        imageSrc: "/images/BV-tang24-phanKhu3.png",
        imageAlt: "Phân khu 148m2",
        status: "Còn Trống", 
        price: "Liên Hệ" 
      },
    ]
  },
  {
    id: "tang-5",
    tabValue: "tang-5",
    tabLabel: "Tầng 5",
    status: "Còn Trống",
    title: "MẶT BẰNG TẦNG 5",
    heroTitle: "Mặt Bằng Tầng 5",
    area: { icon: Maximize2, label: "Diện Tích Cho Thuê", value: "485m²" },
    subdivision: { icon: LayoutGrid, label: "Diện Tích Phân Khu", value: "Theo yêu cầu" },
    price: { label: "Giá Thuê", value: "Liên Hệ 0919 999 939" },
    description: "Mặt bằng tầng 5 có thể được tùy chỉnh theo nhu cầu cụ thể của doanh nghiệp bạn.",
    imageSrc: "/images/BV-tang5.png",
    imageAlt: "Bản vẽ mặt bằng tầng 5",
    aiHint: "office layout blueprint",
    subSections: [
      { 
        title: "Diện Tích 47m²", 
        imageSrc: "/images/BV-tang5-phanKhu1.png", // Giả sử có ảnh riêng cho phân khu
        imageAlt: "Phân khu 47m2",
        status: "Còn Trống", 
        price: "Liên Hệ" 
      },
      { 
        title: "Diện Tích 98m²", 
        imageSrc: "/images/BV-tang5-phanKhu2.png",
        imageAlt: "Phân khu 98m2",
        status: "Còn Trống", 
        price: "Liên Hệ" 
      },
      { 
        title: "Diện Tích 148m²", 
        imageSrc: "/images/BV-tang5-phanKhu3.png",
        imageAlt: "Phân khu 148m2",
        status: "Còn Trống", 
        price: "Liên Hệ" 
      },
    ] 
  },
  {
    id: "tang-6",
    tabValue: "tang-6",
    tabLabel: "Tầng 6",
    status: "Còn Trống",
    title: "MẶT BẰNG TẦNG 6",
    heroTitle: "Mặt Bằng Tầng 6",
    area: { icon: Maximize2, label: "Diện Tích Cho Thuê", value: "485m²" },
    subdivision: { icon: LayoutGrid, label: "Diện Tích Phân Khu", value: "Theo yêu cầu" },
    price: { label: "Giá Thuê", value: "Liên Hệ 0919 999 939" },
    description: "Tầng 6 là tầng cao nhất, cung cấp không gian làm việc lý tưởng với tầm nhìn thoáng đãng.",
    imageSrc: "/images/BV-tang6.png",
    imageAlt: "Bản vẽ mặt bằng tầng 6",
    aiHint: "top floor plan",
    subSections: [
      { 
        title: "Diện Tích 47m²", 
        imageSrc: "/images/BV-tang6-phanKhu1.png", // Giả sử có ảnh riêng cho phân khu
        imageAlt: "Phân khu 47m2",
        status: "Còn Trống", 
        price: "Liên Hệ" 
      },
      { 
        title: "Diện Tích 98m²", 
        imageSrc: "/images/BV-tang6-phanKhu2.png",
        imageAlt: "Phân khu 98m2",
        status: "Còn Trống", 
        price: "Liên Hệ" 
      },
      { 
        title: "Diện Tích 105m²", 
        imageSrc: "/images/BV-tang6-phanKhu3.png",
        imageAlt: "Phân khu 105m2",
        status: "Còn Trống", 
        price: "Liên Hệ" 
      },
    ]
  },
];

export type SubSectionType = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  status: string;
  price: string;
};

export type FloorPlanDataType = {
  id: string;
  tabValue: string;
  tabLabel: string;
  status: string;
  title: string;
  heroTitle: string;
  area: { icon: LucideIcon; label: string; value: string };
  subdivision: { icon: LucideIcon; label: string; value: string };
  price: { label: string; value: string };
  description?: string;
  imageSrc: string;
  imageAlt: string;
  aiHint?: string;
  subSections?: SubSectionType[];
};