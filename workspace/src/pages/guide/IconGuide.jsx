import React, { useState } from "react";
import { Icon, iconMap } from "../../assets/components/common/icon/Icon";
import "./index.scss";

const IconGuide = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSize, setSelectedSize] = useState("md");
  const [selectedColor, setSelectedColor] = useState(""); // 💡 빈 값으로 초기화 (원본 유지)
  const [copiedName, setCopiedName] = useState("");

  const allIconNames = Object.keys(iconMap);
  const filteredIcons = allIconNames.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleCopyCode = (name) => {
    // 💡 선택된 색상이 있을 때만 속성을 포함하여 코드 복사
    const colorProp = selectedColor ? ` fillColor="${selectedColor}"` : "";
    const codeString = `<Icon name="${name}" size="${selectedSize}"${colorProp} />`;

    navigator.clipboard.writeText(codeString);
    setCopiedName(name);
    setTimeout(() => setCopiedName(""), 1500);
  };

  return (
    <div className="icon-guide-module">
      <div className="sb-story-container">
        <header className="sb-header">
          <span className="sb-badge">DESIGN SYSTEM</span>
          <h1 className="sb-title">Icons ({allIconNames.length})</h1>
        </header>

        <div className="sb-toolbar">
          <input
            type="text"
            className="sb-search-input"
            placeholder="아이콘 이름 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* 색상 선택기 */}
            <input
              type="color"
              value={selectedColor || "#333333"}
              onChange={(e) => setSelectedColor(e.target.value)}
              style={{ cursor: "pointer", height: "30px" }}
            />
            {/* 💡 원본 복구(초기화) 버튼 */}
            <button
              onClick={() => setSelectedColor("")}
              style={{ padding: "5px 10px", cursor: "pointer" }}
            >
              Reset Color
            </button>

            <select
              onChange={(e) => setSelectedSize(e.target.value)}
              value={selectedSize}
            >
              {["xs", "sm", "md", "lg", "xl"].map((s) => (
                <option key={s} value={s}>
                  {s.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="sb-grid">
          {filteredIcons.map((iconName) => (
            <div
              key={iconName}
              onClick={() => handleCopyCode(iconName)}
              className={`sb-card ${copiedName === iconName ? "copied" : ""}`}
            >
              {copiedName === iconName && (
                <span className="sb-copy-badge">Copied!</span>
              )}
              <div className="sb-icon-wrapper">
                {/* 💡 selectedColor가 있을 때만 fillColor 속성을 전달 */}
                <Icon
                  name={iconName}
                  size={selectedSize}
                  {...(selectedColor ? { fillColor: selectedColor } : {})}
                />
              </div>
              <span className="sb-icon-name">{iconName}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconGuide;
