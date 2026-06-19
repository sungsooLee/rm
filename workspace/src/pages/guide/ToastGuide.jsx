import React, { useState } from "react";
import Toast from "../../assets/components/common/toast/Toast";
import "./index.scss";

const ToastGuide = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("저장되었습니다.");
  const [variant, setVariant] = useState("success");
  const [position, setPosition] = useState("bottom");
  const [duration, setDuration] = useState(3000);

  const currentCode = `<Toast
  isOpen={${isOpen}}
  message="${message}"
  variant="${variant}"
  position="${position}"
  duration={${duration}}
  onClose={() => setIsOpen(false)}
/>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    alert("코드가 클립보드에 복사되었습니다!");
  };

  const handleShowToast = () => {
    setIsOpen(false);
    window.setTimeout(() => setIsOpen(true), 0);
  };

  return (
    <div className="sb-story-container">
      <header className="sb-header">
        <span className="sb-badge">COMPONENTS</span>
        <h1 className="sb-title">Toast</h1>
        <p className="sb-description">
          화면 상·하단에 잠시 노출되는 알림 메시지 컴포넌트입니다. variant와
          position, 자동 닫기 duration을 지원합니다.
        </p>
      </header>

      <hr className="sb-divider" />

      <section className="sb-section">
        <h2 className="sb-section-title">Canvas</h2>

        <div className="sb-canvas">
          <div className="sb-canvas-preview">
            <button type="button" onClick={handleShowToast}>
              토스트 열기
            </button>

            <Toast
              isOpen={isOpen}
              message={message}
              variant={variant}
              position={position}
              duration={duration}
              onClose={() => setIsOpen(false)}
            />
          </div>

          <div className="sb-canvas-controls">
            <div className="control-field">
              <label>Message</label>
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="control-field">
              <label>Variant</label>
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value)}
              >
                <option value="default">default</option>
                <option value="success">success</option>
                <option value="error">error</option>
                <option value="warning">warning</option>
              </select>
            </div>

            <div className="control-field">
              <label>Position</label>
              <select
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              >
                <option value="top">top</option>
                <option value="bottom">bottom</option>
              </select>
            </div>

            <div className="control-field">
              <label>Duration (ms)</label>
              <input
                type="number"
                min={0}
                step={500}
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
      </section>

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
                <td>토스트 노출 여부를 제어합니다.</td>
              </tr>

              <tr>
                <td>message</td>
                <td>ReactNode</td>
                <td>-</td>
                <td>토스트에 표시할 메시지입니다.</td>
              </tr>

              <tr>
                <td>variant</td>
                <td>
                  "default" | "success" | "error" | "warning"
                </td>
                <td>"default"</td>
                <td>아이콘 색상 및 스타일 변형입니다.</td>
              </tr>

              <tr>
                <td>position</td>
                <td>"top" | "bottom"</td>
                <td>"bottom"</td>
                <td>화면 상단 또는 하단 노출 위치입니다.</td>
              </tr>

              <tr>
                <td>duration</td>
                <td>number</td>
                <td>3000</td>
                <td>자동 닫기까지의 시간(ms)입니다. 0이면 자동 닫기 없음.</td>
              </tr>

              <tr>
                <td>className</td>
                <td>string</td>
                <td>""</td>
                <td>추가 클래스명입니다.</td>
              </tr>

              <tr>
                <td>onClose</td>
                <td>() =&gt; void</td>
                <td>-</td>
                <td>닫기 버튼 클릭 및 자동 닫기 시 호출됩니다.</td>
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

export default ToastGuide;
