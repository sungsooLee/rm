import React from "react";
import "./Button.scss"; // 일반 CSS 파일 임포트

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  onClick,
  disabled = false,
  type = "button",
}) => {
  // 가독성을 위해 클래스네임 조립 과정을 변수로 분리
  const buttonClass =
    `btn ${variant} ${size} ${disabled ? "disabled" : ""} ${className}`.trim();

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonClass}
    >
      {children}
    </button>
  );
};
