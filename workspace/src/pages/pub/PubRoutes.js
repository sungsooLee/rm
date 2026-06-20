import React from "react";
import { Routes, Route } from "react-router-dom";

// 💡 현재 폴더(src/pages/pub/)에 있는 작업 파일들을 임포트합니다.
import SamplePage from "./SamplePage";
// import MainPage from "./MainPage"; // 예시: 새로 만든 페이지가 있다면 이렇게 추가
// import SubPage from "./SubPage";

const PubRoutes = () => {
  return (
    <Routes>
      {/* ⚠️ 중요: App.js에서 '/pub/*'로 연결해주기 때문에, 
        여기 하위 라우터에서는 앞의 '/pub'을 생략하고 뒷주소만 적습니다.
      */}
      <Route path="SamplePage" element={<SamplePage />} />

      {/* 💡 새로운 페이지를 추가할 때 아래처럼 한 줄씩만 늘려가면 됩니다. */}
      {/* <Route path="main" element={<MainPage />} /> */}
      {/* <Route path="sub" element={<SubPage />} /> */}
    </Routes>
  );
};

export default PubRoutes;
