"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { UncutStar } from "./brand/UncutStar";
import { UniqueOvalBadge, WowForEverBadge } from "./brand/Badges";
import { CrepeDoodle, BurgerDoodle } from "./brand/HandDrawnDoodles";
import { FloatingDoodles } from "./brand/FloatingDoodles";
import { RESTAURANT_INFO, MENU_ITEMS, MenuItem } from "@/data/menu";
import {
  ArrowDown,
  WhatsappLogo,
  Sparkle,
  PhoneCall,
  Check,
  Plus,
} from "@phosphor-icons/react";

interface HeroProps {
  onAddToCart?: (item: MenuItem, variant?: "single" | "double") => void;
  onOrderSignature?: () => void;
}

export function Hero({ onAddToCart, onOrderSignature }: HeroProps) {
  const [addedId, setAddedId] = useState<string | null>(null);

  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(
    "مساء الخير مطعم أن كات، أريد الاستفسار عن القائمة والطلب."
  )}`;

  // Curated list of signature / best-selling items for the horizontal swipe rail
  const signatureItems: MenuItem[] = [
    MENU_ITEMS.find((i) => i.id === "smoke-uncut-crepe") || MENU_ITEMS[0],
    MENU_ITEMS.find((i) => i.id === "burger-uncut-beef") || MENU_ITEMS[1],
    MENU_ITEMS.find((i) => i.id === "burger-grand-uncut") || MENU_ITEMS[6],
    MENU_ITEMS.find((i) => i.id === "item-chicken-tenders") || MENU_ITEMS[25],
    MENU_ITEMS.find((i) => i.id === "sand-sweet-chili-baguette") || MENU_ITEMS[18],
  ].filter(Boolean) as MenuItem[];

  const handleItemAdd = (item: MenuItem) => {
    if (onAddToCart) {
      onAddToCart(item);
    } else if (onOrderSignature) {
      onOrderSignature();
    }
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <section className="relative overflow-hidden kraft-paper-bg border-b border-[#DBCDBA]/80">
      {/* 1. FIRST SCREEN / FOLD: Perfectly Centered Vertically & Horizontally with Interactive Floating Doodles */}
      <div className="min-h-[calc(100dvh-5.5rem)] sm:min-h-[88vh] flex flex-col justify-center items-center py-6 px-3.5 sm:px-6 relative z-10 text-center overflow-hidden">
        {/* Interactive Motion Graphic Floating Food Doodles (Touch & Hover friendly) */}
        <FloatingDoodles />

        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center my-auto w-full relative z-10">
          {/* Top Badges Row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 sm:gap-3 mb-5 sm:mb-8"
          >
            <UniqueOvalBadge className="text-xs py-0.5 px-3" />
            <span className="text-[#C2B39E] text-xs">•</span>
            <WowForEverBadge className="text-[10px] py-0 px-2.5" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[family-name:var(--font-aref-ruqaa)] text-3xl sm:text-6xl md:text-7xl font-bold text-[#191816] tracking-tight leading-[1.25] max-w-4xl mx-auto"
          >
            قائمة الطعام الجديدة كلياً
            <br />
            <span className="text-[#D82229] font-normal inline-flex items-center gap-1.5 sm:gap-2">
              بالمذاق السري لـ أن كات
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-[family-name:var(--font-alexandria)] text-xs sm:text-base md:text-lg text-[#57524A] max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed font-light"
          >
            أصل الكريب المقرمش، البرجر المشوي على اللهب، وساندويتشات الباجيت والرول المحمص، بوصفاتنا وتتبيلاتنا الحصرية في سمنود.
          </motion.p>

          {/* Action CTA Buttons: WhatsApp + Call (Row 1), Menu centered (Row 2) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-3 sm:gap-4 mt-7 sm:mt-10 w-full"
          >
            {/* Row 1: WhatsApp + Phone Call side by side */}
            <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 w-full max-w-xs sm:max-w-sm">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border-2 border-[#D82229] text-[#D82229] hover:bg-[#D82229] hover:text-white text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-95 whitespace-nowrap"
              >
                <WhatsappLogo size={17} weight="fill" />
                <span>طلب واتساب</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border-2 border-[#191816] text-[#191816] hover:bg-[#191816] hover:text-white text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-95 whitespace-nowrap"
              >
                <PhoneCall size={16} weight="fill" />
                <span>اتصل للطلب</span>
              </a>
            </div>

            {/* Row 2: Menu Button Centered Underneath (Solid Black) */}
            <a
              href="#menu"
              className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-[#191816] hover:bg-[#333] text-[#F7F2EC] text-xs sm:text-sm font-medium transition-all shadow-sm active:scale-95 group"
            >
              <span>المنيو</span>
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* 2. SECOND SCREEN / FOLD: Signature Best-Sellers (Visible on Scroll) - Same Kraft Paper BG */}
      <div className="py-12 sm:py-20 border-t border-[#DBCDBA]/80 bg-[#F7F2EC] kraft-paper-bg relative">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14 text-right">
          {/* Section Header above cards */}
          <div className="w-full flex items-center justify-between mb-4 sm:mb-6 px-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D82229] animate-pulse" />
              <h3 className="font-[family-name:var(--font-aref-ruqaa)] text-xl sm:text-3xl font-bold text-[#191816]">
                الأطباق الأكثر طلباً
              </h3>
              <span className="text-[10px] font-semibold text-[#D82229] bg-[#D82229]/10 px-2 py-0.5 rounded-full border border-[#D82229]/20 hidden sm:inline-block">
                توقيع أن كات ★
              </span>
            </div>

            <div className="flex items-center gap-1 text-[11px] text-[#8A8276] font-[family-name:var(--font-alexandria)]">
              <span>اسحب للتصفح</span>
              <span className="font-sans">←</span>
            </div>
          </div>

          {/* Horizontal Swipeable Cards Rail */}
          <div className="w-full flex gap-3.5 sm:gap-4 lg:gap-5 overflow-x-auto snap-x snap-mandatory pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
            {signatureItems.map((item) => {
              const isAdded = addedId === item.id;
              return (
                <div
                  key={item.id}
                  className="w-[84vw] max-w-[340px] sm:w-[350px] lg:w-[370px] shrink-0 snap-center relative rounded-2xl border-2 border-[#191816] bg-[#EFE7DC] p-3.5 sm:p-5 shadow-sm flex flex-col justify-between text-right transition-transform overflow-hidden"
                >
                  <div className="min-w-0">
                    {/* Top Bar inside Card */}
                    <div className="flex items-center justify-between border-b border-[#D8C7B2] pb-2 sm:pb-2.5 mb-2 sm:mb-2.5 gap-1.5 min-w-0">
                      <div className="flex items-center gap-1.5 min-w-0 flex-1 overflow-hidden">
                        <span className="font-[family-name:var(--font-bebas-neue)] tracking-wider text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded bg-[#D82229] text-white shrink-0">
                          {item.badge || "SIGNATURE"}
                        </span>
                        <h4
                          className={`font-[family-name:var(--font-aref-ruqaa)] font-bold text-[#191816] truncate ${
                            item.name.length > 20
                              ? "text-sm sm:text-base"
                              : "text-base sm:text-lg"
                          }`}
                          title={item.name}
                        >
                          {item.name}
                        </h4>
                      </div>

                      {/* 5 Stars */}
                      <div className="flex items-center gap-0.5 text-[#D82229] shrink-0">
                        {[...Array(5)].map((_, i) => (
                          <UncutStar key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        ))}
                      </div>
                    </div>

                    {/* Ingredients / Description */}
                    <p
                      className={`font-[family-name:var(--font-alexandria)] text-[#4A453F] leading-relaxed mb-2 sm:mb-2.5 break-words ${
                        item.id === "item-chicken-tenders" || item.description.length > 80
                          ? "text-[11px] sm:text-xs line-clamp-3"
                          : "text-xs line-clamp-3"
                      }`}
                    >
                      {item.description}
                    </p>

                    {/* Highlight Pill */}
                    <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] text-[#D82229] font-medium pb-1.5 sm:pb-2 min-w-0">
                      <Sparkle size={13} weight="fill" className="shrink-0" />
                      <span className="truncate">
                        {item.category === "crepes"
                          ? "الوصفة الأكثر طلباً في كريب أن كات"
                          : item.category === "burgers"
                          ? "مشوي على اللهب 100% لحم بقري صافي"
                          : "متبل بخلطة وتتبيلة أن كات السرية"}
                      </span>
                    </div>
                  </div>

                  {/* Price & Add to Cart Action Row */}
                  <div className="pt-3 border-t border-[#D8C7B2] flex items-center justify-between">
                    <div className="flex items-baseline gap-0.5 font-[family-name:var(--font-bebas-neue)] text-2xl text-[#D82229] font-bold">
                      <span>{item.price}</span>
                      <span className="font-[family-name:var(--font-aref-ruqaa)] text-xs text-[#191816] mr-1">
                        جنيه
                      </span>
                    </div>

                    <button
                      onClick={() => handleItemAdd(item)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-all active:scale-95 shadow-sm flex items-center gap-1.5 cursor-pointer ${
                        isAdded
                          ? "bg-emerald-600 text-white"
                          : "bg-[#D82229] hover:bg-[#B5181E] text-white"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check size={14} weight="bold" />
                          <span>تمت الإضافة</span>
                        </>
                      ) : (
                        <>
                          <Plus size={13} weight="bold" />
                          <span>أضف للطلب</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
