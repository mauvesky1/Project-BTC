import VideoItem from "@/components/landing/VideoItem";

const videos = [
  {
    title: "Example video title",
    channel: "Example channel",
  },
  {
    title: "Another example video",
    channel: "Example channel",
  },
  {
    title: "Third example video",
    channel: "Example channel",
  },
];

export default function VideoFeed() {
  return (
    <section className="px-4 space-y-6">
      {videos.map((video, index) => (
        <VideoItem
          key={index}
          title={video.title}
          channel={video.channel}
        />
      ))}
    </section>
  );
}
