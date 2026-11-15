import React from "react";

export default function WestPacificLogo({ highContrast = false, inverted = false, size = 48 }) {
  const useLight = highContrast || inverted;
  const strokeAndText = useLight ? "#FFFFFF" : "#0F2942";
  const mountainColor = highContrast ? "#FACC15" : "#B8332A";
  const snowCapColor = useLight ? (highContrast ? "#000000" : "#0F2942") : "#F8F6F2";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 220 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="LOCAL ART Greater Vancouver Logo"
      className="shrink-0"
    >
      <rect
        x="10"
        y="10"
        width="184"
        height="206"
        stroke={strokeAndText}
        strokeWidth="6"
      />
      <rect
        x="22"
        y="22"
        width="184"
        height="206"
        stroke={strokeAndText}
        strokeWidth="6"
      />
      <text
        x="26"
        y="112"
        fill={strokeAndText}
        fontFamily="Arial Black, Lexend, sans-serif"
        fontWeight="900"
        fontSize="92"
        letterSpacing="-4"
      >
        BC
      </text>
      <text
        x="26"
        y="206"
        fill={strokeAndText}
        fontFamily="Arial Black, Lexend, sans-serif"
        fontWeight="900"
        fontSize="94"
      >
        L
      </text>
      <polygon points="150,118 104,206 196,206" fill={mountainColor} />
      <polygon
        points="150,124 137,150 145,149 152,158 156,153 163,157"
        fill={snowCapColor}
      />
    </svg>
  );
}
