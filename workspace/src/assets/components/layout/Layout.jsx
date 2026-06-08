import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { Button } from "../common/button/Button";
import { Icon } from "../icons/Icon";
import "./layout.scss";

const Layout = ({
  hasAside = false,
  hasFooter = true,
  asideMenuItems = [],
  asideActiveMenuIndex = 0,
  children,
}) => {
  const [isAsideOpen, setIsAsideOpen] = useState(true);

  const handleAsideToggle = () => {
    setIsAsideOpen((prev) => !prev);
  };

  const asideClass = ["aside", isAsideOpen ? "open" : ""].join(" ");

  return (
    <div className="wrap">
      <Header />

      {/* LAYOUT */}
      <div className="layout">
        {/* ASIDE */}
        {hasAside && (
          <aside className={asideClass}>
            <div className="logo_wrap">
              <h1 className="logo">
                <Icon name="ic_logo" size="lg" strokeColor="none" />
                <span className="label">
                  WON-SHOT
                  <br />
                  기업리포트
                </span>
              </h1>

              <Button
                variant="normal"
                className="btn_toggle"
                onClick={handleAsideToggle}
              >
                <span className="sr_only">토글</span>
              </Button>
            </div>

            {/* NAV */}
            <nav className="nav">
              <ul className="nav_menu">
                {asideMenuItems.map((item, index) => {
                  const isActive = asideActiveMenuIndex === index;

                  const itemClass = [
                    "nav_menu_item",
                    isActive ? "active" : "",
                  ].join(" ");

                  return (
                    <li key={item.key} className={itemClass}>
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
            </nav>
          </aside>
        )}

        {/* MAIN */}
        <main className="container">{children}</main>
      </div>

      {/* FOOTER (optional) */}
      {hasFooter && <Footer />}
    </div>
  );
};

export default Layout;
