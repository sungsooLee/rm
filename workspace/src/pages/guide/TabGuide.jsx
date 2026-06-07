import React, { useState } from "react";
import { TabGroup } from "../../assets/components/common/tab/Tab";

const TabGuide = () => {
  const [activeVariant, setActiveVariant] = useState("line");
  const [controlledId, setControlledId] = useState("tab1");

  const sampleItems = [
    {
      id: "tab1",
      label: "메뉴 정보",
      content: (
        <div
          style={{
            padding: "16px 0",
            fontSize: "14px",
            color: "var(--color-gray-800)",
          }}
        >
          첫 번째 탭: 메뉴 소개 및 상세 사양 정보 레이어입니다.
        </div>
      ),
    },
    {
      id: "tab2",
      label: "리뷰 (24)",
      content: (
        <div
          style={{
            padding: "16px 0",
            fontSize: "14px",
            color: "var(--color-gray-800)",
          }}
        >
          두 번째 탭: 사용자들이 등록한 생생한 리뷰 목록 공간입니다.
        </div>
      ),
    },
    {
      id: "tab3",
      label: "문의사항",
      content: (
        <div
          style={{
            padding: "16px 0",
            fontSize: "14px",
            color: "var(--color-gray-800)",
          }}
        >
          세 번째 탭: 상품 및 서비스 관련 Q&A 게시판 공간입니다.
        </div>
      ),
    },
    {
      id: "tab4",
      label: "매장안내 (비활성)",
      content: <div>비활성화된 영역입니다.</div>,
      disabled: true,
    },
  ];

  const currentCode = `// 1. 기본 비제어 방식 사용 (기본 활성화 ID 설정)
<TabGroup
  variant="${activeVariant}"
  defaultActiveId="tab1"
  items={[
    { id: "tab1", label: "메뉴 정보", content: <div>메뉴 정보 콘텐츠</div> },
    { id: "tab2", label: "리뷰 (24)", content: <div>리뷰 콘텐츠</div> },
    { id: "tab3", label: "문의사항", content: <div>문의사항 콘텐츠</div> },
    { id: "tab4", label: "매장안내", content: <div>매장안내 콘텐츠</div>, disabled: true }
  ]}
/>

// 2. 외부 제어 방식 사용 (상태 연동)
const [activeId, setActiveId] = useState("tab1");

<TabGroup
  variant="${activeVariant}"
  items={sampleItems}
  activeId={activeId}
  onChange={setActiveId}
/>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    alert("코드가 클립보드에 복사되었습니다!");
  };

  return (
    <div className="sb-story-container">
      <header className="sb-header">
        <span className="sb-badge">COMPONENTS</span>
        <h1 className="sb-title">TabGroup</h1>
        <p className="sb-description">
          동일 공간에서 탭 버튼 클릭을 통해 활성화된 스크린 레이어(TabPanel)를
          전환하는 컴포넌트입니다. line 타입과 rounded 타입을 제공합니다.
        </p>
      </header>

      <hr className="sb-divider" />

      <section className="sb-section">
        <h2 className="sb-section-title">Canvas</h2>
        <div className="sb-canvas">
          <div
            className="sb-canvas-preview"
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            <div>
              <h4
                style={{
                  fontSize: "1.3rem",
                  color: "#666",
                  marginBottom: "12px",
                }}
              >
                Tab Playground ({activeVariant} 변형)
              </h4>
              <TabGroup
                variant={activeVariant}
                items={sampleItems}
                activeId={controlledId}
                onChange={setControlledId}
              />
            </div>
          </div>

          <div className="sb-canvas-controls">
            <div className="control-field">
              <label>Tab Variant</label>
              <select
                value={activeVariant}
                onChange={(e) => setActiveVariant(e.target.value)}
              >
                <option value="line">line (하단 선 형태)</option>
                <option value="rounded">rounded (둥근 알약 형태)</option>
              </select>
            </div>
            <div className="control-field">
              <label>Active Tab ID</label>
              <span
                className="sb-value-display"
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  color: "#1ea7fd",
                }}
              >
                "{controlledId}"
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
                <td className="prop-name">items</td>
                <td className="prop-type">
                  array&lt;&#123; id, label, content, disabled? &#125;&gt;
                </td>
                <td>[]</td>
                <td>
                  탭 메뉴 구조를 정의하는 객체 형태의 고유 데이터 배열입니다.
                </td>
              </tr>
              <tr>
                <td className="prop-name">variant</td>
                <td className="prop-type">'line' | 'rounded'</td>
                <td>'line'</td>
                <td>
                  시각적 디자인 형태 템플릿 스타일 테마 클래스를 결정합니다.
                </td>
              </tr>
              <tr>
                <td className="prop-name">activeId</td>
                <td className="prop-type">string</td>
                <td>-</td>
                <td>
                  외부 상위 컨텍스트에서 직접 제어할 현재 활성화 탭의 ID입니다.
                </td>
              </tr>
              <tr>
                <td className="prop-name">defaultActiveId</td>
                <td className="prop-type">string</td>
                <td>-</td>
                <td>
                  컴포넌트 최초 마운트 시 기본으로 활성화될 초기 탭 ID 값입니다.
                </td>
              </tr>
              <tr>
                <td className="prop-name">onChange</td>
                <td className="prop-type">(id: string) =&gt; void</td>
                <td>-</td>
                <td>
                  탭 변경 활성화 순간 트리거되어 활성 ID 값을 넘기는 콜백입니다.
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

export default TabGuide;
