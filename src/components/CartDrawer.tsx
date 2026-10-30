"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESTAURANT_INFO, MenuItem } from "@/data/menu";
import { SAMANOUD_AREAS, DeliveryArea } from "@/data/deliveryAreas";
import { DeliveryAreaSelect } from "./DeliveryAreaSelect";
import {
  X,
  Trash,
  Plus,
  Minus,
  WhatsappLogo,
  ShoppingBag,
  MapPin,
  User,
  Phone,
  Note,
  PaperPlaneTilt,
  CheckCircle,
  Motorcycle,
  Sparkle,
} from "@phosphor-icons/react";

export interface CartItem {
  id: string;
  item: MenuItem;
  variant?: "single" | "double";
  price: number;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedArea, setSelectedArea] = useState<DeliveryArea>(
    SAMANOUD_AREAS[0]
  );
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  // Lock background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
      };
    }
  }, [isOpen]);

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const deliveryFee = items.length > 0 ? selectedArea.fee : 0;
  const totalAmount = subtotal + deliveryFee;
  const totalItemsCount = items.reduce((sum, i) => sum + i.quantity, 0);

  // WhatsApp Order Submission
  const handleSendWhatsApp = () => {
    if (items.length === 0) return;

    let message = `🍽️ *طلب جديد من ويبسايت مطعم أن كات*:\n`;
    message += `───────────────────\n`;

    items.forEach((cartItem, idx) => {
      const variantText = cartItem.variant
        ? ` (${cartItem.variant === "single" ? "سنجل" : "دبل"})`
        : "";
      message += `${idx + 1}. *${cartItem.item.name}*${variantText}\n`;
      message += `   العدد: ${cartItem.quantity} × ${cartItem.price} ج = ${
        cartItem.quantity * cartItem.price
      } ج\n`;
    });

    message += `───────────────────\n`;
    message += `💰 *المجموع الفرعي*: ${subtotal} ج\n`;
    message += `🛵 *منطقة التوصيل*: ${selectedArea.name} (${deliveryFee} ج)\n`;
    message += `💵 *الإجمالي الكلي*: ${totalAmount} جنيه مصري\n\n`;

    if (customerName.trim()) {
      message += `👤 *الاسم*: ${customerName.trim()}\n`;
    }
    if (customerPhone.trim()) {
      message += `📞 *الموبايل*: ${customerPhone.trim()}\n`;
    }
    if (customerAddress.trim()) {
      message += `📍 *العنوان*: ${customerAddress.trim()}\n`;
    }
    if (notes.trim()) {
      message += `📝 *ملاحظات خاصة*: ${notes.trim()}\n`;
    }

    message += `\n🛵 الطيار هيجيكم طيران! شكراً لكم.`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encoded}`;
    window.open(url, "_blank");
  };

  // Direct Web Order (For future Admin integration)
  const handleDirectOrder = () => {
    if (items.length === 0) return;

    if (!customerPhone.trim()) {
      alert("برجاء إدخال رقم الموبايل لتأكيد الطلب والتواصل");
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setOrderNumber(`UNC-${randomNum}`);
    setOrderSuccess(true);
  };

  const handleFinishSuccess = () => {
    setOrderSuccess(false);
    onClearCart();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop with smooth fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={onClose}
            className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
          />

          {/* Drawer Panel Container */}
          <div className="fixed inset-y-0 left-0 flex pointer-events-none">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                damping: 32,
                stiffness: 380,
                mass: 0.75,
              }}
              data-lenis-prevent
              className="pointer-events-auto w-[84vw] max-w-sm sm:max-w-md bg-[#F7F2EC] rounded-tr-[28px] rounded-br-[28px] border-r-2 border-[#DBCDBA] shadow-[0_10px_40px_rgba(0,0,0,0.3)] flex flex-col justify-between overflow-hidden h-full h-[100dvh]"
            >
              {/* Header (Slim & Compact) */}
              <div className="py-2 px-3 sm:py-2.5 sm:px-4 border-b border-[#DBCDBA] bg-[#EFE7DC] flex items-center justify-between shrink-0">
                {/* Right: Title & Brand Info */}
                <div className="flex items-center gap-2 text-right">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#D82229] text-white flex items-center justify-center shadow-xs shrink-0">
                    <ShoppingBag size={14} weight="bold" />
                  </span>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-[family-name:var(--font-aref-ruqaa)] text-sm sm:text-base font-bold text-[#191816] leading-none">
                        سلة طلباتك
                      </h3>
                      {totalItemsCount > 0 && (
                        <span className="px-1.5 py-0.2 rounded-full bg-[#D82229]/10 text-[#D82229] font-bold text-[9px] font-[family-name:var(--font-bebas-neue)]">
                          {totalItemsCount}
                        </span>
                      )}
                    </div>
                    <span className="text-[9px] text-[#57524A] font-[family-name:var(--font-alexandria)] mt-0.5 block leading-none">
                      مطعم أن كات • سمنود
                    </span>
                  </div>
                </div>

                {/* Left: Close Button */}
                <button
                  onClick={onClose}
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#DBCDBA] bg-[#FAF6F2] hover:bg-[#E4D7C5] flex items-center justify-center text-[#191816] active:scale-95 transition-all shadow-2xs cursor-pointer"
                  aria-label="إغلاق"
                >
                  <X size={13} weight="bold" />
                </button>
              </div>

              {/* Success Overlay View */}
              {orderSuccess ? (
                <div className="flex-1 p-6 flex flex-col items-center justify-center text-center space-y-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg"
                  >
                    <CheckCircle size={36} weight="fill" />
                  </motion.div>

                  <h3 className="font-[family-name:var(--font-aref-ruqaa)] text-2xl font-bold text-[#191816]">
                    تم استلام طلبك بنجاح!
                  </h3>

                  <div className="p-3 bg-[#EFE7DC] border border-[#DBCDBA] rounded-xl w-full">
                    <span className="block text-xs text-[#57524A]">رقم الطلب</span>
                    <span className="font-[family-name:var(--font-bebas-neue)] text-2xl text-[#D82229] font-bold tracking-widest">
                      {orderNumber}
                    </span>
                  </div>

                  <p className="text-xs text-[#57524A] font-[family-name:var(--font-alexandria)] leading-relaxed">
                    جاري الآن تجهيز وجباتك طازجة في مطبخ أن كات، وسيصلك الطيار على عنوانك المحدد في أقرب وقت.
                  </p>

                  <button
                    onClick={handleFinishSuccess}
                    className="w-full py-3 rounded-full bg-[#191816] hover:bg-[#333] text-white text-xs font-semibold transition-all active:scale-95 cursor-pointer"
                  >
                    العودة للقائمة الرئيسية
                  </button>
                </div>
              ) : (
                <>
                  {/* Items Scroll Area (Top flex-1) */}
                  <div
                    className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 overscroll-contain"
                    data-lenis-prevent
                  >
                    {items.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-center py-12">
                        <div className="w-14 h-14 rounded-full bg-[#EFE7DC] flex items-center justify-center text-[#8A8276] mb-3">
                          <ShoppingBag size={28} />
                        </div>
                        <p className="font-[family-name:var(--font-aref-ruqaa)] text-base sm:text-lg font-bold text-[#191816]">
                          السلة فارغة حالياً
                        </p>
                        <p className="font-[family-name:var(--font-alexandria)] text-[11px] sm:text-xs text-[#57524A] mt-1 max-w-[200px]">
                          تصفح قائمة الطعام واختر الكريب والبرجر والمقبلات المفضلة لديك.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs font-semibold text-[#191816] px-1">
                          <span>الأصناف المختارة ({items.length})</span>
                          <button
                            onClick={onClearCart}
                            className="text-[10px] text-[#8A8276] hover:text-[#D82229] font-normal transition-colors cursor-pointer"
                          >
                            مسح السلة
                          </button>
                        </div>

                        {/* Items Cards */}
                        {items.map((cartItem) => (
                          <div
                            key={cartItem.id}
                            className="p-2.5 sm:p-3 rounded-xl border border-[#DBCDBA] bg-[#FAF6F2] shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-2 transition-all"
                          >
                            {/* Top Row: Name on Right, Price on Left */}
                            <div className="flex items-start justify-between gap-2 text-right">
                              <div className="flex-1">
                                <h4 className="font-[family-name:var(--font-aref-ruqaa)] text-sm font-bold text-[#191816] leading-tight">
                                  {cartItem.item.name}
                                </h4>
                                {cartItem.variant && (
                                  <span className="inline-block mt-0.5 text-[9px] px-1.5 py-0.2 rounded bg-[#EFE7DC] text-[#57524A] font-medium border border-[#DBCDBA]/80">
                                    {cartItem.variant === "single" ? "سنجل" : "دبل"}
                                  </span>
                                )}
                              </div>

                              {/* Total Price for this item */}
                              <div className="flex items-baseline gap-0.5 font-[family-name:var(--font-bebas-neue)] text-base sm:text-lg text-[#D82229] font-bold shrink-0">
                                <span>{cartItem.price * cartItem.quantity}</span>
                                <span className="font-[family-name:var(--font-alexandria)] text-[9px] text-[#191816] mr-0.5">
                                  ج
                                </span>
                              </div>
                            </div>

                            {/* Bottom Row: Actions */}
                            <div className="flex items-center justify-between pt-1.5 border-t border-[#EFE7DC]">
                              {/* Stepper with tactile mini buttons */}
                              <div className="flex items-center gap-1.5 border border-[#DBCDBA] rounded-full px-2 py-0.5 bg-[#EFE7DC]/70 shadow-2xs">
                                <button
                                  onClick={() => onUpdateQuantity(cartItem.id, -1)}
                                  className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center text-[#191816] hover:bg-[#D82229] hover:text-white transition-colors active:scale-90 shadow-2xs cursor-pointer"
                                  aria-label="تقليل الكمية"
                                >
                                  <Minus size={9} weight="bold" />
                                </button>

                                <span className="font-[family-name:var(--font-bebas-neue)] text-xs sm:text-sm font-bold min-w-[14px] text-center leading-none">
                                  {cartItem.quantity}
                                </span>

                                <button
                                  onClick={() => onUpdateQuantity(cartItem.id, 1)}
                                  className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#191816] flex items-center justify-center text-white hover:bg-[#D82229] transition-colors active:scale-90 shadow-2xs cursor-pointer"
                                  aria-label="زيادة الكمية"
                                >
                                  <Plus size={9} weight="bold" />
                                </button>
                              </div>

                              {/* Delete button */}
                              <button
                                onClick={() => onRemoveItem(cartItem.id)}
                                className="flex items-center gap-0.5 text-[10px] text-[#8A8276] hover:text-[#D82229] px-1.5 py-0.5 rounded hover:bg-[#EFE7DC] transition-all cursor-pointer"
                                title="حذف الصنف"
                              >
                                <Trash size={12} />
                                <span className="font-[family-name:var(--font-alexandria)] text-[9px]">حذف</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* FIXED LOWER SECTION: Delivery Details + Totals + Action Buttons */}
                  {items.length > 0 && (
                    <div className="border-t-2 border-[#DBCDBA] bg-[#EFE7DC] shrink-0 p-3 sm:p-4 space-y-2.5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-[0_-8px_20px_rgba(0,0,0,0.06)]">
                      {/* Pinned Delivery Form Card */}
                      <div className="p-2.5 sm:p-3 rounded-xl border border-[#DBCDBA] bg-[#FAF6F2] space-y-2 shadow-2xs text-right">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-[#191816]">
                            <MapPin size={14} weight="fill" className="text-[#D82229]" />
                            <span>بيانات التوصيل السريع</span>
                          </div>
                          <span className="text-[9px] text-[#57524A] bg-[#EFE7DC] px-2 py-0.5 rounded-full">
                            سمنود وقراها
                          </span>
                        </div>

                        {/* Row 1: Name + Phone side by side */}
                        <div className="grid grid-cols-2 gap-2">
                          <div className="relative">
                            <input
                              type="text"
                              value={customerName}
                              onChange={(e) => setCustomerName(e.target.value)}
                              placeholder="اسمك الكريم"
                              className="w-full bg-white border border-[#DBCDBA] rounded-lg py-1.5 pr-7 pl-2 text-[11px] text-[#191816] placeholder-[#8A8276] focus:outline-none focus:border-[#D82229]"
                            />
                            <User size={13} className="absolute top-1/2 -translate-y-1/2 right-2 text-[#8A8276] pointer-events-none" />
                          </div>

                          <div className="relative">
                            <input
                              type="tel"
                              dir="rtl"
                              value={customerPhone}
                              onChange={(e) => setCustomerPhone(e.target.value)}
                              placeholder="رقم الموبايل *"
                              className="w-full bg-white border border-[#DBCDBA] rounded-lg py-1.5 pr-7 pl-2 text-[11px] text-right text-[#191816] placeholder-[#8A8276] focus:outline-none focus:border-[#D82229]"
                            />
                            <Phone size={13} className="absolute top-1/2 -translate-y-1/2 right-2 text-[#8A8276] pointer-events-none" />
                          </div>
                        </div>

                        {/* Row 2: Custom Area & Village Dropdown */}
                        <div>
                          <DeliveryAreaSelect
                            selectedArea={selectedArea}
                            onSelectArea={setSelectedArea}
                          />
                        </div>

                        {/* Row 3: Detailed Address */}
                        <div className="relative">
                          <input
                            type="text"
                            value={customerAddress}
                            onChange={(e) => setCustomerAddress(e.target.value)}
                            placeholder="العنوان بالتفصيل (اسم الشارع أو علامة مميزة)"
                            className="w-full bg-white border border-[#DBCDBA] rounded-lg py-1.5 pr-7 pl-2 text-[11px] text-[#191816] placeholder-[#8A8276] focus:outline-none focus:border-[#D82229]"
                          />
                          <MapPin size={13} className="absolute top-1/2 -translate-y-1/2 right-2 text-[#8A8276] pointer-events-none" />
                        </div>
                      </div>

                      {/* Financial Breakdown: Subtotal + Delivery + Total */}
                      <div className="space-y-1 px-1 text-xs">
                        {/* Subtotal */}
                        <div className="flex items-center justify-between text-[#57524A] text-[11px]">
                          <span>المجموع الفرعي:</span>
                          <span className="font-[family-name:var(--font-bebas-neue)] text-sm font-bold text-[#191816]">
                            {subtotal} ج
                          </span>
                        </div>

                        {/* Delivery */}
                        <div className="flex items-center justify-between text-[#57524A] text-[11px]">
                          <span>خدمة التوصيل ({selectedArea.type === "city" ? "سمنود المدينة" : "قرية مجاورة"}):</span>
                          <span className="font-[family-name:var(--font-bebas-neue)] text-sm font-bold text-[#D82229]">
                            +{deliveryFee} ج
                          </span>
                        </div>

                        {/* Total Amount Divider & Row */}
                        <div className="w-full border-t border-[#DBCDBA] pt-1 mt-1 flex items-baseline justify-between">
                          <span className="font-bold text-[#191816] text-xs">
                            الإجمالي الكلي:
                          </span>
                          <div className="flex items-baseline gap-1 font-[family-name:var(--font-bebas-neue)] text-2xl font-bold text-[#D82229]">
                            <span>{totalAmount}</span>
                            <span className="font-[family-name:var(--font-aref-ruqaa)] text-xs text-[#191816]">
                              جنيه
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons: Side-by-Side (WhatsApp & Online Order) */}
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        {/* 1. WhatsApp Confirmation Button */}
                        <button
                          onClick={handleSendWhatsApp}
                          className="py-2.5 px-2 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-[11px] sm:text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap"
                        >
                          <WhatsappLogo size={16} weight="fill" className="shrink-0" />
                          <span>تأكيد واتساب</span>
                        </button>

                        {/* 2. Direct Web Order Button */}
                        <button
                          onClick={handleDirectOrder}
                          className="py-2.5 px-2 rounded-full bg-[#D82229] hover:bg-[#B5181E] text-white font-semibold text-[11px] sm:text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer border border-[#B5181E] shadow-sm whitespace-nowrap"
                        >
                          <PaperPlaneTilt size={14} weight="bold" className="shrink-0" />
                          <span>إتمام الطلب</span>
                        </button>
                      </div>

                      {/* Reassurance Tagline */}
                      <div className="flex items-center justify-center gap-1 text-[10px] text-[#8A8276] text-center pt-0.5">
                        <Motorcycle size={13} className="text-[#D82229]" />
                        <span>الطيار هيجيكم طيران • الدفع عند الاستلام كاش</span>
                      </div>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
