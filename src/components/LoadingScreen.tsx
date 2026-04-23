import { useState, useEffect } from 'react';
import logo from 'figma:asset/638b1040e0fb8997b710e8b3c9a8e3f38ee499b5.png';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simple fade out after 1 second
    const timer = setTimeout(() => {
      setIsVisible(false);
      onLoadComplete();
    }, 1000);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div
      className="fixed inset-0 bg-[#EEEEE8] flex items-center justify-center z-[100]"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-out',
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
    >
      <img
        src={logo}
        alt="Nick Asenjo Films"
        className="h-32 w-auto"
      />
    </div>
  );
}
