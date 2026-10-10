import { Building2, Car, MapPin, Phone, Mail, Store, UtensilsCrossed, Warehouse } from 'lucide-react';
import { ServiceFlowBreadcrumb } from '../ServiceFlowBreadcrumb';
import { citySiloMedia } from './citySiloMedia';
import { OWNER_EMAIL, mailtoOwner } from '../../../config/siteContact';

export function WhitehallVideoPage() {
  return (
    <div className="bg-[#EEEEE8] min-h-screen pt-20">
      <ServiceFlowBreadcrumb
        items={[
          { label: 'Services', href: '#services' },
          { label: 'Commercial video', href: '#service-commercial-video' },
          { label: 'Whitehall' },
        ]}
      />
      <section className="relative h-[70vh] bg-black flex items-center justify-center overflow-hidden">
        <img
          src={citySiloMedia.whitehall.hero}
          alt={citySiloMedia.whitehall.heroAlt}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/88 z-10" aria-hidden />
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <MapPin className="w-12 h-12 text-[#BC271C] mx-auto mb-6" />
          <h1
            className="text-white mb-6 tracking-wider uppercase"
            style={{
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: '1.1',
            }}
          >
            Whitehall Commercial Video Production
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto mb-4" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
            MacArthur Road corridor, retail destinations, and township-scale brands
          </p>
          <p className="text-white/60">
            Serving Whitehall Township businesses from the Lehigh Valley Mall area to Route 22 and Cedar Crest Boulevard
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="mb-6 tracking-wider uppercase"
                style={{
                  fontFamily: 'Lemon Milk, sans-serif',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                }}
              >
                Commercial video built for a high-traffic market
              </h2>
              <p className="text-black/70 mb-6" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                Whitehall is its own economic hub: big-box and specialty retail, automotive groups, medical offices, and
                hospitality along one of the busiest commercial spines in the Lehigh Valley. Campaigns here need to read
                clearly on phones in parking lots and hold up on in-store displays.
              </p>
              <p className="text-black/70" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                We are minutes away in Allentown and routinely shoot along the MacArthur Road and Cedar Crest corridors,
                with the same crew standards we bring to downtown and regional work.
              </p>
            </div>
            <div className="bg-[#EEEEE8] p-12 border border-black/10">
              <div className="aspect-video overflow-hidden border border-black/10 mb-6 bg-black/5">
                <img
                  src={citySiloMedia.whitehall.aside}
                  alt={citySiloMedia.whitehall.asideAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-black/60 text-sm text-center">Retail, automotive, and real estate content with cinematic polish</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <h2
            className="text-center mb-16 tracking-wider uppercase"
            style={{
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
            }}
          >
            Industries we serve in Whitehall
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-black/10">
              <Store className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 className="mb-3 tracking-wider uppercase" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}>
                Retail & shopping
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Store openings, seasonal campaigns, and social-first cuts for high-foot-traffic locations
              </p>
              <p className="text-black/50 text-xs">Target: mall-adjacent retail, specialty shops, franchise locations</p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Car className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 className="mb-3 tracking-wider uppercase" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}>
                Automotive
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Inventory features, brand spots, and service department messaging tuned for search and paid media
              </p>
              <p className="text-black/50 text-xs">Target: dealer groups, service centers, fleet operators</p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Building2 className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 className="mb-3 tracking-wider uppercase" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}>
                Commercial real estate
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Property tours, landlord leasing films, and tenant success stories along major corridors
              </p>
              <p className="text-black/50 text-xs">Target: brokers, property managers, mixed-use developments</p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <UtensilsCrossed className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 className="mb-3 tracking-wider uppercase" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}>
                Dining & hospitality
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Menu launches, catering reels, and fast-casual brand refreshes built for retention
              </p>
              <p className="text-black/50 text-xs">Target: restaurants, hotel groups, catering brands</p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Building2 className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 className="mb-3 tracking-wider uppercase" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}>
                Healthcare & professional services
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Patient-friendly explainers, provider profiles, and trust-forward content for competitive corridors
              </p>
              <p className="text-black/50 text-xs">Target: medical practices, dental, legal, financial</p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Warehouse className="w-10 h-10 text-[#BC271C] mb-4" />
              <h3 className="mb-3 tracking-wider uppercase" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}>
                Logistics & light industrial
              </h3>
              <p className="text-black/70 text-sm mb-4">
                Facility tours, recruitment, and safety messaging for operations along I-78 and Route 22 access
              </p>
              <p className="text-black/50 text-xs">Target: distribution, manufacturing support, contractors</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2
            className="mb-6 tracking-wider uppercase"
            style={{
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
            }}
          >
            Ready for Whitehall-focused production?
          </h2>
          <p className="text-black/70 mb-8" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
            Tell us about your storefront, property, or campaign - we will match format, crew, and turnaround to the brief.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-black/70">
              <Phone className="w-5 h-5 text-[#BC271C]" />
              <a href="tel:+16108448696" className="hover:text-[#BC271C] transition-colors">
                (610) 844-8696
              </a>
            </div>
            <div className="flex items-center gap-2 text-black/70">
              <Mail className="w-5 h-5 text-[#BC271C]" />
              <a href={mailtoOwner()} className="hover:text-[#BC271C] transition-colors">
                {OWNER_EMAIL}
              </a>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-block bg-[#BC271C] text-white px-12 py-5 hover:bg-[#9a1f16] transition-colors tracking-wider uppercase"
            style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '1rem' }}
          >
            Start your project
          </a>
        </div>
      </section>
    </div>
  );
}
