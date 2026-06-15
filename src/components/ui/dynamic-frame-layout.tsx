import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export interface Frame {
  id: number;
  video: string;
  poster?: string;
  /** YouTube embed start time (seconds) for hover preview. */
  startSeconds?: number;
  defaultPos: { x: number; y: number; w: number; h: number };
  corner?: string;
  edgeHorizontal?: string;
  edgeVertical?: string;
  mediaSize?: number;
  borderThickness?: number;
  borderSize?: number;
  isHovered?: boolean;
}

interface FrameComponentProps {
  video: string;
  poster?: string;
  startSeconds?: number;
  width: number | string;
  height: number | string;
  className?: string;
  corner?: string;
  edgeHorizontal?: string;
  edgeVertical?: string;
  mediaSize: number;
  borderThickness: number;
  borderSize: number;
  showFrame: boolean;
  isHovered: boolean;
  onClick?: () => void;
}

function isDirectVideoSource(url: string) {
  return /\.(mp4|webm|ogg|mov)(\?|$)/i.test(url);
}

function isYouTubeEmbed(url: string) {
  return /youtube\.com\/embed|youtu\.be/.test(url);
}

function getYouTubeId(embedUrl: string) {
  const match = embedUrl.match(/youtube\.com\/embed\/([^?&/]+)/);
  return match ? match[1] : null;
}

function buildYouTubeHoverSrc(embedUrl: string, startSeconds?: number) {
  const videoId = getYouTubeId(embedUrl);
  if (!videoId) return embedUrl;

  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    loop: '1',
    playlist: videoId,
    rel: '0',
    controls: '0',
    modestbranding: '1',
    playsinline: '1',
  });
  const start = startSeconds != null ? Math.max(0, Math.floor(startSeconds)) : 0;
  if (start > 0) {
    params.set('start', String(start));
  }
  const base = embedUrl.split('?')[0];
  return `${base}?${params.toString()}`;
}

function FrameComponent({
  video,
  poster,
  startSeconds,
  width,
  height,
  className = '',
  corner = '',
  edgeHorizontal = '',
  edgeVertical = '',
  mediaSize,
  borderThickness,
  borderSize,
  showFrame,
  isHovered,
  onClick,
}: FrameComponentProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const useVideo = isDirectVideoSource(video);
  const useYouTube = isYouTubeEmbed(video);

  useEffect(() => {
    if (!useVideo) return;
    if (isHovered) {
      void videoRef.current?.play();
    } else {
      videoRef.current?.pause();
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered, useVideo]);

  const mediaSrc = poster || video;
  const youtubeSrc = useYouTube ? buildYouTubeHoverSrc(video, startSeconds) : '';

  return (
    <button
      type="button"
      className={`relative block cursor-pointer border-0 bg-transparent p-0 text-left ${className}`}
      style={{
        width,
        height,
        transition: 'width 0.3s ease-in-out, height 0.3s ease-in-out',
      }}
      onClick={onClick}
      aria-label="View project video"
    >
      <div className="relative h-full w-full overflow-hidden rounded-sm">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            zIndex: 1,
            transition: 'all 0.3s ease-in-out',
            padding: showFrame ? `${borderThickness}px` : '0',
            width: showFrame ? `${borderSize}%` : '100%',
            height: showFrame ? `${borderSize}%` : '100%',
            left: showFrame ? `${(100 - borderSize) / 2}%` : '0',
            top: showFrame ? `${(100 - borderSize) / 2}%` : '0',
          }}
        >
          <div
            className="h-full w-full overflow-hidden relative"
            style={{
              transform: `scale(${mediaSize})`,
              transformOrigin: 'center',
              transition: 'transform 0.3s ease-in-out',
            }}
          >
            {useVideo ? (
              <video
                className="h-full w-full object-cover"
                src={video}
                poster={poster}
                loop
                muted
                playsInline
                ref={videoRef}
              />
            ) : useYouTube ? (
              <>
                <img
                  className="h-full w-full object-cover"
                  src={mediaSrc}
                  alt=""
                  loading="lazy"
                />
                {isHovered && (
                  <iframe
                    className="pointer-events-none absolute inset-0 h-full w-full border-0"
                    src={youtubeSrc}
                    title=""
                    allow="autoplay; encrypted-media; picture-in-picture"
                  />
                )}
              </>
            ) : (
              <img
                className="h-full w-full object-cover"
                src={mediaSrc}
                alt=""
                loading="lazy"
              />
            )}
          </div>
        </div>

        {showFrame && corner && edgeHorizontal && edgeVertical && (
          <div className="absolute inset-0" style={{ zIndex: 2 }}>
            <div
              className="absolute left-0 top-0 h-16 w-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})` }}
            />
            <div
              className="absolute right-0 top-0 h-16 w-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: 'scaleX(-1)' }}
            />
            <div
              className="absolute bottom-0 left-0 h-16 w-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: 'scaleY(-1)' }}
            />
            <div
              className="absolute bottom-0 right-0 h-16 w-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: 'scale(-1, -1)' }}
            />

            <div
              className="absolute left-16 right-16 top-0 h-16"
              style={{
                backgroundImage: `url(${edgeHorizontal})`,
                backgroundSize: 'auto 64px',
                backgroundRepeat: 'repeat-x',
              }}
            />
            <div
              className="absolute bottom-0 left-16 right-16 h-16"
              style={{
                backgroundImage: `url(${edgeHorizontal})`,
                backgroundSize: 'auto 64px',
                backgroundRepeat: 'repeat-x',
                transform: 'rotate(180deg)',
              }}
            />
            <div
              className="absolute bottom-16 left-0 top-16 w-16"
              style={{
                backgroundImage: `url(${edgeVertical})`,
                backgroundSize: '64px auto',
                backgroundRepeat: 'repeat-y',
              }}
            />
            <div
              className="absolute bottom-16 right-0 top-16 w-16"
              style={{
                backgroundImage: `url(${edgeVertical})`,
                backgroundSize: '64px auto',
                backgroundRepeat: 'repeat-y',
                transform: 'scaleX(-1)',
              }}
            />
          </div>
        )}
      </div>
    </button>
  );
}

