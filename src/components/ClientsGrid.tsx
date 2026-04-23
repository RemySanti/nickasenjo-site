'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function ClientsGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const projects = [
    {
      title: 'Commercial',
      description: 'Brand content with raw angles. 3 films, 52 brands.',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-luxury-car-driving-at-high-speed-in-a-city-1073-large.mp4',
      poster: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80'
    },
    {
      title: 'Documentary',
      description: 'Real stories with pure emotion. 7 films. 3 awards.',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-person-walking-through-a-forest-trail-34410-large.mp4',
      poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&q=80'
    },
    {
      title: 'Music Videos',
      description: 'Electric visuals with 4k storytelling and rich colors.',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-concert-crowd-509-large.mp4',
      poster: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80'
    },
    {
      title: 'Corporate',
      description: 'Luxury content with high-end direction, 8 films, up to 4k.',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-businessman-working-on-a-laptop-4064-large.mp4',
      poster: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80'
    },
    {
      title: 'Social Media',
      description: 'Sporty content for TikTok. 4 films. 5 series.',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-smartphone-recording-a-concert-509-large.mp4',
      poster: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80'
    },
    {
      title: 'Brand Films',
      description: 'Versatile SUV. 8 films, up to 6 seats.',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-studio-4091-large.mp4',
      poster: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&q=80'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.style.transition = 'background-color 0.8s ease';
          document.body.style.backgroundColor = '#000000';
        } else {
          document.body.style.backgroundColor = '#EEEEE8';
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      document.body.style.backgroundColor = '#EEEEE8';
    };
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (hoveredIndex === index) {
          video.play().catch(() => {
            // Handle autoplay restrictions
          });
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [hoveredIndex]);

  return (
    <section 
      id="clients" 
      ref={sectionRef}
      className="py-32 px-6 lg:px-12"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <h2 
          className="text-white mb-16 text-left"
          style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            lineHeight: '1.2'
          }}
        >
          Your film journey starts now.
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-out rounded-sm ${
                hoveredIndex === null
                  ? 'scale-100'
                  : hoveredIndex === index
                  ? 'md:scale-105 z-10'
                  : 'md:scale-[0.97] opacity-80'
              }`}
              style={{
                aspectRatio: '16/9',
                transformOrigin: 'center center'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Poster Image */}
              <img
                src={project.poster}
                alt={project.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-0' : 'opacity-100'
                }`}
              />

              {/* Video */}
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={project.video}
                loop
                muted
                playsInline
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-8">
                {/* Title at top */}
                <div>
                  <h3 
                    className="text-white tracking-wider"
                    style={{ 
                      fontFamily: 'serif',
                      fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                      fontStyle: 'italic',
                      fontWeight: '300'
                    }}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Bottom content */}
                <div className="flex items-end justify-between">
                  <div className="text-white space-y-1">
                    <p className="text-sm leading-relaxed max-w-xs opacity-90">
                      {project.description}
                    </p>
                    <p className="text-xs opacity-70">
                      From 5,000 EUR*
                    </p>
                  </div>
                  
                  <button 
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label={`View ${project.title} details`}
                  >
                    <ArrowRight size={20} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-white/40 text-xs text-center mt-8 max-w-4xl mx-auto">
          *Prices shown are suggested retail prices. Actual production costs may vary depending on project scope, complexity and timeline. Contact us for a detailed quote tailored to your specific needs.
        </p>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-white/70 mb-8 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Ready to create something extraordinary together?
          </p>
          <a 
            href="#contact"
            className="inline-block bg-[#BC271C] text-white px-10 py-4 hover:bg-[#9a1f16] transition-colors tracking-wider uppercase"
            style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
