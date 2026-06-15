import { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, LayoutGrid, Play, Plus } from 'lucide-react';
import type { OurClientsMobileLayoutId } from '@/config/ourClientsMobileLayouts';

export type MobileProject = {
  title: string;
  logo: string;
  description: string;
  video: string;
  poster: string;
  isYouTube: boolean;
  comingSoon?: boolean;
  thumbnailStillUrl?: string;
};

export type OurClientsMobileSectionProps = {
  layoutId: OurClientsMobileLayoutId;
  projects: MobileProject[];
  youtubeTitles: Record<number, string>;
  scrollProgress: number;
  textColor: string;
  getThumbnail: (project: MobileProject) => string;
  getDescription: (project: MobileProject, index: number) => string;
  onOpenVideo: (project: MobileProject, index: number) => void;
};

function WatchButton({
  onClick,
  compact,
}: {
  onClick: () => void;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-md bg-white text-black transition-colors hover:bg-white/95 ${compact ? 'px-3 py-2 text-[10px]' : 'flex-1 py-2.5 px-4 text-xs'}`}
      style={{ fontFamily: 'Lemon Milk, sans-serif', letterSpacing: '0.08em' }}
    >
      WATCH
    </button>
  );
}

function InquireLink({ compact }: { compact?: boolean }) {
  return (
    <a
      href="#contact"
      className={`rounded-md border border-white/40 text-center transition-colors hover:bg-white/10 ${compact ? 'px-3 py-2 text-[10px]' : 'flex-1 py-2.5 px-4 text-xs'}`}
      style={{
        fontFamily: 'Lemon Milk, sans-serif',
        letterSpacing: '0.08em',
        background: 'rgba(255, 255, 255, 0.05)',
      }}
      onClick={(e) => {
        e.preventDefault();
        window.location.hash = 'contact';
      }}
    >
      INQUIRE
    </a>
  );
}

function ProjectMedia({
  project,
  thumbnail,
  className = '',
}: {
  project: MobileProject;
  thumbnail: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-black ${className}`}>
      <img src={thumbnail} alt={project.title} className="h-full w-full object-cover" loading="lazy" />
      {project.comingSoon ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <span className="text-white tracking-wider text-sm" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>
            COMING SOON
          </span>
        </div>
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/75" />
    </div>
  );
}

