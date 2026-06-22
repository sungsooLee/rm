import React, { useState } from "react";
import PieChart from "../../assets/components/common/chart/PieChart";
import "./index.scss";

const SAMPLE_DATA = [
  { label: "신한은행", value: 40.5, color: "#3a6df0" },
  { label: "국민은행", value: 22, color: "#f7b500" },
  { label: "우리은행", value: 15, color: "#a9cbf5" },
  { label: "기업은행", value: 12.5, color: "#2294e3" },
  { label: "하나은행", value: 10, color: "#1bb89a" },
  { label: "농협은행", value: 8, color: "#7c4dff" },
  { label: "카카오뱅크", value: 6, color: "#ff8a3d" },
  { label: "케이뱅크", value: 4, color: "#ef5da8" },
  { label: "토스뱅크", value: 2, color: "#41c4c0" },
];

const PieChartGuide = () => {
  const [legendCount, setLegendCount] = useState(5);

  const currentCode = `const data = [
  { label: "신한은행", value: 40.5, color: "#3a6df0" },
  { label: "국민은행", value: 22, color: "#f7b500" },
  { label: "우리은행", value: 15, color: "#a9cbf5" },
  { label: "기업은행", value: 12.5, color: "#2294e3" },
  { label: "하나은행", value: 10, color: "#1bb89a" },
];

<PieChart data={data} size={220} legendCount={${legendCount}} />`;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    alert("코드가 클립보드에 복사되었습니다!");
  };

  return (
    <div className="sb-story-container">
      <header className="sb-header">
        <span className="sb-badge">COMPONENTS</span>
        <h1 className="sb-title">PieChart</h1>
        <p className="sb-description">
          여러 항목의 비중을 도넛형으로 표현하는 차트입니다. 각 세그먼트를
          클릭하면 항목명과 비율 툴팁이 표시되고, 하단에는 범례가 나타납니다.
        </p>
      </header>

      <hr className="sb-divider" />

      <section className="sb-section">
        <h2 className="sb-section-title">Canvas</h2>

        <div className="sb-canvas">
          <div className="sb-canvas-preview">
            <PieChart
              data={SAMPLE_DATA}
              size={180}
              legendCount={legendCount}
            />
          </div>

          <div className="sb-canvas-controls">
            <div className="control-field">
              <label>Legend Count ({legendCount})</label>
              <input
                type="range"
                min={0}
                max={SAMPLE_DATA.length}
                step={1}
                value={legendCount}
                onChange={(e) => setLegendCount(Number(e.target.value))}
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
                <td>data</td>
                <td>{`{ label, value, color? }[]`}</td>
                <td>[]</td>
                <td>세그먼트 데이터 배열 (value 합 기준으로 비율 계산)</td>
              </tr>
              <tr>
                <td>size</td>
                <td>number</td>
                <td>220</td>
                <td>차트 지름(px)</td>
              </tr>
              <tr>
                <td>showLegend</td>
                <td>boolean</td>
                <td>true</td>
                <td>하단 범례 표시 여부</td>
              </tr>
              <tr>
                <td>legendCount</td>
                <td>number</td>
                <td>전체</td>
                <td>범례에 표시할 항목 개수 (미지정 시 전체 표시)</td>
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
        <h2 className="sb-section-title">Data 항목</h2>

        <div className="sb-table-wrapper">
          <table className="sb-props-table">
            <thead>
              <tr>
                <th>Key</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>label</td>
                <td>string</td>
                <td>항목명 (범례·툴팁에 표시)</td>
              </tr>
              <tr>
                <td>value</td>
                <td>number</td>
                <td>비중 값 (전체 합 대비 비율로 환산)</td>
              </tr>
              <tr>
                <td>color</td>
                <td>string</td>
                <td>
                  세그먼트 색상 (HEX/CSS 컬러). 항목별로 지정 가능하며, 미지정
                  시 기본 팔레트가 순서대로 적용됩니다.
                </td>
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

export default PieChartGuide;
