import React from "react";

export const PageContainer = ({
  layout = "full",
  columns,
  title,
  className = "",
  children,
}) => {
  const baseClass = "page_container";

  const layoutClass = layout ? layout : "";

  const columnClass = layout === "column" && columns ? `col_${columns}` : "";

  const finalClassName = [baseClass, layoutClass, columnClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={finalClassName}>
      {title && <h2 className="contents_title">{title}</h2>}
      {children}
    </div>
  );
};
