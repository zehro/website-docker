import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import ts from "highlight.js/lib/languages/typescript";
import bash from "highlight.js/lib/languages/bash";
import json from "highlight.js/lib/languages/json";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import yaml from "highlight.js/lib/languages/yaml";
import dockerfile from "highlight.js/lib/languages/dockerfile";
import nginx from "highlight.js/lib/languages/nginx";
import { posts } from "./posts/posts";

const postFiles = import.meta.glob("./posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function getPostContent(slug: string): string | undefined {
  const path = `./posts/${slug}.md`;
  return postFiles[path];
}

const highlightLanguages = {
  typescript: ts,
  bash,
  json,
  xml,
  css,
  yaml,
  dockerfile,
  nginx,
};

export function WritingPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);
  const content = slug ? getPostContent(slug) : undefined;

  if (!post || !content) {
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
      <div className="prose prose-gray mt-6 max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[[rehypeHighlight, { languages: highlightLanguages }]]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </main>
  );
}
