"use client";

import Image from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  webpSrc?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  loading?: "lazy" | "eager";
  fill?: boolean;
  style?: React.CSSProperties;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  webpSrc,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes = "100vw",
  quality = 90,
  loading = "lazy",
  fill = false,
  style,
}) => {
  const [imgSrc, setImgSrc] = useState(webpSrc || src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && webpSrc && imgSrc === webpSrc) {
      // Fallback to original format if WebP fails
      setImgSrc(src);
      setHasError(true);
    }
  };

  const imageProps = {
    src: imgSrc,
    alt,
    className: `${className} transition-all duration-300`,
    priority,
    quality,
    onError: handleError,
    style,
    ...(loading === "lazy" && { loading: "lazy" as const }),
    ...(sizes && !fill && { sizes }),
    ...(fill && { fill: true }),
    ...(!fill && width && height && { width, height }),
  };

  return <Image {...imageProps} alt={alt} />;
};

export default OptimizedImage;
