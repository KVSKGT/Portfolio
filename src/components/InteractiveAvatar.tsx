import React, { useRef, useState, MouseEvent } from "react";

interface InteractiveAvatarProps {
  src: string;
  alt: string;
  className?: string;
}

export function InteractiveAvatar({ src, alt, className = "" }: InteractiveAvatarProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
  );

  const handleMouseMove = (e: MouseEvent<HTMLImageElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation (-10deg to 10deg)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
    );
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: "transform 0.1s ease-out" }}
      className={`shrink-0 rounded-2xl border border-border object-cover shadow-sm ${className}`}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = "none";
      }}
    />
  );
}
