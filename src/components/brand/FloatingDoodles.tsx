"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { UncutStar } from "./UncutStar";

// 1. Hand-drawn Burger Doodle
function InteractiveBurger({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 90"
      fill="none"
      stroke="#191816"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 40 C15 15, 85 15, 85 40 Z" fill="#EFE7DC" />
      <ellipse cx="35" cy="28" rx="2" ry="1" fill="#191816" />
      <ellipse cx="50" cy="22" rx="2" ry="1" fill="#191816" />
      <ellipse cx="65" cy="30" rx="2" ry="1" fill="#191816" />
      <path d="M12 45 Q30 52, 50 44 Q70 52, 88 44" stroke="#D82229" strokeWidth="3" />
      <rect x="14" y="50" width="72" height="12" rx="6" fill="#191816" />
      <path d="M10 66 Q30 60, 50 67 Q70 60, 90 66" stroke="#191816" strokeWidth="2.5" />
      <path d="M18 70 C18 84, 82 84, 82 70 Z" fill="#EFE7DC" />
    </svg>
  );
}

// 2. Hand-drawn Crepe Doodle
function InteractiveCrepe({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="#191816"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Golden triangular folded crepe cone */}
      <path
        d="M20 28 L50 92 L80 28 Q50 36, 20 28 Z"
        fill="#EFE7DC"
      />
      {/* Front overlap wrapper fold */}
      <path
        d="M20 28 L50 92 L62 48 Q40 40, 20 28 Z"
        fill="#E6DCCE"
        opacity="0.5"
      />
      <path d="M20 28 L50 92" />
      <path d="M80 28 L50 92" />
      <path d="M20 28 Q50 36, 80 28" />

      {/* Delicious fillings bursting from the top */}
      {/* Crispy Chicken Tender 1 */}
      <path
        d="M32 30 C30 18, 42 14, 46 26"
        fill="#FAF6F2"
        stroke="#191816"
      />
      {/* Crispy Chicken Tender 2 */}
      <path
        d="M54 26 C58 12, 70 16, 68 28"
        fill="#FAF6F2"
        stroke="#191816"
      />
      {/* Wavy fresh lettuce / veggies */}
      <path
        d="M26 28 Q30 20, 36 26 Q42 18, 48 24 Q54 18, 60 25 Q66 18, 74 27"
        stroke="#191816"
        strokeWidth="2"
      />
      {/* Red signature sauce drizzle */}
      <path
        d="M30 24 Q45 14, 56 22 Q68 15, 75 22"
        stroke="#D82229"
        strokeWidth="2.8"
      />

      {/* Grill marks & crunchy fold texture */}
      <line x1="38" y1="44" x2="52" y2="54" stroke="#191816" strokeWidth="2" />
      <line x1="42" y1="58" x2="58" y2="68" stroke="#D82229" strokeWidth="2.2" />
      <line x1="46" y1="72" x2="54" y2="78" stroke="#191816" strokeWidth="1.8" />

      {/* Crunchy spice dots */}
      <circle cx="48" cy="38" r="1.5" fill="#191816" />
      <circle cx="36" cy="60" r="1.5" fill="#D82229" />
      <circle cx="58" cy="48" r="1.5" fill="#191816" />
    </svg>
  );
}

// 3. French Baguette Doodle
function InteractiveBaguette({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 110 50"
      fill="none"
      stroke="#191816"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M10 25 C10 12, 100 12, 100 25 C100 38, 10 38, 10 25 Z" fill="#EFE7DC" />
      <line x1="30" y1="18" x2="40" y2="32" stroke="#191816" />
      <line x1="50" y1="18" x2="60" y2="32" stroke="#D82229" strokeWidth="3" />
      <line x1="70" y1="18" x2="80" y2="32" stroke="#191816" />
    </svg>
  );
}

