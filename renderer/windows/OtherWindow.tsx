import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { OtherPage } from "../pages/Other";

export function OtherWindow() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<OtherPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}