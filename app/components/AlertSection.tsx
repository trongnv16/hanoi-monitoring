"use client";

import {
  AlertTriangle,
  Flame,
  Droplets,
  Zap,
  Construction,
  ChevronRight,
  Info,
} from "lucide-react";

const alerts = [
  {
    id: 1,
    type: "danger",
    icon: Flame,
    category: "Cháy nổ",
    title: "Cảnh báo nguy cơ cháy cao tại Hoàng Mai",
    detail: "Thời tiết hanh khô, khuyến cáo người dân không đốt rác, vật liệu dễ cháy nơi công cộng.",
    time: "08:30 hôm nay",
    district: "Hoàng Mai",
  },
  {
    id: 2,
    type: "warning",
    icon: Droplets,
    category: "Ngập úng",
    title: "Nguy cơ ngập tại 3 tuyến đường trung tâm",
    detail: "Dự báo mưa lớn chiều tối nay. Các tuyến: Nguyễn Chí Thanh, Trần Duy Hưng, Khuất Duy Tiến.",
    time: "07:00 hôm nay",
    district: "Cầu Giấy, Đống Đa",
  },
  {
    id: 3,
    type: "warning",
    icon: Construction,
    category: "Giao thông",
    title: "Cấm đường thi công cầu Vĩnh Tuy 2",
    detail: "Cấm xe tải >3.5 tấn qua cầu Vĩnh Tuy từ 22:00–05:00 từ ngày 26/2 đến 10/3.",
    time: "26/02/2026",
    district: "Long Biên",
  },
  {
    id: 4,
    type: "info",
    icon: Zap,
    category: "Điện lực",
    title: "Lịch cắt điện bảo trì ngày 27/02",
    detail: "Cắt điện từ 07:00–11:00 tại phường Mỹ Đình 1, Mỹ Đình 2 để bảo trì lưới điện.",
    time: "26/02/2026",
    district: "Nam Từ Liêm",
  },
  {
    id: 5,
    type: "info",
    icon: Info,
    category: "Y tế",
    title: "Dịch sốt xuất huyết có xu hướng tăng",
    detail: "Sở Y tế khuyến cáo người dân diệt muỗi, bọ gậy. 128 ca mắc trong tuần qua.",
    time: "25/02/2026",
    district: "Toàn thành phố",
  },
];

const typeStyles = {
  danger: {
    badge: "bg-red-100 text-red-700",
    border: "border-l-red-500",
    icon: "text-red-500 bg-red-50",
  },
  warning: {
    badge: "bg-amber-100 text-amber-700",
    border: "border-l-amber-500",
    icon: "text-amber-600 bg-amber-50",
  },
  info: {
    badge: "bg-blue-100 text-blue-700",
    border: "border-l-blue-500",
    icon: "text-blue-600 bg-blue-50",
  },
};

export default function AlertSection() {
  return (
    <section id="alerts" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <h2 className="text-xl font-bold text-slate-900">Cảnh báo & Thông báo khẩn</h2>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium cursor-pointer transition-colors">
            Xem tất cả →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {alerts.map((alert) => {
            const Icon = alert.icon;
            const styles = typeStyles[alert.type as keyof typeof typeStyles];
            return (
              <div
                key={alert.id}
                className={`bg-white rounded-2xl border border-slate-100 border-l-4 ${styles.border} shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow duration-200`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${styles.icon}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${styles.badge}`}>
                        {alert.category}
                      </span>
                      <span className="text-xs text-slate-400">{alert.district}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-800 mb-1 leading-snug">
                      {alert.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-2">
                      {alert.detail}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">{alert.time}</span>
                      <button className="flex items-center gap-0.5 text-xs text-blue-600 hover:text-blue-700 font-medium cursor-pointer transition-colors">
                        Chi tiết <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
