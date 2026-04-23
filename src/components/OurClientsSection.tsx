import { useState, useEffect, useRef } from 'react';

interface Project {
  title: string;
  logo: string;
  description: string;
  video: string;
  poster: string;
  isYouTube: boolean;
  caseStudyHash?: string;
  comingSoon?: boolean;
}

const projects: Project[] = [
  {
    title: 'Porsche',
    logo: 'PORSCHE',
    description: 'Captured the unveiling event with artistry and innovation. 2 films.',
    video: 'https://www.youtube.com/embed/X-VC2IacMZA',
    poster: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
    isYouTube: true
  },
  {
    title: 'Lehigh Valley Health',
    logo: 'LVH',
    description: 'Documentary storytelling for healthcare excellence. 3 films, 2 awards.',
    video: 'https://www.youtube.com/embed/xLzAh2RKy1I',
    poster: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80',
    isYouTube: true,
    caseStudyHash: 'lehigh-valley-health'
  },
  {
    title: 'Mack Trucks',
    logo: 'MACK',
    description: 'Industrial power meets cinematic vision. 4 films, 4K production.',
    video: 'https://www.youtube.com/embed/QeH2CoJOGMs',
    poster: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80',
    isYouTube: true
  },
  {
    title: 'Air Products',
    logo: 'AIR PRODUCTS',
    description: 'Corporate excellence with authentic storytelling. 5 films, global reach.',
    video: 'https://www.youtube.com/embed/LdR72LQDQq4',
    poster: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    isYouTube: true
  },
  {
    title: 'Musikfest',
    logo: 'MUSIKFEST',
    description: 'Energy and emotion captured live. 12 concerts, 50+ artists.',
    video: 'https://www.youtube.com/embed/upkK3C4azng',
    poster: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80',
    isYouTube: true
  },
  {
    title: 'Just Born Quality',
    logo: 'JUST BORN',
    description: 'Sweet success with brand storytelling. 3 campaigns, nationwide impact.',
    video: 'https://www.youtube.com/embed/Qi4iSeEZegk',
    poster: 'https://images.unsplash.com/photo-1556740772-1a741367b93e?w=1200&q=80',
    isYouTube: true
  }
];

function getYouTubeId(embedUrl: string) {
  const match = embedUrl.match(/youtube\.com\/embed\/([^?&/]+)/);
  return match ? match[1] : null;
}

function getWatchUrl(project: Project) {
  if (project.isYouTube) {
    const videoId = getYouTubeId(project.video);
    if (videoId) {
      return `https://www.youtube.com/watch?v=${videoId}`;
    }
  }

  return project.video || '#';
}

