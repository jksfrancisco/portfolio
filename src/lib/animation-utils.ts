// Reusable animation variants and configurations for Framer Motion

// Slide animation variants
export const slideVariants = {
  slideFromLeft: {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  slideFromRight: {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  slideFromTop: {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  slideFromBottom: {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
}

// Scale animation variants
export const scaleVariants = {
  scaleIn: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  },
  scaleOut: {
    hidden: { scale: 1.2, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  },
}

// Rotate animation variants
export const rotateVariants = {
  rotateIn: {
    hidden: { rotate: -10, opacity: 0 },
    visible: { rotate: 0, opacity: 1 },
  },
}

// Custom easing presets
export const easings = {
  smooth: [0.6, 0.05, 0.01, 0.9] as const,
  spring: { type: "spring" as const, stiffness: 100, damping: 15 },
}

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

// Wrap variants with reduced motion support
export const safeVariants = <T extends Record<string, any>>(variants: T): T => {
  if (prefersReducedMotion()) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    } as T
  }
  return variants
}

// Mobile detection helper
export const isMobileDevice = (): boolean => {
  if (typeof window === "undefined") return false
  return window.innerWidth < 768
}

// Get parallax multiplier based on device
export const getParallaxMultiplier = (): number => {
  return isMobileDevice() ? 0.5 : 1
}
