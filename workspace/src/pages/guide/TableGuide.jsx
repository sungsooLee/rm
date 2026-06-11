import React from "react";
import "../../assets/styles/_table.scss";
import "./index.scss";

const tableCode = `<div class="gridTableBox">
  <div class="gridTableWrap">
    <div class="gridTableTop">
      <h3 class="gridTableTitle">Cross-Selling 가망 고객 <em>5</em></h3>
      <div class="gridTableMeta">
        <span class="gridTableUnit">단위 : 억원</span>
        <a href="#!" class="gridTableMore">더보기 &gt;</a>
      </div>
    </div>

    <table class="gridTable">
      <colgroup>
        <col style="width: 70px;" />
        <col />
        <col style="width: 80px;" />
        <col style="width: 110px;" />
        <col style="width: 150px;" />
        <col style="width: 90px;" />
        <col style="width: 70px;" />
        <col style="width: 140px;" />
      </colgroup>
      <thead>
        <tr>
          <th>
            <span class="thInner">
              순위
              <button type="button" class="sortIcon" aria-label="순위 정렬"></button>
            </span>
          </th>
          <th class="alignLeft">기업정보</th>
          <th>대표자</th>
          <th>
            <span class="thInner">
              총여신 거래
              <button type="button" class="sortIcon" aria-label="총여신 거래 정렬"></button>
            </span>
          </th>
          <th>
            <span class="thInner">
              수출입/외환 거래
              <button type="button" class="sortIcon" aria-label="수출입/외환 거래 정렬"></button>
            </span>
          </th>
          <th>
            <span class="thInner">
              핵심예금
              <button type="button" class="sortIcon" aria-label="핵심예금 정렬"></button>
            </span>
          </th>
          <th>
            <span class="thInner">
              점수
              <button type="button" class="sortIcon" aria-label="점수 정렬"></button>
            </span>
          </th>
          <th>제안 상태</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="center">1</td>
          <td class="alignLeft">기업정보 영역</td>
          <td class="center">대표자</td>
          <td class="center">총여신 거래</td>
          <td class="center">수출입/외환 거래</td>
          <td class="center">핵심예금</td>
          <td class="center">점수</td>
          <td class="center">제안 상태</td>
        </tr>
        <tr>
          <td class="center">2</td>
          <td class="alignLeft">기업정보 영역</td>
          <td class="center">대표자</td>
          <td class="center">총여신 거래</td>
          <td class="center">수출입/외환 거래</td>
          <td class="center">핵심예금</td>
          <td class="center">점수</td>
          <td class="center">제안 상태</td>
        </tr>
        <tr>
          <td class="center">3</td>
          <td class="alignLeft">기업정보 영역</td>
          <td class="center">대표자</td>
          <td class="center">총여신 거래</td>
          <td class="center">수출입/외환 거래</td>
          <td class="center">핵심예금</td>
          <td class="center">점수</td>
          <td class="center">제안 상태</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`;

