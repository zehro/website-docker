import { Link } from "react-router-dom";
import "./WritingHome.css";

interface Story {
  slug: string;
  title: string;
  note: string;
}

const stories: Story[] = [
  { slug: "my-story", title: "My Story", note: "Interactive fiction, SugarCube" },
];

export default function WritingHome() {
  return (
    <div className="writing-home">
      <ul className="story-list">
        {stories.map((story) => (
          <li key={story.slug}>
            <Link to={`/writing/${story.slug}`} className="story-link">
              <span className="story-title">{story.title}</span>
              <span className="story-note">{story.note}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
