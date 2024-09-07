import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart none none none",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

export const scrollTriggerCategories = (
  target,
) => {
  ScrollTrigger.create({
    trigger: target,
    start: "top 80%",
    end: "bottom top",
    onEnter: () => gsap.to(target, { opacity: 1, duration: 1 }),
    onLeave: () => gsap.to(target, { opacity: 0 }),
    onEnterBack: () => gsap.to(target, { opacity: 1, duration: 1 }),
    onLeaveBack: () => gsap.to(target, { opacity: 0 }),
  });
};
