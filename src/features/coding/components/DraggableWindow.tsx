import { type ReactNode, useState } from "react";
import { Rnd } from "react-rnd";
import "./DraggableWindow.css";

interface DraggableWindowProps {
  title: string;
  children: ReactNode;
  defaultPosition: { x: number; y: number };
  defaultSize: { width: number; height: number };
}

export default function DraggableWindow({
  title,
  children,
  defaultPosition,
  defaultSize,
}: DraggableWindowProps) {
  const [minimized, setMinimized] = useState(false);

  return (
    <Rnd
      default={{ ...defaultPosition, ...defaultSize }}
      minWidth={220}
      minHeight={minimized ? 36 : 140}
      maxHeight={minimized ? 36 : undefined}
      bounds="parent"
      dragHandleClassName="window-titlebar"
      className="draggable-window"
      enableResizing={!minimized}
    >
      <div className="window-titlebar">
        <span className="window-dot" aria-hidden="true" />
        <span className="window-title">{title}</span>
        <button
          type="button"
          className="window-minimize"
          onClick={() => setMinimized((m) => !m)}
          aria-label={minimized ? "Expand window" : "Minimize window"}
        >
          {minimized ? "+" : "_"}
        </button>
      </div>
      {!minimized && <div className="window-body">{children}</div>}
    </Rnd>
  );
}
