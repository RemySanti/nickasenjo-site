import { useEffect, useMemo } from 'react';

export interface VideoViewerData {
  title: string;
  videoUrl: string;
  subtitle?: string;
  category?: string;
  price?: string;
}

interface VideoViewerModalProps {
  video: VideoViewerData | null;
  onClose: () => void;
}

export function VideoViewerModal({ video, onClose }: VideoViewerModalProps) {
  const videoSrc = useMemo(() => {
    if (!video) return '';
    const isYouTube = video.videoUrl.includes('youtube.com') || video.videoUrl.includes('youtu.be');
    if (!isYouTube) return video.videoUrl;

    const joinChar = video.videoUrl.includes('?') ? '&' : '?';
    return `${video.videoUrl}${joinChar}autoplay=1&rel=0`;
  }, [video]);

  useEffect(() => {
    if (!video) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) {
    return null;
  }

  const isYouTube = videoSrc.includes('youtube.com') || videoSrc.includes('youtu.be');

  return (
    <div
      className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-[#BC271C] transition-colors"
          style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
        >
          CLOSE ✕
        </button>

        <div className="aspect-[16/9] bg-black">
          {isYouTube ? (
            <iframe
              className="w-full h-full"
              src={videoSrc}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            >
              Your browser does not support the video tag.
            </iframe>
          ) : (
            <video
              className="w-full h-full"
              controls
              autoPlay
              src={videoSrc}
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        <div className="mt-6 text-white">
          <h3
            className="mb-2 tracking-wider uppercase"
            style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.5rem' }}
          >
            {video.title}
          </h3>
          {video.subtitle && <p className="text-white/70 mb-1">{video.subtitle}</p>}
          {video.category && <p className="text-white/50">{video.category}</p>}
          {video.price && <p className="text-white/50">{video.price}</p>}
        </div>
      </div>
    </div>
  );
}
