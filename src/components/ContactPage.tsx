import { FormEvent, useState } from 'react';
import { Phone, Mail, Clock, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { OWNER_EMAIL, mailtoOwner } from '../config/siteContact';
import { submitSiteContactForm } from '../lib/submitSiteContactForm';

export function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (String(new FormData(form).get('_gotcha') ?? '').trim()) {
      return;
    }
    setStatus('sending');
    setErrorMessage('');
    try {
      await submitSiteContactForm(form);
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  return (
    <section className="bg-black py-32 px-6 lg:px-12 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2
              className="text-white mb-12 tracking-wider uppercase"
              style={{
                fontFamily: 'Lemon Milk, sans-serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: '1.1',
              }}
            >
              Get In Touch
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <Phone className="text-[#BC271C] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-white mb-2 tracking-wider uppercase" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}>
                    Phone
                  </h3>
                  <a href="tel:+16108448696" className="text-white/70 hover:text-[#BC271C] transition-colors">
                    (610) 844-8696
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-[#BC271C] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-white mb-2 tracking-wider uppercase" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}>
                    Email
                  </h3>
                  <a href={mailtoOwner()} className="text-white/70 hover:text-[#BC271C] transition-colors">
                    {OWNER_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-[#BC271C] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-white mb-2 tracking-wider uppercase" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}>
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

          <div>
            <h3
              className="text-white mb-8 tracking-wider uppercase"
              style={{
                fontFamily: 'Lemon Milk, sans-serif',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              }}
            >
              Let&apos;s Create Something
            </h3>

            {status === 'success' ? (
              <div
                className="rounded-sm border border-emerald-500/40 bg-emerald-500/10 px-6 py-8 text-center"
                role="status"
                aria-live="polite"
              >
                <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-emerald-400" aria-hidden />
                <p className="text-white tracking-wide uppercase mb-2" style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.9rem' }}>
                  Message sent
                </p>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="text-sm text-[#BC271C] uppercase tracking-wider underline-offset-4 hover:underline"
                  style={{ fontFamily: 'Lemon Milk, sans-serif' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />

                <div>
                  <label htmlFor="name" className="block text-white/90 mb-2 text-sm" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={status === 'sending'}
                    className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#BC271C] transition-colors disabled:opacity-50"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white/90 mb-2 text-sm" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={status === 'sending'}
                    className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#BC271C] transition-colors disabled:opacity-50"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white/90 mb-2 text-sm" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    disabled={status === 'sending'}
                    className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#BC271C] transition-colors disabled:opacity-50"
                    placeholder="(610) 555-0123"
                  />
                </div>

                <div>
                  <label htmlFor="project-type" className="block text-white/90 mb-2 text-sm" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>
                    Project Type *
                  </label>
                  <select
                    id="project-type"
                    name="project-type"
                    required
                    disabled={status === 'sending'}
                    className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#BC271C] transition-colors disabled:opacity-50"
                  >
                    <option value="" className="bg-black">
                      Select a service...
                    </option>
                    <option value="commercial" className="bg-black">
                      Commercial
                    </option>
                    <option value="brand-film" className="bg-black">
                      Brand Film
                    </option>
                    <option value="music-video" className="bg-black">
                      Music Video
                    </option>
                    <option value="documentary" className="bg-black">
                      Documentary
                    </option>
                    <option value="corporate" className="bg-black">
                      Corporate Video
                    </option>
                    <option value="social-media" className="bg-black">
                      Social Media Content
                    </option>
                    <option value="event" className="bg-black">
                      Event Coverage
                    </option>
                    <option value="other" className="bg-black">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-white/90 mb-2 text-sm" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    disabled={status === 'sending'}
                    className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#BC271C] transition-colors disabled:opacity-50"
                  >
                    <option value="" className="bg-black">
                      Select your budget...
                    </option>
                    <option value="5k-10k" className="bg-black">
                      $5,000 - $10,000
                    </option>
                    <option value="10k-25k" className="bg-black">
                      $10,000 - $25,000
                    </option>
                    <option value="25k-50k" className="bg-black">
                      $25,000 - $50,000
                    </option>
                    <option value="50k+" className="bg-black">
                      $50,000+
                    </option>
                    <option value="not-sure" className="bg-black">
                      Not Sure Yet
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-white/90 mb-2 text-sm" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    disabled={status === 'sending'}
                    className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#BC271C] transition-colors disabled:opacity-50"
                  >
                    <option value="" className="bg-black">
                      When do you need this?
                    </option>
                    <option value="asap" className="bg-black">
                      ASAP (1-2 weeks)
                    </option>
                    <option value="1-month" className="bg-black">
                      Within 1 Month
                    </option>
                    <option value="2-3-months" className="bg-black">
                      2-3 Months
                    </option>
                    <option value="3-6-months" className="bg-black">
                      3-6 Months
                    </option>
                    <option value="flexible" className="bg-black">
                      Flexible Timeline
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/90 mb-2 text-sm" style={{ fontFamily: 'Lemon Milk, sans-serif' }}>
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    disabled={status === 'sending'}
                    className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#BC271C] transition-colors resize-none disabled:opacity-50"
                    placeholder="Share your vision, goals, and any specific requirements..."
                  />
                </div>

                {status === 'error' ? (
                  <div
                    className="flex gap-3 rounded-sm border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200/95"
                    role="alert"
                  >
                    <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-400" aria-hidden />
                    <span>{errorMessage}</span>
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex w-full items-center justify-center gap-2 bg-[#BC271C] text-white px-8 py-4 hover:bg-[#9a1f16] transition-colors tracking-wider uppercase disabled:opacity-60"
                  style={{ fontFamily: 'Lemon Milk, sans-serif', fontSize: '0.875rem' }}
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      Sending
                    </>
                  ) : (
                    'Send inquiry'
                  )}
                </button>

                <p className="text-white/50 text-xs text-center">We&apos;ll respond within 24 hours</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
