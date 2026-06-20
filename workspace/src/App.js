import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import GuidePage from "./pages/guide";
import TaskList from "./pages/guide/workLists";
import SamplePage from "./pages/pub/SamplePage";
import "./assets/styles/main.scss";

// 🔹 레이아웃을 조건부로 제어하기 위한 내부 컴포넌트 분리
function AppContent() {
  const location = useLocation();

  // 현재 주소가 '/guide'로 시작하는지 체크 (가이드 페이지 여부)
  const isGuidePage = location.pathname.startsWith("/guide");
  const isPubPage = location.pathname.startsWith("/pub");
  const hideGnb = isGuidePage || isPubPage;

  return (
    <>
      {/* 1. 가이드 페이지가 아닐 때만 상단 GNB 노출 */}
      {!hideGnb && (
        <nav className="gnb">
          <div className="gnb_container">
            <div className="gnb_logo">
              <Link to="/">Project Admin</Link>
            </div>
            <div className="gnb_menu">
              <Link to="/">홈</Link>
              <Link to="/about">소개</Link>
              <Link to="/guide" className="btn_pub_guide">
                퍼블 가이드
              </Link>
            </div>
          </div>
        </nav>
      )}

      {/* 2. 메인 콘텐츠 영역: 가이드 페이지라면 GNB가 없으므로 상단 여백(margin_top)을 없애기 위해 클래스 조건부 변경 */}
      <main className={isGuidePage ? "main_content_full" : "main_content"}>
        <Routes>
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/guide/work-list" element={<TaskList />} />
          <Route path="/pub/SamplePage" element={<SamplePage />} />
        </Routes>
      </main>
    </>
  );
}

// 🔹 Router 컴포넌트 안에서 useLocation을 써야 하므로 감싸주는 최상위 App
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
