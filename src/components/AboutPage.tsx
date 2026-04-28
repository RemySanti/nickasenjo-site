import { ImageWithFallback } from './figma/ImageWithFallback';
import nickImage from '../imports/2149066326-3.jpg';
import platformCarsImg from '../assets/Platform-cars.png';
import { Header } from './Header';
import { LogoCarouselSection } from './LogoCarouselSection';
import { Film, Award, Users, TrendingUp } from 'lucide-react';

export function AboutPage() {
  const blogPosts = [
    {
      title: "Why Video Production is Essential for Lehigh Valley Businesses in 2025",
      excerpt: "Discover how professional video production can transform your Allentown business and drive measurable results in today's digital landscape.",
      date: "November 15, 2024",
      readTime: "5 min read",
      slug: "blog-video-production-lehigh-valley-2025",
      category: "Industry Insights"
    },
    {
      title: "Corporate Video vs. Cinematic Brand Films: What's Right for Your Business?",
      excerpt: "Understanding the difference between traditional corporate videos and cinematic brand films can help you choose the right approach for your message.",
      date: "November 10, 2024",
      readTime: "6 min read",
      slug: "blog-corporate-vs-cinematic",
      category: "Production Tips"
    },
    {
      title: "How to Prepare for Your First Video Production Shoot in Allentown",
      excerpt: "A comprehensive guide to preparing for your video shoot, from concept development to day-of logistics in the Lehigh Valley.",
      date: "November 5, 2024",
      readTime: "7 min read",
      slug: "blog-prepare-video-shoot-allentown",
      category: "Client Guide"
    }
  ];

  return (
    <div className="min-h-screen bg-[#EEEEE8]">
      <Header currentPage="about" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 
                className="mb-8 tracking-wider uppercase"
                style={{ 
                  fontFamily: 'Lemon Milk, sans-serif',
                  background: 'linear-gradient(135deg, #BC271C 0%, #8B1810 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  lineHeight: '1.1'
                }}
              >
                Filmmaking as Art
              </h1>
              <p className="text-black/80 mb-6 leading-relaxed" style={{ fontSize: '1.25rem' }}>
                We don't just shoot video. We craft visual stories that move, inspire, and endure.
              </p>
              <p className="text-black/70 leading-relaxed">
                Based in the heart of Allentown, Pennsylvania, Nick Asenjo Films is a collective of 
                auteur filmmakers who approach every project as a work of art. We blur the line between 
                commercial and cinema, creating content that doesn't just sell; it resonates.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <ImageWithFallback
                src={nickImage}
                alt="Nick Asenjo Films behind the scenes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <LogoCarouselSection />

      {/* Our Story */}
      <section className="py-20 px-6 lg:px-12 bg-white/40">
        <div className="container mx-auto max-w-4xl">
          <h2 
            className="mb-12 tracking-wider uppercase text-center"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              background: 'linear-gradient(135deg, #BC271C 0%, #8B1810 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            Our Story
          </h2>
          <div className="space-y-6 text-black/80 leading-relaxed">
            <p style={{ fontSize: '1.125rem' }}>
              Nick Asenjo Films was born from a simple belief: that every brand, every story, 
              every moment deserves to be captured with the same care and artistry as a feature film.
            </p>
            <p style={{ fontSize: '1.125rem' }}>
              Founded in Allentown's vibrant creative district, we've spent years honing our craft 
              across documentaries, commercials, music videos, and brand films. Our approach is 
              unapologetically cinematic. We use the same tools, techniques, and storytelling principles 
              that define great cinema to create content that stands out in today's oversaturated digital landscape.
            </p>
            <p style={{ fontSize: '1.125rem' }}>
              We're not vendors. We're collaborators. We're artists. And we're here to make something 
              extraordinary with you.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <h2 
            className="mb-16 tracking-wider uppercase text-center"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              background: 'linear-gradient(135deg, #BC271C 0%, #8B1810 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            Our Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-[#BC271C]/10 rounded-full">
                <Film className="text-[#BC271C]" size={32} />
              </div>
              <h3 
                className="mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Cinematic First
              </h3>
              <p className="text-black/70 leading-relaxed">
                We approach every project with the visual language of cinema, not corporate video.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-[#BC271C]/10 rounded-full">
                <Award className="text-[#BC271C]" size={32} />
              </div>
              <h3 
                className="mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Craft Over Content
              </h3>
              <p className="text-black/70 leading-relaxed">
                Quality, artistry, and attention to detail are non-negotiable in every frame.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-[#BC271C]/10 rounded-full">
                <Users className="text-[#BC271C]" size={32} />
              </div>
              <h3 
                className="mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                True Collaboration
              </h3>
              <p className="text-black/70 leading-relaxed">
                Your vision meets our expertise in a partnership built on trust and creativity.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-[#BC271C]/10 rounded-full">
                <TrendingUp className="text-[#BC271C]" size={32} />
              </div>
              <h3 
                className="mb-4 tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
              >
                Impact Driven
              </h3>
              <p className="text-black/70 leading-relaxed">
                Beautiful films that don't just look good; they move audiences and drive results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 px-6 lg:px-12 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="aspect-[4/3] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80"
                alt="Production equipment"
                className="h-full w-full border border-black bg-white object-cover scale-90 transition-transform duration-500 hover:scale-100"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <ImageWithFallback
                src={platformCarsImg}
                alt="The Platform podcast set with hosts and vehicles in studio"
                className="h-full w-full border border-black bg-white object-cover scale-90 transition-transform duration-500 hover:scale-100"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80"
                alt="Film editing"
                className="h-full w-full border border-black bg-white object-cover scale-90 transition-transform duration-500 hover:scale-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div 
                className="mb-3 tracking-wider"
                style={{ 
                  fontFamily: 'Lemon Milk, sans-serif',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  background: 'linear-gradient(135deg, #BC271C 0%, #8B1810 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                1,000+
              </div>
              <p className="text-black/70 uppercase tracking-wider" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}>
                Projects
              </p>
            </div>
            
            <div className="text-center">
              <div 
                className="mb-3 tracking-wider"
                style={{ 
                  fontFamily: 'Lemon Milk, sans-serif',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  background: 'linear-gradient(135deg, #BC271C 0%, #8B1810 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                500+
              </div>
              <p className="text-black/70 uppercase tracking-wider" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}>
                Clients
              </p>
            </div>
            
            <div className="text-center">
              <div 
                className="mb-3 tracking-wider"
                style={{ 
                  fontFamily: 'Lemon Milk, sans-serif',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  background: 'linear-gradient(135deg, #BC271C 0%, #8B1810 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                10+
              </div>
              <p className="text-black/70 uppercase tracking-wider" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}>
                Awards
              </p>
            </div>
            
            <div className="text-center">
              <div 
                className="mb-3 tracking-wider"
                style={{ 
                  fontFamily: 'Lemon Milk, sans-serif',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  background: 'linear-gradient(135deg, #BC271C 0%, #8B1810 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                10M+
              </div>
              <p className="text-black/70 uppercase tracking-wider" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}>
                Views
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-20 px-6 lg:px-12 bg-white/40">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 
              className="mb-6 tracking-wider uppercase"
              style={{ 
                fontFamily: 'Lemon Milk, sans-serif',
                background: 'linear-gradient(135deg, #BC271C 0%, #8B1810 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: 'clamp(2rem, 4vw, 3rem)'
              }}
            >
              From Our Film Journal
            </h2>
            <p className="text-black/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
              Insights, techniques, and perspectives on the art of filmmaking and video production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <a
                key={index}
                href={`#${post.slug}`}
                className="group block bg-white hover:bg-white/80 transition-all duration-300 border border-black/10 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span 
                      className="uppercase tracking-wider" 
                      style={{ 
                        fontFamily: 'Lemon Milk, sans-serif', 
                        fontSize: '0.75rem',
                        background: 'linear-gradient(135deg, #BC271C 0%, #8B1810 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {post.category}
                    </span>
                    <span className="text-black/40">•</span>
                    <span className="text-black/60 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-black mb-4 group-hover:text-[#BC271C] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-black/70 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-black/50 text-sm">{post.date}</span>
                    <span 
                      className="uppercase tracking-wider group-hover:translate-x-1 transition-transform" 
                      style={{ 
                        fontFamily: 'Lemon Milk, sans-serif', 
                        fontSize: '0.875rem',
                        background: 'linear-gradient(135deg, #BC271C 0%, #8B1810 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      Read →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="#blog"
              className="inline-block bg-[#BC271C] text-white px-10 py-4 hover:bg-[#9a1f16] transition-colors tracking-wider uppercase"
              style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
            >
              View All Articles
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-12 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 
            className="text-white mb-8 tracking-wider uppercase"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: '1.2'
            }}
          >
            Ready to Create Something Extraordinary?
          </h2>
          <p className="text-white/70 mb-12 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Let's bring your vision to life with the artistry and precision it deserves.
          </p>
          <a 
            href="#contact"
            className="inline-block bg-[#BC271C] text-white px-12 py-5 hover:bg-[#9a1f16] transition-colors tracking-wider uppercase"
            style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
          >
            Start a Project
          </a>
        </div>
      </section>
    </div>
  );
}