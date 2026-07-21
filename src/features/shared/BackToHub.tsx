import { Link } from "react-router-dom";
import "./BackToHub.css";

interface BackToHubProps {
  code: string;
}

export default function BackToHub({ code }: BackToHubProps) {
  return (
    <Link to="/" className="back-to-hub">
      <span aria-hidden="true">◂</span> {code}
    </Link>
  );
}
