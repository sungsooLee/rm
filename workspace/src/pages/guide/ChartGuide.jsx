import React, { useState } from "react";
import DonutChart from "../../assets/components/common/chart/DonutChart";
import "./index.scss";

const ChartGuide = () => {
  const [value, setValue] = useState(69.4);
  const [size, setSize] = useState(160);
  const [subText, setSubText] = useState("(90.2)");

  const currentCode = `<DonutChart
  value={${value}}
  size={${size}}
  subText="${subText}"
/>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    alert("코드가 클립보드에 복사되었습니다!");
  };

  return (
    <div className="sb-story-container">
      <header className="sb-header">
        <span className="sb-badge">COMPONENTS</span>
        <h1 className="sb-title">Chart</h1>
        <p className="sb-description">
          진행률·점수를 원형으로 표현하는 도넛 차트 컴포넌트입니다. value(%)에
          따라 호가 채워지며, 중앙에 값과 보조 텍스트를 표시합니다.
        </p>
      </header>

      <hr className="sb-divider" />

      <section className="sb-section">
        <h2 className="sb-section-title">Canvas</h2>

        <div className="sb-canvas">
          <div className="sb-canvas-preview">
            <DonutChart
              value={value}
              size={size}
              valueText={`${value}%`}
              subText={subText}
            />
          </div>

          <div className="sb-canvas-controls">
            <div className="control-field">
              <label>Value (%)</label>
              <input
                type="number"
                min={0}
                step={0.1}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
              />
            </div>

            <div className="control-field">
              <label>Size ({size}px)</label>
              <input
                type="range"
                min={80}
                max={240}
                step={4}
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
              />
            </div>

            <div className="control-field">
              <label>Sub Text</label>
              <input
                value={subText}
                onChange={(e) => setSubText(e.target.value)}
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
                <td>value</td>
                <td>number</td>
                <td>0</td>
                <td>채워지는 비율 (%). 100을 넘으면 텍스트는 실제 값, 그래프는 100%로 표시</td>
              </tr>
              <tr>
                <td>size</td>
                <td>number</td>
                <td>160</td>
                <td>차트 전체 지름(px)</td>
              </tr>
              <tr>
                <td>showValue</td>
                <td>boolean</td>
                <td>true</td>
                <td>중앙 텍스트 표시 여부</td>
              </tr>
              <tr>
                <td>valueText</td>
                <td>ReactNode</td>
                <td>{`{value}%`}</td>
                <td>중앙 메인 텍스트 (미지정 시 value%)</td>
              </tr>
              <tr>
                <td>subText</td>
                <td>ReactNode</td>
                <td>-</td>
                <td>중앙 보조 텍스트 (예: (90.2))</td>
              </tr>
              <tr>
                <td>className</td>
                <td>string</td>
                <td>""</td>
                <td>추가 클래스명</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="sb-section">
        <div className="sb-section-header">
          <h2 className="sb-section-title">JSX Code</h2>
          <button type="button" className="sb-copy-btn" onClick={handleCopy}>
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

export default ChartGuide;
