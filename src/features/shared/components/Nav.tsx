import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/coding", label: "Coding" },
  { to: "/artistry", label: "Artistry" },
  { to: "/writing", label: "Writing" },
];

export function Nav() {
  return (
    <nav className="border-b border-gray-200">
      <ul className="mx-auto flex max-w-3xl gap-6 px-6 py-4">
        {links.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
