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
  const doodles = [
    {
      id: "burger",
      title: "البرجر المشوي على اللهب! (اضغط أو مرر)",
      x: "50%",
      y: "0%",
      render: (
        <InteractiveBurger className="w-13 h-13 sm:w-18 sm:h-18 lg:w-22 lg:h-22 drop-shadow-sm" />
      ),
    },
    {
      id: "crepe",
      title: "كريب أن كات المقرمش! (اضغط أو مرر)",
      x: "93.3%",
      y: "25%",
      render: (
        <InteractiveCrepe className="w-13 h-13 sm:w-18 sm:h-18 lg:w-22 lg:h-22 drop-shadow-sm" />
      ),
    },
    {
      id: "fries",
      title: "فرايز أن كات الذهبية!",
      x: "93.3%",
      y: "75%",
      render: (
        <InteractiveFries className="w-11 h-13 sm:w-15 sm:h-18 lg:w-18 lg:h-21 drop-shadow-sm" />
      ),
    },
    {
      id: "baguette",
      title: "ساندويتش الباجيت الفرنسي!",
      x: "50%",
      y: "100%",
      render: (
        <InteractiveBaguette className="w-15 h-9 sm:w-20 sm:h-12 lg:w-24 lg:h-14 drop-shadow-sm" />
      ),
    },
    {
      id: "moto",
      title: "الطيار هيجيكم طيران! 🛵",
      x: "6.7%",
      y: "75%",
      render: (
        <InteractiveMoto className="w-15 h-10 sm:w-20 sm:h-13 lg:w-24 lg:h-15 drop-shadow-sm" />
      ),
    },
    {
      id: "drink",
      title: "مشروب مثلج منعش!",
      x: "6.7%",
      y: "25%",
      render: (
        <InteractiveDrink className="w-10 h-13 sm:w-14 sm:h-17 lg:w-16 lg:h-20 drop-shadow-sm" />
      ),
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 flex items-center justify-center">
      {/* Background Circular Orbit Track Frame */}
      <div className="relative flex items-center justify-center">
        {/* Elegant dashed circular orbit track */}
        <div className="absolute w-[300px] h-[300px] xs:w-[350px] xs:h-[350px] sm:w-[530px] sm:h-[530px] md:w-[670px] md:h-[670px] lg:w-[810px] lg:h-[810px] xl:w-[920px] xl:h-[920px] rounded-full border border-dashed border-[#191816]/15 pointer-events-none" />

        {/* Continuous rotating ring with the 6 equidistant doodles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="relative w-[300px] h-[300px] xs:w-[350px] xs:h-[350px] sm:w-[530px] sm:h-[530px] md:w-[670px] md:h-[670px] lg:w-[810px] lg:h-[810px] xl:w-[920px] xl:h-[920px] rounded-full pointer-events-none"
        >
          {doodles.map((doodle) => (
            <div
              key={doodle.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: doodle.x, top: doodle.y }}
            >
              {/* Counter-rotation keeps each doodle upright while orbiting */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Interactive Touch & Hover layer */}
                <motion.div
                  whileHover={{ scale: 1.25, rotate: 10 }}
                  whileTap={{ scale: 0.85, rotate: -10 }}
                  transition={{ type: "spring", stiffness: 350, damping: 18 }}
                  className="pointer-events-auto cursor-pointer opacity-60 sm:opacity-75 hover:opacity-100 transition-opacity"
                  title={doodle.title}
                >
                  {doodle.render}
                </motion.div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Brand Stars Scattered In Background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[18%] left-[12%] opacity-30 text-[#D82229] pointer-events-none hidden sm:block"
      >
        <UncutStar className="w-5 h-5" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute top-[16%] right-[13%] opacity-30 text-[#D82229] pointer-events-none hidden sm:block"
      >
        <UncutStar className="w-4 h-4" />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[14%] text-[#191816] pointer-events-none hidden sm:block"
      >
        <UncutStar className="w-4 h-4" />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[18%] left-[14%] text-[#D82229] pointer-events-none hidden sm:block"
      >
        <UncutStar className="w-3.5 h-3.5" />
      </motion.div>
    </div>
  );
}
