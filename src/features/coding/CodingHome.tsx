import DraggableWindow from "./components/DraggableWindow";
import "./CodingHome.css";

export default function CodingHome() {
  return (
    <div className="coding-desktop">
      <DraggableWindow
        title="about.txt"
        defaultPosition={{ x: 40, y: 40 }}
        defaultSize={{ width: 300, height: 180 }}
      >
        <p>Homelab, self-hosted infra, and whatever breaks this week.</p>
      </DraggableWindow>

      <DraggableWindow
        title="projects/"
        defaultPosition={{ x: 380, y: 100 }}
        defaultSize={{ width: 320, height: 220 }}
      >
        <ul>
          <li>Filebrowser + NPM subfolder routing</li>
          <li>Passbolt CE upgrade postmortem</li>
          <li>Kavita manga stack + ComicInfo.xml tagging</li>
        </ul>
      </DraggableWindow>

      <DraggableWindow
        title="terminal"
        defaultPosition={{ x: 120, y: 300 }}
        defaultSize={{ width: 360, height: 160 }}
      >
        <p>$ docker compose ps</p>
        <p>all services healthy</p>
      </DraggableWindow>
    </div>
  );
}
