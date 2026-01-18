import VideoItem from "@/components/video/VideoItem";

const videos = [
  {
    id: "1",
    title: "Learn Next.js in 10 Minutes",
    channel: "Code Academy",
    views: "120K views",
    thumbnail: "/thumb1.jpg",
  },
  {
    id: "2",
    title: "Build a YouTube Clone",
    channel: "Dev Simplified",
    views: "89K views",
    thumbnail: "/thumb2.jpg",
  },
];

export default function VideoFeed() {
  return (
    <section className="px-4 md:px-0 grid grid-cols-1 gap-6 md:grid-cols-2">
      {videos.map((video, index) => (
        <VideoItem
          key={video.id}
          title={video.title}
          channel={video.channel}
        />
      ))}
    </section>
  );
}
