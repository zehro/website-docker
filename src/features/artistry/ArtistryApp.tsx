import { Route, Routes } from "react-router-dom";
import BackToHub from "../shared/BackToHub";
import ArtistryHome from "./ArtistryHome";
import "./ArtistryApp.css";

export default function ArtistryApp() {
  return (
    <div data-theme="artistry" className="artistry-world">
      <header className="artistry-header">
        <BackToHub code="ART-01" />
        <span className="artistry-header-title">artistry</span>
      </header>
      <Routes>
        <Route index element={<ArtistryHome />} />
        {/* <Route path=":slug" element={<ArtistryDetail />} /> */}
      </Routes>
    </div>
  );
}
