import React from "react";
import "./Checkbox.scss";

export const CheckboxGroup = ({
  children,
  direction = "horizontal",
  className = "",
}) => {
  return (
    <div className={`checkbox_group dir_${direction} ${className}`.trim()}>
      {children}
    </div>
  );
};
