import React from "react";
import "./Radio.scss";

export const RadioGroup = ({
  children,
  direction = "horizontal",
  className = "",
}) => {
  return (
    <div className={`radio_group dir_${direction} ${className}`.trim()}>
      {children}
    </div>
  );
};
