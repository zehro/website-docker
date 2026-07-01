import { Route, Routes } from "react-router-dom";
import BackToHub from "../shared/BackToHub";
import WritingHome from "./WritingHome";
import StoryPage from "./StoryPage";
import "./WritingApp.css";

export default function WritingApp() {
  return (
    <div data-theme="writing" className="writing-world">
      <header className="writing-header">
        <BackToHub code="WRT-01" />
        <span className="writing-header-title">writing</span>
      </header>
      <Routes>
        <Route index element={<WritingHome />} />
        <Route path=":slug" element={<StoryPage />} />
      </Routes>
    </div>
  );
}
