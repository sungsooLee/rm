import React from "react";
import "./Footer.scss";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`footer ${className}`}>
      <p>Footer Type 1</p>
    </footer>
  );
};

export default Footer;
