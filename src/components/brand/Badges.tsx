import React from "react";
import { UncutStar } from "./UncutStar";

interface PhonePillProps {
  phone?: string;
  className?: string;
  showIcon?: boolean;
}

/**
 * Authentic Red Pill with condensed font from the flyer
 */
export function PhonePill({
  phone = "0100 0 9 222 39",
  className = "",
}: PhonePillProps) {
  const rawPhone = "01000922239";
  return (
    <a
      href={`tel:${rawPhone}`}
      className={`inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-[#D82229] hover:bg-[#B5181E] text-white transition-all shadow-sm active:scale-95 whitespace-nowrap ${className}`}
      dir="ltr"
      title="اتصل الآن للطلب"
    >
      <UncutStar className="w-3.5 h-3.5 text-white/90" />
      <span className="font-[family-name:var(--font-bebas-neue)] text-xl tracking-[0.12em] font-bold leading-none pt-0.5">
        {phone}
      </span>
      <UncutStar className="w-3.5 h-3.5 text-white/90" />
    </a>
  );
}

/**
 * Oval "فريد من نوعه" Badge
 */
export function UniqueOvalBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center justify-center px-4 py-1 rounded-full border border-[#D82229] text-[#D82229] font-[family-name:var(--font-aref-ruqaa)] text-sm tracking-wide bg-[#D82229]/5 select-none ${className}`}
    >
      فريد من نوعه
    </div>
  );
}

/**
 * Oval "Wow For Ever" Badge
 */
export function WowForEverBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center justify-center px-3.5 py-0.5 rounded-full border border-[#D82229] text-[#D82229] font-serif italic text-xs tracking-wider select-none ${className}`}
    >
      Wow For Ever
    </div>
  );
}

/**
 * "HOME MADE in our Kitchen / فريش من مطبخنا"
 * Boxed callout from the menu
 */
export function HomeMadeBox({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-between gap-4 p-4 rounded-xl border-2 border-[#191816] bg-[#ECE3D7]/60 ${className}`}
    >
      <div className="flex flex-col text-right">
        <span className="font-[family-name:var(--font-aref-ruqaa)] text-lg font-bold text-[#191816]">
          فريش من مطبخنا ✨
        </span>
        <span className="font-[family-name:var(--font-alexandria)] text-xs text-[#57524A] mt-0.5">
          الأطعمة محضرة يومياً في مطبخ أن كات بوصفاتنا وتتبيلاتنا الخاصة
        </span>
      </div>

      <div className="border-r border-[#C4B29B] pr-4 hidden sm:flex flex-col text-left">
        <span className="font-[family-name:var(--font-bebas-neue)] text-lg tracking-wider font-bold text-[#191816] leading-tight">
          HOME MADE
        </span>
        <span className="text-[10px] uppercase tracking-widest text-[#57524A] font-medium">
          in our Kitchen
        </span>
      </div>
    </div>
  );
}
