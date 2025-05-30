import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Building2, CalendarDays, Ruler, Clock, Users, ParkingCircle, Zap, Compass, 
  BadgeDollarSign, Timer, Car, Bike, Snowflake, CalendarClock, CreditCard 
} from 'lucide-react';

const buildingInfo = [
  { icon: <Building2 className="h-6 w-6 text-primary-foreground" />, label: "Quy Mô", value: "6 Tầng cao - 1 Trệt - 1 Hầm" },
  { icon: <CalendarDays className="h-6 w-6 text-primary-foreground" />, label: "Năm Hoàn Thành", value: "2014" },
  { icon: <Ruler className="h-6 w-6 text-primary-foreground" />, label: "Tầng Điển Hình", value: "Diện tích 485m2/sàn" },
  { icon: <Clock className="h-6 w-6 text-primary-foreground" />, label: "Giờ Làm Việc", value: "7h00 - 17h00 thứ 2 đến thứ 7" },
  { icon: <Users className="h-6 w-6 text-primary-foreground" />, label: "Thang máy", value: "2 thang máy Mitsubishi tốc độ cao, tải trọng 750kg (11 người)" },
  { icon: <ParkingCircle className="h-6 w-6 text-primary-foreground" />, label: "Đỗ Xe", value: "Diện tích 1 tầng hầm" },
  { icon: <Zap className="h-6 w-6 text-primary-foreground" />, label: "Điện Dự Phòng", value: "Dự phòng cơ bản không bao gồm điều hòa" },
  { icon: <Compass className="h-6 w-6 text-primary-foreground" />, label: "Hướng Toà Nhà", value: "Nam và Đông Nam" },
];

const serviceCosts = [
  { icon: <BadgeDollarSign className="h-6 w-6 text-primary-foreground" />, label: "Giá Thuê - Thuế VAT", value: "Liên Hệ" },
  { icon: <Timer className="h-6 w-6 text-primary-foreground" />, label: "Phí Dịch Vụ - Ngoài Giờ", value: "Miễn Phí" },
  { icon: <Car className="h-6 w-6 text-primary-foreground" />, label: "Đỗ Ô Tô", value: "Gửi bãi ngoài" },
  { icon: <Bike className="h-6 w-6 text-primary-foreground" />, label: "Đỗ Xe Máy", value: "Miễn Phí" },
  { icon: <Snowflake className="h-6 w-6 text-primary-foreground" />, label: "Tiền Điện Lạnh", value: "Tính theo thực tế tiêu thụ" },
  { icon: <CalendarClock className="h-6 w-6 text-primary-foreground" />, label: "Thời Hạn Thuê", value: "Từ 01 năm trở lên" },
  { icon: <CreditCard className="h-6 w-6 text-primary-foreground" />, label: "Đặt Cọc & Thanh Toán", value: "Đặt cọc 03 tháng - Thanh toán theo quý/tháng" },
];

const InfoItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <li className="flex items-start space-x-3 py-3">
    <div className="flex-shrink-0 pt-1">{icon}</div>
    <div>
      <p className="font-semibold text-primary-foreground">{label}</p>
      <p className="text-primary-foreground/80">{value}</p>
    </div>
  </li>
);

const InfoServicesSection = () => {
  return (
    <section id="info-services" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <Card className="bg-primary text-primary-foreground shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">THÔNG SỐ TÒA NHÀ</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="divide-y divide-primary-foreground/20">
                {buildingInfo.map((item) => (
                  <InfoItem key={item.label} icon={item.icon} label={item.label} value={item.value} />
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-primary text-primary-foreground shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">GIÁ VÀ CHI PHÍ DỊCH VỤ</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="divide-y divide-primary-foreground/20">
                {serviceCosts.map((item) => (
                  <InfoItem key={item.label} icon={item.icon} label={item.label} value={item.value} />
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InfoServicesSection;
