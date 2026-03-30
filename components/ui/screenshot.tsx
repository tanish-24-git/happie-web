"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface ScreenshotProps {
  srcLight: string;
  srcDark?: string;
  srcHover?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function Screenshot({
  srcLight,
  srcDark,
  srcHover,
  alt,
  width,
  height,
  className,
}: ScreenshotProps) {
  const { resolvedTheme } = useTheme();
  const [src, setSrc] = useState<string | null>(null);
  const [baseSrc, setBaseSrc] = useState<string | null>(null);

  useEffect(() => {
    let resolved = srcLight;
    if (resolvedTheme) {
      resolved = resolvedTheme === "light" ? srcLight : srcDark || srcLight;
    }
    setBaseSrc(resolved);
    setSrc(resolved);
  }, [resolvedTheme, srcLight, srcDark]);

  if (!src) {
    return (
      <div
        style={{ width, height }}
        className={cn("bg-muted", className)}
        aria-label={alt}
      />
    );
  }

  return (
    <div
      onMouseEnter={() => srcHover && setSrc(srcHover)}
      onMouseLeave={() => setSrc(baseSrc)}
      className="relative w-full h-full cursor-pointer transition-all duration-300"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn("transition-opacity duration-300", className)}
      />
    </div>
  );
}
