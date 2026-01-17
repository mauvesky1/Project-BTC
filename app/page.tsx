import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import VideoFeed from "@/components/landing/VideoFeed";

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
