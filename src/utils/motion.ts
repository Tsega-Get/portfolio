import type { Variants } from "framer-motion";

/**
 * A simple variant for text that slides down and fades in.
 * @param delay - The delay before the animation starts.
 */
export const textVariant = (delay: number = 0): Variants => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

/**
 * A generic fadeIn animation variant.
 * @param direction - The direction from which the element should fade in.
 * @param type - The type of transition (e.g., "spring", "tween").
 * @param delay - The delay before the animation starts.
 * @param duration - The duration of the animation.
 */
export const fadeIn = (
  direction: "left" | "right" | "up" | "down",
  // FIXED: Changed 'string' to a more specific type
  type: "spring" | "tween" | "inertia" | "keyframes",
  delay: number,
  duration: number
): Variants => {
  const x = direction === "left" ? 100 : direction === "right" ? -100 : 0;
  const y = direction === "up" ? 100 : direction === "down" ? -100 : 0;

  return {
    hidden: { x, y, opacity: 0 },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

/**
 * A zoomIn animation variant.
 * @param delay - The delay before the animation starts.
 * @param duration - The duration of the animation.
 */
export const zoomIn = (delay: number, duration: number): Variants => ({
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

/**
 * A slideIn animation variant.
 * @param direction - The direction from which the element should slide in.
 * @param type - The type of transition (e.g., "spring", "tween").
 * @param delay - The delay before the animation starts.
 * @param duration - The duration of the animation.
 */
export const slideIn = (
  direction: "left" | "right" | "up" | "down",
  // FIXED: Changed 'string' to a more specific type
  type: "spring" | "tween" | "inertia" | "keyframes",
  delay: number,
  duration: number
): Variants => {
  const x = direction === "left" ? "-100%" : direction === "right" ? "100%" : 0;
  const y = direction === "up" ? "100%" : direction === "down" ? "100%" : 0;

  return {
    hidden: { x, y },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

/**
 * A container variant for staggering the animation of its children.
 * @param staggerChildren - The delay between each child's animation.
 * @param delayChildren - The delay before the first child's animation starts.
 */
export const staggerContainer = (
  staggerChildren: number,
  delayChildren: number = 0
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
