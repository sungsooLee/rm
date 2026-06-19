import React, { useState } from "react";
import {
  Checkbox,
  CheckboxGroup,
} from "../../assets/components/common/checkbox/Checkbox";

const CheckboxGuide = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const sampleOptions = [
    { value: "apple", label: "사과", checked: true },
    { value: "banana", label: "바나나", disabled: true },
    { value: "orange", label: "오렌지" },
  ];

  const currentCode = `// 1. 단일 항목 단독 노출 시 (독립 사용)
<Checkbox
  label="개인정보 수집 및 이용에 동의합니다."
  checked={true}
/>

// 2. 여러 개 배열 그룹 노출 시 (CheckboxGroup에 options 주입)
<CheckboxGroup
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
        <h1 className="sb-title">Checkbox & CheckboxGroup</h1>
        <p className="sb-description">
          독립적인 개별 체크박스 항목은 단독 컴포넌트로 사용하며, 다중 선택
          그룹은 CheckboxGroup 컴포넌트에 데이터를 전달하여 정렬과 상태를
          제어합니다.
        </p>
      </header>

      <hr className="sb-divider" />

      <section className="sb-section">
        <h2 className="sb-section-title">Canvas (Playground)</h2>
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
                Checkbox Group Example
              </h4>
              <CheckboxGroup
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
                Single Checkbox Example
              </h4>
              <Checkbox
                label="마케팅 정보 수신 및 활용 약관에 동의합니다."
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

        <h3 style={{ fontSize: "1.6rem", margin: "16px 0 8px" }}>
          Checkbox (Single Item)
        </h3>
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
                <td>체크박스 우측에 매핑될 UI 라벨 텍스트입니다.</td>
              </tr>
              <tr>
                <td className="prop-name">value</td>
                <td className="prop-type">string</td>
                <td>-</td>
                <td>그룹 안에서 개별 선택 항목을 식별하기 위한 값입니다.</td>
              </tr>
              <tr>
                <td className="prop-name">checked</td>
                <td className="prop-type">boolean</td>
                <td>false</td>
                <td>초기 선택 상태입니다. onChange 없이 사용하면 내부에서 상태를 관리합니다.</td>
              </tr>
              <tr>
                <td className="prop-name">onChange</td>
                <td className="prop-type">
                  (checked: boolean, value?: string) =&gt; void
                </td>
                <td>-</td>
                <td>선택 상태 변경 시 동작하는 콜백 함수입니다.</td>
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

        <h3 style={{ fontSize: "1.6rem", margin: "24px 0 8px" }}>
          CheckboxGroup (Wrapper)
        </h3>
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
                  체크박스 그룹을 렌더링할 데이터 배열입니다. checked로 초기
                  선택 상태를, disabled로 비활성화를 지정할 수 있습니다.
                </td>
              </tr>
              <tr>
                <td className="prop-name">value</td>
                <td className="prop-type">array&lt;string&gt;</td>
                <td>[]</td>
                <td>현재 그룹 내에서 선택된 value 값들을 담은 배열입니다.</td>
              </tr>
              <tr>
                <td className="prop-name">onChange</td>
                <td className="prop-type">
                  (value: array&lt;string&gt;) =&gt; void
                </td>
                <td>-</td>
                <td>
                  선택된 항목 배열이 변경될 때 호출되는 핸들러 함수입니다.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="sb-section">
        <div className="sb-section-header">
          <h2 className="sb-section-title">JSX Code 프리뷰</h2>
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

export default CheckboxGuide;
