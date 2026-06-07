import React, { useState } from "react";
import "./Tab.scss";

export const TabGroup = ({
  items = [],
  activeId,
  defaultActiveId,
  variant = "line",
  onChange,
  className,
}) => {
  const firstId = items[0]?.id ?? "";
  const [internalId, setInternalId] = useState(defaultActiveId ?? firstId);

  const currentId = activeId ?? internalId;
  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.id === currentId),
  );
  const activeItem = items[activeIndex] ?? items[0];

  const handleSelect = (id, disabled) => {
    if (disabled) return;

    if (activeId === undefined) {
      setInternalId(id);
    }
    onChange?.(id);
  };

  if (items.length === 0) return null;

  return (
    <div className={`tab_group type_${variant} ${className ?? ""}`.trim()}>
      <div className="tab_list" role="tablist">
        {items.map((item) => {
          const isActive = item.id === activeItem?.id;
          const tabClass = [
            "tab",
            isActive ? "active" : "",
            item.disabled ? "disabled" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={isActive}
              aria-controls={`tabpanel-${item.id}`}
              disabled={item.disabled}
              className={tabClass}
              onClick={() => handleSelect(item.id, item.disabled)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div
        className="tab_panel"
        role="tabpanel"
        id={`tabpanel-${activeItem.id}`}
        aria-labelledby={`tab-${activeItem.id}`}
      >
        {activeItem.content}
      </div>
    </div>
  );
};
