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
    <section className="px-4 md:px-0 grid grid-cols-1 gap-6 md:grid-cols-2">
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