export interface DynamicFrameLayoutProps {
  frames: Frame[];
  className?: string;
  showFrames?: boolean;
  hoverSize?: number;
  gapSize?: number;
  gridRows?: number;
  gridCols?: number;
  onFrameClick?: (frame: Frame) => void;
  onHoverChange?: (frame: Frame | null) => void;
}

export function DynamicFrameLayout({
  frames: initialFrames,
  className,
  showFrames = false,
  hoverSize = 6,
  gapSize = 4,
  gridRows = 3,
  gridCols = 3,
  onFrameClick,
  onHoverChange,
}: DynamicFrameLayoutProps) {
  const [frames] = useState<Frame[]>(initialFrames);
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null);

  const rowUnits = gridRows * 4;
  const colUnits = gridCols * 4;

  const getRowSizes = () => {
    if (hovered === null) {
      return Array.from({ length: gridRows }, () => '4fr').join(' ');
    }
    const { row } = hovered;
    const nonHoveredSize = (rowUnits - hoverSize) / (gridRows - 1);
    return Array.from({ length: gridRows }, (_, r) =>
      r === row ? `${hoverSize}fr` : `${nonHoveredSize}fr`
    ).join(' ');
  };

  const getColSizes = () => {
    if (hovered === null) {
      return Array.from({ length: gridCols }, () => '4fr').join(' ');
    }
    const { col } = hovered;
    const nonHoveredSize = (colUnits - hoverSize) / (gridCols - 1);
    return Array.from({ length: gridCols }, (_, c) =>
      c === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`
    ).join(' ');
  };

  const getTransformOrigin = (x: number, y: number) => {
    const maxY = (gridRows - 1) * 4;
    const maxX = (gridCols - 1) * 4;
    const vertical = y === 0 ? 'top' : y === maxY ? 'bottom' : 'center';
    const horizontal = x === 0 ? 'left' : x === maxX ? 'right' : 'center';
    return `${vertical} ${horizontal}`;
  };

  return (
    <div
      className={`relative h-full w-full ${className ?? ''}`}
      style={{
        display: 'grid',
        gridTemplateRows: getRowSizes(),
        gridTemplateColumns: getColSizes(),
        gap: `${gapSize}px`,
        transition: 'grid-template-rows 0.4s ease, grid-template-columns 0.4s ease',
      }}
    >
      {frames.map((frame) => {
        const row = Math.floor(frame.defaultPos.y / 4);
        const col = Math.floor(frame.defaultPos.x / 4);
        const transformOrigin = getTransformOrigin(frame.defaultPos.x, frame.defaultPos.y);

        return (
          <motion.div
            key={frame.id}
            className="relative min-h-0 min-w-0"
            style={{
              transformOrigin,
              transition: 'transform 0.4s ease',
            }}
            onMouseEnter={() => {
              setHovered({ row, col });
              onHoverChange?.(frame);
            }}
            onMouseLeave={() => {
              setHovered(null);
              onHoverChange?.(null);
            }}
          >
            <FrameComponent
              video={frame.video}
              poster={frame.poster}
              startSeconds={frame.startSeconds}
              width="100%"
              height="100%"
              className="absolute inset-0"
              corner={frame.corner}
              edgeHorizontal={frame.edgeHorizontal}
              edgeVertical={frame.edgeVertical}
              mediaSize={frame.mediaSize ?? 1}
              borderThickness={frame.borderThickness ?? 0}
              borderSize={frame.borderSize ?? 100}
              showFrame={showFrames}
              isHovered={hovered?.row === row && hovered?.col === col}
              onClick={onFrameClick ? () => onFrameClick(frame) : undefined}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
