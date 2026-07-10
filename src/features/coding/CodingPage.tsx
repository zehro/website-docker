import { NavLink, Outlet } from "react-router-dom";
import { categories } from "./types";

export function CodingPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Coding</h1>
      <ul className="mt-6 flex gap-4 border-b border-gray-200 pb-4 text-sm font-medium">
        <li>
          <NavLink
            to="/coding"
            end
            className={({ isActive }) =>
              isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
            }
          >
            All
          </NavLink>
        </li>
        {categories.map(({ slug, label }) => (
          <li key={slug}>
            <NavLink
              to={`/coding/${slug}`}
              className={({ isActive }) =>
                isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Outlet />
      </div>
    </main>
  );
}
