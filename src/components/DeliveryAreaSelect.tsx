"use client";

import React, { useState, useRef, useEffect } from "react";
import { SAMANOUD_AREAS, DeliveryArea } from "@/data/deliveryAreas";
import {
  MapPin,
  CaretDown,
  Check,
  Buildings,
  HouseLine,
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

interface DeliveryAreaSelectProps {
  selectedArea: DeliveryArea;
  onSelectArea: (area: DeliveryArea) => void;
}

export function DeliveryAreaSelect({
  selectedArea,
  onSelectArea,
}: DeliveryAreaSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const cityArea = SAMANOUD_AREAS.find((a) => a.type === "city");
  const villageAreas = SAMANOUD_AREAS.filter((a) => a.type === "village");

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-[#DBCDBA] hover:border-[#191816] rounded-xl py-2 px-3 flex items-center justify-between text-right text-xs transition-all focus:outline-none focus:border-[#D82229] shadow-2xs cursor-pointer group"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2 overflow-hidden">
          <MapPin
            size={15}
            weight="fill"
            className="text-[#D82229] shrink-0"
          />
          <span className="font-medium text-[#191816] truncate">
            {selectedArea.name}
          </span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <span className="px-2 py-0.5 rounded-full bg-[#D82229]/10 text-[#D82229] font-bold text-[10px] font-[family-name:var(--font-bebas-neue)] tracking-wider">
            {selectedArea.fee} ج
          </span>
          <CaretDown
            size={13}
            className={`text-[#8A8276] transition-transform duration-200 ${
              isOpen ? "rotate-180 text-[#D82229]" : ""
            }`}
          />
        </div>
      </button>

      {/* Floating Dropdown Menu (Opens upward) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="absolute bottom-full mb-1.5 right-0 left-0 z-50 bg-[#FDFBF8] border-2 border-[#191816] rounded-2xl shadow-2xl overflow-hidden max-h-[260px] flex flex-col"
          >
            {/* Header label */}
            <div className="px-3 py-2 border-b border-[#DBCDBA] bg-[#EFE7DC] flex items-center justify-between text-[11px] font-bold text-[#191816]">
              <span>اختر منطقة أو قرية التوصيل</span>
              <span className="text-[10px] text-[#57524A] font-normal">
                سمنود وقراها
              </span>
            </div>

            {/* List options */}
            <div className="overflow-y-auto p-1.5 space-y-1 overscroll-contain flex-1">
              {/* City (20 EGP) */}
              {cityArea && (
                <div className="mb-1">
                  <button
                    type="button"
                    onClick={() => {
                      onSelectArea(cityArea);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-2 rounded-lg text-xs text-right transition-colors cursor-pointer ${
                      selectedArea.id === cityArea.id
                        ? "bg-[#D82229] text-white font-semibold"
                        : "bg-[#EFE7DC]/60 hover:bg-[#EFE7DC] text-[#191816]"
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <Buildings size={14} weight="bold" />
                      <span className="font-bold">{cityArea.name}</span>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <span
                        className={`text-[11px] font-[family-name:var(--font-bebas-neue)] ${
                          selectedArea.id === cityArea.id
                            ? "text-white"
                            : "text-[#D82229] font-bold"
                        }`}
                      >
                        20 ج
                      </span>
                      {selectedArea.id === cityArea.id && (
                        <Check size={14} weight="bold" />
                      )}
                    </div>
                  </button>
                </div>
              )}

              {/* Villages Header (30 EGP) */}
              <div className="pt-1">
                <div className="flex items-center gap-1.5 px-2 py-1 text-[10px] font-bold text-[#8A8276] bg-[#ECE3D7]/40 rounded-md mb-1">
                  <HouseLine size={13} weight="bold" />
                  <span>قرى مركز سمنود المجاورة (توصيل 30 جنيه)</span>
                </div>

                {villageAreas.map((area) => (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => {
                      onSelectArea(area);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-2 rounded-lg text-xs text-right transition-colors cursor-pointer ${
                      selectedArea.id === area.id
                        ? "bg-[#D82229] text-white font-semibold"
                        : "hover:bg-[#EFE7DC] text-[#191816]"
                    }`}
                  >
                    <span className="truncate">{area.name}</span>
                    <div className="flex items-center gap-1 shrink-0">
                      <span
                        className={`text-[10px] font-[family-name:var(--font-bebas-neue)] ${
                          selectedArea.id === area.id
                            ? "text-white"
                            : "text-[#D82229] font-bold"
                        }`}
                      >
                        30 ج
                      </span>
                      {selectedArea.id === area.id && (
                        <Check size={14} weight="bold" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