// 4. French Fries Box Doodle
function InteractiveFries({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 90"
      fill="none"
      stroke="#191816"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Potato sticks */}
      <rect x="22" y="10" width="8" height="35" rx="2" fill="#EFE7DC" />
      <rect x="34" y="5" width="8" height="40" rx="2" fill="#D82229" stroke="#D82229" />
      <rect x="46" y="12" width="8" height="35" rx="2" fill="#EFE7DC" />
      <rect x="58" y="18" width="7" height="30" rx="2" fill="#EFE7DC" />
      <rect x="12" y="20" width="7" height="28" rx="2" fill="#EFE7DC" />
      {/* Box container */}
      <path d="M12 45 L20 85 L60 85 L68 45 C50 50, 30 50, 12 45 Z" fill="#D82229" stroke="#191816" />
      <path d="M26 62 Q40 56, 54 62" stroke="#ffffff" strokeWidth="2" />
    </svg>
  );
}

// 5. Fast Delivery Motorcycle Doodle
function InteractiveMoto({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 75"
      fill="none"
      stroke="#191816"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="5" y1="28" x2="25" y2="28" strokeDasharray="3 3" stroke="#D82229" />
      <circle cx="36" cy="52" r="14" fill="#EFE7DC" />
      <circle cx="94" cy="52" r="14" fill="#EFE7DC" />
      <circle cx="36" cy="52" r="4" fill="#191816" />
      <circle cx="94" cy="52" r="4" fill="#191816" />
      <path d="M36 52 L54 36 L76 36 L94 52" />
      <path d="M54 36 L64 52 L76 36" />
      <path d="M42 30 C48 26, 62 26, 70 32 Z" fill="#D82229" stroke="#D82229" />
      <path d="M76 36 L84 20 L92 20" />
    </svg>
  );
}

// 6. Cold Drink Cup with Straw
function InteractiveDrink({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 70 90"
      fill="none"
      stroke="#191816"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="38" y1="6" x2="48" y2="28" stroke="#D82229" strokeWidth="3" />
      <path d="M14 28 L22 84 L52 84 L60 28 Z" fill="#EFE7DC" />
      <line x1="10" y1="28" x2="64" y2="28" strokeWidth="3" />
      <path d="M22 48 Q37 42, 52 48" stroke="#D82229" strokeWidth="2" />
    </svg>
  );
}

