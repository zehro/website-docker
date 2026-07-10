import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../shared/components/Layout";
import { HomePage } from "../features/home/HomePage";
import { CodingPage } from "../features/coding/CodingPage";
import { AllProjectsPage } from "../features/coding/AllProjectsPage";
import { CategoryProjectsPage } from "../features/coding/CategoryProjectsPage";
import { ArtistryPage } from "../features/artistry/ArtistryPage";
import { WritingPage } from "../features/writing/WritingPage";
import { NotFoundPage } from "../features/not-found/NotFoundPage";

const WritingPostPage = lazy(() =>
  import("../features/writing/WritingPostPage").then((m) => ({
    default: m.WritingPostPage,
  })),
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "coding",
        element: <CodingPage />,
        children: [
          { index: true, element: <AllProjectsPage /> },
          { path: ":category", element: <CategoryProjectsPage /> },
        ],
      },
      { path: "artistry", element: <ArtistryPage /> },
      { path: "writing", element: <WritingPage /> },
      {
        path: "writing/:slug",
        element: (
          <Suspense fallback={<p className="px-6 py-16 text-gray-500">Loading...</p>}>
            <WritingPostPage />
          </Suspense>
        ),
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
