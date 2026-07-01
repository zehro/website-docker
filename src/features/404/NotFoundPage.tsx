import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">404</h1>
      <p className="mt-4 text-gray-600">This page doesn't exist.</p>
      <Link to="/" className="mt-6 text-sm font-medium text-gray-900 underline underline-offset-4">
        Back home
      </Link>
    </main>
  );
}
