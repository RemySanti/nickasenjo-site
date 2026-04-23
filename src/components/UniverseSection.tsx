export function UniverseSection() {
  return (
    <section id="services" className="bg-[#EEEEE8] py-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-black mb-16 tracking-wider uppercase"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)'
            }}
          >
            Video Production Services in Allentown, PA
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Commercial */}
            <a 
              href="#service-commercial"
              className="space-y-4 group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-black overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80"
                  alt="Commercial Video Production Allentown PA"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 
                className="text-[#BC271C] tracking-wider uppercase group-hover:opacity-70 transition-opacity"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
              >
                Commercial
              </h3>
              <p className="text-black/70 text-sm">
                High-impact advertising content for Lehigh Valley businesses and brands worldwide.
              </p>
            </a>

            {/* Narrative */}
            <a 
              href="#service-narrative"
              className="space-y-4 group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-black overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80"
                  alt="Narrative Film Production Allentown PA"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 
                className="text-[#BC271C] tracking-wider uppercase group-hover:opacity-70 transition-opacity"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
              >
                Narrative
              </h3>
              <p className="text-black/70 text-sm">
                Compelling stories that connect audiences with authentic human experiences.
              </p>
            </a>

            {/* Documentary */}
            <a 
              href="#service-documentary"
              className="space-y-4 group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-black overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80"
                  alt="Documentary Production Allentown PA"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 
                className="text-[#BC271C] tracking-wider uppercase group-hover:opacity-70 transition-opacity"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
              >
                Documentary
              </h3>
              <p className="text-black/70 text-sm">
                Real stories, real people, real impact. Truth told through cinema.
              </p>
            </a>

            {/* Music Videos */}
            <a 
              href="#service-music-video"
              className="space-y-4 group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-black overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80"
                  alt="Music Video Production Allentown PA"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 
                className="text-[#BC271C] tracking-wider uppercase group-hover:opacity-70 transition-opacity"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
              >
                Music Videos
              </h3>
              <p className="text-black/70 text-sm">
                Visual artistry that amplifies the power of music and performance.
              </p>
            </a>

            {/* Corporate - Now in the grid */}
            <a 
              href="#service-corporate"
              className="space-y-4 group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-black overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                  alt="Corporate Video Production Allentown PA"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 
                className="text-[#BC271C] tracking-wider uppercase group-hover:opacity-70 transition-opacity"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
              >
                Corporate
              </h3>
              <p className="text-black/70 text-sm">
                Professional video solutions for businesses and organizations.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}