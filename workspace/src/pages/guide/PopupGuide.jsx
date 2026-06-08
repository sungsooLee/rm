import React, { useState } from "react";
import Popup from "../../assets/components/common/popup/Popup";
import "./index.scss";

const PopupGuide = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasFooter, setHasFooter] = useState(true);
  const [title, setTitle] = useState("알림 팝업");

  const currentCode = `<Popup
  isOpen={${isOpen}}
  title="${title}"
  onClose={() => setIsOpen(false)}
${
  hasFooter
    ? `  footer={
    <>
      <button>취소</button>
      <button>확인</button>
    </>
  }`
    : ""
}
>
  여기는 자유롭게 컨텐츠 영역입니다.
</Popup>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    alert("코드가 클립보드에 복사되었습니다!");
  };

  return (
    <div className="sb-story-container">
      {/* HEADER */}
      <header className="sb-header">
        <span className="sb-badge">COMPONENTS</span>
        <h1 className="sb-title">Popup</h1>
        <p className="sb-description">
          dimm 영역과 header / content / footer 구조를 가진 공통 팝업
          컴포넌트입니다.
        </p>
      </header>

      <hr className="sb-divider" />

      {/* CANVAS */}
      <section className="sb-section">
        <h2 className="sb-section-title">Canvas</h2>

        <div className="sb-canvas">
          <div className="sb-canvas-preview">
            <button onClick={() => setIsOpen(true)}>팝업 열기</button>

            <Popup
              isOpen={isOpen}
              title={title}
              onClose={() => setIsOpen(false)}
              footer={
                hasFooter ? (
                  <>
                    <button onClick={() => setIsOpen(false)}>취소</button>
                    <button>확인</button>
                  </>
                ) : null
              }
            >
              <p>여기는 자유롭게 퍼블리싱 가능한 영역입니다.</p>
            </Popup>
          </div>

          {/* CONTROLS */}
          <div className="sb-canvas-controls">
            <div className="control-field">
              <label>Title</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className="control-field">
              <label>Footer</label>
              <input
                type="checkbox"
                checked={hasFooter}
                onChange={(e) => setHasFooter(e.target.checked)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROPS TABLE */}
      <section className="sb-section">
        <h2 className="sb-section-title">Props</h2>

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
                <td>isOpen</td>
                <td>boolean</td>
                <td>false</td>
                <td>팝업 노출 여부를 제어합니다.</td>
              </tr>

              <tr>
                <td>title</td>
                <td>string</td>
                <td>-</td>
                <td>팝업 상단 타이틀 영역입니다.</td>
              </tr>

              <tr>
                <td>footer</td>
                <td>ReactNode</td>
                <td>-</td>
                <td>하단 버튼 영역 (있을 때만 렌더링)</td>
              </tr>

              <tr>
                <td>onClose</td>
                <td>() =&gt; void</td>
                <td>-</td>
                <td>닫기 버튼 및 dimm 클릭 이벤트</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CODE */}
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

export default PopupGuide;
