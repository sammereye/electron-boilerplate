import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav";

export function Layout() {
  return (
    <main className="h-full p-4">
      <Nav />
      <Outlet />
    </main>
  )
}