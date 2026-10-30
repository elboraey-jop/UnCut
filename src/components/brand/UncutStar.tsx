import React from "react";

interface UncutStarProps {
  className?: string;
  size?: number;
  color?: string;
}

/**
 * Authentic hand-drawn 5-pointed star motif from uncut.'s brand identity.
 */
export function UncutStar({
  className = "w-5 h-5",
  size,
  color = "currentColor",
}: UncutStarProps) {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <svg
      viewBox="0 0 100 100"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* Hand-drawn wonky 5-point star path traced from the brand flyer */}
      <path d="M50 4 L61 34 L95 24 L73 51 L96 76 L62 68 L52 98 L40 68 L7 80 L28 53 L3 26 L38 34 Z" />
    </svg>
  );
}

export function RedStar({ className = "w-5 h-5" }: { className?: string }) {
  return <UncutStar className={`${className} text-[#D82229] inline-block`} />;
}
