import React, { useState } from "react";
import { Link } from "react-router-dom";

import RmHeader from "./header/RmHeader";
import RmFooter from "./footer/RmFooter";
import { Button } from "../common/button/Button";
import { Icon } from "../common/icon/Icon";

const RmLayout = ({
  headerProps = {},
  lnbProps = {},
  footerProps = {},
  children,
}) => {
  const [isLnbOpen, setIsLnbOpen] = useState(true);

  const {
    headerTitle = "",
    hasAlarm = false,
    notificationCount = 0,
    className: headerClassName = "",
  } = headerProps;

  const {
    hasLnb = true,
    hideToggleButton = true,
    menuItems = [],
    activeMenuIndex = 0,
    quickTitle = "전문가 시스템 바로가기",
    linkItems = [],
    activeLinkIndex = 0,
  } = lnbProps;

  const { hasFooter = true } = footerProps;

  const handleAsideToggle = () => {
    setIsLnbOpen((prev) => !prev);
  };

  const lnbClass = ["lnb", isLnbOpen ? "open" : ""].filter(Boolean).join(" ");

  return (
    <div className="wrap">
      <RmHeader
        headerTitle={headerTitle}
        hasAlarm={hasAlarm}
        notificationCount={notificationCount}
        className={headerClassName}
      />

      {/* LAYOUT */}
      <div className="layout">
        {/* LNB */}
        {hasLnb && (
          <aside className={lnbClass}>
            {!hideToggleButton && (
              <Button
                variant="normal"
                className="btn_toggle"
                onClick={handleAsideToggle}
              >
                <span className="sr_only">
                  {isLnbOpen ? "LNB 메뉴 열림" : "LNB 메뉴 닫힘"}
                </span>
              </Button>
            )}

            {/* NAV */}
            <nav className="nav">
              {menuItems.length > 0 && (
                <ul className="nav_menu">
                  {menuItems.map((item, index) => {
                    const isActive = activeMenuIndex === index;

                    return (
                      <li
                        key={item.key}
                        className={`nav_menu_item ${isActive ? "active" : ""}`}
                      >
                        <Button variant="normal" onClick={item.onClick}>
                          <Icon
                            name={item.iconName}
                            size="md"
                            strokeColor="none"
                            fillColor="none"
                            className="nav_icon"
                          />
                          <span className="label">{item.label}</span>
                        </Button>
                      </li>
                    );
                  })}
                </ul>
              )}

              {linkItems.length > 0 && (
                <div className="nav_quick_wrap">
                  <p className="nav_quick_title">{quickTitle}</p>

                  <ul className="nav_quick_menu">
                    {linkItems.map((item, index) => {
                      const isActive = activeLinkIndex === index;

                      return (
                        <li
                          key={item.key}
                          className={`nav_menu_item ${isActive ? "active" : ""}`}
                        >
                          <Link to={item.url} onClick={item.onClick}>
                            <span className="label">{item.label}</span>
                            <Icon name="ic-outlink" size="xs" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </nav>
          </aside>
        )}

        {/* MAIN */}
        <main className="container">
          {children}

          {/* FOOTER */}
          {hasFooter && <RmFooter />}
        </main>
      </div>
    </div>
  );
};

export default RmLayout;
