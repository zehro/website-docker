export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto max-w-3xl px-6 py-8 text-sm text-gray-500">
        <p>&copy; {year} Won. Built with React, Vite, and Tailwind.</p>
      </div>
    </footer>
  );
}
