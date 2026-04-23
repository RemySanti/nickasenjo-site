import { useState, useRef } from 'react';
import { Play, X } from 'lucide-react';

/**
 * Full-Width Video Banner Component
 * 
 * VIDEO SPECIFICATIONS NEEDED:
 * - Dimensions: 1920 × 1080 (landscape) or 2560 × 1440 for extra clarity
 * - Length: 6–12 seconds ideal
 * - Format: MP4 (H.264 or H.265)
 * - File Size: Under 12–15 MB for fast load times
 * 
 * Replace the placeholder video URL below with your actual video file
 */

export function FullWidthVideoBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  // TODO: Replace this with your actual video URL
  const videoUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  const handleBannerClick = () => {
    setIsModalOpen(true);
    // Pause banner video when modal opens
    if (videoRef.current) {
      videoRef.current.pause();
    }
    // Play modal video
    setTimeout(() => {
      if (modalVideoRef.current) {
        modalVideoRef.current.play().catch(err => {
          console.log('Video play failed:', err);
        });
        setIsPlaying(true);
      }
    }, 100);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsPlaying(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
    // Resume banner video
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video play failed:', err);
      });
    }
  };

  const togglePlayPause = () => {
    if (modalVideoRef.current) {
      if (isPlaying) {
        modalVideoRef.current.pause();
      } else {
        modalVideoRef.current.play().catch(err => {
          console.log('Video play failed:', err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Full-Width Video Banner */}
      <section className="relative w-full overflow-hidden cursor-pointer group">
        <div 
          className="relative w-full"
          style={{ paddingBottom: '56.25%' }} // 16:9 aspect ratio
          onClick={handleBannerClick}
        >
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            onError={(e) => console.log('Banner video error:', e.type)}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Optional Text Overlay */}
          <div className="absolute bottom-8 left-8 text-white z-10">
            <h2 
              className="text-white mb-2 tracking-wider uppercase"
              style={{ 
                fontFamily: 'Lemon Milk, sans-serif',
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)'
              }}
            >
              Featured Reel
            </h2>
            <p className="text-white/80 max-w-xl">
              Click to watch our latest cinematic work
            </p>
          </div>
        </div>
      </section>

      {/* Full Video Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          onClick={handleCloseModal}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 z-[110] text-white hover:text-[#BC271C] transition-colors"
            onClick={handleCloseModal}
          >
            <X size={40} />
          </button>

          {/* Video Player */}
          <div 
            className="relative w-full h-full flex items-center justify-center px-4 md:px-12"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={modalVideoRef}
              className="w-full max-h-full"
              controls
              onClick={togglePlayPause}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Instructions */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-center">
            <p className="text-sm">Click anywhere outside the video to close</p>
          </div>
        </div>
      )}
    </>
  );
}