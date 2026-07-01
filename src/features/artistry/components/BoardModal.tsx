import { useEffect, useRef } from "react";
import type { BoardItem } from "./PinterestBoard";
import "./BoardModal.css";

interface BoardModalProps {
  item: BoardItem | null;
  onClose: () => void;
}

export default function BoardModal({ item, onClose }: BoardModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!item) return;

    lastFocused.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      lastFocused.current?.focus();
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="board-modal-title"
      >
        <button
          ref={closeRef}
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="modal-image">
          <img src={item.src} alt={item.alt} />
        </div>
        <div className="modal-detail">
          {item.catalogNo && <span className="modal-catalog">{item.catalogNo}</span>}
          <h2 id="board-modal-title" className="modal-title">
            {item.title}
          </h2>
          {item.medium && <p className="modal-medium">{item.medium}</p>}
          {item.description && <p className="modal-description">{item.description}</p>}
        </div>
      </div>
    </div>
  );
}
