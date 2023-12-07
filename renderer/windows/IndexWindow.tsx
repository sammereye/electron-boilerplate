import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { IndexPage } from '../pages/Index';
import { AboutPage } from '../pages/About';

export function IndexWindow() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}