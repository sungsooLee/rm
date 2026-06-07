import React, { useId, useState } from "react";
import "./Radio.scss";

export const RadioGroup = ({
  options = [],
  direction = "horizontal",
  name,
  value,
  onChange,
  disabled = false,
  className = "",
}) => {
  return (
    <div className={`radio_group dir_${direction} ${className}`.trim()}>
      {options.map((option, index) => (
        <Radio
          key={option.value}
          name={name}
          value={option.value}
          label={option.label}
          checked={value === option.value}
          onChange={onChange}
          disabled={option.disabled || disabled}
        />
      ))}
    </div>
  );
};

export const Radio = ({
  label,
  name,
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
  const isChecked = isControlled ? checked : internalChecked;

  const handleChange = (event) => {
    if (!event.target.checked) return;

    if (!isControlled) setInternalChecked(true);
    onChange?.(value);
  };

  const wrapClass = [
    "radio_wrap",
    className,
    isChecked ? "checked" : "",
    disabled ? "disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapClass}>
      <label htmlFor={inputId} className="radio_label">
        <input
          id={inputId}
          type="radio"
          name={name}
          value={value}
          checked={isChecked}
          disabled={disabled}
          className="radio_input"
          onChange={handleChange}
        />
        <span className="radio_box" aria-hidden="true">
          <span className="radio_icon" />
        </span>
        {label && <span className="radio_text">{label}</span>}
      </label>
    </div>
  );
};
