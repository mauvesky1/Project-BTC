import VideoItem from "@/components/video/VideoItem";

const relatedVideos = [
  {
    id: "2",
    title: "Another Great Video",
    channel: "Dev Channel",
  },
  {
    id: "3",
    title: "Understanding React Layouts",
    channel: "Frontend School",
  },
];

export default function RelatedVideos() {
  return (
    <div className="space-y-4">
      {relatedVideos.map((video) => (
        <VideoItem
          key={video.id}
          id={video.id}
          title={video.title}
          channel={video.channel}
        />
      ))}
    </div>
  );
}
