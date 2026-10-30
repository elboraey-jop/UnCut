"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UncutStar } from "./brand/UncutStar";

interface SplashScreenProps {
  onFinish?: () => void;
}

export function SplashScreen({ onFinish }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Elegant timing: 1.8 seconds is optimal (not annoying, cinematic feel)
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onFinish]);

  const handleDismiss = () => {
    setIsVisible(false);
    if (onFinish) onFinish();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          onClick={handleDismiss}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F7F2EC] cursor-pointer select-none px-6"
        >
          {/* Subtle paper grain texture */}
          <div className="absolute inset-0 kraft-paper-bg opacity-70 pointer-events-none" />

          {/* Central Logo & Motifs */}
          <div className="relative flex flex-col items-center text-center">
            {/* Animated Brand Star */}
            <motion.div
              initial={{ scale: 0, rotate: -45, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-[#D82229] mb-4"
            >
              <UncutStar className="w-12 h-12 md:w-16 md:h-16" />
            </motion.div>

            {/* Arabic Name */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-[family-name:var(--font-aref-ruqaa)] text-4xl md:text-6xl font-bold text-[#191816] tracking-wide"
            >
              مطعم أَن كَات
            </motion.h1>

            {/* uncut. English brandmark */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-baseline gap-1 mt-1"
            >
              <span className="font-[family-name:var(--font-bebas-neue)] text-2xl md:text-3xl tracking-widest lowercase font-bold text-[#191816]">
                uncut
              </span>
              <span className="w-2 h-2 rounded-full bg-[#D82229]" />
            </motion.div>

            {/* Subtitle taglines */}
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="font-[family-name:var(--font-alexandria)] text-xs md:text-sm text-[#57524A] mt-4 tracking-widest"
            >
              فريد من نوعه • سمنود
            </motion.p>

            {/* Subtle Expanding Divider Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 140 }}
              transition={{ delay: 0.8, duration: 0.7, ease: "easeInOut" }}
              className="h-[1.5px] bg-[#D82229] mt-3"
            />

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1.1, duration: 0.4 }}
              className="text-[11px] text-[#8A8276] mt-4 font-[family-name:var(--font-alexandria)]"
            >
              اضغط للدخول
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
