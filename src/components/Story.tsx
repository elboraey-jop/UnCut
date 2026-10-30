"use client";

import React from "react";
import { UncutStar } from "./brand/UncutStar";
import { UniqueOvalBadge, WowForEverBadge } from "./brand/Badges";
import { Sparkle, Flame } from "@phosphor-icons/react";

export function Story() {
  return (
    <section id="story" className="py-10 sm:py-20 bg-[#F7F2EC] relative border-b border-[#DBCDBA]">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-right">
            <div className="flex items-center gap-2">
              <UniqueOvalBadge className="text-xs py-0.5 px-2.5" />
              <WowForEverBadge className="text-[10px] py-0 px-2" />
            </div>

            <h2 className="font-[family-name:var(--font-aref-ruqaa)] text-2xl sm:text-5xl font-bold text-[#191816] leading-tight">
              أكثر من مجرد ساندويتش،
              <br />
              <span className="text-[#D82229]">حكاية طعم معمول بحب وإتقان</span>
            </h2>

            <p className="font-[family-name:var(--font-alexandria)] text-xs sm:text-base text-[#57524A] leading-relaxed font-light">
              في أن كات (uncut.)، قررنا نغير مفهوم الكريب والبرجر في سمنود. تبدأ من أول ريحة التتبيلة على الجريل، لحد آخر قطمة مقرمشة ومتبلة بالصوص السري الخاص بينا.
            </p>

            {/* Side-by-side cards on Mobile & Desktop */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 pt-1">
              <div className="p-3 sm:p-4 rounded-xl bg-[#EFE7DC] border border-[#DBCDBA] text-right">
                <div className="flex items-center gap-1.5 text-[#D82229] mb-1 font-bold">
                  <Flame size={16} weight="fill" />
                  <span className="font-[family-name:var(--font-aref-ruqaa)] text-sm sm:text-lg">جريل على اللهب</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#57524A] font-[family-name:var(--font-alexandria)] leading-tight">
                  تسوية مظبوطة تحافظ على العصارة والقرمشة.
                </p>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-[#EFE7DC] border border-[#DBCDBA] text-right">
                <div className="flex items-center gap-1.5 text-[#D82229] mb-1 font-bold">
                  <Sparkle size={16} weight="fill" />
                  <span className="font-[family-name:var(--font-aref-ruqaa)] text-sm sm:text-lg">تغليف شيك ونظيف</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#57524A] font-[family-name:var(--font-alexandria)] leading-tight">
                  بوكسات تحافظ على حرارة وقرمشة الأكل.
                </p>
              </div>
            </div>
          </div>

          {/* Left Column: Visual Brand Card representing the Packaging */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl sm:rounded-3xl bg-[#D82229] p-4 sm:p-8 text-white shadow-md overflow-hidden text-center flex flex-col items-center justify-between min-h-[170px] sm:min-h-[340px]">
              {/* Background ambient stars */}
              <div className="absolute -top-4 -right-4 opacity-20">
                <UncutStar className="w-20 h-20 sm:w-32 sm:h-32 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 opacity-20">
                <UncutStar className="w-20 h-20 sm:w-32 sm:h-32 text-white" />
              </div>

              <div className="relative z-10 w-full flex items-center justify-between sm:flex-col sm:justify-start">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] sm:text-xs font-[family-name:var(--font-bebas-neue)] tracking-widest sm:mb-3">
                  uncut. PACKAGING
                </span>
                <h3 className="font-[family-name:var(--font-aref-ruqaa)] text-base sm:text-3xl font-bold">
                  إضافة جديدة لقائمة أن كات
                </h3>
              </div>

              {/* Central Star Icon */}
              <div className="relative z-10 my-2 sm:my-4 flex items-center justify-center gap-2">
                <UncutStar className="w-8 h-8 sm:w-14 sm:h-14 text-white" />
                <span className="font-[family-name:var(--font-bebas-neue)] text-xl sm:text-3xl tracking-wider uppercase">
                  CHICKEN TENDERS
                </span>
              </div>

              <div className="relative z-10 w-full pt-2 sm:pt-4 border-t border-white/20 flex items-center justify-between text-[10px] sm:text-xs font-[family-name:var(--font-alexandria)]">
                <span>سمنود • ترعة الساحل</span>
                <span className="font-[family-name:var(--font-bebas-neue)] tracking-wider text-xs sm:text-sm">
                  0100 092 2239
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
