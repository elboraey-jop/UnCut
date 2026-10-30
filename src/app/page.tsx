"use client";

import React, { useState } from "react";
import { SplashScreen } from "@/components/SplashScreen";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { Story } from "@/components/Story";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { CartDrawer, CartItem } from "@/components/CartDrawer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { MENU_ITEMS, MenuItem } from "@/data/menu";
import { ShoppingBag, WhatsappLogo, PhoneCall } from "@phosphor-icons/react";

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: MenuItem, variant?: "single" | "double") => {
    const price =
      variant === "double" && item.doublePrice ? item.doublePrice : item.price;
    const cartItemId = `${item.id}-${variant || "default"}`;

    setCart((prev) => {
      const existing = prev.find((i) => i.id === cartItemId);
      if (existing) {
        return prev.map((i) =>
          i.id === cartItemId ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          item,
          variant,
          price,
          quantity: 1,
        },
      ];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const signatureItem =
    MENU_ITEMS.find((i) => i.id === "smoke-uncut-crepe") || MENU_ITEMS[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F2EC] text-[#191816] selection:bg-[#D82229] selection:text-white relative">
      {/* Luxury smooth scrolling */}
      <SmoothScroll />

      {/* Cinematic Minimal Splash Screen */}
      <SplashScreen />

      {/* Main Navbar */}
      <Navbar
        cartCount={totalItemsCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section with Signature Dishes Carousel */}
        <Hero onAddToCart={handleAddToCart} />

        {/* The Complete Interactive Menu */}
        <MenuSection onAddToCart={handleAddToCart} />

        {/* The Brand Story & Packaging */}
        <Story />

        {/* Brand Features & Delivery ("الطيار هيجيكم طيران") */}
        <Features />
      </main>

      {/* Footer & Location details */}
      <Footer />

      {/* Order via WhatsApp Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Bottom Order Bar for Mobile */}
      {totalItemsCount > 0 && (
        <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 right-4 z-40 md:hidden animate-in slide-in-from-bottom duration-300">
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full py-3.5 px-5 rounded-full bg-[#D82229] text-white shadow-xl flex items-center justify-between font-medium active:scale-98"
          >
            <div className="flex items-center gap-2">
              <ShoppingBag size={19} weight="bold" className="shrink-0 text-white" />
              <span className="text-sm font-semibold">عرض سلة الطلبات</span>
              <span className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center font-bold text-xs font-[family-name:var(--font-bebas-neue)] pt-0.5">
                {totalItemsCount}
              </span>
            </div>

            <div className="flex items-baseline gap-1 font-[family-name:var(--font-bebas-neue)] text-xl font-bold">
              <span>{totalCartPrice}</span>
              <span className="font-[family-name:var(--font-aref-ruqaa)] text-xs">
                جنيه
              </span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
