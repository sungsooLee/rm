import React from "react";
import "./Radio.scss";

export const RadioGroup = ({
  children,
  className = "",
}) => {
  return (
    <div className={`radio_group ${className}`.trim()}>
      {children}
    </div>
  );
};
