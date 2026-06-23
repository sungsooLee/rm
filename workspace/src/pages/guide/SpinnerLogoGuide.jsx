import React, { useState } from "react";
import SpinnerLogo from "../../assets/components/common/spinlogo/SpinLogo";
import "./index.scss";

const SpinnerLogoGuide = () => {
  const [size, setSize] = useState(64);
  const [animate, setAnimate] = useState("infinite");

  const currentCode = `<SpinnerLogo
  size={${size}}
  animate="${animate}"
/>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    alert("코드가 클립보드에 복사되었습니다!");
  };

  return (
    <div className="sb-story-container">
      <header className="sb-header">
        <span className="sb-badge">COMPONENTS</span>
        <h1 className="sb-title">SpinnerLogo</h1>
        <p className="sb-description">
          브랜드 로고와 회전 링을 포함한 로딩 컴포넌트입니다. size와 animate
          속성을 지원합니다.
        </p>
      </header>

      <hr className="sb-divider" />

      <section className="sb-section">
        <h2 className="sb-section-title">Canvas</h2>

        <div className="sb-canvas">
          <div className="sb-canvas-preview">
            <SpinnerLogo size={size} animate={animate} />
          </div>

          <div className="sb-canvas-controls">
            <div className="control-field">
              <label>Size</label>

              <input
                type="number"
                min={16}
                max={300}
                step={4}
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
              />
            </div>

            <div className="control-field">
              <label>Animate</label>

              <select
                value={animate}
                onChange={(e) => setAnimate(e.target.value)}
              >
                <option value="none">none</option>

                <option value="once">once</option>

                <option value="infinite">infinite</option>
              </select>
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
                <td>size</td>
                <td>number</td>
                <td>64</td>
                <td>아이콘의 가로/세로 크기(px)를 지정합니다.</td>
              </tr>

              <tr>
                <td>animate</td>
                <td>"none" | "once" | "infinite"</td>
                <td>"infinite"</td>
                <td>회전 애니메이션 동작을 제어합니다.</td>
              </tr>

              <tr>
                <td>className</td>
                <td>string</td>
                <td>""</td>
                <td>추가 클래스명을 전달합니다.</td>
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

export default SpinnerLogoGuide;
