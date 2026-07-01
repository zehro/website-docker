import { Outlet, useLocation } from "react-router-dom";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Layout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Nav />
      <div key={location.pathname} className="flex-1 animate-fade-in">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
