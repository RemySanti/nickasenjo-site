import { useState } from 'react';
import { Play } from 'lucide-react';

interface WorkItem {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  price?: string;
}

const workItems: WorkItem[] = [
  // Commercial - Starting at $4,000
  {
    id: 1,
    title: 'Commercial Video Production',
    subtitle: 'Multi-Brand Showcase & Strategic Brand Storytelling',
    category: 'Commercial',
    thumbnail: 'https://img.youtube.com/vi/ki1syP3UJFE/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/ki1syP3UJFE',
    price: 'Starting at $4,000'
  },
  {
    id: 2,
    title: 'Commercial Video Production for VAW Roofing Solutions',
    subtitle: 'Residential & Commercial Roofing Services',
    category: 'Commercial',
    thumbnail: 'https://img.youtube.com/vi/LmbFR3nnTeI/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/LmbFR3nnTeI',
    price: 'Starting at $4,000'
  },
  {
    id: 3,
    title: 'Lehigh Valley Honda',
    subtitle: 'Automotive Sales Campaign "Buy From Us"',
    category: 'Commercial',
    thumbnail: 'https://img.youtube.com/vi/bHrJL_Yb9Y8/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/bHrJL_Yb9Y8',
    price: 'Starting at $4,000'
  },
  // Brand Building - Starting at $4,000
  {
    id: 4,
    title: 'Brand Building',
    subtitle: 'Importance of Branding, Personal Brand Strategy & Business Growth',
    category: 'Brand Building',
    thumbnail: 'https://img.youtube.com/vi/RBI5ZTZ-slo/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/RBI5ZTZ-slo',
    price: 'Starting at $4,000'
  },
  {
    id: 14,
    title: 'Pinnacle Mastermind',
    subtitle: 'Business Networking, Leadership & Entrepreneur Growth Experience',
    category: 'Brand Building',
    thumbnail: 'https://img.youtube.com/vi/61XMKJ3FX7M/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/61XMKJ3FX7M',
    price: 'Starting at $4,000'
  },
  {
    id: 15,
    title: 'The PM Foundation',
    subtitle: 'Awards Gala & Mental Health Advocacy Event',
    category: 'Brand Building',
    thumbnail: 'https://img.youtube.com/vi/3tVzX_qAfmg/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/3tVzX_qAfmg',
    price: 'Starting at $4,000'
  },
  // Music Videos - Starting at $2,500
  {
    id: 11,
    title: 'LG Izz',
    subtitle: 'Cinematic Hip-Hop Visuals & Artist Development',
    category: 'Music Videos',
    thumbnail: 'https://img.youtube.com/vi/he2kWwEYP5c/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/he2kWwEYP5c',
    price: 'Starting at $2,500'
  },
  {
    id: 12,
    title: 'BIZ',
    subtitle: '"Therapy"',
    category: 'Music Videos',
    thumbnail: 'https://img.youtube.com/vi/HaZlDX4IOeI/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/HaZlDX4IOeI',
    price: 'Starting at $2,500'
  },
  {
    id: 13,
    title: 'LG Izz',
    subtitle: '"Back Outside"',
    category: 'Music Videos',
    thumbnail: 'https://img.youtube.com/vi/upkK3C4azng/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/upkK3C4azng',
    price: 'Starting at $2,500'
  },
  // Weddings - Starting at $4,000
  {
    id: 5,
    title: 'Wedding Videography',
    subtitle: 'Luxury Wedding Film',
    category: 'Weddings',
    thumbnail: 'https://img.youtube.com/vi/fnPtT0ReTmM/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/fnPtT0ReTmM',
    price: 'Starting at $4,000'
  },
  {
    id: 6,
    title: 'Wedding Film for Mr. & Mrs. Abdouche',
    subtitle: 'Cinematic Wedding Videography & Storytelling',
    category: 'Weddings',
    thumbnail: 'https://img.youtube.com/vi/LdR72LQDQq4/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/LdR72LQDQq4',
    price: 'Starting at $4,000'
  },
  {
    id: 7,
    title: 'Montes Wedding',
    subtitle: 'Cinematic Wedding Videography & Timeless Storytelling',
    category: 'Weddings',
    thumbnail: 'https://img.youtube.com/vi/0KDG9NvwHAg/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/0KDG9NvwHAg',
    price: 'Starting at $4,000'
  },
  // Social Media - Starting at $4,000
  {
    id: 8,
    title: 'Daniels BMW',
    subtitle: 'BMW XM Debut Experience & Luxury Automotive Showcase',
    category: 'Social Media',
    thumbnail: 'https://img.youtube.com/vi/8PqMxEKJz-c/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/8PqMxEKJz-c',
    price: 'Starting at $4,000'
  },
  {
    id: 9,
    title: 'Hamsa Exoticz',
    subtitle: 'Grand Opening Event & Retail Brand Launch Content',
    category: 'Social Media',
    thumbnail: 'https://img.youtube.com/vi/cJXS4h65uM0/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/cJXS4h65uM0',
    price: 'Starting at $4,000'
  },
  {
    id: 10,
    title: 'Lashaholics Co – "The Heist"',
    subtitle: 'Beauty Brand Experience, Lash Industry & Cinematic Content',
    category: 'Social Media',
    thumbnail: 'https://img.youtube.com/vi/c6dBUF_ZSFs/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/c6dBUF_ZSFs',
    price: 'Starting at $4,000'
  },
  // The Platform - No Starting Price
  {
    id: 16,
    title: 'Andy Wright',
    subtitle: 'Inside a 7,000-Car Operation',
    category: 'The Platform',
    thumbnail: 'https://img.youtube.com/vi/fcM9ckIicS8/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/fcM9ckIicS8'
  },
  {
    id: 17,
    title: 'Izaac Noel',
    subtitle: 'WYFL Riddim Verse',
    category: 'The Platform',
    thumbnail: 'https://img.youtube.com/vi/lT3DGry7YrA/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/lT3DGry7YrA'
  },
  {
    id: 18,
    title: 'Bri, founder of BBB Fitness & Wellness',
    subtitle: 'The Truth About Women, Fitness, Confidence and Why This Space Matters',
    category: 'The Platform',
    thumbnail: 'https://img.youtube.com/vi/KkygBY9CvR4/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/KkygBY9CvR4'
  }
];

