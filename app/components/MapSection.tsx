"use client";

import { useEffect, useRef, useState } from "react";
import { Layers, Thermometer, Wind, Eye, Droplets, MapPin, X } from "lucide-react";

const mapPoints = [
  {
    id: 1,
    name: "Hoàn Kiếm",
    lat: 21.0285,
    lng: 105.8542,
    temp: 28,
    aqi: 65,
    humidity: 72,
    wind: 12,
    visibility: 9,
    weather: "Nhiều mây",
    type: "station",
  },
  {
    id: 2,
    name: "Ba Đình",
    lat: 21.0378,
    lng: 105.8340,
    temp: 27,
    aqi: 72,
    humidity: 74,
    wind: 10,
    visibility: 8,
    weather: "Nhiều mây",
    type: "station",
  },
  {
    id: 3,
    name: "Đống Đa",
    lat: 21.0195,
    lng: 105.8390,
    temp: 28,
    aqi: 88,
    humidity: 76,
    wind: 9,
    visibility: 7,
    weather: "Mây mù nhẹ",
    type: "station",
  },
  {
    id: 4,
    name: "Cầu Giấy",
    lat: 21.0333,
    lng: 105.7882,
    temp: 29,
    aqi: 55,
    humidity: 70,
    wind: 14,
    visibility: 10,
    weather: "Nắng nhẹ",
    type: "station",
  },
  {
    id: 5,
    name: "Hoàng Mai",
    lat: 20.9873,
    lng: 105.8651,
    temp: 28,
    aqi: 112,
    humidity: 78,
    wind: 8,
    visibility: 6,
    weather: "Ô nhiễm nhẹ",
    type: "station",
  },
  {
    id: 6,
    name: "Thanh Xuân",
    lat: 20.9998,
    lng: 105.8080,
    temp: 27,
    aqi: 78,
    humidity: 75,
    wind: 11,
    visibility: 8,
    weather: "Nhiều mây",
    type: "station",
  },
  {
    id: 7,
    name: "Long Biên",
    lat: 21.0455,
    lng: 105.8912,
    temp: 28,
    aqi: 60,
    humidity: 71,
    wind: 13,
    visibility: 10,
    weather: "Nắng nhẹ",
    type: "station",
  },
  {
    id: 8,
    name: "Nam Từ Liêm",
    lat: 21.0100,
    lng: 105.7700,
    temp: 29,
    aqi: 52,
    humidity: 69,
    wind: 15,
    visibility: 11,
    weather: "Nắng đẹp",
    type: "station",
  },
];

const layerOptions = [
  { id: "weather", label: "Thời tiết", icon: Thermometer },
  { id: "aqi", label: "Chất lượng KK", icon: Wind },
];

function getAqiColor(aqi: number) {
  if (aqi <= 50) return { bg: "#22C55E", text: "Tốt", ring: "#16A34A" };
  if (aqi <= 100) return { bg: "#EAB308", text: "Trung bình", ring: "#CA8A04" };
  if (aqi <= 150) return { bg: "#F97316", text: "Kém", ring: "#EA580C" };
  return { bg: "#EF4444", text: "Xấu", ring: "#DC2626" };
}

function getAqiBg(aqi: number) {
  if (aqi <= 50) return "bg-green-100 text-green-700";
  if (aqi <= 100) return "bg-yellow-100 text-yellow-700";
  if (aqi <= 150) return "bg-orange-100 text-orange-700";
  return "bg-red-100 text-red-700";
}

type MapPoint = typeof mapPoints[0];

