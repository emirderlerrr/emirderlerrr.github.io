import { MouseEvent, ReactNode, useRef, useState } from 'react';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

export function SpotlightCard({
  children,
  className = '',
  innerClassName = '',
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCoords({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-2xl p-[1px] transition-transform duration-200 ${className}`}
      style={{
        background: isHovered
          ? `radial-gradient(380px circle at ${coords.x}px ${coords.y}px, rgba(99, 102, 241, 0.5), rgba(16, 185, 129, 0.22) 45%, rgba(255, 255, 255, 0.08) 80%)`
          : 'rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Glassmorphism inner container */}
      <div
        className={`relative h-full w-full overflow-hidden rounded-[15px] bg-[#0B0B10]/85 backdrop-blur-[16px] ${innerClassName}`}
      >
        {/* Subtle inner spotlight sheen */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 transition-opacity duration-200"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(320px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.045), transparent 70%)`,
          }}
        />
        <div className="relative z-10 h-full w-full">{children}</div>
      </div>
    </div>
  );
}