const categories = ['All', 'Commercial', 'Brand Building', 'Music Videos', 'Weddings', 'Social Media', 'The Platform'];

const categoryPricing: { [key: string]: string } = {
  'Commercial': 'Starting at $4,000',
  'Brand Building': 'Starting at $4,000',
  'Music Videos': 'Starting at $2,500',
  'Weddings': 'Starting at $4,000',
  'Social Media': 'Starting at $4,000',
  'The Platform': 'Custom Pricing'
};

export function WorkGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<WorkItem | null>(null);

  const filteredWork = selectedCategory === 'All' 
    ? workItems 
    : workItems.filter(item => item.category === selectedCategory);

  return (
    <section id="work-gallery" className="bg-[#EEEEE8] py-32 px-6 lg:px-12 mt-20 relative overflow-hidden">
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-black mb-6 tracking-wider uppercase"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: '1.1'
            }}
          >
            Our Work
          </h1>
          <p className="text-black/70 max-w-3xl mx-auto" style={{ fontSize: '1.25rem' }}>
            A showcase of cinematic storytelling across commercial, narrative, and documentary projects.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 tracking-wider uppercase transition-all ${
                selectedCategory === category
                  ? 'bg-[#BC271C] text-white'
                  : 'bg-white text-black border-2 border-black hover:bg-black hover:text-white'
              }`}
              style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Category Pricing Display */}
        {selectedCategory !== 'All' && categoryPricing[selectedCategory] && (
          <div className="text-center mb-12">
            <p 
              className="tracking-wider uppercase"
              style={{ 
                fontFamily: 'Lemon Milk, sans-serif',
                fontSize: '1.25rem',
                background: 'linear-gradient(135deg, #BC271C 0%, #8B1810 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {categoryPricing[selectedCategory]}
            </p>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWork.map((item) => (
            <div 
              key={item.id}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(item)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/9] bg-black overflow-hidden mb-4">
                <img 
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#BC271C] rounded-full">
                    <Play size={24} className="text-white ml-1" />
                  </div>
                </div>
                {/* Category Badge */}
                <div 
                  className="absolute top-4 left-4 bg-[#BC271C] text-white px-3 py-1 tracking-wider uppercase"
                  style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.625rem' }}
                >
                  {item.category}
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 
                  className="text-black mb-1 tracking-wider uppercase group-hover:text-[#BC271C] transition-colors"
                  style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
                >
                  {item.title}
                </h3>
                <p className="text-black/60 text-sm mb-1">{item.subtitle}</p>
                {item.price && <p className="text-black/40 text-sm">{item.price}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-6"
            onClick={() => setSelectedVideo(null)}
          >
            <div 
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#BC271C] transition-colors"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
              >
                CLOSE ✕
              </button>

              {/* Video */}
              <div className="aspect-[16/9] bg-black">
                {(selectedVideo.videoUrl.includes('youtube.com') || selectedVideo.videoUrl.includes('youtu.be')) ? (
                  <iframe
                    className="w-full h-full"
                    src={selectedVideo.videoUrl}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  >
                    Your browser does not support the video tag.
                  </iframe>
                ) : (
                  <video
                    className="w-full h-full"
                    controls
                    autoPlay
                    src={selectedVideo.videoUrl}
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>

              {/* Info */}
              <div className="mt-6 text-white">
                <h3 
                  className="mb-2 tracking-wider uppercase"
                  style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1.5rem' }}
                >
                  {selectedVideo.title}
                </h3>
                <p className="text-white/70 mb-1">{selectedVideo.subtitle}</p>
                <p className="text-white/50">{selectedVideo.category}</p>
                {selectedVideo.price && <p className="text-white/50">{selectedVideo.price}</p>}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}