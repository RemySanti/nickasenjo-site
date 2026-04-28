// Hero: full-bleed YouTube background (muted autoplay; sound opens on YouTube)
const HERO_YOUTUBE_ID = 'YUjmJMtXu3k';
const HERO_WATCH_URL = `https://www.youtube.com/watch?v=${HERO_YOUTUBE_ID}`;

function buildHeroEmbedSrc(): string {
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    loop: '1',
    playlist: HERO_YOUTUBE_ID,
    controls: '0',
    modestbranding: '1',
    playsinline: '1',
    rel: '0',
    showinfo: '0',
    iv_load_policy: '3',
    fs: '0',
    disablekb: '1',
  });
  return `https://www.youtube.com/embed/${HERO_YOUTUBE_ID}?${params.toString()}`;
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
      style={{ backgroundColor: 'transparent' }}
    >
      {/* YouTube background: scale to cover (16:9 inside viewport) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <iframe
          title="Nick Asenjo Films: hero reel"
          className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
          src={buildHeroEmbedSrc()}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Full watch on YouTube (browser autoplay rules require user gesture for unmuted HD) */}
      <div className="absolute bottom-8 right-8 pointer-events-auto">
        <a
          href={HERO_WATCH_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-3 text-white hover:bg-[#BC271C] transition-colors tracking-wider uppercase text-xs"
          style={{ fontFamily: 'Lemon Milk, sans-serif' }}
        >
          Watch in Full HD
        </a>
      </div>
    </section>
  );
}
