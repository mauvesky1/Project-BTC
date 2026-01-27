export default function Header() {
  return (
    <header className="w-full border-b border-neutral-200 bg-white sticky top-0 z-50">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4">
        {/* Mobile menu */}
        <button
          className="md:hidden p-2 rounded hover:bg-neutral-100"
          aria-label="Open menu"
        >
          ☰
        </button>

        {/* Logo */}
        <div className="text-lg font-semibold whitespace-nowrap">
          YourTube
        </div>

        {/* Search (desktop only) */}
        <div className="hidden md:flex flex-1 justify-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full max-w-xl rounded-full border border-neutral-300 px-4 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-400"
          />
        </div>

        {/* Right-side placeholder */}
        {/* Right-side placeholder */}
<div className="hidden md:flex items-center gap-4">
  <div className="w-6 h-6 bg-neutral-300 rounded-full" /> {/* Example: upload */}
  <div className="w-6 h-6 bg-neutral-300 rounded-full" /> {/* Example: notifications */}
  <div className="w-6 h-6 bg-neutral-300 rounded-full" /> {/* Example: profile */}
</div>

      </div>
    </header>
  );
}
