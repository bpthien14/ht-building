import { 
  Building2, CalendarDays, LayoutPanelLeft, Clock, Users, ParkingCircle, Zap, ArrowRightLeft, 
  CircleDollarSign, Wrench, Car, Bike, Snowflake, FilePenLine, HandCoins 
} from 'lucide-react';

const buildingInfoData = [
  { icon: Building2, label: "Quy Mô", value: "6 Tầng cao - 1 Trệt - 1 Hầm" },
  { icon: CalendarDays, label: "Năm Hoàn Thành", value: "2014" },
  { icon: LayoutPanelLeft, label: "Tầng Điển Hình", value: "Diện tích 485m2/sàn" },
  { icon: Clock, label: "Giờ Làm Việc", value: "7h00 - 17h00 thứ 2 đến thứ 7" },
  { icon: Users, label: "Thang máy", value: "2 thang máy Mitsubishi tốc độ cao, tải trọng 750kg (11 người)" },
  { icon: ParkingCircle, label: "Đỗ Xe", value: "Diện tích 1 tầng hầm" },
  { icon: Zap, label: "Điện Dự Phòng", value: "Dự phòng cơ bản không bao gồm điều hòa" },
  { icon: ArrowRightLeft, label: "Hướng Toà Nhà", value: "Nam và Đông Nam" },
];

const serviceCostsData = [
  { icon: CircleDollarSign, label: "Giá Thuê - Thuế VAT", value: "Liên Hệ" },
  { icon: Wrench, label: "Phí Dịch Vụ - Ngoài Giờ", value: "Miễn Phí" },
  { icon: Car, label: "Đỗ Ô Tô", value: "Gửi bãi ngoài" },
  { icon: Bike, label: "Đỗ Xe Máy", value: "Miễn Phí" },
  { icon: Snowflake, label: "Tiền Điện Lạnh", value: "Tính theo thực tế tiêu thụ" },
  { icon: FilePenLine, label: "Thời Hạn Thuê", value: "Từ 01 năm trở lên" },
  { icon: HandCoins, label: "Đặt Cọc & Thanh Toán", value: "Đặt cọc 03 tháng - Thanh toán theo quý/tháng" },
];

const InfoItem = ({ IconComponent, label, value }: { IconComponent: React.ElementType, label: string, value: string }) => (
  <li className="flex items-start">
    <IconComponent className="h-12 w-12 mr-4 text-slate-600 flex-shrink-0 mt-1" />
    <div>
      <p className="font-bold text-xl text-slate-800">{label}</p>
      <p className="font-medium text-lg text-slate-600">{value}</p>
    </div>
  </li>
);

const InfoServicesSection = () => {
  return (
    <section id="info-services" className="py-16 md:py-24 bg-background" style={{ fontFamily: 'var(--font-montserrat)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* THÔNG SỐ TÒA NHÀ */}
          <div>
            <h3 className="text-2xl sm:text-2xl font-bold text-white bg-slate-800 p-4 rounded-t-md text-center">
              THÔNG SỐ TÒA NHÀ
            </h3>
            <div className="bg-background p-6 rounded-b-md">
              <ul className="space-y-5">
                {buildingInfoData.map((item) => (
                  <InfoItem key={item.label} IconComponent={item.icon} label={item.label} value={item.value} />
                ))}
              </ul>
            </div>
          </div>

          {/* GIÁ VÀ CHI PHÍ DỊCH VỤ */}
          <div>
            <h3 className="text-2xl sm:text-2xl font-bold text-white bg-[#4A4B4C] p-4 rounded-t-md text-center">
              GIÁ VÀ CHI PHÍ DỊCH VỤ
            </h3>
            <div className="bg-background p-6 rounded-b-md">
              <ul className="space-y-5">
                {serviceCostsData.map((item) => (
                  <InfoItem key={item.label} IconComponent={item.icon} label={item.label} value={item.value} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoServicesSection;
