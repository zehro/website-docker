import PinterestBoard, { type BoardItem } from "./components/PinterestBoard";
import "./ArtistryHome.css";

const items: BoardItem[] = [
  {
    id: "1",
    src: "/curios/inkstone.jpg",
    alt: "Antique inkstone",
    title: "Qing-era inkstone",
    catalogNo: "CU-002",
    medium: "Carved slate, 19th c.",
    description: "Picked up at a flea market outside Kyoto. Still holds ink.",
  },
  {
    id: "2",
    src: "/manga/covers/blame.jpg",
    alt: "BLAME! volume cover",
    title: "BLAME! vol. 3",
    catalogNo: "MG-014",
    description: "First-run tankobon, Tsutomu Nihei.",
  },
  // ...more items
];

export default function ArtistryHome() {
  return (
    <div className="artistry-home">
      <PinterestBoard items={items} />
    </div>
  );
}
