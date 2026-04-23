import { Phone, Mail, Clock } from 'lucide-react';

export function ContactPage() {
  return (
    <section className="bg-black py-32 px-6 lg:px-12 min-h-screen">
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
              Let's Create Something
            </h3>

            {/* Contact Form */}
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-white/90 mb-2 text-sm"
                  style={{ fontFamily: 'Lemon Milk, sans-serif' }}
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#BC271C] transition-colors"
                  placeholder="John Smith"
                />
              </div>

              {/* Email */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-white/90 mb-2 text-sm"
                  style={{ fontFamily: 'Lemon Milk, sans-serif' }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#BC271C] transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label 
                  htmlFor="phone" 
                  className="block text-white/90 mb-2 text-sm"
                  style={{ fontFamily: 'Lemon Milk, sans-serif' }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#BC271C] transition-colors"
                  placeholder="(610) 555-0123"
                />
              </div>

              {/* Project Type */}
              <div>
                <label 
                  htmlFor="project-type" 
                  className="block text-white/90 mb-2 text-sm"
                  style={{ fontFamily: 'Lemon Milk, sans-serif' }}
                >
                  Project Type *
                </label>
                <select
                  id="project-type"
                  name="project-type"
                  required
                  className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#BC271C] transition-colors"
                >
                  <option value="" className="bg-black">Select a service...</option>
                  <option value="commercial" className="bg-black">Commercial</option>
                  <option value="brand-film" className="bg-black">Brand Film</option>
                  <option value="music-video" className="bg-black">Music Video</option>
                  <option value="documentary" className="bg-black">Documentary</option>
                  <option value="corporate" className="bg-black">Corporate Video</option>
                  <option value="social-media" className="bg-black">Social Media Content</option>
                  <option value="event" className="bg-black">Event Coverage</option>
                  <option value="other" className="bg-black">Other</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label 
                  htmlFor="budget" 
                  className="block text-white/90 mb-2 text-sm"
                  style={{ fontFamily: 'Lemon Milk, sans-serif' }}
                >
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#BC271C] transition-colors"
                >
                  <option value="" className="bg-black">Select your budget...</option>
                  <option value="5k-10k" className="bg-black">$5,000 - $10,000</option>
                  <option value="10k-25k" className="bg-black">$10,000 - $25,000</option>
                  <option value="25k-50k" className="bg-black">$25,000 - $50,000</option>
                  <option value="50k+" className="bg-black">$50,000+</option>
                  <option value="not-sure" className="bg-black">Not Sure Yet</option>
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label 
                  htmlFor="timeline" 
                  className="block text-white/90 mb-2 text-sm"
                  style={{ fontFamily: 'Lemon Milk, sans-serif' }}
                >
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#BC271C] transition-colors"
                >
                  <option value="" className="bg-black">When do you need this?</option>
                  <option value="asap" className="bg-black">ASAP (1-2 weeks)</option>
                  <option value="1-month" className="bg-black">Within 1 Month</option>
                  <option value="2-3-months" className="bg-black">2-3 Months</option>
                  <option value="3-6-months" className="bg-black">3-6 Months</option>
                  <option value="flexible" className="bg-black">Flexible Timeline</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-white/90 mb-2 text-sm"
                  style={{ fontFamily: 'Lemon Milk, sans-serif' }}
                >
                  Tell Us About Your Project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#BC271C] transition-colors resize-none"
                  placeholder="Share your vision, goals, and any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#BC271C] text-white px-8 py-4 hover:bg-[#9a1f16] transition-colors tracking-wider uppercase"
                style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
              >
                Send Inquiry
              </button>

              <p className="text-white/50 text-xs text-center">
                We'll respond within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}