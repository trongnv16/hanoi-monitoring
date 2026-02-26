"use client";

import {
  Sun,
  Cloud,
  CloudRain,
  Droplets,
  Wind,
  Eye,
  Thermometer,
  ArrowUp,
  ArrowDown,
  MapPin,
} from "lucide-react";

const forecast = [
  { day: "Hôm nay", icon: Cloud, high: 28, low: 20, rain: 20, desc: "Nhiều mây" },
  { day: "Thứ 6", icon: CloudRain, high: 25, low: 18, rain: 70, desc: "Mưa nhỏ" },
  { day: "Thứ 7", icon: CloudRain, high: 24, low: 17, rain: 80, desc: "Mưa vừa" },
  { day: "CN", icon: Sun, high: 30, low: 21, rain: 10, desc: "Nắng đẹp" },
  { day: "Thứ 2", icon: Cloud, high: 29, low: 20, rain: 25, desc: "Nhiều mây" },
  { day: "Thứ 3", icon: Sun, high: 32, low: 22, rain: 5, desc: "Nắng" },
  { day: "Thứ 4", icon: Cloud, high: 28, low: 19, rain: 30, desc: "Mây" },
];

const districts = [
  { name: "Hoàn Kiếm", temp: 28, aqi: 65, status: "Tốt" },
  { name: "Ba Đình", temp: 27, aqi: 72, status: "Trung bình" },
  { name: "Đống Đa", temp: 28, aqi: 88, status: "Kém" },
  { name: "Cầu Giấy", temp: 29, aqi: 55, status: "Tốt" },
  { name: "Hoàng Mai", temp: 28, aqi: 112, status: "Xấu" },
  { name: "Thanh Xuân", temp: 27, aqi: 78, status: "Trung bình" },
];

function AqiBadge({ value }: { value: number }) {
  let color = "bg-green-100 text-green-700";
  if (value > 100) color = "bg-red-100 text-red-700";
  else if (value > 75) color = "bg-orange-100 text-orange-700";
  else if (value > 50) color = "bg-yellow-100 text-yellow-700";
  return <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${color}`}>AQI {value}</span>;
}

export default function WeatherSection() {
  return (
    <section id="environment" className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-slate-900">Thời tiết & Môi trường</h2>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium cursor-pointer transition-colors">
            Xem chi tiết →
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Current Weather */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 text-white">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-1.5 text-blue-200 text-sm mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  Hà Nội
                </div>
                <div className="text-5xl font-bold">28°C</div>
                <div className="text-blue-100 mt-1">Nhiều mây</div>
              </div>
              <Cloud className="w-16 h-16 text-white/40" />
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-white/20 rounded-xl p-3">
                <div className="flex items-center gap-1.5 text-blue-100 text-xs mb-1">
                  <Droplets className="w-3.5 h-3.5" />
                  Độ ẩm
                </div>
                <div className="text-lg font-bold">75%</div>
              </div>
              <div className="bg-white/20 rounded-xl p-3">
                <div className="flex items-center gap-1.5 text-blue-100 text-xs mb-1">
                  <Wind className="w-3.5 h-3.5" />
                  Gió
                </div>
                <div className="text-lg font-bold">12 km/h</div>
              </div>
              <div className="bg-white/20 rounded-xl p-3">
                <div className="flex items-center gap-1.5 text-blue-100 text-xs mb-1">
                  <Eye className="w-3.5 h-3.5" />
                  Tầm nhìn
                </div>
                <div className="text-lg font-bold">8 km</div>
              </div>
              <div className="bg-white/20 rounded-xl p-3">
                <div className="flex items-center gap-1.5 text-blue-100 text-xs mb-1">
                  <Thermometer className="w-3.5 h-3.5" />
                  Cảm giác
                </div>
                <div className="text-lg font-bold">30°C</div>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-3 text-sm text-blue-100">
              <span className="flex items-center gap-1"><ArrowUp className="w-3.5 h-3.5" />32°</span>
              <span className="flex items-center gap-1"><ArrowDown className="w-3.5 h-3.5" />20°</span>
              <span>Mưa 20%</span>
            </div>
          </div>

          {/* 7-day forecast */}
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-700 mb-4">Dự báo 7 ngày</h3>
            <div className="space-y-2.5">
              {forecast.map((day) => {
                const Icon = day.icon;
                return (
                  <div key={day.day} className="flex items-center gap-3 py-1.5 cursor-pointer hover:bg-slate-50 rounded-lg px-2 -mx-2 transition-colors">
                    <span className="text-sm text-slate-500 w-12 flex-shrink-0">{day.day}</span>
                    <Icon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-xs text-slate-400 flex-1">{day.desc}</span>
                    <span className="text-xs text-blue-500">{day.rain}%</span>
                    <div className="flex items-center gap-1.5 text-sm">
                      <span className="font-semibold text-slate-800">{day.high}°</span>
                      <span className="text-slate-400">{day.low}°</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* AQI by district */}
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-700 mb-4">Chất lượng không khí theo quận</h3>
            <div className="space-y-2.5">
              {districts.map((d) => (
                <div key={d.name} className="flex items-center gap-3 py-1.5 cursor-pointer hover:bg-slate-50 rounded-lg px-2 -mx-2 transition-colors">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-800">{d.name}</div>
                  </div>
                  <span className="text-sm text-slate-500">{d.temp}°C</span>
                  <AqiBadge value={d.aqi} />
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <p className="text-xs text-slate-400">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-1"></span>0–50 Tốt &nbsp;
                <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-1"></span>51–100 TB &nbsp;
                <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mr-1"></span>101+ Xấu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
