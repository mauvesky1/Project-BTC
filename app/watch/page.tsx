import Link from "next/link";

export default function WatchPage() {
  return (
    <main className="px-4 md:px-0 py-6 space-y-4">
      <Link
        href="/"
        className="text-sm text-neutral-600 hover:underline"
      >
        ← Back
      </Link>

      <h1 className="text-lg font-semibold">
        Watch Page
      </h1>

      <p className="text-sm text-neutral-600">
        Video player and details will go here.
      </p>
    </main>
  );
}
