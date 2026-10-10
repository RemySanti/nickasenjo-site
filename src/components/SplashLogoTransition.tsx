import { useEffect, useLayoutEffect, useState, type RefObject } from 'react';
import logo from 'figma:asset/638b1040e0fb8997b710e8b3c9a8e3f38ee499b5.png';

const SPLASH_LOGO_HEIGHT = 128;
const INTRO_MS = 550;
const HOLD_MS = 400;
const TRAVEL_MS = 900;
const EXIT_MS = 500;
const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

type Phase = 'intro' | 'hold' | 'travel' | 'exit' | 'done';

interface SplashLogoTransitionProps {
  desktopAnchorRef: RefObject<HTMLDivElement | null>;
  mobileAnchorRef: RefObject<HTMLDivElement | null>;
  onComplete: () => void;
}

function getActiveAnchorRect(
  desktopAnchorRef: RefObject<HTMLDivElement | null>,
  mobileAnchorRef: RefObject<HTMLDivElement | null>
) {
  const desktop = desktopAnchorRef.current;
  const mobile = mobileAnchorRef.current;

  if (desktop && desktop.offsetParent !== null) {
    return desktop.getBoundingClientRect();
  }

  if (mobile && mobile.offsetParent !== null) {
    return mobile.getBoundingClientRect();
  }

  return null;
}

function computeTravelTransform(target: DOMRect) {
  const fromCenterX = window.innerWidth / 2;
  const fromCenterY = window.innerHeight / 2;
  const toCenterX = target.left + target.width / 2;
  const toCenterY = target.top + target.height / 2;
  const dx = toCenterX - fromCenterX;
  const dy = toCenterY - fromCenterY;
  const scale = target.height / SPLASH_LOGO_HEIGHT;

  return `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(${scale})`;
}

export function SplashLogoTransition({
  desktopAnchorRef,
  mobileAnchorRef,
  onComplete,
}: SplashLogoTransitionProps) {
  const [phase, setPhase] = useState<Phase>('intro');
  const [overlayOpacity, setOverlayOpacity] = useState(1);
  const [logoOpacity, setLogoOpacity] = useState(0);
  const [logoTransform, setLogoTransform] = useState('translate(-50%, -50%) scale(0.94)');
  const [logoTransition, setLogoTransition] = useState(`transform ${INTRO_MS}ms ${EASE}, opacity ${INTRO_MS}ms ease-out`);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete();
      return;
    }

    const introFrame = requestAnimationFrame(() => {
      setLogoOpacity(1);
      setLogoTransform('translate(-50%, -50%) scale(1)');
    });

    const holdTimer = window.setTimeout(() => setPhase('hold'), INTRO_MS);

    return () => {
      cancelAnimationFrame(introFrame);
      window.clearTimeout(holdTimer);
    };
  }, [onComplete]);

  useEffect(() => {
    if (phase === 'hold') {
      const travelTimer = window.setTimeout(() => setPhase('travel'), HOLD_MS);
      return () => window.clearTimeout(travelTimer);
    }

    if (phase === 'travel') {
      const exitTimer = window.setTimeout(() => setPhase('exit'), TRAVEL_MS);
      return () => window.clearTimeout(exitTimer);
    }

    if (phase === 'exit') {
      setOverlayOpacity(0);

      const completeTimer = window.setTimeout(() => {
        setPhase('done');
        onComplete();
      }, EXIT_MS);

      return () => window.clearTimeout(completeTimer);
    }
  }, [phase, onComplete]);

  useLayoutEffect(() => {
    if (phase !== 'travel') return;

    const target = getActiveAnchorRect(desktopAnchorRef, mobileAnchorRef);
    if (!target) {
      setPhase('exit');
      return;
    }

    setLogoTransition('none');
    setLogoTransform('translate(-50%, -50%) scale(1)');

    const startTravel = () => {
      setLogoTransition(`transform ${TRAVEL_MS}ms ${EASE}`);
      setLogoTransform(computeTravelTransform(target));
    };

    const firstFrame = requestAnimationFrame(() => {
      requestAnimationFrame(startTravel);
    });

    return () => cancelAnimationFrame(firstFrame);
  }, [phase, desktopAnchorRef, mobileAnchorRef]);

  if (phase === 'done') {
    return null;
  }

  return (
    <div
      data-splash-overlay
      className="fixed inset-0 z-[100]"
      style={{
        backgroundColor: '#EEEEE8',
        opacity: overlayOpacity,
        transition: phase === 'exit' ? `opacity ${EXIT_MS}ms ease-out` : 'none',
        pointerEvents: phase === 'exit' ? 'none' : 'auto',
      }}
      aria-hidden
    >
      <img
        src={logo}
        alt=""
        className="w-auto"
        style={{
          position: 'fixed',
          left: '50%',
          top: '50%',
          height: SPLASH_LOGO_HEIGHT,
          transform: logoTransform,
          opacity: logoOpacity,
          transition: logoTransition,
          zIndex: 101,
          willChange: 'transform, opacity',
        }}
      />
    </div>
  );
}
