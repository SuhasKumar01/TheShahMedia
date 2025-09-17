import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Global functions to control ScrollTrigger
export const disableScrollTrigger = () => {
  if (typeof window !== "undefined") {
    console.log('🚫 DISABLING GSAP SCROLLTRIGGER');
    ScrollTrigger.getAll().forEach(trigger => {
      trigger.disable();
    });
  }
};

export const enableScrollTrigger = () => {
  if (typeof window !== "undefined") {
    console.log('✅ ENABLING GSAP SCROLLTRIGGER');
    ScrollTrigger.getAll().forEach(trigger => {
      trigger.enable();
    });
    ScrollTrigger.refresh(); // Refresh to recalculate positions
  }
};

export interface AnimationConfig {
  trigger?: string | Element
  start?: string
  end?: string
  scrub?: boolean | number
  pin?: boolean
  markers?: boolean
  onEnter?: () => void
  onLeave?: () => void
  onEnterBack?: () => void
  onLeaveBack?: () => void
}

// Helper function to get proper trigger
const getTrigger = (element: string | Element | NodeList, config: AnimationConfig): string | Element => {
  if (config.trigger) return config.trigger
  if (typeof element === 'string') return element
  if (element instanceof Element) return element
  return (element[0] as Element) // For NodeList, use first element as Element
}

// Fade in animation
export const fadeIn = (
  element: string | Element | NodeList,
  config: AnimationConfig = {}
) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: getTrigger(element, config),
        start: config.start || "top 80%",
        end: config.end || "bottom 20%",
        toggleActions: "play none none reverse",
        ...config
      }
    }
  )
}

// Slide in from left
export const slideInLeft = (
  element: string | Element | NodeList,
  config: AnimationConfig = {}
) => {
  return gsap.fromTo(
    element,
    { opacity: 0, x: -100 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: getTrigger(element, config),
        start: config.start || "top 80%",
        toggleActions: "play none none reverse",
        ...config
      }
    }
  )
}

// Slide in from right
export const slideInRight = (
  element: string | Element | NodeList,
  config: AnimationConfig = {}
) => {
  return gsap.fromTo(
    element,
    { opacity: 0, x: 100 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: getTrigger(element, config),
        start: config.start || "top 80%",
        toggleActions: "play none none reverse",
        ...config
      }
    }
  )
}

// Scale in animation
export const scaleIn = (
  element: string | Element | NodeList,
  config: AnimationConfig = {}
) => {
  return gsap.fromTo(
    element,
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: getTrigger(element, config),
        start: config.start || "top 80%",
        toggleActions: "play none none reverse",
        ...config
      }
    }
  )
}

// Stagger animation for multiple elements
export const staggerIn = (
  elements: string | Element | NodeList,
  config: AnimationConfig = {}
) => {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: getTrigger(elements, config),
        start: config.start || "top 80%",
        toggleActions: "play none none reverse",
        ...config
      }
    }
  )
}

// Text reveal animation
export const textReveal = (
  element: string | Element,
  config: AnimationConfig = {}
) => {
  return gsap.fromTo(
    element,
    { 
      opacity: 0, 
      y: 100,
      skewY: 7
    },
    {
      opacity: 1,
      y: 0,
      skewY: 0,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: config.trigger || element,
        start: config.start || "top 80%",
        toggleActions: "play none none reverse",
        ...config
      }
    }
  )
}

// Parallax effect
export const parallax = (
  element: string | Element,
  distance: number = 50,
  config: AnimationConfig = {}
) => {
  return gsap.fromTo(
    element,
    { y: 0 },
    {
      y: distance,
      ease: "none",
      scrollTrigger: {
        trigger: config.trigger || element,
        start: config.start || "top bottom",
        end: config.end || "bottom top",
        scrub: config.scrub !== undefined ? config.scrub : true,
        ...config
      }
    }
  )
}

// Rotate on scroll
export const rotateOnScroll = (
  element: string | Element,
  rotation: number = 360,
  config: AnimationConfig = {}
) => {
  return gsap.fromTo(
    element,
    { rotation: 0 },
    {
      rotation: rotation,
      ease: "none",
      scrollTrigger: {
        trigger: config.trigger || element,
        start: config.start || "top bottom",
        end: config.end || "bottom top",
        scrub: config.scrub !== undefined ? config.scrub : true,
        ...config
      }
    }
  )
}

// Morphing background
export const morphBackground = (
  element: string | Element,
  config: AnimationConfig = {}
) => {
  return gsap.to(element, {
    backgroundPosition: "200% center",
    ease: "none",
    scrollTrigger: {
      trigger: config.trigger || element,
      start: config.start || "top bottom",
      end: config.end || "bottom top",
      scrub: config.scrub !== undefined ? config.scrub : true,
      ...config
    }
  })
}

// Counter animation
export const counterAnimation = (
  element: string | Element,
  endValue: number,
  config: AnimationConfig = {}
) => {
  const obj = { value: 0 }
  
  return gsap.to(obj, {
    value: endValue,
    duration: 2,
    ease: "power2.out",
    onUpdate: function() {
      if (typeof element === 'string') {
        const el = document.querySelector(element)
        if (el) el.textContent = Math.round(obj.value).toString()
      } else if (element instanceof Element) {
        element.textContent = Math.round(obj.value).toString()
      }
    },
    scrollTrigger: {
      trigger: config.trigger || element,
      start: config.start || "top 80%",
      toggleActions: "play none none reverse",
      ...config
    }
  })
}

// Magnetic effect for buttons
export const magneticEffect = (element: string | Element) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element
  if (!el) return

  const handleMouseMove = (e: Event) => {
    const mouseEvent = e as MouseEvent
    const rect = el.getBoundingClientRect()
    const x = mouseEvent.clientX - rect.left - rect.width / 2
    const y = mouseEvent.clientY - rect.top - rect.height / 2
    
    gsap.to(el, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out"
    })
  }

  const handleMouseLeave = () => {
    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "power2.out"
    })
  }

  el.addEventListener('mousemove', handleMouseMove)
  el.addEventListener('mouseleave', handleMouseLeave)

  return () => {
    el.removeEventListener('mousemove', handleMouseMove)
    el.removeEventListener('mouseleave', handleMouseLeave)
  }
}

// Smooth scroll to element
export const smoothScrollTo = (target: string | Element, offset: number = 0) => {
  return gsap.to(window, {
    duration: 1.5,
    scrollTo: {
      y: target,
      offsetY: offset
    },
    ease: "power2.inOut"
  })
}

// Page transition
export const pageTransition = {
  enter: (element: string | Element) => {
    return gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
  },
  exit: (element: string | Element) => {
    return gsap.to(
      element,
      { opacity: 0, y: -50, duration: 0.5, ease: "power2.in" }
    )
  }
}

// Cleanup function for ScrollTrigger
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh()
}

export const killAllScrollTriggers = () => {
  ScrollTrigger.killAll()
}

// Create timeline for complex animations
export const createTimeline = (config: AnimationConfig = {}) => {
  return gsap.timeline({
    scrollTrigger: {
      ...config
    }
  })
}
