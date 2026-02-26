"use client";

import { Calendar, MapPin, ChevronRight, Users } from "lucide-react";

const events = [
  {
    id: 1,
    date: { day: "20", month: "Tháng 3" },
    title: "Lễ hội Hoa Anh Đào Nhật Bản – Hà Nội 2026",
    location: "Công viên Thống Nhất",
    district: "Hai Bà Trưng",
    attendees: "50,000+",
    category: "Văn hóa",
    color: "bg-pink-500",
  },
  {
    id: 2,
    date: { day: "28", month: "Tháng 2" },
    title: "Hội nghị xúc tiến đầu tư Hà Nội 2026",
    location: "Trung tâm Hội nghị Quốc gia",
    district: "Nam Từ Liêm",
    attendees: "2,000+",
    category: "Kinh tế",
    color: "bg-blue-500",
  },
  {
    id: 3,
    date: { day: "5", month: "Tháng 3" },
    title: "Marathon Hà Nội 2026 – Chạy vì cộng đồng",
    location: "Hồ Hoàn Kiếm & phố đi bộ",
    district: "Hoàn Kiếm",
    attendees: "15,000+",
    category: "Thể thao",
    color: "bg-emerald-500",
  },
  {
    id: 4,
    date: { day: "8", month: "Tháng 3" },
    title: "Tuần lễ thời trang Việt Nam xuân hè 2026",
    location: "Trung tâm Văn hóa Tràng Tiền",
    district: "Hoàn Kiếm",
    attendees: "10,000+",
    category: "Văn hóa",
    color: "bg-violet-500",
  },
  {
    id: 5,
    date: { day: "15", month: "Tháng 3" },
    title: "Ngày hội giải quyết TTHC không giấy tờ",
    location: "Trụ sở UBND Thành phố",
    district: "Ba Đình",
    attendees: "Tất cả người dân",
    category: "Hành chính",
    color: "bg-orange-500",
  },
  {
    id: 6,
    date: { day: "22", month: "Tháng 3" },
    title: "Giờ Trái đất 2026 – Tắt đèn vì tương lai xanh",
    location: "Toàn thành phố",
    district: "Toàn thành phố",
    attendees: "Toàn dân",
    category: "Môi trường",
    color: "bg-teal-500",
  },
];

const categoryColor: Record<string, string> = {
  "Văn hóa": "bg-pink-100 text-pink-700",
  "Kinh tế": "bg-blue-100 text-blue-700",
  "Thể thao": "bg-emerald-100 text-emerald-700",
  "Hành chính": "bg-orange-100 text-orange-700",
  "Môi trường": "bg-teal-100 text-teal-700",
};

export default function EventsSection() {
  return (
    <section id="events" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-bold text-slate-900">Sự kiện sắp diễn ra</h2>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium cursor-pointer transition-colors">
            Xem lịch →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow duration-200 group"
            >
              <div className="flex items-start gap-4">
                {/* Date badge */}
                <div className={`${event.color} rounded-xl text-white text-center px-3 py-2 flex-shrink-0 min-w-[52px]`}>
                  <div className="text-xl font-bold leading-tight">{event.date.day}</div>
                  <div className="text-xs font-medium opacity-90 leading-tight">{event.date.month}</div>
                </div>

                <div className="flex-1 min-w-0">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColor[event.category] || "bg-slate-100 text-slate-600"} inline-block mb-2`}>
                    {event.category}
                  </span>
                  <h3 className="text-sm font-semibold text-slate-800 leading-snug mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {event.title}
                  </h3>
                  <div className="space-y-1 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{event.attendees} người tham dự</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400">{event.district}</span>
                <button className="flex items-center gap-0.5 text-xs text-blue-600 hover:text-blue-700 font-medium cursor-pointer transition-colors">
                  Xem thêm <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
