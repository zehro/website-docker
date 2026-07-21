import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import WorldTransition from "./shell/WorldTransition";
import Hub from "./shell/Hub";
import { NotFoundPage } from "./features/404/NotFoundPage";

const CodingApp = lazy(() => import("./features/coding/CodingApp"));
const ArtistryApp = lazy(() => import("./features/artistry/ArtistryApp"));
const WritingApp = lazy(() => import("./features/writing/WritingApp"));

export const router = createBrowserRouter([
  {
    element: <WorldTransition />,
    children: [
      { path: "/", element: <Hub /> },
      { path: "/coding/*", element: <CodingApp /> },
      { path: "/artistry/*", element: <ArtistryApp /> },
      { path: "/writing/*", element: <WritingApp /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
