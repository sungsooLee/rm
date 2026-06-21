import React from "react";
import { Routes, Route } from "react-router-dom";

// pub 폴더 안에 파일
import RmLayoutPage from "./RmLayoutPage";
import SamplePage from "./SamplePage";

const PubRoutes = () => {
  return (
    <Routes>
      <Route path="RmLayoutPage" element={<RmLayoutPage />} />
      <Route path="SamplePage" element={<SamplePage />} />
    </Routes>
  );
};

export default PubRoutes;
