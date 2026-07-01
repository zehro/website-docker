import { Link } from "react-router-dom";
import { posts } from "./posts/posts";

export function WritingPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Writing</h1>
      <ul className="mt-8 space-y-8">
        {sorted.map((post) => (
          <li key={post.slug}>
            <Link to={`/writing/${post.slug}`} className="group">
              <h2 className="text-xl font-semibold text-gray-900 group-hover:underline">
                {post.title}
              </h2>
              <p className="mt-1 text-sm text-gray-500">{post.date}</p>
              <p className="mt-2 text-gray-600">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
