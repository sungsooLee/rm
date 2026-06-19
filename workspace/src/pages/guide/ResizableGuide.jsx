import React from "react";
import { Resizable } from "../../assets/components/common/resizable/Resizable";

const ResizableGuide = () => {
  const currentCode = `
    import { Resizable } from "../../assets/components/common/resizable/Resizable";

    <Resizable>
      <div>
        Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box
        1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box
        1Box 1Box 1Box 1 Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box
        1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box
        1Box 1Box 1Box 1Box 1Box 1Box 1Box 1 Box 1Box 1Box 1Box 1Box
        1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box
        1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1 Box
        1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box
        1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box
        1Box 1Box 1 Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box
        1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box
        1Box 1Box 1Box 1Box 1Box 1Box 1 Box 1Box 1Box 1Box 1Box 1Box
        1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box
        1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1 Box 1Box
        1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box
        1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box
        1Box 1
      </div>
      <div>
        Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box
        2 Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box
        2Box 2 Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box
        2Box 2Box 2 Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box
        2Box 2Box 2Box 2 Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box
        2Box 2Box 2Box 2Box 2 Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box
        2Box 2Box 2Box 2Box 2Box 2 Box 2Box 2Box 2Box 2Box 2Box 2Box
        2Box 2Box 2Box 2Box 2Box 2Box 2 Box 2Box 2Box 2Box 2Box 2Box
        2Box 2Box 2Box 2Box 2Box 2Box 2Box 2 Box 2Box 2Box 2Box 2Box
        2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2
      </div>
      <div>
        Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box
        3 Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box
        3Box 3 Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box
        3Box 3Box 3 Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box
        3Box 3Box 3Box 3 Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box
        3Box 3Box 3Box 3Box 3 Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box
        3Box 3Box 3Box 3Box 3Box 3 Box 3Box 3Box 3Box 3Box 3Box 3Box
        3Box 3Box 3Box 3Box 3Box 3Box 3 Box 3Box 3Box 3Box 3Box 3Box
        3Box 3Box 3Box 3Box 3Box 3Box 3Box 3
      </div>
    Resizable>
  `;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    alert("코드가 클립보드에 복사되었습니다!");
  };

  return (
    <div className="sb-story-container">
      <header className="sb-header">
        <span className="sb-badge">COMPONENTS</span>
        <h1 className="sb-title">Resizable</h1>
      </header>

      <hr className="sb-divider" />

      <section className="sb-section">
        <h2 className="sb-section-title">Canvas</h2>
        <div className="sb-canvas">
          <div
            className="sb-canvas-preview"
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <Resizable>
              <div>
                Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box
                1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box
                1Box 1Box 1Box 1 Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box
                1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box
                1Box 1Box 1Box 1Box 1Box 1Box 1Box 1 Box 1Box 1Box 1Box 1Box
                1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box
                1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1 Box
                1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box
                1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box
                1Box 1Box 1 Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box
                1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box
                1Box 1Box 1Box 1Box 1Box 1Box 1 Box 1Box 1Box 1Box 1Box 1Box
                1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box
                1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1 Box 1Box
                1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box
                1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box 1Box
                1Box 1
              </div>
              <div>
                Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box
                2 Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box
                2Box 2 Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box
                2Box 2Box 2 Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box
                2Box 2Box 2Box 2 Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box
                2Box 2Box 2Box 2Box 2 Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box
                2Box 2Box 2Box 2Box 2Box 2 Box 2Box 2Box 2Box 2Box 2Box 2Box
                2Box 2Box 2Box 2Box 2Box 2Box 2 Box 2Box 2Box 2Box 2Box 2Box
                2Box 2Box 2Box 2Box 2Box 2Box 2Box 2 Box 2Box 2Box 2Box 2Box
                2Box 2Box 2Box 2Box 2Box 2Box 2Box 2Box 2
              </div>
              <div>
                Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box
                3 Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box
                3Box 3 Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box
                3Box 3Box 3 Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box
                3Box 3Box 3Box 3 Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box
                3Box 3Box 3Box 3Box 3 Box 3Box 3Box 3Box 3Box 3Box 3Box 3Box
                3Box 3Box 3Box 3Box 3Box 3 Box 3Box 3Box 3Box 3Box 3Box 3Box
                3Box 3Box 3Box 3Box 3Box 3Box 3 Box 3Box 3Box 3Box 3Box 3Box
                3Box 3Box 3Box 3Box 3Box 3Box 3Box 3
              </div>
            </Resizable>
          </div>

          {/* <div className="sb-canvas-controls">
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
          </div> */}
        </div>
      </section>

      {/* <section className="sb-section">
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
                <td className="prop-name">options</td>
                <td className="prop-type">
                  array&lt;&#123; value, label, disabled? &#125;&gt;
                </td>
                <td>[]</td>
                <td>라디오 그룹을 렌더링할 데이터 배열입니다.</td>
              </tr>
              <tr>
                <td className="prop-name">direction</td>
                <td className="prop-type">'horizontal' | 'vertical'</td>
                <td>'horizontal'</td>
                <td>내부 자식 노드들의 정렬 레이아웃 방향을 정의합니다.</td>
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
              <tr>
                <td className="prop-name">disabled</td>
                <td className="prop-type">boolean</td>
                <td>false</td>
                <td>그룹 내 모든 라디오를 일괄 비활성화합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section> */}

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

export default ResizableGuide;
