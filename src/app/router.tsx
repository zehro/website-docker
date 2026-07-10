import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../shared/components/Layout";
import { HomePage } from "../features/home/HomePage";
import { CodingPage } from "../features/coding/CodingPage";
import { ArtistryPage } from "../features/artistry/ArtistryPage";
import { WritingPage } from "../features/writing/WritingPage";
import { WritingPostPage } from "../features/writing/WritingPostPage";
import { NotFoundPage } from "../features/not-found/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "coding", element: <CodingPage /> },
      { path: "artistry", element: <ArtistryPage /> },
      { path: "writing", element: <WritingPage /> },
      { path: "writing/:slug", element: <WritingPostPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
