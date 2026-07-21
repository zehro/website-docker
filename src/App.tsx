import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import ErrorBoundary from "./shell/ErrorBoundary";
import { router } from "./router";

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={null}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
}
