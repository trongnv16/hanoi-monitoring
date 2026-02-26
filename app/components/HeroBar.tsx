"use client";

import {
  Cloud,
  Wind,
  Thermometer,
  Droplets,
  AlertTriangle,
  Flame,
  TrendingUp,
  Zap,
} from "lucide-react";

const statusItems = [
  {
    icon: Thermometer,
    label: "28°C",
    sub: "Nhiều mây",
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    icon: Wind,
    label: "AQI 68",
    sub: "Trung bình",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    border: "border-yellow-100",
  },
  {
    icon: Droplets,
    label: "75%",
    sub: "Độ ẩm",
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Flame,
    label: "0 vụ",
    sub: "Cháy nổ hôm nay",
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    icon: AlertTriangle,
    label: "2 cảnh báo",
    sub: "Ngập úng",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: TrendingUp,
    label: "GRDP +8.5%",
    sub: "Tăng trưởng 2024",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: Zap,
    label: "Điện ổn định",
    sub: "Toàn thành phố",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
];

export default function HeroBar() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">
          <div className="flex-1">
            <p className="text-blue-200 text-sm font-medium mb-1">Cổng thông tin điện tử</p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Thành phố Hà Nội
            </h1>
            <p className="text-blue-100 text-sm mt-1.5">
              Thứ Năm, 26 tháng 2, 2026 &nbsp;·&nbsp; Cập nhật lúc 08:00
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Trực tuyến
            </span>
          </div>
        </div>

        {/* Status Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {statusItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`${item.bg} ${item.border} border rounded-xl px-3 py-2.5 cursor-pointer hover:shadow-md transition-shadow duration-200`}
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <Icon className={`w-4 h-4 ${item.color} flex-shrink-0`} />
                  <span className={`text-sm font-bold ${item.color}`}>{item.label}</span>
                </div>
                <p className="text-xs text-slate-500 truncate">{item.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
