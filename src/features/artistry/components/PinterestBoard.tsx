import { useState } from "react";
import Masonry from "react-masonry-css";
import BoardModal from "./BoardModal";
import "./PinterestBoard.css";

export interface BoardItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  /** e.g. "MG-014" — shown as the catalog number on hover and in the modal */
  catalogNo?: string;
  /** longer note shown only in the modal */
  description?: string;
  /** e.g. "Ink on paper, 2019" — shown only in the modal */
  medium?: string;
}

interface PinterestBoardProps {
  items: BoardItem[];
  /** column counts at each breakpoint, widest first */
  columns?: { default: number; 1100: number; 700: number; 500: number };
}

const DEFAULT_COLUMNS = { default: 4, 1100: 3, 700: 2, 500: 1 };

export default function PinterestBoard({ items, columns = DEFAULT_COLUMNS }: PinterestBoardProps) {
  const [activeItem, setActiveItem] = useState<BoardItem | null>(null);

  return (
    <>
      <Masonry breakpointCols={columns} className="board-grid" columnClassName="board-column">
        {items.map((item, i) => (
          <div
            className="board-item"
            key={item.id}
            style={{ animationDelay: `${(i % 12) * 40}ms` }}
          >
            <button
              type="button"
              className="board-link"
              onClick={() => setActiveItem(item)}
              aria-haspopup="dialog"
            >
              <figure className="board-card">
                <span className="board-pin" aria-hidden="true" />
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption className="board-label">
                  {item.catalogNo && <span className="board-catalog">{item.catalogNo}</span>}
                  <span className="board-title">{item.title}</span>
                </figcaption>
              </figure>
            </button>
          </div>
        ))}
      </Masonry>
      <BoardModal item={activeItem} onClose={() => setActiveItem(null)} />
    </>
  );
}
