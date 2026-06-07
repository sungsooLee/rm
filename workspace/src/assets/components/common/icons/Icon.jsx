import React from "react";
import { iconMap } from "./index";

const sizeMap = {
  xs: 16,
  sm: 18,
  md: 24,
  lg: 32,
  xl: 48,
};

export const Icon = ({ name, size = "md", className = "" }) => {
  const iconSrc = iconMap[name];
  const iconSize = sizeMap[size];

  if (!iconSrc) {
    console.warn(
      `Icon "${name}"을/를 assets/icons 폴더 내에서 찾을 수 없습니다.`,
    );
    return null;
  }

  // 💡 복잡한 스타일링 없이 SVG 파일 원본 구조 그대로 노출하는 img 태그 방식
  return (
    <img
      src={iconSrc}
      alt={name}
      width={iconSize}
      height={iconSize}
      className={`svg-icon ${size} ${className}`.trim()}
    />
  );
};

export default Icon;
