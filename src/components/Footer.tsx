"use client";

import React from "react";
import { UncutLogo } from "./brand/UncutLogo";
import { UncutStar } from "./brand/UncutStar";
import { PhonePill } from "./brand/Badges";
import { RESTAURANT_INFO } from "@/data/menu";
import {
  MapPin,
  Clock,
  InstagramLogo,
  WhatsappLogo,
  Phone,
  Motorcycle,
} from "@phosphor-icons/react";

export function Footer() {
  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(
    "مرحباً مطعم أن كات، أريد معرفة أوقات العمل والطلب."
  )}`;

  return (
    <footer id="location" className="bg-[#191816] text-[#F7F2EC] relative overflow-hidden">
      {/* Top Banner Strip repeating the classic flyer footer */}
      <div className="w-full bg-[#D82229] py-2 px-3 text-center text-[11px] sm:text-xs text-white font-medium tracking-wide">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3">
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <UncutStar className="w-3 h-3 text-white shrink-0" />
            <span>سمنود، شارع ترعة الساحل بجوار المطافي</span>
            <UncutStar className="w-3 h-3 text-white shrink-0 sm:hidden" />
          </div>

          <span className="hidden sm:inline-block opacity-60">•</span>

          <div className="flex items-center gap-1.5 whitespace-nowrap" dir="ltr">
            <UncutStar className="w-3 h-3 text-white shrink-0" />
            <span className="font-[family-name:var(--font-bebas-neue)] tracking-widest text-sm sm:text-base leading-none pt-0.5">
              0100 092 2239
            </span>
            <UncutStar className="w-3 h-3 text-white shrink-0" />
          </div>
        </div>
      </div>

      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14 pt-8 sm:pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <UncutLogo variant="light" size="lg" />
            <p className="font-[family-name:var(--font-alexandria)] text-xs text-[#A8A29E] leading-relaxed max-w-sm mt-3">
              مطعم أن كات بسمنود؛ رواد الكريب المقرمش، البرجر المحضر على الفحم، وساندويتشات الباجيت الطازجة بوصفاتنا الخاصة فريش من مطبخنا.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/uncutwow"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D82229] text-white flex items-center justify-center transition-all"
                title="إنستجرام"
              >
                <InstagramLogo size={18} />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-all"
                title="واتساب"
              >
                <WhatsappLogo size={18} />
              </a>

              <a
                href="tel:01000922239"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D82229] text-white flex items-center justify-center transition-all"
                title="اتصال هاتفي"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Location & Delivery */}
          <div className="md:col-span-4 space-y-4 text-right">
            <h4 className="font-[family-name:var(--font-aref-ruqaa)] text-xl font-bold text-[#F7F2EC]">
              العنوان ومناطق التوصيل
            </h4>
            <div className="space-y-3 text-xs text-[#A8A29E] font-[family-name:var(--font-alexandria)]">
              <div className="flex items-start gap-2.5">
                <MapPin size={18} className="text-[#D82229] shrink-0 mt-0.5" />
                <span>
                  سمنود، شارع ترعة الساحل بجوار وحدة المطافي، محافظة الغربية.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Motorcycle size={18} className="text-[#D82229] shrink-0 mt-0.5" />
                <span>
                  توصيل فوري لجميع مناطق سمنود والقرى المجاورة.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock size={18} className="text-[#D82229] shrink-0 mt-0.5" />
                <span>
                  يومياً من الساعة 1:00 ظهراً حتى 3:00 فجراً.
                </span>
              </div>
            </div>
          </div>

          {/* Col 3: Direct Call & Action */}
          <div className="md:col-span-3 space-y-4 text-right">
            <h4 className="font-[family-name:var(--font-aref-ruqaa)] text-xl font-bold text-[#F7F2EC]">
              للطلب والدليفري
            </h4>
            <p className="text-xs text-[#A8A29E] font-[family-name:var(--font-alexandria)]">
              اتصل الآن وسيصلك الطيار بأسرع وقت:
            </p>

            <div className="pt-1">
              <PhonePill phone="0100 092 2239" className="whitespace-nowrap inline-flex" />
            </div>

            <div className="pt-2 text-[11px] text-[#A8A29E]/80">
              تابعنا على إنستجرام: <span className="text-[#D82229] font-medium font-sans">@uncutwow</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A8276] gap-3">
          <p>© 2026 مطعم أن كات uncut. - جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-2">
            <span>فريد من نوعه</span>
            <span>•</span>
            <span>فريش من مطبخنا</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
