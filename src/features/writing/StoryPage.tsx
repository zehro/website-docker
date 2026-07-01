import { useParams } from "react-router-dom";
import "./StoryPage.css";

export default function StoryPage() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="story-page">
      <iframe
        src={`/fiction/${slug}/index.html`}
        title="Interactive story"
        className="story-frame"
      />
    </div>
  );
}
