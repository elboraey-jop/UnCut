"use client";

import React, { useState, useMemo } from "react";
import {
  MENU_CATEGORIES,
  MENU_ITEMS,
  MenuItem,
} from "@/data/menu";
import { UncutStar } from "./brand/UncutStar";
import {
  ForkKnife,
  Hamburger,
  Pizza,
  Plus,
  MagnifyingGlass,
  Check,
} from "@phosphor-icons/react";

// 1. Mini Burger Icon
function ItemBurgerIcon({ className = "w-3.5 h-3.5 text-[#D82229]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 11 C4 6 20 6 20 11 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M3 13.5 Q8 15.5 12 13.5 Q16 15.5 21 13.5" strokeWidth="2.2" />
      <rect x="4" y="14.5" width="16" height="2.5" rx="1.2" fill="currentColor" />
      <path d="M5 18.5 C5 21 19 21 19 18.5 Z" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}

// 2. Mini Crepe Cone Icon
function ItemCrepeIcon({ className = "w-3.5 h-3.5 text-[#D82229]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 6 L12 21 L20 6 Q12 9 4 6 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M4 6 L12 21 L16 11 Q10 8 4 6 Z" fill="currentColor" fillOpacity="0.25" />
      <path d="M7 6 C7.5 3.5 10 3.5 11 6" strokeWidth="1.8" />
      <path d="M13 6 C14 3.5 16.5 3.5 17 6" strokeWidth="1.8" />
      <line x1="9" y1="11" x2="13" y2="13" strokeWidth="1.6" />
    </svg>
  );
}

// 3. Mini French Baguette Icon
function ItemBaguetteIcon({ className = "w-3.5 h-3.5 text-[#D82229]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 12 C3 7.5 21 7.5 21 12 C21 16.5 3 16.5 3 12 Z" fill="currentColor" fillOpacity="0.12" />
      <line x1="7.5" y1="9" x2="9.5" y2="15" strokeWidth="2.2" />
      <line x1="11" y1="9" x2="13" y2="15" strokeWidth="2.2" />
      <line x1="14.5" y1="9" x2="16.5" y2="15" strokeWidth="2.2" />
    </svg>
  );
}

// 4. Mini Roll / Wrap / Shawarma Icon (Distinct from baguette - sliced wrap with spiral fold!)
function ItemRollIcon({ className = "w-3.5 h-3.5 text-[#D82229]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Sliced top opening of the rolled flatbread */}
      <ellipse cx="14" cy="5.5" rx="5" ry="2.5" transform="rotate(-20 14 5.5)" fill="currentColor" fillOpacity="0.25" />
      {/* Spiral filling */}
      <path d="M12.5 5 Q14 4 15.5 5.5 Q14 7 13.5 5.5" strokeWidth="1.6" />
      {/* Rolled cylinder body */}
      <path d="M8.5 7 L5 17.5 C4.5 19 6 20 7.5 19.5 L17 15.5 C18.5 15 19 13.5 18.5 12 L17 8" fill="currentColor" fillOpacity="0.1" />
      {/* Toasted seams on wrap */}
      <line x1="8" y1="12" x2="13.5" y2="10" strokeWidth="1.5" strokeDasharray="1.5 1.5" />
      <line x1="7.5" y1="16" x2="13" y2="14" strokeWidth="1.5" />
    </svg>
  );
}

// 5. Mini French Fries Box Icon
function ItemFriesIcon({ className = "w-3.5 h-3.5 text-[#D82229]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="7" y1="4" x2="7" y2="10" strokeWidth="2.2" />
      <line x1="10" y1="2.5" x2="10" y2="10" strokeWidth="2.6" />
      <line x1="13.5" y1="3.5" x2="13.5" y2="10" strokeWidth="2.2" />
      <line x1="16.5" y1="5.5" x2="16.5" y2="10" strokeWidth="2.2" />
      <path d="M5 10 L7 20 L17 20 L19 10 C15 12.5 9 12.5 5 10 Z" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}

// 6. Mini Chicken Tenders Icon
function ItemTendersIcon({ className = "w-3.5 h-3.5 text-[#D82229]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 16 C3.5 11 6.5 5 12.5 6 C17.5 7 20 11.5 18 16 C16 19.5 8.5 20 6 16 Z" fill="currentColor" fillOpacity="0.15" />
      <circle cx="10" cy="11" r="1" fill="currentColor" />
      <circle cx="14" cy="12.5" r="1" fill="currentColor" />
      <circle cx="9" cy="15" r="1" fill="currentColor" />
    </svg>
  );
}

// 7. Mini Mozzarella Sticks Icon
function ItemCheeseSticksIcon({ className = "w-3.5 h-3.5 text-[#D82229]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="6" width="15" height="4.5" rx="2.2" fill="currentColor" fillOpacity="0.15" transform="rotate(-15 11.5 8)" />
      <rect x="5" y="14" width="15" height="4.5" rx="2.2" fill="currentColor" fillOpacity="0.15" transform="rotate(10 12.5 16)" />
    </svg>
  );
}

// 8. Mini Onion Rings Icon
function ItemOnionRingsIcon({ className = "w-3.5 h-3.5 text-[#D82229]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="6" fill="currentColor" fillOpacity="0.1" />
      <circle cx="10" cy="10" r="3" />
      <circle cx="15" cy="14" r="5" fill="currentColor" fillOpacity="0.15" />
      <circle cx="15" cy="14" r="2.5" />
    </svg>
  );
}

// 9. Mini Sauce & Coleslaw Cup Icon
function ItemSauceBowlIcon({ className = "w-3.5 h-3.5 text-[#D82229]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="12" cy="9" rx="8" ry="3" fill="currentColor" fillOpacity="0.2" />
      <path d="M4 9 C4 16 20 16 20 9" />
      <line x1="8" y1="18" x2="16" y2="18" strokeWidth="2.5" />
      <path d="M14 4 L11 9" strokeWidth="1.8" />
    </svg>
  );
}

// Function to resolve specific item icon
function getItemIcon(item: MenuItem) {
  if (item.category === "burgers") {
    return <ItemBurgerIcon className="w-3.5 h-3.5 text-[#D82229]" />;
  }
  if (item.category === "crepes") {
    return <ItemCrepeIcon className="w-3.5 h-3.5 text-[#D82229]" />;
  }
  if (item.category === "sandwiches") {
    if (
      item.subCategory?.includes("رول") ||
      item.name.includes("رول") ||
      item.id.includes("roll")
    ) {
      return <ItemRollIcon className="w-3.5 h-3.5 text-[#D82229]" />;
    }
    return <ItemBaguetteIcon className="w-3.5 h-3.5 text-[#D82229]" />;
  }
  if (item.category === "appetizers") {
    if (item.id === "item-chicken-tenders" || item.name.includes("تندرز")) {
      return <ItemTendersIcon className="w-3.5 h-3.5 text-[#D82229]" />;
    }
    if (item.id.includes("mozzarella") || item.name.includes("موتزاريلا")) {
      return <ItemCheeseSticksIcon className="w-3.5 h-3.5 text-[#D82229]" />;
    }
    if (item.id.includes("onion") || item.name.includes("بصل")) {
      return <ItemOnionRingsIcon className="w-3.5 h-3.5 text-[#D82229]" />;
    }
    if (item.id.includes("coleslaw") || item.name.includes("كول سلو")) {
      return <ItemSauceBowlIcon className="w-3.5 h-3.5 text-[#D82229]" />;
    }
    return <ItemFriesIcon className="w-3.5 h-3.5 text-[#D82229]" />;
  }
  return <ItemBurgerIcon className="w-3.5 h-3.5 text-[#D82229]" />;
}

interface SubCategoryGroup {
  id: string;
  category: string;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, variant?: "single" | "double") => void;
}

export function MenuSection({ onAddToCart }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [addedItemId, setAddedItemId] = useState<string | null>(null);

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
        return <ItemBaguetteIcon className="w-4 h-4" />;
      case "appetizers":
        return <ForkKnife size={15} weight="bold" />;
      default:
        return <ForkKnife size={15} weight="bold" />;
    }
  };

  // Structured sub-categories grouping (Beef / Chicken, Baguette / Roll, Fries / Sides)
  const subCategorySections = useMemo(() => {
    if (searchQuery.trim() !== "") {
      const results = MENU_ITEMS.filter((item) => {
        const matchesCategory =
          activeCategory === "all" || item.category === activeCategory;
        const matchesSearch =
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.description &&
            item.description.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
      });

      return [
        {
          id: "search-results",
          category: activeCategory,
          title: `نتائج البحث عن "${searchQuery}"`,
          subtitle: `تم العثور على ${results.length} صنف`,
          icon: <MagnifyingGlass size={16} className="text-[#D82229]" />,
          items: results,
        },
      ];
    }

    const groups: SubCategoryGroup[] = [];

    // 1. BURGERS: 2 Sub-categories (Beef & Chicken)
    if (activeCategory === "all" || activeCategory === "burgers") {
      const beefItems = MENU_ITEMS.filter(
        (i) => i.category === "burgers" && i.subCategory?.includes("لحم")
      );
      const chickenItems = MENU_ITEMS.filter(
        (i) => i.category === "burgers" && !i.subCategory?.includes("لحم")
      );

      if (beefItems.length > 0) {
        groups.push({
          id: "burgers-beef",
          category: "burgers",
          title: "برجر بيف (لحم بقري مشوي 100%)",
          subtitle: "مشوي على اللهب بلحم بقري صافي وتتبيلة أن كات السرية",
          icon: <ItemBurgerIcon className="w-4 h-4 text-[#D82229]" />,
          items: beefItems,
        });
      }

      if (chickenItems.length > 0) {
        groups.push({
          id: "burgers-chicken",
          category: "burgers",
          title: "برجر تشيكن (دجاج كرانشي مقرمش)",
          subtitle: "صدور دجاج كريسبي مقرمشة بخلطات وتتبيلات حصرية",
          icon: <ItemBurgerIcon className="w-4 h-4 text-[#D82229]" />,
          items: chickenItems,
        });
      }
    }

    // 2. CREPES
    if (activeCategory === "all" || activeCategory === "crepes") {
      const crepeItems = MENU_ITEMS.filter((i) => i.category === "crepes");
      if (crepeItems.length > 0) {
        groups.push({
          id: "crepes-all",
          category: "crepes",
          title: "أصل كريب أن كات المقرمش",
          subtitle: "كريب مقرمش ذهبي بأشهى وصفات الدجاج واللحوم والأجبان",
          icon: <ItemCrepeIcon className="w-4 h-4 text-[#D82229]" />,
          items: crepeItems,
        });
      }
    }

    // 3. SANDWICHES: 2 Sub-categories (Baguette & Roll)
    if (activeCategory === "all" || activeCategory === "sandwiches") {
      const baguetteItems = MENU_ITEMS.filter(
        (i) =>
          i.category === "sandwiches" &&
          (i.subCategory?.includes("باجيت") || i.name.includes("باجيت"))
      );
      const rollItems = MENU_ITEMS.filter(
        (i) =>
          i.category === "sandwiches" &&
          (i.subCategory?.includes("رول") || i.name.includes("رول"))
      );

      if (baguetteItems.length > 0) {
        groups.push({
          id: "sandwiches-baguette",
          category: "sandwiches",
          title: "ساندويتشات باجيت فرنسي مقرمش",
          subtitle: "عيش باجيت فرنسي طازج مقرمش محشو بألذ الوصفات",
          icon: <ItemBaguetteIcon className="w-4 h-4 text-[#D82229]" />,
          items: baguetteItems,
        });
      }

      if (rollItems.length > 0) {
        groups.push({
          id: "sandwiches-roll",
          category: "sandwiches",
          title: "ساندويتشات رول وتورتيلا محمص",
          subtitle: "رول خفيف ومحمص بخلطات كرانشي، زنجر، وشيش طاووق",
          icon: <ItemRollIcon className="w-4 h-4 text-[#D82229]" />,
          items: rollItems,
        });
      }
    }

    // 4. APPETIZERS: 2 Sub-categories (Fries & Sides/Dips)
    if (activeCategory === "all" || activeCategory === "appetizers") {
      const friesItems = MENU_ITEMS.filter(
        (i) =>
          i.category === "appetizers" &&
          (i.id.includes("fries") || i.name.includes("فرايز"))
      );
      const sidesItems = MENU_ITEMS.filter(
        (i) =>
          i.category === "appetizers" &&
          !(i.id.includes("fries") || i.name.includes("فرايز"))
      );

      if (friesItems.length > 0) {
        groups.push({
          id: "appetizers-fries",
          category: "appetizers",
          title: "بطاطس وفرايز محملة بالجبن",
          subtitle: "فرايز ذهبية مقرمشة غارقة بصوص الشيدر الساخن والبيكون",
          icon: <ItemFriesIcon className="w-4 h-4 text-[#D82229]" />,
          items: friesItems,
        });
      }

      if (sidesItems.length > 0) {
        groups.push({
          id: "appetizers-sides",
          category: "appetizers",
          title: "مقبلات وأصابع مقرمشة وتغميسات",
          subtitle: "تشيكن تندرز، أصابع موتزاريلا، حلقات بصل ذهبية، وكول سلو",
          icon: <ItemTendersIcon className="w-4 h-4 text-[#D82229]" />,
          items: sidesItems,
        });
      }
    }

    return groups;
  }, [activeCategory, searchQuery]);

  const totalItemsCount = useMemo(() => {
    return subCategorySections.reduce((acc, curr) => acc + curr.items.length, 0);
  }, [subCategorySections]);

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
            تصفح الأقسام حسب الصنف واضغط لإضافة وجبتك المفضلة للطلب.
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

        {/* Categories Tabs Filter (Horizontal Scroll) */}
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

        {/* Menu Items List Grouped by Sub-Categories */}
        {totalItemsCount === 0 ? (
          <div className="text-center py-10 bg-[#EFE7DC]/50 rounded-xl border border-dashed border-[#DBCDBA]">
            <p className="text-[#57524A] font-[family-name:var(--font-alexandria)] text-xs">
              لا توجد أطباق تطابق بحثك حالياً.
            </p>
          </div>
        ) : (
          <div className="space-y-8 sm:space-y-10">
            {subCategorySections.map((section) => {
              if (section.items.length === 0) return null;

              return (
                <div key={section.id} className="space-y-3.5">
                  {/* Sub-Category Section Banner */}
                  <div className="flex items-center justify-between border-b-2 border-[#191816]/80 pb-2.5 text-right">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#D82229]/10 border border-[#D82229]/20 flex items-center justify-center shrink-0">
                        {section.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-[family-name:var(--font-aref-ruqaa)] text-lg sm:text-xl font-bold text-[#191816]">
                            {section.title}
                          </h3>
                          <span className="text-[10px] font-semibold text-[#D82229] bg-[#D82229]/10 px-2 py-0.5 rounded-full border border-[#D82229]/20">
                            {section.items.length} أصناف
                          </span>
                        </div>
                        {section.subtitle && (
                          <p className="text-[11px] text-[#57524A] font-[family-name:var(--font-alexandria)] font-light mt-0.5 hidden xs:block">
                            {section.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Menu Items: Grid Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
                    {section.items.map((item) => {
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
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex items-center gap-2 min-w-0 flex-1">
                                {/* Small Item Icon next to name */}
                                <div className="w-6 h-6 rounded-md bg-[#D82229]/10 border border-[#D82229]/15 flex items-center justify-center shrink-0">
                                  {getItemIcon(item)}
                                </div>

                                <div className="flex items-center gap-1.5 flex-wrap min-w-0">
                                  <h4 className="font-[family-name:var(--font-aref-ruqaa)] text-base sm:text-lg font-bold text-[#191816] group-hover:text-[#D82229] transition-colors truncate">
                                    {item.name}
                                  </h4>
                                  {item.badge && (
                                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-[#D82229]/10 text-[#D82229] font-medium border border-[#D82229]/20 shrink-0">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
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
                            <div className="w-full border-b border-dotted border-[#DBCDBA] my-2" />

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
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
