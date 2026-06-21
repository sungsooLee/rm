import React from "react";
import cn from "classnames";

export const PageContainer = ({
  layout = "center", // center , column
  columns,
  title,
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "page_container",
        layout,
        {
          [`col_${columns}`]: layout === "column" && columns,
        },
        className,
      )}
    >
      {title && <h2 className="contents_title">{title}</h2>}
      {children}
    </div>
  );
};
