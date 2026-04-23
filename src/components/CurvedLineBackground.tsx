import { useEffect, useRef, useState } from 'react';

interface CurvedLineBackgroundProps {
  className?: string;
  color?: string;
  lineWidth?: number;
}

export function CurvedLineBackground({ 
  className = '', 
  color = '#BC271C',
  lineWidth = 8 
}: CurvedLineBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationFrameRef = useRef<number>();
  const scrollDataRef = useRef({
    scrollY: 0,
    targetScrollY: 0,
    lastScrollY: 0,
    scrollDirection: 0,
    progress: 0,
    targetProgress: 0
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Get device pixel ratio for sharp rendering
    const dpr = window.devicePixelRatio || 1;

    // Resize canvas to match container
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();

    // Handle scroll
    const handleScroll = () => {
      if (!isVisible) return;

      const currentScrollY = window.scrollY;
      const containerTop = container.getBoundingClientRect().top + window.scrollY;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress relative to container
      const scrollProgress = Math.max(0, Math.min(1, 
        (currentScrollY - containerTop + windowHeight / 2) / (containerHeight + windowHeight)
      ));

      // Detect scroll direction
      const direction = currentScrollY > scrollDataRef.current.lastScrollY ? 1 : -1;
      
      scrollDataRef.current.lastScrollY = currentScrollY;
      scrollDataRef.current.targetScrollY = currentScrollY;
      scrollDataRef.current.scrollDirection = direction;
      scrollDataRef.current.targetProgress = scrollProgress;
    };

    // Easing function for smooth transitions
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    // Draw the curved line
    const drawCurve = () => {
      if (!canvas || !ctx) return;

      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Smoothly interpolate values
      scrollDataRef.current.scrollY = lerp(
        scrollDataRef.current.scrollY,
        scrollDataRef.current.targetScrollY,
        0.08
      );

      scrollDataRef.current.progress = lerp(
        scrollDataRef.current.progress,
        scrollDataRef.current.targetProgress,
        0.1
      );

      const progress = scrollDataRef.current.progress;
      const direction = scrollDataRef.current.scrollDirection;

      // Calculate curve parameters based on scroll
      const baseY = height * 0.5;
      const amplitude = height * 0.3;
      const scrollOffset = progress * height * 0.4;
      const deformation = Math.sin(progress * Math.PI) * 50 * direction;

      // Control points for bezier curve
      const startX = -width * 0.1;
      const endX = width * 1.1;
      const midX = width * 0.5;

      const startY = baseY + scrollOffset - deformation;
      const endY = baseY + scrollOffset + deformation * 0.5;
      
      // Multiple control points for smooth S-curve
      const cp1X = width * 0.25;
      const cp1Y = startY + amplitude * Math.sin(progress * Math.PI * 2) - deformation;
      
      const cp2X = width * 0.5;
      const cp2Y = baseY + scrollOffset + amplitude * Math.sin(progress * Math.PI * 3 + 1) + deformation * 0.7;
      
      const cp3X = width * 0.75;
      const cp3Y = endY - amplitude * Math.sin(progress * Math.PI * 2 + 2) + deformation * 0.3;

      // Draw the curve
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      
      // Use cubic bezier curves for smooth S-shape
      ctx.bezierCurveTo(
        cp1X, cp1Y,
        cp2X, cp2Y,
        midX, baseY + scrollOffset + deformation * 0.8
      );
      
      ctx.bezierCurveTo(
        cp3X, cp3Y,
        endX - width * 0.1, endY,
        endX, endY
      );

      // Style the line
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();

      // Add subtle glow effect
      ctx.shadowColor = color;
      ctx.shadowBlur = 20;
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    // Animation loop
    const animate = () => {
      if (!isVisible) return;
      
      drawCurve();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Intersection Observer for visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: '100px' }
    );

    if (container) {
      observer.observe(container);
    }

    // Event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', resizeCanvas);

    // Initial setup
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      observer.disconnect();
    };
  }, [color, lineWidth, isVisible]);

  // Start/stop animation based on visibility
  useEffect(() => {
    if (isVisible) {
      const animate = () => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        const width = canvas.width / dpr;
        const height = canvas.height / dpr;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Smoothly interpolate values
        scrollDataRef.current.scrollY = scrollDataRef.current.scrollY + 
          (scrollDataRef.current.targetScrollY - scrollDataRef.current.scrollY) * 0.08;

        scrollDataRef.current.progress = scrollDataRef.current.progress + 
          (scrollDataRef.current.targetProgress - scrollDataRef.current.progress) * 0.1;

        const progress = scrollDataRef.current.progress;
        const direction = scrollDataRef.current.scrollDirection;

        // Calculate curve parameters
        const baseY = height * 0.5;
        const amplitude = height * 0.3;
        const scrollOffset = progress * height * 0.4;
        const deformation = Math.sin(progress * Math.PI) * 50 * direction;

        const startX = -width * 0.1;
        const endX = width * 1.1;
        const midX = width * 0.5;

        const startY = baseY + scrollOffset - deformation;
        const endY = baseY + scrollOffset + deformation * 0.5;
        
        const cp1X = width * 0.25;
        const cp1Y = startY + amplitude * Math.sin(progress * Math.PI * 2) - deformation;
        
        const cp2X = width * 0.5;
        const cp2Y = baseY + scrollOffset + amplitude * Math.sin(progress * Math.PI * 3 + 1) + deformation * 0.7;
        
        const cp3X = width * 0.75;
        const cp3Y = endY - amplitude * Math.sin(progress * Math.PI * 2 + 2) + deformation * 0.3;

        // Draw curve
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        
        ctx.bezierCurveTo(
          cp1X, cp1Y,
          cp2X, cp2Y,
          midX, baseY + scrollOffset + deformation * 0.8
        );
        
        ctx.bezierCurveTo(
          cp3X, cp3Y,
          endX - width * 0.1, endY,
          endX, endY
        );

        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();

        // Glow effect
        ctx.shadowColor = color;
        ctx.shadowBlur = 20;
        ctx.stroke();
        ctx.shadowBlur = 0;

        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animate();
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible, color, lineWidth]);

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ zIndex: 0 }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
    </div>
  );
}
