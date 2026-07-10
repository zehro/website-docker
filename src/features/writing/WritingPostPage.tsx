import { Link, useParams } from "react-router-dom";
import { posts } from "./posts";

export function WritingPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-gray-600">Post not found.</p>
        <Link to="/writing" className="mt-4 inline-block underline underline-offset-4">
          Back to Writing
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link to="/writing" className="text-sm text-gray-500 underline underline-offset-4">
        &larr; Back to Writing
      </Link>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">{post.title}</h1>
      <p className="mt-1 text-sm text-gray-500">{post.date}</p>
      <div className="mt-6 whitespace-pre-line text-gray-700">{post.content}</div>
    </main>
  );
}
