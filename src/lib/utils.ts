import { CartItem, RestaurantInfo } from "@/types";

/**
 * Build WhatsApp order message string from cart items
 */
export function buildWhatsAppOrderMessage({
  items,
  totalItemsCount,
  subtotal,
  deliveryFee,
  totalPrice,
  customerName,
  customerPhone,
  customerAddress,
  customerNotes,
  deliveryAreaName,
}: {
  items: CartItem[];
  totalItemsCount: number;
  subtotal: number;
  deliveryFee: number;
  totalPrice: number;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  customerNotes?: string;
  deliveryAreaName?: string;
}): string {
  let message = `🍽️ *طلب جديد من ويبسايت مطعم أن كات*:\n`;
  message += `━━━━━━━━━━━━━━━━━\n\n`;

  message += `*📋 تفاصيل الأصناف (${totalItemsCount}):*\n`;
  items.forEach((cartItem, idx) => {
    const variantText = cartItem.variant
      ? ` (${cartItem.variant === "single" ? "سنجل" : "دبل"})`
      : "";
    message += `${idx + 1}. *${cartItem.item.name}*${variantText}\n`;
    message += `   الكمية: ${cartItem.quantity} × ${cartItem.price} ج = ${
      cartItem.price * cartItem.quantity
    } ج\n`;
  });

  message += `\n*💰 الحساب والإجمالي:*\n`;
  message += `• إجمالي الأصناف: ${subtotal} ج\n`;
  message += `• رسوم التوصيل: ${deliveryFee > 0 ? `${deliveryFee} ج` : "مجاناً"}\n`;
  message += `• *الإجمالي النهائي المطلوب: ${totalPrice} ج*\n\n`;

  message += `*📍 بيانات العميل والتوصيل:*\n`;
  message += `• الاسم: ${customerName.trim() || "غير مسجل"}\n`;
  message += `• رقم الهاتف: ${customerPhone.trim()}\n`;
  message += `• العنوان: ${customerAddress.trim()}\n`;
  if (deliveryAreaName) {
    message += `• المنطقة: ${deliveryAreaName}\n`;
  }
  if (customerNotes && customerNotes.trim()) {
    message += `• ملاحظات إضافية: ${customerNotes.trim()}\n`;
  }

  message += `\n🛵 *الطيار هيجيكم طيران!*`;
  return message;
}

/**
 * Generate WhatsApp direct link
 */
export function getWhatsAppUrl(phone: string, text?: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  if (!text) {
    return `https://wa.me/${cleanPhone}`;
  }
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
