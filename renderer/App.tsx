import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from './pages/Home';
import { OtherPage } from './pages/OtherPage';
import { BankAccount } from './pages/BankAccount';

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="otherpage" element={<OtherPage />} />
          <Route path="bankaccount" element={<BankAccount />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}