function getProjectThumbnail(project: Project) {
  if (project.isYouTube) {
    const videoId = getYouTubeId(project.video);
    if (videoId) {
      return `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
    }
  }

  return project.poster;
}

function getResponsiveTitleStyle(title: string): React.CSSProperties {
  const isLongTitle = title.length > 45;
  const isVeryLongTitle = title.length > 70;

  return {
    fontFamily: 'serif',
    fontStyle: 'italic',
    fontWeight: '300',
    fontSize: isVeryLongTitle
      ? 'clamp(1.15rem, 1.8vw, 1.7rem)'
      : isLongTitle
        ? 'clamp(1.25rem, 2.2vw, 2rem)'
        : 'clamp(1.4rem, 2.8vw, 2.5rem)',
    lineHeight: 1.15,
    maxWidth: '95%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: isVeryLongTitle ? 4 : 3,
    WebkitBoxOrient: 'vertical',
    textShadow: '0 2px 8px rgba(0, 0, 0, 0.45)'
  };
}

function getResponsiveDescriptionStyle(): React.CSSProperties {
  return {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    lineHeight: 1.35,
    textShadow: '0 1px 6px rgba(0, 0, 0, 0.35)'
  };
}

function getTitleLineClampStyle(lines: number): React.CSSProperties {
  return {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: lines,
    WebkitBoxOrient: 'vertical'
  };
}

export function OurClientsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [youtubeTitles, setYoutubeTitles] = useState<Record<number, string>>({});
  const sectionRef = useRef<HTMLElement>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && activeIndex < projects.length - 1) {
      setActiveIndex(activeIndex + 1);
      setIsVideoPlaying(null);
    }
    if (isRightSwipe && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      setIsVideoPlaying(null);
    }
  };

  const toggleVideo = (index: number) => {
    setIsVideoPlaying(isVideoPlaying === index ? null : index);
  };

  const getMatchedDescription = (project: Project, index: number) => {
    if (project.comingSoon) return project.description;

    const fetchedTitle = youtubeTitles[index];
    if (!fetchedTitle) return project.description;

    const parts = fetchedTitle
      .split('|')
      .map((part) => part.trim())
      .filter(Boolean);

    if (parts.length > 1) {
      return parts.slice(1).join(' | ');
    }

    // Avoid repeating the same line as the headline when oEmbed title has no subtitle segment
    return project.description;
  };

  useEffect(() => {
    let isMounted = true;

    const loadYouTubeTitles = async () => {
      const titleEntries = await Promise.all(
        projects.map(async (project, index) => {
          if (!project.isYouTube || !project.video) {
            return [index, project.title] as const;
          }

          const videoId = getYouTubeId(project.video);
          if (!videoId) {
            return [index, project.title] as const;
          }

          try {
            const oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(`https://www.youtube.com/watch?v=${videoId}`)}&format=json`;
            const response = await fetch(oembedUrl);
            if (!response.ok) {
              return [index, project.title] as const;
            }

            const data = await response.json() as { title?: string };
            return [index, data.title?.trim() || project.title] as const;
          } catch {
            return [index, project.title] as const;
          }
        })
      );

      if (!isMounted) return;
      setYoutubeTitles(Object.fromEntries(titleEntries));
    };

    loadYouTubeTitles();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const handleScroll = () => {
      const rect = currentRef.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;

      // Calculate scroll progress through the section
      let progress = 0;

      if (sectionTop <= windowHeight && sectionBottom >= 0) {
        // Section is in viewport
        if (sectionTop > 0) {
          // Section entering from bottom
          progress = Math.max(0, (windowHeight - sectionTop) / (windowHeight * 0.5));
        } else if (sectionBottom < windowHeight) {
          // Section exiting from top
          progress = Math.max(0, sectionBottom / (windowHeight * 0.5));
        } else {
          // Section fully visible
          progress = 1;
        }
      }

      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Interpolate between white and black
  const backgroundColor = `rgb(${Math.round(255 * (1 - scrollProgress))}, ${Math.round(255 * (1 - scrollProgress))}, ${Math.round(255 * (1 - scrollProgress))})`;
  const textColor = scrollProgress > 0.5 ? 'white' : 'black';

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 lg:px-12 transition-colors duration-200 relative"
      style={{ backgroundColor }}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header - Porsche Style */}
        <div className="text-center mb-16">
          <h2 
            className="mb-8 tracking-tight transition-colors duration-200"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '700',
              letterSpacing: '-0.02em',
              color: textColor
            }}
          >
            Your video journey starts now.
          </h2>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            {/* Carousel Container */}
            <div 
              className="overflow-visible px-6"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ 
                  transform: `translateX(calc(-${activeIndex * 100}%))`
                }}
              >
                {projects.map((project, index) => {
                  const isActive = index === activeIndex;
                  const watchUrl = getWatchUrl(project);
                  const hasPlayableVideo = Boolean(project.video && !project.comingSoon);
                  const thumbnail = getProjectThumbnail(project);
                  const featuredTitle = youtubeTitles[index] || project.title;
                  const matchedDescription = getMatchedDescription(project, index);

                  return (
                    <div 
                      key={index}
                      className={`flex-shrink-0 transition-all duration-500 ${
                        isActive ? 'opacity-100' : 'opacity-50'
                      }`}
                      style={{ 
                        width: '85%',
                        marginLeft: index === 0 ? '7.5%' : '0',
                        marginRight: '15%'
                      }}
                    >
                      <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
                        {/* Video/Image Container with Overlay Content */}
                        <div className="relative aspect-[3/4]">
                          {isVideoPlaying === index && hasPlayableVideo && project.isYouTube && project.video ? (
                            <iframe
                              src={`${project.video}?autoplay=1&mute=1&loop=1&playlist=${project.video.split('/').pop()}`}
                              className="w-full h-full object-cover"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              style={{ border: 'none' }}
                            />
                          ) : isVideoPlaying === index && hasPlayableVideo && !project.isYouTube && project.video ? (
                            <video
                              src={project.video}
                              poster={project.poster}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover"
                              onClick={() => toggleVideo(index)}
                            />
                          ) : (
                            <>
                              <img
                                src={thumbnail}
                                alt={project.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const videoId = getYouTubeId(project.video);
                                  if (!videoId) return;
                                  const img = e.currentTarget;
                                  if (img.src.includes('maxresdefault.jpg')) {
                                    img.src = `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`;
                                  } else if (img.src.includes('sddefault.jpg')) {
                                    img.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
                                  }
                                }}
                                onClick={() => {
                                  if (hasPlayableVideo) {
                                    toggleVideo(index);
                                  }
                                }}
                              />
                              {project.comingSoon && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                                  <span 
                                    className="text-white tracking-wider text-2xl"
                                    style={{ fontFamily: 'Lemon Milk, sans-serif' }}
                                  >
                                    COMING SOON
                                  </span>
                                </div>
                              )}
                            </>
                          )}
                          
                          {/* Gradient Overlay for text readability */}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
                          
                          {/* Play/Pause Overlay - Only show when not playing */}
                          {isVideoPlaying !== index && hasPlayableVideo && (
                            <button
                              type="button"
                              className="absolute inset-0 flex items-center justify-center bg-black/10 cursor-pointer group"
                              onClick={() => toggleVideo(index)}
                              aria-label={`Play featured video: ${youtubeTitles[index] || project.title}`}
                            >
                              {/* Outer Pulsing Ring */}
                              <div 
                                className="absolute w-24 h-24 rounded-full animate-pulse"
                                style={{
                                  background: 'radial-gradient(circle, rgba(188, 39, 28, 0.3) 0%, rgba(188, 39, 28, 0) 70%)',
                                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                                }}
                              />
                              
                              {/* Main Play Button Container */}
                              <div className="relative w-20 h-20 flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-all duration-300">
                                {/* Gradient Border Ring */}
                                <div 
                                  className="absolute inset-0 rounded-full"
                                  style={{
                                    background: 'linear-gradient(135deg, #BC271C 0%, #FF4436 50%, #BC271C 100%)',
                                    padding: '2px'
                                  }}
                                >
                                  <div 
                                    className="w-full h-full rounded-full"
                                    style={{
                                      background: 'rgba(0, 0, 0, 0.4)',
                                      backdropFilter: 'blur(10px)'
                                    }}
                                  />
                                </div>
                                
                                {/* Inner Glass Circle */}
                                <div 
                                  className="relative w-16 h-16 rounded-full flex items-center justify-center"
                                  style={{
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
                                    backdropFilter: 'blur(20px)',
                                    boxShadow: '0 8px 32px rgba(188, 39, 28, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.2)'
                                  }}
                                >
                                  {/* Play Icon with Gradient */}
                                  <svg 
                                    className="w-7 h-7 ml-1 relative z-10" 
                                    viewBox="0 0 24 24"
                                    style={{
                                      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
                                    }}
                                  >
                                    <defs>
                                      <linearGradient id={`playGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#EEEEEE', stopOpacity: 0.9 }} />
                                      </linearGradient>
                                    </defs>
                                    <path 
                                      d="M8 5v14l11-7z" 
                                      fill={`url(#playGradient-${index})`}
                                    />
                                  </svg>
                                  
                                  {/* Shine Effect */}
                                  <div 
                                    className="absolute inset-0 rounded-full opacity-40"
                                    style={{
                                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%)'
                                    }}
                                  />
                                </div>
                              </div>
                              
                              {/* Hover Glow Effect */}
                              <div 
                                className="absolute w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                  background: 'radial-gradient(circle, rgba(188, 39, 28, 0.4) 0%, transparent 70%)',
                                  filter: 'blur(20px)'
                                }}
                              />
                            </button>
                          )}

                          {/* Mobile Featured Title */}
                          <div className="absolute top-4 left-4 right-4">
                            <div className="rounded-xl border border-white/20 bg-black/35 backdrop-blur-md px-3 py-2">
                              <p
                                className="text-white tracking-tight"
                                style={{
                                  fontFamily: 'serif',
                                  fontStyle: 'italic',
                                  fontWeight: '400',
                                  fontSize: 'clamp(1.05rem, 4.2vw, 1.35rem)',
                                  lineHeight: 1.2,
                                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                                  ...getTitleLineClampStyle(3)
                                }}
                              >
                                {featuredTitle}
                              </p>
                            </div>
                          </div>

                          {/* Content Overlay at Bottom */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                            <p className="text-white/90 leading-relaxed text-sm">
                              {matchedDescription}
                            </p>
                            
                            <p className="text-white/60 text-xs tracking-wider" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>
                              FROM $5,000
                            </p>

                            {/* Buttons on Card */}
                            <div className="flex gap-2 pt-1">
                              {/* Primary Button - View Project */}
                              <a
                                href={watchUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex-1 bg-white text-black py-2.5 px-4 rounded-md hover:bg-white/95 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center ${!hasPlayableVideo ? 'pointer-events-none opacity-60' : ''}`}
                                aria-label={`Watch featured video for ${project.title}`}
                              >
                                <span 
                                  className="tracking-wider text-xs"
                                  style={{ 
                                    fontFamily: 'Lemon Milk, sans-serif'
                                  }}
                                >
                                  WATCH
                                </span>
                              </a>

                              {/* Secondary Button - Inquire */}
                              <a 
                                href="#contact"
                                className="flex-1 py-2.5 px-4 rounded-md border border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] backdrop-blur-sm flex items-center justify-center"
                                style={{
                                  background: 'rgba(255, 255, 255, 0.05)'
                                }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  window.location.hash = 'contact';
                                }}
                              >
                                <span 
                                  className="tracking-wider text-xs"
                                  style={{ 
                                    fontFamily: 'Lemon Milk, sans-serif',
                                    background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #ffffff 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                  }}
                                >
                                  INQUIRE
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsVideoPlaying(null);
                }}
                className={`transition-all duration-300 rounded-full`}
                style={{
                  width: index === activeIndex ? '32px' : '8px',
                  height: '8px',
                  backgroundColor: index === activeIndex 
                    ? '#BC271C' 
                    : scrollProgress > 0.5 
                      ? 'rgba(255, 255, 255, 0.3)' 
                      : 'rgba(0, 0, 0, 0.3)'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Pause/Play Button (like Porsche) */}
          <div className="flex items-center justify-center mt-6">
            <button 
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={() => setIsVideoPlaying(isVideoPlaying === null ? activeIndex : null)}
              aria-label={isVideoPlaying === null ? 'Play video' : 'Pause video'}
              style={{
                color: scrollProgress > 0.5 ? 'white' : 'black'
              }}
            >
              {isVideoPlaying === null ? (
                <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Desktop grid: min-h-0 prevents aspect-ratio + min-height from blowing past column width (overlap bug) */}
        <div className="isolate hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-12 items-stretch">
          {projects.map((project, index) => {
            const watchUrl = getWatchUrl(project);
            const hasPlayableVideo = Boolean(project.video && !project.comingSoon);
            const featuredTitle = youtubeTitles[index] || project.title;
            const matchedDescription = getMatchedDescription(project, index);
            return (
            <div
              key={index}
              className={`relative min-h-0 min-w-0 w-full max-w-full overflow-hidden cursor-pointer transition-[opacity,box-shadow,ring-color] duration-300 ease-out rounded-lg aspect-[4/3] lg:min-h-[22rem] xl:min-h-[24rem] ${
                activeIndex === index
                  ? 'z-10 opacity-100 shadow-xl ring-1 ring-white/30'
                  : 'opacity-80 hover:opacity-100'
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(0)}
            >
              {/* Poster Image */}
              <img
                src={getProjectThumbnail(project)}
                alt={project.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                  activeIndex === index ? 'opacity-0' : 'opacity-100'
                }`}
                onError={(e) => {
                  const videoId = getYouTubeId(project.video);
                  if (!videoId) return;
                  const img = e.currentTarget;
                  if (img.src.includes('maxresdefault.jpg')) {
                    img.src = `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`;
                  } else if (img.src.includes('sddefault.jpg')) {
                    img.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
                  }
                }}
              />

              {/* Video - YouTube iframe or regular video */}
              {activeIndex === index && project.isYouTube && hasPlayableVideo && project.video ? (
                <iframe
                  src={`${project.video}?autoplay=1&mute=1&loop=1&playlist=${project.video.split('/').pop()}`}
                  className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-300"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ border: 'none' }}
                />
              ) : activeIndex === index && hasPlayableVideo && project.video ? (
                <video
                  ref={(el) => {
                    if (el) {
                      if (activeIndex === index) {
                        el.play().catch(() => {
                          // Handle autoplay restrictions
                        });
                      } else {
                        el.pause();
                        el.currentTime = 0;
                      }
                    }
                  }}
                  src={project.video}
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-300"
                />
              ) : null}

              {/* Coming Soon Overlay */}
              {project.comingSoon && activeIndex === index && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-20">
                  <span 
                    className="text-white tracking-wider text-3xl"
                    style={{ fontFamily: 'Lemon Milk, sans-serif' }}
                  >
                    COMING SOON
                  </span>
                </div>
              )}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 lg:p-6 z-10">
                {/* Title at top */}
                <div className="pr-2">
                  <h3 
                    className="text-white tracking-wide"
                    style={getResponsiveTitleStyle(featuredTitle)}
                  >
                    {featuredTitle}
                  </h3>
                </div>

                {/* Bottom content */}
                <div className="space-y-2 lg:space-y-3">
                  <div className="text-white space-y-2">
                    <p className="text-xs lg:text-sm opacity-90" style={getResponsiveDescriptionStyle()}>
                      {matchedDescription}
                    </p>
                    <p 
                      className="text-[10px] lg:text-xs tracking-wider opacity-80"
                      style={{ fontFamily: 'Lemon Milk, sans-serif' }}
                    >
                      FROM $5,000
                    </p>
                  </div>
                  
                  {/* Desktop Buttons - Always visible */}
                  <div className="flex gap-2 opacity-100">
                    <a 
                      href={watchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 min-w-0 bg-white text-black py-2 px-3 lg:px-4 rounded-md hover:bg-white/95 transition-colors duration-300 flex items-center justify-center ${!hasPlayableVideo ? 'pointer-events-none opacity-60' : ''}`}
                      aria-label={`Watch featured video for ${project.title}`}
                    >
                      <span 
                        className="tracking-wider text-[10px] lg:text-xs whitespace-nowrap"
                        style={{ fontFamily: 'Lemon Milk, sans-serif' }}
                      >
                        WATCH
                      </span>
                    </a>
                    
                    <a 
                      href="#contact"
                      className="min-w-[82px] lg:min-w-[96px] py-2 px-3 lg:px-4 rounded-md border border-white/40 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm flex items-center justify-center"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)'
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.hash = 'contact';
                      }}
                      aria-label={`Inquire about ${project.title}`}
                    >
                      <span 
                        className="tracking-wider text-[10px] lg:text-xs whitespace-nowrap"
                        style={{ 
                          fontFamily: 'Lemon Milk, sans-serif',
                          background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #ffffff 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        INQUIRE
                      </span>
                    </a>
                  </div>
                  {project.caseStudyHash && (
                    <a
                      href={`#${project.caseStudyHash}`}
                      className="inline-block pt-1 text-[10px] lg:text-xs text-white/80 hover:text-white transition-colors tracking-wider"
                      style={{ fontFamily: 'Lemon Milk, sans-serif' }}
                    >
                      VIEW CASE STUDY
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}