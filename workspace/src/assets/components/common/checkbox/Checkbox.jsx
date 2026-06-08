import React, { useId, useState } from "react";
import "./Checkbox.scss";

export const CheckboxGroup = ({
  options = [],
  direction = "horizontal",
  value = [],
  onChange,
  disabled = false,
  className = "",
}) => {
  const handleGroupChange = (checked, itemValue) => {
    if (checked) {
      onChange?.([...value, itemValue]);
    } else {
      onChange?.(value.filter((item) => item !== itemValue));
    }
  };

  return (
    <div className={`checkbox_group dir_${direction} ${className}`.trim()}>
      {options.map((option) => (
        <Checkbox
          key={option.value}
          value={option.value}
          label={option.label}
          checked={value.includes(option.value)}
          onChange={handleGroupChange}
          disabled={option.disabled || disabled}
        />
      ))}
    </div>
  );
};

export const Checkbox = ({
  label,
  value,
  checked,
  onChange,
  disabled = false,
  id,
  className,
}) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const [internalChecked, setInternalChecked] = useState(false);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? (checked ?? false) : internalChecked;

  const handleChange = (e) => {
    const next = e.target.checked;
    if (!isControlled) setInternalChecked(next);
    onChange?.(next, value);
  };

  const wrapClass = [
    "checkbox_wrap",
    className,
    isChecked ? "checked" : "",
    disabled ? "disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapClass}>
      <label htmlFor={inputId} className="checkbox">
        <input
          id={inputId}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          className="input"
          onChange={handleChange}
        />
        <span className="box" aria-hidden="true">
          <span className="icon">
            <svg viewBox="0 0 12 10" fill="none">
              <path
                d="M1 5L4.5 8.5L11 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>
        {label && <span className="label">{label}</span>}
      </label>
    </div>
  );
};
