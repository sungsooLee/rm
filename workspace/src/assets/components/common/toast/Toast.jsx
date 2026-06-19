import { useEffect } from "react";
import "./Toast.scss";

export const Toast = ({
  isOpen = false,
  message,
  variant = "default",
  position = "bottom",
  duration = 3000,
  className = "",
  onClose,
}) => {
  useEffect(() => {
    if (!isOpen || !duration || !onClose) return;

    const timer = window.setTimeout(onClose, duration);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isOpen, duration, onClose]);

  const toastClass = [
    "toast",
    isOpen && "open",
    variant,
    position,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={toastClass}
      role="alert"
      aria-live="polite"
    >
      <div className="toastArea">
        <div className={`toastIcon ${variant}`}></div>
        <div className="toastContent">
          {message && <p className="toastMessage">{message}</p>}
        </div>
        <button
          type="button"
          className="closeBtn"
          onClick={onClose}
          aria-label="토스트 닫기"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;
