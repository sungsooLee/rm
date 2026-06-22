import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { guideData } from "./data/guideData"; // 데이터 경로는 필요시 수정
import "./index.scss";

/* 상태 계산 함수 */
const getStatus = (item) => {
  if (item.completionDate) return "완료";
  if (item.remarks?.includes("작업중")) return "진행중";
  return "대기";
};

/* 언더바 스네이크 케이스 스타일 매핑 */
const statusClassMap = {
  완료: "status_complete",
  진행중: "status_progress",
  대기: "status_wait",
};

const TaskList = () => {
  const [keyword, setKeyword] = useState("");

  /* 검색 기능 */
  const filteredData = useMemo(() => {
    return guideData.filter((item) =>
      item.screenName.toLowerCase().includes(keyword.toLowerCase()),
    );
  }, [keyword]);

  /* 통계 계산 */
  const stats = useMemo(() => {
    const total = filteredData.length;
    const completed = filteredData.filter((i) => i.completionDate).length;
    const remaining = total - completed;

    return { total, completed, remaining };
  }, [filteredData]);

  const progress = stats.total > 0 ? (stats.completed / stats.total) * 100 : 0;

  return (
    <div className="wrapper">
      {/* 🔥 헤더 */}
      <div className="header">
        <div>
          <h2 className="title">퍼블리싱 작업 리스트</h2>
          <p className="sub">작업 진행 현황을 한눈에 확인하세요</p>
        </div>

        <Link to="/guide" className="btn-guide">
          퍼블 가이드 보기
        </Link>
      </div>

      {/* 🔥 툴바 */}
      <div className="toolbar">
        <input
          className="search"
          placeholder="스크린명 검색..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <div className="statsBox">
          <div className="stat-card">
            <div className="stat-label">총</div>
            <div className="stat-value">{stats.total}</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">완료</div>
            <div className="stat-value">{stats.completed}</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">남은</div>
            <div className="stat-value">{stats.remaining}</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">완료율</div>
            <div className="stat-value">{progress.toFixed(1)}%</div>
          </div>
        </div>
      </div>

      {/* 🔥 진행바 */}
      <div className="graph">
        <div className="completed" style={{ width: `${progress}%` }} />
      </div>

      {/* 🔥 테이블 */}
      <div className="table-wrap">
        <table className="table">
          <colgroup>
            <col style={{ width: "200px" }} />
            <col />
            <col style={{ width: "300px" }} />
            <col style={{ width: "150px" }} />
            <col style={{ width: "150px" }} />
            <col style={{ width: "150px" }} />
            <col style={{ width: "150px" }} />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>메뉴명</th>
              <th>화면경로</th>
              <th>화면ID</th>
              <th className={"center"}>타입</th>
              <th className={"center"}>완료일</th>
              <th className={"center"}>수정일</th>
              <th className={"center"}>상태</th>
              <th className={"center"}>비고</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item) => {
              const status = getStatus(item);
              // cn 라이브러리 대신 템플릿 리터럴로 언더바 기반 상태 클래스 결합
              const statusClass =
                `status_badge ${statusClassMap[status]} text-center`.trim();

              return (
                <tr key={item.id}>
                  <td>{item.menuName}</td>
                  <td className="screen_name">{item.screenName}</td>

                  <td>
                    {item.pageLink && (
                      <Link
                        to={item.pageLink}
                        className="task-link"
                        target="_blank"
                      >
                        {item.pageLink}
                      </Link>
                    )}
                    {item.pageId && (
                      <span className="page-id"> ({item.pageId})</span>
                    )}
                  </td>

                  <td className="text-center">{item.pageType}</td>
                  <td className="text-center">{item.completionDate || "-"}</td>
                  <td className="text-center">{item.lastUpdateDate || "-"}</td>
                  <td className="text-center">
                    <span className={statusClass}>{status}</span>
                  </td>
                  <td className="text-center">{item.remarks || "-"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
