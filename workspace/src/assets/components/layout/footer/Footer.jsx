import React from "react";
import { Icon } from "../../common/icons/Icon";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`footer ${className}`}>
      <p>
        <Icon name={"ic-footer-logo"} />
        COPYRIGHTS WOORI BANK. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
};

export default Footer;
