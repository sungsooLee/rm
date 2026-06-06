import React from "react";
import { iconMap } from "./index";

const sizeMap = {
  xs: 16,
  sm: 18,
  md: 24,
  lg: 32,
  xl: 48,
};

/**
 * Icon Component
 *
 * Props:
 * - name: 아이콘 이름 (iconMap에 등록된 키)
 * - size: "xs" | "sm" | "md" | "lg" | "xl"
 * - fillColor: 아이콘 색상 (기본 currentColor)
 * - strokeColor: 외곽선 색상 (기본 currentColor)
 * - className: 추가 클래스명
 */
export default function Icon({
  name,
  size = "md",
  fillColor = "currentColor",
  strokeColor = "currentColor",
  className = "",
}) {
  const SvgIcon = iconMap[name];
  const iconSize = sizeMap[size];

  if (!SvgIcon) {
    console.warn(`Icon "${name}" not found in assets/icons`);
    return null;
  }

  return (
    <SvgIcon
      width={iconSize}
      height={iconSize}
      style={{ color: fillColor }}
      stroke={strokeColor}
      className={`svg-icon ${size} ${className}`}
    />
  );
}
