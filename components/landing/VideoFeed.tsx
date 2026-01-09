import VideoItem from "@/components/landing/VideoItem";

export default function VideoFeed() {
  return (
    <section className="px-4 space-y-6">
      <VideoItem
        title="Example video title"
        channel="Example channel"
      />

      <VideoItem
        title="Another example video"
        channel="Example channel"
      />

      <VideoItem
        title="Third example video"
        channel="Example channel"
      />
    </section>
  );
}
