import React from "react";
// 앞서 만든 순수 자바스크립트 기반 Button 컴포넌트 임포트 (프로젝트 경로에 맞게 수정)
import { Button } from "../../assets/components/common/button/Button";

const ButtonGuide = () => {
  // 사용자가 복사할 예시 코드 스트링
  const code = `import { Button } from "./Button";

{/* 기본 버튼 */}
<Button variant="primary" size="medium" onClick={() => alert('클릭')}>
  Primary 버튼
</Button>

{/* 다양한 속성 조합 */}
<Button variant="secondary" size="small">Secondary Small</Button>
<Button variant="text" size="large" disabled>Disabled Text</Button>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("코드 복사가 완료되었습니다!");
  };

  return (
    <div className="guide-detail">
      <h2>Button</h2>
      <p>프로젝트 전반에서 공통으로 사용하는 버튼 컴포넌트입니다.</p>

      {/* 🔹 1. Preview 구역 */}
      <div className="guide-section">
        <h3>Preview</h3>
        <div className="preview-box">
          {/* Variant 프리뷰 */}
          <div className="preview-group">
            <h4>Variants</h4>
            <div className="preview-flex">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="text">Text Button</Button>
              <Button variant="underline">Underline</Button>
              <Button variant="normal">Normal</Button>
            </div>
          </div>

          {/* Size 프리뷰 */}
          <div className="preview-group">
            <h4>Sizes</h4>
            <div className="preview-flex">
              <Button variant="primary" size="small">
                Small
              </Button>
              <Button variant="primary" size="medium">
                Medium
              </Button>
              <Button variant="primary" size="large">
                Large
              </Button>
            </div>
          </div>

          {/* State 프리뷰 */}
          <div className="preview-group">
            <h4>States</h4>
            <div className="preview-flex">
              <Button variant="primary" disabled>
                Primary Disabled
              </Button>
              <Button variant="secondary" disabled>
                Secondary Disabled
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 2. Code 구역 */}
      <div className="guide-section">
        <div className="code-header">
          <h3>Code</h3>
          <button onClick={handleCopy} className="copy-btn">
            코드 복사
          </button>
        </div>

        <pre className="code-block">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default ButtonGuide;