function PeekCarouselLayout(props: OurClientsMobileSectionProps) {
  const { projects, youtubeTitles, scrollProgress, getThumbnail, getDescription, onOpenVideo } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const minSwipeDistance = 50;

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance && activeIndex < projects.length - 1) setActiveIndex(activeIndex + 1);
    if (distance < -minSwipeDistance && activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="overflow-visible px-6"
        onTouchStart={(e) => {
          setTouchEnd(0);
          setTouchStart(e.targetTouches[0].clientX);
        }}
        onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(calc(-${activeIndex * 100}%))` }}
        >
          {projects.map((project, index) => {
            const thumbnail = getThumbnail(project);
            const featuredTitle = youtubeTitles[index] || project.title;
            const matchedDescription = getDescription(project, index);
            const hasPlayableVideo = Boolean(project.video && !project.comingSoon);

            return (
              <div
                key={index}
                className={`flex-shrink-0 transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'opacity-50'}`}
                style={{ width: '85%', marginLeft: index === 0 ? '7.5%' : 0, marginRight: '15%' }}
              >
                <div className="overflow-hidden rounded-2xl bg-black shadow-2xl">
                  <div className="relative aspect-[3/4]">
                    <ProjectMedia project={project} thumbnail={thumbnail} className="absolute inset-0" />
                    {hasPlayableVideo ? (
                      <button
                        type="button"
                        className="absolute inset-0 flex items-center justify-center"
                        onClick={() => onOpenVideo(project, index)}
                        aria-label={`Play ${featuredTitle}`}
                      >
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/45 backdrop-blur-sm">
                          <Play className="ml-1 h-7 w-7 text-white" fill="white" />
                        </span>
                      </button>
                    ) : null}
                    <div className="absolute bottom-0 left-0 right-0 space-y-3 p-6">
                      <p className="text-white text-sm font-light italic" style={{ fontFamily: 'serif' }}>
                        {featuredTitle}
                      </p>
                      <p className="text-white/90 text-sm leading-relaxed">{matchedDescription}</p>
                      <div className="flex gap-2">
                        <WatchButton onClick={() => onOpenVideo(project, index)} />
                        <InquireLink />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="rounded-full transition-all duration-300"
            style={{
              width: index === activeIndex ? 32 : 8,
              height: 8,
              backgroundColor:
                index === activeIndex ? '#BC271C' : scrollProgress > 0.5 ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function SnapFullBleedLayout(props: OurClientsMobileSectionProps) {
  const { projects, youtubeTitles, getThumbnail, getDescription, onOpenVideo } = props;
  return (
    <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 scrollbar-none">
      {projects.map((project, index) => (
        <button
          key={index}
          type="button"
          className="relative w-[88vw] flex-shrink-0 snap-center overflow-hidden rounded-xl"
          onClick={() => onOpenVideo(project, index)}
        >
          <ProjectMedia project={project} thumbnail={getThumbnail(project)} className="aspect-[3/4]" />
          <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
            <p className="text-white text-lg italic" style={{ fontFamily: 'serif' }}>
              {youtubeTitles[index] || project.title}
            </p>
            <p className="mt-2 line-clamp-2 text-sm text-white/85">{getDescription(project, index)}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

function VerticalSnapLayout(props: OurClientsMobileSectionProps) {
  const { projects, youtubeTitles, getThumbnail, getDescription, onOpenVideo } = props;
  return (
    <div className="-mx-6 flex max-h-[85vh] flex-col gap-4 overflow-y-auto px-6 pb-2 snap-y snap-mandatory scrollbar-none">
      {projects.map((project, index) => (
        <button
          key={index}
          type="button"
          className="relative min-h-[78vh] flex-shrink-0 snap-center overflow-hidden rounded-2xl"
          onClick={() => onOpenVideo(project, index)}
        >
          <ProjectMedia project={project} thumbnail={getThumbnail(project)} className="h-full min-h-[78vh]" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
            <p className="text-white text-xl italic" style={{ fontFamily: 'serif' }}>
              {youtubeTitles[index] || project.title}
            </p>
            <p className="mt-2 text-sm text-white/85">{getDescription(project, index)}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

function CreateYourBentoBoxCta() {
  return (
    <a
      href="#contact"
      className="group relative flex aspect-square flex-col justify-between overflow-hidden rounded-lg border border-[#BC271C]/25 bg-gradient-to-br from-[#BC271C]/12 via-black to-black p-4 text-left transition-transform active:scale-[0.98]"
      onClick={(e) => {
        e.preventDefault();
        window.location.hash = 'contact';
      }}
    >
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-40 blur-2xl"
        style={{ background: 'radial-gradient(circle, #BC271C 0%, transparent 70%)' }}
        aria-hidden
      />
      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/10">
        <Plus className="h-5 w-5 text-[#BC271C]" strokeWidth={2.5} aria-hidden />
      </div>
      <div className="relative z-10 space-y-2">
        <p
          className="text-[0.65rem] tracking-[0.18em] text-white/55 uppercase"
          style={{ fontFamily: 'Lemon Milk, sans-serif' }}
        >
          Your story
        </p>
        <p className="text-sm font-medium leading-snug text-white">Create your own</p>
        <p className="text-xs leading-relaxed text-white/70">
          Slot your brand next to ours. Start a film that converts.
        </p>
        <span
          className="inline-flex items-center gap-1 text-[0.65rem] tracking-wider text-[#BC271C] uppercase transition-colors group-hover:text-white"
          style={{ fontFamily: 'Lemon Milk, sans-serif' }}
        >
          <LayoutGrid className="h-3 w-3" aria-hidden />
          Build yours
        </span>
      </div>
    </a>
  );
}

function BentoGridLayout(props: OurClientsMobileSectionProps) {
  const { projects, youtubeTitles, getThumbnail, onOpenVideo } = props;
  return (
    <div className="grid grid-cols-2 gap-3">
      {projects.map((project, index) => (
        <button
          key={index}
          type="button"
          className={`relative overflow-hidden rounded-lg text-left active:scale-[0.98] transition-transform ${index === 0 ? 'col-span-2 aspect-[16/10]' : 'aspect-square'}`}
          onClick={() => onOpenVideo(project, index)}
        >
          <ProjectMedia project={project} thumbnail={getThumbnail(project)} className="h-full" />
          <p className="absolute bottom-2 left-2 right-2 text-xs text-white drop-shadow-md line-clamp-2">
            {youtubeTitles[index] || project.title}
          </p>
        </button>
      ))}
      <CreateYourBentoBoxCta />
    </div>
  );
}

function ThumbnailStripLayout(props: OurClientsMobileSectionProps) {
  const { projects, youtubeTitles, getThumbnail, getDescription, onOpenVideo } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  return (
    <div className="space-y-4">
      <button
        type="button"
        className="relative w-full overflow-hidden rounded-2xl"
        onClick={() => onOpenVideo(active, activeIndex)}
      >
        <ProjectMedia project={active} thumbnail={getThumbnail(active)} className="aspect-[4/5]" />
        <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
          <p className="text-white text-lg italic" style={{ fontFamily: 'serif' }}>
            {youtubeTitles[activeIndex] || active.title}
          </p>
          <p className="mt-2 text-sm text-white/85">{getDescription(active, activeIndex)}</p>
        </div>
      </button>
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {projects.map((project, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-16 w-24 flex-shrink-0 overflow-hidden rounded-md border-2 transition-colors ${index === activeIndex ? 'border-[#BC271C]' : 'border-transparent opacity-70'}`}
          >
            <img src={getThumbnail(project)} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

