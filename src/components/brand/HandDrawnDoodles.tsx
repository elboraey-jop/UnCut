import React from "react";

interface DoodleProps {
  className?: string;
  color?: string;
}

/**
 * Authentic Hand-drawn Crepe illustration inspired by the uncut. flyer
 */
export function CrepeDoodle({
  className = "w-20 h-16",
  color = "#191816",
}: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
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
        opacity="0.4"
      />
      <path d="M20 28 L50 92" />
      <path d="M80 28 L50 92" />
      <path d="M20 28 Q50 36, 80 28" />

      {/* Delicious fillings bursting from the top */}
      {/* Crispy Chicken Tender 1 */}
      <path
        d="M32 30 C30 18, 42 14, 46 26"
        fill="#FAF6F2"
        stroke={color}
      />
      {/* Crispy Chicken Tender 2 */}
      <path
        d="M54 26 C58 12, 70 16, 68 28"
        fill="#FAF6F2"
        stroke={color}
      />
      {/* Wavy fresh lettuce / veggies */}
      <path
        d="M26 28 Q30 20, 36 26 Q42 18, 48 24 Q54 18, 60 25 Q66 18, 74 27"
        stroke={color}
        strokeWidth="2"
      />
      {/* Red signature sauce drizzle */}
      <path
        d="M30 24 Q45 14, 56 22 Q68 15, 75 22"
        stroke="#D82229"
        strokeWidth="2.6"
      />

      {/* Grill marks & crunchy fold texture */}
      <line x1="38" y1="44" x2="52" y2="54" stroke={color} strokeWidth="2" />
      <line x1="42" y1="58" x2="58" y2="68" stroke="#D82229" strokeWidth="2.2" />
      <line x1="46" y1="72" x2="54" y2="78" stroke={color} strokeWidth="1.8" />

      {/* Crunchy spice dots */}
      <circle cx="48" cy="38" r="1.5" fill={color} />
      <circle cx="36" cy="60" r="1.5" fill="#D82229" />
      <circle cx="58" cy="48" r="1.5" fill={color} />
    </svg>
  );
}

/**
 * Authentic Hand-drawn Burger illustration with flying toppings
 */
export function BurgerDoodle({
  className = "w-20 h-20",
  color = "#191816",
}: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Top Bun */}
      <path d="M25 50 C25 25, 95 25, 95 50 Z" />
      {/* Sesame seeds on bun */}
      <ellipse cx="45" cy="38" rx="2" ry="1" transform="rotate(-15 45 38)" fill={color} />
      <ellipse cx="60" cy="32" rx="2" ry="1" fill={color} />
      <ellipse cx="75" cy="40" rx="2" ry="1" transform="rotate(20 75 40)" fill={color} />

      {/* Melting Cheese / Sauce wave */}
      <path d="M22 55 Q35 60, 48 53 Q60 62, 75 54 Q88 61, 98 54" stroke="#D82229" strokeWidth="2.5" />

      {/* Beef Patty */}
      <rect x="22" y="60" width="76" height="12" rx="6" />

      {/* Lettuce leaves wavy */}
      <path d="M18 76 C25 72, 35 78, 45 74 C55 80, 68 73, 78 78 C88 74, 98 78, 102 75" />

      {/* Bottom Bun */}
      <path d="M26 80 C26 92, 94 92, 94 80 Z" />

      {/* Floating ingredients (Tomato & Pepper doodle) */}
      <g transform="translate(10, 10) scale(0.65)" stroke="#D82229">
        <circle cx="35" cy="20" r="14" />
        <path d="M35 10 C35 18, 43 20, 43 20" />
      </g>
    </svg>
  );
}

/**
 * "الطيار هيجيكم طيران" Fast Delivery Motorcycle Doodle
 */
export function DeliveryMotorcycleDoodle({
  className = "w-24 h-16",
  color = "#191816",
}: DoodleProps) {
  return (
    <svg
      viewBox="0 0 160 100"
      fill="none"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Speed lines */}
      <line x1="5" y1="35" x2="35" y2="35" strokeDasharray="4 4" stroke="#D82229" />
      <line x1="12" y1="45" x2="45" y2="45" strokeDasharray="5 3" />
      <line x1="2" y1="55" x2="28" y2="55" strokeDasharray="3 3" stroke="#D82229" />

      {/* Rear Wheel with spokes */}
      <circle cx="50" cy="72" r="18" />
      <circle cx="50" cy="72" r="6" />
      <line x1="50" y1="54" x2="50" y2="90" />
      <line x1="32" y1="72" x2="68" y2="72" />

      {/* Front Wheel with spokes */}
      <circle cx="130" cy="72" r="18" />
      <circle cx="130" cy="72" r="6" />
      <line x1="130" y1="54" x2="130" y2="90" />
      <line x1="112" y1="72" x2="148" y2="72" />

      {/* Motorcycle Frame */}
      <path d="M50 72 L75 52 L105 52 L130 72" />
      <path d="M75 52 L88 72 L105 52" />
      <path d="M88 72 L50 72" />

      {/* Seat & Fuel Tank */}
      <path d="M60 46 C65 42, 85 42, 95 48 C98 51, 80 54, 60 46 Z" fill="#D82229" stroke="#D82229" />

      {/* Handlebars & Fork */}
      <path d="M105 52 L115 32 L125 32" />
      <path d="M115 32 L130 72" />

      {/* Exhaust pipe */}
      <path d="M85 70 L55 76 L40 76" strokeWidth="3" />
    </svg>
  );
}

/**
 * French Baguette scored bread doodle
 */
export function BaguetteDoodle({
  className = "w-20 h-10",
  color = "#191816",
}: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 50"
      fill="none"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Baguette long oval */}
      <path d="M10 25 C10 12, 110 12, 110 25 C110 38, 10 38, 10 25 Z" />
      {/* Diagonal cuts */}
      <line x1="32" y1="18" x2="42" y2="32" />
      <line x1="52" y1="18" x2="62" y2="32" stroke="#D82229" />
      <line x1="72" y1="18" x2="82" y2="32" />
      <line x1="92" y1="18" x2="100" y2="30" />
    </svg>
  );
}
