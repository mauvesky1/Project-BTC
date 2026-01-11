import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import VideoFeed from "@/components/landing/VideoFeed";

export default function HomePage() {
  return (
    <main className="min-h-screen flex justify-center">
      <div className="w-full max-w-md md:max-w-5xl space-y-6 pb-24">
        <Header />
        <Hero />
        <VideoFeed />
      </div>
    </main>
  );
}
