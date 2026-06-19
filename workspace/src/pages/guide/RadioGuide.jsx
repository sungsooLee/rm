import React, { useState } from "react";
import { Radio, RadioGroup } from "../../assets/components/common/radio/Radio";

const RadioGuide = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const sampleOptions = [
    { value: "apple", label: "사과", checked: true },
    { value: "banana", label: "바나나", disabled: true },
    { value: "orange", label: "오렌지" },
  ];

  const currentCode = `// 1. 단일 항목 단독 노출 시 (독립 사용)
<Radio
  name="agree"
  value="Y"
  label="개인정보 수집에 동의합니다."
  checked={true}
/>

// 2. 여러 개 배열 그룹 노출 시 (RadioGroup에 options 주입)
<RadioGroup
  options={[
    { value: "apple", label: "사과", checked: true },
    { value: "banana", label: "바나나", disabled: true },
    { value: "orange", label: "오렌지" }
  ]}
/>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    alert("코드가 클립보드에 복사되었습니다!");
  };

  return (
    <div className="sb-story-container">
      <header className="sb-header">
        <span className="sb-badge">COMPONENTS</span>
        <h1 className="sb-title">Radio & RadioGroup</h1>
        <p className="sb-description">
          독립적인 단일 라디오 항목은 단독 컴포넌트로 사용하며, 다중 선택 그룹은
          RadioGroup 컴포넌트에 데이터를 전달하여 정렬과 상태를 제어합니다.
        </p>
      </header>

      <hr className="sb-divider" />

      <section className="sb-section">
        <h2 className="sb-section-title">Canvas</h2>
        <div className="sb-canvas">
          <div
            className="sb-canvas-preview"
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
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
              <RadioGroup
                options={sampleOptions}
              />
            </div>

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
                checked={true}
                disabled={isDisabled}
              />
            </div>
          </div>

          <div className="sb-canvas-controls">
            <div className="control-field">
              <label>Single Disabled</label>
              <input
                type="checkbox"
                checked={isDisabled}
                onChange={(e) => setIsDisabled(e.target.checked)}
              />
            </div>
          </div>
        </div>
      </section>

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
                <td>초기 선택 상태입니다. onChange 없이 사용하면 내부에서 상태를 관리합니다.</td>
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
                <td className="prop-name">options</td>
                <td className="prop-type">
                  array&lt;&#123; value, label, checked?, disabled? &#125;&gt;
                </td>
                <td>[]</td>
                <td>
                  라디오 그룹을 렌더링할 데이터 배열입니다. checked로 초기
                  선택 상태를, disabled로 비활성화를 지정할 수 있습니다.
                </td>
              </tr>
              <tr>
                <td className="prop-name">name</td>
                <td className="prop-type">string</td>
                <td>-</td>
                <td>
                  하위 라디오 컴포넌트들에 일괄 적용될 고유 name 속성입니다.
                </td>
              </tr>
              <tr>
                <td className="prop-name">value</td>
                <td className="prop-type">string</td>
                <td>-</td>
                <td>현재 그룹 내에서 활성화된 선택 값 식별자입니다.</td>
              </tr>
              <tr>
                <td className="prop-name">onChange</td>
                <td className="prop-type">(value: string) =&gt; void</td>
                <td>-</td>
                <td>
                  선택 상태 변경 시 이를 감지해 상태를 업데이트하는 콜백
                  함수입니다.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

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
