type VideoItemProps = {
    title: string;
    channel: string;
  };
  
  export default function VideoItem({ title, channel }: VideoItemProps) {
    return (
      <div>
        <div className="aspect-video bg-neutral-200 rounded-lg" />
  
        <p className="mt-2 text-sm font-medium">
          {title}
        </p>
  
        <p className="text-xs text-neutral-600">
          {channel}
        </p>
      </div>
    );
  }
  