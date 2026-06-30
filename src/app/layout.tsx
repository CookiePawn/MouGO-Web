import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "모으고 | 일상을 탐험으로",
    template: "%s | 모으고",
  },
  description:
    "카메라로 주변의 물건을 발견하고, 포획하고, 나만의 도감을 완성하는 일상 탐험 앱.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
