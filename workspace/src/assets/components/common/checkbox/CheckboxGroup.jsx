import React from "react";
import "./Checkbox.scss";

export const CheckboxGroup = ({
  children,
  className = "",
}) => {
  return (
    <div className={`checkbox_group ${className}`.trim()}>
      {children}
    </div>
  );
};
