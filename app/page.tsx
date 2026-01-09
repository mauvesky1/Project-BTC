import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import VideoFeed from "@/components/landing/VideoFeed";

export default function HomePage() {
  return (
    <main className="min-h-screen space-y-6">
      <Header />
      <Hero />
      <VideoFeed />
    </main>
  );
}