export function FloatingDoodles() {
  const [radii, setRadii] = useState({ rx: 155, ry: 255 });
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (w < 640) {
        // Mobile: Vertically elongated ellipse ("بيضاوي بالطول")
        // Width hugs outer edges of the phone, Height spans above badges and below buttons
        const rx = Math.min(Math.max(w * 0.40, 140), 168);
        const ry = Math.min(Math.max(h * 0.35, 235), 275);
        setRadii({ rx, ry });
      } else if (w < 1024) {
        // Tablet
        setRadii({ rx: 330, ry: 260 });
      } else {
        // Desktop: Wide & comfortable
        setRadii({ rx: 470, ry: 280 });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Smooth, continuous elliptical orbit at 60/120fps using hardware-accelerated transforms
  useAnimationFrame((time) => {
    const duration = 38000; // 38s for a gentle, seamless revolution
    const baseAngle = ((time % duration) / duration) * 2 * Math.PI;

    itemRefs.current.forEach((el, index) => {
      if (!el) return;
      // 6 equidistant positions (60 deg apart)
      const angle = baseAngle + index * ((2 * Math.PI) / 6);
      const x = radii.rx * Math.sin(angle);
      const y = -radii.ry * Math.cos(angle);
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    });
  });

  const doodles = [
    {
      id: "burger",
      title: "البرجر المشوي على اللهب! (اضغط أو مرر)",
      render: (
        <InteractiveBurger className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 drop-shadow-sm" />
      ),
    },
    {
      id: "crepe",
      title: "كريب أن كات المقرمش! (اضغط أو مرر)",
      render: (
        <InteractiveCrepe className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 drop-shadow-sm" />
      ),
    },
    {
      id: "fries",
      title: "فرايز أن كات الذهبية!",
      render: (
        <InteractiveFries className="w-10 h-12 sm:w-13 sm:h-16 lg:w-16 lg:h-19 drop-shadow-sm" />
      ),
    },
    {
      id: "baguette",
      title: "ساندويتش الباجيت الفرنسي!",
      render: (
        <InteractiveBaguette className="w-14 h-8 sm:w-18 sm:h-10 lg:w-22 lg:h-12 drop-shadow-sm" />
      ),
    },
    {
      id: "moto",
      title: "الطيار هيجيكم طيران! 🛵",
      render: (
        <InteractiveMoto className="w-14 h-9 sm:w-18 sm:h-12 lg:w-22 lg:h-14 drop-shadow-sm" />
      ),
    },
    {
      id: "drink",
      title: "مشروب مثلج منعش!",
      render: (
        <InteractiveDrink className="w-9 h-12 sm:w-12 sm:h-15 lg:w-14 lg:h-18 drop-shadow-sm" />
      ),
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 flex items-center justify-center">
      {/* 1. Subtle Hand-Drawn Diner & Food Pattern Wallpaper */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.055] text-[#191816] pointer-events-none select-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="uncut-diner-pattern"
            width="150"
            height="150"
            patternUnits="userSpaceOnUse"
          >
            {/* Fork & Knife Crossed */}
            <path
              d="M20 20 L40 40 M40 20 L20 40 M16 16 C14 18 19 23 21 21 M39 17 L43 21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Fire flame */}
            <path
              d="M95 24 C92 31 99 35 99 39 C99 43 91 43 91 39 C91 35 95 31 95 24 Z"
              stroke="#D82229"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Chef Hat */}
            <path
              d="M125 78 H143 M127 78 V74 C125 70 129 66 132 68 C134 64 139 64 141 68 C144 65 148 69 146 73 V78"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Mini Chili Pepper */}
            <path
              d="M30 84 Q40 84 43 97 Q37 102 30 84 Z M30 84 L27 80"
              stroke="#D82229"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Mini Takeout Cup */}
            <path
              d="M95 94 L98 110 H110 L113 94 Z M93 94 H115 M106 88 L104 94"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Mini Burger */}
            <path
              d="M22 138 C22 133 36 133 36 138 H22 Z M20 141 H38 M23 144 C23 147 35 147 35 144 H23 Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Mini Crepe Cone */}
            <path
              d="M75 134 L84 148 L93 134 Q84 137 75 134 Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Starburst */}
            <path
              d="M135 22 V30 M131 26 H139"
              stroke="#D82229"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Little spice dots */}
            <circle cx="62" cy="22" r="1.3" fill="currentColor" />
            <circle cx="120" cy="52" r="1.3" fill="#D82229" />
            <circle cx="68" cy="110" r="1.3" fill="currentColor" />
            <circle cx="16" cy="65" r="1.3" fill="#D82229" />
            <circle cx="135" cy="132" r="1.3" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#uncut-diner-pattern)" />
      </svg>

      {/* 2. Huge Faint Background Typography Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="font-[family-name:var(--font-bebas-neue)] text-[26vw] sm:text-[20vw] font-black text-[#191816]/[0.032] tracking-widest uppercase leading-none select-none">
          UNCUT
        </span>
      </div>

      {/* 3. Top Corners: Authentic Retro Diner Badges & Stamps */}
      {/* Top-Right Stamp */}
      <div className="absolute top-2.5 right-2.5 sm:top-6 sm:right-8 pointer-events-none select-none opacity-50 sm:opacity-70">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-dashed border-[#D82229]/40 bg-[#FAF6F2]/70 text-[9px] sm:text-[10px] font-bold text-[#D82229] tracking-wider uppercase shadow-xs">
          <UncutStar className="w-2.5 h-2.5 text-[#D82229]" />
          <span>ORIGINAL TASTE ★ 100% FRESH</span>
        </div>
      </div>

      {/* Top-Left Stamp */}
      <div className="absolute top-2.5 left-2.5 sm:top-6 sm:left-8 pointer-events-none select-none opacity-50 sm:opacity-70">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-dashed border-[#191816]/30 bg-[#FAF6F2]/70 text-[9px] sm:text-[10px] font-bold text-[#191816] tracking-wider shadow-xs">
          <span className="text-[#D82229] font-sans">🔥</span>
          <span>مشوي على اللهب</span>
        </div>
      </div>

      {/* 4. Whimsical Handwritten Doodle Annotations on Sides */}
      {/* Left side annotation */}
      <div className="absolute top-[34%] left-1.5 sm:left-8 pointer-events-none select-none opacity-55 flex flex-col items-center rotate-[-8deg] z-0">
        <span className="font-[family-name:var(--font-aref-ruqaa)] text-[11px] sm:text-xs text-[#D82229] font-bold">
          أصل القرمشة ✨
        </span>
        <svg width="22" height="18" viewBox="0 0 24 20" fill="none" stroke="#D82229" strokeWidth="1.8" strokeLinecap="round">
          <path d="M 18 2 C 14 8, 8 10, 4 16 M 3 11 L 4 16 L 9 16" />
        </svg>
      </div>

      {/* Right side annotation */}
      <div className="absolute top-[38%] right-1.5 sm:right-8 pointer-events-none select-none opacity-55 flex flex-col items-center rotate-[8deg] z-0">
        <span className="font-[family-name:var(--font-aref-ruqaa)] text-[11px] sm:text-xs text-[#191816] font-bold">
          تتبيلة حصرية 🍗
        </span>
        <svg width="22" height="18" viewBox="0 0 24 20" fill="none" stroke="#191816" strokeWidth="1.8" strokeLinecap="round">
          <path d="M 6 2 C 10 8, 16 10, 20 16 M 21 11 L 20 16 L 15 16" />
        </svg>
      </div>

      {/* 5. Floating mini aroma sizzle lines */}
      <motion.div
        animate={{ y: [-3, 3, -3], opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[18%] left-[22%] pointer-events-none select-none text-[#D82229]/40 hidden xs:block"
      >
        <svg width="18" height="24" viewBox="0 0 18 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M 5 20 Q 10 15, 6 10 Q 2 5, 8 1" />
          <path d="M 12 22 Q 17 17, 13 12 Q 9 7, 15 3" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ y: [3, -3, 3], opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[20%] pointer-events-none select-none text-[#D82229]/40 hidden xs:block"
      >
        <svg width="18" height="24" viewBox="0 0 18 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M 5 20 Q 10 15, 6 10 Q 2 5, 8 1" />
          <path d="M 12 22 Q 17 17, 13 12 Q 9 7, 15 3" />
        </svg>
      </motion.div>

      {/* 6. Fixed Center Point for the Vertical Elliptical Orbit (6 Food Doodles) */}
      <div className="relative w-0 h-0 z-10">
        {doodles.map((doodle, index) => {
          // SSR initial placement
          const initialAngle = index * ((2 * Math.PI) / 6);
          const initialX = radii.rx * Math.sin(initialAngle);
          const initialY = -radii.ry * Math.cos(initialAngle);

          return (
            <div
              key={doodle.id}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              className="absolute top-0 left-0 pointer-events-none will-change-transform"
              style={{
                transform: `translate3d(${initialX}px, ${initialY}px, 0) translate(-50%, -50%)`,
              }}
            >
              {/* Interactive Touch & Hover layer (independent of translation) */}
              <motion.div
                whileHover={{ scale: 1.25, rotate: 8 }}
                whileTap={{ scale: 0.85, rotate: -8 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
                className="pointer-events-auto cursor-pointer opacity-70 sm:opacity-85 hover:opacity-100 transition-opacity"
                title={doodle.title}
              >
                {doodle.render}
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* 7. Decorative Brand Stars Scattered In Background Corners */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[12%] left-[10%] opacity-35 text-[#D82229] pointer-events-none hidden sm:block"
      >
        <UncutStar className="w-5 h-5" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] right-[11%] opacity-35 text-[#D82229] pointer-events-none hidden sm:block"
      >
        <UncutStar className="w-4 h-4" />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[12%] right-[12%] text-[#191816] pointer-events-none hidden sm:block"
      >
        <UncutStar className="w-4 h-4" />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[14%] left-[12%] text-[#D82229] pointer-events-none hidden sm:block"
      >
        <UncutStar className="w-3.5 h-3.5" />
      </motion.div>
    </div>
  );
}
