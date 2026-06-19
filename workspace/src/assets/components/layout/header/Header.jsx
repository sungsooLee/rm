import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../common/button/Button";
import { Icon } from "../../common/icons/Icon";
import cn from "classnames";

const Header = ({
  headerTitle,
  hasAlarm = false,
  notificationCount = 0,
  className = "",
}) => {
  return (
    <header className={cn("header", className)}>
      {/* LOGO */}
      <h1 className="logo">
        <Link to="/">
          <Icon name="ic-logo" size="lg" strokeColor="none" />
          <span className="label">{headerTitle}</span>
        </Link>
      </h1>

      {/* QUICK MENU */}
      <div className="top_menu">
        {/* ALARM */}
        <div
          className={cn("menu_alarm", {
            active: hasAlarm,
          })}
        >
          <Button variant="normal">
            <Icon
              name={"ic-ui-bell"}
              size={"md"}
              strokeColor={"#4C4F58"}
              fillColor={"#4C4F58"}
            />
          </Button>
        </div>

        <div className={cn("menu_folder")}>
          <Button variant="normal">
            <Icon name={"ic-ui-folder"} size={"md"} />
            {notificationCount > 0 && (
              <span className={"noti_count"}>{notificationCount}</span>
            )}
          </Button>
        </div>

        <div className={cn("menu_setting")}>
          <Button variant="normal">
            <Icon name={"ic-ui-setting"} size={"md"} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
