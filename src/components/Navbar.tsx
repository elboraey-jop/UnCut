"use client";

import React from "react";
import { UncutLogo } from "./brand/UncutLogo";
import { PhonePill } from "./brand/Badges";
import { UncutStar } from "./brand/UncutStar";
import { PhoneCall, ShoppingBag, Motorcycle } from "@phosphor-icons/react";

interface NavbarProps {
  cartCount?: number;
  onOpenCart?: () => void;
}

export function Navbar({ cartCount = 0, onOpenCart }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#F7F2EC]/95 backdrop-blur-md border-b border-[#DBCDBA]/80 transition-all">
      {/* Top micro ticker strip */}
      <div className="w-full bg-[#D82229] border-b border-[#B5181E] py-2 sm:py-2.5 px-3 text-center text-[11px] sm:text-xs text-white flex items-center justify-center gap-1.5 sm:gap-2 font-medium tracking-wide shadow-sm">
        <UncutStar className="w-2.5 h-2.5 text-white shrink-0" />
        <span className="truncate">سمنود، شارع ترعة الساحل بجوار المطافي</span>
        <span className="opacity-60">•</span>
        <span className="font-bold text-white shrink-0 inline-flex items-center gap-1">
          <span>الطيار هيجيكم طيران</span>
          <Motorcycle size={14} weight="fill" className="text-white" />
        </span>
        <UncutStar className="w-2.5 h-2.5 text-white shrink-0" />
      </div>

      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14 h-14 sm:h-18 flex items-center justify-between">
        {/* Right: Uncut Brand Logo (Centered vertically) */}
        <div className="flex items-center">
          <UncutLogo size="sm" showTagline={false} />
        </div>

        {/* Center: Calm Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4A453F]">
          <a
            href="#menu"
            className="hover:text-[#D82229] transition-colors py-1 relative group"
          >
            قائمة الطعام
            <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#D82229] transition-all duration-200 group-hover:w-full" />
          </a>
          <a
            href="#story"
            className="hover:text-[#D82229] transition-colors py-1 relative group"
          >
            سر المذاق
            <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#D82229] transition-all duration-200 group-hover:w-full" />
          </a>
          <a
            href="#features"
            className="hover:text-[#D82229] transition-colors py-1 relative group"
          >
            ليه أن كات؟
            <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#D82229] transition-all duration-200 group-hover:w-full" />
          </a>
          <a
            href="#location"
            className="hover:text-[#D82229] transition-colors py-1 relative group"
          >
            الموقع والتواصل
            <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#D82229] transition-all duration-200 group-hover:w-full" />
          </a>
        </nav>

        {/* Left: Quick Actions (Cart & Phone Pill) */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Cart / Order button */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#DBCDBA] bg-[#ECE3D7] hover:bg-[#E2D5C3] text-[#191816] transition-all active:scale-95"
            title="سلة الطلب"
            aria-label="سلة الطلب"
          >
            <ShoppingBag size={18} weight="bold" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#D82229] text-white text-[10px] sm:text-xs font-bold flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Desktop Call Phone Pill */}
          <div className="hidden sm:block">
            <PhonePill phone="0100 092 2239" />
          </div>

          {/* Mobile direct call button */}
          <a
            href="tel:01000922239"
            className="sm:hidden flex items-center justify-center w-8 h-8 rounded-full bg-[#D82229] text-white shadow-sm active:scale-95"
            title="اتصال سريع"
          >
            <PhoneCall size={16} weight="fill" />
          </a>
        </div>
      </div>
    </header>
  );
}
