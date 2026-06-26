import { Outlet } from "react-router-dom";

import "./Layout.css";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ParticlesBackground from "../ui/ParticlesBackground";

export default function Layout() {
  return (
    <>
      <ParticlesBackground />

      <Sidebar />

      <main className="layout-main">
        <Navbar />

        <div className="page-container">
          <Outlet />
        </div>
      </main>
    </>
  );
}