function AccordionExpandLayout(props: OurClientsMobileSectionProps) {
  const { projects, youtubeTitles, getThumbnail, getDescription, onOpenVideo, textColor } = props;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-black/10 rounded-xl border border-black/10 bg-white/50 overflow-hidden">
      {projects.map((project, index) => {
        const open = openIndex === index;
        return (
          <div key={index}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
              onClick={() => setOpenIndex(open ? -1 : index)}
            >
              <span className="text-sm font-medium" style={{ color: textColor }}>
                {youtubeTitles[index] || project.title}
              </span>
              <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} style={{ color: textColor }} />
            </button>
            {open ? (
              <div className="px-4 pb-4">
                <button type="button" className="mb-3 w-full overflow-hidden rounded-lg" onClick={() => onOpenVideo(project, index)}>
                  <ProjectMedia project={project} thumbnail={getThumbnail(project)} className="aspect-video" />
                </button>
                <p className="mb-3 text-sm opacity-80" style={{ color: textColor }}>
                  {getDescription(project, index)}
                </p>
                <div className="flex gap-2">
                  <WatchButton compact onClick={() => onOpenVideo(project, index)} />
                  <InquireLink compact />
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function StackSwipeLayout(props: OurClientsMobileSectionProps) {
  const { projects, youtubeTitles, getThumbnail, getDescription, onOpenVideo } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative mx-auto h-[28rem] w-full max-w-sm">
      {projects.map((project, index) => {
        const offset = index - activeIndex;
        if (offset < 0 || offset > 2) return null;
        return (
          <button
            key={index}
            type="button"
            className="absolute inset-x-4 top-0 overflow-hidden rounded-2xl shadow-xl transition-all duration-300"
            style={{
              transform: `translateY(${offset * 14}px) scale(${1 - offset * 0.04})`,
              zIndex: 10 - offset,
              opacity: offset === 0 ? 1 : 0.85,
            }}
            onClick={() => onOpenVideo(project, index)}
          >
            <ProjectMedia project={project} thumbnail={getThumbnail(project)} className="aspect-[3/4]" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
              <p className="text-white text-sm italic" style={{ fontFamily: 'serif' }}>
                {youtubeTitles[index] || project.title}
              </p>
              <p className="mt-1 line-clamp-2 text-xs text-white/85">{getDescription(project, index)}</p>
            </div>
          </button>
        );
      })}
      <div className="absolute -bottom-2 left-0 right-0 flex justify-center gap-6">
        <button type="button" className="rounded-full border border-black/20 bg-white p-2" onClick={() => setActiveIndex((i) => Math.max(0, i - 1))} aria-label="Previous">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button type="button" className="rounded-full border border-black/20 bg-white p-2" onClick={() => setActiveIndex((i) => Math.min(projects.length - 1, i + 1))} aria-label="Next">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

function CoverFlowLayout(props: OurClientsMobileSectionProps) {
  const { projects, youtubeTitles, getThumbnail, onOpenVideo } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative h-[22rem] overflow-hidden">
      <div className="flex h-full items-center justify-center gap-2 px-2" style={{ perspective: '900px' }}>
        {projects.map((project, index) => {
          const d = index - activeIndex;
          const visible = Math.abs(d) <= 2;
          if (!visible) return null;
          return (
            <button
              key={index}
              type="button"
              className="h-[18rem] w-[42%] flex-shrink-0 overflow-hidden rounded-xl transition-all duration-400"
              style={{
                transform: `rotateY(${d * -22}deg) scale(${d === 0 ? 1 : 0.82}) translateZ(${d === 0 ? 0 : -40}px)`,
                opacity: d === 0 ? 1 : 0.55,
                zIndex: 10 - Math.abs(d),
              }}
              onClick={() => {
                setActiveIndex(index);
                onOpenVideo(project, index);
              }}
            >
              <ProjectMedia project={project} thumbnail={getThumbnail(project)} className="h-full" />
              {d === 0 ? (
                <p className="absolute bottom-3 left-3 right-3 text-center text-xs text-white line-clamp-2">
                  {youtubeTitles[index] || project.title}
                </p>
              ) : null}
            </button>
          );
        })}
      </div>
      <div className="mt-4 flex justify-center gap-1">
        {projects.map((_, i) => (
          <button key={i} type="button" className="h-1.5 rounded-full transition-all" style={{ width: i === activeIndex ? 20 : 6, backgroundColor: i === activeIndex ? '#BC271C' : 'rgba(0,0,0,0.2)' }} onClick={() => setActiveIndex(i)} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

function StoriesReelsLayout(props: OurClientsMobileSectionProps) {
  const { projects, youtubeTitles, getThumbnail, getDescription, onOpenVideo } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex];

  return (
    <div className="relative mx-auto aspect-[9/16] max-h-[80vh] w-full max-w-sm overflow-hidden rounded-2xl bg-black">
      <div className="absolute left-0 right-0 top-0 z-20 flex gap-1 p-3">
        {projects.map((_, i) => (
          <div key={i} className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/25">
            <div className="h-full bg-white transition-all" style={{ width: i < activeIndex ? '100%' : i === activeIndex ? '60%' : '0%' }} />
          </div>
        ))}
      </div>
      <button type="button" className="absolute inset-0 z-10" onClick={() => onOpenVideo(project, activeIndex)}>
        <ProjectMedia project={project} thumbnail={getThumbnail(project)} className="h-full" />
      </button>
      <button type="button" className="absolute left-0 top-0 z-20 h-full w-1/3" onClick={() => setActiveIndex((i) => Math.max(0, i - 1))} aria-label="Previous story" />
      <button type="button" className="absolute right-0 top-0 z-20 h-full w-1/3" onClick={() => setActiveIndex((i) => Math.min(projects.length - 1, i + 1))} aria-label="Next story" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 p-5 text-left">
        <p className="text-white text-lg italic" style={{ fontFamily: 'serif' }}>
          {youtubeTitles[activeIndex] || project.title}
        </p>
        <p className="mt-2 text-sm text-white/85 line-clamp-3">{getDescription(project, activeIndex)}</p>
      </div>
    </div>
  );
}

function MinimalListLayout(props: OurClientsMobileSectionProps) {
  const { projects, youtubeTitles, getThumbnail, getDescription, onOpenVideo, textColor } = props;

  return (
    <ul className="divide-y divide-black/10 rounded-xl border border-black/10 overflow-hidden bg-white/40">
      {projects.map((project, index) => (
        <li key={index}>
          <button
            type="button"
            className="flex w-full items-center gap-4 p-4 text-left active:bg-black/5"
            onClick={() => onOpenVideo(project, index)}
          >
            <img src={getThumbnail(project)} alt="" className="h-16 w-24 flex-shrink-0 rounded-md object-cover" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium" style={{ color: textColor }}>
                {youtubeTitles[index] || project.title}
              </p>
              <p className="mt-1 line-clamp-2 text-xs opacity-70" style={{ color: textColor }}>
                {getDescription(project, index)}
              </p>
            </div>
            <Play className="h-4 w-4 shrink-0 opacity-50" style={{ color: textColor }} />
          </button>
        </li>
      ))}
    </ul>
  );
}

const LAYOUT_RENDERERS: Record<
  OurClientsMobileLayoutId,
  (props: OurClientsMobileSectionProps) => JSX.Element
> = {
  'peek-carousel': PeekCarouselLayout,
  'snap-full-bleed': SnapFullBleedLayout,
  'vertical-snap': VerticalSnapLayout,
  'bento-grid': BentoGridLayout,
  'thumbnail-strip': ThumbnailStripLayout,
  'accordion-expand': AccordionExpandLayout,
  'stack-swipe': StackSwipeLayout,
  'cover-flow': CoverFlowLayout,
  'stories-reels': StoriesReelsLayout,
  'minimal-list': MinimalListLayout,
};

export function OurClientsMobileSection(props: OurClientsMobileSectionProps) {
  const Renderer = LAYOUT_RENDERERS[props.layoutId] ?? PeekCarouselLayout;
  return <Renderer {...props} />;
}
