import React, { useState, useEffect } from "react";

// 1. ⚠️ 원본 Webpack 로직 (절대 수정 금지 - 기존 형태 그대로 유지)
// 조건문 밖으로 꺼내서 Webpack 정적 분석기가 무조건 읽을 수 있게 만들었습니다.
const requireContext = require.context("../../../icons", false, /\.svg$/);

export const iconMap = {};
requireContext.keys().forEach((filename) => {
  const name = filename.replace(/^\.\//, "").replace(/\.svg$/, "");
  const mod = requireContext(filename);
  iconMap[name] = mod.default || mod;
});

// 2. ✨ Vite 환경을 위한 백업 로직 (Webpack에 영향 주지 않음)
// 만약 Webpack이 아니라 Vite 환경이라 위의 iconMap이 텅 비어있을 때만 이 로직이 작동합니다.
if (Object.keys(iconMap).length === 0 && import.meta && import.meta.glob) {
  const modules = import.meta.glob("../../../icons/*.svg", { eager: true });
  Object.entries(modules).forEach(([path, mod]) => {
    const name = path
      .split("/")
      .pop()
      .replace(/\.svg$/, "");
    iconMap[name] = mod.default || mod;
  });
}

const sizeMap = {
  xs: 16,
  sm: 18,
  md: 24,
  lg: 32,
  xl: 48,
};

export const Icon = ({
  name,
  size = "md",
  className = "",
  fillColor,
  strokeColor,
  ...props
}) => {
  const iconSrc = iconMap[name];
  const iconSize = sizeMap[size];
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    if (!iconSrc) return;

    fetch(iconSrc)
      .then((res) => res.text())
      .then((rawText) => {
        let processedSvg = rawText
          .replace(/width="[^"\r\n]*"/i, `width="${iconSize}"`)
          .replace(/height="[^"\r\n]*"/i, `height="${iconSize}"`);

        if (fillColor) {
          processedSvg = processedSvg.replace(
            /fill="[^"\r\n]*"/gi,
            `fill="${fillColor}"`,
          );
        }
        if (strokeColor) {
          processedSvg = processedSvg.replace(
            /stroke="[^"\r\n]*"/gi,
            `stroke="${strokeColor}"`,
          );
        }

        setSvgContent(processedSvg);
      });
  }, [iconSrc, iconSize, fillColor, strokeColor]);

  if (!iconSrc) return null;

  return (
    <span
      className={`icon_wrap ${size} ${className}`.trim()}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      dangerouslySetInnerHTML={svgContent ? { __html: svgContent } : undefined}
      {...props}
    />
  );
};

export default Icon;