export default function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<import("leaflet").Map | null>(null);
  const markersRef = useRef<import("leaflet").Marker[]>([]);
  const [activeLayer, setActiveLayer] = useState<"weather" | "aqi">("weather");
  const [selectedPoint, setSelectedPoint] = useState<MapPoint | null>(null);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || mapInstanceRef.current) return;

    import("leaflet").then((L) => {
      // Fix default icon paths for Next.js
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current!, {
        center: [21.0245, 105.8412],
        zoom: 13,
        zoomControl: false,
        attributionControl: true,
      });

      L.control.zoom({ position: "bottomright" }).addTo(map);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      mapInstanceRef.current = map;
      setMapReady(true);
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapReady || !mapInstanceRef.current) return;

    import("leaflet").then((L) => {
      // Remove existing markers
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];

      mapPoints.forEach((point) => {
        const aqiInfo = getAqiColor(point.aqi);

        const iconHtml =
          activeLayer === "aqi"
            ? `<div style="
                background:${aqiInfo.bg};
                border:2px solid ${aqiInfo.ring};
                color:#fff;
                border-radius:12px;
                padding:5px 10px;
                display:flex;flex-direction:column;
                align-items:center;justify-content:center;
                font-size:11px;font-weight:700;
                box-shadow:0 3px 10px rgba(0,0,0,0.25);
                cursor:pointer;
                white-space:nowrap;
                min-width:72px;
              ">
                <span style="font-size:9px;font-weight:600;opacity:0.9;margin-bottom:1px">${point.name}</span>
                <span style="font-size:14px;font-weight:800">AQI ${point.aqi}</span>
                <span style="font-size:9px;font-weight:600;opacity:0.9">${aqiInfo.text}</span>
              </div>`
            : `<div style="
                background:#2563EB;
                border:2px solid #1D4ED8;
                color:#fff;
                border-radius:12px;
                padding:5px 10px;
                display:flex;flex-direction:column;
                align-items:center;justify-content:center;
                font-size:11px;font-weight:700;
                box-shadow:0 3px 10px rgba(0,0,0,0.25);
                cursor:pointer;
                white-space:nowrap;
                min-width:72px;
              ">
                <span style="font-size:9px;font-weight:600;opacity:0.85;margin-bottom:1px">${point.name}</span>
                <span style="font-size:16px;font-weight:800;line-height:1.1">${point.temp}°C</span>
                <span style="font-size:9px;font-weight:500;opacity:0.8">${point.weather}</span>
              </div>`;

        const icon = L.divIcon({
          html: iconHtml,
          className: "",
          iconSize: [76, 52],
          iconAnchor: [38, 26],
        });

        const marker = L.marker([point.lat, point.lng], { icon }).addTo(mapInstanceRef.current!);

        marker.on("click", () => {
          setSelectedPoint(point);
        });

        markersRef.current.push(marker);
      });
    });
  }, [mapReady, activeLayer]);

  return (
    <section id="map" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-bold text-slate-900">Bản đồ thời tiết & Môi trường</h2>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium cursor-pointer transition-colors">
            Xem toàn màn hình →
          </a>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm" style={{ height: 480 }}>
          {/* Loading placeholder */}
          {!mapReady && (
            <div className="absolute inset-0 bg-slate-100 flex items-center justify-center z-10">
              <div className="text-center">
                <div className="w-10 h-10 border-3 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" style={{ borderWidth: 3 }} />
                <p className="text-sm text-slate-500">Đang tải bản đồ...</p>
              </div>
            </div>
          )}
          {/* Map container */}
          <div ref={mapRef} className="w-full h-full" />

          {/* Layer toggle – floating top-left */}
          <div className="absolute top-4 left-4 z-[1000] flex gap-2">
            {layerOptions.map((layer) => {
              const Icon = layer.icon;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id as "weather" | "aqi")}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold shadow-md transition-colors duration-150 cursor-pointer ${
                    activeLayer === layer.id
                      ? "bg-blue-600 text-white"
                      : "bg-white text-slate-700 hover:bg-blue-50 border border-slate-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {layer.label}
                </button>
              );
            })}
          </div>

          {/* AQI Legend */}
          {activeLayer === "aqi" && (
            <div className="absolute bottom-8 left-4 z-[1000] bg-white/95 backdrop-blur-sm rounded-xl shadow-md border border-slate-200 px-3 py-2.5">
              <p className="text-xs font-semibold text-slate-600 mb-1.5">Chỉ số AQI</p>
              <div className="space-y-1">
                {[
                  { color: "#22C55E", label: "0–50: Tốt" },
                  { color: "#EAB308", label: "51–100: Trung bình" },
                  { color: "#F97316", label: "101–150: Kém" },
                  { color: "#EF4444", label: ">150: Xấu" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                    <span className="text-xs text-slate-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Station detail popup */}
          {selectedPoint && (
            <div className="absolute top-4 right-4 z-[1000] w-64 bg-white/98 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-white/80" />
                  <span className="text-white font-bold text-sm">{selectedPoint.name}</span>
                </div>
                <button
                  onClick={() => setSelectedPoint(null)}
                  className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5 text-white" />
                </button>
              </div>

              {/* Weather info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-3xl font-bold text-slate-900">{selectedPoint.temp}°C</div>
                    <div className="text-sm text-slate-500">{selectedPoint.weather}</div>
                  </div>
                  <div className={`px-2.5 py-1 rounded-xl text-sm font-bold ${getAqiBg(selectedPoint.aqi)}`}>
                    AQI {selectedPoint.aqi}
                    <div className="text-xs font-medium">{getAqiColor(selectedPoint.aqi).text}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-slate-50 rounded-xl p-2.5 flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500">Độ ẩm</div>
                      <div className="text-sm font-bold text-slate-800">{selectedPoint.humidity}%</div>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-2.5 flex items-center gap-2">
                    <Wind className="w-4 h-4 text-teal-500 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500">Gió</div>
                      <div className="text-sm font-bold text-slate-800">{selectedPoint.wind} km/h</div>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-2.5 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-violet-500 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500">Tầm nhìn</div>
                      <div className="text-sm font-bold text-slate-800">{selectedPoint.visibility} km</div>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-2.5 flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500">Cảm giác</div>
                      <div className="text-sm font-bold text-slate-800">{selectedPoint.temp + 2}°C</div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Cập nhật: 08:00 hôm nay</span>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Trực tuyến
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Leaflet CSS overrides */}
          <style>{`
            .leaflet-container { background: #EFF6FF; font-family: inherit; }
            .leaflet-control-attribution { font-size: 10px !important; background: rgba(255,255,255,0.8) !important; }
            .leaflet-control-zoom {
              border: 1px solid #E2E8F0 !important;
              box-shadow: 0 2px 12px rgba(0,0,0,0.12) !important;
              border-radius: 12px !important;
              overflow: hidden;
              margin-bottom: 16px !important;
              margin-right: 16px !important;
            }
            .leaflet-control-zoom a {
              width: 36px !important;
              height: 36px !important;
              line-height: 36px !important;
              font-size: 18px !important;
              color: #334155 !important;
              background: white !important;
            }
            .leaflet-control-zoom a:hover { background: #F1F5F9 !important; color: #2563EB !important; }
          `}</style>
        </div>

        {/* Stats strip below map */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {mapPoints.map((point) => (
            <button
              key={point.id}
              onClick={() => setSelectedPoint(point)}
              className="bg-white rounded-xl border border-slate-100 shadow-sm p-3 text-left cursor-pointer hover:border-blue-300 hover:shadow-md transition-all duration-150 group"
            >
              <div className="text-xs font-semibold text-slate-700 mb-1 group-hover:text-blue-600 transition-colors truncate">{point.name}</div>
              <div className="text-lg font-bold text-slate-900">{point.temp}°C</div>
              <div className={`text-xs font-semibold mt-0.5 inline-block px-1.5 py-0.5 rounded-full ${getAqiBg(point.aqi)}`}>
                AQI {point.aqi}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
