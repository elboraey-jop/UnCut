"use client";

import React, { useState, useMemo } from "react";
import {
  MENU_CATEGORIES,
  MENU_ITEMS,
  MenuItem,
} from "@/data/menu";
import { UncutStar } from "./brand/UncutStar";
import { BurgerDoodle } from "./brand/HandDrawnDoodles";
import {
  ForkKnife,
  Hamburger,
  Pizza,
  Bread,
  Plus,
  MagnifyingGlass,
  Check,
} from "@phosphor-icons/react";

function FrenchBaguetteIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2.5 12 C2.5 7.8, 21.5 7.8, 21.5 12 C21.5 16.2, 2.5 16.2, 2.5 12 Z" />
      <line x1="7.5" y1="9.5" x2="9.5" y2="14.5" />
      <line x1="11" y1="9.5" x2="13" y2="14.5" />
      <line x1="14.5" y1="9.5" x2="16.5" y2="14.5" />
    </svg>
  );
}

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, variant?: "single" | "double") => void;
}

export function MenuSection({ onAddToCart }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [addedItemId, setAddedItemId] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description &&
          item.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleAdd = (item: MenuItem, variant?: "single" | "double") => {
    onAddToCart(item, variant);
    setAddedItemId(`${item.id}-${variant || "default"}`);
    setTimeout(() => setAddedItemId(null), 1200);
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "burgers":
        return <Hamburger size={15} weight="bold" />;
      case "crepes":
        return <Pizza size={15} weight="bold" />;
      case "sandwiches":
        return <FrenchBaguetteIcon size={16} />;
      case "appetizers":
        return <ForkKnife size={15} weight="bold" />;
      default:
        return <ForkKnife size={15} weight="bold" />;
    }
  };

  return (
    <section id="menu" className="py-10 sm:py-20 bg-[#F7F2EC] relative">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-10">
          <div className="flex items-center justify-center gap-1.5 text-[#D82229] mb-1.5">
            <UncutStar className="w-3.5 h-3.5" />
            <span className="font-[family-name:var(--font-bebas-neue)] tracking-widest text-xs uppercase">
              uncut. MENU
            </span>
            <UncutStar className="w-3.5 h-3.5" />
          </div>

          <h2 className="font-[family-name:var(--font-aref-ruqaa)] text-2xl sm:text-4xl font-bold text-[#191816]">
            قائمة الطعام المميزة
          </h2>
          <p className="font-[family-name:var(--font-alexandria)] text-[11px] sm:text-xs text-[#57524A] mt-1.5 font-light">
            تصفح الأصناف واضغط على أي صنف لإضافته للطلب المباشر.
          </p>

          {/* Minimal Compact Search Bar */}
          <div className="mt-4 relative max-w-sm mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن وجبتك (برجر، كريب، صوص...)"
              className="w-full bg-[#EFE7DC] border border-[#DBCDBA] rounded-full py-1.5 sm:py-2 pr-9 pl-3 text-xs text-[#191816] placeholder-[#8A8276] focus:outline-none focus:border-[#D82229] transition-colors"
            />
            <div className="absolute top-1/2 -translate-y-1/2 right-3 text-[#8A8276]">
              <MagnifyingGlass size={15} />
            </div>
          </div>
        </div>

        {/* Categories Tabs Filter (Compact Horizontal Scroll) */}
        <div className="flex items-center justify-start md:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar select-none -mx-3.5 px-3.5 sm:mx-0 sm:px-0">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#D82229] text-white shadow-sm font-semibold scale-102"
                    : "bg-[#EFE7DC] text-[#4A453F] hover:bg-[#E4D7C5] border border-[#DBCDBA]"
                }`}
              >
                <span>{getCategoryIcon(cat.id)}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Items List */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-10 bg-[#EFE7DC]/50 rounded-xl border border-dashed border-[#DBCDBA]">
            <p className="text-[#57524A] font-[family-name:var(--font-alexandria)] text-xs">
              لا توجد أطباق تطابق بحثك حالياً.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* If burgers category is active */}
            {activeCategory === "burgers" && (
              <div className="p-3 sm:p-4 rounded-xl border border-[#DBCDBA] bg-[#EFE7DC]/70 flex items-center justify-between mb-3 text-right">
                <div className="flex items-center gap-2.5">
                  <BurgerDoodle className="w-9 h-9 sm:w-12 sm:h-12 text-[#191816] shrink-0" />
                  <div>
                    <h3 className="font-[family-name:var(--font-aref-ruqaa)] text-base sm:text-xl font-bold text-[#191816]">
                      المذاق السري للبرجر
                    </h3>
                    <p className="text-[10px] sm:text-xs text-[#57524A] font-[family-name:var(--font-alexandria)]">
                      متوفر لحم بقري مشوي أو دجاج كريسبي مقرمش
                    </p>
                  </div>
                </div>
                <span className="font-[family-name:var(--font-bebas-neue)] tracking-wider text-[10px] px-2 py-0.5 rounded bg-[#191816] text-[#F7F2EC] shrink-0">
                  100% FRESH
                </span>
              </div>
            )}

            {/* Menu Items: Compact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
              {filteredItems.map((item) => {
                const isSingleAdded = addedItemId === `${item.id}-single`;
                const isDoubleAdded = addedItemId === `${item.id}-double`;
                const isItemAdded = addedItemId === `${item.id}-default`;

                return (
                  <div
                    key={item.id}
                    className="p-3.5 sm:p-4 rounded-xl border border-[#DBCDBA] bg-[#FAF6F2] hover:bg-[#F3ECE1] hover:border-[#C4B29B] transition-all flex flex-col justify-between group text-right shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
                  >
                    <div>
                      {/* Title & Price Header */}
                      <div className="flex items-baseline justify-between gap-2">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h4 className="font-[family-name:var(--font-aref-ruqaa)] text-base sm:text-lg font-bold text-[#191816] group-hover:text-[#D82229] transition-colors">
                            {item.name}
                          </h4>
                          {item.badge && (
                            <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-[#D82229]/10 text-[#D82229] font-medium border border-[#D82229]/20">
                              {item.badge}
                            </span>
                          )}
                        </div>

                        {/* Price */}
                        <div className="flex items-baseline gap-0.5 font-[family-name:var(--font-bebas-neue)] text-lg sm:text-xl text-[#D82229] shrink-0 font-bold">
                          {item.doublePrice ? (
                            <div className="flex items-baseline gap-1">
                              <span>{item.price}</span>
                              <span className="text-[11px] font-normal text-[#8A8276]">
                                /{item.doublePrice}
                              </span>
                              <span className="font-[family-name:var(--font-alexandria)] text-[10px] text-[#191816] mr-0.5">
                                ج
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-baseline gap-0.5">
                              <span>{item.price}</span>
                              <span className="font-[family-name:var(--font-alexandria)] text-[10px] text-[#191816] mr-0.5">
                                ج
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Dotted Line */}
                      <div className="w-full border-b border-dotted border-[#DBCDBA] my-1.5" />

                      {/* Description */}
                      {item.description && (
                        <p className="font-[family-name:var(--font-alexandria)] text-[11px] text-[#57524A] leading-relaxed font-light line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* Action Row */}
                    <div className="mt-2.5 pt-2 border-t border-[#EFE7DC] flex items-center justify-between">
                      <span className="text-[10px] text-[#8A8276]">
                        {item.subCategory || "محضر طازج"}
                      </span>

                      {/* Add Buttons */}
                      {item.doublePrice ? (
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => handleAdd(item, "single")}
                            className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium transition-all cursor-pointer ${
                              isSingleAdded
                                ? "bg-emerald-600 text-white border border-emerald-600"
                                : "border border-[#DBCDBA] bg-[#EFE7DC] hover:bg-[#D82229] hover:text-white active:scale-95"
                            }`}
                          >
                            {isSingleAdded ? (
                              <>
                                <Check size={11} weight="bold" />
                                <span>تمت الإضافة</span>
                              </>
                            ) : (
                              <span>سنجل {item.price} ج</span>
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => handleAdd(item, "double")}
                            className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium transition-all cursor-pointer ${
                              isDoubleAdded
                                ? "bg-emerald-600 text-white border border-emerald-600"
                                : "border border-[#DBCDBA] bg-[#EFE7DC] hover:bg-[#D82229] hover:text-white active:scale-95"
                            }`}
                          >
                            {isDoubleAdded ? (
                              <>
                                <Check size={11} weight="bold" />
                                <span>تمت الإضافة</span>
                              </>
                            ) : (
                              <span>دبل {item.doublePrice} ج</span>
                            )}
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleAdd(item)}
                          className={`flex items-center gap-1 px-2.5 py-0.8 rounded-full text-[11px] font-medium transition-all cursor-pointer ${
                            isItemAdded
                              ? "bg-emerald-600 text-white"
                              : "bg-[#191816] hover:bg-[#D82229] text-white active:scale-95"
                          }`}
                        >
                          {isItemAdded ? (
                            <>
                              <Check size={12} weight="bold" />
                              <span>تمت الإضافة</span>
                            </>
                          ) : (
                            <>
                              <Plus size={12} weight="bold" />
                              <span>طلب</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
