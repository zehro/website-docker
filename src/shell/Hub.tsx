import { Link } from "react-router-dom";
import "./Hub.css";

interface World {
  path: string;
  code: string;
  name: string;
  tagline: string;
  theme: "coding" | "artistry" | "writing";
}

const worlds: World[] = [
  {
    path: "/coding",
    code: "COD-01",
    name: "Coding",
    tagline: "Homelab notes, tools, things I built",
    theme: "coding",
  },
  {
    path: "/artistry",
    code: "ART-01",
    name: "Artistry",
    tagline: "Manga, curios, visual work",
    theme: "artistry",
  },
  {
    path: "/writing",
    code: "WRT-01",
    name: "Writing",
    tagline: "Essays, notes, longer thoughts",
    theme: "writing",
  },
];

export default function Hub() {
  return (
    <main className="hub">
      <p className="hub-eyebrow">zehrowon.dev</p>
      <div className="hub-doors">
        {worlds.map((world) => (
          <Link key={world.path} to={world.path} className="hub-door" data-theme={world.theme}>
            <span className="hub-code">{world.code}</span>
            <span className="hub-name">{world.name}</span>
            <span className="hub-tagline">{world.tagline}</span>
            <span className="hub-enter" aria-hidden="true">
              enter →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
