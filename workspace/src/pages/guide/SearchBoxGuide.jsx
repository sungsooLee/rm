import React, { useState } from "react";
import { SearchBox } from "../../assets/components/ui/searchbox/SearchBox";

const SearchBoxGuide = () => {
  const [customPlaceholder, setCustomPlaceholder] =
    useState("무엇이든 질문해보세요.");
  const [submittedValue, setSubmittedValue] = useState("");

  const handleSubmit = (value) => {
    setSubmittedValue(value);
  };

  const currentCode = `// 1. 기본 사용 방식
<SearchBox onSubmit={(value) => console.log(value)} />

// 2. 커스텀 플레이스홀더 설정 및 전송 핸들링
const [submittedValue, setSubmittedValue] = useState("");

<SearchBox
  placeholder="${customPlaceholder}"
  onSubmit={(value) => setSubmittedValue(value)}
/>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    alert("코드가 클립보드에 복사되었습니다!");
  };

  return (
    <div className="sb-story-container">
      <header className="sb-header">
        <span className="sb-badge">COMPONENTS</span>
        <h1 className="sb-title">SearchBox</h1>
        <p className="sb-description">
          사용자 입력을 받는 통합 검색 및 질문 입력창 컴포넌트입니다. 내용이
          길어지면 입력란의 높이가 유연하게 늘어나며, 입력값 삭제 및 전송 액션을
          처리합니다.
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
                  marginBottom: "12px",
                }}
              >
                SearchBox Playground
              </h4>
              <SearchBox
                placeholder={customPlaceholder}
                onSubmit={handleSubmit}
              />
            </div>
          </div>

          <div className="sb-canvas-controls">
            <div className="control-field">
              <label>Placeholder Text</label>
              <input
                type="text"
                value={customPlaceholder}
                onChange={(e) => setCustomPlaceholder(e.target.value)}
                style={{ padding: "4px 8px", fontSize: "13px" }}
              />
            </div>
            <div className="control-field">
              <label>Last Submitted Value</label>
              <span
                className="sb-value-display"
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  color: "#1ea7fd",
                }}
              >
                {submittedValue ? `"${submittedValue}"` : "None"}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="sb-section">
        <h2 className="sb-section-title">Props Specification</h2>
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
                <td className="prop-name">placeholder</td>
                <td className="prop-type">string</td>
                <td>"무엇이든 질문해보세요."</td>
                <td>텍스트 입력 레이어 영역에 노출할 기본 안내 문구입니다.</td>
              </tr>
              <tr>
                <td className="prop-name">onSubmit</td>
                <td className="prop-type">(value: string) =&gt; void</td>
                <td>-</td>
                <td>
                  검색창 전송 액션이 완료될 때 트리거되며 입력 내용을 전달하는
                  콜백입니다.
                </td>
              </tr>
              <tr>
                <td className="prop-name">className</td>
                <td className="prop-type">string</td>
                <td>-</td>
                <td>
                  최상위 form 레이아웃 컴포넌트에 할당될 부가 커스텀
                  클래스입니다.
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

export default SearchBoxGuide;
