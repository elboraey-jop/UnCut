"use client";

import React from "react";
import { motion } from "framer-motion";
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
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* 1. Top-Left: Burger Doodle with floating physics */}
      <motion.div
        drag
        dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
        whileHover={{ scale: 1.25, rotate: 15 }}
        whileTap={{ scale: 0.85, rotate: -15 }}
        animate={{
          y: [-6, 6, -6],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[8%] left-[4%] sm:left-[8%] pointer-events-auto cursor-grab active:cursor-grabbing opacity-55 sm:opacity-75 hover:opacity-100 transition-opacity"
        title="البرجر المشوي على اللهب! (اضغط أو حرك)"
      >
        <InteractiveBurger className="w-16 h-16 sm:w-24 sm:h-24 drop-shadow-sm" />
      </motion.div>

      {/* 2. Top-Right: Crepe Doodle with gentle float */}
      <motion.div
        drag
        dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
        whileHover={{ scale: 1.25, rotate: -12 }}
        whileTap={{ scale: 0.85, rotate: 15 }}
        animate={{
          y: [7, -7, 7],
          rotate: [4, -4, 4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[9%] right-[3%] sm:right-[8%] pointer-events-auto cursor-grab active:cursor-grabbing opacity-55 sm:opacity-75 hover:opacity-100 transition-opacity"
        title="كريب أن كات المقرمش! (اضغط أو حرك)"
      >
        <InteractiveCrepe className="w-18 h-16 sm:w-28 sm:h-24 drop-shadow-sm" />
      </motion.div>

      {/* 3. Middle-Left: French Fries with springy hop (Shifted up on mobile away from text) */}
      <motion.div
        drag
        dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
        whileHover={{ scale: 1.3, rotate: -10 }}
        whileTap={{ scale: 0.85 }}
        animate={{
          y: [-8, 6, -8],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] sm:top-[44%] left-[1.5%] sm:left-[6%] pointer-events-auto cursor-grab active:cursor-grabbing opacity-50 sm:opacity-70 hover:opacity-100 transition-opacity"
        title="فرايز أن كات الذهبية!"
      >
        <InteractiveFries className="w-12 h-16 sm:w-18 sm:h-22 drop-shadow-sm" />
      </motion.div>

      {/* 4. Middle-Right: French Baguette angled (Shifted down on mobile away from text) */}
      <motion.div
        drag
        dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
        whileHover={{ scale: 1.3, rotate: 18 }}
        whileTap={{ scale: 0.85 }}
        animate={{
          y: [6, -8, 6],
          rotate: [8, -4, 8],
        }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[68%] sm:top-[46%] right-[1.5%] sm:right-[6%] pointer-events-auto cursor-grab active:cursor-grabbing opacity-50 sm:opacity-70 hover:opacity-100 transition-opacity"
        title="ساندويتش الباجيت الفرنسي!"
      >
        <InteractiveBaguette className="w-18 h-10 sm:w-24 sm:h-14 drop-shadow-sm" />
      </motion.div>

      {/* 5. Bottom-Left: Delivery Motorcycle flying */}
      <motion.div
        drag
        dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
        whileHover={{ scale: 1.25, x: 10 }}
        whileTap={{ scale: 0.85 }}
        animate={{
          x: [-4, 6, -4],
          y: [2, -4, 2],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] left-[4%] sm:left-[10%] pointer-events-auto cursor-grab active:cursor-grabbing opacity-50 sm:opacity-75 hover:opacity-100 transition-opacity"
        title="الطيار هيجيكم طيران! 🛵"
      >
        <InteractiveMoto className="w-20 h-12 sm:w-26 sm:h-16 drop-shadow-sm" />
      </motion.div>

      {/* 6. Bottom-Right: Refreshing Cold Drink */}
      <motion.div
        drag
        dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
        whileHover={{ scale: 1.3, rotate: -15 }}
        whileTap={{ scale: 0.85 }}
        animate={{
          y: [-5, 7, -5],
          rotate: [3, -3, 3],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[11%] right-[4%] sm:right-[10%] pointer-events-auto cursor-grab active:cursor-grabbing opacity-50 sm:opacity-70 hover:opacity-100 transition-opacity"
        title="مشروب مثلج منعش!"
      >
        <InteractiveDrink className="w-11 h-14 sm:w-16 sm:h-20 drop-shadow-sm" />
      </motion.div>

      {/* 7. Floating Red Uncut Stars Scattered */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[28%] left-[16%] opacity-40 text-[#D82229] pointer-events-none hidden sm:block"
      >
        <UncutStar className="w-6 h-6" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[26%] right-[17%] opacity-40 text-[#D82229] pointer-events-none hidden sm:block"
      >
        <UncutStar className="w-5 h-5" />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[28%] right-[18%] text-[#191816] pointer-events-none hidden sm:block"
      >
        <UncutStar className="w-4 h-4" />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[25%] left-[18%] text-[#D82229] pointer-events-none hidden sm:block"
      >
        <UncutStar className="w-4 h-4" />
      </motion.div>
    </div>
  );
}
