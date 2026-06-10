import React, { useId, useState } from "react";
import "./Radio.scss";

const getInitialValue = (options) =>
  options.find((option) => option.checked)?.value ?? "";

export const RadioGroup = ({
  options = [],
  name,
  value,
  onChange,
  className = "",
}) => {
  const generatedName = useId();
  const groupName = name ?? generatedName;
  const isControlled = onChange !== undefined;
  const [internalValue, setInternalValue] = useState(() =>
    getInitialValue(options),
  );
  const groupValue = isControlled ? (value ?? "") : internalValue;
  const handleGroupChange = (itemValue) => {
    if (isControlled) {
      onChange(itemValue);
    } else {
      setInternalValue(itemValue);
    }
  };

  return (
    <div className={`radio_group ${className}`.trim()}>
      {options.map((option) => (
        <Radio
          key={option.value}
          name={groupName}
          value={option.value}
          label={option.label}
          checked={groupValue === option.value}
          onChange={handleGroupChange}
          disabled={option.disabled}
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
  const isControlled = onChange !== undefined;
  const [internalChecked, setInternalChecked] = useState(() => checked ?? false);
  const isChecked = isControlled ? (checked ?? false) : internalChecked;

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
