import VideoItem from "@/components/video/VideoItem";

const videos = Array.from({ length: 12 }).map((_, i) => ({
  id: String(i),
  title: `Video ${i + 1}`,
  channel: "Test Channel",
}));


export default function VideoFeed() {
  return (
// <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
<section
  className="
    grid gap-6
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    xl:grid-cols-4
    2xl:grid-cols-5
  "
>


      {videos.map((video) => (
        <VideoItem
          key={video.id}
          id={video.id}
          title={video.title}
          channel={video.channel}
        />
      ))}
    </section>
  );
}
