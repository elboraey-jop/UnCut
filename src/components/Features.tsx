"use client";

import React from "react";
import { UncutStar } from "./brand/UncutStar";
import {
  DeliveryMotorcycleDoodle,
  BurgerDoodle,
  CrepeDoodle,
} from "./brand/HandDrawnDoodles";
import { Sparkle, Clock, Flame } from "@phosphor-icons/react";

export function Features() {
  return (
    <section id="features" className="py-8 sm:py-20 bg-[#EFE7DC] border-y border-[#DBCDBA] relative">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-5 sm:mb-10">
          <div className="flex items-center justify-center gap-1.5 text-[#D82229] mb-1" dir="ltr">
            <UncutStar className="w-3 h-3" />
            <span className="font-[family-name:var(--font-bebas-neue)] tracking-widest text-xs uppercase">
              WHY uncut?
            </span>
            <UncutStar className="w-3 h-3" />
          </div>
          <h2 className="font-[family-name:var(--font-aref-ruqaa)] text-2xl sm:text-4xl font-bold text-[#191816]">
            ليه تختار مطعم أن كات؟
          </h2>
          <p className="font-[family-name:var(--font-alexandria)] text-[11px] sm:text-xs text-[#57524A] mt-1 font-light">
            بساطة، طعم فريد، ونظافة تليق بزبائننا في سمنود.
          </p>
        </div>

        {/* Feature Cards: 2 on top row, 3rd centered below with the EXACT same width */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4">
          {/* Card 1: الطيار هيجيكم طيران */}
          <div className="col-span-1 p-3 sm:p-5 rounded-2xl bg-[#F7F2EC] border border-[#DBCDBA] flex flex-col justify-between hover:border-[#191816] transition-all text-right shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D82229]/10 text-[#D82229] flex items-center justify-center">
                  <Clock size={16} weight="bold" />
                </span>
                <span className="font-[family-name:var(--font-bebas-neue)] text-[9px] sm:text-[10px] tracking-wider text-[#8A8276]">
                  FAST DELIVERY
                </span>
              </div>

              <h3 className="font-[family-name:var(--font-aref-ruqaa)] text-sm sm:text-lg font-bold text-[#191816] mb-1">
                الطيار هيجيكم طيران!
              </h3>
              <p className="font-[family-name:var(--font-alexandria)] text-[10px] sm:text-xs text-[#57524A] leading-relaxed">
                دليفري فوري يوصلك الأكل سخن ومقرمش في سمنود.
              </p>
            </div>

            <div className="mt-3 pt-2.5 border-t border-[#EFE7DC] flex justify-center">
              <DeliveryMotorcycleDoodle className="w-16 h-10 sm:w-20 sm:h-12 text-[#191816]" />
            </div>
          </div>

          {/* Card 2: المذاق السري */}
          <div className="col-span-1 p-3 sm:p-5 rounded-2xl bg-[#F7F2EC] border border-[#DBCDBA] flex flex-col justify-between hover:border-[#191816] transition-all text-right shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D82229]/10 text-[#D82229] flex items-center justify-center">
                  <Sparkle size={16} weight="bold" />
                </span>
                <span className="font-[family-name:var(--font-bebas-neue)] text-[9px] sm:text-[10px] tracking-wider text-[#8A8276]">
                  SECRET RECIPES
                </span>
              </div>

              <h3 className="font-[family-name:var(--font-aref-ruqaa)] text-sm sm:text-lg font-bold text-[#191816] mb-1">
                المذاق السري لـ أن كات
              </h3>
              <p className="font-[family-name:var(--font-alexandria)] text-[10px] sm:text-xs text-[#57524A] leading-relaxed">
                صوصات وتتبيلات حصرية مبتكرة في مطبخنا.
              </p>
            </div>

            <div className="mt-3 pt-2.5 border-t border-[#EFE7DC] flex justify-center">
              <BurgerDoodle className="w-12 h-12 sm:w-16 sm:h-16 text-[#191816]" />
            </div>
          </div>

          {/* Card 3: فريش من مطبخنا (Centered underneath with EXACT same width as Card 1 & 2) */}
          <div className="col-span-2 flex justify-center sm:col-span-1 sm:block">
            <div className="w-[calc(50%-5px)] sm:w-full p-3 sm:p-5 rounded-2xl bg-[#F7F2EC] border border-[#DBCDBA] flex flex-col justify-between hover:border-[#191816] transition-all text-right shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D82229]/10 text-[#D82229] flex items-center justify-center">
                    <Flame size={16} weight="bold" />
                  </span>
                  <span className="font-[family-name:var(--font-bebas-neue)] text-[9px] sm:text-[10px] tracking-wider text-[#8A8276]">
                    100% FRESH
                  </span>
                </div>

                <h3 className="font-[family-name:var(--font-aref-ruqaa)] text-sm sm:text-lg font-bold text-[#191816] mb-1">
                  فريش من مطبخنا
                </h3>
                <p className="font-[family-name:var(--font-alexandria)] text-[10px] sm:text-xs text-[#57524A] leading-relaxed">
                  لحوم بقرية صافية، صدور دجاج طازجة، وخضروات يومية.
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[#EFE7DC] flex justify-center">
                <CrepeDoodle className="w-16 h-10 sm:w-20 sm:h-12 text-[#191816]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
