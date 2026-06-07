import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

// 컴포넌트 임포트
import ButtonGuide from "./ButtonGuide";
import RadioGuide from "./RadioGuide";
// import ToggleButton from "./toggle-button";
// import Form from "./form";
// import Icon from "./icon";
// import SelectButton from "./select-button";
// import FloatingButton from "./floating-button";
// import Textarea from "./textarea";
// import Tab from "./tab";
// import Popup from "./popup";
// import Table from "./table";
// import Accordion from "./accordion";
// import Tooltip from "./tooltip";
// import Alert from "./alert";
// import Dropdown from "./dropdown";
// import Checkbox from "./checkbox";
// import Radio from "./radio";

const guideList = [
  { key: "button", label: "Button", component: ButtonGuide },
  { key: "radio", label: "Radio", component: RadioGuide },
  //   { key: "toggle", label: "ToggleButton", component: ToggleButton },
  //   { key: "icons", label: "Icons", component: Icon },
  //   { key: "form", label: "Form", component: Form },
  //   { key: "select button", label: "SelectButton", component: SelectButton },
  //   {
  //     key: "floating button",
  //     label: "FloatingButton",
  //     component: FloatingButton,
  //   },
  //   { key: "textarea", label: "Textarea", component: Textarea },
  //   { key: "tab", label: "Tab", component: Tab },
  //   { key: "popup", label: "Popup", component: Popup },
  //   { key: "alert", label: "Alert", component: Alert },
  //   { key: "table", label: "Table", component: Table },
  //   { key: "accordion", label: "Accordion", component: Accordion },
  //   { key: "tooltip", label: "Tooltip", component: Tooltip },
  //   { key: "dropdown", label: "Dropdown", component: Dropdown },
  //   { key: "checkbox", label: "Checkbox", component: Checkbox },
  //   { key: "radio", label: "Radio", component: Radio },
];

const GuidePage = () => {
  const [activeKey, setActiveKey] = useState(guideList[0].key);

  const currentItem = guideList.find((g) => g.key === activeKey);
  const CurrentComponent = currentItem ? currentItem.component : null;

  return (
    <div className="guide-container">
      <div className="guide-header">
        <h1>퍼블리싱 가이드</h1>
        <p>컴포넌트 사용법을 확인하고 복사해서 사용</p>
        <Link to="./work-list" className="btn-guide">
          퍼블 작업리스트 보기
        </Link>
      </div>

      <div className="guide-tabs">
        {guideList.map((item) => {
          const tabClass =
            `tab ${activeKey === item.key ? "active" : ""}`.trim();

          return (
            <button
              key={item.key}
              className={tabClass}
              onClick={() => setActiveKey(item.key)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="guide-content">
        {CurrentComponent && <CurrentComponent />}
      </div>
    </div>
  );
};

export default GuidePage;
