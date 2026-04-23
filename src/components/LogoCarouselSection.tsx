const logoModules = import.meta.glob(
  '../assets/logos/*.{png,jpg,jpeg,svg,webp}',
  { eager: true, query: '?url', import: 'default' }
);

function unwrapUrl(mod: unknown): string {
  if (typeof mod === 'string') return mod;
  if (mod && typeof mod === 'object' && 'default' in mod) {
    const d = (mod as { default: unknown }).default;
    if (typeof d === 'string') return d;
  }
  return '';
}

function getLogoUrls(): string[] {
  return Object.entries(logoModules as Record<string, unknown>)
    .map(([path, mod]) => ({ path, url: unwrapUrl(mod) }))
    .filter((x) => x.url.length > 0)
    .sort((a, b) => a.path.localeCompare(b.path))
    .map((x) => x.url);
}

export function LogoCarouselSection() {
  const logos = getLogoUrls();

  if (logos.length === 0) {
    return null;
  }

  const track = [...logos, ...logos];
  const durationSec = Math.max(24, logos.length * 4);

  return (
    <section
      className="relative border-y border-black/[0.06] bg-[#EEEEE8] py-14 overflow-hidden"
      aria-label="Brands we work with"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-12 mb-8">
        <p
          className="text-center text-black/50 tracking-[0.25em] uppercase text-xs"
          style={{ fontFamily: 'Lemon Milk, sans-serif' }}
        >
          Trusted by leading brands
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex w-max items-center gap-[6.5rem] md:gap-[10.14rem] px-8 logo-marquee-track"
          style={{
            animation: `logoMarquee ${durationSec}s linear infinite`,
          }}
        >
          {track.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="flex h-[7.69rem] md:h-[8.79rem] w-[17.58rem] md:w-[21.97rem] shrink-0 items-center justify-center opacity-100 transition-opacity duration-300"
            >
              <img
                src={src}
                alt=""
                className="max-h-full max-w-full min-h-[3.38rem] min-w-[6.76rem] object-contain"
                loading="eager"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes logoMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .logo-marquee-track {
            animation: none !important;
            flex-wrap: wrap;
            justify-content: center;
            width: 100% !important;
            max-width: 72rem;
            margin: 0 auto;
            row-gap: 2rem;
            column-gap: 2.5rem;
            padding: 0 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
