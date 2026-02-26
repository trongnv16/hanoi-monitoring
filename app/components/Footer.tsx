import { MapPin, Phone, Mail, Globe } from "lucide-react";

const footerLinks = {
  "Thông tin": ["Giới thiệu", "Tổ chức bộ máy", "Sơ đồ website", "Liên hệ"],
  "Tin tức": ["Thời sự", "Kinh tế", "Xã hội", "Môi trường", "Giao thông"],
  "Dịch vụ": ["Dịch vụ công", "Lịch sử thực hiện", "Tra cứu hồ sơ", "Hỗ trợ"],
  "Quy hoạch": ["Bản đồ quy hoạch", "Bảng giá đất", "Dự án đầu tư", "Chính sách"],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold leading-tight">Cổng Thông Tin</div>
                <div className="text-xs text-blue-400 font-semibold leading-tight">Hà Nội</div>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Cổng thông tin điện tử chính thức của Thành phố Hà Nội. Cung cấp thông tin chính xác, kịp thời cho người dân và doanh nghiệp.
            </p>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>12 Lê Lai, Hoàn Kiếm, Hà Nội</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>024 3825 4521</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>info@hanoi.gov.vn</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>hanoi.gov.vn</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold mb-3">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-slate-400 hover:text-white transition-colors duration-150 cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © 2026 UBND Thành phố Hà Nội. Bản quyền thuộc về Cổng TTĐT Hà Nội.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors cursor-pointer">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white transition-colors cursor-pointer">Điều khoản sử dụng</a>
            <a href="#" className="hover:text-white transition-colors cursor-pointer">Sơ đồ site</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
