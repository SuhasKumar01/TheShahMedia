"use client";

import { ReactNode, forwardRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useScrollTracking } from "@/contexts/ScrollTrackingContext";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "slideInBottom";
  delay?: number;
  duration?: number;
  threshold?: number;
}

const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(
  ({ children, className, animation = "fadeInUp", delay = 0, duration = 0.8, threshold = 0.1 }, forwardedRef) => {
    const { isScrollTrackingDisabled } = useScrollTracking();
    const { ref, isInView } = useScrollAnimation({ 
      threshold, 
      disabled: isScrollTrackingDisabled 
    });

    // If scroll tracking is disabled, show content immediately
    const shouldAnimate = !isScrollTrackingDisabled;
    const showContent = !shouldAnimate || isInView;

    const animationStyles = {
      opacity: showContent ? 1 : 0,
      transform: getTransform(animation, showContent),
      transition: shouldAnimate ? `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s` : 'none',
    };

    return (
      <div
        ref={(node) => {
          ref(node);
          if (typeof forwardedRef === 'function') {
            forwardedRef(node);
          } else if (forwardedRef) {
            forwardedRef.current = node;
          }
        }}
        className={cn("transition-all", className)}
        style={animationStyles}
      >
        {children}
      </div>
    );
  }
);

AnimatedSection.displayName = "AnimatedSection";

function getTransform(animation: string, isInView: boolean) {
  if (isInView) return "translateX(0) translateY(0) scale(1)";

  switch (animation) {
    case "fadeInUp":
      return "translateY(30px)";
    case "fadeInLeft":
      return "translateX(-30px)";
    case "fadeInRight":
      return "translateX(30px)";
    case "scaleIn":
      return "scale(0.95)";
    case "slideInBottom":
      return "translateY(50px)";
    default:
      return "translateY(30px)";
  }
}

interface StaggeredListProps {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
  staggerDelay?: number;
}

export function StaggeredList({ children, className, itemClassName, staggerDelay = 100 }: StaggeredListProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <AnimatedSection
          key={index}
          className={itemClassName}
          delay={index * (staggerDelay / 1000)}
          animation="fadeInUp"
        >
          {child}
        </AnimatedSection>
      ))}
    </div>
  );
}

export default AnimatedSection;
