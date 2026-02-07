import Hero from "@/components/layout/Hero";
import VideoFeed from "@/components/video/VideoFeed";

export default function HomePage() {
  return (
     <div className="flex">
     <div className="flex-1 px-4 md:px-6">
        <Hero />
        <div className="outline outline-red-500">
            <VideoFeed />
        </div>
      </div>
      </div>
  );
}
