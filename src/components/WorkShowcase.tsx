import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Luxury Automotive Campaign',
    subtitle: 'Premium Brand X',
    description: 'A cinematic journey through innovation and design excellence.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80'
  },
  {
    id: 2,
    title: 'Fashion Collection Launch',
    subtitle: 'Haute Couture',
    description: 'Editorial elegance meets motion picture artistry.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=80'
  },
  {
    id: 3,
    title: 'Tech Innovation Story',
    subtitle: 'Future Forward',
    description: 'Showcasing breakthrough technology through compelling visuals.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&q=80'
  }
];

export function WorkShowcase() {
  return (
    <section id="work" className="bg-black">
      {projects.map((project, index) => (
        <ProjectBlock key={project.id} project={project} reverse={index % 2 !== 0} />
      ))}
    </section>
  );
}

function ProjectBlock({ project, reverse }: { project: Project; reverse: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(err => {
          console.log('Work showcase video play failed:', err);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-screen ${reverse ? 'lg:grid-flow-dense' : ''}`}>
      {/* Content Side */}
      <div className={`bg-[#EEEEE8] flex items-center px-6 lg:px-16 py-20 ${reverse ? 'lg:col-start-2' : ''}`}>
        <div className="max-w-xl">
          <p 
            className="text-[#BC271C] mb-2 tracking-wider uppercase"
            style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.75rem' }}
          >
            {project.subtitle}
          </p>
          <h3 
            className="text-black mb-6 tracking-wider uppercase"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              lineHeight: '1.2'
            }}
          >
            {project.title}
          </h3>
          <p className="text-black/70 mb-8 leading-relaxed" style={{ fontSize: '1.125rem' }}>
            {project.description}
          </p>
          <button 
            className="inline-block border-2 border-black text-black px-8 py-3 hover:bg-black hover:text-[#EEEEE8] transition-colors tracking-wider uppercase"
            style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
          >
            View Project
          </button>
        </div>
      </div>

      {/* Video Side */}
      <div 
        className={`relative bg-black overflow-hidden ${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          poster={project.thumbnail}
          preload="none"
          onError={(e) => console.log('Showcase video error:', e.type)}
        >
          <source src={project.videoUrl} type="video/mp4" />
        </video>

        {/* Play Overlay */}
        {!isPlaying && (
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors"
          >
            <div className="w-20 h-20 flex items-center justify-center bg-[#BC271C] rounded-full">
              <Play size={32} className="text-white ml-1" />
            </div>
          </button>
        )}

        {/* Controls */}
        {isPlaying && (
          <div 
            className={`absolute bottom-8 left-8 transition-opacity duration-300 ${
              showControls ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <button
              onClick={() => setIsPlaying(false)}
              className="w-12 h-12 flex items-center justify-center bg-white/90 text-black hover:bg-[#BC271C] hover:text-white transition-colors"
              aria-label="Pause"
            >
              <Pause size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}