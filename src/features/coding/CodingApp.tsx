import { Route, Routes } from "react-router-dom";
import BackToHub from "../shared/BackToHub";
import CodingHome from "./CodingHome";
import "./CodingApp.css";

export default function CodingApp() {
  return (
    <div data-theme="coding" className="coding-world">
      <header className="coding-header">
        <BackToHub code="COD-01" />
        <span className="coding-header-title">coding</span>
      </header>
      <Routes>
        <Route index element={<CodingHome />} />
        {/* <Route path=":slug" element={<CodingPost />} /> */}
      </Routes>
    </div>
  );
}
