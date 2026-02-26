"use client";

import { useState } from "react";
import {
  Menu,
  X,
  MapPin,
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";

const navItems = [
  {
    label: "Tổng quan",
    href: "#overview",
  },
  {
    label: "Tin tức & Sự kiện",
    href: "#news",
    children: ["Tin tức địa phương", "Sự kiện", "Thông báo"],
  },
  {
    label: "Môi trường",
    href: "#environment",
    children: ["Thời tiết", "Chất lượng không khí", "Cảnh báo"],
  },
  {
    label: "Quy hoạch",
    href: "#planning",
    children: ["Bản đồ quy hoạch", "Chính sách", "Dự án"],
  },
  {
    label: "Kinh tế - Xã hội",
    href: "#economy",
  },
  {
    label: "Dịch vụ công",
    href: "#services",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0 cursor-pointer">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-slate-900 leading-tight">Cổng Thông Tin</div>
              <div className="text-xs text-blue-600 font-semibold leading-tight">Hà Nội</div>
            </div>
            <div className="sm:hidden text-sm font-bold text-slate-900">Hà Nội</div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150 cursor-pointer"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                </a>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-50">
                    {item.children.map((child) => (
                      <a
                        key={child}
                        href="#"
                        className="block px-4 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150 cursor-pointer"
                      >
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150 cursor-pointer"
              aria-label="Tìm kiếm"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="relative p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150 cursor-pointer"
              aria-label="Thông báo"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-150 cursor-pointer"
            >
              Dịch vụ công
            </button>
            <button
              className="lg:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 pb-1">
              <button className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer">
                Dịch vụ công
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
