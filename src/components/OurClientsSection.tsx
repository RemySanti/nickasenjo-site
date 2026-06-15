import { useState, useEffect, useRef, useMemo } from 'react';
import { VideoViewerModal, type VideoViewerData } from './VideoViewerModal';
import { DynamicFrameLayout, type Frame } from '@/components/ui/dynamic-frame-layout';
import { OurClientsMobileSection } from '@/components/our-clients/OurClientsMobileSection';
import { useOurClientsMobileLayout } from '@/hooks/useOurClientsMobileLayout';

import videosThumbSaquon from '../assets/Videos-Section/1 - Saquon Video.png?url';
import videosThumbMercedes from '../assets/Videos-Section/2 - Mercedez Video.png?url';
import videosThumbLgIzz from '../assets/Videos-Section/5 - LG Izz.png?url';
import videosThumbBadBunny from '../assets/Videos-Section/6 - Bad Bunny.png?url';

interface Project {
  title: string;
  logo: string;
  description: string;
  video: string;
  poster: string;
  isYouTube: boolean;
  comingSoon?: boolean;
  /** Seconds into the YouTube video for embed + modal (`start` param). */
  thumbnailStartSeconds?: number;
  /** Optional static card image (e.g. screenshot at `thumbnailStartSeconds` in `public/`). YouTube URLs cannot target an exact frame. */
  thumbnailStillUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Porsche',
    logo: 'PORSCHE',
    description: 'Captured the unveiling event with artistry and innovation. 2 films.',
    video: 'https://www.youtube.com/embed/X-VC2IacMZA',
    poster: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
    isYouTube: true,
    thumbnailStillUrl: videosThumbSaquon,
  },
  {
    title: 'Lehigh Valley Health',
    logo: 'LVH',
    description: 'Documentary storytelling for healthcare excellence. 3 films, 2 awards.',
    video: 'https://www.youtube.com/embed/xLzAh2RKy1I',
    poster: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80',
    isYouTube: true,
    thumbnailStillUrl: videosThumbMercedes,
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
    isYouTube: true,
    thumbnailStillUrl: videosThumbLgIzz,
  },
  {
    title: 'Just Born Quality',
    logo: 'JUST BORN',
    description: 'Sweet success with brand storytelling. 3 campaigns, nationwide impact.',
    video: 'https://www.youtube.com/embed/Qi4iSeEZegk',
    poster: 'https://images.unsplash.com/photo-1556740772-1a741367b93e?w=1200&q=80',
    isYouTube: true,
    thumbnailStillUrl: videosThumbBadBunny,
  }
];

function getYouTubeId(embedUrl: string) {
  const match = embedUrl.match(/youtube\.com\/embed\/([^?&/]+)/);
  return match ? match[1] : null;
}

/** YouTube card / modal iframe with autoplay loop + optional start time. */
function buildYouTubeEmbedSrc(embedUrl: string, videoId: string, startSeconds?: number) {
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    loop: '1',
    playlist: videoId,
    rel: '0',
  });
  const start = startSeconds != null ? Math.max(0, Math.floor(startSeconds)) : 0;
  if (start > 0) {
    params.set('start', String(start));
  }
  const join = embedUrl.includes('?') ? '&' : '?';
  return `${embedUrl}${join}${params.toString()}`;
}

function getProjectThumbnail(project: Project) {
  if (project.thumbnailStillUrl) {
    return project.thumbnailStillUrl;
  }
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

function buildClientFrames(projectList: Project[]): Frame[] {
  return projectList.map((project, index) => {
    const col = index % 3;
    const row = Math.floor(index / 3);

    return {
      id: index + 1,
      video: project.video,
      poster: getProjectThumbnail(project),
      startSeconds: project.thumbnailStartSeconds,
      defaultPos: { x: col * 4, y: row * 4, w: 4, h: 4 },
      mediaSize: 1.05,
      borderThickness: 0,
      borderSize: 100,
    };
  });
}

export function OurClientsSection() {
  const [hoveredFrameId, setHoveredFrameId] = useState<number | null>(null);
  const mobileLayoutId = useOurClientsMobileLayout();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [youtubeTitles, setYoutubeTitles] = useState<Record<number, string>>({});
  const [selectedVideo, setSelectedVideo] = useState<VideoViewerData | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const clientFrames = useMemo(() => buildClientFrames(projects), []);

  const openVideoViewer = (project: Project, index: number) => {
    const featuredTitle = youtubeTitles[index] || project.title;
    const matchedDescription = getMatchedDescription(project, index);
    setSelectedVideo({
      title: featuredTitle,
      subtitle: matchedDescription,
      category: 'Featured Work',
      videoUrl: project.video,
      startSeconds: project.thumbnailStartSeconds,
    });
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

        {/* Mobile layouts — chosen in Owner dashboard */}
        <div className="lg:hidden">
          <OurClientsMobileSection
            layoutId={mobileLayoutId}
            projects={projects}
            youtubeTitles={youtubeTitles}
            scrollProgress={scrollProgress}
            textColor={textColor}
            getThumbnail={getProjectThumbnail}
            getDescription={getMatchedDescription}
            onOpenVideo={openVideoViewer}
          />
        </div>

        {/* Desktop: dynamic frame grid */}
        <div className="hidden lg:block">
          <div className="h-[min(78vh,760px)] min-h-[520px] w-full">
            <DynamicFrameLayout
              frames={clientFrames}
              className="h-full w-full"
              gridRows={2}
              gridCols={3}
              hoverSize={6}
              gapSize={8}
              onHoverChange={(frame) => setHoveredFrameId(frame?.id ?? null)}
              onFrameClick={(frame) => {
                const index = frame.id - 1;
                const project = projects[index];
                if (project && project.video && !project.comingSoon) {
                  openVideoViewer(project, index);
                }
              }}
            />
          </div>

          <div
            className="mt-8 flex min-h-[5.5rem] flex-col items-center justify-center gap-3 text-center transition-colors duration-200"
            style={{ color: textColor }}
          >
            {(() => {
              const index = hoveredFrameId != null ? hoveredFrameId - 1 : 0;
              const project = projects[index];
              if (!project) return null;
              const featuredTitle = youtubeTitles[index] || project.title;
              const matchedDescription = getMatchedDescription(project, index);

              return (
                <>
                  <h3
                    className="tracking-tight"
                    style={{
                      fontFamily: 'serif',
                      fontStyle: 'italic',
                      fontWeight: 300,
                      fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                      lineHeight: 1.15,
                    }}
                  >
                    {featuredTitle}
                  </h3>
                  <p
                    className="max-w-2xl text-sm opacity-80 lg:text-base"
                    style={getResponsiveDescriptionStyle()}
                  >
                    {matchedDescription}
                  </p>
                  <div className="flex gap-3 pt-1">
                    <button
                      type="button"
                      className="rounded-md bg-[#BC271C] px-6 py-2.5 text-white transition-colors hover:bg-[#a02218]"
                      style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.75rem', letterSpacing: '0.08em' }}
                      onClick={() => openVideoViewer(project, index)}
                    >
                      WATCH
                    </button>
                    <a
                      href="#contact"
                      className="rounded-md border px-6 py-2.5 transition-colors hover:bg-black/5"
                      style={{
                        fontFamily: 'Lemon Milk, sans-serif',
                        fontSize: '0.75rem',
                        letterSpacing: '0.08em',
                        borderColor: scrollProgress > 0.5 ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.2)',
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.hash = 'contact';
                      }}
                    >
                      INQUIRE
                    </a>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </div>
      <VideoViewerModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </section>
  );
}