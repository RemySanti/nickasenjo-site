import { Phone, Mail, Clock } from 'lucide-react';

export function LocationSection() {
  return (
    <section className="bg-black py-32 px-6 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div>
            <h2 
              className="text-white mb-12 tracking-wider uppercase"
              style={{ 
                fontFamily: 'Lemon Milk, sans-serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: '1.1'
              }}
            >
              Get In Touch
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <Phone className="text-[#BC271C] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 
                    className="text-white mb-2 tracking-wider uppercase"
                    style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
                  >
                    Phone
                  </h3>
                  <a 
                    href="tel:+16108448696"
                    className="text-white/70 hover:text-[#BC271C] transition-colors"
                  >
                    (610) 844-8696
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-[#BC271C] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 
                    className="text-white mb-2 tracking-wider uppercase"
                    style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
                  >
                    Email
                  </h3>
                  <a 
                    href="mailto:nick@nickasenjofilms.com"
                    className="text-white/70 hover:text-[#BC271C] transition-colors"
                  >
                    nick@nickasenjofilms.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-[#BC271C] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 
                    className="text-white mb-2 tracking-wider uppercase"
                    style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
                  >
                    Hours
                  </h3>
                  <p className="text-white/70">
                    Monday - Friday: 9:00 AM - 9:00 PM<br />
                    Saturday - Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Service Area */}
          <div>
            <h3 
              className="text-white mb-8 tracking-wider uppercase"
              style={{ 
                fontFamily: 'Lemon Milk, sans-serif',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)'
              }}
            >
              Serving the Lehigh Valley & Beyond
            </h3>

            <div className="space-y-6 text-white/70">
              <p className="leading-relaxed" style={{ fontSize: '1.125rem' }}>
                Based in the heart of downtown Allentown, we proudly serve clients throughout 
                the <span className="text-[#BC271C]">Lehigh Valley region</span> including:
              </p>

              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#BC271C] rounded-full" />
                    Allentown
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#BC271C] rounded-full" />
                    Bethlehem
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#BC271C] rounded-full" />
                    Easton
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#BC271C] rounded-full" />
                    Emmaus
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#BC271C] rounded-full" />
                    Whitehall
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#BC271C] rounded-full" />
                    Kutztown
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#BC271C] rounded-full" />
                    Nazareth
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#BC271C] rounded-full" />
                    Macungie
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#BC271C] rounded-full" />
                    Catasauqua
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#BC271C] rounded-full" />
                    Quakertown
                  </li>
                </ul>
              </div>

              <p className="leading-relaxed pt-6" style={{ fontSize: '1.125rem' }}>
                We also provide video production services to clients in 
                <span className="text-[#BC271C]"> Philadelphia</span>, 
                <span className="text-[#BC271C]"> New York City</span>, and nationwide.
              </p>

              <div className="mt-8 p-6 border border-white/20 bg-white/5">
                <div className="flex items-start gap-3 mb-3">
                  <svg className="w-6 h-6 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <div>
                    <p 
                      className="text-white mb-2 tracking-wider uppercase"
                      style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
                    >
                      5.0 Star Rating
                    </p>
                    <p className="text-white/70">
                      166+ Five-Star Google Reviews from satisfied clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}