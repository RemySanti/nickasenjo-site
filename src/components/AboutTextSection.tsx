import { ImageWithFallback } from './figma/ImageWithFallback';
import nickMainPageImage from '../../../images/Nick Main Page.jpg?url';

export function AboutTextSection() {
  return (
    <section 
      className="py-32 px-6 lg:px-12 relative overflow-hidden"
      style={{
        backgroundColor: 'transparent',
        position: 'relative'
      }}
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Stylized Header */}
        <div className="text-center mb-16">
          <h2 
            className="tracking-wider"
            style={{ 
              fontFamily: 'Lemon Milk, sans-serif',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #000000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.05em',
              fontWeight: '700'
            }}
          >
            Meet Nick Asenjo Films
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <ImageWithFallback
              src={nickMainPageImage}
              alt="Video Production Camera"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 space-y-8">
            <p className="text-black text-lg md:text-xl leading-relaxed">
              At Nick Asenjo Films, we're redefining the art of visual storytelling through the lens of{' '}
              <span 
                style={{ 
                  fontFamily: 'Lemon Milk, sans-serif',
                  background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #000000 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                experience, precision, and creativity
              </span>
              . With over 20 years in the industry, we've built a reputation as a{' '}
              <span 
                style={{ 
                  fontFamily: 'Lemon Milk, sans-serif',
                  background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #000000 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                full-service video production studio and creative partner
              </span>{' '}
              for brands that value artistry as much as results.
            </p>

            <p className="text-black text-lg md:text-xl leading-relaxed">
              Based in the{' '}
              <span 
                style={{ 
                  fontFamily: 'Lemon Milk, sans-serif',
                  background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #000000 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Lehigh Valley
              </span>
              , we bridge{' '}
              <span 
                style={{ 
                  fontFamily: 'Lemon Milk, sans-serif',
                  background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #000000 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                artistry and strategy
              </span>{' '}
              to deliver cinematic visuals that resonate with audiences and elevate brands. Every frame we create is driven by{' '}
              <span 
                style={{ 
                  fontFamily: 'Lemon Milk, sans-serif',
                  background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #000000 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                purpose, emotion, and a relentless pursuit of excellence
              </span>
              .
            </p>

            <p className="text-black text-lg md:text-xl leading-relaxed">
              Whether it's shaping the identity of a brand, crafting powerful music visuals, or producing large-scale commercial campaigns, Nick Asenjo Films delivers more than content—we create{' '}
              <span 
                style={{ 
                  fontFamily: 'Lemon Milk, sans-serif',
                  background: 'linear-gradient(135deg, #BC271C 0%, #BC271C 70%, #000000 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                impactful experiences
              </span>{' '}
              that move people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}