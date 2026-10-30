import type { Metadata, Viewport } from "next";
import { Aref_Ruqaa, Alexandria, Marhey, Bebas_Neue } from "next/font/google";
import "./globals.css";

const arefRuqaa = Aref_Ruqaa({
  variable: "--font-aref-ruqaa",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const marhey = Marhey({
  variable: "--font-marhey",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#D82229",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "مطعم أن كات | uncut. - للكريب والساندويتش والبرجر",
  description: "مطعم أن كات بسمنود - الطعم السري، فريش من مطبخنا. أشهى أنواع الكريب، البرجر، وساندويتشات الباجيت والرول بخلطاتنا الحصرية. الطيار هيجيكم طيران!",
  keywords: ["أن كات", "uncut", "مطعم أن كات", "كريب سمنود", "برجر سمنود", "ساندويتشات سمنود"],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "مطعم أن كات | uncut. - سمنود",
    description: "فريد من نوعه - فريش من مطبخنا. تصفح المنيو واطلب الآن.",
    type: "website",
    locale: "ar_EG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${arefRuqaa.variable} ${alexandria.variable} ${marhey.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F2EC] text-[#191816] selection:bg-[#D82229] selection:text-white">
        {children}
      </body>
    </html>
  );
}
