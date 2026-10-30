import React from "react";
import Link from "next/link";
import { UncutStar } from "./UncutStar";

interface UncutLogoProps {
  className?: string;
  variant?: "dark" | "light" | "red";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export function UncutLogo({
  className = "",
  variant = "dark",
  size = "md",
  showTagline = true,
}: UncutLogoProps) {
  const isRed = variant === "red";
  const isLight = variant === "light";

  const textColor = isRed
    ? "text-white"
    : isLight
    ? "text-white"
    : "text-[#191816]";
  
  const accentColor = isRed ? "text-white" : "text-[#D82229]";

  return (
    <Link
      href="/"
      className={`group inline-flex flex-col items-center justify-center text-center select-none ${className}`}
      dir="rtl"
    >
      <div className="flex items-center gap-2">
        {/* Decorative mini stars */}
        <UncutStar className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45 ${accentColor}`} />

        <div className="flex flex-col items-center">
          {/* Main Arabic stylized name */}
          <span
            className={`font-[family-name:var(--font-aref-ruqaa)] font-bold tracking-wide leading-none ${
              size === "sm"
                ? "text-xl"
                : size === "lg"
                ? "text-4xl md:text-5xl"
                : "text-2xl md:text-3xl"
            } ${textColor}`}
          >
            مطعم أَن كَات
          </span>

          {/* uncut. English brandmark */}
          <div className="flex items-baseline gap-1 mt-0.5">
            <span
              className={`font-[family-name:var(--font-bebas-neue)] tracking-wider lowercase font-bold leading-none ${
                size === "sm"
                  ? "text-sm"
                  : size === "lg"
                  ? "text-2xl"
                  : "text-base md:text-lg"
              } ${textColor}`}
            >
              uncut
            </span>
            <span className={`w-1.5 h-1.5 rounded-full inline-block ${accentColor} bg-current`} />
          </div>
        </div>

        <UncutStar className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:-rotate-45 ${accentColor}`} />
      </div>

      {showTagline && size !== "sm" && (
        <span
          className={`font-[family-name:var(--font-alexandria)] text-[10px] md:text-xs tracking-wider opacity-80 mt-1 pb-0.5 border-b border-dashed ${
            isRed || isLight ? "border-white/30 text-white/90" : "border-[#C9B9A4] text-[#57524A]"
          }`}
        >
          للكريب والساندويتش والبرجر
        </span>
      )}
    </Link>
  );
}
