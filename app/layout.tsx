import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cổng Thông Tin Hà Nội",
  description: "Cổng thông tin điện tử Thành phố Hà Nội – Thông tin mới nhất về thời tiết, chất lượng không khí, tin tức, sự kiện và phát triển đô thị.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} font-sans antialiased bg-slate-50`}>
        {children}
      </body>
    </html>
  );
}
