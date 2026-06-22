import React from "react";
import { Icon } from "../../common/icon/Icon";

const RmFooter = ({ className = "" }) => {
  return (
    <footer className={`footer ${className}`}>
      <p>
        <Icon name={"ic-footer-logo"} />
        COPYRIGHTS WOORI BANK. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
};

export default RmFooter;
