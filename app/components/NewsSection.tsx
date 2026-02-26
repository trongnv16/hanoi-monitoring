"use client";

import { useState } from "react";
import { Clock, ChevronRight, Tag } from "lucide-react";

const categories = ["Tất cả", "Kinh tế", "Xã hội", "Giao thông", "Y tế", "Giáo dục", "Văn hóa", "Môi trường"];

const news = [
  {
    id: 1,
    category: "Kinh tế",
    title: "Hà Nội khởi công dự án Vành đai 4 đoạn qua Đan Phượng",
    excerpt: "UBND thành phố Hà Nội tổ chức lễ khởi công dự án đường Vành đai 4 – Vùng Thủ đô đoạn qua huyện Đan Phượng với tổng mức đầu tư 3.200 tỷ đồng.",
    time: "1 giờ trước",
    district: "Đan Phượng",
    featured: true,
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
  },
  {
    id: 2,
    category: "Kinh tế",
    title: "GDP Hà Nội tăng trưởng 8.5% trong quý đầu năm",
    excerpt: "Theo số liệu từ Cục Thống kê, GRDP Hà Nội quý 1/2026 tăng 8.5% so với cùng kỳ, cao nhất trong 5 năm gần đây.",
    time: "2 giờ trước",
    district: "Toàn thành phố",
    featured: true,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
  },
  {
    id: 3,
    category: "Xã hội",
    title: "Phường Dịch Vọng Hậu ra quân xử lý lấn chiếm vỉa hè",
    excerpt: "Lực lượng chức năng phường Dịch Vọng Hậu ra quân kiểm tra, xử lý vi phạm lấn chiếm vỉa hè, lòng đường trên địa bàn.",
    time: "3 giờ trước",
    district: "Cầu Giấy",
    featured: false,
    image: null,
  },
  {
    id: 4,
    category: "Giao thông",
    title: "Thông xe cầu Vĩnh Tuy 2 vào tháng 4/2026",
    excerpt: "Ban Quản lý dự án đầu tư xây dựng công trình giao thông TP Hà Nội cho biết cầu Vĩnh Tuy giai đoạn 2 sẽ thông xe kỹ thuật vào tháng 4/2026.",
    time: "4 giờ trước",
    district: "Long Biên",
    featured: false,
    image: null,
  },
  {
    id: 5,
    category: "Giáo dục",
    title: "Hà Nội tuyển sinh lớp 10 theo hình thức thi thay vì xét tuyển",
    excerpt: "Sở GD&ĐT Hà Nội thông báo năm học 2026–2027 tiếp tục tổ chức kỳ thi tuyển sinh lớp 10 THPT với 3 môn thi.",
    time: "5 giờ trước",
    district: "Toàn thành phố",
    featured: false,
    image: null,
  },
  {
    id: 6,
    category: "Y tế",
    title: "Bệnh viện Bạch Mai mở rộng khu khám bệnh theo yêu cầu",
    excerpt: "Bệnh viện Bạch Mai chính thức khánh thành khu khám bệnh theo yêu cầu với 50 phòng khám chuyên khoa hiện đại.",
    time: "6 giờ trước",
    district: "Đống Đa",
    featured: false,
    image: null,
  },
  {
    id: 7,
    category: "Văn hóa",
    title: "Lễ hội hoa anh đào Nhật Bản – Hà Nội 2026 sẽ diễn ra vào tháng 3",
    excerpt: "UBND TP Hà Nội và Đại sứ quán Nhật Bản phối hợp tổ chức lễ hội hoa anh đào tại Công viên Thống Nhất từ ngày 20–22/3/2026.",
    time: "8 giờ trước",
    district: "Hai Bà Trưng",
    featured: false,
    image: null,
  },
];

const categoryColor: Record<string, string> = {
  "Kinh tế": "bg-emerald-100 text-emerald-700",
  "Xã hội": "bg-blue-100 text-blue-700",
  "Giao thông": "bg-orange-100 text-orange-700",
  "Y tế": "bg-red-100 text-red-700",
  "Giáo dục": "bg-violet-100 text-violet-700",
  "Văn hóa": "bg-pink-100 text-pink-700",
  "Môi trường": "bg-teal-100 text-teal-700",
};

export default function NewsSection() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filtered = activeCategory === "Tất cả"
    ? news
    : news.filter((n) => n.category === activeCategory);

  const featured = filtered.filter((n) => n.featured).slice(0, 2);
  const rest = filtered.filter((n) => !n.featured || filtered.indexOf(n) >= 2);

  return (
    <section id="news" className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-slate-900">Tin tức địa phương</h2>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium cursor-pointer transition-colors">
            Xem tất cả →
          </a>
        </div>

        {/* Category filter */}
        <div className="flex items-center gap-2 mb-5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors duration-150 cursor-pointer ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Featured news */}
          <div className="lg:col-span-2 space-y-5">
            {featured.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200 group">
                {item.image && (
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className={`absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColor[item.category] || "bg-slate-100 text-slate-600"}`}>
                      {item.category}
                    </span>
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-base font-bold text-slate-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{item.time}</span>
                      <span className="flex items-center gap-1"><Tag className="w-3.5 h-3.5" />{item.district}</span>
                    </div>
                    <button className="flex items-center gap-0.5 text-blue-600 hover:text-blue-700 font-medium cursor-pointer transition-colors">
                      Đọc thêm <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* News list */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100">
              <h3 className="text-sm font-semibold text-slate-700">Tin mới nhất</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {(rest.length > 0 ? rest : news.filter((n) => !n.featured)).map((item) => (
                <div key={item.id} className="p-4 cursor-pointer hover:bg-slate-50 transition-colors group">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColor[item.category] || "bg-slate-100 text-slate-600"}`}>
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400">{item.district}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800 leading-snug mb-1.5 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock className="w-3 h-3" />
                    {item.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
