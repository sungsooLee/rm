import React, { useState, useEffect } from "react";

const requireContext = require.context("../../../icons", false, /\.svg$/);

export const iconMap = {};
requireContext.keys().forEach((filename) => {
  const name = filename.replace(/^\.\//, "").replace(/\.svg$/, "");
  const mod = requireContext(filename);
  iconMap[name] = mod.default || mod;
});

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
  fillColor, // 💡 기본값 삭제 (undefined일 때 로직 타지 않음)
  strokeColor, // 💡 기본값 삭제
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

        // 💡 props로 전달된 경우에만 치환 수행
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
