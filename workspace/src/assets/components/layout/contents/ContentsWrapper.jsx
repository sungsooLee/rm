import React from "react";
import "./ContentsWrapper.scss";

export const ContentsWrapper = ({
  layout = "full",
  columns,
  className = "",
  children,
}) => {
  const baseClass = "contents_wrapper";

  const layoutClass = layout ? layout : "";

  const columnClass = layout === "column" && columns ? `col_${columns}` : "";

  const finalClassName = [baseClass, layoutClass, columnClass, className]
    .filter(Boolean)
    .join(" ");

  return <div className={finalClassName}>{children}</div>;
};
