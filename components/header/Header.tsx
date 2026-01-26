export default function Header() {
  return (
    <header className="w-full border-b border-neutral-200">
      <div className="mx-auto flex h-14 max-w-6xl items-center px-4 gap-3">
        {/* Mobile menu */}
        <button
          className="md:hidden p-2 rounded hover:bg-neutral-100"
          aria-label="Open menu"
        >
          ☰
        </button>

        {/* Logo */}
        <div className="text-lg font-semibold">
          YouTube
        </div>
      </div>
    </header>
  );
}
