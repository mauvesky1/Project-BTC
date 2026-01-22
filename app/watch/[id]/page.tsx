import Link from "next/link";
import VideoPlayer from "@/components/video/VideoPlayer";
import RelatedVideos from "@/components/video/RelatedVideos";


export default function WatchPage() {
  return (
    <main className="px-4 md:px-0 py-6 space-y-6">
      <Link
        href="/"
        className="text-sm text-neutral-600 hover:underline"
      >
        ← Back
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Video + details */}
        <div className="md:col-span-2 space-y-4">
         <VideoPlayer />

          <h1 className="text-base font-semibold">
            Video title goes here
          </h1>

          <p className="text-sm text-neutral-600">
            Channel name • view count
          </p>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4">
         <RelatedVideos />
        </aside>
      </div>
    </main>
  );
}
