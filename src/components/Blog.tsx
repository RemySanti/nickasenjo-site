import { Header } from './Header';
import { Footer } from './Footer';

export function Blog() {
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
    },
    {
      title: "The ROI of Professional Video Marketing for Pennsylvania Businesses",
      excerpt: "Hard data on why video marketing delivers the highest return on investment for businesses across Eastern Pennsylvania.",
      date: "October 28, 2024",
      readTime: "5 min read",
      slug: "blog-video-marketing-roi-pennsylvania",
      category: "Marketing Strategy"
    },
    {
      title: "Behind the Scenes: What Makes a Video Production Company Stand Out",
      excerpt: "An insider's look at the craft, technique, and artistic vision that separates exceptional filmmaking from standard video production.",
      date: "October 20, 2024",
      readTime: "6 min read",
      slug: "blog-behind-scenes-production-company",
      category: "Behind the Scenes"
    }
  ];

  return (
    <div className="min-h-screen bg-[#EEEEE8]">
      <Header currentPage="blog" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-black mb-6" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>
              Film Journal
            </h1>
            <p className="text-black/70 max-w-2xl">
              Insights, techniques, and perspectives on the art of filmmaking and video production in the Lehigh Valley.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <a
                key={index}
                href={`#${post.slug}`}
                className="group block bg-white/40 hover:bg-white/60 transition-all duration-300 border border-black/10"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#BC271C] uppercase tracking-wider" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.75rem' }}>
                      {post.category}
                    </span>
                    <span className="text-black/40">•</span>
                    <span className="text-black/60">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-black mb-4 group-hover:text-[#BC271C] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-black/70 mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-black/50">{post.date}</span>
                    <span className="text-[#BC271C] uppercase tracking-wider" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}>
                      Read →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
