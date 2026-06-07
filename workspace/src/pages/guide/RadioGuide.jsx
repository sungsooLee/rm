import React, { useState } from "react";
// 🔹 분리된 두 컴포넌트를 정석대로 임포트
import { Radio, RadioGroup } from "../../assets/components/common/radio/Radio";

const RadioGuide = () => {
  // Playground용 상태 관리
  const [activeDirection, setActiveDirection] = useState("horizontal");
  const [groupValue, setGroupValue] = useState("apple"); // 그룹 선택 상태
  const [singleChecked, setSingleChecked] = useState(false); // 단일 선택 상태
  const [isDisabled, setIsDisabled] = useState(false);

  // 샘플 데이터 배열
  const sampleOptions = [
    { value: "apple", label: "사과" },
    { value: "banana", label: "바나나" },
    { value: "orange", label: "오렌지" },
  ];

  // 🔹 새롭게 수정된 구조에 맞는 정석 코드 프리뷰 스트링
  const currentCode = `// 1. 단일 항목 단독 노출 시 (독립 사용)
const [singleChecked, setSingleChecked] = useState(false);

<Radio
  name="agree"
  value="Y"
  label="개인정보 수집에 동의합니다."
  checked={singleChecked}
  onChange={(val) => setSingleChecked(!singleChecked)}
/>

// 2. 여러 개 배열 그룹 노출 시 (RadioGroup으로 감싸서 사용)
const [groupValue, setGroupValue] = useState("apple");

<RadioGroup direction="${activeDirection}"${isDisabled ? " disabled" : ""}>
  <Radio
    name="fruits"
    value="apple"
    label="사과"
    checked={groupValue === "apple"}
    onChange={setGroupValue}
  />
  <Radio
    name="fruits"
    value="banana"
    label="바나나"
    checked={groupValue === "banana"}
    onChange={setGroupValue}
  />
  <Radio
    name="fruits"
    value="orange"
    label="오렌지"
    checked={groupValue === "orange"}
    onChange={setGroupValue}
  />
</RadioGroup>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    alert("코드가 클립보드에 복사되었습니다!");
  };

  return (
    <div className="sb-story-container">
      {/* 타이틀 영역 */}
      <header className="sb-header">
        <span className="sb-badge">COMPONENTS</span>
        <h1 className="sb-title">Radio & RadioGroup</h1>
        <p className="sb-description">
          독립적인 단일 라디오 항목은 단독 컴포넌트로 사용하며, 다중 선택 그룹은
          RadioGroup 컴포넌트로 감싸 레이아웃 정렬을 제어합니다.
        </p>
      </header>

      <hr className="sb-divider" />

      {/* 🔹 Canvas 영역 (미리보기 및 플레이그라운드) */}
      <section className="sb-section">
        <h2 className="sb-section-title">Canvas</h2>
        <div className="sb-canvas">
          <div
            className="sb-canvas-preview"
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            {/* 1. 그룹 테스트 미리보기 영역 */}
            <div>
              <h4
                style={{
                  fontSize: "1.3rem",
                  color: "#666",
                  marginBottom: "8px",
                }}
              >
                Radio Group Example
              </h4>
              <RadioGroup direction={activeDirection}>
                {sampleOptions.map((option) => (
                  <Radio
                    key={option.value}
                    name="guide_fruits"
                    value={option.value}
                    label={option.label}
                    checked={groupValue === option.value}
                    onChange={setGroupValue}
                    disabled={isDisabled}
                  />
                ))}
              </RadioGroup>
            </div>

            {/* 2. 단일 테스트 미리보기 영역 */}
            <div>
              <h4
                style={{
                  fontSize: "1.3rem",
                  color: "#666",
                  marginBottom: "8px",
                }}
              >
                Single Radio Example
              </h4>
              <Radio
                name="guide_agree"
                value="Y"
                label="개인정보 수집 및 이용 약관에 동의합니다."
                checked={singleChecked}
                onChange={() => setSingleChecked(!singleChecked)}
                disabled={isDisabled}
              />
            </div>
          </div>

          {/* 컨트롤러 툴바 */}
          <div className="sb-canvas-controls">
            <div className="control-field">
              <label>Group Direction</label>
              <select
                value={activeDirection}
                onChange={(e) => setActiveDirection(e.target.value)}
              >
                <option value="horizontal">horizontal (가로)</option>
                <option value="vertical">vertical (세로)</option>
              </select>
            </div>
            <div className="control-field">
              <label>Disabled (전체 비활성화)</label>
              <input
                type="checkbox"
                checked={isDisabled}
                onChange={(e) => setIsDisabled(e.target.checked)}
              />
            </div>
            <div className="control-field">
              <label>Group Value</label>
              <span
                className="sb-value-display"
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  color: "#1ea7fd",
                }}
              >
                "{groupValue}"
              </span>
            </div>
            <div className="control-field">
              <label>Single Checked</label>
              <span
                className="sb-value-display"
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  color: "#1ea7fd",
                }}
              >
                {singleChecked ? "true" : "false"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Props 명세서 테이블 */}
      <section className="sb-section">
        <h2 className="sb-section-title">Props Specification</h2>

        <h3 style={{ fontSize: "1.6rem", margin: "16px 0 8px" }}>Radio</h3>
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
                <td className="prop-name">label</td>
                <td className="prop-type">string | ReactNode</td>
                <td>undefined</td>
                <td>라디오 우측에 매핑될 UI 라벨 텍스트입니다.</td>
              </tr>
              <tr>
                <td className="prop-name">name</td>
                <td className="prop-type">string</td>
                <td>-</td>
                <td>라디오 노드의 고유 name 네임스페이스 속성입니다.</td>
              </tr>
              <tr>
                <td className="prop-name">value</td>
                <td className="prop-type">string</td>
                <td>-</td>
                <td>해당 아이템이 가진 선택 값 식별자입니다.</td>
              </tr>
              <tr>
                <td className="prop-name">checked</td>
                <td className="prop-type">boolean</td>
                <td>false</td>
                <td>해당 단일 라디오의 활성화 선택 상태 값입니다.</td>
              </tr>
              <tr>
                <td className="prop-name">onChange</td>
                <td className="prop-type">(value: string) =&gt; void</td>
                <td>-</td>
                <td>
                  클릭하여 상태 변경이 감지될 때 동작하는 콜백 함수입니다.
                </td>
              </tr>
              <tr>
                <td className="prop-name">disabled</td>
                <td className="prop-type">boolean</td>
                <td>false</td>
                <td>해당 항목의 비활성화 여부를 설정합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={{ fontSize: "1.6rem", margin: "24px 0 8px" }}>RadioGroup</h3>
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
                <td className="prop-name">direction</td>
                <td className="prop-type">'horizontal' | 'vertical'</td>
                <td>'horizontal'</td>
                <td>
                  내부 자식 자리에 올 라디오 노드들의 정렬 레이아웃 방향을
                  정의합니다.
                </td>
              </tr>
              <tr>
                <td className="prop-name">children</td>
                <td className="prop-type">ReactNode</td>
                <td>-</td>
                <td>
                  내부에 삽입될 하위 Radio 엘리먼트 배열 마크업 영역입니다.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 🔹 JSX Code 블록 */}
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

export default RadioGuide;
