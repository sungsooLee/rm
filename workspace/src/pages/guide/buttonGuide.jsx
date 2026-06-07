import React, { useState } from "react";
// 스타일링용 (필요에 따라 파일 분리 또는 CSS-in-JS 적용)
import "./index.scss";
import { Button } from "../../assets/components/common/button/Button";

const ButtonGuide = () => {
  // 1. 코드를 한눈에 보여주기 위한 현재 선택된 형태의 상태 (스토리북 Play ground 기능 모방)
  const [activeVariant, setActiveVariant] = useState("primary");
  const [activeSize, setActiveSize] = useState("medium");
  const [isDisabled, setIsDisabled] = useState(false);

  // 복사할 동적 코드 스트링
  const currentCode = `<Button variant="${activeVariant}" size="${activeSize}"${isDisabled ? " disabled" : ""}>
  ${activeVariant.toUpperCase()} Button
</Button>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    alert("코드가 클립보드에 복사되었습니다!");
  };

  return (
    <div className="sb-story-container">
      {/* 스토리북 타이틀 영역 */}
      <header className="sb-header">
        <span className="sb-badge">COMPONENTS</span>
        <h1 className="sb-title">Button</h1>
        <p className="sb-description">
          다양한 크기, 형태, 상태를 지원하는 프로젝트 공통 버튼 컴포넌트입니다.
        </p>
      </header>

      <hr className="sb-divider" />

      {/* 🔹 SECTION 1: Canvas (미리보기 및 플레이그라운드) */}
      <section className="sb-section">
        <h2 className="sb-section-title">Canvas</h2>
        <div className="sb-canvas">
          <div className="sb-canvas-preview">
            {/* 현재 상태가 실시간 반영되는 메인 컴포넌트 */}
            <Button
              variant={activeVariant}
              size={activeSize}
              disabled={isDisabled}
            >
              {activeVariant.charAt(0).toUpperCase() + activeVariant.slice(1)}{" "}
              Button
            </Button>
          </div>

          {/* 하단 인터랙티브 컨트롤 툴바 */}
          <div className="sb-canvas-controls">
            <div className="control-field">
              <label>Variant</label>
              <select
                value={activeVariant}
                onChange={(e) => setActiveVariant(e.target.value)}
              >
                <option value="primary">primary</option>
                <option value="secondary">secondary</option>
                <option value="text">text</option>
                <option value="underline">underline</option>
                <option value="normal">normal</option>
              </select>
            </div>
            <div className="control-field">
              <label>Size</label>
              <select
                value={activeSize}
                onChange={(e) => setActiveSize(e.target.value)}
              >
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
              </select>
            </div>
            <div className="control-field">
              <label>Disabled</label>
              <input
                type="checkbox"
                checked={isDisabled}
                onChange={(e) => setIsDisabled(e.target.checked)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 2: Controls & Props 명세 (스토리북 ArgTypes 테이블) */}
      <section className="sb-section">
        <h2 className="sb-section-title">Props (ArgTypes)</h2>
        <div className="sb-table-wrapper">
          <table className="sb-props-table">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="prop-name">variant</td>
                <td className="prop-type">
                  'primary' | 'secondary' | 'text' | 'underline' | 'normal'
                </td>
                <td>'primary'</td>
                <td>버튼의 전반적인 스타일 시각적 형태를 결정합니다.</td>
              </tr>
              <tr>
                <td className="prop-name">size</td>
                <td className="prop-type">'small' | 'medium' | 'large'</td>
                <td>'medium'</td>
                <td>버튼의 높이, 패딩, 테두리 곡률(radius)을 조절합니다.</td>
              </tr>
              <tr>
                <td className="prop-name">disabled</td>
                <td className="prop-type">boolean</td>
                <td>false</td>
                <td>
                  활성화 여부를 제어하며, 참일 경우 클릭이 불가능해집니다.
                </td>
              </tr>
              <tr>
                <td className="prop-name">onClick</td>
                <td className="prop-type">function</td>
                <td>-</td>
                <td>버튼 클릭 시 실행할 이벤트 핸들러 함수입니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 🔹 SECTION 3: Code 블록 */}
      <section className="sb-section">
        <div className="sb-section-header">
          <h2 className="sb-section-title">JSX Code</h2>
          <button className="sb-copy-btn" onClick={handleCopy}>
            Copy Code
          </button>
        </div>
        <pre className="sb-code-block">
          <code>{currentCode}</code>
        </pre>
      </section>
    </div>
  );
};

export default ButtonGuide;
