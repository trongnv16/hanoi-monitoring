"use client";

import { FileText, Map, ChevronRight, ExternalLink, BookOpen } from "lucide-react";

const policies = [
  {
    id: 1,
    tag: "Quy hoạch",
    tagColor: "bg-blue-100 text-blue-700",
    date: "2023-10-15",
    title: "Quy hoạch Thủ đô Hà Nội thời kỳ 2021–2030, tầm nhìn đến năm 2050",
    org: "Sở Quy hoạch – Kiến trúc",
    status: "Đang triển khai",
    statusColor: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    tag: "Nghị quyết",
    tagColor: "bg-violet-100 text-violet-700",
    date: "2023-09-20",
    title: "Nghị quyết về phát triển công nghiệp văn hóa trên địa bàn Thủ đô",
    org: "HĐND Thành phố",
    status: "Đã ban hành",
    statusColor: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 3,
    tag: "Kế hoạch",
    tagColor: "bg-orange-100 text-orange-700",
    date: "2023-08-05",
    title: "Kế hoạch phát triển nhà ở thành phố Hà Nội giai đoạn 2021–2025",
    org: "Sở Xây dựng",
    status: "Đang thực hiện",
    statusColor: "bg-amber-100 text-amber-700",
  },
  {
    id: 4,
    tag: "Đề án",
    tagColor: "bg-rose-100 text-rose-700",
    date: "2023-07-12",
    title: "Đề án cải tạo, xây dựng lại chung cư cũ trên địa bàn thành phố",
    org: "UBND Thành phố",
    status: "Đang triển khai",
    statusColor: "bg-blue-100 text-blue-700",
  },
  {
    id: 5,
    tag: "Quyết định",
    tagColor: "bg-teal-100 text-teal-700",
    date: "2024-01-10",
    title: "Quyết định phê duyệt chương trình phát triển đô thị thành phố Hà Nội đến 2030",
    org: "UBND Thành phố",
    status: "Có hiệu lực",
    statusColor: "bg-emerald-100 text-emerald-700",
  },
];

const goals = [
  { label: "GRDP tăng trưởng", target: "9–10%/năm", progress: 85, current: "8.5%" },
  { label: "Thu nhập bình quân", target: "7,500 USD/người", progress: 83, current: "6,200 USD" },
  { label: "Tỷ lệ đô thị hóa", target: "75%", progress: 78, current: "58%" },
  { label: "Diện tích cây xanh", target: "10m²/người", progress: 60, current: "6.0m²" },
  { label: "Dịch vụ công trực tuyến", target: "100%", progress: 72, current: "72%" },
  { label: "Tỷ lệ hộ nghèo", target: "< 0.01%", progress: 70, current: "0.03%" },
];

export default function PolicySection() {
  return (
    <section id="planning" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-violet-600" />
            <h2 className="text-xl font-bold text-slate-900">Chính sách & Quy hoạch</h2>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium cursor-pointer transition-colors">
            Xem tất cả →
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Policy list */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-700">Văn bản & Chính sách mới</h3>
              <BookOpen className="w-4 h-4 text-slate-400" />
            </div>
            <div className="divide-y divide-slate-100">
              {policies.map((p) => (
                <div key={p.id} className="p-4 cursor-pointer hover:bg-slate-50 transition-colors group">
                  <div className="flex items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1.5">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${p.tagColor}`}>{p.tag}</span>
                        <span className="text-xs text-slate-400">{p.date}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-slate-800 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                        {p.title}
                      </h3>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-xs text-slate-500">{p.org}</span>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${p.statusColor}`}>{p.status}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300 flex-shrink-0 mt-1 group-hover:text-blue-500 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {/* Map card */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow group">
              <div className="relative h-36 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <Map className="w-12 h-12 text-blue-400" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white/90 backdrop-blur-sm text-sm font-semibold text-slate-700 px-4 py-2 rounded-lg border border-slate-200">
                    Xem bản đồ
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Map className="w-4 h-4 text-blue-600" />
                  <h3 className="text-sm font-semibold text-slate-800">Bản đồ Quy hoạch</h3>
                </div>
                <p className="text-xs text-slate-500">Tra cứu bản đồ quy hoạch chung, quy hoạch phân khu tỷ lệ 1/2000, 1/500.</p>
                <button className="mt-3 flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 font-medium cursor-pointer transition-colors">
                  Xem chi tiết <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Land price */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-xs">₫</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">Bảng giá đất 2026</h3>
                  <p className="text-xs text-slate-500">Bảng giá mới nhất</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 mb-3">Tra cứu bảng giá đất theo Quyết định mới nhất của UBND thành phố.</p>
              <button className="w-full py-2 bg-amber-50 text-amber-700 rounded-lg text-xs font-semibold hover:bg-amber-100 transition-colors cursor-pointer">
                Tra cứu ngay
              </button>
            </div>

            {/* Development goals */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
              <h3 className="text-sm font-semibold text-slate-700 mb-4">Mục tiêu phát triển 2025</h3>
              <div className="space-y-3">
                {goals.slice(0, 4).map((g) => (
                  <div key={g.label}>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-600 font-medium">{g.label}</span>
                      <span className="text-slate-400">{g.current} / {g.target}</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full transition-all duration-700"
                        style={{ width: `${g.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
