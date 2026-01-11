type VideoItemProps = {
  title: string;
  channel: string;
};

export default function VideoItem({ title, channel }: VideoItemProps) {
  return (
    <div className="space-y-2">
      <div className="aspect-video bg-neutral-200 rounded-lg" />

      <div className="space-y-0.5">
        <p className="text-sm font-medium leading-snug">
          {title}
        </p>

        <p className="text-xs text-neutral-600">
          {channel}
        </p>
      </div>
    </div>
  );
}
