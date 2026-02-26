"use client";

import {
  FileText,
  Car,
  Home,
  GraduationCap,
  Heart,
  Building2,
  Shield,
  TreePine,
  ArrowRight,
  Star,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Đăng ký hộ khẩu",
    desc: "Đăng ký thường trú, tạm trú, thay đổi thông tin",
    color: "bg-blue-100 text-blue-600",
    popular: true,
    time: "3–5 ngày",
  },
  {
    icon: Car,
    title: "Đăng ký xe",
    desc: "Đăng ký phương tiện, cấp biển số, sang tên",
    color: "bg-orange-100 text-orange-600",
    popular: true,
    time: "1–3 ngày",
  },
  {
    icon: Home,
    title: "Cấp phép xây dựng",
    desc: "Xin giấy phép xây dựng mới và sửa chữa",
    color: "bg-emerald-100 text-emerald-600",
    popular: false,
    time: "15–20 ngày",
  },
  {
    icon: GraduationCap,
    title: "Tuyển sinh online",
    desc: "Đăng ký tuyển sinh các cấp học",
    color: "bg-violet-100 text-violet-600",
    popular: true,
    time: "Ngay lập tức",
  },
  {
    icon: Heart,
    title: "Đặt lịch khám bệnh",
    desc: "Đặt lịch trực tuyến tại các bệnh viện công",
    color: "bg-red-100 text-red-600",
    popular: true,
    time: "Ngay lập tức",
  },
  {
    icon: Building2,
    title: "Đăng ký doanh nghiệp",
    desc: "Thành lập, thay đổi, giải thể doanh nghiệp",
    color: "bg-teal-100 text-teal-600",
    popular: false,
    time: "3–5 ngày",
  },
  {
    icon: Shield,
    title: "Khai báo an ninh",
    desc: "Báo cáo sự cố, khai báo người nước ngoài",
    color: "bg-slate-100 text-slate-600",
    popular: false,
    time: "Ngay lập tức",
  },
  {
    icon: TreePine,
    title: "Cấp phép chặt cây",
    desc: "Xin phép chặt, dịch chuyển cây xanh đô thị",
    color: "bg-lime-100 text-lime-600",
    popular: false,
    time: "7–10 ngày",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Dịch vụ công trực tuyến</h2>
            <p className="text-sm text-slate-500 mt-0.5">Thực hiện thủ tục hành chính không cần đến trực tiếp</p>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium cursor-pointer transition-colors">
            Tất cả dịch vụ →
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 mb-5">
          {services.slice(0, 4).map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200 group"
              >
                <div className={`w-11 h-11 rounded-xl ${svc.color} flex items-center justify-center mb-3`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex items-start justify-between gap-1 mb-1">
                  <h3 className="text-sm font-semibold text-slate-800 leading-snug group-hover:text-blue-600 transition-colors">{svc.title}</h3>
                  {svc.popular && (
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 flex-shrink-0 mt-0.5" />
                  )}
                </div>
                <p className="text-xs text-slate-500 mb-3 leading-relaxed line-clamp-2">{svc.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">{svc.time}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-500 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
          {services.slice(4).map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200 group"
              >
                <div className={`w-11 h-11 rounded-xl ${svc.color} flex items-center justify-center mb-3`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex items-start justify-between gap-1 mb-1">
                  <h3 className="text-sm font-semibold text-slate-800 leading-snug group-hover:text-blue-600 transition-colors">{svc.title}</h3>
                  {svc.popular && (
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 flex-shrink-0 mt-0.5" />
                  )}
                </div>
                <p className="text-xs text-slate-500 mb-3 leading-relaxed line-clamp-2">{svc.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">{svc.time}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-500 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold mb-1">Cổng dịch vụ công Hà Nội</h3>
            <p className="text-blue-100 text-sm">Hơn 1,800 dịch vụ công trực tuyến mức độ 3, 4. Tiết kiệm thời gian, chi phí đi lại.</p>
          </div>
          <button className="flex-shrink-0 flex items-center gap-2 bg-white text-blue-700 font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer">
            Truy cập ngay <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
