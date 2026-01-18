import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import VideoFeed from "@/components/video/VideoFeed";

export default function HomePage() {
  return (
    <main className="min-h-screen flex justify-center">
      <div className="w-full max-w-md space-y-6">
        <Header />
        <Hero />
        <VideoFeed />
      </div>
    </main>
  );
}
