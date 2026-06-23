import React from "react";
import { Routes, Route } from "react-router-dom";

// pub 폴더 안에 파일
import RmLayoutPage from "./RmLayoutPage";
import SamplePage from "./SamplePage";
import LogoTest from "./LogoTest";

const PubRoutes = () => {
  return (
    <Routes>
      <Route path="RmLayoutPage" element={<RmLayoutPage />} />
      <Route path="SamplePage" element={<SamplePage />} />
      <Route path="LogoTest" element={<LogoTest />} />
    </Routes>
  );
};

export default PubRoutes;
