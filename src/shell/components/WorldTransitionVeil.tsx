import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./WorldTransition.css";

function worldKey(pathname: string): string {
  return pathname.split("/")[1] || "hub";
}

/**
 * Render this once, as a sibling to <WorldTransition />, near the root of the app.
 * It's a fixed black veil that flashes over the screen on world changes,
 * independent of content fade timing, so the swap genuinely reads as "through black"
 * rather than a crossfade.
 */
export default function WorldTransitionVeil() {
  const location = useLocation();
  const prevKey = useRef(worldKey(location.pathname));
  const [active, setActive] = useState(false);

  useEffect(() => {
    const nextKey = worldKey(location.pathname);
    if (nextKey !== prevKey.current) {
      setActive(true);
      const timer = setTimeout(() => setActive(false), 260);
      prevKey.current = nextKey;
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return <div className={`world-veil${active ? " world-veil--active" : ""}`} aria-hidden="true" />;
}
