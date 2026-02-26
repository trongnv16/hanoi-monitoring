"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const grdpData = [
  { year: "2019", value: 8.9 },
  { year: "2020", value: 4.2 },
  { year: "2021", value: 5.1 },
  { year: "2022", value: 9.0 },
  { year: "2023", value: 7.8 },
  { year: "2024", value: 8.5 },
];

const populationData = [
  { district: "Hoàng Mai", pop: 520 },
  { district: "Đống Đa", pop: 420 },
  { district: "Cầu Giấy", pop: 390 },
  { district: "Bắc Từ Liêm", pop: 380 },
  { district: "Nam Từ Liêm", pop: 360 },
  { district: "Hai Bà Trưng", pop: 310 },
];

const economyStructure = [
  { name: "Dịch vụ", value: 65, color: "#3B82F6" },
  { name: "Công nghiệp", value: 22, color: "#10B981" },
  { name: "Xây dựng", value: 8, color: "#F59E0B" },
  { name: "Nông nghiệp", value: 5, color: "#6366F1" },
];

const kpis = [
  { label: "Dân số", value: "8.5M", sub: "người (2024)", color: "text-blue-600" },
  { label: "GRDP/người", value: "$6,200", sub: "USD/năm (2024)", color: "text-emerald-600" },
  { label: "Thu ngân sách", value: "372K tỷ", sub: "VNĐ (2024)", color: "text-violet-600" },
  { label: "Tỷ lệ hộ nghèo", value: "0.03%", sub: "giảm 0.02%/năm", color: "text-orange-600" },
  { label: "Bác sĩ/1000 dân", value: "14.5", sub: "bác sĩ", color: "text-red-600" },
  { label: "Doanh nghiệp", value: "375K", sub: "đang hoạt động", color: "text-teal-600" },
];

export default function EconomySection() {
  return (
    <section id="economy" className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-slate-900">Kinh tế – Xã hội</h2>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium cursor-pointer transition-colors">
            Báo cáo đầy đủ →
          </a>
        </div>

        {/* KPI strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-5">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm text-center">
              <div className={`text-2xl font-bold ${kpi.color} mb-0.5`}>{kpi.value}</div>
              <div className="text-xs font-medium text-slate-700">{kpi.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{kpi.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* GRDP Chart */}
          <div className="lg:col-span-1 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-700 mb-4">Tăng trưởng GRDP (%)</h3>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={grdpData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                <XAxis dataKey="year" tick={{ fontSize: 11, fill: "#94A3B8" }} />
                <YAxis tick={{ fontSize: 11, fill: "#94A3B8" }} domain={[0, 12]} />
                <Tooltip
                  contentStyle={{ borderRadius: "12px", border: "1px solid #E2E8F0", fontSize: 12 }}
                  formatter={(value) => [`${value ?? ""}%`, "GRDP"]}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3B82F6"
                  strokeWidth={2.5}
                  fill="url(#grdpGrad)"
                  dot={{ r: 4, fill: "#3B82F6", stroke: "#fff", strokeWidth: 2 }}
                />
                <defs>
                  <linearGradient id="grdpGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Population by district */}
          <div className="lg:col-span-1 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-700 mb-4">Dân số theo quận (nghìn người)</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={populationData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                <XAxis dataKey="district" tick={{ fontSize: 9, fill: "#94A3B8" }} />
                <YAxis tick={{ fontSize: 11, fill: "#94A3B8" }} />
                <Tooltip
                  contentStyle={{ borderRadius: "12px", border: "1px solid #E2E8F0", fontSize: 12 }}
                  formatter={(value) => [`${value ?? ""}K`, "Dân số"]}
                />
                <Bar dataKey="pop" fill="#3B82F6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Economy structure */}
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-700 mb-4">Cơ cấu kinh tế 2024</h3>
            <div className="flex items-center gap-4">
              <ResponsiveContainer width={140} height={140}>
                <PieChart>
                  <Pie
                    data={economyStructure}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={65}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {economyStructure.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ borderRadius: "12px", border: "1px solid #E2E8F0", fontSize: 12 }}
                    formatter={(value) => [`${value ?? ""}%`]}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 flex-1">
                {economyStructure.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: item.color }} />
                    <span className="text-xs text-slate-600 flex-1">{item.name}</span>
                    <span className="text-xs font-bold text-slate-800">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-3">
              <div className="bg-blue-50 rounded-xl p-3 text-center">
                <div className="text-lg font-bold text-blue-700">2.94B</div>
                <div className="text-xs text-blue-500">FDI (USD)</div>
              </div>
              <div className="bg-emerald-50 rounded-xl p-3 text-center">
                <div className="text-lg font-bold text-emerald-700">400</div>
                <div className="text-xs text-emerald-500">Dự án FDI mới</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
