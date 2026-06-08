import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../common/button/Button";
import { Icon } from "../../common/icons/Icon";
import "./Header.scss";

const Header = ({ className = "" }) => {
  return (
    <header className={className}>
      {/* LOGO */}
      <h1 className="logo">
        <Link to="/">
          <Icon name="ic_logo" size="lg" strokeColor="none" />
          <span className="label">WON-SHOT 기업리포트</span>
        </Link>
      </h1>

      {/* QUICK MENU */}
      <div className="quick_menu">
        {/* ALARM */}
        <div className="alarm_view">
          <Button variant="normal">
            <Icon
              name="ic_alarm"
              size="md"
              strokeColor="#4C4F58"
              fillColor="#4C4F58"
            />
          </Button>

          <span className="num_view">3</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
