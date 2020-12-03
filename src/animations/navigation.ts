import gsap from "gsap"

export default function() {
  gsap.from(".navigation", {
    scrollTrigger: {
      start: "top top",
      trigger: ".navigation",
      toggleActions: "play none none none"
    },
    y: -200,
    opacity: 0,
    duration: 1,
  });
}