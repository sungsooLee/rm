import React from "react";
import "./Popup.scss";

const Popup = ({ isOpen, title, children, footer, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="pop_wrap">
      <div className="dimm" onClick={onClose} />

      <div className="pop_inner">
        {title && <div className="pop_header">{title}</div>}

        <div className="pop_contents">{children}</div>

        {footer && <div className="pop_footer">{footer}</div>}
      </div>

      <div className="pop_close">
        <button type="button" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default Popup;