const TableGuide = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(tableCode);
    alert("코드가 클립보드에 복사되었습니다!");
  };

  return (
    <div className="sb-story-container">
      <header className="sb-header">
        <span className="sb-badge">MARKUP</span>
        <h1 className="sb-title">Table</h1>
        <p className="sb-description">
          RM 화면 데이터 테이블 마크업입니다. 상단 타이틀 영역과 그리드형
          테이블 구조만 포함하며, 셀 내부 콘텐츠는 각 화면에서 자유롭게
          퍼블리싱합니다.
        </p>
      </header>

      <hr className="sb-divider" />

      <section className="sb-section">
        <h2 className="sb-section-title">Canvas</h2>

        <div className="sb-canvas">
          <div className="sb-canvas-preview">
            <div className="gridTableBox">
              <div className="gridTableWrap">
                <div className="gridTableTop">
                  <h3 className="gridTableTitle">Cross-Selling 가망 고객 <em>5</em></h3>
                  <div className="gridTableMeta">
                    <span className="gridTableUnit">단위 : 억원</span>
                    <a href="#!" className="gridTableMore">
                      더보기 &gt;
                    </a>
                  </div>
                </div>

                <table className="gridTable">
                  <colgroup>
                    <col style={{ width: "70px" }} />
                    <col />
                    <col style={{ width: "80px" }} />
                    <col style={{ width: "110px" }} />
                    <col style={{ width: "150px" }} />
                    <col style={{ width: "90px" }} />
                    <col style={{ width: "70px" }} />
                    <col style={{ width: "140px" }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>
                        <span className="thInner">
                          순위
                          <button
                            type="button"
                            className="sortIcon"
                            aria-label="순위 정렬"
                          />
                        </span>
                      </th>
                      <th className="alignLeft">기업정보</th>
                      <th>대표자</th>
                      <th>
                        <span className="thInner">
                          총여신 거래
                          <button
                            type="button"
                            className="sortIcon"
                            aria-label="총여신 거래 정렬"
                          />
                        </span>
                      </th>
                      <th>
                        <span className="thInner">
                          수출입/외환 거래
                          <button
                            type="button"
                            className="sortIcon"
                            aria-label="수출입/외환 거래 정렬"
                          />
                        </span>
                      </th>
                      <th>
                        <span className="thInner">
                          핵심예금
                          <button
                            type="button"
                            className="sortIcon"
                            aria-label="핵심예금 정렬"
                          />
                        </span>
                      </th>
                      <th>
                        <span className="thInner">
                          점수
                          <button
                            type="button"
                            className="sortIcon"
                            aria-label="점수 정렬"
                          />
                        </span>
                      </th>
                      <th>제안 상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="center">1</td>
                      <td className="alignLeft">기업정보 영역</td>
                      <td className="center">대표자</td>
                      <td className="center">총여신 거래</td>
                      <td className="center">수출입/외환 거래</td>
                      <td className="center">핵심예금</td>
                      <td className="center">점수</td>
                      <td className="center">제안 상태</td>
                    </tr>
                    <tr>
                      <td className="center">2</td>
                      <td className="alignLeft">기업정보 영역</td>
                      <td className="center">대표자</td>
                      <td className="center">총여신 거래</td>
                      <td className="center">수출입/외환 거래</td>
                      <td className="center">핵심예금</td>
                      <td className="center">점수</td>
                      <td className="center">제안 상태</td>
                    </tr>
                    <tr>
                      <td className="center">3</td>
                      <td className="alignLeft">기업정보 영역</td>
                      <td className="center">대표자</td>
                      <td className="center">총여신 거래</td>
                      <td className="center">수출입/외환 거래</td>
                      <td className="center">핵심예금</td>
                      <td className="center">점수</td>
                      <td className="center">제안 상태</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sb-section">
        <h2 className="sb-section-title">클래스 구조</h2>

        <div className="sb-table-wrapper">
          <table className="sb-props-table">
            <thead>
              <tr>
                <th>클래스</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>gridTableBox</td>
                <td>테이블 카드 전체 래퍼</td>
              </tr>
              <tr>
                <td>gridTableWrap</td>
                <td>타이틀 + 테이블을 감싸는 내부 래퍼</td>
              </tr>
              <tr>
                <td>gridTableTop</td>
                <td>상단 타이틀 / 단위 / 더보기 영역</td>
              </tr>
              <tr>
                <td>gridTable</td>
                <td>그리드 보더가 적용된 데이터 테이블</td>
              </tr>
              <tr>
                <td>alignLeft / center</td>
                <td>셀 정렬 (기업정보는 좌측, 나머지는 중앙)</td>
              </tr>
              <tr>
                <td>colgroup 2번째 col</td>
                <td>width 미지정 시 나머지 열 고정 너비를 제외한 전체 영역을 채움</td>
              </tr>
              <tr>
                <td>sortIcon</td>
                <td>정렬 버튼 (button 태그, aria-label 필수)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="sb-section">
        <div className="sb-section-header">
          <h2 className="sb-section-title">HTML Code</h2>
          <button type="button" className="sb-copy-btn" onClick={handleCopy}>
            Copy Code
          </button>
        </div>

        <pre className="sb-code-block">
          <code>{tableCode}</code>
        </pre>
      </section>
    </div>
  );
};

export default TableGuide;
